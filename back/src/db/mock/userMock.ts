import { IUser } from "../../models/User";

export const usersMock: Omit<IUser, "id">[] = [
  {
    firstname: "Alice",
    lastname: "Doe",
    password: "aze",
    email: "alice.doe@example.com",
    role: "user",
  },
  {
    firstname: "Bob",
    lastname: "Smith",
    password: "qsd",
    email: "bob.smith@example.com",
    role: "admin",
  },
  {
    firstname: "Charlie",
    lastname: "Brown",
    password: "wxc",
    email: "charlie.brown@example.com",
    role: "manager",
  },
];
