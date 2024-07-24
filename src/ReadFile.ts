import { promises as fs } from "fs";

export async function read(filePath: string) {
  return await fs.readFile(filePath, "utf-8");
}

export async function checkFileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}
