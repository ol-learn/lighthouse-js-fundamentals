const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let returnVegetable = null;
  let submitter = '';
  let bestValue = 0;
  switch (metric) {
  case 'redness':
    for (let vegetable of vegetables) {
      if (bestValue <= vegetable.redness) {
        bestValue = vegetable.redness;
        submitter = vegetable.submitter;
      }
    }
    break;
  case 'plumpness':
    for (let vegetable of vegetables) {
      if (bestValue <= vegetable.plumpness) {
        bestValue = vegetable.plumpness;
        submitter = vegetable.submitter;
      }
    }
    break;
  }

  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

let metric = 'redness';

let submitter = judgeVegetable(vegetables, metric);
console.log(submitter);
metric = 'plumpness';
submitter = judgeVegetable(vegetables, metric);
console.log(submitter);
