import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sanjan:rVDSHEUCvu0UgxBD@cluster0.6xxxo4h.mongodb.net/login?retryWrites=true&w=majority"
    );
    const db = client.db();
    const loginCollection = db.collection("login");
    const result = await loginCollection.insertOne(data);

    client.close();
    res.status(200).json({ message: "Login successful!" });
  }
};

export default handler;
