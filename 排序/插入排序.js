// 

const insertSort = arr => {
  const len = arr.length
  let prevIdx
  let curr
  for (let i = 1; i < len; i++){
    prevIdx = i - 1
    curr = arr[i]
    const prev = arr[prevIdx]
    // 前一个大于当前值
    while (prevIdx >= 0 && prev > curr) {

    }
  }
}

const arr = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3]
console.log(inserSort(arr), '-----inserSort(arr)-----')
