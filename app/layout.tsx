import type { Metadata } from "next";
import { Noto_Sans_JP , Inter } from "next/font/google";
import "./globals.css";

const inter = Noto_Sans_JP({ subsets: ["latin"] });
const inte = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ゆらぬ",
	description: "ゆらのほーむぺーじ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${inte.className}`}>{children}</body>
		</html>
	);
}
