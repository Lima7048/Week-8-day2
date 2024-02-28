import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./Header"
import headerStyles from "./header.module.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Blog about Goddesses",
  description: "A simple blog built with Next.js",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js Blog about Goddesses",
    type: "website",
    url: "https://next-comments-postgres.vercel.app/",
    image: "https://i.pinimg.com/564x/29/03/2d/29032db799606319b3b6acb18087df64.jpg", // add an appropriate image to your public folder
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header className={headerStyles.header}></Header> */}
      <body className={inter.className}>{children}</body>
      <header className="bg-cyan-500 text-center"> African Dieties</header>

    </html>
  );
}
