import { ValueType } from "realgrid";
 
export const fields = [
  {
    fieldName: "title",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "description",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "price",
    dataType: ValueType.NUMBER,
  },
  {
    fieldName: "style",
    dataType: ValueType.TEXT,
  },
  {
    fieldName: "availableSizes",
    dataType: ValueType.TEXT,
  },
];
 
export const columns = [
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
    name: "price",
    fieldName: "price",
    width: "130",
    header: {
      text: "price",
    },
  },
  {
    name: "availableSizes",
    fieldName: "availableSizes",
    width: "300",
    header: {
      text: "availableSizes",
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