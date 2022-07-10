import React from 'react'
import "./works.css"
import WorkContent from '../worksContent/WorkContent'

export default function Works() {
  return (
    <div>
      <aside className="section-work">
            <div className="header-work">
                <h2 className='title-work'>Mi Portafolio</h2>
            </div>
        <div className='text-zone-work'>
            <div>
                <p> Estos son los projectos en los que he trabajado, en back end utilizando Node.js sequelize MySQL,MongoDb
                    y en front con React, css clasico, styled components, JQuery, HTML, JS. 
                     Espero que les gusten!!</p><br />
                <p>Si quieres conocer mas sobre mis trabajos escribeme</p>
                <button className='contact-button button2'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'> Mas sobre mi</span>
                </div>    
                </button>
            </div>
        </div>
        <div className="fake-big-2">Work</div>
      </aside>
      <div className="magic-wall-section">
        <ul>
            <WorkContent img={"https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440"}/>
            <WorkContent img={"https://concepto.de/wp-content/uploads/2015/03/paisaje-800x409.jpg"}/>
            <WorkContent img={"https://i.blogs.es/e32e91/trucos-enfocar-fotografia-paisaje-01/1366_2000.jpg"}/>
            <WorkContent img={"https://img.freepik.com/foto-gratis/hermoso-camino-madera-que-impresionantes-arboles-coloridos-bosque_181624-5840.jpg?w=2000"}/>
            <WorkContent img={"https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg"}/>
            <WorkContent img={"https://www.artmajeur.com/medias/hd/v/a/valeria-ec11/artwork/9732760_paisajes-hermosos-cascada.jpg"}/>
            <WorkContent img={"https://kaikucaffelatte.com/blog/wp-content/uploads/2020/03/shutterstock_510679489-scaled-e1648037045335.jpg"}/>
            <WorkContent img={"https://www.telesurtv.net/__export/1638504305316/sites/telesur/img/2021/12/02/p2.jpg"}/>
            <WorkContent img={"https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}/>
            <WorkContent img={"https://static.dw.com/image/58845200_303.jpg"}/>
        </ul>
      </div>
    </div>
  )
}
