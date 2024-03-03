import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://pull.nskien.xyz"),
  title: "HarmlessPull: Luck test with a Slot Machine",
  description:
    "Quickly test your luck for free with a slot machine. Without the money part of the slot machines, you can use the concept of it to test your luck in a non-addictive way. Use HarmlessPull when you need to make a quick decision, or to raise odds for a challenge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: ["Slot", "Free", "Luck"],
  creator: "Kien Nguyen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
