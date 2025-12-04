// Constructor Inheritance (Pewarisan Constructor)
// Dalam constructor kita bisa membuat property baik itu berisi value ataupun function
// DI dalam constructor, kita bisa memanggil constructor lain
// Maka apabila sudah constructor bisa dipanggil di constructor lain dia akan mengcopy seluruh property bahkan method
// yang bisa di akses pada constructor yang memanggil (seperti di copy)
// Cara memanggilnya gunakan NamaConstructor.call(this, parameter)

// Contoh
function Employee(firstName) {
   this.nama = firstName;
   this.sayHello = (name) => {
      console.info(`Hai ${name}, nama aku ${this.firstName}`)
   }
}

function Hod(firstName, lastName) {
   Employee.call(this, firstName);
   this.sayHi = ()=> {this.sayHello(lastName)}
}

const kiki = new Hod("Harun", "Masiku")
kiki.firstName = "Kiki"
kiki.sayHi("Bahlil")
