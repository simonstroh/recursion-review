// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (Array.isArray(obj)) {
    var arrayEmptyArray = []
    obj.forEach(function(item) {
      arrayEmptyArray.push(stringifyJSON(item))
    })
    var arrayResult = arrayEmptyArray.join(',')
    return '[' + arrayResult + ']';

  } else if (obj && typeof obj === "object") {
    var emptyArray = []
    for (property in obj) {
      if (typeof obj[property] === "undefined" || typeof obj[property] === "function") {
        continue;
      }
      emptyArray.push(stringifyJSON(property) + ':' + stringifyJSON(obj[property]))
    }
    var result = emptyArray.join(',')
    return '{' + result + '}'
  }

  if (typeof obj === "string") {
    return '"' + obj + '"'
  } else if (typeof obj === "number" || typeof obj === "boolean") {
    return obj.toString()
  }

  return '' + obj
}