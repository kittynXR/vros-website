import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { I18nProvider } from "./i18n/index.jsx";
import "./design-system/tokens.css";
import "./design-system/themes.css";
import "./design-system/components.css";
import "./site.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>,
);
