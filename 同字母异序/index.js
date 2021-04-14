// isAnagram("anagram", "nagaram") // => return true. 
// isAnagram("rat", "car") // => return false.

const isAnagram = (a, b) => {
  if (a.length !== b.length) return false
  if (a === b) return true
  const c = a.split('').sort().join('')
  const d = b.split('').sort().join('')
  return c === d
}

console.log(isAnagram("anagram", "nagaram"), '-----1-----')
console.log(isAnagram("rat", "car"), '-----2-----')
