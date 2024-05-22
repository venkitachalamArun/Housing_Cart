import express, { Router } from 'express';


import { showCarts, createCart, updateCart, deleteCart} from '../controllers/cart';
const router: Router = express.Router();

//GET Carts
router.get('/showCarts', showCarts);
//POST Cart
router.post('/createCart', createCart);
// //UPDATE Carts
router.put('/updateCart/:propertyId', updateCart)
// // DELETE Carts
router.delete('/deleteCart/:propertyId', deleteCart);

export default router;