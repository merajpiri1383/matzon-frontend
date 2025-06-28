import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { type BlogType } from "./blog";
import UsersIcon from "@/components/icons/home/users";
import Logo from "@/public/logo.svg";


const Blog : FC<BlogType> = (props) => {
    return (
        <div className="my-4 mx-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,.1)] 
            flex items-center justify-start p-2 rounded-[8px] flex-wrap">
            <div className="size-[112px] relative">
                <Image 
                    src={props.image}
                    alt={props.title}
                    fill={true}
                    sizes="100%"
                    className="rounded-[8px]"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>
            <div className="flex flex-col justify-between w-[185px] p-2 h-[100px]">
                <p className="font-semibold text-[12px] text-[#674117] text-center">{props.title}</p>
                <div className="flex items-center justify-between text-[#817F7F] text-[10px] font-medium">
                    <p>{props.writer}</p>
                    <p>---------</p>
                    <p>{props.created_at}</p>
                </div>
            </div>
        </div>
    )
}

interface Props {
    blogs: BlogType[],
}

const BlogMobile: FC<Props> = ({ blogs }) => {

    const [currentBlog, setBlog] = useState<BlogType | null>(blogs.length > 0 ? blogs[0] : null);
    const [bloglist, setBlogList] = useState<BlogType[][]>([]);

    useEffect(() => {
        const result: BlogType[][] = [];
        for (let i = 0; i < blogs.length; i += 3) {
            result.push(blogs.slice(i, i + 3));
        }

        setBlogList(result);
    }, [blogs]);

    return (
        <div className="my-4">
            <div className="w-full h-[354px] rounded-[16px] relative">
                {
                    currentBlog && <Image
                        src={currentBlog.image}
                        alt={currentBlog.title}
                        fill={true}
                        className="rounded-[16px]"
                        sizes="100%"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                }

                <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] rounded-[16px]
                bg-linear-to-b from-[#0F0F0F]/10 to-[#0F0F0F]"></div>

                <div className="absolute left-0 right-0 bottom-0 z-[2] px-4">
                    <p className="text-[#F4F5FC] my-2 text-[16px] font-bold text-right">
                        {currentBlog?.title}
                    </p>
                    <p className="text-[#F4F5FC] text-[12px] font-semibold text-center mb-8 text-right">
                        {currentBlog?.sub_title}
                    </p>
                    <div className="flex items-center justify-center gap-[14px]">
                        <div className="flex items-center justify-center gap-[8px] p-[8px] bg-[#434343]
                        rounded-t-[15px]">
                            <div className="size-[16px] relative">
                                <Image
                                    src={Logo}
                                    alt="logo"
                                    fill={true}
                                    sizes="100%"
                                />
                            </div>
                            <div className="text-[#F4F5FC] text-[10px] font-regular flex items-center
                                justify-center gap-[4px]">
                                <p>{currentBlog?.writer}</p>
                                <p>|</p>
                                <p>{currentBlog?.created_at}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-[8px] p-[8px] bg-[#434343]
                            rounded-t-[15px]">
                            <div className="size-[16px]">
                                <UsersIcon />
                            </div>
                            <p className="text-[10px] font-regular text-[#F4F5FC]">برنامه نویسی</p>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                spaceBetween={60}
                className="my-4"
            >
                {
                    bloglist.map((itemList, index) => {
                        return (
                            <SwiperSlide key={index}>
                                {
                                    itemList.map((item, index) => {
                                        return (
                                            <Blog key={index} {...item} />
                                        )
                                    })
                                }
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="text-center border-[#4F4F4F] border-[1px] rounded-[16px] p-[8px]
                cursor-pointer hover:bg-[#4F4F4F] transition duration-400 group">
                <p className="text-center font-semibold text-[12px] text-[#4F4F4F]
                group-hover:text-white transition duration-400">مشاهده تمامی مطالب</p>
            </div>
        </div>
    )
}; export default BlogMobile;