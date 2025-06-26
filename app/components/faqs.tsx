"use client"
import Star2Icon from "@/components/icons/home/star2";
import AddCircleIcon from "@/components/icons/home/addCircle";
import MinusCircleIcon from "@/components/icons/home/minusCircle";
import { FC, useEffect, useRef, useState } from "react";


interface FaqType {
    q : string,
    a : string,
}


const Faq :FC<FaqType> = ({a,q}) => {

    const [open,setOpen] = useState<true|false>(false);
    const ref = useRef<null|HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty("--faq-height",ref.current?.scrollHeight + "px")
        }
    },[open]);

    return (
        <div className={`${open && "bg-[#FFF9E6]"} transition duration-400 p-3 rounded-[16px] md:p-5`}>
            <div className="flex items-cneter justify-between gap-[8px]">
                <p className={`w-[85%] text-[14px] font-medium text-[#4F4F4F] text-justify
                    md:text-[20px]`}>{q}</p>
                <div className={`${open ? "size-[24px] md:size-[32px]" : "size-[20px] md:size-[24px]"} 
                    mx-auto my-auto
                    cursor-pointer active:scale-95 hover:scale-115 transition`}
                    onClick={() => setOpen(!open)}>
                    {
                        open ? <MinusCircleIcon /> : <AddCircleIcon />
                    }
                </div>
            </div>
            <p  ref={ref} 
                className={`${open ? "faq-open" : "faq-close"} overflow-hidden my-2
                text-[#4F4F4F] font-regular text-[12px] text-justify md:text-[20px]
                w-[80%]`}>{a}</p>
        </div>
    )
}

const Faqs = () => {

    const faqs : FaqType[] = [
        {
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },{
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },{
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },{
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },{
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },{
            q : "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است؟",
            a : "شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
        },
    ]


    return (
        <div className="px-6 md:px-20 [direction:rtl] md:bg-white py-12">
            <div className="flex items-center justify-start gap-[8px]">
                <div className="size-[20px] md:size-[30px]">
                    <Star2Icon />
                </div>
                <p className="text-[20px] font-semibold text-[#434343] font-anjoman md:text-[32px]">
                    پرسش های متداول</p>
            </div>

            <div className="grid grid-cols-1 gap-2 my-8">
                {
                    faqs.map((item,index) => {
                        return (
                            <Faq {...item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
};export default Faqs;