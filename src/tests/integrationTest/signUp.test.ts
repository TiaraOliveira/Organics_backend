import { faker } from '@faker-js/faker';
import supertest from 'supertest';
import app from '../../app';
import { prisma } from '../../database'
import signUpFactorie from '../factories/signUpFactorie';


beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test signup Routes',  () => {

  it('Deve retornar status 409 caso já exista um user com referente titulo', async () => {
    
    const body = signUpFactorie()
   
    await supertest(app).post('/signup').send(body);

    const result = await supertest(app).post('/signup').send(body);

    expect(result.status).toBe(409);
  });


  it('Deve retornar status 201 caso já exista um user com referente titulo', async () => {
    const body = signUpFactorie()
    
    const result = await supertest(app).post('/signup').send(body);

    expect(result.status).toBe(201);
  });
 
});
