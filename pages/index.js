import Head from "next/head";
import Link from "next/link";
// import Test from "../components/Layout/Test";
// import GoToTop from "../components/GoToTop";
// import Header from "../components/layout/Header";
// import Content from "../components/layout/Content";
// import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Барилгын материал худалдаа</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Read{" "}
        <Link href="/posts/first-post">
          <a>this page!</a>
        </Link>
      </h1>
      {/* <Test /> */}
      {/* <GoToTop /> */}
      {/* <Header /> */}
      {/* <Content /> */}
      {/* <Footer /> */}
    </div>
  );
}
