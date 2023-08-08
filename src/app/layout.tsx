import "./globals.scss";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { DMSerifText } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSerifText.className}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
