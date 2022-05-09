const fs = require('fs')
const { promises : fsPromises} = fs
const path = require('path')
const yargs = require('yargs')
const shortid = require('shortid');

const contacts = [ 
 
 ]


const contactsPath = path.join(__dirname, './db/contacts.json')


module.exports.listContacts = async function () {
    console.table(await fsPromises.readFile(contactsPath, 'utf-8')); 
}



module.exports.getContactById =  function (contactId) {
    
    const contactById = contacts.find(contact => contact.contactId === contactId)
    console.log(contactById);
}

module.exports.addContact = async function (name, email, phone) {
    console.log(name, email, phone,);
    contacts.push({name : name , contactId : shortid.generate() , email: email , phone : phone })


    await fsPromises.writeFile('./db/contacts.json', JSON.stringify(contacts))
    
}

module.exports.removeContact = async function (contactId) {
  const  contacts = await fsPromises.readFile(contactsPath, 'utf-8')

  const filteredContacts = JSON.parse(contacts).filter(contact => contact.contactId !== contactId)
    await fsPromises.writeFile('./db/contacts.json', JSON.stringify(filteredContacts))
    
}




