import { useContext, useState,useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { UserStateContext } from "../../context/UserContext";

import Button from "../button";
import ContextMenu from "../contextMenu";
import styles from "./styles.module.scss";
const Layout = ({ children }) => {
  const router = useRouter();

  const inputRef = useRef();
  const state = useContext(UserStateContext);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const isLoginPage = router.pathname === "/login";
  const isAuth = state.isAuth;
  console.log(isAuth);

  const toggleContextMenu = () => {
    setIsContextMenuOpen(!isContextMenuOpen);
  };

  const closeContextMenu = () => {
    setIsContextMenuOpen(false);
  };

  const handleNavigation = (path) => {
    closeContextMenu();
    router.push(path);
  };
  const  getParameterByName =(name, url)=> {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  const onChange =() =>{
    let url = inputRef.current.value;
    let id = getParameterByName('id',url);
    setSearch(id);
  }
  return (
    <>
<header className="section-header">
<section className="header-main border-bottom">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-xl-2 col-lg-3 col-md-12">
        <a href="/" className="brand-wrap">
          Logo du site
        </a>
      </div>
      <div className="col-xl-6 col-lg-5 col-md-6">
        <form action="#" className="search-header">
          <div className="input-group w-100">
              <input type="text" className="form-control" ref={inputRef} onChange={onChange} placeholder="copie coller ici le lien du produit taobao "/>
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">
                  <i className="fa fa-search"></i> Search
                </button>
              </div>
            </div>
        </form> 
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6">
        <div className="widgets-wrap float-md-right">
          { isAuth && (
            <>
            <div className="widget-header mr-3">
            <a href="/account" className="widget-view">
              <div className="icon-area">
                <i className="fa fa-user"></i>
              </div>
              <small className="text">Mon profile </small>
            </a>
          </div>
          <div className="widget-header mr-3">
            <a href="#" className="widget-view">
              <div className="icon-area">
                <i className="fa fa-store"></i>
              </div>
              <small className="text"> Mes commandes </small>
            </a>
          </div>
          </>
          )}
          <div className="widget-header">
            <a href="/cart" className="widget-view">
              <div className="icon-area">
                <i className="fa fa-shopping-cart"></i>
                <span class="notify">3</span>
              </div>
              <small className="text"> Mon panier </small>
            </a>
          </div>
        </div> 
      </div>
    </div>
  </div> 
</section>



<nav className="navbar navbar-main navbar-expand-lg border-bottom">
<div className="container">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="main_nav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/">Accueil</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/services">Nos services</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/help">Centre d'aide</a>
    </li>
   
    <li className="nav-item">
    <a className="nav-link" href="/faq">Foires aux questions</a>
    </li>
  </ul>
  { !isAuth && (<ul className="navbar-nav ml-md-auto">
      <li className="nav-item">
          <a className="nav-link" href="/signup">Créer un compte</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="/login">Se connecter</a>
      </li>
       { isAuth && (
        <li className="nav-item">
          <a className="nav-link" href="/logout">Déconnexion</a>
      </li>) }
    </ul>)}
  </div> 
</div> 
</nav>

</header>

<div className="container">{children}</div>
<footer className="section-footer bg-secondary">

    <section className="footer-bottom text-center">
     <p className="text-muted"> © 2021 Nom du site, Tous droits reservés </p>
    </section>
</footer>
    </>
  );
};

export default Layout;


