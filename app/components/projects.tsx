"use client"
import dynamic from "next/dynamic";
import useDeviceType from "@/utils/hooks/deviceType";
import ProjectImage from "@/public/project-1.svg";
import TetherIcon from "@/components/icons/home/tether";
import WifiSquare from "@/components/icons/home/wifiSquare";
import SearchBoxIcon from "@/components/icons/home/searchBox";
import DesignTools from "@/components/icons/home/designTools";
import { StaticImageData } from "next/image";
const ProjectsMobile = dynamic(() => import("@/app/components/projectsMobile"), { ssr: false });

interface TagType {
    icon : React.ReactNode,
    text : string,
}

export interface ProjectType {
    image : StaticImageData,
    text : string,
    tags : TagType[],
}


const Projects = () => {

    const deviceType = useDeviceType();

    const projects : ProjectType[] = [
        {
            image: ProjectImage,
            text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنو
            لوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و 
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ا
            ی علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،`,
            tags: [
                {
                    icon : <SearchBoxIcon />,
                    text : "بررسی حوزه کاری"
                },{
                    icon : <WifiSquare />,
                    text : "تحلیل رقبا"
                },{
                    icon : <DesignTools />,
                    text : "دیزاین قالب وردپرس"
                },{
                    icon : <TetherIcon /> , 
                    text : "مطالب سئو شده",
                }
            ]
        },{
            image: ProjectImage,
            text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنو
            لوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و 
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ا
            ی علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،`,
            tags: [
                {
                    icon : <SearchBoxIcon />,
                    text : "بررسی حوزه کاری"
                },{
                    icon : <WifiSquare />,
                    text : "تحلیل رقبا"
                },{
                    icon : <DesignTools />,
                    text : "دیزاین قالب وردپرس"
                },{
                    icon : <TetherIcon /> , 
                    text : "مطالب سئو شده",
                }
            ]
        },{
            image: ProjectImage,
            text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنو
            لوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و 
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ا
            ی علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،`,
            tags: [
                {
                    icon : <SearchBoxIcon />,
                    text : "بررسی حوزه کاری"
                },{
                    icon : <WifiSquare />,
                    text : "تحلیل رقبا"
                },{
                    icon : <DesignTools />,
                    text : "دیزاین قالب وردپرس"
                },{
                    icon : <TetherIcon /> , 
                    text : "مطالب سئو شده",
                }
            ]
        },{
            image: ProjectImage,
            text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنو
            لوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و 
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ا
            ی علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،`,
            tags: [
                {
                    icon : <SearchBoxIcon />,
                    text : "بررسی حوزه کاری"
                },{
                    icon : <WifiSquare />,
                    text : "تحلیل رقبا"
                },{
                    icon : <DesignTools />,
                    text : "دیزاین قالب وردپرس"
                },{
                    icon : <TetherIcon /> , 
                    text : "مطالب سئو شده",
                }
            ]
        },
    ];

    return (
        <>
            {
                deviceType === "desktop" ?
                    "" :
                    <ProjectsMobile projects={projects} />
            }
        </>
    )
}; export default Projects;