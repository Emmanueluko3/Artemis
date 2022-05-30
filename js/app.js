// Question No.1
document.querySelector('.span').innerHTML = 'TEAM ARTEMIS';
document.querySelector('.card').style.borderRadius = '15px';
document.querySelector('.span').style.color = '#fff';
document.querySelector('.span').style.background = 'linear-gradient(195deg, rgba(51, 64, 220, 0.64),  rgba(227, 147, 16, 0.68), rgb(16, 212, 233))';
document.querySelector('.card').style.background = 'linear-gradient(150deg, rgba(51, 64, 220, 0.64),  rgba(22, 109, 1, 0.68), rgb(16, 212, 233))';

// Question No2.
let artemis = [ 'Merit', 'Comely', 'Emmanuel', 'Gabriel-Eta Ekpo', 'Abdulsamad', 'Ayobami SO', 'Danny']

console.log(artemis[2])

// Question No.3
let teamArtemis = { 
    firstName: 'Emmanuel',
    lastName: 'Stephen',
    bestMovie: 'Naruto',
    bestFood: 'Chinese Hot-Pot',
    complexion: 'Light Skinned',
    birthMonth: 'March',
    state: 'Abuja',
    groupName: 'Artemis',
}

console.log(teamArtemis.bestMovie)

// Question No.4
let noun = 'dog'
let verb = 'ran'
let adverb = 'quickly'
let adjective = 'big'

console.log('A' + ' ' + adjective + ' ' + noun + ' ' + verb + ' ' + 'to' + ' ' + 'the' + ' ' + 'store' + ' ' + adverb)
console.log('My' + ' '  + noun + ' ' + 'is' + ' ' + 'very' + ' ' + adjective)
console.log('I' + ' ' + 'have' + ' ' + 'a' + ' ' + adjective + ' ' + noun )
console.log('The' + ' ' + noun + ' ' + verb + ' ' + adverb)
console.log('The' + ' ' + adjective + ' ' + noun + '' + ' just '+ '' + 'died')

// Question No.5
function remainder(par1, par2) {
        return par1+par2
    
}

console.log(remainder(10,  20))


// Question No.6
function quadEquat(a, b, c) {
    let result = ((-b)+ Math.sqrt((b*b)-(4*a*c)))/(2*a);
    let resultNo2 = ((-b)- Math.sqrt((b*b)-(4*a*c)))/(2*a);
    return result + ',' +resultNo2;
    
}
console.log(quadEquat(15, 13, -4));

// Question No.7
const myNoun = 'dog';
const myVerb = 'ran';
const myAdverb = 'quickly';
const myAdjective = 'big';

const wordBlank = 'My';

console.log(wordBlank + ' ' + adjective + ' ' + noun + ' ' + verb + ' ' + adverb)

// Question No.8

function areaOfCircle(r) {
    const pi = 3.142;
    return pi*(r*r);
}

console.log(areaOfCircle(2))

// Question No.9
// Simple Interest (S.I=PxRxT)
// where P=Principal Balance, R=Rate, T=Time/Duration
const principal = 8200
const rate = 17.5 
const time = 30

function simpleInterest() {
    return principal*(1+((rate*time)/100));
}

console.log('Simple'+ ' ' + 'Interest: =' + ' '+'N' + simpleInterest())

// Question No.10
let ans = 10/4 

console.log('Result:= '+ ans)


// Question No.11

// DATA 1.
// Merit's Data
let meritMass = 78
let meritHeight = 1.69
// Nutjob's Data
let nutjobMass = 92
let nutjobHeight = 1.95

function meritBmi(par1, par2) {
    heightSquare = par2*par2
    Bmi = par1/heightSquare
    console.log('Merit BMI:= '+ Bmi)
}

meritBmi(meritMass, meritHeight);

function nutjobBmi(par1, par2) {
    heightSquare = par2*par2
    Bmi = par1/heightSquare
    console.log('Nutjob BMI:= '+ Bmi)
}

nutjobBmi(nutjobMass, nutjobHeight);


// Boolean Variable

let meritHiherBMI = 27.309968138370508 > 24.194608809993426

console.log(meritHiherBMI)



// DATA 2.
// Merit's Data
let merit_sMass = 85
let merit_sHeight = 1.76
// Nutjob's Data
let nutjob_sMass = 95
let nutjob_sHeight = 1.88

function merit_Bmi(par1, par2) {
    heightSquare = par2*par2
    Bmi = par1/heightSquare
    console.log('Merit BMI:= '+ Bmi)
}

merit_Bmi(merit_sMass, merit_sHeight);

function nutjob_Bmi(par1, par2) {
    heightSquare = par2*par2
    Bmi = par1/heightSquare
    console.log('Nutjob BMI:= '+ Bmi)
}

nutjob_Bmi(nutjob_sMass, nutjob_sHeight);


// Boolean Variable

let MeritHiherBMI = 27.44059917355372 > 26.87867813490267

console.log(MeritHiherBMI)