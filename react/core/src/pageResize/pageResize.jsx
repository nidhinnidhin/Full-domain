import React, { useEffect, useState } from 'react'

const PageResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

  return (
    <div>
      width size {windowSize.width} X {windowSize.innerHeight}
    </div>
  )
}

export default PageResize;
