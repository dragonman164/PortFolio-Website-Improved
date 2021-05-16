
const DisplayData  = [
    {
   title:'Programming Languages',
    listdata: [
      {
        cardTitle: 'C',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
        mainUrl: 'https://www.cprogramming.com/',
  
      },
      {
        cardTitle: 'C++',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
        mainUrl: 'https://www.w3schools.com/cpp/',
  
      },
      {
        cardTitle: 'Python',
        imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
        mainUrl: 'https://www.python.org',
  
      },
  
    ],
  },
    {
    title:'Mobile Application Development',
    listdata: [
      {
        cardTitle: 'Dart Programming Language',
        imageUrl:'https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg',
        mainUrl: 'https://dart.dev',
  
      },
      {
        cardTitle: 'Flutter',
        imageUrl:'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
        mainUrl: 'https://flutter.dev',
  
      },
    ],
  },
    {title: 'Web Development',
    listdata : [
        {
          cardTitle: 'HTML',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
          mainUrl: 'https://www.w3.org/html/',
    
        },
        {
          cardTitle: 'CSS',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
          mainUrl: 'https://www.w3schools.com/css/',
    
        },
        {
          cardTitle: 'JS',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
          mainUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    
        },
        {
          cardTitle: 'Django',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg',
          mainUrl: 'https://www.djangoproject.com/',
    
        },
        {
          cardTitle: 'Bootstrap',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
          mainUrl: 'https://getbootstrap.com',
    
        },
        {
          cardTitle :'React',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
          mainUrl:'https://reactjs.org/'
        }
    ],
  },
    {title:'Cloud Services',
    listdata: [
      {
        cardTitle: 'Heroku',
        imageUrl:'https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg',
        mainUrl: 'https://heroku.com',
  
      },
      {
        cardTitle: 'FireBase',
        imageUrl:'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
        mainUrl: 'https://firebase.google.com/',
  
      },
      {
        cardTitle: 'Google Cloud Platform',
        imageUrl:'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
        mainUrl: 'https://cloud.google.com',
  
      },
    ],
  },
  {
   title:'Other Stuff',
    listdata: [
        {
          cardTitle: 'Git',
          imageUrl:'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
          mainUrl: 'https://git-scm.com/',
        },
        {
          cardTitle: 'Bash',
          imageUrl:'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
          mainUrl: 'https://www.gnu.org/software/bash/',
        },
        {
          cardTitle: 'Linux',
          imageUrl:'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',
          mainUrl: 'https://www.linux.org/',
        }
    ]
  }
  ]




const Home = () => {

    const fontBold = {
        fontWeight: 'bold'
    }

    return (
        <>
            <div className="container scale-out" id="shrink">
                <h3 style={fontBold}>Hey there 👋, myself SANIDHIYA </h3>
                <h5 className="black-text darken-4">I am an undergraduate student pursuing B.Tech in Computer Science. I am also a Web Developer,App Developer and Cyber Security Enthusiast</h5>

                <hr style={{ marginTop: '40px', marginButtom: '40px' }} />
                <h3 style={fontBold}>Know my Technical Skills 🖥️</h3>
                <h5 className="black-text darken-4">In my ongoing journey, I have mastered the following skills and I expect to learn more things in the upcoming time.</h5>


                <hr style={{ marginTop: '40px', marginButtom: '60px' }} />


                <ol className="left-align">
                {
                    DisplayData.map((elem)=>{
                        return (
                            <>
                    <h5 style={fontBold}><li>{elem.title}</li></h5>
                    <div style={{ marginTop: '40px', marginButtom: '40px' }} className="row">
                    {elem.listdata.map((elem)=>{
                        return (
                            <>
                            <div class="col l2 s3" ><a href={elem.mainUrl}><img alt='...' src={elem.imageUrl}  className="icons"/></a></div>
                            </>
                        )
                    }
                    )}
                      
                    
                    </div>
                            </>
                        )
                    })
                }
                 
                    

                </ol>
            </div>
        </>
    )
}

export default Home;