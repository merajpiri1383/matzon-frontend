import Image from "next/image";
import ProfileIcon from "@/icons/header/profile";
import Logo from "@/public/logo.svg";


const DesktopHeader = () => {
    return (
        <div className="flex items-center justify-between px-20 py-8">
            <div className="flex items-center justify-center [direction:rtl] font-medium text-[20px]
                gap-[40px]">
                <p className="text-[#4F4F4F] hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer">خانه</p>
                <p className="text-[#4F4F4F] hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer">دات‌زون</p>
                <p className="text-[#4F4F4F] hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer">ادی‌زون</p>
                <p className="text-[#4F4F4F] hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer">فروش</p>
                <div className="text-[#4F4F4F] hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer flex items-center gap-2 group">
                    <div className="size-[32px]">
                        <ProfileIcon hoverColor="#CE9261"/>
                    </div>
                    <p>ثبت‌نام/ ورود</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-4">
                <div className="[direction:rtl] text-[#4F4F4F]">
                    <p className="text-[32px] font-black self-start">متزون</p>
                    <p className="self-end font-black text-[16px]">ایده تا اجرا رو بسپار به ما ...</p>
                </div>
                <div className="size-[90px] relative">
                    <Image
                        src={Logo}
                        fill={true}
                        alt="logo"
                        sizes="100%"
                    />
                </div>
            </div>
        </div>
    )
}; export default DesktopHeader;