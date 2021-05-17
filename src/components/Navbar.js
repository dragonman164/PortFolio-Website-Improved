import {useEffect} from 'react';
import M from 'materialize-css';
import {Link} from 'react-router-dom';

const NavBar = ()=>{
    
    useEffect(()=>{
        var elems = document.querySelectorAll('#sidenav-1');
        M.Sidenav.init(elems, {
            edge:'right'
        });
    },[])
    
    return (
        <>
        
        <nav className="pink darken-3 sticky" >
    <div className="nav-wrapper left-align container" style={{ marginLeft: '40px !important' }}>
      <a  href="#!"className="brand-logo">SANIDHIYA</a>
      <a href="#!" data-target="sidenav-1" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><a href="https://medium.com/@sanidhiyafirefox123" className="waves-effect waves-light btn ">Blogs on Medium</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="sidenav-1">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><a href="https://medium.com/@sanidhiyafirefox123" className="waves-effect waves-light btn ">Blogs on Medium</a></li>
  </ul>
          
          
        </>
    )
}

export default NavBar;