import './css/nav.css'
import {Link} from "react-router-dom"
function nav(props){
    return(
            <nav className="nav">
                <Link to="/react" className='a' >Home</Link> 
                <Link to="/about" className='a'>About us</Link>  
                <Link to="/contact" className='a'>Contact</Link> 
                <a href="https://www.nirfindia.org/2022/EngineeringRanking.html" target = '_blank' className='a' >NIRF Ranking 2022</a> 
                <a href="https://www.nirfindia.org/2021/EngineeringRanking.html"  target = '_blank'className='a'>NIRF Ranking 2021</a> 
               
            </nav>
    )
}
export default nav