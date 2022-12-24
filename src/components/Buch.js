import "../App.css";
import cover from "../images/cover.jpg";

export default function Buch() {
  return (
    <div id="buch">
      <div id="buchalles">
        <div className="buch">
          <div className="buchtext">
            <h2>Unser tägliches Brot</h2>
            <p>
              Handelt es sich bei der männlichen Leiche, die unter einer Brücke
              in der Stadt San Ippolito gefunden wurde, um einen Unfall oder
              doch um den ersten Mordfall seiner Karriere? Diese Frage
              beschäftigt Commissario Rocco Francesco Capra und führt ihn und
              seine unerwartete Verstärkung in die Welt der Korruption."Unser
              tägliches Brot" ist ein Krimi mit Spuren von Satire und einer
              Anlehnung an aktuelle Ereignisse in der Donau-Alpen-Republik. Der
              Roman beschreibt auf etwas andere Weise ein heutzutage typisches
              Korruptionsszenario.
            </p>
            <br />
            <a
              className="kaufen"
              href="https://www.morawa.at/detail/ISBN-9783991258483/Waschberg-Thomas-von/Unser-t%C3%A4gliches-Brot?bpmctrl=bpmrownr.1%7Cforeign.248043-1-0-0"
              target="_blank"
            >
              Kaufen
            </a>
          </div>
          <div className="buchbild">
            <img src={cover} height="200px" />
          </div>
        </div>
      </div>
    </div>
  );
}
