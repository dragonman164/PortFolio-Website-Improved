const Footer = ()=>{

    let year = new Date();

    return (
        <>
        <footer className="page-footer pink darken-3">
          <div className="container">
  
                <h5 className="white-text">Built by Developers {'</>'}</h5>
                <h5 className="white-text">Built with ❤️</h5>
              </div>
              
           
          <div className="footer-copyright">
            <div className="container">
            © {year.getFullYear()} All Rights Reserved
            </div>
          </div>
        </footer>
        </>
    )
}

export default Footer;