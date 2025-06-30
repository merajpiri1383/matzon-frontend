import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header"),{ssr : true});
const Footer = dynamic(() => import("@/components/footer"),{ssr : true});



const AnjomanFont = localFont({
    src : [
        {
            path : "./fonts/Anjoman-Light.ttf",
            style : 'normal',
            weight : "400",
        },{
            path : "./fonts/Anjoman-Regular.ttf",
            style : "normal",
            weight : "500",
        },{
            path : "./fonts/Anjoman-Bold.ttf",
            style : "normal",
            weight : "700"
        }
    ],
    display : "swap",
    variable : "--anjoman-font"
})

const IranSansFont = localFont({
    src : [
        {
            path : "./fonts/IRANSansWeb(FaNum).ttf",
            style : "normal"
        }
    ],
    variable : "--iran-sans-font"
})

export const metadata: Metadata = {
    title: "Matzon",
    description: "",
    icons : {
        icon : "/logo.svg"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${IranSansFont.variable} ${AnjomanFont.variable}`}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
