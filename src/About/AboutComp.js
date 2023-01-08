import About from "./About";
import  './AboutCom.css';
const AboutComp=()=>{
    

    return(
        <>

        <header className="header">
        <h1>The GENERICS</h1>

        </header>
        <main className="main"><About /></main>

        <footer className="footer" >
        <h4> The Generics  </h4>
        <a href="https://www.facebook.com/" ><img img className="fimg" src={"https://img.icons8.com/avantgarde/2x/facebook-new.png"}></img></a>
        <a href="https://www.youtube.com/"><img img className="fimg" src={"https://cdn.icon-icons.com/icons2/195/PNG/96/YouTube_23392.png"}></img></a>


        </footer>
        </>
    )
}
export default AboutComp;