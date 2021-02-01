const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const mapA = {};
  const mapB = {};
  for (let i = 0; i < s.length; i++) {
    if (mapA[s[i]]) {
      mapA[s[i]] += 1;
    } else {
      mapA[s[i]] = 1;
    }
    if (mapB[t[i]]) {
      mapB[t[i]] += 1;
    } else {
      mapB[t[i]] = 1;
    }
  }
  if (Object.keys(mapA).length !== Object.keys(mapB).length) return false;
  const keys = Object.keys(mapA);
  for (let i = 0; i < keys.length; i++) {
    if (mapA[keys[i]] !== mapB[keys[i]]) return false;
  }
  return true;
};

console.log(isAnagram("rat", "car"));
