function fourNumberSum(array, targetSum) {
	let result = [];
	let hash = {};
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
			let firstNum = array[i];
			let secondNum = array[j];
			let currentSum = firstNum + secondNum;
			let counterpart = targetSum - currentSum;

			if (counterpart in hash) {
				if (!(firstNum in hash[counterpart]) || !(secondNum in hash[counterpart])) {
					hash[counterpart][firstNum] = true;
					hash[counterpart][secondNum] = true;
					result.push(hash[counterpart]);
				}
			} else {
				hash[currentSum][firstNum] = true;
				hash[currentSum][secondNum] = true;
			}
		}
	}
	console.log(result);
	return result;
}

console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
