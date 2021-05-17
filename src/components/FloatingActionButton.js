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


    const Data = {
      fontSize:'30px',
      margin:'10px'
    }

    return (
        <>
        <div className="fixed-action-btn">

        <h5 className="btn-floating btn-large red" style={Data}>☎️</h5>

  <ul>
    <li><a href="https://www.linkedin.com/in/sanidhiya-%E2%80%8E-86a427192/" className="btn-floating blue btn-large"><LinkedInIcon style={Data}/></a></li>
    <li><a href="https://github.com/dragonman164" className="btn-floating black darken-1 btn-large"><GitHubIcon style={Data}/></a></li>
    <li><a href="mailto:sanidhiyafirefox123@gmail.com" className="btn-floating red btn-large"><MailIcon style={Data}/></a></li>
  </ul>
</div>
        </>
    )
}

export default FloatingActionButton;