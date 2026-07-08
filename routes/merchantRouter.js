import { Router } from 'express';
import * as merchantController from '../controllers/merchantController.js';

const merchantRouter = Router();

merchantRouter.get('/', merchantController.showViewMerchantsPage);
merchantRouter.get('/add-merchant', merchantController.showAddMerchantForm);
merchantRouter.post('/add-merchant', merchantController.addMerchant);
merchantRouter.post('/:merchant_id/delete', merchantController.deleteMerchant);
merchantRouter.get('/:merchant_id/update', merchantController.showUpdateMerchantForm);
merchantRouter.post('/:merchant_id/update', merchantController.updateMerchant);
merchantRouter.get('/:merchant_id/processing-profiles', merchantController.showProcessingProfileForm);
merchantRouter.post('/:merchant_id/processing-profiles', merchantController.addProcessingProfile);
merchantRouter.post('/:merchant_id/processing-profiles/delete', merchantController.deleteProcessingProfile);

export { merchantRouter };