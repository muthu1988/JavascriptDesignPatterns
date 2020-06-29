let Action = Object.freeze({
    deposit: 0,
    withdraw: 1
});

class Command {
    constructor(action, amount) {
        this.action = action;
        this.amount = amount;
        this.success = false;
    }
}

class Account {
    constructor() {
        this.balance = 0;
    }
    process(cmd) {
        switch (cmd.action) {
            case Action.deposit:
                this.balance = this.balance + cmd.amount;
                cmd.success = true;
                break;
            case Action.withdraw:
                if (this.balance >= cmd.amount) {
                    this.balance = this.balance - cmd.amount;
                    cmd.success = true;
                } else {
                    cmd.success = false;
                }
                break;
        }
    }
    undo(cmd) {
        if(cmd.success) {
            switch (cmd.action) {
                case Action.withdraw:
                    this.balance = this.balance + cmd.amount;
                    break;
                case Action.deposit:
                    if (this.balance >= cmd.amount) {
                        this.balance = this.balance - cmd.amount;
                    }
                    break;
            }
        }
    }
}

const depositCmd = new Command(Action.deposit, 100);
const withdraw = new Command(Action.withdraw, 50);
const a = new Account();
a.process(depositCmd);
console.log(a)
a.process(withdraw);
console.log(a);
a.undo(depositCmd);
console.log(a);
a.undo(withdraw);
console.log(a);