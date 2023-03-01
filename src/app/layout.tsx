import { primaryFont } from "@/app/fonts";
import clsx from "clsx";
import "./globals.css";

export const metadata = {
  title: "Crowdfunding Product Page - Frontend Mentor | Tuan Nguyen",
  description: "Crowdfunding Product Page - Frontend Mentor | Tuan Nguyen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "mx-auto max-w-screen-mobile bg-neutral-100/5 text-sm leading-relaxed desktop:max-w-screen-desktop desktop:text-base",
          primaryFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
