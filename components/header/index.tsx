"use client"
import { FC } from "react";
import useDeviceType from "@/utils/hooks/deviceType";
import dynamic from "next/dynamic";
const DesktopHeader = dynamic(() => import("@/components/header/desktop"),{ssr : false});
const MobileHeader = dynamic(() => import("@/components/header/mobile"),{ssr : false});


const Header : FC = () => {

    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType === "desktop" ? 
                <DesktopHeader /> : 
                <MobileHeader />
            }
        </>
    )
};export default Header;