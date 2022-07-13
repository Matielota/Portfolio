import React from 'react'
import "./workcontent.css"

export default function WorkContent({img,linkto}) {
  return (
    <div>
      <li className='li-magic-wall'>
                <div className="magic-wall-items lazyLoad">
                    <img src={img}  className="image-work-content" alt="image" />
                    <div className="hover-content"></div>
                    <a href={linkto} className='colorbox'></a>
                </div>
            </li>
    </div>
  )
}
