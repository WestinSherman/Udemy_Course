// const fs = require('fs');
// const folderName = process.argv[2] || "Project"

// // //Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// // fs.mkdir('Dogs', { recursive: true }, (err) => {
// //     console.log("IN THE CALLBACK!!");
// //     if (err) throw err;
// // });

// fs.mkdirSync(folderName);
// fs.writeFile(`${folderName}/index.html`)
// fs.writeFile(`${folderName}/app.css`)
// fs.writeFile(`${folderName}/app.js`)

const fs = require('node:fs');

// Get folder name from command-line arguments or use a default value
const folderName = process.argv[2] || "Project";

try {
    // Create the folder
    fs.mkdirSync(folderName, { recursive: true });
    console.log(`Folder '${folderName}' created successfully!`);

    // Create the files in the folder
    fs.writeFileSync(`${folderName}/index.html`, "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n</body>\n</html>");
    fs.writeFileSync(`${folderName}/app.css`, "/* Add your CSS here */");
    fs.writeFileSync(`${folderName}/app.js`, "// Add your JavaScript here");

    console.log("Files created successfully!");
} catch (err) {
    // Handle errors, such as folder already existing
    if (err.code === 'EEXIST') {
        console.error(`Folder '${folderName}' already exists.`);
    } else {
        throw err;
    }
}