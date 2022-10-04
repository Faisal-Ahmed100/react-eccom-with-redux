const initialState={
    count:1,
    users:['md',' ']
};


const handleCountAndUser=(state = initialState,action)=>{
switch (action.type) {
    case 'ADD_USER':
        return{
            users:[...state.users, action.payload],
            count:state.count + 1
        }
      

    default:
        return state;
}
}

export default handleCountAndUser;