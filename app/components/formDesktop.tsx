import Image from "next/image";
import BgFormStarImage from "@/public/bg-form-star.svg";
import BgFormImage from "@/public/bg-form-image.svg";
import BuilingConceptImage from "@/public/building-concept-illustration.svg"
import StarIcon from "@/components/icons/home/star";
import UploadIcon from "@/components/icons/home/upload";


const FormDesktop = () => {
    return (
        <div className="grid grid-cols-5 bg-gray-400/65 gap-2 my-24">
            <div className="col-span-3 bg-[#4C4C4C] [direction:rtl] p-10 relative">
                <Image 
                    src={BgFormImage}
                    alt="bg form image"
                    sizes="100%"
                    className="opacity-[10%]"
                    fill={true}
                    style={{objectFit : "cover" , objectPosition : "center"}}
                />
                <p className="font-bold text-[#FFFFFF] text-[20px] relative z-[2]">اطلاعات</p>
                <p className="text-[16px] text-[#FFFFFF] text-justify my-6 z-[2] relative">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                    استفاده از طراحان گرافیک
                    است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                    لازم است، لورم ایپسوم
                    متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                    طراحان گرافیک است،
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                <div className="grid grid-cols-2 gap-x-[64px] gap-y-[48px] mt-12">
                    <div className="col-span-1 relative">
                        <div className="absolute bg-[#535350] text-[#FFFFFF] px-[8px] py-[4px]
                        rounded-[8px] -translate-y-[50%] text-[16px] -translate-x-[20%]">عنوان</div>
                        <input
                            type="text"
                            className="w-full bg-[#FFFFFF] outline-none text-[18px] h-[48px] px-4
                            rounded-[8px]"
                        />
                    </div>

                    <div className="col-span-1 relative">
                        <div className="absolute bg-[#535350] text-[#FFFFFF] px-[8px] py-[4px]
                        rounded-[8px] -translate-y-[50%] text-[16px] -translate-x-[20%]">عنوان</div>
                        <input
                            type="text"
                            className="w-full bg-[#FFFFFF] outline-none text-[18px] h-[48px] px-4
                            rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <div className="absolute bg-[#535350] text-[#FFFFFF] px-[8px] py-[4px]
                        rounded-[8px] -translate-y-[50%] text-[16px] -translate-x-[20%]">عنوان</div>
                        <input
                            type="text"
                            className="w-full bg-[#FFFFFF] outline-none text-[18px] h-[48px] px-4
                            rounded-[8px]"
                        />
                    </div>
                    <div className="col-span-1 relative">
                        <div className="absolute bg-[#535350] text-[#FFFFFF] px-[8px] py-[4px]
                        rounded-[8px] -translate-y-[50%] text-[16px] -translate-x-[20%]">عنوان</div>
                        <input
                            type="text"
                            className="w-full bg-[#FFFFFF] outline-none text-[18px] h-[48px] px-4
                            rounded-[8px]"
                        />
                    </div>

                    <div className="col-span-2 relative">
                        <div className="absolute bg-[#535350] text-[#FFFFFF] px-[8px] py-[4px]
                        rounded-[8px] -translate-y-[50%] text-[16px] -translate-x-[20%]">عنوان</div>
                        <textarea
                            className="w-full bg-[#FFFFFF] outline-none text-[18px] px-4
                            rounded-[8px] resize-none py-6 h-[160px]"
                        ></textarea>
                    </div>
                    <div className="col-span-2 bg-[#FFD342] flex items-center justify-center
                        py-[8px] px-[32px] rounded-[8px] relative z-[2] gap-[8px]">
                        <div className="size-[20px]">
                            <UploadIcon />
                        </div>
                        <p className="text-[#4D4D4B] font-bold text-[16px]">ارسال</p>
                    </div>
                </div>
            </div>
            <div className="col-span-2 bg-linear-to-r from-[#494949] to-[#555555] py-16 relative">
                <Image
                    src={BgFormStarImage}
                    alt="background star"
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="flex items-center justify-center gap-[8px] relative z-[2]">
                    <p className="text-[#FFFFFF] text-[64px] font-black anjoman-font">فرم مشاوره</p>
                    <div className="size-[72px]">
                        <StarIcon />
                    </div>
                </div>

                <div className="relative z-[2] w-[400px] mx-auto my-6">
                    <p className="text-center text-[#FFFFFF] text-[16px]">
                        اطلاعات: لورم ایپسوم متن ساختگی با
                        تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                </div>

                <div className="flex items-center justify-center mt-48">
                    <Image
                        src={BuilingConceptImage}
                        alt="builing concept"
                        height={270}
                        width={390.23}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                </div>
            </div>
        </div>
    )
}; export default FormDesktop;