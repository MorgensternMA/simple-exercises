import { ExpenseManager } from "./classes/ExpenseManager";
import { ExtraordinaryBill } from "./classes/ExtraordinaryBill";
import { ServiceBill } from "./classes/ServiceBill";
import { ShoppingBill } from "./classes/ShoppingBill";

// Crear instancias de los diferentes tipos de gastos
const purchaseBill = new ShoppingBill("Cleaning Products", 3000);
const serviceBill = new ServiceBill("ServiLimp", 2500);
const extraordinaryBill = new ExtraordinaryBill("Office Renovation", 1500);

// Crear un gestor de gastos
const expenseManager = new ExpenseManager();

// Agregar los gastos al gestor
expenseManager.addBill(purchaseBill);
expenseManager.addBill(serviceBill);
expenseManager.addBill(extraordinaryBill);

// Imprimir el listado de gastos
expenseManager.printAllExpenses();
