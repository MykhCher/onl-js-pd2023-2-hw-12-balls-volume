'use strict'

const PI = Math.PI;
let result = 0;

for (let n = 1; n!==13; n++) {
    let diameter = 0.5 + 0.01 * 2 * (n-1);
    let currentBallVolume = 4/3 * PI * (diameter/2)**3
    result += currentBallVolume;
}

console.log(`Sum of volumes of 12 balls equals ${result} cube meters.`)
