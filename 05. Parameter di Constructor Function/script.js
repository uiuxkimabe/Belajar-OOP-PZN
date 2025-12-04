// Parameter di Constructor Function

// Constructor Function sama seperti function biasanya, dan konsep class itu berbentuk function
// Maka dari itu function bisa membuat parameter demikian juga class
// Kita bisa mengirim langsung data lewat parameter di constructor function tersebut.

// Contoh
function Person(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.sayHello = function (name) {
      console.info(`Hello ${name}, nama saya ${this.firstName} ${this.lastName}`)
   }
}

// Membuat object baru
const kiki = new Person("Kiki", "Afrianto")
kiki.sayHello("Brata")