import { ObjectId } from "mongodb";

export type Measures = 'kg' | 'gr' | 'mg' | 'l' | 'ml' ;

export interface Product {
    _id: typeof ObjectId;
    code: string;
    name: string;
    description: string;
    category: string;
    measure: Measures;
    pkg: boolean;
    brand: string
}