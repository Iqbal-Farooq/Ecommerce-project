import ReactDOM  from "react-dom"
import classes from './Portals.module.css'





const ModalOverlay=props=>{
    return<div className={classes.modal} >
        <div className={classes.content} >{props.children}</div>
    </div>
}
const p1=document.getElementById('back');


const Portal=(props)=>{
return <>
   
   {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,p1 )}
</>


}

export default Portal;