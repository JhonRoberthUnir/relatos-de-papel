import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {Header} from "./components/header/header.jsx";
import Gallery from "./components/slide-images/gallery.jsx";
import {Items} from "./components/items/items.jsx";
import CheckboxListSecondary from "./components/books/books.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Gallery />
    <Items/>
    <CheckboxListSecondary/>
  </StrictMode>,
)
