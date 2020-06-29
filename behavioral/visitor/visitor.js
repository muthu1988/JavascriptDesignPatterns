class Integer {
    constructor(value) {
        this.value = value;
    }
    accept(visitor) {
        visitor.visitValue(this);
    }
}

class BinaryExpression {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}

class AdditionExpression extends BinaryExpression {
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
    accept(visitor) {
        visitor.visitAddition(this);
    }
}

class MultiplicationExpression extends BinaryExpression {
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
    accept(visitor) {
        visitor.visitMultiplication(this);
    }
}

class ExpressionPrinter {
    constructor() {
        // todo
        this.exp = [];
    }

    visitValue(value) {
        // todo
        this.exp.push(value.value)
    }

    visitAddition(ae) {
        // todo
        this.exp.push('(');
        ae.lhs.accept(this);
        this.exp.push('+');
        ae.rhs.accept(this);
        this.exp.push(')');
    }

    visitMultiplication(me) {
        // todo
        me.lhs.accept(this);
        this.exp.push('*');
        me.rhs.accept(this);
    }

    toString() {
        // todo
        return this.exp.join('');
    }
}

const addExp = new MultiplicationExpression(new Integer(2), new Integer(3));
const ep = new ExpressionPrinter();
ep.visitMultiplication(addExp);
console.log(ep.toString());
