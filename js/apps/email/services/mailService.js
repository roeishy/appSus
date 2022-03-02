import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';


const MAILS_KEY = 'mails';
// const LOGED_mail_KEY = 'loged mail'
_createMails()


export const mailService = {
    query,
    remove,
    save,
    get,
    createMail,
    // logIn,
    // getLogedmail,
};

function createMail(userId, userName, subject, body, to) {
    var mail = {
        from: {
            userId: userId,
            userName: userName
        },
        subject: subject,
        body: body,
        isRead: false,
        sentAt: Date.now(),
        to: to

    }
    save(mail);
    return mail;
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = [
            createMail('K4syEJr2', 'user2', 'hello user1', 'hello user1', 'user1'),
            createMail('K4syEJr2', 'user2', 'hi user1', 'hi user1', 'user1'),
            createMail('K4syEJr1', 'user1', 'hello user2', 'hello user2', 'user2'),
            createMail('K4syEJr1', 'user1', 'hi user2', 'hi user2', 'user2'),

        ]
        storageService.postMany(MAILS_KEY, mails);
    }
    return mails;
}

function query() {
    return storageService.query(MAILS_KEY);
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function get(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}

function save(mail) {
    if (mail.id) return storageService.put(MAILS_KEY, mail);
    else return storageService.post(MAILS_KEY, mail);
}



// function logIn(mailId) {
//     return storageService.get(MAILS_KEY, mailId)
//         .then(mail => storageService.replace(LOGED_mail_KEY, mail))
// }

// function getLogedmail(mailId) {
//     console.log(mailId);
//     // return storageService.get(LOGED_mail_KEY, mailId)
//     return storageService.query(LOGED_mail_KEY);

// }