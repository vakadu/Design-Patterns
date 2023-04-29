class ChatRoom {
    logMessage(user, message) {
        const time = new Date();
        const sender = user.getName();

        console.log(`${time} -> ${sender} -> ${message}`)
    }
}

class User{
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatRoom.logMessage(this, message);
    }
}

const chatRoom = new ChatRoom();

const user1 = new User("vinod", chatRoom);
user1.send("HI there")
