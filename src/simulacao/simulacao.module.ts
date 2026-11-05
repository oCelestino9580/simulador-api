import { Module } from '@nestjs/common';
import { SimulacaoController } from './simulacao.controller';
import { SimulacaoService } from './simulacao.service';

@Module({
  controllers: [SimulacaoController],
  providers: [SimulacaoService],
})
export class SimulacaoModule {}
