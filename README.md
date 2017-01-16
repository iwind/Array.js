#Array.js
**Array.js**帮助开发人员更优雅地操作Javascript数组。

##使用
直接引入 *Array.js* 或 *Array.min.js*：
~~~html
<script type="text/javascript" src="Array.min.js"></script> 
~~~

然后：
~~~javascript
var arr = [ 1, 2, 3, 4];
arr.$each(function (k, v) {
	console.log(v);
});
~~~

##API
###增
* `<boolean> $pad(value, size)` - 填充数组
* `<boolean> $fill(value, length)` - 填充数组到一定长度

###删
* `<boolean> $removeValue(v)` - 从数组中删除某个值
* `<boolean> $remove(index)` - 从数组中删除某个位置上的值
* `<boolean> $clear()` - 清空数组
* `<number> $push(value1, value2, ...)` - 在尾部加入一个或多个元素
* `<number> $pushAll(array2)` - 一次性加入多个元素

###改
* `<boolean> $unique(fn)` - 去除数组中的相同数据
* `<boolean> $set(index, value)` - 设置某个索引位置上的值
* `<boolean> $sort(fn)` - 对该数组进行正排序
* `<boolean> $rsort(fn)` - 对该数组进行倒排序
* `<array> $asort(fn)` - 对该数组进行正排序，并返回排序后对应的索引
* `<array> $arsort(fn)` - 对该数组进行倒排序，并返回排序后对应的索引
* `<boolean> $asc(field)` - 依据单个字段进行正排序
* `<boolean> $desc(field)` - 依据单个字段进行倒排序
* `<boolean> $swap(index1, index2)` - 交换数组的两个索引对应的值
* `<boolean> $shuffle()` - 打乱数组中元素顺序

