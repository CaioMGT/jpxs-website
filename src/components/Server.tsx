import type { JSXElement } from "solid-js";
import type { Component } from "solid-js";

export default function Server(props: {
  id: number;
  name: string;
  address: string;
  port: number;
  version: number;
  gameType: number;
  players: number;
  maxPlayers: number;
  build: string;
}) {
  return (
    <div class="bg-bg w-full my-2 grid grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 ">
      <h1>{props.name}</h1>
      <h2>
        {props.players}/{props.maxPlayers} players online
      </h2>
      <h2>
        on{" "}
        {props.gameType == 4
          ? "World"
          : props.gameType == 3
          ? "Round"
          : props.gameType == 7
          ? "Versus"
          : props.gameType == 2
          ? "Race"
          : props.gameType == 5
          ? "Eliminator"
          : props.gameType == 6
          ? "Co-op"
          : "Undefined"}{" "}
        mode.
      </h2>
      <h2 style={`color: hsl(${props.version * 6}, 100%, 60%)`}>
        Version: {props.version}
        {props.build}
      </h2>
    </div>
  );
}
