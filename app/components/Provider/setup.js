import TodoStore from '../../stores/TodoStore.js';

import storage from '../../libs/storage';
import persist from '../../libs/persist';


export default alt => {
	alt.addStore('todo', TodoStore);

	persist(alt, storage(localStorage), 'app');

}
