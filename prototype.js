Array.prototype.Distinc = function (hasObjectElements, fieldToConpare) {
    if (hasObjectElements) {
        return this.filter(function (value, index, arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][fieldToConpare] === value[fieldToConpare]) {
                    return (i === index);
                }
            }
            return true;
        });
    } else {
        return this.filter(function (value, index, arr) {
            return (arr.indexOf(value) === index);
        });
    }
}