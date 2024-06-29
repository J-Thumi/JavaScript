//global, module ,function, block scopes
// let a=1
// const add =()=>{
//     let b=2
//     return a+b
// }
// console.log(add())
//console.log(a,b)

//an error of b is not def because it is only accessible inside the function it is def in
//a file that is not using modules and has var def on top of it
//console.log(globalVar)

//the best way to make variables global is by exporting and importing them where needed

//export const globalV='exported'

//anything surrounded by curly braces is in its own block scope ie if for functions etc

const example =()=>{
    const t=3
    if (true){
        const r=6
        console.log(r)  
}

    }
    example()

    //note that variables def by var are only function scoped not block hence if 
    const exampl =()=>{
        const t=3
        if (true){
            var r=6
            
    }
    console.log(r) 
        }
        
        exampl()
        //r can be accessed any where in the function

        //but remmmember var is not advisable to use