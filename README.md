#Array.js
帮助开发人员更好地操作Javascript数组。

##使用
直接引入 *Array.js* 或 *Array.min.js*：
~~~html
<script type="text/javascript" src="Array.min.js"></script> 
~~~

##API
###增
* $pad(value, size)
* $fill(value, length)

###删
* $removeValue(v)
* $remove(index)
* $clear()
* $push(value1, value2, ...)
* $pushAll(array2)

###改
* $unique(fn)
* $set(index, value)
* $sort(fn)
* $rsort(fn)
* $arsort(fn)
* $swap(index1, index2)
* $shuffle()

###查
* $contains(v) / $include(v)
* $each(fn)
* $get(index)
* $first()
* $last()
* $isEmpty()
* $all(fn)
* $any(fn)
* $map(fn) / $collect(fn)
* $reduce(fn)
* $find(fn)
* $findAll(fn) / $filter(fn)
* $reject(fn)
* $grep(pattern)
* $keys(value, strict) / $indexesOf(value, strict)
* $diff(array2)
* $intersect(array2)
* $max(fn)
* $min(fn)
* $sum(fn)
* $product(fn)
* $rand(size)
* $size() / $count()
* $asc(field)
* $desc(field)
* $asJSON(field)

###辅助
* $copy()
* Array.$range(start, end, step)