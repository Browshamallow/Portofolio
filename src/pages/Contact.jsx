import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-container">
      <h2>Contactez-moi</h2>
      <p>Pour toute question, collaboration ou demande de stage, n'hésitez pas à me contacter :</p>

      <form
        className="contact-form"
        action="mailto:ton.email@example.com"
        method="post"
        encType="text/plain"
      >
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" rows="5" placeholder="Votre message..." required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      <p className="cv-download">
        📄 Télécharger mon CV :
        <a href="/CV de Ndoumbé Thiombane.pdf" download>Cliquer ici</a>
      </p>
    </div>
  );
}
