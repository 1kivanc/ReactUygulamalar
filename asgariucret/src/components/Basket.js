import BasketItem from "./BasketItem";
import {MoneyFormat} from "./MoneyFormat";
function Basket ({basket,products,total ,cancelBasket}) {
    return (
        <>
           <div className="totals">
               <ol>
                   {basket.map(item => (
                       <BasketItem key={item.id} item={item} products={products.find(p => p.id === item.id)}/>
                   ))}
               </ol>
               <div className="total">
                   Toplam : {MoneyFormat(total)} TL
               </div>
               <button className="btnCancel" onClick={cancelBasket}>Alışverişi iptal et</button>
           </div>
            <style jsx>
                {`
                    ol{
                    padding-left: 30px;
                    }
                  .totals{
                  background-color: white;
                  width: 1000px;
  margin: 20px auto;
                  }.total {
                  text-align: center;
                  font-size: 25px;
                  color: red;
                  }.btnCancel{
                    background-color: red;
                    border: none;
                    height: 50px;
                    margin:20px;
                    width: 200px;
                    border-radius: 10px;
                  }
              `}
            </style>
        </>
    )
}
export default Basket