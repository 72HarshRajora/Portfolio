import {useState, useEffect} from 'react'
import "../styles/BgStars.css"

const BgStars = () => {
    const [star, setStar] = useState([]);
    
    useEffect(() => {
        const numOfStars = 200;
        const generatedStars = [];

      for (let i = 0; i < numOfStars; i++) {
        generatedStars.push({
            id: i,
            top: Math.floor(Math.random()*100),
            left: Math.floor(Math.random()*100),
            moveX: (Math.random() - 0.5) * 200,
            moveY: (Math.random() - 0.5) * 200,
            duration: 5 + Math.random()*5
        })
      }

      setStar(generatedStars)
    }, [])
    

  return (
    <div className='stars'>
        {star.map((star)=>{
            return (
                <div className='star'
                key={star.id}
                style={{
                    top: `${star.top}vh`,
                    left: `${star.left}vw`,
                    animationDuration: `${star.duration}s`,
                    "--moveX": `${star.moveX}px`,
                    "--moveY": `${star.moveY}px`,
                }}     
                ></div>
            )
        })}
    </div>
  )
}

export default BgStars