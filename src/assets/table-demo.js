export default `
function TableDemo() {
    const QUERY =gql\`
        query {
            countries{
                name
            }
         }
    \`;
    
    const {loading, error, data} = useQuery(QUERY);
    if(loading || !data){
        return (<p>Loading...</p>);
    } else if(error){
        return (<p>Error Running GraphQL Query...</p>);
    } else {
        const {countries} = data;
        return (    
            <table>
                <thead>
                   <th>Country</th>
                </thead>
                <tbody>
                {
                countries.map(country => {
                    return (
                        <tr>
                            <td>{country.name}</td>
                        </tr>
                        );
                    })
                }
                </tbody>               
            </table>
        );
    }
}
`