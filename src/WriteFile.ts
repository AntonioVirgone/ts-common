import { promises as fs } from "fs";

export async function createFile(filePath: string) {
  await fs.writeFile(filePath, JSON.stringify([]), "utf-8");
}

export async function write<T>(filePath: string, items: T[]) {
  await fs.writeFile(filePath, JSON.stringify(items), "utf-8");
}
