"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./database/connection");
const app_1 = require("./app");
app_1.app.listen(process.env.PORT || 3333);