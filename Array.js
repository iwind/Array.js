/**
 * Array.js - v0.0.1
 *
 * - $contains(v) / $include(v)
 * - $removeValue(v)
 * - $remove(index)
 * - $clear()
 * - $each(fn)
 * - $unique(fn)
 * - $get(index)
 * - $first()
 * - $last()
 * - $set(index, value)
 * - $copy()
 * - $isEmpty()
 * - $all(fn)
 * - $any(fn)
 * - $map(fn) / $collect(fn)
 * - $reduce(fn)
 * - $find(fn)
 * - $findAll(fn) / $filter(fn)
 * - $reject(fn)
 * - $grep(pattern)
 * - $keys(value, strict) / $indexesOf(value, strict)
 * - $sort(fn)
 * - $rsort(fn)
 * - $arsort(fn)
 * - $diff(array2)
 * - $intersect(array2)
 * - $max(fn)
 * - $min(fn)
 * - $swap(index1, index2)
 * - $sum(fn)
 * - $product(fn)
 * - $pad(value, size)
 * - $fill(value, length)
 * - $shuffle()
 * - $rand(size)
 * - $size() / $count()
 * - $push(value1, value2, ...)
 * - $pushAll(array2)
 * - $asc(field)
 * - $desc(field)
 * - $asJSON(field)
 * - Array.$range(start, end, step)
 *
 * @author 刘祥超 <iwind.liu@gmail.com>
 */

/**
 * 判断数组中是否包含某个值
 */
Array.prototype.$contains = function (v) {
	var that = this;
	if (that == null) {
		return false;
	}
	for (var i = 0; i < that.length; i++) {
		if (that[i] == v) {
			return true;
		}
	}
	return false;
};

/**
 * 同$contains(v)
 */
Array.prototype.$include = function (v) {
	var that = this;
	if (that == null) {
		return false;
	}
	return that.$contains(v);
};

/**
 * 从数组中删除某个值
 */
Array.prototype.$removeValue = function (v) {
	var that = this;
	if (that == null) {
		return true;
	}
	var newArray = [];
	for (var i = 0; i < that.length; i++) {
		if (that[i] != v) {
			newArray.push(that[i]);
		}
	}
	that.$clear();
	for (var i = 0; i < newArray.length; i++) {
		that.push(newArray[i]);
	}
	return true;
};

/**
 * 从数组中删除某个位置上的值
 */
Array.prototype.$remove = function (index) {
	var that = this;
	if (that == null) {
		return true;
	}
	var newArray = [];
	for (var i = 0; i < that.length; i++) {
		if (i != index) {
			newArray.push(that[i]);
		}
	}
	that.$clear();
	for (var i = 0; i < newArray.length; i++) {
		that.push(newArray[i]);
	}
	return true;
};

/**
 * 清空数组
 */
Array.prototype.$clear = function () {
	var that = this;
	if (that == null) {
		return true;
	}

	var length = that.length;
	for (var i = 0; i < length; i++) {
		that.pop();
	}

	return true;
};

/**
 * 遍历数组
 */
Array.prototype.$each = function (fn) {
	var that = this;
	if (that == null) {
		return true;
	}
	if (typeof(fn) != "function") {
		return true;
	}

	var length = that.length;
	for (var i = 0; i < length; i++) {
		fn.call(that, i, that[i]);
	}

	return true;
};

/**
 * 去除数组中的相同数据
 */
Array.prototype.$unique = function (fn) {
	var that = this;
	if (that == null) {
		return true;
	}
	var newArray = [];
	var indexes = [];
	that.$each(function (k, v) {
		if (typeof(fn) == "function") {
			v = fn.call(that, k, v);
		}
		if (!newArray.$contains(v)) {
			newArray.push(v);
			indexes.push(k);
		}
	});
	var copy = that.$copy();
	that.$clear();
	for (var i = 0; i < indexes.length; i++) {
		that.push(copy[indexes[i]]);
	}
	return that;
};

/**
 * 获取某个索引位置上的值
 */
Array.prototype.$get = function (index) {
	var that = this;
	if (that == null) {
		return null;
	}
	if (index > that.length - 1) {
		return null;
	}
	return that[index];
};

/**
 * 设置某个索引位置上的值
 */
