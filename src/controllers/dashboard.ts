import { Request, Response } from "express";
import { AppDataSource } from "../config/data";
import {Dashboard} from '../models/dashboard'


export const listData = async (req: Request,res: Response) =>{
    try{
        const dashboards = await AppDataSource.manager.find(Dashboard);
        res.status(200).json({
            status: 'success',
            data: {
                dashboards
            }
          });
    }catch (error: any){
        res.status(400).json({error: error.message})
    }

    
}

export const addItem = async (req: Request, res: Response) => {
    const { propertyname, bhktype, rent, avalablity, preferredtenants,furnishing,parking, propertyid} = req.body;
    try{
        const addHouse = await AppDataSource.manager.create(Dashboard, {propertyname, bhktype, rent, avalablity, preferredtenants,furnishing,parking,propertyid});
        await AppDataSource.manager.save(addHouse);
        res.status(200).json(addHouse);
    }catch(error: any){
        res.status(400).json({error: error.message})
    }
}


export const updateItem = async (req: Request, res: Response) => {
    const propertyid = req.params.propertyid;
    console.log('*******propertyid', propertyid);

    try {
        const existingItem = await AppDataSource.manager.update(Dashboard,{productId: propertyid}, req.body);        
        
        res.status(200).json(existingItem);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
export const deleteItem = async (req: Request, res: Response) => {
    const { propertyid } = req.params;
    try {
        const deletedItem = await AppDataSource.manager.delete(Dashboard, {propertyid: propertyid});
        
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }  
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};