import express from "express";

const Routes = express();

import { readData } from './module/Read';

Routes.get('/read', readData);

export default Routes;