Array.prototype.$set = function (index, value) {
	var that = this;
	if (that == null) {
		return false;
	}
	if (index > that.length - 1) {
		return false;
	}
	that[index] = value;
	return true;
};

/**
 * 拷贝数组
 */
Array.prototype.$copy = function () {
	var that = this;
	if (that == null) {
		return that;
	}

	var newArray = [];
	for (var i = 0; i < that.length; i++) {
		newArray.push(that[i]);
	}
	return newArray;
};

/**
 * 判断数组是否为空
 */
Array.prototype.$isEmpty = function () {
	var that = this;
	if (that == null) {
		return true;
	}
	return (that.length == 0);
};

/**
 * 对容器中元素应用迭代器,并判断是否全部返回真
 */
Array.prototype.$all = function (fn) {
	var that = this;
	if (that == null) {
		return false;
	}
	for (var i = 0; i < that.length; i ++) {
		if (!fn.call(that, i, that[i])) {
			return false;
		}
	}
	return true;
};

/**
 * 对容器中元素应用迭代器,并判断是否有一次返回真
 */
Array.prototype.$any = function (fn) {
	var that = this;
	if (that == null) {
		return false;
	}
	for (var i = 0; i < that.length; i ++) {
		if (fn.call(that, i, that[i])) {
			return true;
		}
	}
	return false;
};

/**
 * 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中
 */
Array.prototype.$map = function (fn) {
	var that = this;
	if (that == null) {
		return [];
	}
	var arr = [];
	for (var i = 0; i < that.length; i ++) {
		arr.push(fn.call(that, i, that[i]));
	}
	return arr;
};

/**
 * 对容器中元素应用迭代器,并将每次执行的结果放入到下一次迭代的参数中
 */
Array.prototype.$reduce = function (fn) {
	var that = this;
	if (that == null) {
		return null;
	}
	var value = null;
	that.$each(function (k, v) {
		value = fn.call(that, k, v, value);
	});
	return value;
};

/**
 * 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中
 */
Array.prototype.$collect = function (fn) {
	var that = this;
	if (that == null) {
		return [];
	}
	return that.$map(fn);
};

/**
 * 对容器中元素应用迭代器,只要有一次返回值即立即返回由当前元素的索引
 */
Array.prototype.$find = function (fn) {
	var that = this;
	if (that == null) {
		return -1;
	}
	if (typeof(fn) == "undefined") {
		return that.$get(0);
	}
	var index = -1;
	var result = null;
	that.$each(function (k, v) {
		if (index > -1) {
			return;
		}
		if (fn.call(that, k, v)) {
			index = k;
			result = v;
		}
	});
	return result;
};

/**
 * 对容器中元素应用迭代器,将所有返回真的元素放入一数组中
 */
Array.prototype.$findAll = function (fn) {
	var that = this;
	if (that == null) {
		return [];
	}
	var result = [];
	that.$each(function (k, v) {
		if (fn.call(that, k, v)) {
			result.push(v);
		}
	});
	return result;
};

/**
 * 同$findAll()
 */
Array.prototype.$filter = function (fn) {
	var that = this;
	if (that == null) {
		return [];
	}
	return that.$findAll(fn);
};

/**
 * 对容器中元素应用迭代器,将所有返回假的元素放入一数组中
 */
Array.prototype.$reject = function (fn) {
	var that = this;
	if (that == null) {
		return [];
	}
	var result = [];
	that.$each(function (k, v) {
		if (!fn.call(that, k, v)) {
			result.push(v);
		}
	});
	return result;
};

/**
 * 找出匹配某正则表达式的元素，返回匹配的元素数组
 */
Array.prototype.$grep = function (pattern) {
	var that = this;
	if (that == null) {
		return [];
	}
	return that.$findAll(function (k, v) {
		if (v == null) {
			return false;
		}
		return pattern.test(v.toString());
	});
};

/**
 * 取得某一个值在数组中出现的所有的键的集合
 */
Array.prototype.$keys = function (value, strict) {
	var that = this;
	if (that == null) {
		return [];
	}
	var keys = [];
	if (typeof(strict) == "undefined") {
		strict = false;
	}
	for (var i = 0; i < that.length; i++) {
		if ((strict && value === that[i]) || (!strict && value == that[i])) {
			keys.push(i);
		}
	}
	return keys;
};

/**
 * 取得某一个值在数组中出现的所有的键的集合
 */
