console.log("SECTION 1 – Real-Time Function Logic");

// 1. Payroll System:
// Create calculateSalary(basicSalary, bonusPercentage)
// - Calculate bonus
// - Deduct 5% tax
// - Return final salary
// - Print full salary breakdown

function calculateSalary(basicSalary,bonusPercentage){
  // Calculate bonus
  let bonus=(basicSalary*bonusPercentage)/100;
  // Gross salary (basic + bonus)
  let grossSalary=basicSalary+bonus;
  // Tax deduction (5%)
  let tax=grossSalary*0.05;
  // Final salary after tax
  let finalSalary=grossSalary-tax;
  // Print full salary breakdown
  console.log("Basic Salary      :",basicSalary);
  console.log("Bonus Percentage  :",bonusPercentage+"%");
  console.log("Bonus Amount      :",bonus);
  console.log("Gross Salary      :",grossSalary);
  console.log("Tax (5%)          :",tax);
  console.log("Final Salary      :",finalSalary);
  return finalSalary
}
let fullsalary=calculateSalary(30000, 10);
console.log(fullsalary);

// 2. Student Result System:
// Create generateResult(name, marksArray)
// - Calculate total
// - Calculate average
// - Decide Grade (A/B/C/Fail)
// - Return result object

function generateResult(name, marksArray) {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    let average = total / marksArray.length;
    let grade;
    if (average >= 75) {
        grade = "A";
    } 
    else if (average >= 60) {
        grade = "B";
    } 
    else if (average >= 40) {
        grade = "C";
    } 
    else {
        grade = "Fail";
    }
    let result = {
        Name: name,
        Total: total,
        Average: average,
        Grade: grade
    };
    console.log("Name :", name);
    console.log("Marks :", marksArray);
    console.log("Total :", total);
    console.log("Average :", average);
    console.log("Grade :", grade);
    return result;
}

let studentResult = generateResult("Ravi", [78, 65, 80, 70, 60]);
console.log(studentResult);

console.log("SECTION 2 – Scope & Hoisting (Debugging)")
// 3. Debug This Code:
// function demo(){
// if(true){
// var a = 10;
// let b = 20;
// }
// console.log(a);
// console.log(b);
// }
// Questions:
// - What will happen?
// output: 10
// output: ReferenceError: b is not defined

// - Why?
// var a = 10;
// var is function-scoped
// Even though it’s inside if, it belongs to the whole demo() function
// So a is accessible outside the if block 

// let b = 20;
// let is block-scoped
// It exists only inside the {} of the if block
// Outside that block, b does not exist 
// Hence: ReferenceError

// - Fix it properly.
function demo() {
    let b;
    if (true) {
        var a = 10;
        b = 20;
    }
    console.log(a);
    console.log(b);
}
demo();

// 4. Hoisting Analysis:
// console.log(x);
// var x = 100;
// console.log(y);
// let y = 200;
// Predict output and explain.
// var is hoisted and initialized with undefined
console.log(x); // output: undefined
var x = 100; // value assigned after hoisting
// let is hoisted but NOT initialized
//console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 200; 


console.log("SECTION 3 – Callback & Higher Order (Industry Simulation)");
// 5. Order Processing System:
// Create processOrder(orderId, callback)
// - Print "Order Processed"
// - Call generateInvoice(orderId)

function generateInvoice(orderId) {
    console.log("Invoice generated for order :", orderId);
}

function processOrder(orderId, callback) {
    console.log("Order Processed");
    callback(orderId);
}

processOrder(101, generateInvoice);

// 6. Bank Transaction System:
// Create transaction(amount, type, callback)
// - If deposit → add
// - If withdraw → subtract
// - Call sendSMS()

let balance = 1000;
function sendSMS(balance) {
    console.log("SMS Sent: Available Balance :", balance);
}
function transaction(amount, type, callback) {
    if (type === "deposit") {
        balance += amount;
        console.log("Amount Deposited :", amount);
    } else if (type === "withdraw") {
        balance -= amount;
        console.log("Amount Withdrawn :", amount);
    } else {
        console.log("Invalid Transaction Type");
        return;
    }
    callback(balance);
}

// Example usage
transaction(500, "deposit", sendSMS);
transaction(300, "withdraw", sendSMS);


console.log("SECTION 4 – Currying (E-Commerce)");
// 7. Dynamic Price Builder:
// Create priceBuilder(basePrice)(discount)(tax)
// Return final price
// Example: priceBuilder(2000)(15)(18)
function priceBuilder(basePrice) {
    return function (discount) {
        return function (tax) {
            let discountAmount = (basePrice * discount) / 100;
            let priceAfterDiscount = basePrice - discountAmount;
            let taxAmount = (priceAfterDiscount * tax) / 100;
            let finalPrice = priceAfterDiscount + taxAmount;
            return finalPrice;
        };
    };
}
let finalAmount = priceBuilder(2000)(15)(18);
console.log(finalAmount);

console.log("SECTION 5 – IIFE (Security + Encapsulation)");

