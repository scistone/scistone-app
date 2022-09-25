import React from 'react'
import { useTransition, animated } from "react-spring";

export default function Container({children}) {
  const transition = useTransition(children, {
    from: { x: 400, opacity: 0 },
    enter: { x: 0, opacity: 1 },
  });
  return (
    <div className='scistone-main-container'>
        {transition((style) =>
          children ? (
            <animated.div style={style}>{children}</animated.div>
          ) : (
            ""
          )
        )}
    </div>
  )
}
