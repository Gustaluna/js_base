const grades = [10, 6.5, 8, 7.5]

let sumOfGrades = 0

for (element of grades) {
    sumOfGrades += element
}

console.log(sumOfGrades)

const average = sumOfGrades / grades.length

console.log(`The avarage of grades is ${average}`)