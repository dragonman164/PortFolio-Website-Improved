import {useEffect} from 'react';
import M from 'materialize-css';
import ProfilePhoto from '../Assets/profile.jpg';
import Background from '../Assets/background.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';


const SideNav = ()=>{
    
    useEffect(()=>{
      
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('#sidenav-2');
        M.Sidenav.init(elems, {
          edge:'left',
  
        });
      });

      },[]);
    

      const Data = {
    
        fontSize:'30px'
      }
   
    return (

      <>
<ul  id="sidenav-2" className="sidenav sidenav-fixed" style={{width:"19.5%"}}>
<li><div className="user-view">
      <div className="background">
        <img src={Background} alt='...'/>
      </div>
      <img className="circle" src={ProfilePhoto} alt='..'/>
      <span className="white-text name">SANIDHIYA</span>
      <a href="#email"><span className="white-text email">sanidhiyafirefox123@gmail.com</span></a>
    </div></li>

    <div className="container">
      <p>Android app developer(Flutter) • Web Developer(HTML, CSS, JS, Django) • Cyber Security Enthusiast</p>
    </div>


    <div className="container">
    <li><a class="waves-effect" href="https://www.linkedin.com/in/sanidhiya-%E2%80%8E-86a427192/"><i class="material-icons"><LinkedInIcon style={Data}/></i>LinkedIn</a></li>
            <li><a class="waves-effect" href="https://github.com/dragonman164"><i class="material-icons"><GitHubIcon style={Data}/></i>GitHub</a></li>
            <li><a class="waves-effect" href="mailto:sanidhiyafirefox123@gmail.com"><i class="material-icons"><MailIcon style={Data}/></i>Gmail</a></li>
        
  

    </div>
  </ul>

      </>
      
 
    )
}

export default SideNav;