const accountId = 2300290
let accountEmail = "abc@gmail.com"
var accountPassword = "XYZ@123"
accountcity = "Jaipur"
// accountId = 12345
// console.log(accountId); we cannot change anything stored in const keyword
accountEmail = "xyz@gmail.com"
accountPassword = "ABC@123"
accountcity = "Jaipur"
/*
we cannot prefer var as it does not have block as well as fuctional scope.
*/
console.log([accountId,accountEmail,accountPassword,accountcity]);
console.table([accountId,accountEmail,accountPassword,accountcity]);
