export class Ingrediente {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    esIgual(ingrediente: Ingrediente): boolean {
        return this.nombre === ingrediente.nombre;
    }
}
