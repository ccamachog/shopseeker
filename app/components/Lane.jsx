import React from 'react';
import Notes from './Notes.jsx';
import NoteRecord from '../types/NoteRecord';
import {create as createNote,update as updateNote,remove as removeNote} from '../actions/NoteActions';
import {attachToLane,detachFromLane, update as updateLane, remove as removeLane} from '../actions/LaneActions';
import Editable from './Editable.jsx';
import { connect } from 'react-redux';
import uuid from 'node-uuid';

class Lane extends React.Component {
    constructor(props) {
        super(props);

        const id = props.lane.id;

        this.addNote = this.addNote.bind(this, id);
        this.deleteNote = this.deleteNote.bind(this, id);
        this.editName = this.editName.bind(this, id);
    }

    render() {
        const {lane, ...props} = this.props;
        let myNotes = this.myNotes();

        return (
            <div {...props}>
                <div className="lane-header">
                    <Editable className="lane-name" value={lane.name}
                              onEdit={this.editName.bind(this)}/>

                    <div className="lane-add-note">
                        <button onClick={this.addNote.bind(this)}>+</button>
                    </div>
                </div>
                <Notes items={myNotes} onEdit={this.editNote.bind(this)} onDelete={this.deleteNote.bind(this)}/>
            </div>
        );
    }

    addNote(laneId) {

        let note = new NoteRecord({
            task: 'New task',
            id: uuid.v4()
        });
        this.props.dispatch(createNote(note));
        this.props.dispatch(attachToLane(laneId, note.get('id')));

    }

    editNote(id, task) {
        this.props.dispatch(updateNote(id, task));

    }

    deleteNote(laneId, noteId) {
        this.props.dispatch(detachFromLane(laneId, noteId));
        this.props.dispatch(removeNote(noteId));
    }

    editName(id, name) {
        if (name) {
            this.props.dispatch(updateLane(id, name));
        }
        else {
            this.props.dispatch(removeNote(id));
        }
    }

    myNotes() {

        let idNotes = this.props.lane.notes;
        let allNotes = this.props.allNotes;
        return idNotes.map((id) => {
            let index = this.findNote(id);
            return allNotes.get(index);
        });


    }

    findNote(id) {
        let allNotes = this.props.allNotes;
        return allNotes.findIndex((lane, index)=>lane.id === id);
    }
}


// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
    return {
        allNotes: state.notes
    }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(Lane)