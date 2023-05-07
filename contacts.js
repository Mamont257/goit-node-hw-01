const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);
  return contact || null;
}

function removeContact(contactId) {
  // ...твій код
}

async function addContact(data) {
  const contact = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contact.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contact, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
