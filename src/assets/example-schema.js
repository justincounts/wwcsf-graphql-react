export const FullExample =`
type Continent {
  code: String
  name: String
  countries: [Country]
}

type Country {
  code: String
  name: String
  native: String
  phone: String
  continent: Continent
  currency: String
  languages: [Language]
  emoji: String
  emojiU: String
}

type Language {
  code: String
  name: String
  native: String
  rtl: Int
}

type Query {
  continents: [Continent]
  continent(code: String): Continent
  countries: [Country]
  country(code: String): Country
  languages: [Language]
  language(code: String): Language
}

scalar Upload
`;

export const OutputObject =`
    type Country {
      code: String
      name: String
      native: String
      phone: String
      continent: Continent
      currency: String
      languages: [Language]
      emoji: String
      emojiU: String
    }        
`;

export const InputObject =` 
    input CountryInput {
      code: String
      name: String
      native: String
      phone: String
      continent: Continent
      currency: String
      languages: [Language]
      emoji: String
      emojiU: String
    }    
`;

export default FullExample;