//ANONYMOUS FUNCTION

//printing odd numbers in an array

const odd = function(arr){
    
    for(let key in arr){
        if(arr[key]%2 == 1){
        console.log(arr[key])
        }

    }
}
odd([1,2,3,4,5,6,7,8,9]);


 //capitalizing the first letter of strings in an string array

 const caps = function(str){
    for(var i=0; i<str.length;i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     
    }

    return str;

 }

 console.log(caps(["subha","nila","mahi"]));


 //sum of an array

 let flag =0;
 const sum = function(arr){
    for(let key in arr){
        flag += arr[key]
    }
    return flag;
}
console.log(sum([1,2,3,4,5,6]))




// to print all the prime

let arr1 =[1,2,3,4,5,6,7,8]

const isPrime = function(arr1) {
    for (let ind = 2; arr1 > ind; ind++) {
      if (arr1 % ind === 0) {
        return false;
      }
    }
    
     return arr1>1;

  }
  console.log(arr1.filter(isPrime));


  // print the palindrome

let str=["dad","cat","mom"];

const isPalindrome = function(str) {
    for( let ind=0; ind<str.length; ind++){
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return str
    } 
}
}

console.log(str.filter(isPalindrome));


// median of two sorted arrays

const median = function(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let comb = arr1.concat(arr2);
    let n = (comb.length)/2
    let m1 = +comb[n-1];
    let m2 = +comb[n];
    let med = (m1+m2)/2
    return med;


}

console.log(median([4,3,2,1],[8,7,6,5]));


// print without duplicate values in array

const duplicate = function(arr3){

    
    let uniqueArr = [];
    for(let i of arr3) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);

}
duplicate([1,2,2,3,4,4]);


// rotate an array 'k' times

const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
    const first = arr.shift();
    arr.push(first);
    }
    console.log(arr)
    }
    rotateArray([1,2,3,4],3);



// IMMEDIATELY INVOKED FUNCTION EXPRESSION

//printing odd numbers in an array

(function(arr){
    
    for(let key in arr){
        if(arr[key]%2 == 1){
        console.log(arr[key])
        }

    }
})([1,2,3,4,5,6,7,8,9]);


// capitalizing first letter of string in array

(function(str){
    for(var i=0; i<str.length;i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     
    }

    console.log(str);

 })(["subha","nila","mahi"]);


 //sum of an array

let save = 0;
 (function(arr){
    for(let key in arr){
        save += arr[key]
    }
    console.log(save);
})([1,2,3,4,5,6]);


// to print all the prime


(function(val){
    for (let i = 0; i <= val.length; i++) {
    let fl = 0;
    for (let j = 2; j < val[i]; j++) {
        if (val[i] % j == 0) {
            fl = 1;
            break;
        }
    }

    
    if (val[i] > 1 && fl == 0) {
        console.log(val[i]);
    }
}
})([1,2,3,4,5,6,7]);


  
  // print the palindrome



(function(st) {
    
        for(var key of st){
            let rev = "";
    for (let i = key.length - 1; i >= 0; i--){
        rev += key[i];

    }
    if (rev == key) {
        console.log(key);
    } 
        }
})(["mom","dad","boy"]);



// median of two sorted arrays

(function(arr1, arr2){
    arr1.sort();
    arr2.sort();
    let comb = arr1.concat(arr2);
    let n = (comb.length)/2
    let m1 = +comb[n-1];
    let m2 = +comb[n];
    let med = (m1+m2)/2
    r=console.log(med);


})([4,3,2,1],[8,7,6,5]);



// print without duplicate values in array

(function(arr3){

    
    let uniqueArr = [];
    for(let i of arr3) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);

})([1,2,2,3,4,4]);


// rotate an array 'k' times

(function(arr, k) {
    for (let i = 0; i < k; i++) {
    const first = arr.shift();
    arr.push(first);
    }
    console.log(arr)
    })([1,2,3,4],3);



// ARROW FUNCTION


//printing odd numbers in an array

const oddno = (arr)=>{
    
    for(let key in arr){
        if(arr[key]%2 == 1){
        console.log(arr[key])
        }

    }
}
oddno([1,2,3,4,5,6,7,8,9]);


 //capitalizing the first letter of strings in an string array

 const cap = (str)=>{
    for(var i=0; i<str.length;i++)
    {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
     
    }

    return str;

 }

 console.log(cap(["subha","nila","mahi"]));


  //sum of an array

  let store =0;
  const add = (arr)=>{
     for(let key in arr){
         store += arr[key]
     }
     return store;
 }
 console.log(add([1,2,3,4,5,6]))


// to print all the prime

let a =[1,2,3,4,5,6,7,8]

const primeno = (a)=> {
    for (let ind = 2; a > ind; ind++) {
      if (a % ind === 0) {
        return false;
      }
    }
    
     return a>1;

  }
  console.log(a.filter(primeno));


   // print the palindrome

let s=["dad","cat","mom"];

const pal = (s)=> {
    for( let ind=0; ind<s.length; ind++){
    let rev = "";
    for (let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    if (rev == s) {
        return s
    } 
}
}

console.log(s.filter(pal));