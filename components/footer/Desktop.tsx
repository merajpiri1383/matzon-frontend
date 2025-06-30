import { FC } from "react";
import { LinkGroup , type LinkGroupProps } from ".";
import Image from "next/image";
import InamadImage from "@/public/inamad.svg";
import HorizontalLine from "@/public/horizontalLine.svg";
import CodeSandBoxIcon from "@/icons/footer/codeSandBox";
import ExclamationMark from "@/icons/footer/exclamationMark";
import WifiIcon from "@/icons/footer/wifi";
import SendIcon from "@/icons/footer/send";
import InstagramIcon from "@/icons/footer/instagram";


interface Props {
    linkGroup1 : string[],
    linkGroup2 : string[],
    linkGroup3 : string[],
}


const DesktopFooter : FC<Props> = ({ linkGroup1 , linkGroup2 , linkGroup3 }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <p className="anjoman-font text-[48px] font-semibold text-[#434343]">متزون</p>
                    <p className="font-regular text-[16px] text-[#434343] mt-[20px]">“شعار مجموعه”</p>
                </div>

                <div className="flex items-center justify-center gap-[72px]">
                    <LinkGroup links={linkGroup1} />
                    <LinkGroup links={linkGroup2} />
                    <LinkGroup links={linkGroup3} />
                </div>

                <div className="size-[184px] relative">
                    <Image 
                        src={InamadImage}
                        alt="inamad image"
                        fill={true}
                        sizes="100%"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                </div>
            </div>

            <div className="h-[3px] w-full relative my-[20px]">
                <Image
                    src={HorizontalLine}
                    alt="horizontal line"
                    fill={true}
                    sizes="100%"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>

            <div className="flex items-center justify-between p-3">
                <div className="flex items-center justify-start gap-[8px]">
                    <div className="size-[20px]">
                        <ExclamationMark />
                    </div>
                    <p className="font-medium text-[12px] text-[#ABABAB]">
                        تمامی حقوق این سایت مطلعق به متزون می‌باشد.</p>
                </div>

                <div className="flex items-center justify-center gap-[32px]">
                    <div className="size-[24px]">
                        <WifiIcon />
                    </div>
                    <div className="size-[24px]">
                        <SendIcon />
                    </div>
                    <div className="size-[24px]">
                        <InstagramIcon />
                    </div>
                </div>

                <div className="flex items-center justify-start gap-[8px]">
                    <div className="size-[20px]">
                        <CodeSandBoxIcon />
                    </div>
                    <p className="text-[#ABABAB] font-medium text-[12px]">توسعه داده شده توسط تیم متزون</p>
                </div>
            </div>
        </>
    )
};export default DesktopFooter;