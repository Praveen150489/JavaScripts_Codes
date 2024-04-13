const accountId = 144553;
let emailId = "prakash.praveen@gmial.com";
var accountPwd = "12345";
accountCity = "Jaipur";
let accountState;

console.log(accountCity);

// accountId = 10;  // we can't assign new value to const variable.
emailId = "himanshu56@yahoo.com"   // we can change value of let variable.
accountPwd = "xyz";                // we can change value of var variable.
accountCity = "Delhi";              // we can also change value of default variable

console.log(accountId);
console.log(emailId);
console.log(accountPwd);
console.log(accountCity);

// accountCity = 999;
// console.log(accountCity);

// emailId = 888;
// console.log(emailId);

console.table([accountId, emailId, accountPwd, accountCity, accountState]);

/*
Prefer not to use var
because of issue in block scope and function scope
*/
