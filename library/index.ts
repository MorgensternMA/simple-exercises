import { Conjunto } from "./classes/Conjunto";
import { ConjuntoOrdenado } from "./classes/ConjuntoOrdenado";
import { Lista } from "./classes/Lista";
import { ListaOrdenada } from "./classes/ListaOrdenada";
import { Pila } from "./classes/Pila";
import { Queue } from "./classes/Queue";
import { Vector } from "./classes/vector";

// Demostración de Conjunto
console.log('Conjunto:');
const conjunto = new Conjunto<number>();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
console.log('Valores:', conjunto.values()); // [1, 2, 3]
console.log('Tamaño:', conjunto.size()); // 3
console.log('Contiene 2:', conjunto.has(2)); // true
console.log('Eliminar 2:', conjunto.delete(2)); // true
console.log('Valores después de eliminar 2:', conjunto.values()); // [1, 3]

// Demostración de ConjuntoOrdenado
console.log('\nConjunto Ordenado:');
const conjuntoOrdenado = new ConjuntoOrdenado<number>((a, b) => a - b);
conjuntoOrdenado.add(5);
conjuntoOrdenado.add(1);
conjuntoOrdenado.add(3);
console.log('Valores ordenados:', conjuntoOrdenado.values()); // [1, 3, 5]

// Demostración de Vector
console.log('\nVector:');
const vector = new Vector<number>();
vector.add(10);
vector.add(20);
vector.add(30);
console.log('Valores:', vector.values()); // [10, 20, 30]
console.log('Tamaño:', vector.size()); // 3
console.log('Contiene 20:', vector.has(20)); // true
console.log('Eliminar 20:', vector.delete(20)); // true
console.log('Valores después de eliminar 20:', vector.values()); // [10, 30]

console.log('Pila (Stack):');
const pila = new Pila<number>();
pila.add(1);
pila.add(2);
pila.add(3);
console.log('Valores:', pila.values()); // [1, 2, 3]
console.log('Tamaño:', pila.size()); // 3
console.log('Peek:', pila.peek()); // 3
console.log('Pop:', pila.pop()); // 3
console.log('Valores después de pop:', pila.values()); // [1, 2]

console.log('\nCola (Queue):');
const cola = new Queue<number>();
cola.add(1);
cola.add(2);
cola.add(3);
console.log('Valores:', cola.values()); // [1, 2, 3]
console.log('Tamaño:', cola.size()); // 3
console.log('Peek:', cola.peek()); // 1
console.log('Dequeue:', cola.dequeue()); // 1
console.log('Valores después de dequeue:', cola.values()); // [2, 3]

console.log('\nLista:');
const lista = new Lista<number>();
lista.add(1);
lista.add(2);
lista.add(3);
console.log('Valores:', lista.values()); // [1, 2, 3]
console.log('Tamaño:', lista.size()); // 3
console.log('Contiene 2:', lista.has(2)); // true
console.log('Eliminar 2:', lista.delete(2)); // true
console.log('Valores después de eliminar 2:', lista.values()); // [1, 3]

console.log('\nLista Ordenada:');
const listaOrdenada = new ListaOrdenada<number>((a, b) => a - b);
listaOrdenada.add(3);
listaOrdenada.add(1);
listaOrdenada.add(2);
console.log('Valores ordenados:', listaOrdenada.values());