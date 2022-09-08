import { reverse } from "./utils";

export class Team {
  players: Player[];
  name: string;
  points: number;
  remainingBudget: number;
  constructor(data: any) {
    this.name = reverse(data.teamName);
    this.points = data.teamPoints;
    this.remainingBudget = data.remainingBudget;
    this.players = data.players.map((player) => new Player(player));
  }

  printTeam() {
    console.log(
      `Team name: ${this.name}, points: ${this.points}, remaining budget: ${this.remainingBudget}`
    );
    console.log("Players:");
    this.players.forEach((player) => player.printPlayer());
    console.log(
      "-------------------------------------------------------------------------------"
    );
  }
}
export class Player {
  name: string;
  position: string;
  team: string;
  id: string;
  points: number;
  price: number;

  constructor(player: any) {
    this.name = reverse(player.name);
    this.position = positionConverterMap.get(player.type) ?? "Unknown";
    this.team = reverse(player.teamName);
    this.id = player.id;
    this.points = player.pointsValue;
    this.price = player.marketValue;
  }

  printPlayer(): void {
    console.log(
      `Name: ${this.name}, position: ${this.position}, team: ${this.team}, id: ${this.id}, points: ${this.points}, price: ${this.price}`
    );
  }
}

const positionConverterMap = new Map<string, string>([
  ["g", "Goalkeeper"],
  ["d", "Defender"],
  ["m", "Midfielder"],
  ["a", "Attacker"],
]);
