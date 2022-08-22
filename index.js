function test() {
    let a;
    console.log(a);
    console.log(foo());
     
    a = 1;
    function foo() {
       return 2;
    }
  }
  
  test();

// ANSWER:

// In the first CL, (a) hasn't been assigned a value until the inner scope which is returned on line 8.

let a = 1; 
  
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  
  a = 5;
  
  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);

console.log(result);

// ANSWER: 
// The result is 5.

let fullname = 'John Doe';
  const obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  const test2 = obj.prop.getFullname;
 
  
  console.log(test2());

//   3. What is the result of the following code? Explain your answer.

// ANSWER:
// It first crashed because 'test' had already been declared as a function. Upon changing the variable name to 'test2', you can access the global scope from the inner scope but the outer scope variable remains undefined.

let x = 1; 
  function b() { 
      x = 10; 
      return; 
      function x() {} 
  } 
  b(); 
  console.log(x);

//   4. What will you see in the console for the following example?

// ANSWER:

//  1
