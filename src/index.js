'use strict'

let result = 0;
let diameter = 0.5;
let thickness = 0.01;

for (let n = 1; n!==13; n++) {
    let currentDiameter = diameter + thickness * n;
    let currentBallVolume = Math.PI * currentDiameter**3 / 6
    result += currentBallVolume;
}

console.log(`Sum of volumes of 12 balls equals ${result} cube meters.`)
