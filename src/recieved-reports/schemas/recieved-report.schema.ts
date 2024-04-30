import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ReportDocument = HydratedDocument<RecievedReport>;

@Schema()
export class RecievedReport{

    @Prop()
    report:Reports;

    @Prop()
    idMarket:string;

    @Prop()
    idMulta:string;

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

export const RecievedReportSchema = SchemaFactory.createForClass(RecievedReport);