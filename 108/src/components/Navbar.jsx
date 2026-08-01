import react from 'react'
import { useEffect } from 'react'
const Navbar=({color})=>{
    useEffect(()=>{
        alert("color was changed")
    },[color])
    return(
        <div>
            I am navbar {color} hehhe
        </div>
    )
}

export default Navbar