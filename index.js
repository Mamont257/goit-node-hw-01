const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const contactService = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const contact = await contactService.getContactById(id);
      console.log(contact);
      break;
    case "remove":
      const deleteContact = await contactService.removeContact(id);
      console.log(deleteContact);
      break;
    case "add":
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

const arr = hideBin(process.argv);

const { argv } = yargs(arr);
invokeAction(argv);
