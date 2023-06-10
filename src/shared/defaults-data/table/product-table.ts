import { Product } from "../../models/product.interface";
import { TableColumn } from "../../models/table.interface";

export const ProductTableColumns: TableColumn[] = [
    {name: 'id', label: 'ID'},
    {name: 'title', label: 'Title'},
    {name: 'price', label: 'Price'},
    {name: 'category', label: 'Category'},
    {name: 'description', label: 'Description'}
];

export const ProductTableRows: Product[] = [
    {id: 1, title: 'test', price: '50rs', category: 'any', description: 'any'},
    {id: 2, title: 'test', price: '50rs', category: 'any', description: 'any'}
];