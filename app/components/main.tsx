import Image from "next/image";
import BgMainImage from "@/public/bg-main.svg";
import Logo1 from "@/public/لوگو انیمستون.svg";
import Logo2 from "@/public/لوگو باسی فکت.svg";
import Logo3 from "@/public/لوگو دابستون.svg";
import Logo4 from "@/public/لوگو روان جویان.svg";
import InfoIcon from "@/components/icons/home/info";

const Main = () => {

    return (
        <div className="my-4 py-6 relative px-6 md:px-20">
            <Image
                src={BgMainImage}
                alt="bg-main-image"
                fill={true}
                style={{ objectFit: "cover", objectPosition: "center", backgroundRepeat: "no-repeat" }}
                className=" z-[-1] right-0 blur-[20px] opacity-20 "
            />
            <section className="[direction:rtl]">
                <div className="md:flex justify-between items-center gap-4">
                    <p className="text-center anjoman-font text-[#4D4D4D]
                    font-[900] text-[14px] md:hidden">ایده تا اجرا رو بسپار به ما</p>

                    <div className="hidden md:flex">
                        <p className="anjoman-font text-[56px] font-[900] bg-gradient-to-r bg-clip-text
                        text-transparent from-[#4D4D4D] to-[#494949]">شما در رادار متزون قرار دارید...!</p>
                    </div>
                    <p className="text-center text-[#D56B08] text-[56px] font-[900]
                    bg-gradient-to-r from-[#FAAB6C] via-[#D56B08]
                    to-[#FFD746] bg-clip-text text-transparent md:border-r md:text-[72px]">Matzone</p>
                    <p className="text-center anjoman-font text-[#4D4D4D]
                    font-[900] text-[24px] md:hidden">شما در رادار قرار دارید!</p>
                </div>
                <p className="text-[#4F4F4F] font-medium text-[12px] text-justify my-2 leading-6 
                    md:text-[20px] md:leading-8 md:my-4">
                    متزون از دل رسانه شکل گرفت؛ از جایی که محتوا برای میلیون‌ها نفر ت
                    ولید می‌شد، نه برای آمار و الگوریتم، بلکه برای ماندن در ذهن.ما از «دیدن ترند» شروع
                    نکردیم، ما از ساختنش اومدیم. چند سال پیش، با چند پیج میلیونی و چندصد هزاری، فهمیدیم
                    محتوا چطور دیده میشه، چطور فروش می‌سازه، چطور تبدیل به برند میشه. اما قصه متزون از
                    جایی جدی شد که فهمیدیم: فقط محتوا کافی نیست. برندهایی که می‌خوان جدی باشن، نیاز به
                    تیمی دارن که از طراحی، کد و استراتژی گرفته تا فروش، همه‌چی رو بفهمه و اجرا کنه.</p>
            </section>

            <section className="my-6 md:hidden">
                <div className="flex items-center justify-between">
                    <div className="size-[48px] relative">
                        <Image
                            src={Logo3}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div className="size-[48px] relative">
                        <Image
                            src={Logo2}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div className="size-[48px] relative">
                        <Image
                            src={Logo1}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                    <div className="size-[48px] relative">
                        <Image
                            src={Logo4}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>

                <div className="my-6 px-8 py-2 bg-[#444444] rounded-[8px] w-fit mx-auto">
                    <p className="text-[#F6F6F6] text-[12px] font-semibold">
                        رزرو وقت مشاوره</p>
                </div>
            </section>

            <section className="my-6 hidden md:block">
                <div className="flex items-center justify-center gap-56">
                    <div className="size-[96px] relative">
                        <Image
                            src={Logo3}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="my-6 px-[32px] py-[12px] bg-[#444444] rounded-[8px] w-fit flex items-center
                        justify-center gap-[8px]">
                        <p className="text-[#F6F6F6] text-[16px] font-semibold">
                            رزرو وقت مشاوره</p>
                        <div className="size-[24px]">
                            <InfoIcon />
                        </div>
                    </div>

                    <div className="size-[96px] relative">
                        <Image
                            src={Logo4}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-48 my-6">
                    <div className="size-[96px] relative">
                        <Image
                            src={Logo2}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>

                    <div className="size-[96px] relative">
                        <Image
                            src={Logo1}
                            alt="logo"
                            fill={true}
                            sizes="100%"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                        />
                    </div>
                </div>

            </section>
        </div>
    )
}; export default Main;