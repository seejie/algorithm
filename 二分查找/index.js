// 折半查找，有序是为了能够进一步判断在哪一边迭代调用。
// 不一定要求有序，对半拆分后只要可以确定会出现在其中的那一边即可。
const arr = [0, 3, 5, 6, 7, 9, 12, 15, 21, 27, 32, 33, 39]
const target = 27

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left >= right) return -1
  if (arr[left] === target) return left 
  if (arr[right] === target) return right
  const middle = Math.ceil((left + right) / 2)
  if (arr[middle] > target) {
    return binarySearch(arr, target, left, middle - 1)
  } else {
    return binarySearch(arr, target, middle, right)
  }
}

const idx = binarySearch(arr, target)
console.log(idx, '-----idx-----')
