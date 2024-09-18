import { Ingrediente } from "./Ingrediente";
import { Producto } from "./Producto";

export class Galletita extends Producto<Ingrediente> {
    private ingredientes: Set<Ingrediente>;

    constructor(codigo: string, nombre: string, ingredientes: Ingrediente[] = []) {
        super(codigo, nombre);
        this.ingredientes = new Set(ingredientes);
    }

    obtenerIngredientes(): Set<Ingrediente> {
        return this.ingredientes;
    }

    eliminarIngrediente(ingrediente: Ingrediente): void {
        this.ingredientes.forEach(ing => {
            if (ing.esIgual(ingrediente)) {
                this.ingredientes.delete(ing);
            }
        });
    }

    imprimirProducto(): void {
        console.log("~~~~~~~~~~~~~~~~~~~");
        console.log(`Producto simple: ${this.nombre} (Código: ${this.codigo})`);
        console.log(`Ingredientes: ${Array.from(this.ingredientes).map(i => i.nombre).join(', ')}`);
    }
}