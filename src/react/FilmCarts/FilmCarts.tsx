import './FilmCarts.css';
import {Stars} from '../Stars/Stars.tsx';
import {Like} from '../Like/Like.tsx';
import {Share} from '../Share/Share.tsx';

type Props = {
    filmName: string;
    bunerURL: string;
    price: number;
    count: number;
    liked: boolean;
    category: string;
    labColor: string;
}

interface colorColectionInt {
    action: string,
    vestern: string
};



export function FilmCart ({filmName, bunerURL, price, count, liked, category="фильм", labColor }: Props) {
    let filmTitle: string = filmName;
    let buner: string = bunerURL;
    let cost: number = price;
    const colorColection: colorColectionInt = {
        action: "orange",
        vestern: "brown"
    };
    
    let fonColor: string = colorColection[labColor];

    
    const styles = {
        section: {
            backgroundColor: fonColor,
        }
      }


    return (
        <div  className="cart">
            <div className="cart__foto">
                <img className="cart__foto__img" src={buner} alt="Постер фильма" />
                <div className="cart__foto__movie-category" style={styles.section}>{category}</div>
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