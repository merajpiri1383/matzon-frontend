"use client"

import dynamic from "next/dynamic";
const ServiceMobile = dynamic(() => import("@/app/components/serviceMobile"), { ssr: false });
import StarIcon from "@/components/icons/home/star";
import useDeviceType from "@/utils/hooks/deviceType";
import CodeImage from "@/public/code.svg";
import ContentImage from "@/public/content.svg";
import CodeIcon from "@/components/icons/home/code";
import DocumentIcon from "@/components/icons/home/document";
import BarcodeIcon from "@/components/icons/home/barcode";
import OpenFolderIcon from "@/components/icons/home/openFolder";
import MagicPenIcon from "@/components/icons/home/magicPen";
import KeyboardOpenIcon from "@/components/icons/home/keyboardOpen";
import CodeBg from "@/public/code-bg.svg";
import ContentBg from "@/public/content-bg.svg";

const Services = () => {

    const deviceType = useDeviceType();

    return (
        <div className="px-6 my-6 md:px-20 [direction:rtl]">
            <div className="flex items-center justify-start gap-3">
                <div className="size-[20px]">
                    <StarIcon />
                </div>
                <p className="anjoman-font font-semibold text-[#434343] text-[20px]">خدمات متزون</p>
            </div>

            {
                deviceType === "mobile" && <>
                    <ServiceMobile
                        title="برنامه نویسی"
                        bg_color="#253E58"
                        logo={CodeImage}
                        bg_image={CodeBg}
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                        سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد."
                        tags={[
                            {
                                icon : <CodeIcon />,
                                text : "طراحی وبسایت"
                            },
                            {
                                icon : <DocumentIcon />,
                                text : "سرور های قدرتمند"
                            },
                            {
                                icon : <BarcodeIcon />,
                                text : "سئو و آنالیز"
                            }
                        ]}
                    />
                    <ServiceMobile
                        title="تولید محتوا"
                        bg_color="#8149C9"
                        logo={ContentImage}
                        bg_image={ContentBg}
                        text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                        استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                        متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                        سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد."
                        tags={[
                            {
                                icon : <OpenFolderIcon />,
                                text : "سناریو نویسی",
                            },
                            {
                                icon : <MagicPenIcon />,
                                text : "ادمین سوشیال مدیا"
                            },
                            {
                                icon : <KeyboardOpenIcon />,
                                text : "تحلیل و بررسی محتوا"
                            }
                        ]}
                    />
                </>
            }
        </div>
    )
}; export default Services;