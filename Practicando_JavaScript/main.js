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