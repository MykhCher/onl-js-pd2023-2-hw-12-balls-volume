'use strict'

let result = 0;
let diameter = 0.5;
let thickness = 0.01;

for (let n = 0; n<12; n++) {
    /* Питання з приводу цієї задачі:
    Чи правильно я розумію, що якщо товщина шара - 1см, то діаметр кожного 
    наступного шара буде зростати на 2 см (по сантиметру з кожної сторони)?
    */
    let currentDiameter = diameter + thickness * 2*n;
    let currentBallVolume = (Math.PI * (currentDiameter**3)) / 6;
    console.log(currentBallVolume);
    result += currentBallVolume;
}

console.log(`Sum of volumes of 12 balls equals ${result} cube meters.`)
