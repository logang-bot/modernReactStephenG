let test = "null";
export function testF() {
  test = "notnull";
}

testF();
console.log(test);

export default test;
