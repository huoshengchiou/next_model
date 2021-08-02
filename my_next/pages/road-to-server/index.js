import React, { useEffect } from "react";

const roadToServer = () => {
  useEffect(async () => {
    const payload = await fetch(`/api/read-file`, {
      method: "POST",
      body: JSON.stringify({ key: 999 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const payloadC = await payload.json();
    console.log({ payloadC });
  }, []);
  return <div>roadToServer</div>;
};

export default roadToServer;

export const getServerSideProps = async (context) => {
  const payload = await fetch(`http://localhost:3000/api/read-file`, {
    method: "GET",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const payloadR = await payload.json();
  console.log({ payloadR });

  const { default: path } = await import("path");
  const { default: fs } = await import("fs");
  const getFilePath = (fileName) => path.join(process.cwd(), "data", fileName);
  const oriFile = (path) => JSON.parse(fs.readFileSync(path));

  const { params, req, res } = context;

  const filePath = getFilePath("store.json");
  const data = oriFile(filePath);
  console.log({ data });

  //   const data = oriFile(filePath);
  fs.writeFileSync(filePath, JSON.stringify({ key: "123" }));

  // const result= await fetch('')

  return { props: { username: "sheng" } };
};
