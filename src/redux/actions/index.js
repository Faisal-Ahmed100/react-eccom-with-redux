// add item to cart
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

// delete item to cart
export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}


// count 

export const addUser=(user)=>{
    const AddUser={
        type:'ADD_USER',
        payload:user
    }
    return AddUser
}
