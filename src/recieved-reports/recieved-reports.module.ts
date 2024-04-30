import { Module } from '@nestjs/common';
import { RecievedReportsController } from './recieved-reports.controller';
import { RecievedReportsService } from './recieved-reports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecievedReport, RecievedReportSchema } from './schemas/recieved-report.schema';

@Module({
    imports:[
        MongooseModule.forFeature([{name:RecievedReport.name,schema:RecievedReportSchema}])
    ],
    controllers: [RecievedReportsController],
    providers: [RecievedReportsService]
  })export class RecievedReportsModule {}
