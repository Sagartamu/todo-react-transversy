import {Link} from 'react-router-dom';

const Footer = () => {
    return ( 
        <footer>
        <p>Copyright &copy; Sagar/learn 2021</p>
        <p>Copyright &copy; Transversy</p>
        <Link to='/about'>About</Link>
        </footer>
     );
}
 
export default Footer;