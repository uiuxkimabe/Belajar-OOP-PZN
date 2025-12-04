// Method di constructor Function

// Sama seperti pada tipe data object biasa, kita juga bisa menambahkan method di dalam constructor function
// Contohnya kayak gini

const objectA = {
   nama: "Cimin",
   sayHello() {
      console.info(`Hello, nama gue ${this.nama}`) // kata kunci this digunakan untuk memanggil property dalam object
   }
}
// Panggil Object
// objectA.sayHello() // => Hasilnya : Hello, nama gue Cimin

// dan jika pada constructor functionnya di tambahkan method, maka object baru otomatis mewarisi methodnya

// Contoh method di constructor function
function Person() {
   this.firstName = "";
   this.lastName = "";
   // method (function)
   this.sayHello = (students) => {
      console.info(`Halo ${students}, nama saya ${this.firstName}`)
   }
}

// object
const kiki = new Person()
kiki.firstName = "Kiki";
kiki.sayHello("Anak kelas 6 B"); // <= memanggil functionnnya