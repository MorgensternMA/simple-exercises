import { Almacen } from "./classes/Almacen";
import { EntidadReguladora } from "./classes/EntidadReguladora";
import { Galletita } from "./classes/Galletita";
import { Ingrediente } from "./classes/Ingrediente";
import { Paquete } from "./classes/Paquete";

const almacen = new Almacen();
const reguladora = new EntidadReguladora();

const harina = new Ingrediente("Harina");
const azucar = new Ingrediente("Azúcar");
const leche = new Ingrediente("Leche");
const soja = new Ingrediente("Soja");
const frambuesa = new Ingrediente("Frambuesa");
const cacao = new Ingrediente("Cacao");
const crema = new Ingrediente("Crema");

const Sonrisas = new Galletita("001", "Sonrisas", [harina, azucar, leche, soja, frambuesa]);
const Diversion = new Galletita("003", "Melba", [harina, cacao]);
const Oreo = new Galletita("004", "Oreo", [harina, cacao, crema]);

const paqueteDiversion = new Paquete("002", "Paquete Diversión");
paqueteDiversion.agregarProducto(Sonrisas);
paqueteDiversion.agregarProducto(Diversion);

almacen.agregarProducto(Sonrisas);
almacen.agregarProducto(Diversion);
almacen.agregarProducto(Oreo);
almacen.agregarProducto(paqueteDiversion);

console.log("-----------------------------------------------------");

console.log("Productos antes de aplicar regulaciones:");
almacen.listarProductos();

console.log("-----------------------------------------------------");

reguladora.prohibirIngrediente(harina);
reguladora.prohibirIngrediente(azucar);

reguladora.aplicarRegulaciones(almacen.obtenerProductos());

console.log("Productos después de aplicar regulaciones:");
almacen.listarProductos();

console.log("-----------------------------------------------------");
reguladora.imprimirIngredientesProhibidos();
