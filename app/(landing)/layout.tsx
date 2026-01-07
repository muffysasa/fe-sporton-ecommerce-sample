import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer"

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400","500","600","700","800"]
});


export const metadata: Metadata = {
  title: "YourSporty Website",
  description: "blaa blaa blaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}> 
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
