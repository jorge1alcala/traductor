import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [value, setValue] = useState("Greetings!");

  return (
    <div>
      <Field onChange={setValue} value={value} label="Enter English" />

      <label className="label">Enter Language</label>
      <Languages language={language} onLanguageChange={setLanguage} />

      <hr />
      <label className="label">Output</label>
      <Translate language={language} source={value} />
    </div>
  );
}
