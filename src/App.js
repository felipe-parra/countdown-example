import Countdown from "./components/Countdown";
import { FormattedMessage, useIntl } from "react-intl";
import "./styles.css";
import AOS from "aos";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: "2000"
    });
  });
  return (
    <div className="App">
      <h1>
        <FormattedMessage id="app.name" />
      </h1>
      <Countdown />
    </div>
  );
}
