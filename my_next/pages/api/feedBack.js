import fs from "fs";
import path from "path";

//do not export component
//sever side code
//code in here will not be exposed to client

const getFilePath = (fileName) => path.join(process.cwd(), "data", fileName);
const oriFile = (path) => JSON.parse(fs.readFileSync(path));
const handler = (rq, rs) => {
  if (rq.method === "POST") {
    const { email, text: feedBackText } = rq.body;
    const updateData = { email, feedBackText, id: new Date().toISOString() };

    const fullpath = getFilePath("feedBack.json");
    const data = oriFile(fullpath);
    data.push(updateData);
    // synchronized block
    fs.writeFileSync(fullpath, JSON.stringify(data));
    rs.status(201).json({ message: "success", feedBack: updateData });
  } else {
    const fullpath = getFilePath("feedBack.json");
    const data = oriFile(fullpath);
    rs.status(200).json({ message: "fecth ok", feedBack: data });
  }
};

export default handler;
