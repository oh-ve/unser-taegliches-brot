import "../App.css";
import autor from "../images/tvonwaschberg2.jpg";

export default function Autor() {
  return (
    <div id="autor">
      <div className="autortext">
        <h2>Über den Autor</h2>
        <p>
          Thomas von Waschberg wurde in Kroatien geboren und ist nach seinem
          Studium der Elektrotechnik nach Österreich ausgewandert. Dass er sein
          Leben lang einen technischen Beruf ausgeübt hat, hat ihn nicht daran
          gehindert, seiner Phantasie freien Lauf zu lassen. Sein erster Roman
          „Unser tägliches Brot“ entstand als Ergebnis langer Überlegungen und
          Beobachtungen als Ausflug in die Welt der Literatur. Thomas von
          Waschberg schreibt unter Pseudonym.
        </p>
      </div>
      <img src={autor} height="180px" />
    </div>
  );
}
