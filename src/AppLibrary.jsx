import './AppLibrary.css'
import {Navigation} from "./components/navigation/navigation.jsx";
import CarouselLibrary from "./components/carousel/carousel.jsx";
import Books from "./components/books/books.jsx";

function AppLibrary() {

  const myItems = [
      { name: 'Tiendas fisicas', href:"", className: "item-text" },
      { name: 'Eventos',  href:"", className: "item-text" },
      { name: 'Ayuda',  href:"", className: "item-text" },
      { name: '',  href:"", className: "item item-shopping-cart" },
      { name: '',  href:"", className: "item item-user" }
  ];

  return (
      <>
          <div className="container">
                <Navigation items={myItems}/>
              <CarouselLibrary/>
              <section className="main">

                  <section className="post">
                      <article>
                         <Books/>
                      </article>
                  </section>
              </section>

              <footer>
                  <p>Jhon Roberth Fernandez - Derechos reservados</p>
                  <ul>
                      <li><a href="#">Facebook</a></li>
                      <li><a href="#">LikedIn</a></li>
                      <li><a href="#">Twitter</a></li>
                  </ul>
              </footer>
          </div>

      </>
  )
}

export default AppLibrary
