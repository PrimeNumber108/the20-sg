import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The20",
  description: "The20 Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* For Google */}
        <meta name="description" content="The20 Finance" />
        <meta name="keywords" content="finance" />

        <meta name="author" content="The20" />
        <meta name="copyright" content="© 2022 The20 PTE" />
        <meta name="application-name" content="the20.sg" />
        <meta name="og:image" content="https://finedge-images.s3.ap-southeast-1.amazonaws.com/logo/the20-finance.png" />
        <meta name="og:site_name" content="The20 Finance" />
        <meta name="og:url" content="https://the20.sg/" />
        <meta name="og:description" content="The20 Finance" />

        {/* For Facebook */}
        <meta property="og:title" content="The20 Finance" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://finedge-images.s3.ap-southeast-1.amazonaws.com/logo/the20-finance.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://finedge-images.s3.ap-southeast-1.amazonaws.com/logo/the20-finance.png"
        />
        <meta property="og:url" content="https://the20.sg/" />
        <meta property="og:description" content="The20 Finance" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="480" />

        {/* For Twitter */}
        <meta name="twitter:site_name" content="The20 Finance" />
        <meta name="twitter:title" content="The20 Finance" />
        <meta name="twitter:description" content="The20 Finance" />
        <meta
          name="twitter:image"
          content="https://finedge-images.s3.ap-southeast-1.amazonaws.com/logo/the20-finance.png"
        />
        <meta name="twitter:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://the20.sg/" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
        {/*<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"></script>*/}
      </body>
    </html>
  );
}
