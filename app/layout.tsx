import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/nav/Navbar";
import Sessionprovider from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tmsblog.vercel.app/"),
  title:{
    template: "%s | TMS Blog",
    default: "Tell Me a Story Blog",
  },
  authors: {
		name: "Jannick Pedersen",
	},
  description: "Explore a world of captivating stories and insightful articles on our blog. the latest trends to in-depth analyses, our blog covers a wide range of topics to keep you informed and entertained. Join our community of readers and discover thought-provoking content that sparks curiosity and fosters discussion. Stay updated with our diverse collection of blog posts, written by passionate contributors who share their expertise and unique perspectives. Engage with a platform that goes beyond the ordinary, providing you with enriching content that resonates with your interests.",
  openGraph: {
    title: "TMS Blog",
    url:process.env.SITE_URL,
    siteName: "TMS Blog",
    images: "/og.png",
    type: "website",
  },
  keywords: ["TMS", "TMS Blog", "Tell Me a Story", "Jannick Pedersen", "Jeffrey O'Rielly", "Blogs", "Online blogs", "Blog app"],
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-7xl mx-auto p-10 space-y-5">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
        <Sessionprovider />
      </body>
    </html>
  );

};
