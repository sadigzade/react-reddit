import express from "express";
import ReactDOM from "react-dom/server";
import { App } from "../App";
import { indexHTMLTemplete } from "./indexHTMLTemplete";
import axios from "axios";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/auth", (req, res) => {
  axios
    .post(
      "https://www.reddit.com/api/v1/access_token",
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: "oUVFAQcStwLgEIHcrxurJsH6s24ivw",
        },
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      },
    )
    .then(({ data }) => {
      res.send(indexHTMLTemplete(ReactDOM.renderToString(App()), data["access_token"]));
    })
    .catch(console.log);
});

app.get("*", (req, res) => {
  res.send(indexHTMLTemplete(ReactDOM.renderToString(App())));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
