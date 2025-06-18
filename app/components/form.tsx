"use client"
import dynamic from "next/dynamic";
import useDeviceType from "@/utils/hooks/deviceType";
const FormMobile = dynamic(() => import("@/app/components/formMobile"),{ssr : false});
const FormDesktop = dynamic(() => import("@/app/components/formDesktop"),{ssr : false});

const Form = () => {

    const deviceType = useDeviceType();

    return (
        <>
            {
                deviceType === "desktop" ? 
                <FormDesktop /> :
                <FormMobile />
            }
        </>
    )
};export default Form;