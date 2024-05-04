import { Module } from '@nestjs/common';
import { MultaController } from './multa.controller';
import { MultaService } from './multa.service';
import { Multa, MultaSchema } from './schemas/multa.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    MongooseModule.forFeature([{name:Multa.name,schema:MultaSchema}]),
  ],
  controllers: [MultaController],
  providers: [MultaService],
  exports:[MultaService]
})
export class MultaModule {}
