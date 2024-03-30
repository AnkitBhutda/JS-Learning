const accountId = 14453;
let accountEmail = "ankitbhutda@google.com";
var accountPassword = "12345";
accountCity = "Durg";
let accountState;

// accountId = 2; Not Allowed (TypeError: Assignment to constant variable)

// let accountEmail = 'ankit@gmail.com'; // Not Allowed as let is block scoped
accountEmail = 'ankit@gmail.com'; 
var accountPassword = '54321'; // Allowed as var is function scoped
accountCity = 'Pune';

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var
because Issue in var scope & function scope
*/