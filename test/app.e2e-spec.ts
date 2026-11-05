import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Simulacao (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.init();
  });

  it('/simulacao/renda-fixa (POST)', () => {
    return request(app.getHttpServer())
      .post('/simulacao/renda-fixa')
      .send({
        aporteInicial: 1000,
        aporteMensal: 500,
        taxaAnual: 10.5,
        prazoMeses: 12,
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.resumo.totalInvestido).toBe(7000);
        expect(res.body.resumo.montanteBruto).toBeGreaterThan(7000);
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
