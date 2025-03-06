import { Residence } from "./residence";

export class Apartment {
    id?: number;
    apartNum!: number;
    floorNum!: number;
    surface!: number;
    terrace!: boolean;
    surfaceTerrace!: number
    category!: string;
    residence!: Residence;
}

