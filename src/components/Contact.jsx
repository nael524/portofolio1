import "../assets/css/Contact.css"
const Contact =()=>{
    return(
        <div className="contact"> CONTACT ME
         <div className="contact2">
            <form className="contact1"  >
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Masssage"/>
                <button type="submit" >Send</button>
            </form>
         </div>
        
        </div>
    )
}
export default Contact;