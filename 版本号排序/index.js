const arr = ['1.2', '4.2.3', '1.3', '1.2.1']

const sort = arr => {
  const list = arr.map(el => el.split('.')).sort((a, b) => {
    let c, d
    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i] === b[i]) continue
      c = +a[i] || 0
      d = +b[i] || 0
      break
    }
    return c - d
  }).map(el => el.join('.'))

  return list
}

console.log(sort(arr), '-----sort(arr)-----')

const sort2 = arr => {
  return arr.sort((a, b) => {
    let c = a.replace(/\./g, 0)
    let d = b.replace(/\./g, 0)
    const diff = a.length - b.length
    
    if (diff < 0) {
      c = (c + '0'.repeat(-1 * diff)) * 1
    } else {
      d = (d + '0'.repeat(diff)) * 1
    }
    return c - d
  })
}

console.log(sort2(arr), '-----sort2(arr)-----')
