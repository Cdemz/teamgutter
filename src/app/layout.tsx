import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Team Gutter",
  description: "Roofing company website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section>
          <NavBar />
        </section>
        <section>{children}</section>
        <section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
