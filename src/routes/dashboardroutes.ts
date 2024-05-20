import express, { Router } from 'express';
const router: Router = express.Router();

import { listData,addItem,updateItem,deleteItem} from '../controllers/dashboard';
//GET List of houses
router.get('/listData', listData);
//POST houses
 router.post('/addItem', addItem);
// //UPDATE houses
 router.put('/updateItem/:propertyId', updateItem)
// // DELETE houses
router.delete('/:propertyId', deleteItem);

export default router;