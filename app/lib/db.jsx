const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

async function run() {
	try {
		const database = client.db("a");
		const collection = database.collection("movies");

		// Single document insertion
		const document = { title: "New Movie", year: 2023 };
		const insertOneResult = await collection.insertOne(document);
		console.log("Inserted document ID:", insertOneResult.insertedId);

		// Multiple documents insertion
		const documents = [
			{ title: "Movie 1", year: 2022 },
			{ title: "Movie 2", year: 2021 },
		];
		const insertManyResult = await collection.insertMany(documents);
		console.log("Inserted document IDs:", insertManyResult.insertedIds);
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	}
}
export default run;
