import HomeComp from "./HomeComp"
import './Home.css'

const Home=()=>{

    return (<>
        <header className="header">
        <h1>The GENERICS</h1>
        <p className="album">Get our Latest Album</p>
        <img className="play-btn" src={"https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-vector-play-icon-png-image_932964.jpg"}></img>

        </header>
        <main className="main"> <HomeComp /></main>

        <footer className="footer" >
        <h4> The Generics  </h4>
        <a href="https://www.facebook.com/" ><img img className="fimg" src={"https://img.icons8.com/avantgarde/2x/facebook-new.png"}></img></a>
        <a href="https://www.youtube.com/"><img img className="fimg" src={"https://cdn.icon-icons.com/icons2/195/PNG/96/YouTube_23392.png"}></img></a>


        </footer>
    </>)
}
export default Home;