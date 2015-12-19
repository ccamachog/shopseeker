import React from 'react';


export default class Note extends React.Component {
    render() {
        const {...props} = this.props;

        return (
            <li {...props}>{props.children}</li>
        );
    }
}