import localFont from "next/font/local";
import { Inter, Montserrat } from 'next/font/google'
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const actOfRejection = localFont({
  src: "./fonts/Act_Of_Rejection.ttf",
  variable: "--font-actOfRejection",
  weight: "700",
});
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const montserrat =  Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})


export const metadata = {
  title: "VTMERCH | Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${inter.variable} ${actOfRejection.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
