const contactService = require("./contacts");
// console.log(contactService);

async function invokeAction({ action, name, email, phone }) {
  //   console.log(action);

  switch (action) {
    case "listContacts":
      const allContacts = await contactService.listContacts();
      console.log(allContacts);
      break;

    default:
      break;
  }
}

invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "removeContact", id: "AeHIrLTr6JkxGE6SN-0Rw" });
// invokeAction({ action: "addContact" });

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
