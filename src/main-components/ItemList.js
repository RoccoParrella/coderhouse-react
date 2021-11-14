import { Items } from "./Item.js";
import '../App.css';
import Itemcount from './ItemCount';
import { useEffect } from "react";

const ItemList = () => {

    const productsPromise = (timeout, data) => {
        return new Promise((resolve, reject) => {
            if(Items.length > 0){
                setTimeout(() => {
                    resolve(data);
                }, timeout);
            }else{
                reject();
            }
        });
    }

    useEffect(() => {
        productsPromise(2000, Items)
    .then(() => Items.map(producto => { console.log(`Producto: ${producto.name}, Precio $${producto.price}, Stock: ${producto.stock}`);}))
    .catch(() => console.log('No hay productos'))
    .finally(() => console.log('Finalizado'));
        }, [])



    
        return (
            <>     
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{Items[0].name}</h5>
                        <p className="card-text"> ${Items[0].price}</p>
                        <p className="card-text">Stock: {Items[0].stock}</p>
                        <Itemcount max={Items[0].stock} />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{Items[1].name}</h5>
                        <p className="card-text"> ${Items[1].price}</p>
                        <p className="card-text">Stock: {Items[1].stock}</p>
                        <Itemcount max={Items[1].stock} />
                    </div>
                </div><div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{Items[2].name}</h5>
                        <p className="card-text"> ${Items[2].price}</p>
                        <p className="card-text">Stock: {Items[2].stock}</p>
                        <Itemcount max={Items[2].stock} />
                    </div>
                </div>
            </>
        );
    }

export default ItemList;