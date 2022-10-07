import supertest from 'supertest';
import app from '../../app';
import  {prisma}  from '../../database.js'
import signUpFactorie from '../factories/signUpFactorie';


beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE users`;
});

describe('Test signup Routes',  () => {

  it('Deve retornar status 201 em caso de sucesso', async () => {
    
    const body =  {
        email: "ana@gmail.com",
        password: '12345678910',
        password_confirmation: '12345678910'
      }
      const user = {
        "email": "ana@gmail.com",
        "password": "12345678910"
    }
      await supertest(app).post(`/signup`).send(body);
  
      const result = await supertest(app).post(`/signin`).send(user);
  
      expect(result.status).toBe(201);
      expect(result.text).not.toBeNull();
  });

  it('Deve retornar status 400 caso envie senha não correspondente com usuario', async () => {
    const body =  {
      email: "tiara@gmail.com",
      password: '12345678910',
      password_confirmation: '12345678910'
    }

    await supertest(app).post(`/signup`).send(body);
    
    const wrong = {
      "email": "tiara@gmail.com",
      "password": "xxxxxxxxxxx"
    };

    const result = await supertest(app).post(`/signin`).send(wrong);

    expect(result.status).toBe(400);
    
  });
  it('Deve retornar status 404 caso o usuario não exista no banco', async () => {
    
    const user = {
      "email": "darthVader@gmail.com",
      "password": "12345678910"
  }
   

    const result = await supertest(app).post(`/signin`).send(user);

    expect(result.status).toBe(404);
  
  });
});
