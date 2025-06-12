import dynamic from "next/dynamic";

const Main = dynamic(() => import("@/app/components/main"), { ssr: true });
const Services = dynamic(() => import("@/app/components/services"),{ssr : true});
const Form = dynamic(() => import("@/app/components/form"),{ssr : true});

const Page = () => {
    return (
        <>
            <Main />
            <Services />
            <Form />
        </>
    )
}; export default Page;