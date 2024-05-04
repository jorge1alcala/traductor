import React, { useEffect, useState } from "react";
import axios from "axios";

const doTranslation = async (input, languageCode) => {
  const { data } = await axios.post(
    "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
    {
      q: input,
      target: languageCode
    }
  );

  try {
    return data.data.translations[0].translatedText;
  } catch (err) {
    return "";
  }
};

export default ({ language, source }) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!source) {
      return;
    }
    doTranslation(source, language).then(setTranslated);
  }, [source, language]);

  return <h1 className="title">{translated}</h1>;
};
