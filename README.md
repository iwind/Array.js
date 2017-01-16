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
* `<boolean> $pad(value, size)` - 填充数组 [\[示例\]](#pad)
* `<boolean> $fill(value, length)` - 填充数组到一定长度 [\[示例\]](#fill)
* `<number> $push(value1, value2, ...)` - 在尾部加入一个或多个元素 [\[示例\]](#push)
* `<number> $pushAll(array2)` - 一次性加入多个元素 [\[示例\]](#pushall)
* `<boolean> $insert(index, obj1, ...)` - 在指定位置插入新的元素 [\[示例\]](#insert)

###删
* `<boolean> $removeValue(v)` - 从数组中删除某个值 [\[示例\]](#removevalue)
* `<boolean> $remove(index)` - 从数组中删除某个位置上的值 [\[示例\]](#remove)
* `<boolean> $clear()` - 清空数组 [\[示例\]](#clear)

###改
* `<boolean> $unique(fn)` - 去除数组中的相同数据 [\[示例\]](#unique)
* `<boolean> $set(index, value)` - 设置某个索引位置上的值 [\[示例\]](#set)
* `<boolean> $sort(compare)` - 对该数组进行正排序 [\[示例\]](#sort)
* `<boolean> $rsort(compare)` - 对该数组进行倒排序 [\[示例\]](#rsort)
* `<array> $asort(compare)` - 对该数组进行正排序，并返回排序后对应的索引 [\[示例\]](#asort)
* `<array> $arsort(compare)` - 对该数组进行倒排序，并返回排序后对应的索引 [\[示例\]](#arsort)
* `<boolean> $asc(field)` - 依据单个字段进行正排序 [\[示例\]](#asc)
* `<boolean> $desc(field)` - 依据单个字段进行倒排序 [\[示例\]](#desc)
* `<boolean> $swap(index1, index2)` - 交换数组的两个索引对应的值 [\[示例\]](#swap)
* `<boolean> $shuffle()` - 打乱数组中元素顺序 [\[示例\]](#shuffle)

###查
* `<boolean> $contains(v)` / `<boolean> $include(v)` - 判断数组中是否包含某个值 [\[示例\]](#contains)
* `<boolean> $each(fn)` - 遍历数组 [\[示例\]](#each)
* `<mixed> $get(index)` - 获取某个索引位置上的值 [\[示例\]](#get)
* `<array> $getAll(index1, indexes1, ...)` - 获取一组索引对应的值 [\[示例\]](#getall)
* `<mixed> $first()` - 取得第一个元素值 [\[示例\]](#first)
* `<mixed> $last()` - 取得第一个元素值 [\[示例\]](#last)
* `<boolean> $isEmpty()` - 判断数组是否为空 [\[示例\]](#isempty)
* `<boolean> $all(fn)` - 对容器中元素应用迭代器,并判断是否全部返回真 [\[示例\]](#all)
* `<boolean> $any(fn)` - 对容器中元素应用迭代器,并判断是否有一次返回真 [\[示例\]](#any)
* `<array> $map(fn)` / `$collect(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中 [\[示例\]](#map)
* `<mixed> $reduce(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入到下一次迭代的参数中 [\[示例\]](#reduce)
* `<mixed> $find(fn)` - 对容器中元素应用迭代器,只要有一次返回值即立即返回由当前元素 [\[示例\]](#find)
* `<array> $findAll(fn)` / `<array> $filter(fn)` - 对容器中元素应用迭代器,将所有返回真的元素放入一数组中 [\[示例\]](#findall)
* `<array> $reject(fn)` - 对容器中元素应用迭代器,将所有返回假的元素放入一数组中 [\[示例\]](#reject)
* `<array> $grep(pattern)` - 找出匹配某正则表达式的元素，并放入一数组中 [\[示例\]](#grep)
* `<array> $keys(value, strict)` / `<array> $indexesOf(value, strict)` - 取得某一个值在数组中出现的所有的键的集合 [\[示例\]](#indexesof)
* `<array> $diff(array2)` - 取当前数组与另一数组的差集 [\[示例\]](#diff)
* `<array> $intersect(array2)` - 取当前数组与另一数组的交集 [\[示例\]](#intersect)
* `<mixed> $max(compare)` - 取得当前集合中最大的一个值 [\[示例\]](#max)
* `<mixed> $min(compare)` - 取得当前集合中最小的一个值 [\[示例\]](#min)
* `<number> $sum(fn)` - 计算数组中的所有元素的总和 [\[示例\]](#sum)
* `<number> $product(fn)` - 计算数组中的所有元素的乘积 [\[示例\]](#product)
* `<array> $rand(size)` - 随机截取数组片段 [\[示例\]](#rand)
* `<number> $size()` / `<number> $count()` - 计算元素数量 [\[示例\]](#size)
* `<json> $asJSON(field)` - 取得当前数组转换为JSON格式的字符串 [\[示例\]](#asjson)

###辅助
* `<array> $copy()` - 拷贝数组 [\[示例\]](#copy)
* `<array> Array.$range(start, end, step)` - 从一个限定的范围数字或字符生成一个数组 [\[示例\]](#range)
* `<boolean> Array.$isArray(obj)` - 判断一个对象是否为数组 [\[示例\]](#isarray)

##迭代器
在参数中使用`fn`表示迭代器，每个迭代器接收两个参数：`k`（索引）、`v`（元素值），并且`this`指向数组本身：
~~~javascript
var has = [1, 2, 3, 4].$any(function (k, v) {
	return v > 10;
});
~~~

##排序迭代器
在`$sort`、`$rsort`、`$min`、`$max`等需要排序的API中，参数中的`compare`表示迭代器，每个迭代器接收两个参数：`v1`（第一个值）、`v2`（第二个值），`this`指向数组本身：
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

###$insert
* `<boolean> $insert(index, obj1, ...)` - 在指定位置插入新的元素，`index`参数支持负值

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$insert(0, "a", "b", "c"); // arr => ["a", "b", "c", 1, 2, 3]
~~~

示例代码2：
~~~javascript
var arr = [1, 2, 3, 4, 5];
arr.$insert(2, "a", "b", "c"); // arr => [1, 2, "a", "b", "c", 3, 4, 5]
~~~

示例代码3：
~~~javascript
var arr = [1, 2, 3, 4, 5];
arr.$insert(-2, "a", "b", "c"); // => [1, 2, 3, 4, "a", "b", "c", 5]
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
* `<boolean> $sort(compare)` - 对该数组进行正排序

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
* `<boolean> $rsort(compare)` - 对该数组进行倒排序

示例代码同`$sort(compare)`，只不过把顺序倒过来。

###$asort
* `<array> $asort(compare)` - 对该数组进行正排序，并返回排序后对应的索引

###$arsort
* `<array> $arsort(compare)` - 对该数组进行倒排序，并返回排序后对应的索引

###$asc
* `<boolean> $asc(field)` - 依据单个字段进行正排序

示例代码1：
~~~javascript
var arr = [
    { "name": "Libai", "age": 24 },
    { "name": "Zhangsan", "age": 22 },
    { "name": "Wanger", "age": 23 }
];
arr.$asc("age");
~~~
此时的`arr`变成：
~~~json
[
	{ "name": "Zhangsan", "age": 22 },
	{ "name": "Wanger", "age": 23 },
    { "name": "Libai", "age": 24 }
]
~~~

###$desc
* `<boolean> $desc(field)` - 依据单个字段进行倒排序

示例代码1：
~~~javascript
var arr = [
    { "name": "Libai", "age": 24 },
    { "name": "Zhangsan", "age": 22 },
    { "name": "Wanger", "age": 23 }
];
arr.$desc("age");
~~~
此时的`arr`变成：
~~~json
[
    { "name": "Libai", "age": 24 },
    { "name": "Wanger", "age": 23 },
    { "name": "Zhangsan", "age": 22 }
]
~~~

###$swap
* `<boolean> $swap(index1, index2)` - 交换数组的两个索引对应的值

示例代码1：
~~~javascript
arr = [1, 2, 3];
arr.$swap(0, 2); // arr => [3, 2, 1]
~~~

###$shuffle
* `<boolean> $shuffle()` - 打乱数组中元素顺序

示例代码1：
~~~javascript
var arr = [1, 2, 3];
arr.$shuffle();  // arr => [2, 3, 1]
arr.$shuffle();  // arr => [1, 3, 2]
~~~

###$contains
* `<boolean> $contains(v)` - 判断数组中是否包含某个值

示例代码1：
~~~javascript
[1, 2, 3].$contains(3); // => true
[1, 2, 3].$contains(4); // => false
[1, 2, 3].$contains(null); // => false
~~~
 
### $include
* `<boolean> $include(v)` - 同`$contains(v)`作用一致

###$each
* `<boolean> $each(fn)` - 遍历数组

示例代码1：
~~~javascript
[1, 2, 3].$each(function (k, v) {
	console.log( "index:" + k + " v:" + v );
});
~~~
输出：
~~~
index:0 v:1
index:1 v:2
index:2 v:3
~~~

###$get
* `<mixed> $get(index)` - 获取某个索引位置上的值

示例代码1：
~~~javascript
[1, 2, 3].$get(0); // => 1
[1, 2, 3].$get(2); // => 3
[].$get(0); // => null
~~~

###$getAll
* `<array> $getAll(index1, indexes1, ...)` - 获取一组索引对应的值，如果超出索引范围，则不返回数据

示例代码1：
~~~javascript
var arr = [1, 2, 3, 4, 5];
var newArr = arr.$getAll(); // newArr => []
newArr = arr.$getAll(0, 2, 4); // newArr => [1, 3, 5]
newArr = arr.$getAll(0, 2, 4, 6, 8); // newArr => [1, 3, 5] 因为6和8超出索引范围
newArr = arr.$getAll(0, 2, [3, 4]); // newArr => [1, 3, 4, 5]
~~~

###$first
* `<mixed> $first()` - 取得第一个元素值

示例代码1：
~~~javascript
[1, 2, 3].$first(); // => 1
[].$first(); // => null
~~~

###$last
* `<mixed> $last()` - 取得第一个元素值

示例代码1：
~~~javascript
[1, 2, 3].$last(); // => 3
[].$last(); // => null
~~~

###$isEmpty
* `<boolean> $isEmpty()` - 判断数组是否为空

示例代码1： 
~~~javascript
[1, 2, 3].$isEmpty(); // => false
[].$isEmpty(); // => true
~~~

###$all
* `<boolean> $all(fn)` - 对容器中元素应用迭代器,并判断是否全部返回真

示例代码1：
~~~javascript
[1, 2, 3].$all(function (k, v) {
	return v > 1;
});
// => false
~~~

示例代码2：
~~~javascript
[1, 2, 3].$all(function (k, v) {
	return v > 0;
});
// => true
~~~

###$any
* `<boolean> $any(fn)` - 对容器中元素应用迭代器,并判断是否有一次返回真

示例代码1：
~~~javascript
[1, 2, 3].$any(function (k, v) {
	return v > 3;
});
// => false
~~~

示例代码2：
~~~javascript
[1, 2, 3, 4, 5].$any(function (k, v) {
	return v > 3;
});
// => true
~~~

###$map
* `<array> $map(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入一新数组中

示例代码1：
~~~javascript
[1, 2, 3].$map(function (k, v) {
	return v * v;
});
// => [1, 4, 9]
~~~

###$collect
* `$collect(fn)` - 同`$map(fn)`作用一致

###$reduce
* `<mixed> $reduce(fn)` - 对容器中元素应用迭代器,并将每次执行的结果放入到下一次迭代的参数中

示例代码1：
~~~javascript
[1, 2, 3, 4, 5].$reduce(function (k, v, result) {
	return result + v;
});
// => 15
~~~

示例代码2：
~~~javascript
[1, 2, 3, 4, 5].$reduce(function (k, v, result) {
	if (result == 0) {
		result = 1;
    }
	return result * v;
});
// => 120
~~~

###$find
* `<mixed> $find(fn)` - 对容器中元素应用迭代器,只要有一次返回值即立即返回由当前元素

示例代码1：
~~~javascript
[1, 2, 3].$find(); // => 1 取第一个
~~~

示例代码2：
~~~javascript
[1, 2, 3].$find(function (k, v) {
	return (v > 1);
});
// => 2
~~~

###$findAll
* `<array> $findAll(fn)` - 对容器中元素应用迭代器,将所有返回真的元素放入一数组

示例代码1：
~~~javascript
[1, 2, 3, 4, 5].$findAll(function (k, v) {
	return (v > 3);
});
// => [4, 5]
~~~

###$filter
`<array> $filter(fn)` - 同`$findAll(fn)`作用一致

###$reject
* `<array> $reject(fn)` - 对容器中元素应用迭代器,将所有返回假的元素放入一数组中

示例代码1：
~~~javascript
[1, 2, 3, 4, 5].$reject(function (k, v) {
	return (v > 3);
});
// => [1, 2, 3]
~~~

###$grep
* `<array> $grep(pattern)` - 找出匹配某正则表达式的元素，并放入一数组中

示例代码1：
~~~javascript
["a", "b", "c", 10, "11"].$grep(/\d+/); // => [10, "11"]
~~~

###$keys
* `<array> $keys(value, strict)` - 同`$indexesOf(value, strict)`


###$indexesOf
* `<array> $indexesOf(value, strict)` - 取得某一个值在数组中出现的所有的键的集合

示例代码1：
~~~javascript
[1, "2", 3].$indexesOf(2); // => [1]
[1, "2", 3].$indexesOf(2, true); // => [] 因为"2"和2的数据类型不同
~~~

###$diff
* `<array> $diff(array2)` - 取当前数组与另一数组的差集

示例代码1：
~~~javascript
[1, 2, 3, 4, 5].$diff([2, 3, 4, 6]); // => [1, 5] 注意"6"并不在其中
~~~

###$intersect
* `<array> $intersect(array2)` - 取当前数组与另一数组的交集

示例代码1：
~~~javascript
[1, 2, 3].$intersect([2, 3, 4]); // => [2, 3]
~~~

###$max
* `<mixed> $max(compare)` - 取得当前集合中最大的一个值

示例代码1：
~~~
[1, 2, 3].$max(); // => 3
~~~

示例代码2：
~~~javascript
[1, 2, 3].$max(function (v1, v2) {
	return v2 - v1;
}); 
// => 1
~~~

###$min
* `<mixed> $min(compare)` - 取得当前集合中最小的一个值

示例代码1：
~~~
[1, 2, 3].$min(); // => 1
~~~

示例代码2：
~~~javascript
[1, 2, 3].$min(function (v1, v2) {
	return v2 - v1;
}); 
// => 3
~~~

###$sum
* `<number> $sum(fn)` - 计算数组中的所有元素的总和

示例代码1：
~~~javascript
[1, 2, 3].$sum(); // => 6
[1, 2, 3, 4].$sum(); // => 10 
~~~

###$product
* `<number> $product(fn)` - 计算数组中的所有元素的乘积

示例代码1：
~~~javascript
[1, 2, 3].$product(); // => 6
[1, 2, 3, 4].$product(); // => 24
[1, 2, 3, 4, 5].$product(); // => 120
~~~

###$rand
* `<array> $rand(size)` - 随机截取数组片段，size默认为1

示例代码1： 
~~~javascript
var arr = [1, 2, 3, 4];
newArr = arr.$rand(); // arr不变，newArr => [3]
newArr = arr.$rand(); // arr不变，newArr => [2]
newArr = arr.$rand(); // arr不变，newArr => [4]
newArr = arr.$rand(2); // arr不变，newArr => [3, 1]
~~~

###$size
* `<number> $size()` - 计算元素数量

示例代码1：
~~~javascript
[1, 2, 3].$size(); // => 3
~~~

###$count
同`$size()`作用一致。

###$asJSON
* `<json> $asJSON(field)` - 取得当前数组转换为JSON格式的字符串

示例代码1：
~~~javascript
[1, 2, 3].$asJSON(); // => "[1,2,3]"
~~~

###$copy
* `<array> $copy()` - 拷贝数组

示例代码1：
~~~javascript
var arr = [1, 2, 3].$copy(); // arr => [1, 2, 3]
~~~

###$range
* `<array> Array.$range(start, end, step)` - 从一个限定的范围数字或字符生成一个数组

示例代码1：
~~~javascript
var arr = Array.$range(1, 5); // arr => [1, 2, 3, 4, 5]
~~~

示例代码2：
~~~javascript
var arr = Array.$range(1, 5, 2); // arr => [1, 3, 5]
~~~

###$isArray
* `<boolean> Array.$isArray(obj)` - 判断一个对象是否为数组

示例代码1：
~~~javascript
Array.$isArray([1, 2, 3]); // => true
Array.$isArray({ "name": "Libai" }); // => false
~~~

