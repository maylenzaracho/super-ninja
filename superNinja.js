class Ninja {
    constructor(nombre) {
        this.nombre = nombre;
        this.salud = 90;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`Mi nombre es ${this.nombre}`);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`${this.nombre} bebió sake y ganó 10 puntos de salud. Salud total: ${this.salud}`);
    }
}

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre);
        this.salud = 190;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10; 
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}, Sabiduría: ${this.sabiduria}`);
    }
}

// Ninja
const nombreUsuario = "May"; // podés cambiar al nombre que quieras
const ninjaUsuario = new Ninja(nombreUsuario);
ninjaUsuario.sayName();
ninjaUsuario.showStats();
ninjaUsuario.drinkSake();

// Super Ninja
const nombreSensei = "Sensei Ivo"; // podés cambiar al nombre que quieras
const senseiUsuario = new Sensei(nombreSensei);
senseiUsuario.sayName();
senseiUsuario.showStats();
senseiUsuario.speakWisdom();
