import { Module } from '@nestjs/common';
import { MultaController } from './multa.controller';
import { MultaService } from './multa.service';

@Module({
  controllers: [MultaController],
  providers: [MultaService]
})
export class MultaModule {}
