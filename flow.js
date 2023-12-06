const flow = (funcs) => {
  if (!Array.isArray(funcs)) {
    funcs = [funcs];
  }
  if (funcs.length === 0) {
    return (...args) => args[0];
  }
  return (...args) => {
    return funcs.reduce((result, func) => {
      return func(...result);
    }, args);
  };
};