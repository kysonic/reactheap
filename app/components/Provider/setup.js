import NoteStore from '../../stores/NoteStore.js';
import LaneStore from '../../stores/LaneStore.js';

import storage from '../../libs/storage';
import persist from '../../libs/persist';


export default alt => {
	alt.addStore('NoteStore', NoteStore);
	alt.addStore('LaneStore', LaneStore);

	persist(alt, storage(localStorage), 'app');

}
