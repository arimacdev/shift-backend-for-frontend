import { Router } from 'express';
import * as organizationController from './organization.controller';

const routes = new Router();

routes.get('/', organizationController.getOrganizationDetails);
routes.post('/', organizationController.saveOrganizationDetails);
routes.post('/mobile', organizationController.updateMobileDetails);

export default routes;
