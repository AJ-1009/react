import './css/home.css'
import Card from './card'
import links from './links'
import Head from './head'
export default function home(){
    return (
        <>
        <Head college='IITs'/>
    <section className='display'>
    <Card img={links[0].img} Name={links[0].Name} rank={links[0].rank} link={links[0].links}/>
    <Card img={links[1].img} Name={links[1].Name} rank={links[1].rank} link={links[1].links }/>
    <Card img={links[2].img} Name={links[2].Name} rank={links[2].rank} link={links[2].links }/>
    </section>
    <section className='display'>
    <Card img={links[3].img} Name={links[3].Name} rank={links[3].rank} link={links[3].links}/>
    <Card img={links[4].img} Name={links[4].Name} rank={links[4].rank} link={links[4].links}/>
    </section>
    <Head college='NITs'/>
    <section className='display'>
    <Card img={links[5].img} Name={links[5].Name} rank={links[5].rank} link={links[5].links}/>
    <Card img={links[6].img} Name={links[6].Name} rank={links[6].rank} link={links[6].links}/>
    <Card img={links[7].img} Name={links[7].Name} rank={links[7].rank} link={links[7].links}/>
    </section>
    <section className='display'>
    <Card img={links[8].img} Name={links[8].Name} rank={links[8].rank} link={links[8].links}/>
    <Card img={links[9].img} Name={links[9].Name} rank={links[9].rank} link={links[9].links}/>
    </section>
        </>
    )
}
