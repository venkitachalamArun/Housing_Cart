import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../config/data";
import { Dashboard } from '../models/dashboard';
import axios from "axios";
import {
    Body,
    Delete,
    Get,
    JsonController,
    Param,
    Post,
    Put,
    Req,
    Res,
    UseBefore,
    UseInterceptor,
} from "routing-controllers";
import { validate } from "class-validator";
import { DashboardInterceptor } from "../interceptors/dashboardinterceptor";


@JsonController("/houselist")
@UseInterceptor(DashboardInterceptor)
export class DashboardController {
    async listData(@Req() req: Request, @Res() res: Response) {
        try {
            const houselist = await AppDataSource.manager.find(Dashboard);
            return res.status(200).json({
                status: "Successfully retrived the Dashboard Details",
                data: houselist,
            });
        } catch (error: any) {
            return res.status(400).json({
                status: "Failed",
                error: error.message,
            });
        }
    }

    @Put("/:propertyid")
    async updateItem(
        @Param("propertyId") propertyid: number,
        @Req() req: Request,
        @Res() res: Response
    ) {
        try {
            await AppDataSource.manager.update(
                Dashboard,
                { propertyId: propertyid },
                req.body
            );
            const existingItem = await AppDataSource.manager.findOneBy(Dashboard, {
            });
            return res.status(200).json({
                status: "Successful Updated",
                data: existingItem,
            });
        } catch (error: any) {
            return res.status(400).json({
                status: "Failed",
                error: error.message,
            });
        }
    }

    @Delete("/:propertyid")
    async deleteItem(
        @Param("propertyid") propertyid: number,
        @Req() req: Request,
        @Res() res: Response
    ) {
        try {
            const deletedItem = await AppDataSource.manager.delete(Dashboard, {
                propertyId: propertyid,
            });
            return res.status(200).json({
                status: "Successful",
                message: "Item deleted successfully",
            });
        } catch (error: any) {
            return res.status(400).json({
                status: "Failed",
                error: error.message,
            });
        }
    }


}