// asynchronous

// fetch();
// to make network request to send or receive data from server/
//  GET, POST, PUT and DELETE HTTP

// GET
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
  }),
});

// PUT
fetch("https://api.example.com/users/40", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
  }),
});

// DELETE
fetch("https://api.example.com/users/40", {
  method: "DELETE",
});
