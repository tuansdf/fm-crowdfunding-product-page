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
          "max-w-screen-mobile desktop:max-w-screen-desktop",
          primaryFont.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
