const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];

let count = 0;
let sum = 0;

for (let i = 0; i < myShopping.length; i++) {
  if (myShopping[i].category === "의류") {
    count = count + 1;
    sum = sum + myShopping[i].price;
  }
}
if (0 <= count && count <= 2) {
  console.log(
    `의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}이며 등급은 Bronze입니다.`
  );
} else if (3 <= count && count <= 4) {
  console.log(
    `의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}이며 등급은 Silver입니다.`
  );
} else {
  console.log(
    `의류를 구매한 횟수는 총 ${count}회 금액은 ${sum}이며 등급은 Gold입니다.`
  );
}

//로직 접근
//1.인덱스를 통해 전체 내용을 읽어오기
//2.카테고리에서 의류 필터링
//3.인덱스를 통해 count ++ 를 하며 인덱스의 벨류값 더하기
//4.if문을 활용해 count에 따른 등급 나눠주기
//
//
