import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';

const HeaderComponent = ({title,onAdd,showAdd}) => {
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <ButtonComponent color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close':'Add'} onClick={onAdd}
           
           />
         </header>

    )
}
HeaderComponent.defaultProps ={
    title:' Task Tracker ',
}
HeaderComponent.propTypes = {
    title:PropTypes.string,
}
// const headingStyle = {
//     color: 'greenYellow',
//     backgroundColor:'gray'
// }
export default HeaderComponent
