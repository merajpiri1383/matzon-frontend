import { FC } from "react";
import Image from "next/image";
import InamadImage from "@/public/inamad.svg";
import HorizontalLine from "@/public/horizontalLine.svg";
import CodeSandBoxIcon from "@/icons/footer/codeSandBox";
import ExclamationMark from "@/icons/footer/exclamationMark";
import WifiIcon from "@/icons/footer/wifi";
import SendIcon from "@/icons/footer/send";
import InstagramIcon from "@/icons/footer/instagram";



interface LinkGroupProps {
    links: string[],
}

const LinkGroup: FC<LinkGroupProps> = ({ links }) => {
    return (
        <ul className="list-disc">
            {
                links.map((link, index) => {
                    return (
                        <p className="text-center my-[6px] text-[#434343]
                        text-[12px] font-medium" key={index}>{link}</p>
                    )
                })
            }
        </ul>
    )
};

const Footer: FC = () => {

    const linkGroup1: string[] = ["ایکس (توییتر)", "لینکدین", "یوتیوب", "اینستاگرام",];
    const linkGroup2: string[] = [" ایکس (توییتر)", "لینکدین", "یوتیوب", "اینستاگرام",];
    const linkGroup3: string[] = ["مستندات", "پشتیبانی", "پرسش های متداول"];

    return (
        <footer className="p-6 md:p-20 [direction:rtl]">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-anjoman text-[#434343] font-semibold text-[24px]">متزون</p>
                    <p className="text-[#434343] font-regular text-[12px] mt-[16px]">“شعار مجموعه”</p>
                </div>

                <div className="size-[90px] relative">
                    <Image 
                        src={InamadImage}
                        alt="inamad"
                        fill={true}
                        sizes="100%"
                        style={{objectFit : "cover",objectPosition : "center"}}
                    />
                </div>
            </div>

            <div className="flex items-start justify-center gap-[24px] mt-[50px]">
                <LinkGroup links={linkGroup1} />
                <LinkGroup links={linkGroup2} />
                <LinkGroup links={linkGroup3} />
            </div>

            <div className="relative h-[1px] w-full my-[20px]">
                <Image
                    src={HorizontalLine}
                    alt="horizontal line"
                    fill={true}
                    sizes="100%"
                    style={{objectFit : "cover",objectPosition : "center"}}
                />
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center justify-start gap-[8px] mb-[10px]">
                        <div className="size-[16px]">
                            <CodeSandBoxIcon />
                        </div>
                        <p className="text-[#ABABAB] font-medium text-[10px]">
                            توسعه داده شده توسط تیم متزون</p>
                    </div>
                    <div className="flex items-center justify-start gap-[8px]">
                        <div className="size-[16px]">
                            <ExclamationMark />
                        </div>
                        <p className="text-[#ABABAB] font-medium text-[10px]">
                            تمامی حقوق این سایت مطلعق به متزون می‌باشد.</p>
                    </div>
                </div>

                <div className="flex items-center justify-end gap-[11px]">
                    <div className="size-[20px]">
                        <WifiIcon />
                    </div>
                    <div className="size-[20px]">
                        <SendIcon />
                    </div>
                    <div className="size-[20px]">
                        <InstagramIcon />
                    </div>
                </div>
            </div>
        </footer>
    )
}; export default Footer;