  function add(str){
    if (str === ""){
      return 0
    }
    if ((/.+(?=\/\/)/g).test(str) == true && /\n/g.test(str) == true) {
      throw new Error("invalid input");
    }
    if (
      /\d$/g.test(str) == false &&
      str.length > 0 &&
      /\s/g.test(str) == true
    ) {
      throw new Error("invalid input");
    }
    const delimiter = getDelimiter(str)
    const formattedInput = formatInput(str)
    return calculateSum(getNumbers(formattedInput, delimiter)) 
  }
  function formatInput(str){
    const delimiterExp = /(\/\/.+\n)/g
    const matches =delimiterExp.exec(str)
    if(matches && matches.length > 0){
      return str.replace(delimiterExp,"")
    }
    return str
  }
  function getDelimiter(str) {
    const delimiters = []
    const multipleDelimiterExp = /(?:\/\/)?\[([^\[\]]*)\]\n?/g
    let matches = multipleDelimiterExp.exec(str)
    for (let i = 0; matches !== null; i++) {
      delimiters.push(matches[1])
     matches = multipleDelimiterExp.exec(str)  
    }
    if(delimiters.length > 0){
      return new RegExp("["+delimiters.join("")+"]")
    }
    matches = (/^\/\/(.*?)\n/g).exec(str)
    if(matches && matches[1]){
      return matches[1]
    }
    return /[\n,]/
  }
  function getNumbers(string, delimiter){
    return string.split(delimiter)
      .filter(n => n !== "")
      .map(n => parseInt(n))
  }
  function calculateSum(numbers){
    const negatives = []
    const finalSum = numbers.reduce((sum, n) =>{
      if(n >= 1000){
        return 0
      }
      if(n < 0){
        negatives.push(n)
        return 0
      }
      return sum + n
    },0)
    if(negatives.length > 0){
      throw Error('negatives not allowed '+negatives.join(','))
    }
    return finalSum
  }
console.log(add("//;\n1000;1;2"))
module.exports = {add}