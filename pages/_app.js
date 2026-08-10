import { Sora, Manrope, IBM_Plex_Mono } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import "../styles.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen bg-peach`}
    >
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
