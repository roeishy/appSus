import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';



const KEY = 'keeps';



export const keepService = {
    query,
    remove,
    save,
    get,
    createKeep,
    //logIn,
    getLogedUser,
};

function createKeep(userId, type, isPinned, info, style) {
    var keep = {
        id: utilService.makeId(),
        userId,
        type,
        isPinned,
        info,
        style

    }
    save(keep);
    return keep;
}

function query(userId) {    
     return storageService.query(KEY).then(res=>{
         if(res?.length){
                return res.filter(myKeep=> myKeep.userId === userId) || []
         }else{
            _createKeeps(userId)
         }
     }) 
}

function remove(id) {
    return storageService.remove(KEY, id);
}

function get(id) {
    return storageService.get(KEY, id);
}

function save(keep) {
    if (keep.id) return storageService.put(KEY, keep);
    else return storageService.post(KEY, keep);
}

function _createKeeps(userId) {
    let keeps = utilService.loadFromStorage(KEY);
    if (!keeps || !keeps.length) {
        keeps = [
            createKeep(userId, 'note-img', true, {url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg/800px-Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg', title:'my dog'}, {backgroundColor: 'lightgoldenrodyellow'}),
            createKeep(userId, 'note-txt', false, {txt: 'my name is fares'}, {textAlign: 'center'}),
            createKeep(userId, 'note-todos', false, {label: 'to buy', todos:[{txt:'tomato', doneAt: null}, {txt:'chocolate', doneAt: 18711111}]}, {color: 'orange'}),
            createKeep(userId, 'note-video', true, {url: 'https://www.youtube.com/embed/HnwRA_w6jXo', title:'my village'}, {color: 'blue'})
        ]
        storageService.postMany(KEY, keeps);
    }
    return keeps;
}

// function logIn(userId) {
//     return storageService.get(USERS_KEY, userId)
//         .then(user => storageService.replace(LOGED_USER_KEY, user))
// }

function getLogedUser(userId) {
    console.log(userId);
    // return storageService.get(LOGED_USER_KEY, userId)
    return storageService.query(LOGED_USER_KEY);

}