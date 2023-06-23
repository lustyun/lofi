const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
	// Specify the folder path from which you want to fetch files
	const folderPath = "public/lofi";

	// Use fs module to read the files from the folder
	fs.readdir(folderPath, (err, files) => {
		if (err) {
			console.error(err);
			res.status(500).json({ error: "Failed to fetch files" });
			return;
		}

		res.status(200).json({ files }, null, 4);
	});
	// Return the list of files as a response
}
