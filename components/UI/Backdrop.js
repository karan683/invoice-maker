import React , {useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';



const Backdrop = props => {

    const [mounted , setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
        return ()  => {setMounted(false)}
    },[])
    
  return mounted ? ReactDOM.createPortal(
    <div className="fixed left-0 top-0 w-full h-screen bg-gray-600" onClick={props.onClick}></div>,document.getElementById('backdrop-hook')
  ) : null
};

export default Backdrop;
