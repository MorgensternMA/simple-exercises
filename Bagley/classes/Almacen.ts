import { Producto } from "./Producto";

export class Almacen {
    private productos: Set<Producto<any>>;

    constructor() {
        this.productos = new Set<Producto<any>>();
    }

    agregarProducto(producto: Producto<any>): void {
        this.productos.add(producto);
    }

    listarProductos(): void {
        this.productos.forEach(producto => {
            producto.imprimirProducto();
        });
    }

    obtenerProductos(): Set<Producto<any>> {
        return this.productos;
    }

}