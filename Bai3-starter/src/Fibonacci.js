const Fibonacci = function () {};

/**
 * Viết một hàm mà truyền vào thứ tự và trả về giá trị của số đó trong dãy số fibonacci.
 * Ví dụ: Fibonacci.get(4) // Trả về giá trị của số thứ 4 trong dãy fibonacci (1, 1, 2, 3). Trong ví dụ này trả về số 3.
 * 
 */
Fibonacci.prototype.get = function(count) {
	 // code here
	 if (count < 0) {
		return 'OOPS'
	 }

	 let arrFibonacci = [1, 1];
	 for (let i = 2; i < count; i++) {
		arrFibonacci[i] = arrFibonacci[i-1] + arrFibonacci[i-2]
	 }
	 return arrFibonacci[count - 1];
}