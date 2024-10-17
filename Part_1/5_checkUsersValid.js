
function checkUsersValid(Users) {
    return function testAllValid(NewUser) {
        for (let i in NewUser) {
            var a = false
            for (let j in Users) {
                if (NewUser[i].id == Users[j].id) {
                    a = true
                    break
                }
            }
            if (!a) {
                return false
            }

        }
        return true
    }
}







const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]


// `checkUsersValid` is the function you'll define
const testAllValid = checkUsersValid(goodUsers)


console.log(testAllValid([
    { id: 2 },
    { id: 1 }
]))
// => true


console.log(testAllValid([
    { id: 2 },
    { id: 4 },
    { id: 1 }
]))
// => false
