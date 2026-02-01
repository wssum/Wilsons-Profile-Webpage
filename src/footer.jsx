function Footer() {
  return (
    <div
      id="bottomBar"
      style={{
        textAlign: 'center',
        backgroundImage: "url('src/navBarBG/navBarBackGroundA.jpg')", // path to your image
        backgroundSize: 'cover', // makes the image cover the whole div
        backgroundRepeat: 'no-repeat', // prevents repeating
        backgroundPosition: 'center', // centers the image
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
