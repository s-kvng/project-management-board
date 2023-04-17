import { Link as RouterLink } from 'react-router-dom';
import './Link.css';


function Link() {


    return (

        <nav>
            <RouterLink to='/' className='links'>
                Board
            </RouterLink>
            <RouterLink to='/backlog' className='links'>
                backlog
            </RouterLink>
        </nav>
    )
}


export default Link;