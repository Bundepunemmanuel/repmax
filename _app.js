import { Fraunces, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import Header from "../Header";
import Footer from "../Footer";
import "../styles.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable} bg-paper min-h-screen`}>
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-10">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
