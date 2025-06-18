import Image from "next/image";
import { ProjectType } from "@/app/components/projects";
import { FC, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import OpenBookIcon from "@/components/icons/home/openBook";
import LeftArrowCircleIcon from "@/components/icons/home/leftArrowCircle";
import RightArrowCircleIcon from "@/components/icons/home/rightArrowCircle";
import {type Swiper as swiperType} from "swiper/types"

const Project : FC<ProjectType> = (props) => {
    return (
        <div className="grid grid-cols-9 gap-6 pb-20">
            <div className="col-span-5 relative h-[400px]">
                <Image
                    src={props.image}
                    alt="image"
                    fill={true}
                    sizes="100%"
                    className="rounded-[16px]"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>
            <div className="col-span-4 [direction:rtl]">
                <div className="flex items-center justify-start gap-[8px]">
                    <div className="size-[24px]">
                        <OpenBookIcon />
                    </div>
                    <p className="anjoman-font font-black text-[24px] text-[#494949]">ایران سنا</p>
                </div>
                <p className="my-6 text-justify text-[#545454] font-medium text-[16px]">{props.text}</p>

                <div className="grid grid-cols-2 gap-[8px] mt-12">
                    {
                        props.tags.map((tag,index) => {
                            return (
                                <div className="flex items-center justify-start gap-[8px] col-span-1" key={index}>
                                    <div className="size-[20px]">{tag.icon}</div>
                                    <p className="text-[16px]">{tag.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

interface Props {
    projects : ProjectType[],
}

const ProjectsDesktop : FC<Props> = ({ projects }) => {

    const swiperRef = useRef<swiperType | null>(null);

    return (
        <div className="px-20 my-6 relative">
            <Swiper
            slidesPerView={1}
            spaceBetween={90}
            modules={[Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            pagination
            loop={true}
            >
                {
                    projects.map((project,index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Project {...project} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="size-[40px] active:scale-95 transition absolute bottom-0 left-20
                cursor-pointer z-[2]" onClick={() => swiperRef.current?.slidePrev()}>
                <LeftArrowCircleIcon />
            </div>

            <div className="size-[40px] absolute bottom-0 right-20 active:scale-95 transition 
                cursor-pointer z-[2]" onClick={() => swiperRef.current?.slideNext()}>
                <RightArrowCircleIcon />
            </div>
        </div>
    )
};export default ProjectsDesktop;