import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RecievedReport } from './schemas/recieved-report.schema';
import { Model } from 'mongoose';
import { RecievedReportDTO } from './types';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class RecievedReportsService {
    constructor(
        @InjectModel(RecievedReport.name) private recievedReportModel:Model<RecievedReport>,
    ){}

    async create(reportRecieved:RecievedReportDTO):Promise<RecievedReport>{
        if(!reportRecieved){
            throw new RpcException("empty params");
        }
        console.log(reportRecieved);
        const createdReport = new this.recievedReportModel(reportRecieved);
        const savedReport = await createdReport.save();
        return savedReport;
    }

    async getRecievedReportsByIdMarketAndWithoutMulta(idMarket:string):Promise<RecievedReport[]>{
        if(!idMarket){
            throw new RpcException("empty params");
        }

        const query = {'idMarket':idMarket,'idMulta':null};

        const reports:RecievedReport[] = await this.recievedReportModel
        .find(query)
        .exec();
        return reports;
    }
}
