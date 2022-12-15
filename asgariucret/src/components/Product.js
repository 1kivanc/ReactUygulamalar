import {MoneyFormat} from "./MoneyFormat";

function Product ({product , basket , setBasket , total , money}) {

    const basketItem = basket.find(item => item.id  === product.id)
    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),checkBasket])
        }else{
                setBasket([...basket,{
                    id:product.id,
                    amount:1
                }])
        }
    }
    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const withOutBasket = basket.filter(item => item.id !== product.id);
        currentBasket.amount -= 1;
        if(currentBasket.amount === 0){
            setBasket([...withOutBasket])
        }else {
            setBasket([...withOutBasket , currentBasket])
        }
    }
    return (
        <>

            <div className="product">
                <div>
                    <h6>{product.title}</h6>
                    <img src={product.image} />
                    <p>{MoneyFormat(product.price)} TL</p>
                </div>


                <div className="actions">
                    <button className="addBtn" disabled={total + product.price > money} onClick={addBasket}>+</button>
                    <span className="amount">{basketItem && basketItem.amount || 0}</span>
                    <button className="rmvBtn"  disabled={!basketItem} onClick={removeBasket}>-</button>
                </div>
            </div>

            <style jsx>{`
            .product{
            margin-top: 30px;
                    padding: 15px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 24%;

            }
            .product img{
            width: 100%;
            }.product h6{
            font-size: 1rem;
            }.product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
             }.product button{
              width: 40%;
              height: 30px;
              font-size: larger;
              border:none;
             }.actions .addBtn {
             background-color: #61dafb;
             }.actions .rmvBtn{
             background-color: #1cff72;
             }.product p{
                font-size: 20px;
                font-weight: bolder;
             }
             .actions{
             display: flex;
             align-items: center;
             justify-content: center;
             }.actions span{
             padding: 20px;
             }.actions button[disabled]{
                cursor: not-allowed;
             }
             .product .actions {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                  }
            `}</style>
        </>

    )
}

export default Product