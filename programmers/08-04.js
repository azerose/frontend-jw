function solution(a, b) {
    let arr =[a,b]
    arr.sort((a,b)=>a-b)
    var answer = 0;
    for(let i =arr[0]; i<=arr[1];i++){
      answer = answer+i
    }  
    return answer;
}