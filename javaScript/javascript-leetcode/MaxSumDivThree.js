const maxSumDivThree = function (nums) {
    let zeroRemainder = null;
    let oneRemainder = null;
    let twoRemainder = null;
    for (let i = 0; i < nums.length; i++) {
        let tempZeroRemainder = zeroRemainder;
        let tempOneRemainder = oneRemainder;
        let tempTwoRemainder = twoRemainder;
        if (nums[i] % 3 === 0) {
            zeroRemainder = (tempZeroRemainder || 0) + nums[i];
            if (tempOneRemainder != null) {
                oneRemainder = tempOneRemainder + nums[i];
            }
            if (tempTwoRemainder != null) {
                twoRemainder = tempTwoRemainder + nums[i];
            }
        } else if (nums[i] % 3 === 1) {
            if (tempTwoRemainder != null) {
                zeroRemainder = tempZeroRemainder == null ? tempTwoRemainder + nums[i] : Math.max(tempZeroRemainder, tempTwoRemainder + nums[i]);
            }
            if (tempOneRemainder != null) {
                twoRemainder = tempTwoRemainder == null ? tempOneRemainder + nums[i] : Math.max(tempTwoRemainder, tempOneRemainder + nums[i])
            }
            if (tempZeroRemainder != null) {
                oneRemainder = tempOneRemainder == null ? tempZeroRemainder + nums[i] : Math.max(tempOneRemainder, tempZeroRemainder + nums[i])
            } else {
                oneRemainder = tempOneRemainder == null ? nums[i] : Math.max(tempOneRemainder, nums[i]);
            }
        } else if (nums[i] % 3 === 2) {
            if (tempTwoRemainder != null) {
                oneRemainder = tempOneRemainder == null ? tempTwoRemainder + nums[i] : Math.max(tempOneRemainder, tempTwoRemainder + nums[i]);
            }
            if (tempOneRemainder != null) {
                zeroRemainder = tempZeroRemainder == null ? tempOneRemainder + nums[i] : Math.max(tempZeroRemainder, tempOneRemainder + nums[i])
            }
            if (tempZeroRemainder != null) {
                twoRemainder = tempTwoRemainder == null ? tempZeroRemainder + nums[i] : Math.max(tempTwoRemainder, tempZeroRemainder + nums[i])
            } else {
                twoRemainder = tempTwoRemainder == null ? nums[i] : Math.max(tempTwoRemainder, nums[i]);
            }
        }
    }
    return zeroRemainder || 0;
}


console.log(maxSumDivThree([3, 6, 5, 1, 8]))
// console.log(null == null)
