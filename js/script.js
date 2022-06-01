// number of km 
let userKm = prompt('Quanti km vuoi percorrere?')

// user age
const userAge = parseInt(prompt('Quanti anni hai?')) 

// ticket
let ticket = userKm * 0.21
console.log(ticket.toFixed(2))

// age discount
let ageDiscount

if (userAge < 18) {
    ageDiscount = ticket * 0.2 
} else if (userAge > 65) {
    ageDiscount = ticket * 0.4
} else {
    ageDiscount = 0
}
console.log(ageDiscount.toFixed(2))

// ticket after discount
let afterTicket = ticket - ageDiscount
console.log(afterTicket.toFixed(2))

// print final price
document.getElementById('result').innerHTML = 'Il prezzo del tuo biglietto sarà di ' + afterTicket.toFixed(2) + ' €'


