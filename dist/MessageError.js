"use strict";
class MessageError {
    constructor(status, message) {
        this.status = status;
        this.message = message;
        this.messageError = {
            status: status,
            message: message
        };
    }
    getMessageError() {
        return this.messageError;
    }
}
