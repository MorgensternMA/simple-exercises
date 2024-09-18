import { Galletita } from "./Galletita";
import { Ingrediente } from "./Ingrediente";
import { Producto } from "./Producto";

export class Paquete extends Producto<Galletita> {
    private productos: Galletita[];

    constructor(codigo: string, nombre: string) {
        super(codigo, nombre);
        this.productos = [];
    }

    agregarProducto(producto: Galletita): void {
        if (producto instanceof Galletita) {
            this.productos.push(producto);
        } else {
            console.error("Solo se pueden agregar productos simples al paquete.");
        }
    }

    obtenerIngredientes(): Set<Ingrediente> {
        const ingredientesCombinados = new Set<Ingrediente>();
        this.productos.forEach(producto => {
            producto.obtenerIngredientes().forEach(ingrediente => {
                ingredientesCombinados.add(ingrediente);
            });
        });
        return ingredientesCombinados;
    }

    eliminarIngrediente(ingrediente: Ingrediente): void {
        this.productos.forEach(producto => producto.eliminarIngrediente(ingrediente));
    }

    imprimirProducto(): void {
        console.log("~~~~~~~~~~~~~~~~~~~");
        console.log(`Producto compuesto: ${this.nombre} (Código: ${this.codigo})`);
        console.log(`Ingredientes combinados: ${Array.from(this.obtenerIngredientes()).map(i => i.nombre).join(', ')}`);
    }
}