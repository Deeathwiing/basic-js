module.exports = (disksNumber, turnsSpeed) => ({
  turns: 2 ** disksNumber - 1,
  seconds: Math.floor(((2 ** disksNumber - 1) / turnsSpeed) * 60 * 60),
});
