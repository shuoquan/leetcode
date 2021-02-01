const validIPAddress = function(IP) {
  let type = 0;
  for (let i = 0; i < IP.length; i++) {
    if (IP[i] === ".") {
      type = 1;
      break;
    }
    if (IP[i] === ":") {
      type = 2;
      break;
    }
  }
  if (!type) return "Neither";
  const str = type === 1 ? "." : ":";
  const arr = IP.split(str);
  if (type === 1 && arr.length !== 4) {
    return "Neither";
  }
  if (type === 2 && arr.length !== 8) {
    return "Neither";
  }
  console.log(arr)
  if (type === 1) {
    for (const item of arr) {
        console.log(parseInt(item))
      if (item.length > 1 && item[0] === "0") {
        return "Neither";
      }
      if (!(parseInt(item) >= 0 && parseInt(item) <= 255)) {
        return "Neither";
      }
    }
    return "IPv4";
  }
  if (type === 2) {

  }
};

// console.log(validIPAddress("1e1.4.5.6"));
console.log(parseInt('ee4fg', 10))
