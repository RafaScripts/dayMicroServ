import express from "express";

const Routes = express();

import { createData } from './module/create';

Routes.post('/create', createData);

export default Routes;