import Head from "next/head";
import Link from "next/link";
import Content from "../components/layout/Content";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Барилгын материал худалдаа</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content />
    </div>
  );
}
