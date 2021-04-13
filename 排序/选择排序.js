// 依次找到剩余元素的最小值或者最大值，放置在末尾或者开头。

const selectSort = arr => {
  const len = arr.length
  let min
  for (let i = 0; i < len - 1; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) min = j
    }
    // 本次循环的第一位与最小值交换
    [arr[i], arr[min]] = [arr[min], arr[i]]
    console.log(`第${i+1}次循环`, arr.toString())
  }
  return arr
}

const arr = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3]
console.log(selectSort(arr), '-----selectSort(arr)-----')
// 第1次循环 0,6,7,4,5,8,9,1,2,3
// 第2次循环 0,1,7,4,5,8,9,6,2,3
// 第3次循环 0,1,2,4,5,8,9,6,7,3
// 第4次循环 0,1,2,3,5,8,9,6,7,4
// 第5次循环 0,1,2,3,4,8,9,6,7,5
// 第6次循环 0,1,2,3,4,5,9,6,7,8
// 第7次循环 0,1,2,3,4,5,6,9,7,8
// 第8次循环 0,1,2,3,4,5,6,7,9,8
// 第9次循环 0,1,2,3,4,5,6,7,8,9
