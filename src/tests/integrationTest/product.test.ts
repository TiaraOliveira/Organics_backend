import supertest from 'supertest';
import app from '../../app';
import  {prisma}  from '../../database.js'
import productFactory from '../factories/productFactories';


beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test signup Routes',  () => {

  it('Deve retornar status 201 em caso de sucesso', async () => {
    
    const body = await productFactory()
    
    const result = await supertest(app).post(`/products`).send(body);
   
    expect(result.text).toBe("Created");
    expect(result.status).toBe(201);
    
  });

  
});


afterAll(async () => {
    await prisma.$disconnect();
  });
  
  