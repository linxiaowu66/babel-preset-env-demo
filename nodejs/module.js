require('babel-polyfill')
const pr = () => {
  return new Promise((resolve, reject) => {
    resolve('promise fullfilled')
  })
}
module.exports = {
  error(message){
	  this.name = 'linxiaowu';
	  this.message = message || 'Something oops....';
	  this.type = 'customeErrorType'
	  this.stack = (new Error()).stack;
  },
  async testAsync() {
    const res = await pr()
    console.log(res)
  },
  testBuiltInMethods() {
    console.log([1,2,4].includes(1))
    console.log([1,2,4].find((el) => el >= 2))
  }
}

// module.exports = () => {

// }

