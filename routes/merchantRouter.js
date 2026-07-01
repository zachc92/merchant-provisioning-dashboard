import { Router } from 'express';
import * as merchantController from '../controllers/merchantController.js';

const merchantRouter = Router();

merchantRouter.get('/', merchantController.showViewMerchantsPage);
merchantRouter.get('/add-merchant', merchantController.showAddMerchantForm);
merchantRouter.post('/add-merchant', merchantController.addMerchant);
merchantRouter.get('/:merchant_id/processing-profiles', merchantController.showProcessingProfileForm);
merchantRouter.post('/:merchant_id/processing-profiles', merchantController.addProcessingProfile);


export { merchantRouter };