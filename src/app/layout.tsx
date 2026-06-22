import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "City Deals EG",
  description: "أقوى عروض وخصومات القاهرة والجيزة",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body style={{ margin: 0, backgroundColor: "#000000" }}>
        {children}
      </body>
    </html>
  );
}
