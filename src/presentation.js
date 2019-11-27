// Import React
import React from 'react';

import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
// Import Spectacle Core tags

import {
    Appear,
    BlockQuote,
    CodePane,
    Deck,
    Fill,
    Heading,
    Layout,
    Link,
    List,
    ListItem,
    S,
    Slide,
    Table,
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableRow,
    Text,
} from 'spectacle';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import NightOwl from 'prism-react-renderer/themes/nightOwl';


import SimpleQuery from './components/simple-query';
import TableDemo from './assets/table-demo';

import ApolloGraphQLImage from "./assets/apollo_graphql.png";
// Require CSS
import './styles.css';

require('normalize.css');


const theme = createTheme(
    {
        white: '#fff',
        grey: '#e6e6e6',
        primary: '#484848',
        secondary: '#c24fc4',
        tertiary: '#f88153',
        apollo: 'rgb(63, 32, 186)'
    },
    {
        primary: 'Open Sans',
        secondary: {
            name: 'Merriweather Sans',
            googleFont: true,
        },

    }
);

const ssndGradient = 'linear-gradient(-45deg, #c24fc4 0%, #f88153 100%)';
const subtleGradient = 'linear-gradient(-45deg, #ffffff 0%, #e6e6e6 100%)';

const demoScope = {
    useQuery,
    gql,
    JSON,
    Table,
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableRow,
};

