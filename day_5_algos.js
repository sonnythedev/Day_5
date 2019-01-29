/*
  1. Write a function that takes in an array of number and returns the average of the numbers. The return type should be number. (also make sure items are converted to number first)

  for example [1,2,3,3,4] ->(1+2+3+3+4)/5=13/5

  [1,2,3,'3',4,true,'asdfasdfsdf',{},undefined,]

  */

  function calculateAverage(arr){
      let itemCounts=arr.length;
      let sum=0;
      for(let i=0; i<itemCounts; i++){
          if(typeof arr[i]=='number'){
            sum +=Number(arr[i]);
          }
          if(typeof arr[i]=='boolean'){
            return false;
          }
          else{
              //It's handing all other types than number
              console.log(typeof Number(arr[i]));
              return false;
          }
      }
      return sum/itemCounts;
  }
  let arr=[5,5,5,'6',undefined,true];
  console.log(calculateAverage(arr));

  /*
  2. Write a function that takes in an array and returns the maximum and minimum value. The return type should be maximum_minimum(a string). For example, [100,2,1,3,4,5] should return '100_1' . Try to do this in one loop. */
  
////We have to first assume the min and max is certain positive and negative number
//Then we have to loop through each item and check the value against each. and reassign min and max
//[1,2,3,4,6,-200000,454545454, 7,8]
console.log('Negative Infinity:',Number.NEGATIVE_INFINITY);
console.log('Positive Infinity:',Number.POSITIVE_INFINITY);


function findMinMax(arr){
    let min=arr[0]; //assuming first number is min
    let max=arr[0]; //assuming first number is max
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max+'_'+min;
}

function findMinMax_V2(arr){
    return Math.max(...arr)+'_'+Math.min(...arr);
}
//...[1,2,3,4,6] ->1,2,3,4,6
//... is called spread operator. It spreads an array into individual items
arr=[1,2,3,4,6,-200000,454545454, 7,8];
console.log(arr);
console.log('max min:',findMinMax_V2(arr));

////LETS cover Math functions
/*
Math.max()
Math.min()
Math.round() -->rounds the number to closest SVGAnimatedInteger
*/
console.log('round',Math.round(4.4));
console.log('round',Math.round(4.5));

console.log('floor',4.9,Math.floor(4.9)); ->4.0
console.log('ceil',4.1,Math.ceil(4.1));

/*
Math.PI
Math.sqrt

Math.abs()
Math.exp()
Math.pow()
Math.random()
*/

console.log('PI',Math.PI);
console.log('abs -10000',Math.abs(-10000));
console.log('pow 3,3',Math.pow(3,3));
console.log(Math.random());
/*
3. Write a function that takes in an array and removes duplicates if any.
For example, [1,2,3,3,4,5,6,7,7,7] should return [1,2,3,4,5,6,7]
      [1,2,3,4] should return [1,2,3,4]
*/
//[1,2,2,2,3,4,5,6,7]

//Write a function that will return a random integer number between the range provided

function giveMeRandom(rangeMin,rangeMax){
    //return rangeMin+Math.ceil(rangeMax*Math.random());
    let output=rangeMin+Math.ceil(Math.random()*(rangeMax-rangeMin));

    return output;
}

function removeDups(arr){
    let itemsObj={}; //let arr=[]
    let outputArr=[];
    for(let i=0; i<arr.length; i++){
        let item=arr[i];
        if(itemsObj[item]==undefined){//the item wasnt added to object previously
          itemsObj[item]=1; //{1:1}
          outputArr.push(item);
        }
        else{
            //DO NOTHING WHEN item already exists in the object
        }
    }
    return outputArr;
}

arr=[1,1,1,2,2,3,4,5];
let set1=new Set(arr);
console.log('set1',set1)
let arr2=[...set1];
//let arr3=arr2;
//console.log(arr3);
//console.log(removeDups(arr));
////
let obj={
   1:3,
   2:2,
   3:1,
   4:1,
   5:1 
};
//obj[1], obj[2], obj[5]

Object.keys(obj); //it returns array with all the keys ---> [1,2,3,4,5]
Object.values(obj); //it returns array with all the vales --->[3,2,1,1,1]

arr=[1,2,1000,5,6];

console.log(Math.max(...arr)); //Math.max(1,2,1000,5,6)
console.log(Math.max.apply(this, arr));



