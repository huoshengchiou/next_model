import fs from "fs/promises"; //node file system //如果在client side執行會fail，因為bowser不支援
import path from "path";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
//second run
const MainPage = (props) => {
  const { products } = props;
  return (
    <div>
      <Head>
        <title>NextJS test</title>
        {/* <Image
          src="https://images.pexels.com/photos/6748075/pexels-photo-6748075.jpeg"
          alt=""
          width={340}
          height={160}
        /> */}
        {/* <img
          src="https://images.pexels.com/photos/6748075/pexels-photo-6748075.jpeg"
          alt=""
        /> */}
        {/* SEO */}
        <meta name="my self meta" content="test meta here" />
      </Head>
      <h1>Home page</h1>
      <ul>
        {products.map((product, idx) => (
          <li key={product.id}>
            <Link href={`http://localhost:3000/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul> */}
    </div>
  );
};
//first run
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummyBack.json");
  //current work directory
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}

export default MainPage;
