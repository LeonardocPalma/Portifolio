import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://leonardocpalma:NLeUStZ7PMDOSeuJ@clusters.l9qhs.mongodb.net/?retryWrites=true&w=majority&appName=Clusters";

const client = new MongoClient(URI);
export const db = client.db("SpotifyReplica");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
