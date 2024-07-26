type MessageErrorType = {
    status: number;
    message: string;
};
export declare class MessageError {
    private status;
    private message;
    private messageError;
    constructor(status: number, message: string);
    getMessageError(): MessageErrorType;
}
export {};
