import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


const USERS_KEY = 'users';
const LOGED_USER_KEY = 'loged user'
_createusers()


export const userService = {
    query,
    remove,
    save,
    get,
    createUser,
    logIn,
    getLogedUser,
};

function createUser(userName, pass) {
    var user = {
        userName: userName,
        pass: pass,
        mails: [],
        keeps: []
    }
    save(user);
    return user;
}

function query() {
    return storageService.query(USERS_KEY);
}

function remove(userId) {
    return storageService.remove(USERS_KEY, userId);
}

function get(userId) {
    return storageService.get(USERS_KEY, userId);
}

function save(user) {
    if (user.id) return storageService.put(USERS_KEY, user);
    else return storageService.post(USERS_KEY, user);
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