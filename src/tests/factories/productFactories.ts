import { faker } from '@faker-js/faker';

export default async function productFactory() {

    return {
        name: faker.lorem.words(4)
    }
}
