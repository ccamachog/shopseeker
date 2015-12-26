import {Record} from 'immutable';
import {Set} from 'immutable';

let LaneRecord = Record({
    id: '',
    name: '',
    notes: new Set()
});
export default LaneRecord;