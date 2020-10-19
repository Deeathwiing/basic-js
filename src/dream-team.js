module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members = members.filter((e) => {
     return typeof e === "string"
  })
  let result = members.map(item => {
  item = item.trim();
    return item[0].toUpperCase();
  });

  return result.sort().join("");
};
