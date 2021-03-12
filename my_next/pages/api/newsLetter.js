import { MongoClient } from "mongodb";

const handler = async (rq, rs) => {
  const { method } = rq;
  console.log(rq.body.email);
  const resMaker = (status, body) => rs.status(status).json(body);

  if (method === "POST") {
    const userEmail = rq.body.email;
    console.log(userEmail);
    if (!userEmail || !userEmail.includes("@")) {
      return resMaker(422, { message: "invaild eamil" });
    }
    // Use connect method to connect to the server
    // MongoClient.connect(url, function(err, client) {
    //   assert.equal(null, err);
    //   console.log("Connected successfully to server");

    //   const db = client.db(dbName);

    //   client.close();
    // });
    const client = await MongoClient.connect(
      "mongodb+srv://Sheng:pk110291@cluster0.vxq0w.mongodb.net/events?retryWrites=true&w=majority"
    );
    //connect to DB，上面string有給.net/newsLetterReg，所以不用再輸入
    const db = client.db();
    await db.collection("newEmailReg").insertOne({ email: userEmail });

    client.close();
    console.log(userEmail);
    return resMaker(201, { message: "Sing up" });
  }
};

export default handler;
