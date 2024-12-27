import {arrayOf, shape, string} from "prop-types";
import './navigation.css';

export const Navigation = (items) => {

const listNav = items.items.map((item, index) =>
     <li key={index}>
       <a className={item.className} href={item.href}>{item.name}</a>
     </li>
    );

    return (
        <header>
            <nav>
                <div className="left-section">
                    <img src="src/images/icon.png" alt="#"/>
                    <h2>Relatos de Papel</h2>
                </div>
                <div className="search">
                </div>
                <ul className="right-section">
                    {listNav}
                </ul>
            </nav>
        </header>
    );
};

Navigation.propTypes = {
    items: arrayOf(
    shape({
        name: string.isRequired,
        href: string.isRequired,
        className: string.isRequired
    })).isRequired
};

Navigation.defaultProps = {
    items: []
};

Navigation.displayName = "Navigation";