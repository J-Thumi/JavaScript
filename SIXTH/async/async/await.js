//def a function with async keyword

let stocks={
    Fruits: ["grapes","apple","banana","strawberry"],
    Liquid : ["water","ice"],
    holder : ["cone","cup","stick"],
    toppings : ["chocolate","peanuts"],

}

let is_shop_open=true

function time (ms){
    return new Promise((resolve ,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop closed"))
        }
    })
}

async function jikoni(){
    try{

        await time (2000)
        console.log(`${stocks.Fruits[0]} was selected`)

        await time(0)
        console.log("start production")

        await time(2000)
        console.log("cutting the fruits complete")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)

        await time(1000)
        console.log("machine started")

        await time(2000)
        console.log(`${stocks.holder[0]} selected as the container/holder and ice cream added to it`)

        await time(3000)
        console.log(`${stocks.toppings[0]} topped on the ${stocks.holder[0]}`)

        await time(2000)
        console.log("icecream served") 
    }
    catch(error){
        console.log("customer left",error)
    }
    finally{
        console.log("day ended ,shop closed")
    }
}
jikoni()



//waiter sees what customer wanted is over he must return the message to her ,await

let topping_choice=()=>{
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve(
                console.log("which topping would you like? ")
            )
            
        },1000)
    })
}

async function kitchen(){

    //this are the steps for making ice cream

    console.log(" A ")
    console.log(" B ")
    console.log(" C ")

    //after the above steps i discover I dont know which topping so I have to ask the customer
    //the process must first stop

    await topping_choice()//the other steps must wait until waiter knows what is the topping

    console.log(" D ")
    console.log(" E ")
}

kitchen()

//what to continue as the waiter is asking what topping to use
//this is because there are other waiters doing ther tasks

console.log("doing the dishes")
console.log("cleaning tables")
console.log("taking others orders ")

async function order(){

    try{
        await abcd
    }
    catch(error){
        console.log("abcd don't exist ", error)
    }
    finally{
        console.log("runs anyway")
    }
}

order()