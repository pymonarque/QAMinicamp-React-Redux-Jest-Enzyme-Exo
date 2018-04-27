//Listens for dispached actions. 
//Generates a new state by merging existing state with an empty object

//checks the type of the action and decides what to add to state based on that actions data

const clock = ( state = {}, action )=>{
    
        let newState = Object.assign( {}, state)

        switch( action.type ){
        case 'UPDATE_TIME':
            const date = new Date();
            newState.time = date.toLocaleTimeString();
            return newState;

        default:
            return state;
    }
}
export default clock;