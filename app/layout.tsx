import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header"),{ssr : true});



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
        <html lang="en" className={IranSansFont.variable}>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
