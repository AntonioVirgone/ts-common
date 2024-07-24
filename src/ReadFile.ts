import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(__dirname, "../../resources");

async function read(fileName: string) {
  return await fs.readFile(`${filePath}/${fileName}.json`, "utf-8");
}

async function checkFileExists(fileName: string): Promise<boolean> {
  try {
    await fs.access(`${filePath}/${fileName}.json`);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = {
  read,
  checkFileExists
}