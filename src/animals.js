import dolphinImg from './assets/images/dolphin.jpg'
import lobsterImg from './assets/images/lobster.jpg'
import starfishImg from './assets/images/starfish.jpg'

export const animals = {
  dolphin: {
    image: dolphinImg,
    facts: [
      'Dolphins have been shown to give distinct names to each other!',
      'Dolphins are known to display their own culture!',
      'Dolphins have two stomachs!',
    ],
  },
  lobster: {
    image: lobsterImg,
    facts: [
      'Lobsters taste with their legs!',
      'Lobsters chew with their stomachs!',
      'Lobsters can live as long as 100 years.',
    ],
  },
  starfish: {
    image: starfishImg,
    facts: [
      'Starfish can have up to 40 arms!',
      'Starfish have no brain and no blood!',
      'Starfish can regenerate their own arms!',
    ],
  },
}
