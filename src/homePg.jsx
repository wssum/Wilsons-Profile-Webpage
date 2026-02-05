import meAndBruce from './images/meAndBruce.jpg';
import LangList from './langList';
function HomePg() {
  return (
    <div
      style={{
        backgroundImage: `url(/wallpaperA.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
      className="centrePiece"
    >
      <div style={{
        filter: "drop-shadow(1px 1px 4px rgba(0,0,0,0.5))",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginTop: -300,
        marginLeft: -300
      }}>
        <img
          src={meAndBruce}
          alt="Me and my Cat"
          style={{
            width: '250px',
            height: 'auto',
            borderRadius: '8px',
            padding: '10px',
            border: '4px solid #000',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            margin: '20px',

          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1 style={{ marginRight: 10, fontFamily: "monospace" }}>
            Welcome To My WebPage
          </h1>
          <p style={{ fontFamily: "arial", margin: 0 }}>
            My name is Wilson Sum and I graduated<br />
            out of Seneca College Polytechnic on<br />
            December 2025. I have done 4 months of<br />
            co-op as a Front End Web Developer at<br />
            a company called Meta Trading Club.<br />
            We were developing a personality quiz<br />
            website much like 16personalities.<br />
            Feel free to reach out to me, have<br />
            a nice day.
          </p>
        </div>

      </div>
      <div style={{
        filter: "drop-shadow(1px 1px 4px rgba(0,0,0,0.5))",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginLeft: 10,
        marginTop: -260,
        padding: 0
      }}>
        <h1 style={{ fontFamily: "monospace" }}>
          Skill Sets:
        </h1>
        <LangList />

      </div>
    </div>

  )
}


export default HomePg;