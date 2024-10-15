import { v4 as uuidv4 } from 'uuid';

export const pluralMockDocument = {
  id: uuidv4(),
  rawText:
    'Felizes Rápidos bom Altos oi Bonitos oi Inteligentes so Casas lapis Livros mob Carros poste Pássaros Flores Felizes Rápidos Altos Bonitos Inteligentes teste  Casas Livros Carros Pássaros Flores Felizes Rápidos arvore Altos floresta Bonitos Inteligentes Casas Livros Carros Pássaros Flores professorzinhos vizinzões cavalheirosinhos engenheirões',
  textPlural:
    'Felizes Rápidos Altos Bonitos Inteligentes Casas lapis Livros Carros Pássaros Flores Felizes Rápidos Altos Bonitos Inteligentes Casas Livros Carros Pássaros Flores Felizes Rápidos Altos Bonitos Inteligentes Casas Livros Carros Pássaros Flores professorzinhos vizinzões cavalheirosinhos engenheirões',
  words: [
    {
      word: 'felizes',
      frequency: 3,
    },
    {
      word: 'rápidos',
      frequency: 3,
    },
    {
      word: 'altos',
      frequency: 3,
    },
    {
      word: 'bonitos',
      frequency: 3,
    },
    {
      word: 'inteligentes',
      frequency: 3,
    },
    {
      word: 'casas',
      frequency: 3,
    },
    {
      word: 'lapis',
      frequency: 1,
    },
    {
      word: 'livros',
      frequency: 3,
    },

    {
      word: 'carros',
      frequency: 3,
    },
    {
      word: 'pássaros',
      frequency: 3,
    },
    {
      word: 'flores',
      frequency: 3,
    },
    {
      word: 'professorzinhos',
      frequency: 1,
    },
    {
      word: 'vizinzões',
      frequency: 1,
    },
    {
      word: 'cavalheirosinhos',
      frequency: 1,
    },
    {
      word: 'engenheirões',
      frequency: 1,
    },
  ],
}
