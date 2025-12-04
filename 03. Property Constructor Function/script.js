// Karna constructor function bersifat seperti cetakan yang bisa digunakan berulang kali
// Maka ketika membuat object baru, dia otomatis juga akan mewarisi property nya sekaligus
// Pada constructor function menggunakan kata kunci this untuk mewakili nama objectnya diikuti nama propertynya

// Contoh
function Person () {
   this.firstName = "" // this digunakan untuk membuat nama property yang mewakili nama object
   this.lastName = "" // this digunakan untuk membuat nama property yang mewakili nama object
}

// Membuat Object Baru
// Pada Object 1 & 2, object otomatis mewarisi property (firstName, dan lastName) milik function Person
// Sehingga object baru mewarisi propertynya

// Object 1
const kiki = new Person();
kiki.firstName = "Kiki"
kiki.lastName = "Afrianto"

// Object 2
const rani = new Person();
rani.firstName = "Rani"
rani.lastName = "Nurfadilah"

console.info(`Hai aku adalah ${rani.firstName}`)