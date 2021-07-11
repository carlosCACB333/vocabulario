import React from 'react'

const PanelBlank = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 justify-content-center align-items-center col-md-8 col-12 fill-content m-0 p-0"  >
          
                <div className="alert alert-primary text-center" role="alert">
                    <h3>No has seleccionado ningún vocabulario!!</h3>
                    si aún no tienes ningún vocabulario presiona en <strong> agregar nuevo vocabulario </strong>
                </div>
      
          <img src='https://estudiaperu.pe/wp-content/uploads/2019/12/UNASAM.png' alt="no se pudo cargar" style={{maxHeight:'300px'}} className='img-fluid' />
        </div>
    )
}

export default PanelBlank
