const express = require("express");
const app = express();
const users =[];
app.use(express.json());

app.get("/Hello", (require, response) => {
 response.send("Hello World");
});
app.post('/user', (require, response) => {
  users.push(require.body);
  response.send('Usuario agregado exitosamente');
});
app.get('/users', (require, response) => {
  response.send(users);
});
app.delete("/user/:id", (require, response) => {
    const id = require.params.id;
    const user = users.find((user) => user.id === id);
    users.splice(users.indexOf(user), 1);
    response.send("Usuario eliminado exitosamente");
});

app.put("/user/:id", (require, response) => {
    const id = require.params.id;
    const user = users.find((user) => user.id == id);
    const newPassword = require.body.pwd;
    user.pwd = newPassword;
    response.send("Contraseña actualizada exitosamente");
});

app.listen(3000, () => {
  console.log("Example app con port" + 3000);
});
