import react from 'react'
import { useEffect } from 'react'
const Navbar=({color})=>{

    //case 1:Run on every render
    useEffect(()=>{
        alert("hey i will run on every render")
    },[])

    //case 2:Run only on first render
    useEffect(()=>{
        alert("hey welcome tom my page.this is first render")
    },[])

    //case 3:Run only when certain vlaues change
    useEffect(()=>{
        alert("hey i am running because color was changed")
    },[color])

    return(
        <div>
            I am navbar {color} hehhe
        </div>
    )
}

export default Navbar