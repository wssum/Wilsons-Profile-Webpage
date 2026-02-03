function Footer() {
  return (
    <div
      id="bottomBar"
      style={{
        textAlign: 'center',
        backgroundImage: "url('src/navBarBG/navBarBackGroundA.jpg')", 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        padding: '5px',
      }}
    >
      <h1 style={{ color: 'white' }}>
        Have a nice day.
      </h1>
    </div>
  );
}

export default Footer;
