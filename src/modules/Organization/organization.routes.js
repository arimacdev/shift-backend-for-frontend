import { Router } from 'express';
import * as organizationController from './organization.controller';

const routes = new Router();

routes.post('/', [], organizationController.getOrganizationDetails);

export default routes;
