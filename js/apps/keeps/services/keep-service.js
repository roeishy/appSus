import { utilService } from '../../../services/util-service.js';
import { asyncStorageService } from '../../../services/async-storage-service.js';



const KEEPS_KEY = 'keeps';
const USERS_KEY = 'users';

_createKeepss()


export const userService = {
    query,
    remove,
    save,
    get,
    createUser,
    logIn,
    getLogedUser,
};

function createKeep(type, isPinned, info, style) {
    var keep = {
        id: utilService.makeId(),
        type,
        isPinned,
        info,
        style

    }
    save(keep);
    return keep;
}

function query() {
    userService.get()
    return storageService.query(USERS_KEY);
}

function remove(userId) {
    return storageService.remove(USERS_KEY, userId);
}

function get(userId) {
    return storageService.get(USERS_KEY, userId);
}

function save(keep) {
    if (keep.id) return asyncStorageService.put(KEEPS_KEY, keep);
    else return asyncStorageService.post(KEEPS_KEY, keep);
}

function _createusers() {
    let users = utilService.loadFromStorage(USERS_KEY);
    if (!users || !users.length) {
        users = [
            createUser('user1', '111'),
            createUser('user2', '222')
        ]
        storageService.postMany(USERS_KEY, users);
    }
    return users;
}

function logIn(userId) {
    return storageService.get(USERS_KEY, userId)
        .then(user => storageService.replace(LOGED_USER_KEY, user))
}

function getLogedUser(userId) {
    console.log(userId);
    // return storageService.get(LOGED_USER_KEY, userId)
    return storageService.query(LOGED_USER_KEY);

}