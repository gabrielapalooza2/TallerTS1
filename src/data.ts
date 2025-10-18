import { Serie } from "./models/Serie.js";

export const series: Serie[] = [
  new Serie(1, "Breaking Bad", "AMC", 5,
    "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer",
    "https://www.amc.com/shows/breaking-bad",
    "./img/BreakingBad.JPG"              

  ),
  new Serie(2, "Orange Is the New Black", "Netflix", 6,
    "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary",
    "https://www.netflix.com/co/title/70242311",
    "./img/OrangeIsTheNewBlack.JPG"      
  ),
  new Serie(3, "Game of Thrones", "HBO", 7,
    "American fantasy drama",
    "https://www.hbo.com/game-of-thrones",
    "./img/GameOfThrones.JPG"             
  ),
  new Serie(4, "The Big Bang Theory", "CBS", 12,
    "Leonard and Sheldon are brilliant physicists…",
    "https://www.cbs.com/shows/big_bang_theory/about/",
    "./img/TheBigBangTheory.JPG"        
  ),
  new Serie(5, "Sherlock", "BBC", 4,
    "Sherlock depicts consulting detective Sherlock Holmes…",
    "https://www.bbc.co.uk/programmes/b018ttws",
    "./img/sherlock.JPG"                 
  ),
  new Serie(6, "A Very English Scandal", "BBC", 2,
    "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries…",
    "https://www.bbc.co.uk/programmes/p065smy4",
    "./img/AVeryEnglishScandal.JPG"     
  ),
];