export default function () {
    return (
        <Deck
            transition={['zoom', 'slide']}
            transitionDuration={500}
            theme={theme}
        >
            <Slide transition={['zoom']} bgGradient={ssndGradient}>
                <Heading size={5} lineHeight={1} textColor="grey">
                    Women Who Code @ Seasoned
                </Heading>
                <Heading size={3} lineHeight={1} textColor="white">
                    GraphQL and React
                </Heading>
            </Slide>
            <Slide transition={['fade']} align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={3} lineHeight={1} textColor="black">
                    What is GraphQL?
                </Heading>
                <Heading size={5} lineHeight={1} textColor="tertiary">
                    Better than <S type='italic' textColor="primary">(All the)</S> REST?
                </Heading>
                <Layout>
                    <Fill>
                        <Appear order="2">
                            <List bulletStyle="star" textcolor="black" lineHeight={2}>
                                <Appear order={1}>
                                    <ListItem margin="0 0 20px 0">A data query language for your API</ListItem>
                                </Appear>
                                <Appear order={2}>
                                    <ListItem margin="0 0 20px 0">Provides a Description of all available
                                        data</ListItem>
                                </Appear>
                                <Appear order={3}>
                                    <ListItem margin="0 0 20px 0">Request only the data the client needs</ListItem>
                                </Appear>
                                <Appear order={4}>
                                    <ListItem margin="0 0 20px 0">Retrieve multiple items in a single request</ListItem>
                                </Appear>
                                <Appear order={5}>
                                    <ListItem margin="0 0 20px 0">Simplifies versioning/deprecation</ListItem>
                                </Appear>
                                <Appear order={6}>
                                    <ListItem margin="0 0 20px 0">Backend Agnostic: Deploy in front of existing
                                        APIs</ListItem>
                                </Appear>
                            </List>
                        </Appear>
                    </Fill>
                </Layout>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="primary" textFont="secondary">
                    GraphQL Elements
                </Heading>
                <Layout>
                    <Fill>
                        <List fit bulletStyle="star" textcolor="black" lineHeight={2}>
                            <ListItem margin="0 0 20px 0" textColor="primary" size={3}>
                                <S type="bold" textColor="secondary">Types: </S>
                                Describe what’s possible
                            </ListItem>
                            <ListItem margin="0 0 20px 0" textColor="primary" size={3}>
                                <S type="bold" textColor="secondary">Queries: </S>
                                Retrieve data
                            </ListItem>
                            <ListItem margin="0 0 20px 0" textColor="primary" size={3}>
                                <S type="bold" textColor="secondary">Mutations: </S>
                                Write or update data
                            </ListItem>
                            <ListItem margin="0 0 20px 0" textColor="primary" size={3}>
                                <S type="bold" textColor="secondary">Subscriptions: </S>
                                Realtime updates
                            </ListItem>
                        </List>
                    </Fill>
                </Layout>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL Types - <S type="bold" textColor="secondary">Built-in Scalars</S>
                </Heading>
                <List textColor="primary">
                    <ListItem><S type="bold" textColor="tertiary">Int</S> - Signed 32 Bit Integer</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">Float</S> - A signed double-precision floating-point
                        value.</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">String</S> -A UTF‐8 character sequence</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">Boolean</S> - true or false</ListItem>
                </List>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL Types - <S type="bold" textColor="secondary">Custom Scalars</S>
                </Heading>
                <Text>Implementations can Define thier own Scalar Types</Text>
                <List textColor="primary">
                    <ListItem><S type="bold" textColor="tertiary">Enums</S> - Fixed Discrete Values (ex: AM, PM
                        )</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">Date</S></ListItem>
                </List>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL Types - <S type="bold" textColor="secondary">Object Types</S>
                </Heading>
                <Text margin={"50px 0 0 0"}>Combine multiple scalar fields to define complex types for Output (Queries)
                    or input (Mutations) </Text>
                <div class="d-flex justify-content-around pt-2">
                    <fit>
                        <Heading size={6} lineHeight={1} textColor="secondary">Output Object Type</Heading>
                        <CodePane
                            source={require('./assets/example-schema').OutputObject}
                            margin="20px auto"
                            overflow="overflow"
                        />
                    </fit>
                    <fill>
                        <Heading size={6} lineHeight={1} textColor="secondary">Input Object Type</Heading>
                        <CodePane
                            source={require('./assets/example-schema').InputObject}
                            margin="20px auto"
                            overflow="overflow"
                        />
                    </fill>
                </div>

            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL Types - <S type="bold" textColor="secondary">Operations</S>
                </Heading>
                <Text>Operations are Fields on the the special ROOT object of the Schema</Text>
                <List textColor="primary">
                    <ListItem><S type="bold" textColor="tertiary">Query</S> - Default operation. Typically
                        Read-Only</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">Mutation</S> - Write/Update Operations</ListItem>
                    <ListItem><S type="bold" textColor="tertiary">Subscription</S> - RealTime Updates</ListItem>
                </List>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    Example GraphQL Schema
                </Heading>
                <CodePane
                    source={require('./assets/example-schema').FullExample}
                    margin="20px auto"
                    overflow="overflow"
                />
                <Link href="https://github.com/trevorblades/countries">https://github.com/trevorblades/countries</Link>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    How to Query
                </Heading>
                <SimpleQuery/>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL and React
                </Heading>
                <img src={ApolloGraphQLImage} className="mt-5" alt="Apollo+GraphQL"/>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    Why <S type="bold" textColor="apollo">Apollo's</S> GraphQL Client?
                </Heading>
                <Link href="https://www.apollographql.com/docs/react/why-apollo/" textSize="32px"
                      target="_blank" textColor="apollo">Why Apollo Client on apollographql.com</Link>
                <List bulletStyle="1F680" textColor="primary" lineHeight={2}>
                    <ListItem margin="0 0 20px 0" textColor="secondary">Declaritive Data fetching</ListItem>
                    <ListItem margin="0 0 20px 0">Zero-config caching</ListItem>
                    <ListItem margin="0 0 20px 0">Combined Local & Remote Data</ListItem>
                    <ListItem margin="0 0 20px 0">Vibrant ecosystem</ListItem>
                </List>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    <S type="bold" textColor="apollo">Apollo Client</S> - Declaritive Data fetching
                </Heading>
                <BlockQuote textColor="primary" className="p-4">
                    With Apollo's declarative approach to data fetching, all of the logic for retrieving your data,
                    tracking loading and error states, and updating your UI is encapsulated by the useQuery Hook. This
                    encapsulation makes integrating query results into your presentational components a breeze! Let's
                    see what this looks like in practice with React Apollo:
                </BlockQuote>
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <CodePane
                    textSize={"24px"}
                    lang="javascript"
                    source={require('./assets/apollo-datafetching.txt')}
                    margin="20px auto"
                    overflow="overflow"
                />
            </Slide>
            <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                <Heading size={5} lineHeight={1} textColor="black">
                    GraphQL and React exercise
                </Heading>
                <div class="d-flex justify-content-around mt-2">
                    <Link href="https://countries.trevorblades.com/" textSize="32px"
                          target="_blank">GraphQL Playground</Link>
                </div>
                <div id="table-demo" class="mt-2">
                    <LiveProvider code={TableDemo} theme={NightOwl} scope={demoScope}>
                        <div className="d-flex flex-column justify-content-center">
                            <div class="flex-one editor">
                                <LiveEditor/>
                            </div>
                            <div class="flex-one mt-2  justify-content-center preview">
                                <LiveError/>
                                <LivePreview/>
                            </div>
                        </div>
                    </LiveProvider>
                </div>
            </Slide>
            <Slide transition={['fade']} bgGradient={subtleGradient} align="flex-start flex-start">
                <Heading size={5} lineHeight={1} textColor="black">Resource List</Heading>
                <List bulletStyle="arrow" textcolor="black" lineHeight={2}>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://graphql.org" textSize="32px"
                              target="_blank">GraphQL.org</Link></ListItem>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://graphql.github.io/graphql-spec/" textSize="32px"
                              target="_blank">GraphQL Spec</Link></ListItem>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://www.apollographql.com/" textSize="32px"
                              target="_blank">Apollo GraphQL</Link></ListItem>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://github.com/trevorblades/countries" textSize="32px"
                              target="_blank">Countries GraphQL Demo</Link>
                    </ListItem>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://github.com/justincounts/wwcsf-graphql-react" textSize="32px"
                              target="_blank">This Presentation (https://github.com/justincounts/wwcsf-graphql-react)</Link>
                    </ListItem>
                    <ListItem margin="0 0 20px 0">
                        <Link href="https://www.justincounts.com" textSize="32px"
                              target="_blank">My Website
                            (https://www.justincounts.com)</Link>
                    </ListItem>
                </List>
            </Slide>
        </Deck>
    );
}
