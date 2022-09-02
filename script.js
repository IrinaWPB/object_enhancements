//1. Same keys and values

function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    };
}

//2. Computed Property Names

const favoriteNumber = 42;
const instructor = {
    [favoriteNumber]: 'That is my favorite',
    firstName: 'Colt'  
};

//3. Object Methods

const instructor1 = {
    firstName: "Colt",
    sayHi() {
        return 'HI';
    },
    sayBye() {
        return 'Say Bye';
    }
};

//4. Create animal function

const createAnimal = (species, verb, noise) => {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
};