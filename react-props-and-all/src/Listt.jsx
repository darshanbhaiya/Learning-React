import PropTypes from 'prop-types'
function Listt(props){

    const category=props.category;
    const itemList=props.items;
    const listItems=itemList.map(item=><li key={item.id}>
                                        {item.name}: &nbsp;       
                                        <b>{item.cal}</b></li>)
    return(
        <>
        <h3 className="list-category" >{category}</h3>
        <ol className="list-items" >{listItems}</ol>
        </>);
}
Listt.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                            name:PropTypes.string,
                                            cal:PropTypes.number,
                                             })),                                                                                 
}

Listt.defaultProps={
    category:"Category",
    items:[],
}
export default Listt;