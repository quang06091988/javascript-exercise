var ArrayUtils = function () {};

/**
 * Viết một hàm nhận vào 1 mảng và một số. Bạn cần phải tìm và xóa đối số đó khỏi mảng.
 * Ví dụ: ArrayUtils.removeFromArray([1, 2, 3, 4], 3) = [1, 2, 4]
 */
 ArrayUtils.prototype.removeFromArray  = function(...args) {
	 // code here
	 let arr = args[0];

	 for (let i = 1; i < args.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === args[i]) {
				arr.splice(j, 1);
				break;
			}
		 }
	 }
	 return arr;
}