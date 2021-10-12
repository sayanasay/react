const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");

const users = [
  { email: 'admin@gmail.com', password: 'admin' },
  { email: 'user@gmail.com', password: 'user'},
]

let chats = [
  { name: "user1", id: 1 },
  { name: "user2", id: 2 },
  { name: "user3", id: 3 },
  { name: "user4", id: 4 },
  { name: "user5", id: 5 },
];

let messages = [
  { chatIndex: 1, messages: [] },
  { chatIndex: 2, messages: [] },
  { chatIndex: 3, messages: [] },
  { chatIndex: 4, messages: [] },
  { chatIndex: 5, messages: [] },
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.post('/auth', (req, res) => {
  const {email, password} = req.body;
  if (email && password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        return res.json(users[i]);
      }
    };
  }
  res.sendStatus(400);
});

app.get('/chats', (req, res) => {
  res.json(chats);
});

app.post('/chats', (req, res) => {
  const value = req.body;
  chats = [...chats, value];
  res.json(chats);
});

app.delete('/chats', (req, res) => {
  const id = +req.query.id;
  chats = chats.filter((el) => el.id !== id);
  messages = messages.filter((el) => el.chatIndex !== id);
  res.json(chats)
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.post("/messages", (req, res) => {
  const value = req.body;
  if (value.message === null) {
    messages = [...messages, { chatIndex: +value.chatId, messages: [] }];
  } else {
    messages.forEach((el) => {
      if (el.chatIndex === +value.chatId) {
        el.messages = [...el.messages, value.message];
      }
    });
  }
  res.json(messages);
});

app.delete("/messages", (req, res) => {
  const id = +req.query.id;
  chats = messages.filter((el) => el.id !== id);
  res.json(messages)
});

app.listen(3001, () => {
  console.log('server starts')
});