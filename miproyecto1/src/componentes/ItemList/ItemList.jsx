  import React from 'react'
  import "./Item.css";

    
    function ItemList(props) {
        const { title,price,description, img, } = props;
      return (
    <div className="card">
        <div className="card-img">
            <img src="https://http2.mlstatic.com/D_NQ_NP_752225-MLA48267094528_112021-O.webp" alt="" width={300}/>
        </div>

        <div className="car-detail">
        <h2>{title}</h2>
         <p>{description}</p>
        <h4>${props.price}</h4>
       
    </div>
    </div>
    
      )
    }
    
    
    export default ItemList