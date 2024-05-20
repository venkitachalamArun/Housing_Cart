import express, { Router } from 'express';


import { showCarts, createCart, updateCart, deleteCart} from '../controllers/cart';
const router: Router = express.Router();

//GET Carts
router.get('/getAllCarts', showCarts);
//POST Cart
router.post('/addCart', createCart);
// //UPDATE Carts
router.put('/updateCart/:productId', updateCart)
// // DELETE Carts
router.delete('/deleteCart/:productId', deleteCart);

export default router;