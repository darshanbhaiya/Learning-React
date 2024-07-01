// props => read only properties that are shared between components
//       => a parent component can send data to a child component
//       => <Component key=value/>


// propTypes => a mechanism that ensure that the passed value is of correct datatype
//           => age: PropTypes.number

// defaultProps => default values for props in case they are not passed from the parent component
//              =>  name:"Guest"


// conditional rendering => allows you to control what gets rendered in your application based on certain condition
                        //  => (show, hide or change components)
// here App is parent and Student is child
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import ListObject from './ListObject.jsx';
import FilterObjects from './FilterObjects.jsx';
import Listt from './Listt.jsx';

function App() {

  const cars=[  {id:1,name:"ferrari",cal:95},
                {id:2,name:"audi",cal:45},
                {id:3,name:"bmw",cal:55},
                {id:4,name:"mercedes",cal:75},
                {id:5,name:"maserati",cal:90}];

  const carm=[];

  return (
    <>
      <Student name="Darshan" age={21} isStudent={true} />
      <Student name="Noorshan" age={20} isStudent={false} />
      <Student name="toorshan" age={81} isStudent={true} />
      <Student name="juorshan" age={19} isStudent={true} />
      <Student isStudent={true} />

      <br /><br />
      <br /><br />

      <UserGreeting isLoggedIn={true} username="Darshan"/>
      <UserGreeting isLoggedIn={false} username="Bharshan"/>
      <UserGreeting isLoggedIn={true} />
      <UserGreeting isLoggedIn={false} />
      <UserGreeting isLoggedIn="false" />
      
      <br /><br />
      <br /><br />

      <List />
      <ListObject />
      <FilterObjects />

      <br /><br />
      <br /><br />

      <Listt items={cars} category="Cars" />
      {cars.length >0 && <Listt items={cars} category="Cars" /> }
      {/* this is known as short circuiting */ }
      {cars.length >0 && <Listt  category="Cars" /> } 
      {carm.length >0 && <Listt items={carm} category="Cars" /> }
    </>
  )
}

export default App;
