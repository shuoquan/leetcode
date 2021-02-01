const simplifyPath = function(path) {
  const list = path.split("/");
  const newList = [];
  for (let i = 1; i < list.length; i++) {
      if (list[i] === "") {
        continue;
      } else if (list[i] === ".") {
        continue;
      } else if (list[i] === "..") {
        newList.pop();
      } else {
        newList.push(list[i]);
      }
  }
  return '/'.concat(newList.join('/'));
};

console.log(simplifyPath('/..'));
// console.log("/a//b////c/d//././/..".split("/"));
