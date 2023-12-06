const every = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
};

const some = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return true;
    }
  }
  return false;
};

const none = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return false;
    }
  }
  return true;
};