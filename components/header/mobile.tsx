import Image from "next/image";
import Support24Icon from "@/icons/header/24-support";
import MenuIcon from "@/icons/header/menu";
import Logo from "@/public/logo.svg";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/header/sidebar"),{ssr : false})

const MobileHeader = () => {

    const [showSidebar,setShowSidebar] = useState<true|false>(false)

    const disableShow = () => setShowSidebar(false);

    const clickHandler = (e : React.MouseEvent) => {
        e.stopPropagation();
        setShowSidebar(!showSidebar)
    };


    useEffect(() => {
        window.addEventListener("click",disableShow);
        return () => window.removeEventListener("click",disableShow);
    },[]);

    return (
        <div className="flex items-center justify-between px-10 py-4">
            <div className="flex items-center justify-start gap-2">
                <div className="size-[36px] relative">
                    <Image 
                        src={Logo}
                        alt="logo"
                        fill={true}
                        sizes="100%"
                    />
                </div>
                <p className="text-[#4F4F4F] text-[16px] font-black">متزون</p>
            </div>
            <div className="bg-[#545454] flex items-center justify-between p-[8px] rounded-[8px] 
                cursor-pointer gap-[8px]" onClick={clickHandler}>
                <div className="size-[20px]">
                    <Support24Icon />
                </div>

                <div className="h-[20px] w-[1px] bg-white"></div>

                <div className="size-[20px]">
                    <MenuIcon />
                </div>
            </div>
            {
                showSidebar && <Sidebar />
            }
        </div>
    )
};export default MobileHeader;