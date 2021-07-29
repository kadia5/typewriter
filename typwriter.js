// const sentence = "hello there from lighthouse labs";
// let time ;
// let i = 0
// for (const char of sentence) {
  
//   setTimeout(() => {
//     process.stdout.write(char[i])
//     i ++ }, 2000) // <= 1s delay to make it noticeable. Can dial it down later.
  
// )}
const sentence = "hello there from lighthouse labs";

let timer;

let i = 0;
function type() {
  process.stdout.write(sentence[i]);
  i++;
  if(i >= sentence.length) 
    clearInterval(timer);
}

// const time = setTimout(type, 500);
// const suntence = "hello there from lighthouse labs";

// const sen1 = suntence.split("");
// console.log(sen1);
//   sen1.forEach((char, index) => {
//     setTimeout(() => {
//       process.stdout.write(char);

//     }, 30 * index)
//   });
 

