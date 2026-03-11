import {useState, useEffect, useRef} from 'react'
import "../styles/HeroBottom.css"

const title = ["Frontend Developer", "Software Engineer", "Full Stack Developer", "React Developer", "Java Developer", "Web Developer"]

const HeroBottom = () => {
    const wordIdx = useRef(0);
    const [displayWord, setDisplayWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      const speed = isDeleting ? 50 : 100;
      const currentWord = title[wordIdx.current]

      const timer = setTimeout(() => {
        if(!isDeleting){
            setDisplayWord(currentWord.slice(0, displayWord.length+1))

            if(displayWord.length+1 === currentWord.length){
                setTimeout(() => {
                    setIsDeleting(true)
                }, 1000);
            }
        }
        else{
            setDisplayWord(currentWord.slice(0, displayWord.length-1))

            if(displayWord.length-1 === 0){
                setIsDeleting(false)
                wordIdx.current = (wordIdx.current+1) % title.length
            }
        }
      }, speed);

      return () => clearTimeout(timer)
    }, [displayWord, isDeleting])
    

  return (
    <div className='Im'>
      <h1>I'm a {displayWord}<span className='blink'>|</span></h1>
      <p>Currently, I'm a B.Tech IT student passionate about building modern web applications.</p>
      <div className="summary">
        <p>A dedicated and self-driven frontend developer, continuously learning and improving through real-world projects and internships. I focus on creating esponsive, user-friendly, and performance-focused digital experiences that bridge creativity with clean code.</p>
      </div>
    </div>
  )
}

export default HeroBottom
