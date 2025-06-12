import StarIcon from "@/components/icons/home/star";
import UploadIcon from "@/components/icons/home/upload";

const FormMobile = () => {

    return (
        <div className="bg-[#545454] rounded-[12px] m-6 p-4">
            <div className="flex items-center justify-end gap-2">
                <p className="text-[#FFFFFF] anjoman-font font-black text-[24px]">فرم مشاوره</p>
                <div className="size-[40px]">
                    <StarIcon />
                </div>
            </div>
            <p className="text-[#FFFFFF] text-[12px] my-2 text-center">
                اطلاعات: لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>

            <div className="grid grid-cols-2 [direction:rtl] gap-x-4">
                <div className="col-span-1">
                    <input
                        type="text"
                        placeholder="عنوان"
                        className="bg-[#FFFFFF] text-[#7B7B7B] rounded-[8px] 
                        text-[14px] font-semibold p-2 w-full outline-none"
                    />
                    <p className="text-[#FF4F4F] font-semibold text-[10px] my-2">متن خطا پیام</p>
                </div>
                <div className="col-span-1">
                    <input
                        type="text"
                        placeholder="عنوان"
                        className="bg-[#FFFFFF] text-[#7B7B7B] rounded-[8px] 
                        text-[14px] font-semibold p-2 w-full outline-none"
                    />
                    <p className="text-[#FF4F4F] font-semibold text-[10px] my-2">متن خطا پیام</p>
                </div>

                <div className="col-span-2">
                    <input
                        type="text"
                        placeholder="عنوان"
                        className="bg-[#FFFFFF] text-[#7B7B7B] rounded-[8px] 
                        text-[14px] font-semibold p-2 w-full outline-none"
                    />
                    <p className="text-[#FF4F4F] font-semibold text-[10px] my-2">متن خطا پیام</p>
                </div>
                <div className="col-span-2">
                    <input
                        type="text"
                        placeholder="عنوان"
                        className="bg-[#FFFFFF] text-[#7B7B7B] rounded-[8px] 
                        text-[14px] font-semibold p-2 w-full outline-none"
                    />
                    <p className="text-[#FF4F4F] font-semibold text-[10px] my-2">متن خطا پیام</p>
                </div>

                <div className="col-span-2">
                    <textarea
                        placeholder="عنوان"
                        className="bg-[#FFFFFF] text-[#7B7B7B] rounded-[8px] h-40
                        text-[14px] font-semibold p-2 w-full outline-none resize-none"></textarea>
                </div>
            </div>

            <div className="bg-[#FFD342] flex items-center justify-center gap-2 py-[8px] rounded-[8px]">
                <p className="text-[12px] font-semibold text-[#4F4F4F]">ارسال</p>
                <div className="size-[16px]">
                    <UploadIcon />
                </div>
            </div>
        </div>
    )
}; export default FormMobile;