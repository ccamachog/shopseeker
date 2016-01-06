import React from 'react';
import List from 'material-ui/lib/lists/list';
import Divider from 'material-ui/lib/divider';
import ListItem from 'material-ui/lib/lists/list-item';
import Toggle from 'material-ui/lib/toggle';
import Checkbox from 'material-ui/lib/checkbox';
import FontIcon from 'material-ui/lib/font-icon';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import Dialog from 'material-ui/lib/dialog';
import AppBar from 'material-ui/lib/app-bar';
import './offerDataForm.scss';

export default class OfferDataForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopup-offer-data-form">
                <AppBar title="Nueva Oferta" iconClassNameRight="material-icons icon-more_vert"
                        iconClassNameLeft="material-icons icon-arrow-back"/>

                <div className="shopup-add-offer">
                    <div>
                        <TextField hintText="Título" floatingLabelText="Título" style={{width:'100%'}}/>
                    </div>
                    <div>
                        <TextField hintText="Descripción" floatingLabelText="Descripción" style={{width:'100%'}}/>
                    </div>
                    <div>
                        <TextField hintText="Precio" floatingLabelText="Precio"
                                   style={{width:'30%', marginRight:'5%'}}/>
                        <TextField hintText="Tags" floatingLabelText="Tags"/>

                    </div>
                    <div>
                        <TextField hintText="Ubicación" floatingLabelText="Ubicación" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
        )
    }
}