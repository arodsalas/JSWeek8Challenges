var tomh = 9
var tomw = 8
var jerryh = 10
var jerryw = 45
const tomBmi = bmi(tomw, tomh)
const jerryBmi = bmi(jerryw, jerryh)

function bmi(weight, height) {
  return (weight / height / height) * 703
}

console.log(tomBmi)
console.log(jerryBmi)

const tomBmiHigherThanjerryBmi = tomBmi > jerryBmi
console.log(tomBmiHigherThanjerryBmi)


console.log('is Toms BMI higher than Jerrys? ' + tomBmiHigherThanjerryBmi )