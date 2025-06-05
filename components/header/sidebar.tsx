import { Slide } from "react-awesome-reveal";
import ProfileIcon from "@/icons/header/profile";


const SidebarHeader = () => {

    return (
        <div className="fixed top-0 bottom-0 right-0" onClick={(e) => e.stopPropagation()}>
            <Slide duration={400} direction="right" className="h-full bg-[#575251] w-full">
                <div className="px-6 items-center justify-center [direction:rtl] font-medium text-[18px]
                gap-[40px]">
                    <p className="text-white hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer text-center py-2">خانه</p>
                    <p className="text-white hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer text-center py-2">دات‌زون</p>
                    <p className="text-white hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer text-center py-2">ادی‌زون</p>
                    <p className="text-white hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer text-center py-2">فروش</p>
                    <div className="text-white hover:text-[#CE9261] hover:underline transition 
                    duration-400 cursor-pointer flex items-center gap-2 group">
                        <div className="size-[18px]">
                            <ProfileIcon color="white" hoverColor="#CE9261" />
                        </div>
                        <p>ثبت‌نام/ ورود</p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}; export default SidebarHeader;