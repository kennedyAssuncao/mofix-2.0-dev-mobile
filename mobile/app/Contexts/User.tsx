import React, {
    createContext,
    useState
} from "react";


interface UserData {
    typeUser: number;
}

//value == 1? 'Cliente' : 'Profissional'
// const UserContext = createContext(
//     {typeUser: 1}
// );

const initialState = {
    User:{typeUser: 1}
};

//const UserContext = createContext({} as UserData);

/*Recebendo estado incial para criar contexto global*/
const UserContext = createContext(
    {
        state: initialState,
        actions:{setUser: ()=>{ }}
    }
);

const setUser = (state: any, setState: any, User: any) =>{
    setState({User})
}

export const UserProvider: React.FC = ({children}) => {
    
    const [state, _setState ] = useState(initialState);

    const setState = (_state:Object) => {
        const newState = { ...state, ..._state }
        _setState(newState)
    }
    
    const actions: any = {
        setUser: setUser.bind(null, state, setState)
    }

    return(
        <UserContext.Provider value={{state, actions}}>
            {children}
        </UserContext.Provider>
    );

    /*
        return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    );
    */
}

export default UserContext;