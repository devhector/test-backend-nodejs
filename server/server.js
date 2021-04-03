import express from "express";
import {urlenconded, json} from "body-parser";

const app = express();

app.use(urlenconded({extends: true}));
app.use(json());