/* eslint-disable */

import React, { useState } from "react";

const LANGUAGES = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "French", value: "fr" },
  { label: "Hindi", value: "hi" },
  { label: "Japanese", value: "ja" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Simplified Chinese", value: "zh-CN" },
  { label: "Spanish", value: "es" },
  { label: "Swahili", value: "sw" },
  { label: "Thai", value: "th" }
];

export default ({ language, onLanguageChange }) => {
  const [open, setOpen] = useState(false);

  const onSelect = language => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div className={`dropdown ${open && "is-active"}`}>
      <div className="dropdown-trigger">
        <button className="button" onClick={() => setOpen(!open)}>
          <span>{LANGUAGES.find(l => l.value === language).label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-content">
          {LANGUAGES.map(({ label, value }) => {
            return (
              <a
                href="#"
                onClick={() => onSelect(value)}
                className="dropdown-item"
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
