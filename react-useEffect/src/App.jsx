// useEffect() = react hook that tells react DO SOME CODE WHEN (pick one):
//              this component re-renders
//              this component mounts (create and append it to DOM)
//              the state of a value changes


//  useEffect(function,[dependencies])

//  1. useEffect(() => {})            // runs after every re-render
//  2. useEffect(() => {}, [])        // runs only on mount
//  3. useEffect(() => {}, [value])   // runs on mount + when value changes

// uses
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import MyComponent from "./MyComponent"
import MyComponent2 from "./MyComponent2"
function App() {

  return (
    <>
    <MyComponent/>
    <br />
    <br />
    <MyComponent2/>
      
    </>
  )
}

export default App
