// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Appear,
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
    Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import SimpleQuery from "./components/simple-query";
// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        white: '#fff',
        grey: '#e6e6e6',
        primary: '#484848',
        secondary: '#c24fc4',
        tertiary: '#f88153',
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


export default class Presentation extends React.Component {
    render() {
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
                <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
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
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">A data query language for your API</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">Provides a Description of all available
                                            data</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">Request only the data the client needs</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">Retrieve multiple items in a single request</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">Simplifies versioning/deprecation</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 20px 0">Backend Agnostic: Deploy in front of existing APIs</ListItem>
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
                            <ListItem><S type="bold" textColor="tertiary">Float</S> - A signed double-precision floating-point value.</ListItem>
                            <ListItem><S type="bold" textColor="tertiary">String</S> -A UTF‐8 character sequence</ListItem>
                            <ListItem><S type="bold" textColor="tertiary">Boolean</S> - true or false</ListItem>
                        </List>
                </Slide>
                <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                    <Heading size={5} lineHeight={1} textColor="black">
                        GraphQL Types - <S type="bold" textColor="secondary">Custom Scalars</S>
                    </Heading>
                    <List textColor="primary">
                        <ListItem><S type="bold" textColor="tertiary">Enums</S> - Fixed Discrete Values (ex: AM, PM )</ListItem>
                        <Appear order="1"><ListItem>... Implementations can define their own</ListItem></Appear>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                    <Heading size={5} lineHeight={1} textColor="black">
                        GraphQL Types - <S type="bold" textColor="secondary">Operations</S>
                    </Heading>
                    <Text>Operations are Fields on the the special ROOT object of the Schema</Text>
                    <List textColor="primary">
                        <ListItem><S type="bold" textColor="tertiary">Query</S> - Default operation. Typically Read-Only</ListItem>
                        <ListItem><S type="bold" textColor="tertiary">Mutation</S> - Write/Update Operations</ListItem>
                        <ListItem><S type="bold" textColor="tertiary">Subscription</S> - RealTime Updates</ListItem>
                    </List>
                </Slide>
                <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                    <Heading size={5} lineHeight={1} textColor="black">
                        Example GraphQL Schema
                    </Heading>
                    <CodePane
                        source={require('./assets/example-schema').default}
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
                </Slide>
                <Slide transition={['fade']} bgColor="white" align="flex-start flex-start" bgGradient={subtleGradient}>
                    <Heading size={5} lineHeight={1} textColor="black">
                        Excersize!
                    </Heading>
                </Slide>
                <Slide transition={['fade']} bgGradient={subtleGradient} align="flex-start flex-start">
                    <Heading size={5} lineHeight={1} textColor="black">Resource List</Heading>
                    <List bulletStyle="arrow" textcolor="black" lineHeight={2}>
                        <ListItem margin="0 0 20px 0">
                            <Link href="https://graphql.org" textSize="32px"
                                  target="_blank">GraphQL
                                (https://graphql.org/)</Link></ListItem>
                        <ListItem margin="0 0 20px 0">
                            <Link href="https://graphql.github.io/graphql-spec/" textSize="32px"
                                                            target="_blank">GraphQL Spec
                            (https://graphql.github.io/graphql-spec/)</Link></ListItem>
                        <ListItem margin="0 0 20px 0">
                            <Link href="https://www.apollographql.com/" textSize="32px"
                                  target="_blank">Apollo GraphQL
                                (https://www.apollographql.com/)</Link></ListItem>
                        <ListItem margin="0 0 20px 0">
                            <Link href="https://github.com/trevorblades/countries"
                                  target="_blank">Countries GraphQL Demo
                                (https://github.com/trevorblades/countries)</Link>
                        </ListItem>
                    </List>
                </Slide>
            </Deck>
        );
    }
}
