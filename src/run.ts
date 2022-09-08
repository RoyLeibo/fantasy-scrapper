import axios from "axios";
import { Team } from "./types";
import { getSomeoneTeamURL } from "./utils";

export async function runFantasy() {
  const teamsIds: string[] = [];
  const teams: Team[] = [];

  const page1 = await axios.get(
    "https://fantasyleague.sport5.co.il/API/Rank/League/1?GUID=320698"
  );

  const page2 = await axios.get(
    "https://fantasyleague.sport5.co.il/API/Rank/League/2?GUID=320698"
  );

  teamsIds.push(
    ...[...page1.data.table, ...page2.data.table].map(
      (team) => team.userId as string
    )
  );

  for (const teamId of teamsIds) {
    await axios.get(getSomeoneTeamURL(teamId)).then((res) => {
      teams.push(new Team(res.data));
    });
  }

  teams.forEach((team) => team.printTeam());
}
