// 1. Array로 사용

const table = [];
table["key"] = 100;
table["key2"] = "hello";
console.log(table["key"]);
table["key"] = 349;
delete table["key"];
console.log(table["key"]);

//2 . object로 사용

const table = {};
table["key"] = 100;
table["key2"] = "hello";
console.log(table["key"]);
table["key"] = 349;
console.log(table["key"]);
delete table["key"];

// 3. Map사용

const table = new Map();
table.set("key", 100);
table.set("key2", "hello");
console.log(table["key"]);
console.log(table.get("key"));
const object = { a: 1 };
table.set(object, "A1"); //Map 은 object도 키로 사용할수 있음
console.log(table.get(object));

// 4. set사용

const table = new Set();
table.add("key");
table.add("key2");
console.log(table.has("key"));
console.log(table.has("key3"));
