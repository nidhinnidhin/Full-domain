function sortStack(stack) {
  let tempStack = [];

  while (stack.length > 0) {
    let temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }
  return tempStack;
}

let stack = [34, 3, 31, 98, 92, 23];
let sortedStack = sortStack(stack);
console.log(sortedStack);