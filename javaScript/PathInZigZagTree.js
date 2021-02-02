const pathInZigZagTree = function (label) {
    let height = 1;
    while (2 ** height - 1 < label) {
        height += 1
    }
    let position = height % 2 ? 3*2**(height-1)-label-1 : label;
    position = parseInt(position / 2);
    height-=1;
    const path = [label];
    while (position >= 1) {
        console.log(height, position)
        if (height % 2) {
            path.push(3*2**(height-1)-position-1);
        } else {
            path.push(position);
        }
        position = parseInt(position / 2);
        height-=1;
    }
    return path.reverse();
};

console.log(pathInZigZagTree(1))
console.log(3*2**(2)-2)
