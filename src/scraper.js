import axios from "axios";
import { load } from "cheerio";

export const digiKalaScraper = async() => {

    const {data} = await axios.get('https://web-scraping.dev/products');

    const $ = load(data);

    $('.product').each((i, el) => {
        const title = $(el).find('.name').text();
        const price = $(el).find('.price').text();

        console.log(title, price);
    });
}