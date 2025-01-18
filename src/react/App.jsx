/* import { items } from '../js/object.js'; */ 
import { FilmCart } from './FilmCarts/FilmCarts.jsx';




function App() {



  return (
    <div className="body-box">
      <FilmCart filmName={'Супермен'} bunerURL='https://i.pinimg.com/736x/10/f1/ec/10f1eccb0cce56738b7be42e3660da2a--superman-superhero.jpg' price={1299} count={4} liked={false} category="экшн" labColor="action"/>
      <FilmCart filmName={'Одинокий странник'} bunerURL='https://i.pinimg.com/736x/91/40/c9/9140c95ace070d60bac78ee02833d3b7--cowboy-artwork-the-cowboy.jpg' price={899} count={2} liked={false} category="вестерн" labColor="vestern"/>
    </div>
  );
}



export default App;
