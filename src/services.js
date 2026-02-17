import { digiKalaScraper } from "./scraper.js";

export const scrapeProducts = async () => {

    const products = await digiKalaScraper();

    if (!products.length) return;

    await saveMany(products);
}