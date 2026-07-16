import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "omkar.txt");

const oldData = await fs.readFile(filePath, "utf8");
console.log("Old:", oldData);

await fs.writeFile(filePath, "this is amazing promise");

const newData = await fs.readFile(filePath, "utf8");
console.log("New:", newData);