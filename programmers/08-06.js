// function solution(numbers) {
//   const NumberArr=[0,1,2,3,4,5,6,7,8,9]
//   let Wsum=0
//   let Nsum=0
//   let answer=0
//   for(let i =0; i <NumberArr.length;i++){
// 			Wsum= Wsum+NumberArr[i]
//   }
//   for(let i=0; i<numbers.length; i++){
// 		Nsum=Nsum+numbers[i]
//   }
//  answer= Wsum-Nsum;
// 	return answer
// }

function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}
