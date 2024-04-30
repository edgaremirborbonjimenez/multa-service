import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MultaModule } from './multa/multa.module';
import { RecievedReportsController } from './recieved-reports/recieved-reports.controller';
import { RecievedReportsService } from './recieved-reports/recieved-reports.service';
import { RecievedReportsModule } from './recieved-reports/recieved-reports.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CONNECTION } from './configs/mogo-connection';

@Module({
  imports: [
    MultaModule,
    RecievedReportsModule,
    MongooseModule.forRoot(CONNECTION),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
