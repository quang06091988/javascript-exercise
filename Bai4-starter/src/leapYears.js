const leapYear = function () {};

/**
 * Viết hàm để xác định một năm bất kỳ có phải là năm nhuận hay không? Trả về giá trị boolean.
 * Ví dụ: isLeapYears(2000) = true
 * isLeapYears(2000) = false
 */
 leapYear.prototype.isLeapYears  = function(year) {
	 // code here
	 if (year % 4 === 0) {
		if (year % 100 === 0) {
			if (year % 400 === 0) {
				return true;
			}
			return false;
		}
		return true;
	 }
	 return false;
}