Array.prototype.$indexesOf = function (value, strict) {
	var that = this;
	if (that == null) {
		return [];
	}
	return that.$keys(value, strict);
};

/**
 * 对该数组进行正排序
 */
Array.prototype.$sort = function (sortFunction) {
	var that = this;
	if (that == null) {
		return false
	}
	if (typeof(sortFunction) == "undefined") {
		sortFunction = function (v1, v2) {
			if (v1 > v2) {
				return 1;
			}
			else if (v1 == v2) {
				return 0;
			}
			else {
				return -1;
			}
		};
	}
	that.sort(sortFunction);
	return true;
};

/**
 * 对该数组进行反排序
 */
Array.prototype.$rsort = function (sortFunction) {
	var that = this;
	if (that == null) {
		return false
	}

	this.$sort(sortFunction);
	that.reverse();
	return true;
};

/**
 * 对该数组进行正排序，并返回排序后对应的索引
 */
Array.prototype.$asort = function (sortFunction) {
	var that = this;
	if (that == null) {
		return []
	}

	var indexes = [];
	for (var i = 0; i < that.length; i ++) {
		indexes.push(i);
	}
	if (typeof(sortFunction) == "undefined") {
		sortFunction = function (e1, e2) {
			if (e1 < e2) return - 1;
			if (e1 > e2) return 1;
			return 0;
		};
	}
	for (var i = 0; i < that.length; i ++) {
		for (var j = 0; j < that.length; j ++) {
			if (j > 0 && sortFunction(that[j-1], that[j]) > 0) {
				that.$swap(j, j - 1);
				indexes.$swap(j, j - 1);
			}
		}
	}
	return indexes;
};

/**
 * 对该数组进行反排序，并返回排序后对应的索引
 */
Array.prototype.$arsort = function (sortFunction) {
	var that = this;
	if (that == null) {
		return []
	}

	var indexes = that.$asort(sortFunction);
	that.reverse();
	indexes.reverse();
	return indexes;
};

/**
 * 取当前数组与另一数组的差集
 */
Array.prototype.$diff = function (array2) {
	var that = this;
	if (that == null) {
		return []
	}

	var result = [];
	that.$each(function (k, v) {
		if (!array2.$contains(v)) {
			result.push(v);
		}
	});
	return result;
};


/**
 * 取当前数组与另一数组的交集
 */
Array.prototype.$intersect = function (array2) {
	var that = this;
	if (that == null) {
		return []
	}

	var result = [];
	that.$each(function (k, v) {
		if (array2.$contains(v)) {
			result.push(v);
		}
	});
	return result;
};

/**
 * 取得当前集合中最大的一个值
 */
Array.prototype.$max = function (sortFunction) {
	var that = this;
	if (that == null) {
		return null;
	}
	if (that.length > 0) {
		var _array = that.$copy();
		_array.$rsort(sortFunction);
		return _array.$get(0);
	}
	return null;
};

/**
 * 取得当前集合中最小的一个值
 */
Array.prototype.$min = function (sortFunction) {
	var that = this;
	if (that == null) {
		return null;
	}
	if (that.length > 0) {
		var _array = that.$copy();
		_array.$sort(sortFunction);
		return _array.$get(0);
	}
	return null;
};

/**
 * 交换数组的两个索引对应的值
 */
Array.prototype.$swap = function (index1, index2) {
	var that = this;
	if (that == null) {
		return false;
	}
	var value1 = that.$get(index1);
	var value2 = that.$get(index2);
	that.$set(index1, value2);
	that.$set(index2, value1);
	return true;
};

/**
 * 计算数组中的所有元素的总和
 */
Array.prototype.$sum = function (fn) {
	var that = this;
	if (that == null) {
		return 0;
	}
	var sum = 0;
	that.$each(function (k, v) {
		if (typeof(fn) == "function") {
			v = fn.call(that, k, v);
		}
		if (typeof(v) == "number") {
			sum += v;
		}
		else if (typeof(v) == "string") {
			var n = parseFloat(v);
			if (!isNaN(n)) {
				sum += n;
			}
		}
	});
	return sum;
};

/**
 * 计算数组中的所有元素的乘积
 */
