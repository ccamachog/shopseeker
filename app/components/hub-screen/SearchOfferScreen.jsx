import React from 'react';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};
export default class Map extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'100%',height:'320px'}}>
                <AppBar title="40 de  636 Ofertas" iconClassNameRight="material-icons icon-search"
                        iconClassNameLeft="material-icons icon-arrow-back"/>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <Tab label="Tab A" value="a" >
                        <div>
                            <h2 style={styles.headline}>Controllable Tab A</h2>
                            <p>
                                Tabs are also controllable if you want to programmatically pass them their values.
                                This allows for more functionality in Tabs such as not
                                having any Tab selected or assigning them different values.
                            </p>
                        </div>
                    </Tab>
                    <Tab label="Tab B" value="b">
                        <div>
                            <h2 style={styles.headline}>Controllable Tab B</h2>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
                        </div>
                    </Tab>
                </Tabs>

            </div>
        );
    }
}