"use client"
import { FC } from "react";
import dynamic from "next/dynamic";
import useDeviceType from "@/utils/hooks/deviceType";
const Mobile = dynamic(() => import("@/components/footer/Mobile"), { ssr: true });
const Desktop = dynamic(() => import("@/components/footer/Desktop"),{ssr : true});



export interface LinkGroupProps {
    links: string[],
}

export const LinkGroup: FC<LinkGroupProps> = ({ links }) => {
    return (
        <ul className="list-disc">
            {
                links.map((link, index) => {
                    return (
                        <p className="text-center md:text-right my-[6px] text-[#434343]
                        text-[12px] font-medium md:text-[16px]" key={index}>{link}</p>
                    )
                })
            }
        </ul>
    )
};


const Footer: FC = () => {

    const deviceType = useDeviceType();

    const linkGroup1: string[] = ["ایکس (توییتر)", "لینکدین", "یوتیوب", "اینستاگرام",];
    const linkGroup2: string[] = [" ایکس (توییتر)", "لینکدین", "یوتیوب", "اینستاگرام",];
    const linkGroup3: string[] = ["مستندات", "پشتیبانی", "پرسش های متداول"];

    return (
        <footer className="px-6 md:px-20 [direction:rtl]">
            {
                deviceType === "mobile" ?
                    <Mobile
                        linkGroup1={linkGroup1}
                        linkGroup2={linkGroup2}
                        linkGroup3={linkGroup3}
                    /> :
                    <Desktop
                        linkGroup1={linkGroup1}
                        linkGroup2={linkGroup2}
                        linkGroup3={linkGroup3}
                    />
            }
        </footer>
    )
}; export default Footer;