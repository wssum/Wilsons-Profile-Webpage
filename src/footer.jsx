import Ghub from "@mui/icons-material/GitHub"
import LinkIn from "@mui/icons-material/LinkedIn"

function Footer() {
  return (
    <div
      id="bottomBar"
      style={{
        textAlign: 'center',
        backgroundImage: `url(/navBarBackGroundA.jpg)`,   
        padding: '5px',
      }}
    >
      <a href = "https://github.com/wssum">
         <Ghub style={{ fontSize: '80px' }} />
      </a>
  <a href = "https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWF3akeXmRaCt8dbAI7lmdg%3D%3D">
         <LinkIn style={{ fontSize: '80px' }} />
      </a>
    </div>
  );
}

export default Footer;
