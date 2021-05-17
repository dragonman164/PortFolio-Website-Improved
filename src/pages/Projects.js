import GitHubIcon from '@material-ui/icons/GitHub';
import PersonalAssistant from '../Assets/1.png';
import SwasthyaSaathi from '../Assets/2.png';
import CovidVijay from '../Assets/3.jpeg';


const ProjectData = [

   
    {
        title: 'Covid Vijay Mobile Application',
        description:'It is a system designed to properly hold vaccination events across all major cities of the country. It uses Face Recognition to uniquely identify citizens and prioritizes them as per the rules of Govt. This system also manages the logistics of vaccines.',
        link: 'https://docs.google.com/presentation/d/1O1NFlsVOpg1JFbqnnsI7XQZaagKpbhMymivX2duQEok/edit#slide=id.p1',
        image : CovidVijay,
    },
    {
        title: 'Personal Assistant Mobile Application',
        description:'It is a system which is designed to control and track your PC remotely. You can control parameters of your PC using android device such power options, play music, opening any application by using a chat assistant. Monitor the person who is using your PC using their webcam. Track PC details such as Battery, CPU Usage, etc.',
        link: 'https://github.com/dragonman164/Personal-Assistant-App',
        image : PersonalAssistant
    },
    {
        title: 'Swasthya Saathi Mobile Application',
        description:'It is a mobile application that is designed to register a patient and monitor the patient’s health in real-time using parameters such as heart-beat, blood pressure, and temperature. These parameters are fetched from servers and displayed in the mobile application.',
        link: 'https://github.com/dragonman164/Swasthya-Saathi-App',
        image : SwasthyaSaathi,
    },
]




const Projects = ()=>{

    const fontBold = {
        fontWeight:'bold'
    }


    return (
        <>
        <div  className="container animate__animated animate__slideInLeft" id="shrink">
        <h3 style={fontBold} >Projects 📁</h3>
        <h5 >Have a Look at mine..</h5>
        <a href="https://github.com/dragonman164" className="red waves-effect waves-light btn-large" style={{margin:'20px'}}><i className="material-icons left"><GitHubIcon/></i>Github</a>

    
        <hr style={{ marginTop: '40px', marginButtom: '60px' }} />
        
        
        {
            ProjectData.map((elem,index)=>{
                return (
                        <>
                        <h4 className="left-align" style={fontBold}>{index+1}.  {elem.title}</h4>
        <div className="row left-align">
            <div className="col l6 m6">
                <p>{elem.description}</p>
                
            <a href={elem.link} className="waves-effect waves-light btn orange darken-1">Have a Look </a>
            </div>
            <div className="col l6 m6">

         
    <div className="card horizontal adjust">
      <div className="card-stacked">
        <div className="card-content">
        <img src={elem.image} alt='..' style={{
                height: '350px'
            }}/>
        </div>
    
      </div>
    </div>
            </div>
        </div>


        <hr style={{ marginTop: '40px', marginButtom: '60px' }} />
                        </>
                )
            })
        }
    
        
        </div>
        </>
    )
}

export default Projects;