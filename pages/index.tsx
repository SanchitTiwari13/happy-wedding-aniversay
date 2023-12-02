import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Wedding Aniversary</title>
        <meta
          name="description"
          content="Wishing mama and mami many many happy returns of the day"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bodyDiv}>
        <h1>Happy marrige aniversary to my dear mama and mami</h1>
        <Image
          width={1067}
          height={1600}
          src="/mama-mami.jpg"
          alt="err 404 image not found"
        />
      </div>
    </>
  );
}
