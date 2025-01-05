import { ValueType } from "realgrid";
 
export const fields = [
  {
    fieldName: "id",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "title",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "description",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "style",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "price",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "installments",
    dataType: ValueType.NUMBER,
  },  
  {
    fieldName: "currencyFormat",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "currencyId",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "availableSizes",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "sku",
    dataType: ValueType.TEXT,
  },
];
 
export const columns = [
  {
    name: "id",
    fieldName: "id",
    width: "40",
    header: {
      text: "id",
    },
  },
  {
    name: "title",
    fieldName: "title",
    width: "80",
    header: {
      text: "title",
    },
  },
  {
    name: "description",
    fieldName: "description",
    width: "150",
    header: {
      text: "description",
    },
  },
  {
    name: "style",
    fieldName: "style",
    width: "220",
    header: {
      text: "style",
    },
  },
  {
    name: "currencyFormat",
    fieldName: "currencyFormat",
    width: "130",
    header: {
      text: "currencyFormat",
    },
  },
  {
    name: "currencyId",
    fieldName: "currencyId",
    width: "130",
    header: {
      text: "currencyId",
    },
  },
  {
    name: "price",
    fieldName: "price",
    width: "130",
    header: {
      text: "price",
    },
  },
  {
    name: "installments",
    fieldName: "installments",
    width: "130",
    header: {
      text: "installments",
    },
  },
  {
    name: "availableSizes",
    fieldName: "availableSizes",
    width: "150",
    header: {
      text: "availableSizes",
    },
  },
  {
    name: "sku",
    fieldName: "sku",
    width: "150",
    header: {
      text: "sku",
    },
  },
];
 
export const rows = [
  {
    Name: "Kessie",
    FullName: "Vijendra N. Raj",
    Email: "mus.Donec.dignissim@Praesent.edu",
    Company: "Arcu Et Pede Incorporated",
    Age: "17",
  },
  {
    Name: "Evelyn",
    FullName: "Hridaynath K. Ismail",
    Email: "fringilla.euismod@elementum.edu",
    Company: "Aliquam Tincidunt Ltd",
    Age: "28",
  },
];