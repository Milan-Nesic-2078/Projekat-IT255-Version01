import { ADD_VALUE } from "./action";

export interface ApState {

    iznos: number;

    datum: Date;


}


export const INISTATE: ApState = {

    iznos: null,

    datum: null



}

export function rootReducer(state, action) {

    switch(action.type){

        case ADD_VALUE:

            state.iznos = 45000;

           state.datum = new Date();

    }

    return state; 
} 