// SECTION 5 – IIFE (Security + Encapsulation)
// 8. Secure Company Module:

// - Store private variable companyCode
// - Expose getCompanyStatus()
// - companyCode should not be directly accessible

let companyModule = (function () {
    let companyCode = "COMP123"; // private variable
    function getCompanyStatus() {
        return "Company Active with code access restricted";
    }
    return {
        getCompanyStatus: getCompanyStatus
    };
})();
console.log(companyModule.getCompanyStatus());
console.log(companyModule.companyCode); // undefined


console.log("SECTION 6 – Generator (Advanced Logic)");


// 9. Unique Order ID Generator:
// Generate ORD1001, ORD1002, ORD1003, etc.

function* orderIdGenerator() {
    let id = 1000;
    while (true) {
        id++;
        yield "ORD" + id;
    }
}
let gen = orderIdGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);



function* couponSpin() {
    yield "10% OFF";
    yield "20% OFF";
    yield "50% OFF";
    yield "No Luck";
    yield "Jackpot";
}

// 10. Coupon Spin System:
// Yield:
// - 10% OFF
// - 20% OFF
// - 50% OFF
// - No Luck
// - Jackpot
// Simulate multiple spins.
// Simulate multiple spins
let spin = couponSpin();
for (let coupon of spin) {
    console.log("You got :", coupon);
}


// SECTION 7 – Mini Project(Integrated)
// Mini E - Commerce Flow:
// - addToCart(product, price)
//     - calculateTotal()
//     - applyDiscount() using currying
// - generateCoupon() using generator
// // - processPayment() using callback
// - Hide config using IIFE

// IIFE to hide config
let ecommerce = (function () {
    let taxRate = 5; // private config
    let cart = [];
    // Add to cart
    function addToCart(product, price) {
        cart.push({ product: product, price: price });
        console.log(product, "added to cart");
    }
    // Calculate total
    function calculateTotal() {
        let total = 0;
        for (let item of cart) {
            total += item.price;
        }
        return total;
    }

    // Currying for discount
    function applyDiscount(total) {
        return function (discount) {
            let discountAmount = (total * discount) / 100;
            return total - discountAmount;
        };
    }

    // Generator for coupons
    function* generateCoupon() {
        yield "10% OFF";
        yield "20% OFF";
        yield "50% OFF";
        yield "NO LUCK";
        yield "JACKPOT";
    }

    // Payment using callback
    function processPayment(amount, callback) {
        console.log("Processing payment of :", amount);
        callback();
    }

    // SMS callback
    function paymentSuccess() {
        console.log("Payment Successful !!");
    }

    return {
        addToCart: addToCart,
        calculateTotal: calculateTotal,
        applyDiscount: applyDiscount,
        generateCoupon: generateCoupon,
        processPayment: processPayment,
        paymentSuccess: paymentSuccess,
        getTaxRate: function () { return taxRate; }
    };
})();


ecommerce.addToCart("Mobile",15000);
ecommerce.addToCart("Headphones",2000);

let total=ecommerce.calculateTotal();
console.log("Cart Total :",total);
// Apply discount using currying
let finalamount=ecommerce.applyDiscount(total)(10);
console.log("After Discount :",finalamount);
// Generate coupon
let couponGen=ecommerce.generateCoupon();
console.log("Coupon :",couponGen.next().value);
// Process payment using callback
ecommerce.processPayment(finalamount,ecommerce.paymentSuccess);



// 1. Difference between Function Declaration & Function Expression

// Function Declaration
// - Hoisted completely
// - Can be called before definition
// - Has a function name
// example:
// sayHello();
// function sayHello(){ console.log("Hello"); }

// Function Expression
// - Not hoisted (variable hoisting only)
// - Cannot be called before assignment
// - Stored in a variable
// example:
// let sayHello=function(){ console.log("Hello"); };


// 2. What is Higher Order Function?

// - A function that takes another function as argument
//   OR returns a function
// - Used in callbacks, map, filter, reduce
// example:
// function calculate(a,b,operation){
// return operation(a,b);
// }


// 3. Real-time Example of Generator

// - Generating unique order IDs
// - Pagination (load data page by page)
// - Coupon / lottery system
// - Infinite scrolling
// example:
// function* orderId(){
// yield "ORD1001";
// yield "ORD1002";
// }


// 4. Why do we use IIFE?

// - To create private scope
// - To hide sensitive data
// - To avoid global variable pollution
// - Used in module pattern
// example:
// (function(){
// let secret="1234";
// })();


// 5. Difference between var, let, const

// var
// - Function scoped
// - Hoisted and initialized with undefined
// - Can be redeclared and reassigned
// - Not block scoped

// let
// - Block scoped
// - Hoisted but in Temporal Dead Zone
// - Cannot be redeclared
// - Can be reassigned

// const
// - Block scoped
// - Hoisted but in Temporal Dead Zone
// - Cannot be redeclared
// - Cannot be reassigned
// - Used for fixed values













