import { Module } from '@nestjs/common';
import { RecievedReportsController } from './recieved-reports.controller';
import { RecievedReportsService } from './recieved-reports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecievedReport, RecievedReportSchema } from './schemas/recieved-report.schema';
import { RabbitService } from 'src/rabbit/rabbit.service';
import { RabbitMultaConfig } from 'src/configs/rabbit-multa.config';
import { MultaModule } from 'src/multa/multa.module';

@Module({
    imports:[
        MongooseModule.forFeature([{name:RecievedReport.name,schema:RecievedReportSchema}]),
        RabbitMultaConfig,
        MultaModule
    ],
    controllers: [RecievedReportsController],
    providers: [RecievedReportsService,RabbitService]
  })export class RecievedReportsModule {}
