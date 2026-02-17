import { scrapeProducts } from "./services.js";

export const controller = async(req , res , next ) => {
    try {
        await scrapeProducts();
        res.json({ success: true });
    } catch (error) {
        next(error);
    }
}