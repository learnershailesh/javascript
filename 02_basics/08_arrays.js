 
 let arr = [1, 3, 6, 7, 8]
 let secArr = ["rahuol", "skm", "rahil", "ravi", "ritesh"]

 console.log(arr[2])
 console.log(secArr[4])
 arr.pop()
 console.log(arr.length);

 let anotherArr = new Array()
  anotherArr.push(2)
  anotherArr.push(5)
  anotherArr.push(1)
  anotherArr.push(7)
  console.log(anotherArr.length);

  arr.unshift(9);
  console.log(arr);
  arr.shift()
  console.log(arr);
  let nya = arr.join()
  console.log(nya);
  console.log(typeof nya);

  let myarr = arr.slice(1,4)
  console.log(myarr);
  let nyarr = arr.splice(1,4)

  console.log(nyarr);

