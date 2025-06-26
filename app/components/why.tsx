"use client"
import { FC } from "react";
import Image from "next/image";
import useDeviceType from "@/utils/hooks/deviceType";
import Star2Icon from "@/components/icons/home/star2";
import Logo from "@/public/logo.svg";
import MainComponentIcon from "@/components/icons/home/mainComponent";
import VerticalLine from "@/public/verticalLine.svg"


const Mobile = () => {
    return (
        <>
            <div className="flex items-center justify-between my-6">
                <div>
                    <p className="text-[#434343] font-semibold text-[32px]">+2</p>
                    <p className="text-[#434343] text-[16px] font-semibold">سال تجربه</p>
                </div>
                <div>
                    <p className="text-[#434343] font-semibold text-[32px]">+10</p>
                    <p className="text-[#434343] text-[16px] font-semibold">پروژه موفق</p>
                </div>
                <div>
                    <p className="text-[#434343] font-semibold text-[32px]">24/7</p>
                    <p className="text-[#434343] text-[16px] font-semibold">پشتیبانی بی وقفه</p>
                </div>
            </div>
            <div className="grid grid-cols-9 items-center justify-between my-6">
                <div className="col-span-4">
                    <div className="flex items-center justify-start gap-[8px] my-4">
                        <div className="size-[20px]">
                            <MainComponentIcon />
                        </div>
                        <p className="text-[#4F4F4F] text-[16px] font-bold">اجرای صفر تا صد</p>
                    </div>
                    <div className="flex items-center justify-start gap-[8px] my-4">
                        <div className="size-[20px]">
                            <MainComponentIcon />
                        </div>
                        <p className="text-[#4F4F4F] text-[16px] font-bold">تفکر فروش‌محور</p>
                    </div>
                    <div className="flex items-center justify-start gap-[8px] my-4">
                        <div className="size-[20px]">
                            <MainComponentIcon />
                        </div>
                        <p className="text-[#4F4F4F] text-[16px] font-bold">تیم چندمهارته</p>
                    </div>
                </div>
                <div className="col-span-1">
                    <Image
                        src={VerticalLine}
                        alt="VerticalLine"
                        height={"165"}
                        width={"0"}
                        className="mx-auto"
                    />
                </div>

                <div className="col-span-4">
                    <div className="size-[102px] bg-[#434343] mx-auto rounded-full
                        flex items-center justify-center shadow-[0px_0px_10px_8px_rgba(0,0,0,0.2)]">
                        <div className="size-[95px] relative">
                            <Image
                                src={Logo}
                                alt="Logo"
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const Desktop = () => {
    return (
        <div className="my-12 grid grid-cols-7 py-12">
            <div className="col-span-2 flex flex-col justify-between py-12">
                <div className="text-[#434343] text-center">
                    <p className="font-semibold text-[64px]">+2</p>
                    <p className="font-semibold text-[24px]">سال تجربه</p>
                </div>
                <div className="text-[#434343] text-center">
                    <p className="font-semibold text-[64px]">+10</p>
                    <p className="font-semibold text-[24px]">پروژه موفق</p>
                </div>
                <div className="text-[#434343] text-center">
                    <p className="font-semibold text-[64px]">24/7</p>
                    <p className="font-semibold text-[24px]">پشتیبانی بی وقفه</p>
                </div>
            </div>
            <div className="col-span-3 flex items-center justify-center">
                <div className="w-[381px] h-[575px] bg-linear-[135deg] from-[#E2CE9A] to-[#72451C] mx-auto
                rounded-full flex items-center justify-center shadow-[0px_0px_20px_7.5px_#F7CD5F]/91">
                    <div className="w-[312px] h-[485px] bg-linear-[135deg] from-[#2C2B2B]
                    to-[#3E3E3E]/79 rounded-full flex items-start justify-center">
                        <div className="size-[255px] relative m-6">
                            <Image
                                src={Logo}
                                alt="logo"
                                fill={true}
                                sizes="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2 flex flex-col justify-between py-12">
                <div className="text-[#000000] text-right text-justify">
                    <p className="font-bold text-[24px]">اجرای صفر تا صد</p>
                    <p className="font-medium text-[16px] my-4"> از ایده‌پردازی تا اجرا، بدون ارجاع به بیرون </p>
                </div>
                <div className="text-[#000000] text-right text-justify">
                    <p className="font-bold text-[24px]">تیم چندمهارته</p>
                    <p className="font-medium text-[16px] my-4"> ترکیب تخصص و انعطاف — طراحی، محتوا، برنامه‌نویسی، اجرا</p>
                </div>
                <div className="text-[#000000] text-right text-justify">
                    <p className="font-bold text-[24px]">تفکر فروش‌محور</p>
                    <p className="font-medium text-[16px] my-4">مهم نیست چی دارین؛ مهم اینه که برات می‌فروشیم</p>
                </div>
            </div>
        </div>
    )
}

const Why: FC = () => {

    const deviceType = useDeviceType();
    return (
        <div className="px-6 md:px-20 [direction:rtl] my-12">
            <div className="flex items-center justify-start gap-[8px]">
                <div className="size-[20px] md:size-[30px]">
                    <Star2Icon />
                </div>
                <p className="text-[#434343] text-[20px] anjoman-font font-semibold md:text-[32px]">
                    چرا متزون</p>
            </div>

            {
                deviceType === "desktop" ?
                    <Desktop /> :
                    <Mobile />
            }
        </div>
    )
}; export default Why;