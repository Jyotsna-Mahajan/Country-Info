import { useState } from "react";
import "./CountryInfo.css";
import SearchBox from "./SearchBox";
import LanguageIcon from "@mui/icons-material/Language";
import Typography from "@mui/material/Typography";
import InfoBox from "./InfoBox";

export default function CountryInfo() {
  let [info, setInfo] = useState(null);
  let [hasSearched, setHasSearched] = useState(false);

  async function handleSearch(query) {
    setHasSearched(true);
    const url = `https://restcountries.com/v3.1/name/${query}?fullText=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setInfo(data[0]);
      console.log(data[0]);
    } catch (err) {
      console.error("Fetch failed", err);
      setInfo(null);
    }
  }

  return (
    <div className="container">
      <h1>
        <LanguageIcon
          style={{
            fontSize: "40px",
            marginRight: "10px",
            verticalAlign: "middle",
          }}
        />
        Country Info App
      </h1>
      <SearchBox onSearch={handleSearch} />

      {hasSearched && !info && (
        <Typography
          variant="h6"
          align="center"
          color="error"
          sx={{ mt: 4, fontWeight: "bold" }}
        >
          No such country found!
        </Typography>
      )}

      {info && <InfoBox info={info}/>}
    </div>
  );
}
