import "../App.css";
import cover from "../images/cover.PNG";

export default function Buch() {
  return (
    <div id="buch">
      <div className="buch">
        <div className="buchtext">
          <h2>Unser tägliches Brot</h2>
          <p>
            Handelt es sich bei der männlichen Leiche, die unter einer Brücke in
            der Stadt San Ippolito gefunden wurde, um einen Unfall oder doch um
            den ersten Mordfall seiner Karriere? Diese Frage beschäftigt
            Commissario Rocco Francesco Capra und führt ihn und seine
            unerwartete Verstärkung in die Welt der Korruption."Unser tägliches
            Brot" ist ein Krimi mit Spuren von Satire und einer Anlehnung an
            aktuelle Ereignisse in der Donau-Alpen-Republik. Der Roman
            beschreibt auf etwas andere Weise ein heutzutage typisches
            Korruptionsszenario.
          </p>
        </div>
        <div className="buchbild">
          <img src={cover} height="200px" />
        </div>
      </div>
    </div>
  );
}
