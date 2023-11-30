function get(src, path) {
    for (let key of path.split('.')) {
      if (key in src) {
        src = src[key];
      } else {
        return undefined; // Return undefined if the key or path is invalid
      }
    }
    return src;
}
