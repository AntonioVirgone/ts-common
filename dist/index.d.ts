export declare function readFile(filePath: string): Promise<string>;
export declare function checkFileExists(filePath: string): Promise<boolean>;
export declare function generateRandomString(length: number): string;
export declare function createFile(filePath: string): Promise<void>;
export declare function write<T>(filePath: string, items: T[]): Promise<void>;
