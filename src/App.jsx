import { useRef, useEffect } from 'react'
import './App.css'
import Container from './components/Container'

function App() {
  let dropRef = useRef()

  useEffect(() => {
    let handle = (e) => {
      if (!dropRef.current.contains(e.target)) {
        dropRef.current.style.display = 'none'
      }
    };

    document.addEventListener("mousedown", handle)

    return () => {
      document.removeEventListener('mousedown', handle);
    };

  });
  let handleDrop = () => {
    // console.log(dropRef.current)
    // dropRef.current.style.display= 'block'
    if (dropRef.current.style.display == 'block') {
      dropRef.current.style.display= 'none'
      
    }
    else if(dropRef.current.style.display == 'none') {
      dropRef.current.style.display= 'block'
    }
  }

  
  return (
    <>
      <Container className={'max-w-headerContainer py-10 '}>

      <div>
          <button className='py-3 px-7 bg-red-500 text-white rounded-sm' onClick={handleDrop}>Click</button>

        <div className='bg-teal-500 hidden' ref={dropRef}>
         <ul>
          <li className='hover:text-red-500'><a href="#">Home</a></li>
          <li>About</li>
          <li>Service</li>
          <li>Contact</li>
         </ul>
        </div>
      </div>

      </Container>
    </>
  )
}

export default App
