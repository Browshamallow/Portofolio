import "./Home.css";
import profileImg from "../assets/photo.jpg"; // place ici ta vraie image

export default function Home() {
  return (
    <div className="home-container">
      <div className="intro">
        <img src={profileImg} alt="Ma photo" className="profile-img" />
        <div>
          <h1>Bonjour, je suis <span className="highlight">Ndoumbé Thiombane</span></h1>
          <h2>Étudiant en Systèmes d’Information</h2>
          <p>
            Passionné par le développement web, les architectures logicielles et la gestion de projet,
            je conçois des solutions informatiques modernes avec des technologies comme React, Node.js, Laravel ou Flutter.
          </p>
          <a href="/projects" className="btn-explore">Voir mes projets</a>
        </div>
      </div>
    </div>
  );
}
