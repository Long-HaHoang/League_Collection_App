import { useEffect, useState } from "react";
import request from "request";
import cheerio from "cheerio";
import fs from "fs";

export default function Skins() {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const url =
      "https://leagueoflegends.fandom.com/wiki/List_of_champion_skins_(League_of_Legends)";

    request.get(url, (error, response, body) => {
      if (error) {
        console.error(error);
        return;
      }

      const $ = cheerio.load(body);

      const tbody = $("table.wikitable.sortable > tbody");

      const skins = [];
      tbody.children("tr").each((i, tr) => {
        if (i === 0) {
          return;
        }
        const tds = $(tr).children("td");
        const name = tds.eq(0).text().trim();
        const champion = tds.eq(1).text().trim();
        const year = tds.eq(2).text().trim();
        const availability = tds.eq(3).text().trim();
        skins.push({ name, champion, year, availability });
      });

      setSkins(skins);

      const outputFile = "public/skins.json";

      fs.writeFile(outputFile, JSON.stringify(skins), (error) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log(`Successfully wrote ${outputFile}`);
      });
    });
  }, []);

  return (
    <div>
      {skins.map((skin) => (
        <div key={skin.name}>
          <h2>{skin.name}</h2>
          <p>Champion: {skin.champion}</p>
          <p>Year of Release: {skin.year}</p>
          <p>Availability: {skin.availability}</p>
        </div>
      ))}
    </div>
  );
}
