type MessageErrorType = {
    status: number;
    message: string;
};
declare class MessageError {
    private status;
    private message;
    private messageError;
    constructor(status: number, message: string);
    getMessageError(): MessageErrorType;
}
