import type React from "react"
import "./styles.css"

export const metadata = {
	description: "A motivated and determined Computer Science graduate student. ",
	title: {
		template: "%s | Jeffery Ji",
		default: "Portfolio",
	},
	openGraph: {
		title: "Portfolio | Jeffery Ji",
		description: "A motivated and determined Computer Science graduate student. ",
		siteName: "Portfolio | Jeffery Ji",
		type: "website",
	},
}

export default async function RootLayout(props: { children: React.ReactNode }) {
	const { children } = props

	return (
		<html lang="en">
			<body suppressHydrationWarning>
				<main>{children}</main>
			</body>
		</html>
	)
}
