import React, { FC, useState } from "react";
import ArrowDownIcon from "@/components/icons/home/arrowDown";
import ArrowUpIcon from "@/components/icons/home/arrowUp";
import Image,{ StaticImageData } from "next/image";

interface ServiceMobileTag {
    icon : React.ReactElement,
    text : string,
}

interface ServiceMobileProps {
    title: string,
    bg_color: string,
    logo: StaticImageData,
    text : string,
    tags : ServiceMobileTag[],
    bg_image : StaticImageData,
}


const ServiceMobile: FC<ServiceMobileProps> = (props) => {

    const [open, setOpen] = useState<true|false>(false);

    return (
        <div className={`bg-[${props.bg_color}] p-[16px] my-4 relative rounded-[8px] overflow-hidden`}>

            <Image 
                src={props.bg_image}
                alt="bg-image"
                fill={true}
                sizes="100%"
                className="z-[2] opacity-[3%]"
                style={{objectFit : "cover",objectPosition : "center"}}
            />

            <div className="flex items-center justify-between relative z-[3]">
                <div className="flex items-center justify-center gap-4">

                    <p className="text-[20px] font-black text-[#F6F6F6] anjoman-font">{props.title}</p>

                    <div className="size-[40px] relative">
                        <Image
                            src={props.logo}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>

                <div className="size-[20px] cursor-pointer active:scale-95 hover:scale-110 transition"
                    onClick={() => setOpen(!open)}>
                    {
                        open ? <ArrowUpIcon /> : <ArrowDownIcon />
                    }
                </div>
            </div>
            

            {
                open && 
                <p className="my-2 text-[#FFFFFF] text-[12px] leading-6 text-justify relative z-[3]">
                    {props.text}
                </p>
            }

            {
                open && 
                <div className="flex items-center justify-start gap-[12px] relative z-[3]">
                    {
                        props.tags.map((item,index) => {
                            return (
                                <div key={index} className="flex items-center justify-center gap-[8px]">
                                    <div className="size-[16px]">
                                        {item.icon}
                                    </div>
                                    <p className="text-[12px] font-medium text-[#FFFFFF]
                                    h-4 overflow-hidden">{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            }

            {
                open && 
                <div className="mt-6 px-[32px] py-[8px] rounded-[8px] bg-[#5B3BFD] relative z-[3]">
                    <p className="text-[14px] text-[#FFFFFF] text-center font-semibold">اطلاعات بیشتر</p>
                </div>
            }
        </div>
    )
}; export default ServiceMobile;