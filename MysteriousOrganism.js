// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};


// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let identBases = 0;
// let surviveCCount = 0;
// let surviveGCount = 0;
// let surviveCPercent = 0;
// let surviveGPercent = 0;

let surviveCount = 0;
let survivePercent = 0;

let pAequorFactory = (specimenNum, dna) => {return {
  specimenNum,
  dna,
  mutate() {
    let randomIndex = Math.floor(Math.random() * dna.length);
    if (dna[randomIndex] != returnRandBase()) {
    dna[randomIndex] = returnRandBase();
  }
    return dna;
  },
  compareDNA(pA) {
    for (let i = 0; i < this.dna.length; i++) {
      for (let j = 0; j < pA.length; j++) {
        if (i === j) {
          if (this.dna[i] === pA[j]) {
            identBases++;
            console.log(this.dna[i]);
          }
        }
      }
    }
    return Math.floor(identBases / this.dna.length * 100);
  },
  willLikelySurvive() {
    for (let i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === 'C' || this.dna[i] === 'G') {
        surviveCount++;
      }
      // if (this.dna[i] === 'G') {
      //   surviveGCount++;
      // }
    }

    // I have commented out this tons of code because I was not sure about the way this should work.
    // Task says "P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases."
    // So at first I thought about it as aequor should have 60% of C base OR 60% of G base. The code commented out was just about that case
    // The problem was - there was a little chance any aequor will pass this 60% test. During testing only one or two did it, because randomizer just dont create an aequor
    // full of only C or G bases. So on second I thought I should change the code to check is aequor consists of both C and G bases, and their percentage is more than 60%

      // surviveCPercent = surviveCCount / this.dna.length * 100;
      // surviveGPercent = surviveGCount / this.dna.length * 100;
      // console.log(surviveGCount, surviveCCount);
      // console.log(surviveGPercent, surviveCPercent);
      survivePercent = Math.round(surviveCount / this.dna.length * 100);
      if (survivePercent >= 60) {
        console.log(`Paecuor current C-base and G-base percentage is ${survivePercent}, it will likely survive!`)
        surviveCount = 0;
        return true;
      } else {
        console.log(`Not enough C-base or G-base percentage, pAecour number ${this.specimenNum} will not sirvive`);
        surviveCount = 0;
        return false;
      }
      // if (surviveCPercent >= 60 || surviveGPercent >= 60) {
      //   console.log(`pAecuor current C-base percentage is ${surviveCPercent} and current G-base persentage is ${surviveGPercent}`);
      //   surviveCCount = 0;
      //   surviveCGount = 0;
      //   return true;
      // } else {
      //   console.log(`Not enough C-base or G-base percentage, pAecour number ${this.specimenNum} will not sirvive`);
      //   surviveCCount = 0;
      //   surviveGCount = 0;
      //   return false;
      // }
  }
}
}

// console.log(pAequor.dna);
// console.log(pAequor2.dna);
// console.log(pAequor.compareDNA(pAequor2.dna))
//console.log(pAequor2.dna);
//console.log(pAequor2.willLikelySurvive())

// loop for making some aequors at once
let aequorsArray = [];
  for (let i = 0; i < 30; i++) {
    let randomNumber = Math.floor(Math.random() * 225);
    aequorsArray.push(pAequorFactory(randomNumber, mockUpStrand()));
  }

// console.log(aequorsArray.length);


let survivedAequors = [];
let survivedPusher = (aequor) => {
  if (aequor.willLikelySurvive() === true) {
    survivedAequors.push(aequor);
  }
}

for (let i = 0; i < aequorsArray.length; i++) {
  survivedPusher(aequorsArray[i]);
}
// console.log(survivedAequors);
// console.log(pAequor.dna, pAequor2.dna, pAequor3.dna, pAequor4.dna, pAequor5.dna, pAequor6.dna);
// console.log(survivedAequors);

let dnaStrand = pAequorFactory(123, mockUpStrand());

const complementStrand = (aequor) => {
  let complStrand = [];
  for (let i = 0; i < aequor.dna.length; i++) {
    if (aequor.dna[i] === 'C') {
      complStrand.push('G')
    } else if (aequor.dna[i] === 'G') {
      complStrand.push('C')
    } else if (aequor.dna[i] === 'A') {
      complStrand.push('T')
    } else if (aequor.dna[i] === 'T') {
      complStrand.push('A')
    }
  }
  return complStrand;
}

console.log(dnaStrand.dna, complementStrand(dnaStrand));
