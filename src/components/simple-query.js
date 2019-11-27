import React, {useState} from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import ReactJson from 'react-json-view';
import SIMPLE_QUERY_GQL from '../assets/simple-query-gql';
import {Layout, Fill, Heading, Link} from 'spectacle';
import './simple-query.css';

function SimpleQuery(props) {
    const [country, setCountry] = useState('BO');
    const [query] = useState(gql(SIMPLE_QUERY_GQL));
    const {error, data} = useQuery(query, {
        variables: {country},
        skip: country && country.length < 2,
        errorPolicy: 'all',
        onError: (e) => e
    });
    return (
        <div>
            <Layout>
                <Fill>
                    <div id="simple-query">
                        <div class="half left">
                            <Heading size={6} lineHeight={1} textColor="primary">Query</Heading>
                            <div>
                                <label>Country Code: </label>
                                <input
                                    type="text"
                                    size={5}
                                    max={2}
                                    placeholder="Country Code"
                                    value={country}
                                    onChange={({target}) => setCountry(target.value)}/>
                            </div>
                            <textarea value={SIMPLE_QUERY_GQL} rows={20}/>
                        </div>
                        <div className="half right">
                            <div>
                                <Heading size={6} lineHeight={1} textColor="primary">Data</Heading>
                                <div class="rjv-wrapper">
                                    <ReactJson src={data}/>
                                </div>
                            </div>
                            {error && <div>
                                <Heading size={6} lineHeight={1} textColor="primary">Error</Heading>
                                <div className="rjv-wrapper">
                                    <ReactJson src={error}/>
                                </div>
                            </div>}
                        </div>
                    </div>
                </Fill>
            </Layout>
            <div class="d-flex mt-5 justify-content-center">
                <Link href="https://raw.githubusercontent.com/justincounts/wwcsf-graphql-react/master/src/components/simple-query.js">
                    Source Code for this Example</Link>
            </div>
        </div>
    );
}

export default SimpleQuery;