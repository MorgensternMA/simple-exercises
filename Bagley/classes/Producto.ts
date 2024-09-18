import { Ingrediente } from "./Ingrediente";

export abstract class Producto<T> {
    protected elements: Set<T> = new Set<T>();
    protected nombre: string;
    protected codigo: string;

    constructor(codigo: string, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
    
    abstract obtenerIngredientes(): Set<Ingrediente>;
    abstract eliminarIngrediente(ingrediente: Ingrediente): void;
    abstract imprimirProducto(): void;
}
