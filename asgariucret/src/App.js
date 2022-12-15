import './App.css';
import Header  from './components/Header'
import {useEffect, useState ,useRef} from "react";
import products from "./products.json"
import Product from "./components/Product"
import Basket from "./components/Basket";




function App() {
    const [money , setMoney ] = useState(5500);
    const [basket , setBasket] = useState([]);
    const [total, setTotal] = useState( 0);

    const cancelBasket = () => {
        setBasket([])
    }


    useEffect( () => {
        setTotal(
                basket.reduce((acc,item) => {
                return acc+ (item.amount * (products.find(product => product.id === item.id).price))
        },0),
        )
},[basket])
  return (
      <>
          <Header  money={money}  total={total}/>

    <div className="container products">

        {products.map(product => (
            <Product key={product.id} product={product} basket={basket} total={total} money={money} setBasket={setBasket} />
        ))}
    </div>
          {total > 0 && (
            <Basket basket={basket} total={total} products={products} cancelBasket={cancelBasket} />
          )}
        <style jsx>
            {`
    .input input{
      width: 100%;
      height: 30px;
      text-align: center;
    }.input button{
    margin-top: 10px;
    width: 100%;
    background-color: #61dafb;
    border-radius: 10px;
    }            
`}
        </style>
      </>
  );
}

export default App;
