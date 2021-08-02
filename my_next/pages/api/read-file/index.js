import fs from "fs";
import path from "path";

const getFilePath = (fileName) => path.join(process.cwd(), "data", fileName);
const oriFile = (path) => JSON.parse(fs.readFileSync(path));
const handler = (rq, rs) => {
  if (rq.method === "POST") {
    const { key } = rq.body;
    const updateData = { key, id: new Date().toISOString() };

    const fullpath = getFilePath("store.json");
    // const data = oriFile(fullpath);
    // data.push(updateData);
    // synchronized block
    fs.writeFileSync(fullpath, JSON.stringify(updateData));
    rs.status(201).json({ message: "success", feedBack: updateData });
  } else {
    const fullpath = getFilePath("store.json");
    const data = oriFile(fullpath);
    rs.status(200).json({ message: "fecth ok", feedBack: data });
  }
};

export default handler;
