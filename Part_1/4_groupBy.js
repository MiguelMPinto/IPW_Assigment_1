

Array.prototype.groupBy = function (transformer) {
    const group = {};

    this.forEach(element => {
        const key = transformer(element);

        // Verifica se a chave já existe no objeto 'grouped'
        if (!group[key]) {
            group[key] = [];  // Se a chave não existir, cria um array vazio
        }

        group[key].push(element);
    });

    return group;
};


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.groupBy(n => n % 2 === 0 ? 'even' : 'odd'));

// Output:
// {
// odd: [1, 3, 5, 7, 9],
// even: [2, 4, 6, 8, 10]
// }

let people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 35 }
];

console.log(people.groupBy(person => person.age));

// Output:
// {
// 30: [{ name: "Alice", age: 30 }, { name: "Bob", age: 30 }],
// 25: [{ name: "Charlie", age: 25 }],
// 35: [{ name: "David", age: 35 }]
// }
