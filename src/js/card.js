import './css/card.css'
function card(props){
    return(
        <section className='section'>
            <h4 className="position">NIRF Ranking : {props.rank} </h4>
            <img src={props.img} className='img' alt="" />
            <h4 className='name'>{props.Name}</h4>
            <a href={props.link}className='links' target='_blank'> Visit the website </a>
        </section>
    )
}

export default card
