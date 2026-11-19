import { FC_INDEX_URL, FC_STANDINGS_URL, LINKSHELL_URL, MIMIC_BOX_URL } from './links';

export interface ResourceLink {
  title: string;
  url: string;
  description: string;
}

export interface ResourceSection {
  id: string;
  title: string;
  blurb: string;
  links: ResourceLink[];
}

export const RESOURCE_SECTIONS: ReadonlyArray<ResourceSection> = [
  {
    id: 'new-players',
    title: 'New players',
    blurb: 'Starting points for players new to FFXIV.',
    links: [
      {
        title: 'New to FFXIV',
        url: 'https://na.finalfantasyxiv.com/new_to_ffxiv/',
        description: "Square Enix's official starter page.",
      },
    ],
  },
  {
    id: 'jobs',
    title: 'Job guides',
    blurb: 'Rotation references and theorycraft.',
    links: [
      {
        title: 'The Balance',
        url: 'https://thebalanceffxiv.com/',
        description: 'Community-maintained job guides.',
      },
      {
        title: 'Icy Veins — FFXIV',
        url: 'https://www.icy-veins.com/ffxiv/',
        description: 'Rotation and gearing guides.',
      },
      {
        title: 'XIVAnalysis',
        url: 'https://xivanalysis.com/',
        description: 'Automated rotation analysis from FFLogs reports.',
      },
    ],
  },
  {
    id: 'raid',
    title: 'Raiding & logs',
    blurb: 'Combat logs and performance tracking.',
    links: [
      {
        title: 'FFLogs',
        url: 'https://www.fflogs.com/',
        description: 'Combat logging and rankings.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Crafting, gathering & markets',
    blurb: 'Reference tools for DoH, DoL, and the market board.',
    links: [
      {
        title: 'Teamcraft',
        url: 'https://ffxivteamcraft.com/',
        description: 'Crafting rotations, gear sets, and supply schedules.',
      },
      {
        title: 'Garland Tools',
        url: 'https://garlandtools.org/',
        description: 'Item database with gathering node maps.',
      },
      {
        title: 'Universalis',
        url: 'https://universalis.app/',
        description: 'Cross-world market board prices.',
      },
      {
        title: 'Eorzea Collection',
        url: 'https://ffxiv.eorzeacollection.com/',
        description: 'Glamour reference and outfit gallery.',
      },
    ],
  },
  {
    id: 'alliance',
    title: 'Inside the alliance',
    blurb: 'Links into the Cactuar Alliance itself.',
    links: [
      {
        title: 'Mimic Box 2.0',
        url: MIMIC_BOX_URL,
        description: 'Questions, concerns, comments, or joining — goes straight to the Sabrotenders, who send the Discord invite.',
      },
      {
        title: '★ The Cactuar Server FC Index ★',
        url: FC_INDEX_URL,
        description: 'Spreadsheet of Cactuar Free Companies, in the words of their own Leaders and Founders.',
      },
      {
        title: 'Alliance Linkshell members',
        url: LINKSHELL_URL,
        description: 'Current <CA> Linkshell roster on the Lodestone.',
      },
      {
        title: 'Cactuar Server FC Standings',
        url: FC_STANDINGS_URL,
        description: 'Weekly Free Company rankings for Cactuar.',
      },
      {
        title: 'FC Directory',
        url: '/fcs',
        description: 'Member FCs with live Lodestone stats.',
      },
      {
        title: 'Find your FC',
        url: '/find-your-fc',
        description: 'Matching quiz that ranks FCs by fit.',
      },
    ],
  },
];
