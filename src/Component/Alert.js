import React from 'react'


function Alert(prpos){
return(
    <div class="alert alert-warning alert-dismissible fade show" role="alert" >
        
  <strong>{prpos.alert}</strong>

  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
)}


export default Alert;