// Es6 fat array function ----------> 


//normal function--->
function add(a,b){
    return a+b;
}

 let result = add(10,5)
//  console.log(result);    //Answer : 15


 ///array function -> 
 let number =(a,b) =>{
    return a + b ;
}    
// console.log(number(10,5));  // Answer : 15

let numbers = () => 10;
// console.log(numbers()) 
/// Answer : 10

// let num = () => return 10;

// console.log(num()) 
//  SyntaxError: Unexpected token 'return'


var JavaScript ={
    name : 'JavaScript',
    libraries : ['React' ,'Angular', 'Vue'],
    printLibraries : function(){
        // console.log(this); //{ name: 'JavaScript',libraries: [ 'React', 'Angular', 'Vue' ],printLibraries: [Function: printLibraries]}
       
        this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`) /// JavaScript loves React,JavaScript loves Angular,JavaScript loves Vue
        )
    }
}

JavaScript.printLibraries();