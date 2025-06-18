"use client"
import dynamic from "next/dynamic";
import useDeviceType from "@/utils/hooks/deviceType";
import ProjectImage from "@/public/project-1.svg";
import TetherIcon from "@/components/icons/home/tether";
import WifiSquare from "@/components/icons/home/wifiSquare";
import SearchBoxIcon from "@/components/icons/home/searchBox";
import DesignTools from "@/components/icons/home/designTools";
import { StaticImageData } from "next/image";
import LeftArrowCircleIcon from "@/components/icons/home/leftArrowCircle";
import StarIcon from "@/components/icons/home/star";
const ProjectsMobile = dynamic(() => import("@/app/components/projectsMobile"), { ssr: false });
const ProjectsDesktop = dynamic(() => import("@/app/components/projectDesktop"),{ssr : false});

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
        <div className="py-6">

            <div className="flex items-center justify-between [direction:rtl] mx-6 md:mx-20">
                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[20px] md:size-[30px]">
                        <StarIcon />
                    </div>
                    <p className="anjoman-font font-semibold text-[20px] text-[#434343]
                        md:text-[32px]">پروژه های متزون</p>
                </div>

                <div className="flex items-center justify-center gap-[8px]">
                    <div className="size-[20px] md:size-[24px]">
                        <LeftArrowCircleIcon />
                    </div>
                    <p className="text-[#4F4F4F] font-semibold text-[12px] md:text-[20px]">همه پروژه ها</p>
                </div>
            </div>
            {
                deviceType === "desktop" ?
                    <ProjectsDesktop projects={projects} /> :
                    <ProjectsMobile projects={projects} />
            }
        </div>
    )
}; export default Projects;