###查
* `<boolean> $contains(v)` / `<boolean> $include(v)` - 判断数组中是否包含某个值
* `<boolean> $each(fn)` - 遍历数组
* `<mixed> $get(index)` - 获取某个索引位置上的值
* `<mixed> $first()` - 取得第一个元素值
* `<mixed> $last()` - 取得第一个元素值
* `<boolean> $isEmpty()` - 判断数组是否为空
* `<boolean> $all(fn)` - 对容器中元素应用迭代器,并判断是否全部返回真
* `<boolean> $any(fn)` - 对容器中元素应用迭代器,并判断是否有一次返回真
* `<array> $map(fn)` / `$collect(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中
* `<mixed> $reduce(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入到下一次迭代的参数中
* `<mixed> $find(fn)` - 对容器中元素应用迭代器,只要有一次返回值即立即返回由当前元素
* `<array> $findAll(fn)` / `<array> $filter(fn)` - 对容器中元素应用迭代器,将所有返回真的元素放入一数组中
* `<array> $reject(fn)` - 对容器中元素应用迭代器,将所有返回假的元素放入一数组中
* `<array> $grep(pattern)` - 找出匹配某正则表达式的元素，并放入一数组中
* `<array> $keys(value, strict)` / `<array> $indexesOf(value, strict)` - 取得某一个值在数组中出现的所有的键的集合
* `<array> $diff(array2)` - 取当前数组与另一数组的差集
* `<array> $intersect(array2)` - 取当前数组与另一数组的交集
* `<mixed> $max(fn)` - 取得当前集合中最大的一个值
* `<mixed> $min(fn)` - 取得当前集合中最小的一个值
* `<number> $sum(fn)` - 计算数组中的所有元素的总和
* `<number> $product(fn)` - 计算数组中的所有元素的乘积
* `<array> $rand(size)` - 随机截取数组片段
* `<number> $size()` / `<number> $count()` - 计算元素数量
* `<json> $asJSON(field)` - 取得当前数组转换为JSON格式的字符串

###辅助
* `<array> $copy()` - 拷贝数组
* `<array> Array.$range(start, end, step)` - 从一个限定的范围数字或字符生成一个数组
* `<boolean> Array.$isArray(obj)` - 判断一个对象是否为数组

##迭代器
在参数中使用`fn`表示迭代器，每个迭代器接收两个参数：`k`（索引）、`v`（元素值），并且`this`指向数组本身：
~~~javascript
var has = [1, 2, 3, 4].$any(function (k, v) {
	return v > 10;
});
~~~

##排序迭代器
在`$sort`、`$asc`、`$min`、`$max`等等需要排序的API中，参数中的`fn`表示迭代器，每个迭代器接收两个参数：`v1`（第一个值）、`v2`（第二个值），`this`指向数组本身：
~~~javascript
var arr = [3, 2, 4, 1];
arr.$sort(function (v1, v2) {
	if (v1 > v2) {
		return 1
	}
	if (v1 == v2) {
		return 0;
	}
	return -1;
});
//现在 arr = [1, 2, 3, 4]
~~~

##文档
###$pad
* `<boolean> $pad(value, size)` - 用value填充数组，默认size为1

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$pad("a"); // arr => [1, 2, 3, "a"]
~~~

示例代码2：
~~~javascript
var arr = [1, 2, 3];
arr.$pad("a", 5); // arr => [1, 2, 3, "a", "a", "a", "a", "a"]
~~~

###$fill
* `<boolean> $fill(value, length)` - 填充数组到一定长度

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$fill("a", 5); // arr => [1, 2, 3, "a", "a"]
~~~

###$removeValue
* `<boolean> $removeValue(v)` - 从数组中删除某个值

示例代码1：
~~~javascript
var arr = [1, 2, 2, 3, 3, 3];
arr.$removeValue(2); // arr => [1, 3, 3, 3]
~~~

###$remove
* `<boolean> $remove(index)` - 从数组中删除某个位置上的值

示例代码1：
~~~javascript
var arr = [1, 2, 3, 4, 5];
arr.$remove(2); // arr => [1, 2, 4, 5]
~~~

###$clear
* `<boolean> $clear()` - 清空数组

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$clear(); // arr => []
~~~

###$push
* `<number> $push(value1, value2, ...)` - 在尾部加入一个或多个元素

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$push(4); // arr => [1, 2, 3, 4]
arr.$push(5, 6, 7, 8); // arr => [1, 2, 3, 4, 5, 6, 7, 8]
~~~

###$pushAll
* `<number> $pushAll(array2)` - 一次性加入多个元素

示例代码1： 
~~~javascript
var arr = [1, 2, 3];
arr.$pushAll([4, 5, 6]); // arr => [1, 2, 3, 4, 5, 6]
~~~

###$unique
* `<boolean> $unique(fn)` - 去除数组中的相同数据

示例代码1：
~~~javascript
var arr = [1, 2, 2, 3, 3, 3];
arr.$unique(); // arr => [1, 2, 3]
~~~

###$set
* `<boolean> $set(index, value)` - 设置某个索引位置上的值

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$set(1, "a"); // arr => [1, "a", 3]
arr.$set(4, "a"); // arr不变，因为4已经超出数组长度
~~~

###$sort
* `<boolean> $sort(fn)` - 对该数组进行正排序

示例代码1：
~~~javascript
var arr = [4, 2, 5, 3, 1];
arr.$sort(function (v1, v2) {
	return (v1 - v2) ;
});
//arr => [1, 2, 3, 4, 5]
~~~

示例代码2（实现倒排序）：
~~~javascript
var arr = [4, 2, 5, 3, 1];
arr.$sort(function (v1, v2) {
	return -(v1 - v2) ;
});
//arr => [5, 4, 3, 2, 1]
~~~

示例代码3（实现随机排序）：
~~~javascript
var arr = [4, 2, 5, 3, 1];
arr.$sort(function (v1, v2) {
	return Math.random() - 0.5;
});
//arr => [2, 4, 5, 1, 3]
~~~

###$rsort
* `<boolean> $rsort(fn)` - 对该数组进行倒排序

示例代码同`$sort(fn)`，只不过把顺序倒过来。

###$asort
* `<array> $asort(fn)` - 对该数组进行正排序，并返回排序后对应的索引

###$arsort
* `<array> $arsort(fn)` - 对该数组进行倒排序，并返回排序后对应的索引

###$asc
* `<boolean> $asc(field)` - 依据单个字段进行正排序

###$desc
* `<boolean> $desc(field)` - 依据单个字段进行倒排序

###$swap
* `<boolean> $swap(index1, index2)` - 交换数组的两个索引对应的值

###$shuffle
* `<boolean> $shuffle()` - 打乱数组中元素顺序

###$contains
* `<boolean> $contains(v)`
 
### $include
* `<boolean> $include(v)` - 判断数组中是否包含某个值

###$each
* `<boolean> $each(fn)` - 遍历数组

###$get
* `<mixed> $get(index)` - 获取某个索引位置上的值

###$first
* `<mixed> $first()` - 取得第一个元素值

###$last
* `<mixed> $last()` - 取得第一个元素值

###$isEmpty
* `<boolean> $isEmpty()` - 判断数组是否为空

###$all
* `<boolean> $all(fn)` - 对容器中元素应用迭代器,并判断是否全部返回真

###$any
* `<boolean> $any(fn)` - 对容器中元素应用迭代器,并判断是否有一次返回真

###$map
* `<array> $map(fn)` 

###$collect
* `$collect(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中

###$reduce
* `<mixed> $reduce(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入到下一次迭代的参数中

###$find
* `<mixed> $find(fn)` - 对容器中元素应用迭代器,只要有一次返回值即立即返回由当前元素

###$findAll
* `<array> $findAll(fn)` 

###$filter
`<array> $filter(fn)` - 对容器中元素应用迭代器,将所有返回真的元素放入一数组中

###$reject
* `<array> $reject(fn)` - 对容器中元素应用迭代器,将所有返回假的元素放入一数组中

###$grep
* `<array> $grep(pattern)` - 找出匹配某正则表达式的元素，并放入一数组中

###$keys
* `<array> $keys(value, strict)` 

###$indexesOf
* `<array> $indexesOf(value, strict)` - 取得某一个值在数组中出现的所有的键的集合

###$diff
* `<array> $diff(array2)` - 取当前数组与另一数组的差集

###$intersect
* `<array> $intersect(array2)` - 取当前数组与另一数组的交集

###$max
* `<mixed> $max(fn)` - 取得当前集合中最大的一个值

###$min
* `<mixed> $min(fn)` - 取得当前集合中最小的一个值

###$sum
* `<number> $sum(fn)` - 计算数组中的所有元素的总和

###$product
* `<number> $product(fn)` - 计算数组中的所有元素的乘积

###$rand
* `<array> $rand(size)` - 随机截取数组片段

###$size
* `<number> $size()` / `<number> $count()` - 计算元素数量

###$asJSON
* `<json> $asJSON(field)` - 取得当前数组转换为JSON格式的字符串

###辅助
* `<array> $copy()` - 拷贝数组
* `<array> Array.$range(start, end, step)` - 从一个限定的范围数字或字符生成一个数组
* `<boolean> Array.$isArray(obj)` - 判断一个对象是否为数组