// const state = Object.freeze({
//   LOCKED,
//   UNLOCKING,
//   OPEN
// });

// const trigger = Object.freeze({
//   'enteringCode': [{
//     trigger: 'enteringCode',
//     state: state.LOCKED
//   }, {
//     trigger: 'enteringCode',
//     state: state.OPEN
//   }]
// })

class CombinationLock {
  constructor(combination) {
    this.combination = combination;
    this.combinationEntered = [];
    this.reset();
  }

  reset() {
    // reset lock state here
    this.status = 'LOCKED';
    this.combinationEntered = [];
  }

  enterDigit(digit) {
    // set this.status depending on state of the lock
    if (isNaN(digit)) {
      this.reset()
    } else {
      this.combinationEntered.push(digit);
      if(this.combinationEntered.length === this.combination.length &&
        this.combinationEntered.join('') === this.combination.join('')) {
        this.status = 'OPEN';
      } else if(!this.combination.join('').startsWith(this.combinationEntered.join(''))) {
        this.status = 'ERROR';
      } else {
        this.status = this.combinationEntered.join('');
      }
    }
  }
}

let cl = new CombinationLock([1, 2, 3, 4, 5]);
console.log(cl.status);
cl.enterDigit(1);
console.log(cl.status);
cl.enterDigit(2);
console.log(cl.status);
cl.enterDigit(3);
console.log(cl.status);
cl.enterDigit(4);
console.log(cl.status);
cl.enterDigit(5);
console.log(cl.status);