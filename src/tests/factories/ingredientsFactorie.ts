import { faker } from '@faker-js/faker';

export default async function ingredientsFactory() {
    const link = `https://${faker.lorem.words(1)}`
    return {

        name: faker.lorem.words(4),
        supplier: faker.lorem.words(4),
        isOrganic: faker.helpers.arrayElement(['sim', 'não']),
        certificate: link,
        invoice: link,
        buyDate: faker.date.past(), 
        productBatch: faker.lorem.words(1)
             
    }
}
