// how to style react component with CSS
// (not including external framework or preprocessors)
// 1.External
// 2.Modules => dedicated CSS for each component => avoids naming conflicts by generating unique class name
// 3.Inline

import Button1 from './Button1.jsx';
import Button2 from './Button2.jsx';
import Button from './Button/Button.jsx';

function App() {

  return (
    <>
    <Button1/>
    <br /><br />
    <Button/>
    <br /><br />
    <Button2/>
    </>
  )
}

export default App
