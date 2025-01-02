const cron = require("node-cron");
const path = require("path");
const fs = require("fs");

const invoices = require("./data/invoices.json");

const archiveInvoiceTask = () => {
  console.log("Running archive invoices task : ", new Date());
  try {
    const paidInvoices = invoices.filter((item) => {
      return item.status === "paid";
    });

    console.log(paidInvoices);

    if (paidInvoices.length > 0) {
      paidInvoices.forEach((item) => {
        invoices.splice(
          invoices.findIndex((e) => {
            e.status === item.status;
          }),
          1
        );
      });

      console.log("the paid invoices are : " + invoices);

      fs.writeFileSync(
        path.join(__dirname, "./", "data", "invoices.json"),
        JSON.stringify(invoices),
        "utf-8"
      );

      fs.writeFileSync(
        path.join(__dirname, "./", "data", "archive.json"),
        JSON.stringify(paidInvoices),
        "utf-8"
      );
    }
  } catch (err) {
    console.log(err);
  }
  console.log("Archive invoices task ended");
};

cron.schedule("*/10 * * * * * ", archiveInvoiceTask);
