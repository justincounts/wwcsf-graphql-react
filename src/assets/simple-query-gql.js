export default `
  query GetCountryDetails($country:String!){ 
    country(code: $country) {
        name
        native
        emoji
        currency
        languages {
          code
          name
        }
      }
}
`;