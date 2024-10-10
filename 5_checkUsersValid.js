




const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]


// `checkUsersValid` is the function you'll define
const testAllValid = checkUsersValid(goodUsers)


testAllValid([
    { id: 2 },
    { id: 1 }
])
// => true


testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
])
// => false
