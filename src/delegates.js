const delegate = require('delegates');

function fn(){

}

const obj ={
    sayName: function(name){
        console.log(name)
    },
    age:'12'
}

delegate(fn,'obj')
.method('sayName')

fn.sayName('ddd')