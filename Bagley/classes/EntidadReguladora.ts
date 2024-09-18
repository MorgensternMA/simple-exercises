import { Ingrediente } from "./Ingrediente";
import { Producto } from "./Producto";

export class EntidadReguladora {
    private ingredientesProhibidos: Set<Ingrediente>;

    constructor() {
        this.ingredientesProhibidos = new Set<Ingrediente>();
    }

    prohibirIngrediente(ingrediente: Ingrediente): void {
        this.ingredientesProhibidos.add(ingrediente);
    }

    aplicarRegulaciones(productos: Set<Producto<any>>): void {
        productos.forEach(producto => {
            this.ingredientesProhibidos.forEach(ingredienteProhibido => {
                producto.eliminarIngrediente(ingredienteProhibido);
            });
        });
    }

    imprimirIngredientesProhibidos(): void {
        console.log(`Ingredientes prohibidos: ${Array.from(this.ingredientesProhibidos).map(i => i.nombre).join(', ')}`);
    }
}