
class Token {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

class ExpressionProcessor {
    constructor() {
        this.variable = {};
    }

    calculate(expression) {
        return this.parse(this.lex(expression));
    }

    parse(lex) {
        let value = 0;
        let currentOperation = 'ADD';
        if(lex) {
            for (let index = 0; index < lex.length; index++) {
                const currentToken = lex[index];
                switch (currentToken.type) {
                    case 'ADD':
                        currentOperation = 'ADD';
                        break;
                    case 'SUB':
                        currentOperation = 'SUB';
                        break;
                    default:
                        if(currentOperation === 'SUB') {
                            value = value - parseInt(currentToken.value);
                        } else {
                            value = value + parseInt(currentToken.value);
                        }
                        break;
                }
            }
        }
        return value;
    }

    lex(expression) {
        let result = [];
        for (let index = 0; index < expression.length; index++) {
            const element = expression[index];
            switch (element) {
                case '+':
                    result.push(new Token('ADD', element));
                    break;
                case '-':
                    result.push(new Token('SUB', element));
                    break;
                default:
                    let num = element;
                    for (let j = index + 1; j < expression.length; j++) {
                        if (isNaN(expression[j]) && !this.variable[expression[j]]) {
                            break;
                        } else if (isNaN(expression[j]) && this.variable[expression[j]]) {
                            num = num + '' + this.variable[expression[j]];
                            index++;
                        } else {
                            num = num + '' +expression[j];
                            index++;
                        }
                    }
                    num = this.variable[num] ? this.variable[num] : parseInt(num);
                    if(isNaN(num)) return 0;
                    result.push(new Token('NUM', num));
                    break;
            }
        }
        return result;
    }
}

const processor = new ExpressionProcessor();
processor.variable['x'] = 10;
console.log('12+13+x' + '=' + processor.calculate('12+13+x'));
console.log('12+13' + '=' + processor.calculate('12+13'));
console.log('12+13-x-5' + '=' + processor.calculate('12+13-x-5'));
