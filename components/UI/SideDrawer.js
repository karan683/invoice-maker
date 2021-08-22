import React , {useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';



const SideDrawer = props => {

    const [mounted , setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
        return ()  => {setMounted(false)}
    },[])
    const classes = props.show === true ? "transform translate-x-0" : "transform -translate-x-full";
  return mounted ? ReactDOM.createPortal(
    <div className={`h-screen w-3/4 fixed top-0 left-0 bg-white transition-all duration-300 ${classes} shadow-xl`} onClick={props.onClick}>{props.children}</div>,document.getElementById('sideDrawer-hook')
  ) : null
};

export default SideDrawer;
