import { Prop, Schema } from "@nestjs/mongoose";
import { HydratedDocument} from "mongoose";

export type MultaDocument = HydratedDocument<Multa>;

@Schema()
export class Multa{

    @Prop()
    idMarket:string;

    @Prop()
    reports:Reports[];
}

interface Reports{
    id:string;
    reason:string;
    product:Product;        
}

interface Product{
    id:string;
    brand:string;
    name:string;
    urlImg:string;
}