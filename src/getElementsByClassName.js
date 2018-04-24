// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];
  function checkClass(element){
    let children = element.childNodes;
    if(element.classList && element.classList.contains(className)){
      result.push(element)
    }
    children.forEach((child)=>{checkClass(child)});
  }

  checkClass(document.body)
  return result; 
}