require('babel-polyfill')
const pr = (...args) => {
  return new Promise((resolve, reject) => {
    resolve('promise fullfilled')
  })
}
module.exports = {
  async testAsync(args) {
    const res = await pr(...args)
    console.log(res)
  },
  testBuiltInMethods() {
    console.log([1,2,4].includes(1))
    console.log([1,2,4].find((el) => el >= 2))
  }
}

// module.exports = () => {

// }

