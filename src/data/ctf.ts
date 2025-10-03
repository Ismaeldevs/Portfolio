import { CTFChallenge, CTFPlatform } from '../types/ctf';

export const platforms: CTFPlatform[] = [
  {
    name: 'HackTheBox',
    url: 'https://www.hackthebox.com',
    icon: 'htb',
  },
  {
    name: 'TryHackMe',
    url: 'https://tryhackme.com',
    icon: 'thm',
  },
  {
    name: 'OverTheWire',
    url: 'https://overthewire.org',
    icon: 'otw',
  },
];

export const recentChallenges: CTFChallenge[] = [
  {
    id: 'ctf1',
    name: 'OhSINT',
    platform: 'TryHackMe',
    category: 'OSINT',
    difficulty: 'Fácil',
    points: 65,
    solvedAt: '2025-10-05',
    writeupUrl: 'https://github.com/Ismaeldevs/CTF-Writeups/tree/a2e691df9ec349697df50c01685a269ffb317c36/TryHackMe/4.%20Others/OhSINT',
  },
  {
    id: 'ctf2',
    name: 'Natas',
    platform: 'OverTheWire',
    category: 'Web',
    difficulty: 'Medio',
    points: 0,
    solvedAt: '2025-07-25',
  },
  {
    id: 'ctf3',
    name: 'Source',
    platform: 'TryHackMe',
    category: 'Web',
    difficulty: 'Fácil',
    points: 45,
    solvedAt: '2025-10-06',
  }
];