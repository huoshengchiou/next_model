import fs from "fs/promises"; //node file system //如果在client side執行會fail，因為bowser不支援
import path from "path";

const productDetail = (props) => {
  const { payload } = props;
  if (!payload) return <h1>loading</h1>;
  return (
    <>
      <h1>{payload.title}</h1>
      <p>{payload.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummyBack.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  const { params } = context; //由NextJS定義提供參數
  const productID = params.pId;
  const data = await getData();
  const product = data.products.find((product) => product.id === productID);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      payload: product,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const pathList = data.products.reduce(
    (acu, product) => [...acu, { params: { pId: product.id } }],
    []
  );

  return {
    paths: pathList,
    //if id is not exist，we still want to perform page
    fallback: true,
  };
}
export default productDetail;
