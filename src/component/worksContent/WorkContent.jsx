import React from 'react'
import "./workcontent.css"

export default function WorkContent({img}) {
  return (
    <div>
      <li className='li-magic-wall'>
                <div className="magic-wall-items lazyLoad">
                    <img src={img}   alt="image" />
                    <div className="hover-content"></div>
                    <a href="#" className='colorbox'></a>
                </div>
            </li>
    </div>
  )
}
