//set all the variables
let firstName = prompt("enter your first name")
let state = prompt("enter your states two letter abbreviation")
let temp = Number(prompt("enter the temp in fahrenheit"))
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

//use the inputs from the user to tell them the message
if (state == "ne" && temp <= 32){
  console.log(`${firstName}, ${messages[0]}`)
} else if (state == "ne" && temp >= 32 && temp <= 50) {
  console.log(`${firstName}, ${messages[1]}`)
}else if (state == "fl" && temp >= 32 && temp <= 50) {
  console.log(`${firstName}, ${messages[2]}`)
} else if (state == "fl" && temp >= 50 && temp <= 70) {
  console.log(`${firstName}, ${messages[3]}`)
}