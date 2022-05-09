const argv = require('yargs').argv;
const operations = require('./contacts.js')




// TODO: рефакторить
function invokeAction({ id, name, email, phone, action }, ) {

  switch (action) {
    case 'list':
      operations.listContacts()
      break;

    case 'get':
      operations.getContactById(id)
      break;

    case 'add':
        operations.addContact(name, email,phone)
      break;

    case 'remove':
      operations.removeContact(id)
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv); 