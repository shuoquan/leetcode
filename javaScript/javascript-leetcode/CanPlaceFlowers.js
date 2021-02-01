const canPlaceFlowers = function(flowerbed, n) {
  let hasFlower = false;
  let count = 0;
  let sum = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      count += 1;
    } else {
      sum += hasFlower ? Math.ceil(count / 2) - 1 : Math.floor(count / 2);
      count = 0;
      hasFlower = true;
    }
    if(i===flowerbed.length-1&&flowerbed[i]===0){
        sum += hasFlower ? Math.floor(count / 2)  : Math.ceil(count / 2);
    }
  }
  return sum >= n;
};

console.log(canPlaceFlowers([1,0,0,0,1],1));
