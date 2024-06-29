// const human =()=>{
//     const name ='Jos'
//     const walk=()=>{
//         console.log(`hello I am ${name}`)
//     }
//     const feeling=()=>{
//         console.log(`${name} feeling good`)
//     }
//     walk()
//     feeling()
// }
// human()



//have access to outer scopes
//the above also works if the name is dynamic i.e it is a parameter in the human function

// const human =(name)=>{
   
//     const walk=()=>{
//         console.log(`hello I am ${name}`)
//     }
//     const feeling=()=>{
//         console.log(`${name} feeling good`)
//     }
//     walk()
//     feeling()
// }
// human('sina')
// human('jos')

//the inner functions can be written in the global scope
//the reason why we write functions inside a function is for reusability

//if we want the functions to be called later maybe by click of a button we can return an object

const human =(name)=>{
   
    const walk=()=>{
        console.log(`hello I am ${name}`)
    }
    const feeling=()=>{
        console.log(`${name} feeling good`)
    }
    return{
        walk,
        feeling
    }
    
}
const sina =human('sina')
const jos=human('jos')
sina.walk()