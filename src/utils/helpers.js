/* eslint-disable import/prefer-default-export */
const names = ['Christopher', 'Raimonda', 'Lucie', 'Wallis', 'Kian', 'Ciro',
  'Diletta',
  'Marisol',
  'Arden',
  'Léandre',
];

export const randomNameGenerator = () => `${names[Math.floor(Math.random() * names.length)]}-${Math.floor(1000 + Math.random() * 9000)}`;
