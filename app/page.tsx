import dynamic from "next/dynamic";
import "@/app/components/styles.css";

const Main = dynamic(() => import("@/app/components/main"), { ssr: true });
const Services = dynamic(() => import("@/app/components/services"), { ssr: true });
const Form = dynamic(() => import("@/app/components/form"), { ssr: true });
const Projects = dynamic(() => import("@/app/components/projects"), { ssr: true });
const Why = dynamic(() => import("@/app/components/why"), { ssr: true });
const Faqs = dynamic(() => import("@/app/components/faqs"), { ssr: true });
const Blog = dynamic(() => import("@/app/components/blog"), { ssr: true });
const BlueBox = dynamic(() => import("@/app/components/blueBox"), { ssr: true });

const Page = () => {
    return (
        <div className="bg-[#F6F6F6]">
            <Main />
            <Services />
            <Form />
            <Projects />
            <Why />
            <Faqs />
            <Blog />
            <BlueBox />
        </div>
    )
}; export default Page;