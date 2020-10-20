module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        result.pop();
        break;

      case "--double-next":
        arr[i + 1] !== undefined ? result.push(arr[i + 1]) : null;
        break;

      case "--double-prev":
        arr[i - 1] !== undefined ? result.push(arr[i - 1]) : null;
        break;

      case "--discard-next":
        arr[i + 2] && arr[i + 2].toString().includes("-prev")
          ? (i += 2)
          : (i += 1);

        break;

      default:
        result.push(arr[i]);
        break;
    }
  }
  return result;
};
