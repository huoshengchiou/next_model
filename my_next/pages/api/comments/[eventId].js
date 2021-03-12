// /comments/eventID
import { MongoClient } from "mongodb";

const handler = async (rq, rs) => {
  const { method, query } = rq;
  const eventId = query;
  const resMaker = (status, body) => rs.status(status).json(body);
  const client = await MongoClient.connect(
    "mongodb+srv://Sheng:pk110291@cluster0.vxq0w.mongodb.net/events?retryWrites=true&w=majority"
  );
  if (method === "POST") {
    //add sever side validation
    const { email, name, text } = rq.body;
    const resMaker = (status, body) => rs.status(status).json(body);
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      return resMaker(422, { message: "invalid input" });
    }
    console.log(email, name, text);
    const newComment = {
      email,
      name,
      text,
      eventId,
    };
    console.log(newComment);
    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);
    newComment.id = result.insertedId;
    console.log("result", result);
    return resMaker(201, { message: "add comment", comment: newComment });
  }

  if (method === "GET") {
    const dummyList = [{ id: "c1", name: "jack", text: "first comment" }];
    const db = client.db();
    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 }) //根據最新來進行排序
      .toArray();

    return resMaker(200, { message: "add comment", comment: documents });
  }

  client.close();
};

export default handler;
