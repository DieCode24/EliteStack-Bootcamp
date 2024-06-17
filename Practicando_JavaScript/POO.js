// POO | Programación Orientada a Objetos

// 1) Crear una clase.
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre}`);
    }
  }
  
  // Crear un objeto (instancia) a partir de la clase
  const persona1 = new Persona('Juan', 25);
  persona1.saludar();// Salida: "Hola, mi nombre es Juan"

/*-------------------------------------------------------*/

// 2) Encapsulamiento.
class Cuenta {
  #saldo = 0; // Variable privada con el símbolo #

  depositar(monto) {
    this.#saldo += monto;
  }

  retirar(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
    } else {
      console.log('Saldo insuficiente');
    }
  }

  getSaldo() {
    return this.#saldo;
  }
}

const cuenta = new Cuenta();
cuenta.depositar(1000);
cuenta.retirar(500);
console.log(cuenta.getSaldo()); // Salida: 500

/*-------------------------------------------------------*/

// 3) Herencia
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hablar() {
    console.log(`${this.nombre} hace un sonido.`);
  }
}

class Perro extends Animal {
  ladrar() {
    console.log(`${this.nombre} ladra.`);
  }
}

const perro = new Perro('Firulais');
perro.hablar(); // Salida: "Firulais hace un sonido."
perro.ladrar(); // Salida: "Firulais ladra."

/*-------------------------------------------------------*/

// 4) Polimorfismo
class Perro2 extends Animal {
  hablar() {
    console.log('El perro ladra.');
  }
}

class Gato extends Animal {
  hablar() {
    console.log('El gato maúlla.');
  }
}

const animal = new Animal();
const perro2 = new Perro2();
const gato = new Gato();

animal.hablar(); // Salida: "El animal hace un sonido."
perro2.hablar(); // Salida: "El perro ladra."
gato.hablar(); // Salida: "El gato maúlla."

/*-------------------------------------------------------*/

// 5) Clases abstractas
class Vehiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    console.log(`El vehículo ${this.marca} ${this.modelo} ha arrancado.`);
  }

  // Otros métodos relacionados con la funcionalidad de un vehículo
}

const auto = new Vehiculo('Toyota', 'Corolla');
auto.arrancar(); // Salida: "El vehículo Toyota Corolla ha arrancado."

/* En este ejemplo, la clase Vehiculo oculta los detalles de implementación complejos relacionados con el arranque y el funcionamiento de un vehículo, y proporciona una interfaz simple (arrancar()) para interactuar con el objeto.*/