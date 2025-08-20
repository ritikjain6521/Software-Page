import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";
import Footer from "@/components/Home/Footer/Footer";
import Provider from "@/components/HOC/Provider";
import Scroll from  "@/components/Hero/Scroll"


const font = Rajdhani({
  weight: ["400", "500","600","700"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Software Landing page",
  description: "Software Landintg page by  next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}  antialiased`}
      >
        <Provider>
        <Responsive />
        {children}
         <Scroll/>
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
