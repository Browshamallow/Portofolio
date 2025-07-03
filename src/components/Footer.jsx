import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Ndoumbé Thiombane – Étudiant en Systèmes d’Information</p>
      <p>
        <a href="https://github.com/Browshamallow?tab=repositories" target="_blank">GitHub</a> |
        <a href="https://www.linkedin.com/feed/?trk=onboarding-landing" target="_blank"> LinkedIn</a>
      </p>
    </footer>
  );
}
