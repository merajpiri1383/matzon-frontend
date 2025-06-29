import { FC } from "react";
import Image from "next/image";
import BlueBg from "@/public/bg-blue.svg";
import UsersIcon from "@/components/icons/home/users";



const BlueBox : FC = () => {
    return (
        <div className="p-6 md:p-20 flex">
            <div className="relative w-[345px] h-[253px] md:h-[288px] w-[933px] mx-auto">
                <Image 
                    src={BlueBg}
                    alt="blue bg"
                    sizes="100%"
                    className="rounded-[16px]"
                    fill={true}
                    style={{objectFit : "cover",objectPosition : "center"}}
                />

                <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] md:flex justify-between">
                    <div className="p-[45px] md:p-[60px]">
                        <p className="text-[#FFFFFF] font-semibold text-[16px] text-center leading-8
                            md:w-[264px] md:font-regular">
                            لورم ایپسوم متن ساختگی با تولید سادگی
                            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                        
                        <div className="flex items-center justify-center gap-[16px] mt-[25px] md:w-[264px]">
                            <div className="flex items-center justify-center gap-[8px]
                                bg-inherit p-[8px] w-[120px] rounded-[8px] border-[#FFFFFF] border-[1px]">
                                <p className="text-[#FFFFFF] text-[16px] font-semibold">گزینه</p>
                                <div className="size-[20px]">
                                    <UsersIcon color="#FFFFFF" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-[8px]
                                bg-[#FFFFFF] p-[8px] w-[120px] rounded-[8px]">
                                <p className="text-[#000000] text-[16px] font-semibold">گزینه</p>
                                <div className="size-[20px]">
                                    <UsersIcon color="#000000" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block w-[392px] p-[24px] [direction:rtl]">
                        <p className="text-[#FFFFFF] font-bold text-[24px] text-justify">
                            لورم ایپسوم متن ساختگی با تولید 
                            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};export default BlueBox;