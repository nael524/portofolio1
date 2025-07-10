import '../assets/css/Header.css'
const Header = () => {
  return (
    <>
      <div className="status">
        <div className='status12'>NURKHALISA</div>
        <div className='status1'><a href='#home' >HOME</a></div>
        <div className='status1'> <a href="#about" >ABOUT</a></div>
         <div className='status1'><a href='#skills' >SKILLS</a> </div>
          <div className='status1'><a href='#resume' >RESUME</a> </div>
        <div className='status13'><button><a href='#contact' style={{color:"white"}}>CONTACT ME</a></button> </div>
      </div>
    </>
  );
};
export default Header;
