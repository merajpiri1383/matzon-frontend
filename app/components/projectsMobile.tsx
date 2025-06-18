import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectType } from "@/app/components/projects";
import { FC, useEffect, useRef, useState } from "react";
import ArrowLeftTriangle from "@/components/icons/home/arrowLeftTriangle";


const Project: FC<ProjectType> = (props) => {

    const [show, setShow] = useState<true | false>(false);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.setProperty("--height-show", contentRef.current.scrollHeight + "px");
        }
    }, [show]);

    return (
        <div className="mb-12 [direction:rtl]">
            <div className="h-[202px] mt-6 w-full max-w-[345px] mx-auto rounded-[16px] relative">
                <Image
                    src={props.image}
                    alt={"image"}
                    fill={true}
                    sizes="100%"
                    className="rounded-[16px] shadow-lg"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>

            <div ref={contentRef} className={show ? "project-mobile-show" : "project-mobile-hide"}>
                <p className="text-justify mt-4 font-medium text-[12px] text-[#545454]
                leading-6">{props.text}</p>
                {
                    props.tags.map((tag,index) => {
                        return (
                            <div key={index} className="my-2 flex items-center justify-start gap-2">
                                <div className="size-[20px]">{tag.icon}</div>
                                <p className="text-[12px]">{tag.text}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex items-center justify-center border border-[#4F4F4F]/74 rounded-[12px] p-[8px]
                gap-[8px] w-fit absolute bottom-0 h-[37px] cursor-pointer active:scale-95 transition"
                onClick={() => setShow(!show)}>
                <div className="size-[16px]">
                    <ArrowLeftTriangle />
                </div>
                <p className="font-semibold text-[12px] text-[#4F4F4F]">مشاهده کامل</p>
            </div>
            {
                !show && <div
                    style={{ boxShadow: `0px -50px 25px 20px white` }}
                    className="absolute bottom-0 w-full"></div>
            }
        </div>
    )
}

interface Props {
    projects: ProjectType[],
}

const ProjectsMobile: FC<Props> = ({ projects }) => {
    return (
        <div className="mx-6 pb-6">

            <Swiper
                slidesPerView={1}
                pagination
                modules={[Pagination]}
                loop={true}
                direction="horizontal"
                spaceBetween={90}
            >
                {
                    projects.map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Project {...project} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}; export default ProjectsMobile;