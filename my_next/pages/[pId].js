import fs from "fs/promises"; //node file system //如果在client side執行會fail，因為bowser不支援
import path from "path";

const productDetail = (props) => {
  const { payload } = props;
  return (
    <>
      <h1>{payload.title}</h1>
      <p>{payload.description}</p>
    </>
  );
};
export async function getStaticProps(context) {
  const { params } = context; //由NextJS定義提供參數
  const productID = params.pId;
  const filePath = path.join(process.cwd(), "data", "dummyBack.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //   const product = data.products.find((product) => product.id === productID);
  console.log("data", data);

  return {
    props: {
      payload: data.products.find((product) => product.id === productID),
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pId: "P1" } },
      { params: { pId: "P2" } },
      { params: { pId: "P3" } },
    ],
    fallback: false,
  };
}
export default productDetail;
