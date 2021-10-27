import '../App.css';



function ItemListContainer(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">Stock: {props.stock}</p>
          <p className="card-text">${props.precio}</p>
          <a href="#" className="btn btn-success">Comprar</a>
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;