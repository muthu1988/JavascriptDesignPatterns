class Company {
    get ceo() {
        return Company._ceo
    }
    set ceo(ceo) {
        Company._ceo = ceo;
    }
    get ceoAge() {
        return Company._ceo
    }
    set ceoAge(ceoAge) {
        Company._ceoAge = ceoAge;
    }
}
Company._ceo = undefined;
Company._ceoAge = undefined;

const c1 = new Company();
c1.ceo = 'muthu';
c1.ceoAge = 30;
const c2 = new Company();
console.log("Different obj so c1 === c2 is " + (c2 === c1));
console.log('But share common state so c1.ceo === c2.ceo is ' + (c1.ceo === c2.ceo));