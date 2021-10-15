import Head from "next/head";
import Products from "./Products";

export default function Home(handleEdit) {
  return (
    <div className="content">
      <Head>
        <title>Fake Store</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Products />
    </div>
  );
}