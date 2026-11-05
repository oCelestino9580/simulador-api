import {
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';

export class CreateSimulacaoDto {
  @IsNumber()
  @IsPositive()
  aporteInicial: number;

  @IsNumber()
  @Min(0)
  aporteMensal: number;

  @IsNumber()
  @IsPositive()
  taxaAnual: number;

  @IsNumber()
  @IsPositive()
  prazoMeses: number;
}
