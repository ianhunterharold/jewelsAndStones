const numJewelsInStones = (J, S) => {

  let splitJewels = J.split('');
  let splitStones = S.split('');
  
  count = 0;

for (let i = 0; i < splitStones.length; i++){
  for (let j =0; j < splitJewels.length; j++){
    if (splitStones[i] === splitJewels[j]){
      count++
    }
  }
}

  return count; 
};
const jewels = 'XzZb';
const stones = 'zzzZZZbbbXXX' // should return six 
numJewelsInStones(jewels,stones)
// solve as a human

// look at the number of jewels, compare them to each stone
// have a tally for the number of jewels that you have matched in S 
// return the value of the number of jewels that you have

// solve as a dev 

//nested loop comparing values and increasing count
