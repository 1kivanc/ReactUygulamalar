function BasketItem ({item , products}) {
    return (
        <>
            <li>
                {products.title} <span>x {item.amount}</span>
            </li>

            <style jsx>{`
li{

font-size: 20px;
padding-left: 20px;
padding-top: 10px;
}            
`}</style>
        </>
    )
}

export default  BasketItem