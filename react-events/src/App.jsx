// click event => an interaction when a user clicks on a specific element.
//        we can respond to clicks by passing a callback to the onClick event handler


// React hook => Special function that allows functional components
//         to use react features without writing class components (React v16.8) 
//         (useState,useEffect,useContext,useReducer,useCallback, and more ...)  

// useState() => a react hook that allows the creation of a stateful variable 
//      AND a setter function to update its value in the virtual DOM.
//      [name,setName]

// onChange => event handler used primarily with form Elements
//             eg: <input>, <textarea>,<select>,<radio>,etc
//             Triggers a function every time the value of the input changes



import Button from './Button.jsx'
import Button1 from './Button1.jsx'
import Button2 from './Button2.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import OnChange from './OnChange.jsx'
function App() {
 
  return (
    <>
     <Button/>
     <br />
     <Button1/>
     <br />
     <Button2/>
     <br />
     <ProfilePicture/>
     <br />
     <MyComponent/>
     <br />
     <br />
     <Counter/>
     <br />
     <br />
     <OnChange/>
    </>
  )
}

export default App
