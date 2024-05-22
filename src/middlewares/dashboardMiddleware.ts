import express from "express";

export const DashboardMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Request intercepted by DashboardMiddleware");
  next();
};

export const DashboardMiddlewareCreate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log("Request intercepted by DashboardCreateMiddleware");
  next();
};