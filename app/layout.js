import { Inter, Roboto_Mono } from "next/font/google";
import { pressStart, russoOne } from "./fonts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buzzare - 3D Artist & Animator",
  description: "Creating mind-blowing FNAF animations and pushing the boundaries of what's possible in 3D.",
  icons: {
    icon: [
      {
        url: '/logo1.png',
        href: '/logo1.png',
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} ${pressStart.variable} ${russoOne.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
