import {useEffect} from 'react';
import M from 'materialize-css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';

const FloatingActionButton = ()=>{

    useEffect(()=>{
     
            var elems = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(elems, {});
    
    },[])

    return (
        <>
        <div className="fixed-action-btn">
  <p className="btn-floating btn-large red">
        <h5>☎️</h5>
  </p>
  <ul>
    <li><a href="https://www.linkedin.com/in/sanidhiya-%E2%80%8E-86a427192/" className="btn-floating blue"><LinkedInIcon/></a></li>
    <li><a href="https://github.com/dragonman164" className="btn-floating black darken-1"><GitHubIcon/></a></li>
    <li><a href="mailto:sanidhiyafirefox123@gmail.com" className="btn-floating red"><MailIcon /></a></li>
  </ul>
</div>
        </>
    )
}

export default FloatingActionButton;