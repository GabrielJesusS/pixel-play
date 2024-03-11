import { PlatformEnum } from "../enum/PlatformEnum";
import type { ICard } from "../schemas/cardSchema";

export const MAIN_CARDS: ICard[] = [
  {
    id: "tmnt",
    title: "Teenage Mutant Ninja Turtles: Shredder’s Revenge",
    price: 69.99,
    discount: 0.5,
    discountPrice: 34.99,
    genre: "Beat-em-up",
    image: "mock/cards/tmnt.webp",
    platforms: [
      PlatformEnum.NINTENDO,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
  },
  {
    id: "ff-7",
    title: "Final Fantasy XVI",
    price: 299.99,
    genre: "RPG",
    image: "mock/cards/final-fantasy-sixteen.webp",
    platforms: [PlatformEnum.PLAYSTATION, PlatformEnum.STEAM],
  },
  {
    id: "sf-6",
    title: "Street Fighter 6",
    price: 124.99,
    genre: "Luta",
    image: "mock/cards/street-fighter-six.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
  },
  {
    id: "aw-2",
    title: "Alan Wake II",
    price: 299.99,
    genre: "Suspense Psicológico",
    image: "mock/cards/alan-wake-two.webp",
    platforms: [
      PlatformEnum.XBOX,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
    ],
  },
  {
    id: "er",
    title: "Elden Ring",
    price: 169.99,
    genre: "Ação / RPG",
    image: "mock/cards/elden-ring.webp",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
  },
  {
    id: "gowr",
    title: "God of War Ragnarok",
    price: 129.99,
    genre: "Ação / Aventura",
    image: "mock/cards/gow-ragnarok.webp",
    platforms: [PlatformEnum.PLAYSTATION],
  },
];

export const AWAITED_CARDS: ICard[] = [
  {
    id: "poftlc",
    title: "Prince of Persia: The Lost Crown",
    platforms: [
      PlatformEnum.NINTENDO,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Ação e Aventura",
    image: "mock/cards/prince-of-persa.webp",
    price: 209.99,
  },

  {
    id: "lad",
    title: "Like a Dragon: Infinite Wealth",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Ação e RPG",
    image: "mock/cards/like-a-dragon.webp",
    price: 349.9,
  },

  {
    id: "skanb",
    title: "Skull and Bones",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Ação e Aventura",
    image: "mock/cards/skull-and-bones.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "tkk8",
    title: "Tekken 8",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Luta",
    image: "mock/cards/tekken-8.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "p3",
    title: "Persona 3 Reload",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "RPG",
    image: "mock/cards/persona-3.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "ff7",
    title: "Final Fantasy VII Rebirth",
    platforms: [PlatformEnum.PLAYSTATION],
    genre: "RPG",
    image: "mock/cards/final-fantasy-7.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "aid",
    title: "Alone in the Dark",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Terror e Suspense",
    image: "mock/cards/alone-in-the-dark.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "dd2",
    title: "Dragon’s Dogma 2",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "RPG de Ação",
    image: "mock/cards/dragon-dogma.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "ror",
    title: "Rise of the Ronin",
    platforms: [PlatformEnum.PLAYSTATION],
    genre: "Ação e Aventura",
    image: "mock/cards/rise-of-ronin.webp",
    price: 299.99,
    isPreorder: true,
  },

  {
    id: "bmw",
    title: "Black Myth: Wukong",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Ação e Aventura",
    image: "mock/cards/black-myth.webp",
    price: 299.99,
    isPreorder: true,
  },
];

export const FREE_CARDS: ICard[] = [
  {
    id: "DT",
    title: "Death Trash",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.NINTENDO,
      PlatformEnum.STEAM,
    ],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/death-trash.webp",
  },
  {
    id: "CT",
    title: "Cris Tales",
    platforms: [PlatformEnum.PLAYSTATION, PlatformEnum.STEAM],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/cris-tales.webp",
  },
  {
    id: "MNM",
    title: "Mineko's Night Market",
    platforms: [PlatformEnum.STEAM, PlatformEnum.NINTENDO],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/mineko-market.webp",
  },
  {
    id: "SMBF",
    title: "Super Meat Boy Forever",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
      PlatformEnum.NINTENDO,
    ],
    genre: "Indie e Plataforma",
    price: 0,
    image: "mock/cards/super-meat-boy.webp",
  },
  {
    id: "D",
    title: "Dolmen",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/dolmen.webp",
  },
  {
    id: "O",
    title: "OMNO",
    platforms: [PlatformEnum.STEAM],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/omno.webp",
  },
  {
    id: "H",
    title: "Hades",
    platforms: [PlatformEnum.STEAM, PlatformEnum.NINTENDO],
    genre: "Hack and slash/Beat'em up e Indie",
    price: 0,
    image: "mock/cards/hades.webp",
  },
  {
    id: "S",
    title: "Scorn",
    platforms: [PlatformEnum.STEAM],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/scorn.webp",
  },
  {
    id: "SB",
    title: "Sable",
    platforms: [PlatformEnum.STEAM],
    genre: "Aventura e Indie",
    price: 0,
    image: "mock/cards/sable.webp",
  },
];
