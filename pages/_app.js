import { Big_Shoulders_Display, Work_Sans, JetBrains_Mono } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import "../styles.css";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-display",
});

const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <Header />
      <main className="mx-auto min-h-screen max-w-3xl px-5 py-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
