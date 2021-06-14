import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

// React Intl
import { IntlProvider } from "react-intl";
import locale_es from "./translations/es.json";
import locale_en from "./translations/en.json";

// Animation On Scroll
import "aos/dist/aos.css";

console.log(window.navigator.language.slice(0, 2));

const NAVIGATOR_LANG = window.navigator.language.slice(0, 2);

const IntlProviderWrapper = () => (
  <IntlProvider
    messages={NAVIGATOR_LANG === "es" ? locale_es : locale_en}
    locale="es-mx"
    defaultLocale="es"
  >
    <App />
  </IntlProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <IntlProviderWrapper />
  </StrictMode>,
  rootElement
);
