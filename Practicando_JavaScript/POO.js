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