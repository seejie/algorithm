const romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let n = 0
  for(let i = 0, len=s.length; i < len; i++){
    map[s[i]] < map[s[i+1]] ? n -= map[s[i]] : n += map[s[i]]
  }

  return n
}

const a = romanToInt('MCDLXXVI')
console.log(a, '-----a-----')
const b = romanToInt('III')
console.log(b, '-----b-----')
const c = romanToInt('VII')
console.log(c, '-----c-----')
const d = romanToInt('IX')
console.log(d, '-----d-----')
