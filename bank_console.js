import inquirer from "inquirer";
//Bank Account Class
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // Debit money
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawal of $${amount} successful. Remaining Balance : $${this.balance}`);
        }
        else {
            console.log("Insufficiant Balance.");
        }
    }
    // Credit money
    deposit(amount) {
        if (amount > 100) {
            amount -= 1; // 1$ fee charge if more then $100 is deposit
        }
        this.balance += amount;
        console.log(`Deposit of $${amount} successful. Remaining Balance is $${this.balance}`);
    }
    //Check Balance
    checkBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }
}
// customers class 
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    account;
    constructor(firstName, lastName, gender, age, mobileNumber, account) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.account = account;
    }
}
// Create Bank Account
const accounts = [
    new BankAccount(10001, 500),
    new BankAccount(10002, 1000),
    new BankAccount(10003, 1500),
];
// Create Customers,
const customers = [
    new Customer("hamza", "khan", "Male", 25, 2388975455, accounts[0]),
    new Customer("Qadeer", "afridi", "Ml", 24, 53488975455, accounts[1]),
    new Customer("wahid", "khan", "Male", 25, 2488975455, accounts[2])
];
//function to interact with bank account 
async function service() {
    do {
        const accountNumberInput = await inquirer.prompt([
            {
                name: "accountNumber",
                type: "number",
                message: "Enter your account number:"
            }
        ]);
        const customer = customers.find(customer => customer.account.accountNumber === accountNumberInput.accountNumber);
        if (customer) {
            console.log(`Well Come, ${customer.firstName} ${customer.lastName}! \n`);
            const ans = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Select an Option",
                    choices: ["Deposit", "Withraw", "Check Balance", "Exit"]
                }
            ]);
            switch (ans.select) {
                case "Deposit":
                    const DepositAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount for deposit"
                    });
                    customer.account.deposit(DepositAmount.amount);
                    break;
                case "Withraw":
                    const withdrawAmount = await inquirer.prompt({
                        name: "amount",
                        type: "number",
                        message: "Enter the amount for withraw"
                    });
                    customer.account.withdraw(withdrawAmount.amount);
                    break;
                case "Check Balance":
                    customer.account.checkBalance();
                    break;
                case "Exit":
                    console.log("Exiting bank program......");
                    console.log("\n Thank you for using our bank services");
                    return;
            }
        }
        else {
            console.log("Invalid account number. please try again");
        }
    } while (true);
}
service();
