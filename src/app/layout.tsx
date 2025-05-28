import type { Metadata } from "next";
import "@/assets/globals.css";

export const metadata: Metadata = {
	title: "React File Preview",
	description: "React File Preview",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={"antialiased"}>{children}</body>
		</html>
	);
}
