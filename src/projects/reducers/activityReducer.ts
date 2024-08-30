import { Activity } from "../ContadorCalorias/types";

export type ActivityActions = 
{ type : 'save-activity', payload: { newActivity : Activity}}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : [],

}

export const activityReducer = (
    state: ActivityState = initialState,
    actions: ActivityActions 
    ) => {

    if(actions.type === 'save-activity'){
        //Este codigo maneja la logica para actualizar el state
        // console.log('desde el type de save-activity')
        // console.log(actions.payload.newActivity)
        return {
            ...state,
            activities: [...state.activities, actions.payload.newActivity]
        }
    }

    return state
    
}