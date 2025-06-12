import { FC } from "react";
import Image from "next/image";
import {type ServiceProps} from "@/app/components/services";

const ServiceDesktop : FC<ServiceProps> = (props) => {
    return (
        <div className="bg-[#494949] col-span-1 rounded-[16px] px-8 pt-10 pb-6 relative">

            <Image
                src={props.bg_image}
                alt={props.title}
                fill={true}
                sizes="100%"
                className="z-[2] rounded-[16px] opacity-[6%]"
                style={{objectFit : "cover",objectPosition : "center"}}
            />

            <div className="flex items-center justify-between relative z-[3]">
                <p className="text-[#FFFFFF] font-black text-[40px] anjoman-font">{props.title}</p>

                <div className="size-[135px] relative">
                    <Image
                        src={props.logo}
                        alt={props.title}
                        fill={true}
                        sizes="100%"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                </div>
            </div>

            <p className="relative z-[3] text-[#FFFFFF] my-4 text-justify leading-8
                text-[16px]">{props.text}</p>

            <div className="relative z-[3] grid grid-cols-3 justify-center mt-6">
                {
                    props.tags.map((item,index) => {
                        return (
                            <div key={index} className="flex items-center justify-start gap-2">
                                <div className="size-[20px]">
                                    {item.icon}
                                </div>
                                <p className="text-[16px] font-medium text-[#FFFFFF]">{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex items-end justify-between relative z-[3] mt-8">
                <div className="rounded-[8px] px-[32px] py-[8px]" 
                    style={{backgroundColor : props.bg_color}}>
                    <p className="text-[16px] text-[#FFFFFF] font-semibold">اطلاعات بیشتر</p>
                </div>
                <div className="relative size-[235px]">
                    {
                        props.image && 
                        <Image 
                            src={props.image}
                            alt={props.title}
                            fill={true}
                            sizes="100%"
                            style={{objectFit : "cover",objectPosition : "center"}}
                        />
                    }
                </div>
            </div>
        </div>
    )
};export default ServiceDesktop;