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
      <body>{children}</body>
    </html>
  );
}
