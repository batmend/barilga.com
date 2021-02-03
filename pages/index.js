import Head from "next/head";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Барилгын материал худалдаа</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
