import { FC, useState } from "react";
import Image from "next/image";
import { type BlogType } from "./blog";


const Blog : FC<BlogType> = (props) => {
    return (
        <div className="col-span-1 flex items-center justify-between rounded-[8px] cursor-pointer
            hover:shadow-[0px_0px_15px_1px_rgba(0,0,0,.2)] mx-2 transition duration-400">
            <div className="size-[120px] relative">
                <Image
                    src={props.image}
                    alt={props.title}
                    fill={true}
                    sizes="100%"
                    className="rounded-[8px]"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>
            <div className="w-[250px] p-2 py-3 flex flex-col justify-between h-full">
                <p className="text-justify font-semibold text-[16px] text-[#674117]">{props.title}</p>
                <div className="flex items-center justify-between text-[#817F7F] text-[12px] font-medium">
                    <p>{props.writer}</p>
                    <p>----------------</p>
                    <p>{props.created_at}</p>
                </div>
            </div>
        </div>
    )
}


interface Props {
    blogs : BlogType[],
}

const BlogDesktop : FC<Props> = ({ blogs }) => {

    const [currentBlog,setcurrentBlog] = useState<BlogType | null>(blogs.length > 0 ? blogs[0] : null);

    const groups : string[] = ["برنامه نویسی","تولید محتوا","پیشنهادی"];

    const [activeGroup,setGroup] = useState<string>(groups[0]);

    return (
        <>
            <div className="w-full grid grid-cols-6 gap-[40px]">
                <div className="col-span-4"></div>
                <div className="col-span-2 flex items-center justify-start gap-[16px]">
                    {
                        groups.map((group,index) => {
                            return (
                                <div key={index} className={activeGroup === group ? "underline" : ""}>
                                    <p className={`my-4
                                    ${activeGroup === group ? 
                                    "text-[#434343] text-[20px]" : "text-[#BDBDBD] text-[16px]"}`}>
                                    {group}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="grid grid-cols-6 gap-[40px]">
                <div className="col-span-4">
                    <div className="w-full h-[537px] relative">
                        {
                            currentBlog && <Image
                                src={currentBlog.image}
                                alt={currentBlog.title}
                                fill={true}
                                sizes="100%"
                                className="rounded-[16px]"
                                style={{objectFit : "cover",objectPosition : "center"}}
                            />
                        }

                        <div className="absolute z-[1] top-0 left-0 right-0 bottom-0
                        bg-linear-to-b from-[#0F0F0F]/0 to-[#0F0F0F]/67 rounded-[16px]"></div>

                        <div className="absolute bottom-0 left-0 right-0 z-[2]">
                            <p className="text-center text-[#F4F5FC] font-bold text-[32px]">
                                {currentBlog?.title}
                            </p>
                            <p className="mt-4 mb-16 text-center text-[#F4F5FC] font-semibold text-[16px]">
                                {currentBlog?.sub_title}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-1 h-[537px] 
                    overflow-y-scroll gap-[40px] [&::-webkit-scrollbar]:hidden pb-6">
                    {
                        blogs.map((blog,index) => {
                            return (
                                <Blog key={index} {...blog} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};export default BlogDesktop;