import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { RecievedReportDTO } from './types';
import { RecievedReportsService } from 'src/recieved-reports/recieved-reports.service';

@Injectable()
export class RabbitService {
    constructor(
        private readonly rrService:RecievedReportsService
    ){}

    @RabbitSubscribe({
        exchange: 'notifier',
        routingKey: 'reports-route',
        queue: 'reports-queue',
    })
    async reportsHandler(report:any){
        const reportRecieved:RecievedReportDTO ={
            idMarket:report.market.id,
            report: {
                id:report._id,
                reason:report.reason,
                product:{
                    id:report.product.id,
                    name: report.product.name,
                    urlImg: report.product.urlImg
                }
            }
        }
        console.log(`Report recieved: ${JSON.stringify(reportRecieved)}`);
        this.rrService.create(reportRecieved);
    } 
}
