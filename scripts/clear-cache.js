const { rm } = require("fs/promises");
const path = require("path");

const pathCache = path.resolve(__dirname, "..", "node_modules", ".cache");

rm(pathCache, { recursive: true, force: true }, err => {
    if (err) {
        throw err;
    }
    console.log("Clear cache");
});
