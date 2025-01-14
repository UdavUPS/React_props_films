import './FilmCarts.css';
import {Stars} from '../Stars/Stars.jsx';
import {Like} from '../Like/Like.jsx';
import {Share} from '../Share/Share.jsx';


export function FilmCart({filmName, bunerURL, price, count, liked }) {
    let filmTitle: string = filmName;
    let buner: any = bunerURL;
    let cost: number = price;


    return (
        <div  className="cart">
            <div className="cart__foto">
                <img className="cart__foto__img" src={buner} alt="Постер фильма" />
            </div>
            <div className="cart__center">
                <div className="cart__center__title">{filmTitle}</div>
                <div className="cart__center__stars">
                    <Stars count={count}/>
                </div>
                <div className="cart__center__buts">
                    <div className="but1">купить {cost}₽</div>
                    <div className="but2">подробнее</div>
                </div>
            </div>
            <div className="cart__right">
                <Like like={liked}/>
                <Share/>
            </div>
        </div>
    )
    
}