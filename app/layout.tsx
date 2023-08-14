import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import PageFooter from "@/components/PageFooter";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "🏖️ Wanderlust Atlas",
  description: "Wanderlust Atlas created by minhui",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavBar />
          <main>{children}</main>
          <PageFooter />
        </body>
      </html>
    </ClerkProvider>
  );
}
