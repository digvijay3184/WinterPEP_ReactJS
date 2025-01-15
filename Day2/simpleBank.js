var account= {
    name:"", 
    balance:0,
};

function createAccount(name , balance = 0 ){
    account.name = name ;
    account.balance = balance ;
    console.log(`Welcome ${account.name} your initail deposit is ${account.balance}`)
}

function deposit (amount){
    if(amount<=0){
        console.log(`insuffinciant balance `)
        return;
    }
    account.balance += amount ;
    console.log(`your balance after deposit is ${account.balance}`);
}

function checkBalance(){
    console.log(`Your balance is ${account.balance}`)
}

function withdraw(amount){
    if(amount <= 0){
        console.log("wrong input");
        return ;
    }
    if(amount.balance <= 0){
        console.log("Insufficiant Balance");
        return ;
    }
    amount.balance -= amount;
}

createAccount('Digvijay Singh')
deposit(100); 
withdraw(50); 
checkBalance();