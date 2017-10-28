// @flow
// import React, { Component } from 'react';
const React = require('react');
const { Component } = require('react');

type Props = {
    foo: string
}

type State = {
    bar: string
}

class Foo extends Component<Props, State> {
    props: Props;

    state: State

    render() {

    }
}


class Doo extends Component<void, Props, State> {
    props: Props;

    state: State

    render() {

    }
}

class Moo<Zoo, Goo> {

    props: Props;

        state: State

    render() {

    }
}
