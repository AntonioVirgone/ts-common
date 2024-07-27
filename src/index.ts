import { MessageErrorType } from "./MessageError";
import * as r from "./ReadFile";
import * as s from "./StringUtils";
import * as w from "./WriteFile";

export async function readFile(filePath: string): Promise<string> {
  return r.readFile(filePath);
}

export async function checkFileExists(filePath: string): Promise<boolean> {
  return r.checkFileExists(filePath);
}

export function generateRandomString(length: number): string {
  return s.generateRandomString(length);
}

export async function createFile(filePath: string) {
  await w.createFile(filePath);
}

export async function write<T>(filePath: string, items: T[]) {
  await w.write(filePath, items);
}

export class MessageError {
    private messageError: MessageErrorType;
    
    constructor(private status: number, private message: string) {
        this.messageError = {
            status: status,
            message: message
        }
    }

    getMessageError(): MessageErrorType {
        return this.messageError;
    }
}