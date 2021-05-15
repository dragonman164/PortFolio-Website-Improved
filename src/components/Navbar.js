import {useEffect} from 'react';
import M from 'materialize-css';

const NavBar = ()=>{
    
    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {
            edge:'right'
        });
    },[])
    
    return (
        <>
        
        <nav className="pink darken-3">
    <div className="nav-wrapper left-align container" style={{ marginLeft: '40px !important' }}>
      <a href="#!" className="brand-logo ">SANIDHIYA</a>
      <a href="#!" data-target="Contact-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#!">Home</a></li>
        <li><a href="#!">About</a></li>
        <li><a href="#!">Projects</a></li>
        <li><a href="#!">Contact</a></li>
        <li><a href="https://medium.com/@sanidhiyafirefox123" class="waves-effect waves-light btn ">Blogs on Medium</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="Contact-demo">
    <li><a href="#!">Home</a></li>
    <li><a href="#!">About</a></li>
    <li><a href="#!">Projects</a></li>
    <li><a href="#!">Contact</a></li>
    <li><a href="https://medium.com/@sanidhiyafirefox123" class="waves-effect waves-light btn ">Blogs on Medium</a></li>
  </ul>
          
          
        </>
    )
}

export default NavBar;