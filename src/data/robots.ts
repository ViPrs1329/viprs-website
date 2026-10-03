// Robot history for the Robots page (src/pages/robots.astro).
// Photos are picked up automatically from src/assets/images/robots/.
// Name each file `<year>-<RobotName>.<ext>` (e.g. `2026-Linus.JPG`).
// Use `<year>-Robot.<ext>` when the robot doesn't have a name.

import type { ImageMetadata } from 'astro';

export interface Robot {
  year: number;
  name?: string;
  game?: string;
  image: ImageMetadata;
}

// FRC game played each season.
const games: Record<number, string> = {
  2011: 'Logo Motion',
  2012: 'Rebound Rumble',
  2013: 'Ultimate Ascent',
  2014: 'Aerial Assist',
  2015: 'Recycle Rush',
  2016: 'FIRST Stronghold',
  2017: 'FIRST Steamworks',
  2018: 'FIRST Power Up',
  2019: 'Destination: Deep Space',
  2020: 'Infinite Recharge',
  2021: 'Infinite Recharge',
  2022: 'Rapid React',
  2023: 'Charged Up',
  2024: 'Crescendo',
  2025: 'Reefscape',
  2026: 'Rebuilt',
};

const photos = import.meta.glob<{ default: ImageMetadata }>(
  '~/assets/images/robots/*.{jpeg,jpg,png,webp,JPEG,JPG,PNG,WEBP}',
  { eager: true }
);

export const robots: Robot[] = Object.entries(photos)
  .map(([path, mod]) => {
    const file = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    const [, year, rawName] = file.match(/^(\d{4})-?(.*)$/) ?? [];
    const name = rawName?.replace(/[-_]+/g, ' ').trim();
    return {
      year: Number(year),
      name: name && name.toLowerCase() !== 'robot' ? name : undefined,
      game: games[Number(year)],
      image: mod.default,
    };
  })
  .filter((robot) => robot.year)
  .sort((a, b) => b.year - a.year);
