import { Injectable } from '@nestjs/common';
import { CreateSimulacaoDto } from './dto/create-simulacao.dto';

@Injectable()
export class SimulacaoService {
  calcularRendaFixa(dados: CreateSimulacaoDto) {
    const { aporteInicial, aporteMensal, taxaAnual, prazoMeses } = dados;

    const taxaMensal = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;

    let saldo = aporteInicial;
    let totalInvestido = aporteInicial;

    for (let mes = 1; mes <= prazoMeses; mes++) {
      saldo += aporteMensal;
      totalInvestido += aporteMensal;

      saldo += saldo * taxaMensal;
    }

    const montanteBruto = Number(saldo.toFixed(2));
    const totalJuros = Number((montanteBruto - totalInvestido).toFixed(2));

    return {
      resumo: {
        totalInvestido: Number(totalInvestido.toFixed(2)),
        totalJuros,
        montanteBruto,
      },
      parametrosUtilizados: {
        taxaMensalAplicada: Number(taxaMensal.toFixed(5)),
      },
    };
  }
}
