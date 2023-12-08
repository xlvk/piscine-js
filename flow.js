function flow(funcs) {
  return function(...args) {
    let result = funcs[0](...args); // Execute the first function with the arguments
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i](result); // Pass the result to the next function
    }
    return result; // Return the final result
  };
}
