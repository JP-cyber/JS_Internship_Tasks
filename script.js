Array.prototype.duplicate = function(){
    return this.concat(this);
}

function getCommonElements(arr1, arr2) {
    const res = [];

    arr1.forEach((el) => {
        if(arr2.includes(el)){
            res.push(el);
        }
    });

    return res;
}

function sum(a) {
    return function(b) {
        return a + b;
    }
}

function customObjectCreate(proto) {
    const obj = {};
    Object.setPrototypeOf(obj, proto);
    return obj;
}

Function.prototype.customBind = function(context, ...args) {
    const func = this;
    return function() {
        return func.apply(context, args);
    }
}

const cb = function(el) {
   return function(num) {
       console.log(el + num);
   }
}

function myFunc(callback) {
    return function(a) {
        return function(b) {
            return callback(a, b);
        }
    }
}

function add(...nums) {
    if(nums.length > 1){
        return nums.reduce((a, b) => a + b);
    }else{
        return function(b) {
            return nums[0] + b;
        }
    }
}

const reverseInt = (int) => {
    if(int > 0){
        return +int.toString().split('').reverse().join('');
    }else{
        return reverseInt(int * -1) * -1;
    }
    
}

function maxChar(str) {
    const arr = str.split('');
    const obj = {};
    arr.forEach(el => {
        if(Object.keys(obj).includes(el)){
            obj[el]++;
        }else{
            obj[el] = 1;
        }
    });
    const maxValue = ['', 0];
    for(const [key, value] of Object.entries(obj)){
        if(value > maxValue[1]){
            maxValue[0] = key;
            maxValue[1] = value;
        }
    }
    return maxValue[0];
}