Array.prototype.$product = function (fn) {
	var that = this;
	if (that == null) {
		return 0;
	}
	var result = 1;
	that.$each(function (k, v) {
		if (typeof(fn) == "function") {
			v = fn.call(that, k, v);
		}
		if (typeof(v) == "number") {
			result *= v;
		}
		else if (typeof(v) == "string") {
			var n = parseFloat(v);
			if (!isNaN(n)) {
				result *= n;
			}
		}
	});
	return result;
};

/**
 * 填充数组
 */
Array.prototype.$pad = function (value, size) {
	var that = this;
	if (that == null) {
		return false;
	}
	if (typeof(size) == "undefined") {
		size = 1;
	}
	if (size < 1) {
		return false;
	}
	for (var i  = 0; i < size; i ++) {
		that.push(value);
	}
	return true;
};

/**
 * 填充数组到一定长度
 */
Array.prototype.$fill = function (value, length) {
	var that = this;
	if (that == null) {
		return false;
	}
	if (typeof(length) == "undefined") {
		length = that.length;
	}
	if (length < that.length) {
		return false;
	}
	if (length == that.length) {
		return true;
	}
	var size = length - that.length;
	for (var i  = 0; i < size; i ++) {
		that.push(value);
	}
	return true;
};

/**
 * 打乱数组中元素顺序
 */
Array.prototype.$shuffle = function () {
	var that = this;
	if (that == null) {
		return false;
	}

	that.$sort(function() {
		return Math.random() - 0.5;
	});
	return true;
};

/**
 * 随机截取数组片段
 */
Array.prototype.$rand = function (size) {
	var that = this;
	if (that == null) {
		return false;
	}
	if (typeof(size) == "undefined") {
		size = 1;
	}
	var copy = that.$copy();
	copy.$shuffle();
	return copy.slice(0, size);
};

/**
 * 计算元素数量
 */
Array.prototype.$size = function () {
	var that = this;
	if (that == null) {
		return 0;
	}
	return that.length;
};

/**
 * 同$size()
 */
Array.prototype.$count = function () {
	var that = this;
	if (that == null) {
		return 0;
	}
	return that.length;
};

/**
 * 取得第一个元素值
 */
Array.prototype.$first = function () {
	var that = this;
	if (that == null) {
		return null;
	}
	if (that.length == 0) {
		return null;
	}
	return that.$get(0);
};

/**
 * 取得第一个元素值
 */
Array.prototype.$last = function () {
	var that = this;
	if (that == null) {
		return null;
	}
	if (that.length == 0) {
		return null;
	}
	return that[that.length - 1];
};

/**
 * 在尾部加入一个或多个元素
 */
Array.prototype.$push = function () {
	var that = this;
	if (that == null) {
		return 0;
	}
	return Array.prototype.push.apply(that, arguments);
};

/**
 * 一次性加入多个元素
 */
Array.prototype.$pushAll = function (array2) {
	var that = this;
	if (that == null) {
		return 0;
	}
	return Array.prototype.push.apply(that, array2);
};

/**
 * 依据单个字段进行正排序
 */
Array.prototype.$asc = function (field) {
	var that = this;
	if (that == null) {
		return false;
	}
	return that.$sort(function (v1, v2) {
		if (typeof(v1) == "object" && typeof(v2) == "object") {
			if (v1[field] > v2[field]) {
				return 1;
			}
			if (v1[field] == v2[field]) {
				return 0;
			}
			return -1;
		}
		return 0;
	});
};

/**
 * 依据单个字段进行倒排序
 */
Array.prototype.$desc = function (field) {
	var that = this;
	if (that == null) {
		return false;
	}
	return that.$sort(function (v1, v2) {
		if (typeof(v1) == "object" && typeof(v2) == "object") {
			if (v1[field] > v2[field]) {
				return -1;
			}
			if (v1[field] == v2[field]) {
				return 0;
			}
			return 1;
		}
		return 0;
	});
};

/**
 * 取得当前数组转换为JSON格式的字符串
 */
Array.prototype.$asJSON = function () {
	return JSON.stringify(this);
};

/**
 * 从一个限定的范围数字或字符生成一个数组
 */
Array.$range = function (start, end, step) {
	var array = [];

	if (typeof(step) == "undefined") {
		step = 1;
	}

	if (start < end) {
		for (var i = start; i <= end; i += step) {
			array.push(i);
		}
	}
	else {
		for (var i = start; i >= end; i -= step) {
			array.push(i);
		}
	}
	return array;
};