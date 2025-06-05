import { useEffect, useState } from "react";

type deviceType = "mobile" | "desktop";


const useDeviceType = () => {

    const [currentDevice, setDevice] = useState<deviceType>("desktop");

    const setSize = () => {
        window.innerWidth > 768 ? setDevice("desktop") : setDevice("mobile");
    };

    useEffect(() => {
        setSize();
        window.addEventListener("resize", setSize);

        return () => window.removeEventListener("resize", setSize);
    }, []);

    return currentDevice
};export default useDeviceType;