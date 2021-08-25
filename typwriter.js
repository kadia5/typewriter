// const sentence = "hello there from lighthouse labs";
// let time ;
// let i = 0
// for (const char of sentence) {
  
//   setTimeout(() => {
//     process.stdout.write(char[i])
//     i ++ }, 2000) // <= 1s delay to make it noticeable. Can dial it down later.
  
// }
// from lighthouse labs
const sentence = "hello there";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(sentence.charAt(0));
    //   process.stdout.write(sentence.charAt(char[0]));
  }, 0) // <= 1s delay to make it noticeable. Can dial it down later.
  setTimeout(() => {
    process.stdout.write(sentence.charAt(1));
  }, 50);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(2));
  }, 100);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(3));
  }, 150);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(4));
  }, 200);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(5));
  }, 250);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(6));
  }, 300);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(7));
  }, 350);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(8));
  }, 400);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(9));
  }, 450);
  setTimeout(() => {
    process.stdout.write(sentence.charAt(10));
  }, 500) 
  setTimeout(() => {
    process.stdout.write(sentence.charAt(11));
  }, 550) 
  
  break
  
}

// let timer;

// let i = 0;
// function type() {
//   process.stdout.write(sentence[i]);
//   i++;
//   if(i >= sentence.length) 
//     clearInterval(timer);
// }

// const time = setTimout(type, 500);
// const suntence = "hello there from lighthouse labs";

// const sen1 = suntence.split("");
// console.log(sen1);
//   sen1.forEach((char, index) => {
//     setTimeout(() => {
//       process.stdout.write(char);

//     }, 30 * index)
//   });
 

