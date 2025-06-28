"use client"
import { StaticImageData } from "next/image";
import dynamic from "next/dynamic";
import useDeviceType from "@/utils/hooks/deviceType";
import Star2Icon from "@/components/icons/home/star2";
import LeftArrowCircleIcon from "@/components/icons/home/leftArrowCircle";
import BlogImage from "@/public/blogImage.svg";
const BlogDesktop = dynamic(() => import("@/app/components/blogDesktop"),{ssr : true});
const BlogMobile = dynamic(() => import("@/app/components/blogMobile"),{ssr : true});

export interface BlogType {
    image : StaticImageData,
    title : string,
    sub_title : string,
    writer : string,
    created_at : string,
}


const Blog = () => {

    const deviceType = useDeviceType();

    const blogs : BlogType[] = [
        {
            image : BlogImage,
            title : "چگونه الگوریتم اینستاگرام در سال 1404 کار میکند؟",
            sub_title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
            created_at : "2 ساعت قبل",
            writer : "نوشته Matzone"
        },{
            image : BlogImage,
            title : "چگونه الگوریتم اینستاگرام در سال 1404 کار میکند؟",
            sub_title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
            created_at : "2 ساعت قبل",
            writer : "نوشته Matzone"
        },{
            image : BlogImage,
            title : "چگونه الگوریتم اینستاگرام در سال 1404 کار میکند؟",
            sub_title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
            created_at : "2 ساعت قبل",
            writer : "نوشته Matzone"
        },{
            image : BlogImage,
            title : "چگونه الگوریتم اینستاگرام در سال 1404 کار میکند؟",
            sub_title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
            created_at : "2 ساعت قبل",
            writer : "نوشته Matzone"
        },{
            image : BlogImage,
            title : "چگونه الگوریتم اینستاگرام در سال 1404 کار میکند؟",
            sub_title : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.",
            created_at : "2 ساعت قبل",
            writer : "نوشته Matzone"
        },
    ];

    return (
        <div className="px-6 md:px-20 [direction:rtl] py-12">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-[8px]">
                    <div className="size-[20px] md:size-[30px]">
                        <Star2Icon />
                    </div>
                    <p className="anjoman-font text-[#434343] text-[20px] font-semibold md:text-[32px]">
                        بلاگ</p>
                </div>

                <div className="hidden md:flex items-center justify-center gap-[8px]">
                    <div className="size-[30px]">
                        <LeftArrowCircleIcon />
                    </div>
                    <p className="text-[#434343] text-[20px] font-semibold">مقالات بیشتر</p>
                </div>
            </div>

            {
                deviceType === "desktop" ? 
                <BlogDesktop /> : 
                <BlogMobile blogs={blogs} />
            }
        </div>
    )
}; export default Blog;