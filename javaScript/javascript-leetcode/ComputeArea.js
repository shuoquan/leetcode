const computeArea = function(A, B, C, D, E, F, G, H) {
  let area = 0;
  if (G <= A || C <= E || H <= B || D <= F) {
    area = 0;
  } else {
    const leftX = Math.max(A, E);
    const leftY = Math.max(B, F);
    const rightX = Math.min(C, G);
    const rightY = Math.min(H, D);
    area = (rightX - leftX) * (rightY - leftY);
  }

  return (C - A) * (D - B) + (G - E) * (H - F) - area;
};
console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
