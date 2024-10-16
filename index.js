const userInput= prompt(`Which flavors would you like for your froyo?`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

const flavors= userInput.split(`,`)

let flavorCount = {};


for(let i = 0; i <flavors.length; i++) {
const currentFlavor= flavors[i]
if(flavorCount[currentFlavor]) {
flavorCount[currentFlavor]= 1;
} else {
  flavorCount[currentFlavor] +=1
}
 
};


console.log(flavorCount);