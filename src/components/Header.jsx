import PropTypes from 'prop-types';
import Button from './Button';
import {useLocation} from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
    const location =useLocation()
    return (
        <header className='header'>
            {/* <h1 style={{ color: 'red', backgroundColor: 'black' }}> {title} </h1> */}
            {/* <h1 style={heading_style}> {title} </h1> */}
            <h1> {title} </h1>
           
            {location.pathname === '/' && <Button color='green' 
            color={showAdd ? 'red' : 'green'}
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
            />}

            {/* <Button color='green' text='Add Task 1' />
            <Button color='yellow' text='Add Task 2' /> */}
        </header>
    )
}


Header.defaultProps = {
    title: 'Task Tracker Application',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}




//CSS in JS

// const heading_style = {
//     color: 'red',
//     backgroundColor: 'black'
// }



export default Header
