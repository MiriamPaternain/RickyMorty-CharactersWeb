import randmImage from '../img/randm.png'
import '../styles/App.scss';
import '../styles/Header.scss';
/*  COMPONENTE */
function App() {
  /*
    Variables de estado, funciones manejadoras de eventos, variables, funcion handle 
  */
  /* RETURN --> HTML */
  return <div>
    <header className='header'>
      <img src={randmImage} alt="Rick and Morty portal shoes" className='header__img' />
    </header>
    <main className='main'>
      <section className='main__filters'>
        <form className="main__filter--byName"></form>
      </section>
      <section className='main__characters'>
        <form className="main__characters--eachCaracter">
          <ul>
            <li></li>
          </ul>
        </form>
      </section>
    </main>
  </div>;
}

/* export*/
export default App;
