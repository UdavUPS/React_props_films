import './Like.css';
import noLike from '../../img/noLiked.png';
import yesLike from '../../img/liked.png';
import { useState } from 'react'; 

export function Like({like}) {
    let [liked, setLike] = useState(like);


    function MouseOver() {
        liked === false ? setLike(true) : setLike(false);
    }
    
    return (
        <img className="img-like" src={liked === false ? noLike : yesLike} alt="" onMouseOver={MouseOver} onMouseOut={MouseOver}/>
    )
    
}