let map = new Map();
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

map.forEach((value,key) => {
  console.log( key," : ", value);
});

//and this is a comment