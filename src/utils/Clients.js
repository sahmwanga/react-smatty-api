import API from "./API";
const MYAPI = new API({ url: "https://jsonplaceholder.typicode.com" });

MYAPI.createEntities([
  { name: "users" },
  { name: "posts" },
  { name: "comments" }
]);

export default MYAPI.endpoints;
