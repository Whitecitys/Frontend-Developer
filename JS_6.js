class Salary {

    constructor(price, amount,discount) {
        this.price = amount;
        this.amount = amount;
        this.discount = discount;
    }

    setPrice() {
        return this.price;
    }  
    setAmount() {
        return this.amount;
    } 
    setDiscount() {
        return this.discount;
    }
    summary(){
        return (this.amount*this.price)-this.discount;
    }

}

let salary1 = new Salary(10,20,30);
console.log(salary1.summary());

let salary2 = new Salary(40,10,70);
console.log(salary2.summary());