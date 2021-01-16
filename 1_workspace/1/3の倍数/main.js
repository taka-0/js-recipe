// 自分の回答


// for(let i=1;i<24;i++){
// if(i%3===0){
//   console.log(`${i}!!!!!`)
// }
// else{
//   console.log(i)
// }
// }




// 答え

// const genkiFunction = function(number){
//   for (let n=1; n<=number; n++) {
//     if (n % 3 === 0) {
//       console.log(`${n}!!!!!!!`)
//     } else {
//       console.log(n)
//     }
//   }
// }
// genkiFunction(24)

// 関数を指定した方が、応用が利く（一般化）
// genkiFunction(100)


const FizzBuzz =function(number){
  for(let n=1; n<number; n++){
    if (n%3===0 && n%5===0){
      console.log("FizzBuzz");
    }

    else if(n%3===0){
      console.log("Fizz");
    }
    else if(n%5===0){
      console.log("Buzz");
      
    }
    else {
      console.log(n);
    }
   }
}

FizzBuzz(100)


const genkiFunction3 =function(number){


}