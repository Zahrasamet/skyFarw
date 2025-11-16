// pages/_app.js
import "@/styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "@/component/module/navbar/Navbar";
import { Unbounded, Sora } from "next/font/google";

config.autoAddCss = false;

const unbounded = Unbounded({
  variable: "--font-Unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${sora.variable} ${unbounded.variable}`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}