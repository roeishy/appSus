import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';



const KEY = 'keeps';



export const keepService = {
    query,
    remove,
    post,
    get,
    createKeep,
    save,
    getLogedUser,
};

function createKeep(userId, type, isPinned, info,createAt, updateAt, style) {
    console.log('create keep', userId, type, isPinned, info,createAt, updateAt, style);
    var keep = {
        id: utilService.makeId(),
        userId,
        type,
        isPinned,
        info,
        createAt,
        updateAt,
        style

    }
    console.log('keep obj', keep);
    post(keep);
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

function post(keep) {    
    return storageService.post(KEY, keep);
}


function _createKeeps(userId) {
    let keeps = utilService.loadFromStorage(KEY);
    if (!keeps || !keeps.length) {
        keeps = [
            createKeep(
                userId,
                'note-img',
                true,
                {
                    title:'my dog',
                    txt: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg/800px-Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg'                    
                },
                new Date(),
                new Date(),
                {
                    'background-color': 'lightgoldenrodyellow'
                }
                ),
            createKeep(
                userId,
                'note-txt',
                false,
                {
                    title:'what is my name?',
                    txt: 'my name is fares'                    
                },
                new Date(),
                new Date(),
                {
                    'text-align': 'center'
                }
                ),
            createKeep(
                userId,
                'note-todos',
                false,
                {
                    title:'to buy',
                    txt: [
                        {
                            id:utilService.makeId(),
                            todoTxt: 'Tomato',
                            isDone: true,
                            doneAt: null
                        },
                        {
                            id:utilService.makeId(),
                            todoTxt: 'chocolate',
                            isDone: false,
                            doneAt: new Date()
                        },
                        {
                            id:utilService.makeId(),
                            todoTxt: 'Cucumber',
                            isDone: true,
                            doneAt: new Date()
                        },
                        {
                            id:utilService.makeId(),
                            todoTxt: 'Apple',
                            isDone: false,
                            doneAt: null
                        },
                    ]                   
                },
                new Date(),
                new Date(),
                {
                    color: 'blue'
                }
                ),
            createKeep(
                userId,
                'note-video',
                true,
                {
                    title:'my village',
                    txt: 'https://www.youtube.com/embed/HnwRA_w6jXo'                    
                },
                new Date(),
                new Date(),
                {
                    'text-align': 'center'
                }
                )         
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