import {MoneyFormat} from "./MoneyFormat";
import mrIncredible1 from "../images/mrIncridible1.png"
import mrIncredible2 from "../images/mrIncridible2.png"
import mrIncredible3 from "../images/mrIncridible3.png"
import mrIncredible4 from "../images/mrIncridible4.png"
import mrIncredible5 from "../images/mrIncridible5.png"
import mrIncredible6 from "../images/mrIncridible6.png"
import mrIncredible7 from "../images/mrIncridibl76.png"
import mrIncredible8 from "../images/mrIncridible8.png"
import mrIncredible9 from "../images/mrIncridible9.png"
import mrIncredible10 from "../images/mrIncridible10.png"

function Header ({money, total}) {
    return (
        <>
            {total === 0 && (
                <div className="header">Toplamda {MoneyFormat(money)}<p>TL Paran var iyi alışverişler</p>
                <img src={mrIncredible1}/>
                </div>

            )}
            {total >0 && money - total !== 0  && (
                <div className="header">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                <img  src={mrIncredible1}/>
                </div>

            )}
            {total >0 && money- total < 4000 && (
                <div className="header mr2">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible2}/></div>

            )}
            {total >0 && money-total <3000 && (
                <div className="header mr3">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible3}/></div>
            )}
            {total >0 && money-total <2500 && (
                <div className="header mr4">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible4}/></div>
            )}
            {total >0 && money-total <2000 && (
                <div className="header mr5">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible5}/></div>
            )}
            {total >0 && money-total <1500 && (
                <div className="header mr6">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible6}/></div>
            )}

            {total >0 && money-total <1000 && (
                <div className="header mr7">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible7}/></div>
            )}
            {total >0 && money-total <500 && (
                <div className="header mr8">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible8}/></div>
            )}
            {total >0 && money-total <250 && (
                <div className="header mr9">Toplamda {MoneyFormat(money -total)}<p>TL paran kaldı !</p>
                    <img src={mrIncredible9}/></div>
            )}

            {money - total === 0 && (
                <div className="header">Tüm Paranı Harcadın
                <img src={mrIncredible10}/>
                </div>
            )}
            <style jsx>{`
              .header {
                position: fixed;
                top: 0;
                width: 100%;
                height: 150px;
                font-size: 1.5rem;
                background-color: #f8f9fa;
                display: flex;
                align-items: center;
                justify-content: center;

              }.mr2 {
              background-color: #e9ecef;
              }.mr3{
                background-color: #dee2e6;
              }.mr4{
              background-color: #ced4da;
              }.mr5{
              background-color: #adb5bd;
              }.mr6{
              background-color: #6c757d;
              }.mr7{
              background-color: #495057;
              }.mr8{
              background-color: #343a40;
              }.mr9{
              background-color: #212529;
              }.mr10{
              background-color: black;
              }

              .header p {
                padding-right: 20px;
              }

              .header
              img {
                width: 120px;
                display: block;
              }
            `}

            </style>

        </>
    )
}

export default Header