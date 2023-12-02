import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import styles from "@/styles/_app.module.scss"
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
