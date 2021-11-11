Array.prototype.myIndexOfMethod = function (target, fromIndex = 0) {
	for (let i = fromIndex; i < this.length; i++) {
		if (this[i] === target) {
			return i;
		}
	}
	return -1;
};

let arr = [34, 42, 15, 28, 14, 22];
