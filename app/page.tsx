import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/app/components/main"), { ssr: true });

const Page = () => {
    return (
        <>
            <Main />
        </>
    )
}; export default Page;