import dynamic from "next/dynamic";
import "@/app/components/styles.css";

const Main = dynamic(() => import("@/app/components/main"), { ssr: true });
const Services = dynamic(() => import("@/app/components/services"),{ssr : true});
const Form = dynamic(() => import("@/app/components/form"),{ssr : true});
const Projects = dynamic(() => import("@/app/components/projects"),{ssr : true});

const Page = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <Main />
            <Services />
            <Form />
            <Projects />
        </div>
    )
}; export default Page;