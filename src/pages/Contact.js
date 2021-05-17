


let name = ""
let email =""
let message = ""



const Contacts = ()=>{

    const fontBold = {
        fontWeight: 'bold'
    }
    return (
        <>
      <div className="container animate__animated animate__fadeIn" id="shrink">

          <h3 style={fontBold}>Do you wanna Collaborate?</h3>
          <h5>You can write me here !!!</h5>
          
          
          <hr style={{ marginTop: '50px', marginButtom: '50px' }} />




      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
        <i class="material-icons prefix">account_circle</i>
          <input id="first_name" type="text" className="validate" onChange={(e)=>{name=e.target.value}} required/>
          <label for="first_name">Name</label>
        </div>
      </div>
     
    
      <div className="row">
        <div className="input-field col s10">
        <i class="material-icons prefix">mail</i>
          <input id="email" type="email" className="validate" onChange={(e)=>{email=e.target.value}} required/>
          <label for="email">Email</label>
        </div>
      </div>


   
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea" onChange={(e)=>{message = e.target.value }} required></textarea>
          <label for="icon_prefix2">Your Message</label>
        </div>
        </div>
     


        <button  className="waves-effect waves-light btn-large blue" type="submit" value="submit" style={fontBold}>Submit</button>


    </form>
  </div>
 
      </div>


     
        </>
    )
}


export default Contacts;