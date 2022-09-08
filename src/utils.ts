// import { readdir } from "fs";
import { Team } from "./types";

export function reverse(s) {
  return s.split("").reverse().join("");
}

// export async function getDirectories() {
//   return (await readdir("./", { withFileTypes: true }))
//     .filter((dirent) => dirent.isDirectory())
//     .map((dirent) => dirent.name);
// }

export function buildTeam(data: any): Team {
  return new Team(data.players);
}

export const getSomeoneTeamURL = (teamId) =>
  `https://fantasyleague.sport5.co.il/API/Team/GetSomeoneTeam/${teamId}`;
