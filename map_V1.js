var words = ["ground", "control", "to", "major", "tom"];
var newArr = [];

function woohoo(array){
  var arr = [];
  array.forEach(function(item,index,arra){
    arr.push(array[index].length);
  });
  return(arr);
}

console.log(woohoo(words, function(word){
  return word.length;
}));