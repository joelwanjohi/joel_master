export interface CardImage {
  alt: string;
  name: string;
  png?: boolean;
}

export interface Card {
  title: string;
  description: string;
  image: CardImage;
}

export interface ContentDate {
  month: number;
  year: number;
}

export interface ContentAction {
  link: string;
  title: string;
}

export interface Project extends Card {
  date?: ContentDate;
  actions: ContentAction[];
  tags: string[];
}

export interface Article extends Card {
  date: ContentDate;
  link: string;
  publishedOn: string;
}

export const banners = [
  'Flutter (Dart)',
  'Python Dev',
  'Postman',
  'Mobile Dev',
  'Kotlin',
  'Frontend',
  'Backend (NodeJS)',
  'Technical Writing',
  'Community',
  'Vibes',
  'Currently Learning AI',
];

export const months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const displayDate = ({ month, year }: ContentDate) =>
  `${months[month]} ${year}`;
