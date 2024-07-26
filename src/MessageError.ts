type MessageErrorType = {
  status: number;
  message: string;
};

class MessageError {
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