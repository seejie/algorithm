// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 输入：strs = ["dog","racecar","car"]
// 输出：""

// 输入：strs = ["dog","","car"]
// 输出：""

// 输入：strs = ["dog"]
// 输出："dog"

// 输入：strs = ["dog","dog"]
// 输出："dog"

const longestCommonPrefix = function(strs) {
  if (strs.length <= 1) return strs.join('')
  if (strs.length > 200) return ''
  if (strs.findIndex(el => !el) !== -1) return ''
  const [first, ...rest] = strs
  const arr = first.split('')
  const idx = arr.findIndex((el, index) => {
      return !!rest.find(item => {
          return el !== item[index]
      })
  })
  if (idx === -1) return first
  return arr.splice(0, idx).join('')
}

const a = longestCommonPrefix(["flower","flow","flight"])
console.log(a, '-----a-----')
const b = longestCommonPrefix(["dog","racecar","car"])
console.log(b, '-----b-----')
const c = longestCommonPrefix(["dog","","car"])
console.log(c, '-----c-----')
const d = longestCommonPrefix(["dog"])
console.log(d, '-----d-----')
const e = longestCommonPrefix(["dog", "dog"])
console.log(e, '-----e-----')
