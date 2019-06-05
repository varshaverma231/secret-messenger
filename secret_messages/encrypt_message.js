// String
var plain_text = "MySecretMessage";

// Getting a Character
console.log(plain_text.charAt(0));

// String Function we will use
plain_text.charAt(0);
plain_text.charCodeAt(0);
String.fromCharCode(65);
plain_text.substr(0, 2);
plain_text.substr(2)


// Printing Character codes for 0 - 127
for(var i = 0; i < 128; i++) {
    console.log(i+" => "+String.fromCharCode(i));
}


