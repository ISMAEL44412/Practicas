export class Car {
  // Podemos determinar el nivel de acceso que pueden tener los otros desarrolladores sobre las clases

  public readonly brand: string;
  // readonly: Se puede leer pero no modificar, si se puede modificar en el constructor.
  // public: se puede usar fuera de la clase, modificar etc al menos que se tenga el readonly
  // privated: solo se puede modificar si se esta dentro de de la clase. si se tiene el readonly no se podra cambiar en los metodos de la clase.

  // Las propiedades estatitas solo se pueden llamar o leerlas.
  doors: number;
  isRunning: boolean;

  type: string;
  fuelTank: number;

  private readonly createdAt: number;

  // Para inicializar usamos el constructor
  constructor(brand: string, type: string) {
    // Es la funcion que se va a ejecutar cuando creemos una nueva instancia
    this.brand = brand;
    this.doors = 0;
    this.isRunning = false;
    this.type = type;
    this.fuelTank = 10;

    this.createdAt = 123545;
    // Los metodos son funciones que estan dentro y enlazadas a nuestras clases.
  }
  turnOn() {
    if (this.isRunning) {
      console.log("EL carro ya esta encendido");
      return;
    }
    if (this.fuelTank <= 0) {
      console.log("El carro no tiene nafta");
      return;
    }
    this.isRunning = true;
    console.log("El carro está arrancando");
  }

  /* 
  -  gas: number;
  -  gas > 100, this.fuelTank = 100
  -  gas tiene que ser positivo
  -  si ya esta lleno no sobre llenar
    si el tanque es 50 y añado 20, el valor  sera 70,
    si esta en 90, y añado 50 deberia ser 100 
  */

  // Metodo con argumento
  fillTank(gas: number) {
    if (gas <= 0) {
      console.log("No puede ser un negativo o 0");
      return;
    }
    // Mi forma:

    // if (this.fuelTank == 100) {
    //   console.log("El tanque ya esta lleno");
    //   return;
    // }
    // if (this.fuelTank < 100) {
    //   let fullTank = 100 - this.fuelTank;
    //   if (fullTank > gas) {
    //     this.fuelTank += gas;
    //     console.log("Tanque cargado con: " + gas);
    //   } else {
    //     this.fuelTank += fullTank;
    //     let gasExcess = gas - fullTank;
    //     console.log(
    //       "La capacidad que quieras mandar es superior al espacio del tanque disponible solo ingreso la cantidad de:" +
    //         fullTank
    //     );
    //     console.log("EL gas que no se ingreso es de: " + gasExcess);
    //   }
    //   console.log("Tanque total: " + this.fuelTank);
    // }

    // Profesor:
    // let newFuelTank = this.fuelTank + gas;
    // if (newFuelTank >= 100) {
    //   this.fuelTank = 100;
    // } else {
    //   this.fuelTank = newFuelTank;
    // }
    // Otra forma del profesor:
    let newFuelTank = this.fuelTank + gas;
    if (newFuelTank >= 100) {
      newFuelTank = 100;
    }
    this.fuelTank = newFuelTank;
  }
}

let myMazda = new Car("hola", "mundo");

console.log(myMazda);
myMazda.turnOn();
myMazda.turnOn();
myMazda.fillTank(1300);
console.log(myMazda);
