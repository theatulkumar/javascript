const accountId = 2001
let accountEmail = "atul@gmail.com"
var accountPassword = "12345"
accountCity = "Bhubaneswar"
let accountState; //if nothing is declared then it will show indefined while console.log

console.log(accountId);
// accountId = 2 // not allowed

accountEmail = "kumar@gmail.com"
accountPassword = "11211"
accountCity = "Ranchi"


/* 
Prefer not to use var 
because of issue in block scope functional scope
*/
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])