import { PlatformEnum } from "../enum/PlatformEnum";
import type { IBanner } from "../schemas/bannersSchema";

export const BANNERS: IBanner[] = [
  {
    overline: "Igual aos clássicos!",
    title: "Sea of Stars",
    description:
      "Sea of Stars é um RPG baseado em turnos inspirado nos clássicos. Conta a história de dois Filhos do Solstício que combinarão os poderes do sol e da lua para realizar a Magia do Eclipse, a única força capaz de afastar as monstruosas criações do malvado alquimista conhecido como The Fleshmancer.",
    platforms: [
      PlatformEnum.NINTENDO,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
      PlatformEnum.XBOX,
    ],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/sea-of-stars.webp",
  },
  {
    title: "The Legend of Zelda: The Tears of the Kingdom",
    overline: "Uma jornada épica continua!",
    description:
      "A lendária franquia 'The Legend of Zelda' retorna em 'The Tears of the Kingdom', uma continuação direta de 'Breath of the Wild'. Uma verdadeira obra-prima da Nintendo.",
    platforms: [PlatformEnum.NINTENDO],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/zelda-tears-of-kingdom.webp",
  },

  {
    title: "Baldur´s Gate 3",
    overline: "Explorando um universo épico!",
    description:
      "O RPG épico da Larian Studios mergulha os jogadores em um vasto universo repleto de magia, criaturas misteriosas e escolhas que moldam a narrativa de maneiras surpreendentes.",
    platforms: [
      PlatformEnum.XBOX,
      PlatformEnum.PLAYSTATION,
      PlatformEnum.STEAM,
    ],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/baldurs-gate-three.webp",
  },

  {
    title: "Resident Evil 4 (Remake)",
    overline: "Uma experiência assustadora reinventada!",
    description:
      "O aguardado remake de 'Resident Evil 4' pela Capcom demonstra maestria ao revitalizar este clássico do survival horror. Gráficos de última geração e jogabilidade reformulada impressionam.",
    platforms: [
      PlatformEnum.PLAYSTATION,
      PlatformEnum.XBOX,
      PlatformEnum.STEAM,
    ],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/re-four.webp",
  },

  {
    title: "Super Mario Bros. Wonder",
    overline: "Uma jornada mágica com o bigodudo!",
    description:
      "O icônico mascote da Nintendo leva os jogadores a uma jornada através de mundos coloridos e desafios criativos. Uma celebração do legado duradouro de Mario.",
    platforms: [PlatformEnum.NINTENDO],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/super-mario-wonder.webp",
  },

  {
    title: "Marvel’s Spider-Man 2",
    overline: "A aventura continua com novos heróis!",
    description:
      "Desenvolvido pela Insomniac Games, 'Marvel’s Spider-Man 2' traz de volta Peter Parker e Miles Morales, oferecendo uma clara evolução do primeiro jogo com novos vilões e elementos de gameplay.",
    platforms: [PlatformEnum.PLAYSTATION],
    cartUrl: "#",
    url: "#",
    cover: "/mock/banners/spiderman-two.webp",
  },
];
