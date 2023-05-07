const contactService = require("./contacts");
// console.log(contactService);

async function invokeAction({ action, id, name, email, phone }) {
  //   console.log(action);

  switch (action) {
    case "listContacts":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;
    case "getContactById":
      const contact = await contactService.getContactById(id);
      console.log(contact);
      break;
    case "removeContact":
      break;
    case "addContact":
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

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "removeContact", id: "AeHIrLTr6JkxGE6SN-0Rw" });
invokeAction({
  action: "addContact",
  name: "Vova",
  email: "qwerty@mail",
  phone: "25339841",
});

// const fs = require("fs");
// fs.readFile("./db/Test.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// const fs = require("fs").promises;
// // fs.readFile("./db/Test.txt")
// //   .then((data) => console.log(data))
// //   .catch((err) => console.log(err));

// async function app() {
//   //   const buffer = await fs.readFile("./db/Test.txt");
//   //     const text = buffer.toString();

//   // const result = await fs.appendFile("./db/Test.txt", "QWERTYUJNBG");

//   //   const result = await fs.writeFile("./db/Test1.txt", "QWERTYUJNBG");

//   const result = await fs.unlink("./db/Test1.txt");

//   console.log(result);
// }

// app();
