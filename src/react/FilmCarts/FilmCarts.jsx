import './FilmCarts.css';
import {Stars} from '../Stars/Stars.jsx';
import {Like} from '../Like/Like.jsx';
import {Share} from '../Share/Share.jsx';


export function FilmCart({filmName, bunerURL, price, count, liked, category="фильм", labColor }) {
    let filmTitle: string = filmName;
    let buner: any = bunerURL;
    let cost: number = price;
    const colorColection: any = {
        action: "orange",
        vestern: "brown"
    };
    let fonColor: any = colorColection[labColor];

    
    const styles = {
        section: {
            textTransform: "uppercase",
            position: "relative",
            backgroundColor: fonColor,
            marginLeft: "175px",
            bottom: "215px",
            padding: "2.5% 10px",
            color: "rgba(255, 255, 255, 0.792)",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.26)",
            display: "inline-block"
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