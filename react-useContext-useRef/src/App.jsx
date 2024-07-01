// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level


// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
//        <Child/>
//    </MyContext.Provider>


// CONSUMER COMPONENTS
// 1. import React,{useContext} from 'react;
//    import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)





// useState() = re-renders the component when the state value changes

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            when you want a component to "remember" some information
//            but you don't want that information to trigger new renders

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions  
//            3. Managing Timers and Intervals




import ComponentA from "./ComponentA"
import MyComponent from "./MyComponent"
function App() {
  

  return (
    <>
      <ComponentA/>
      <br />
      <br />
      <MyComponent/>
    </>
  )
}

export default App
