import { PlatformEnum } from "../enum/PlatformEnum";
import type { IHighlight } from "../schemas/highlightSchema";

export const HIGHLIGHTS_BEST_SELLERS: IHighlight[] = [
  {
    name: "Cyberpunk 2077",
    genre: "RPG de Ação",
    image: "mock/highlights/cyberpunk2077.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    price: 129.99,
    url: "#",
  },
  {
    name: "Lost Ark",
    genre: "MMO RPG",
    image: "mock/highlights/lost-ark.webp",
    platforms: [PlatformEnum.STEAM],
    price: 9.99,
    url: "#",
  },
  {
    name: "Hogwarts Legacy",
    genre: "RPG de Ação",
    image: "mock/highlights/hogwarts.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.XBOX,
    ],
    price: 149.99,
    url: "#",
  },
  {
    name: "Sons Of The Forest",
    genre: "RPG de Ação",
    image: "mock/highlights/sons-of-forest.webp",
    platforms: [PlatformEnum.STEAM],
    price: 199.99,
    url: "#",
  },
];

export const HIGHLIGHTS_RELEASES: IHighlight[] = [
  {
    name: "Last Epoch",
    genre: "RPG de Ação",
    image: "mock/highlights/last-epoch.webp",
    platforms: [PlatformEnum.STEAM],
    price: 99.99,
    url: "#",
  },
  {
    name: "BackPack Battles",
    genre: "Estratégia",
    image: "mock/highlights/backpack-battles.webp",
    platforms: [PlatformEnum.STEAM],
    price: 42.99,
    url: "#",
  },
  {
    name: "The Outlast Trials",
    genre: "Terror",
    image: "mock/highlights/outlast.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.XBOX,
    ],
    price: 149.99,
    url: "#",
  },
  {
    name: "Top Racer Collection",
    genre: "RPG de Ação",
    image: "mock/highlights/top-racer.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.XBOX,
    ],
    price: 39.99,
    url: "#",
  },
];

export const HIGHLIGHTS_COMING_SOON: IHighlight[] = [
  {
    name: "Animal Well",
    genre: "Metroidvania",
    image: "mock/highlights/animal-well.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.NINTENDO,
    ],
    price: 29.99,
    url: "#",
  },
  {
    name: "Dustborn",
    genre: "Ação e Aventura",
    image: "mock/highlights/dustborn.webp",
    platforms: [
      PlatformEnum.STEAM,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
    ],
    price: 49.99,
    url: "#",
  },
  {
    name: "The First Berserker: Khazan",
    genre: "RPG de Ação",
    image: "mock/highlights/khazan.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.XBOX,
    ],
    price: 249.99,
    url: "#",
  },
  {
    name: "Stellar Blade",
    genre: "Ação e Aventura",
    image: "mock/highlights/stellar-blade.webp",
    platforms: [PlatformEnum.PLAYSTATION],
    price: 349.99,
    url: "#",
  },
];
