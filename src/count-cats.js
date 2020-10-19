
module.exports = matrix => matrix.flat(Infinity).filter((e) => e === "^^").length;
