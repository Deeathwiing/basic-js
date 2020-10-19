module.exports = (sampleActivity) => {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;
  if (typeof sampleActivity === "string") {
    sampleActivity = Number(sampleActivity);
    if (
      sampleActivity <= 0 ||
      sampleActivity > MODERN_ACTIVITY ||
      isNaN(sampleActivity)
    )
      return false;
    const k = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  }
  return false;
};
