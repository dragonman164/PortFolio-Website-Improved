import M from 'materialize-css';
import {useEffect} from 'react';


const TableData = [
  {
      Year:'2021',
      Degree:'B.Tech(2nd Semester)',
      Institution:'TIET,Patiala',
      CGPA:'9.16 (Upto 5th Semester)',

  },
 
  {
      Year:'2019',
      Degree:'XII',
      Institution:'CBSE',
      'CGPA':'92.00%',
      
  },
  {
      Year:'2017',
      Degree:'X',
      Institution:'CBSE',
      'CGPA':'9.8',
      
  },
]

const SliderData = [

  {title:'Academic Journey',
  listData:[
  'Class X Boards: Secured 9.8 CGPA',
  'Class XII Boards(Non Medical Stream):Secured 92%',
  'JEE Mains 2019 - 33k Rank',
  'JEE Advanced - 16k Rank',
],
color: 'red'
},
{
  title:'Current Journey',
  listData:[
  'I am currently Undergraduate student pursuing B.Tech in Computer Science  from Thapar Institute of Engineering and Technology,Patiala.'
],
color: 'blue'
},
{
  title:'Areas of Interest',
  listData:[
    'App Development',
    'Web Development',
    'Competitive Programming',
    'Cyber Security',
    'Machine Learning',
],
color : 'green',
},

]

const About = ()=>{

    const fontBold = {
        fontWeight: 'bold'
    }

    useEffect(()=>{
    
        var elems = document.querySelectorAll('.carousel.carousel-slider');
         M.Carousel.init(elems, {
          fullWidth:true,
          indicators:true,
          duration:200,
      });
     

    },[])

    return (
        <>
            <div className="container" id="shrink">

            <h3 style={fontBold} className="animate__animated animate__slideInLeft">About Myself 😄</h3>
                <h5 className="black-text darken-4 animate__animated animate__slideInLeft" >Explore My Journey and Learn more Things....</h5>
                <a href="https://drive.google.com/file/d/19hlTd7fmU6laevqWtqpnxSzwIPYN02pI/view"  style={{
                    margin:'20px',
                    fontWeight:'bold',
                    zIndex:0
                }} className="waves-effect waves-light btn-large green"><i className="material-icons left">📄</i>My Resume</a>
          <hr style={{ marginTop: '40px', marginButtom: '60px' }} />


                <h4 className="left-align animate__animated animate__slideInLeft" style={fontBold}>Current Education:</h4>
               
      <table className="highlight responsive-table black white-text animate__animated animate__backInDown" style={{marginRight:'40px',marginTop:'40px',marginBottom:'40px',padding:'20px'}}>
        <thead >
          <tr>
              <th>Year</th>
              <th>Degree/Examination</th>
              <th>Institution/Board</th>
              <th>CGPA/ %</th>
          </tr>
        </thead>

        <tbody>
        {
          TableData.map((elem)=>{
            return (
              <tr >
            <td>{elem.Year}</td>
            <td>{elem.Degree}</td>
            <td>{elem.Institution}</td>
            <td>{elem.CGPA}</td>
          </tr>
            )
          })
        }
        
        </tbody>
      </table>

        <div className="animate__animated animate__slideInLeft">


        <hr style={{ marginTop: '40px', marginButtom: '60px' }} />

      <h4 className="left-align " style={fontBold}> Professional Training:</h4>
      
      
      <h5 className="left-align" style={fontBold}>Online Courses</h5>
      <ol className="left-align">
            <li ><a  style={{color:'black' ,textDecoration:'underline'}} href="https://www.youracclaim.com/badges/c0785f97-5eca-4551-bbbb-eb4b273c77de?source=linked_in_profile">Open Source Software Development, Linux and Git Specialization</a></li>
            <li ><a  style={{color:'black',textDecoration:'underline'}} href="https://www.coursera.org/account/accomplishments/verify/6DJJ5SZHV7S4?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Data Structures and Algorithms</a></li>
            <li ><a  style={{color:'black',textDecoration:'underline'}} href="https://www.coursera.org/account/accomplishments/verify/LBVRF6F5WRTJ?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course">Algorithmic ToolBox</a></li>
        </ol>


        <h5 className="left-align" style={fontBold} >Professional Training:</h5>
        <ol className="left-align" >
            <li ><a  style={{color:'black',textDecoration:'underline'}} href="https://drive.google.com/file/d/1r5oCikyin8oeqKRr3U9cJCtw24snOP_v/view">30 Days of Google Cloud program (Issued by Google)</a></li>
            <li ><a  style={{color:'black',textDecoration:'underline'}} href="https://drive.google.com/file/d/1CzHrFR07YPXremDYsUsB_D5NVYsLqqbP/view">Advent of Cyber 2020 (Issued By THM)</a></li>
        </ol>
      
      

        <hr style={{ marginTop: '40px', marginButtom: '60px' }} />

        <h4 className="left-align " style={fontBold}>Learn more about my past:</h4>
      </div>


      <div style={{ marginBottom:'20px',marginRight:'50px'}} className="carousel carousel-slider center">
    <div className="carousel-fixed-item center">
    </div>
    {
      SliderData.map((elem)=>{
      return (
        <div className={`carousel-item ${elem.color} white-text`} >
      <h3 style={fontBold}>{elem.title}</h3>
      <ul>
        {elem.listData.map((el)=>{
          return (<li style={{
          fontSize:'20px',
          marginLeft:'20px',
          marginRight:'20px'
          }}>{el}</li>)
        })}
      </ul>
   
    </div>
      )
      
      })
    }
    
   
  </div>
            </div>
        </>

    )
}

export default About