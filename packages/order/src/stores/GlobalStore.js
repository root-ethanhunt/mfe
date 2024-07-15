// // GlobalStore.js
// import React, { createContext, useContext, useReducer } from 'react';

// const GlobalStateContext = createContext();
// const GlobalDispatchContext = createContext();

// const initialState = { /* initial state */ };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_STATE':
//       return { ...state, ...action.payload };
//     default:
//       return state;
//   }
// };

// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <GlobalStateContext.Provider value={state}>
//       <GlobalDispatchContext.Provider value={dispatch}>
//         {children}
//       </GlobalDispatchContext.Provider>
//     </GlobalStateContext.Provider>
//   );
// };

// export const useGlobalState = () => useContext(GlobalStateContext);
// export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
