import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            { <p>Student: {props.isStudent?"Yes":"No"}</p> /* booleans doesn't display directly */}
        </div>
    );
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool,
}
// only generates warning
Student.defaultProps={
    name:"Guest",
    age:0,
    isStudent:false,
}
export default Student;