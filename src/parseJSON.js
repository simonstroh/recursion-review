// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json === '[]'){return []}
  else if(json === '{}'){return {}}
  else if(json === '""'){return ''}
  else if (json === 'null') {
    return null;
  }
  else if (Number(json)) {
    return Number(json)
  }
  else if (json === "true") {
    return true
  }
  else if (json === "false") {
    return false
  }
  else if (json.slice(0, 1) === '[') {
    var arrayResult = []
    var arrayString = json.slice(1, json.length - 1)
    var arrayArray = arrayString.split(',')
    arrayArray.forEach(function(item) {
      arrayResult.push(parseJSON(item))
    })
  } else if (json.slice(0, 1) === '{') {
    var objectResult = {}
    var objectString = json.slice(1, json.length - 1)
    var objectArray = objectString.split(',')
    objectArray.forEach(function(item) {
      var keyAndValue = item.split(':')
      objectResult[parseJSON(keyAndValue[0])] = parseJSON(keyAndValue[1])
    })
    return objectResult
  }
  else {
    return json.slice(1,json.length)
  }
};
