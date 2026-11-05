import {
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { SimulacaoService } from './simulacao.service';
import { CreateSimulacaoDto } from './dto/create-simulacao.dto';

@Controller('simulacao')
export class SimulacaoController {
  constructor(private readonly simulacaoService: SimulacaoService) {}

  @Post('renda-fixa')
  @HttpCode(200)
  simularRendaFixa(@Body() dados: CreateSimulacaoDto) {
    return this.simulacaoService.calcularRendaFixa(dados);
  }
}
