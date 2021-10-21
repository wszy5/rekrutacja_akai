// 1. odwróć liczbę
// np dla 12345, funkcja powinna zwrócić 54321
function reverseNumber(n) {
  result = "";
  while(n != 0){
      result += String(n%10);
      n = parseInt(n/10);
  }
  return(result);
}

console.log("1.", reverseNumber(12345));

// 2. doodaj do siebie wszystkie wartości z tablicy, które są parzyste
// dla tablicy tab powinniśmy otrzymać 2 + 4 + 6 + 8 = 20

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  let even_numbers = array.filter(x => x%2==0);
  let sum = even_numbers.reduce((a, b) => a+b);
  return(sum)
}

console.log("2.", addEven(tab));
