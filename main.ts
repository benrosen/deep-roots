// plants
// compost/worm castings/gift cards/pottery
// soft goods/hard goods (hard goods is things that are not plants)
// delivery fee fn distance
// installation fee retail <= $275
// purchase price/sale price
// retail price/brokerage(wholesale + 30%)
// google drive data source
// spot on POS

import { createDelivery } from "functions/create-delivery";
import { createOffer } from "./src/functions/create-offer";
import { createOrder } from "./src/functions/create-order";
import { createPrice } from "./src/functions/create-price";
import { createProduct } from "./src/functions/create-product";
import { createSale } from "./src/functions/create-sale";
import { createShipment } from "functions/create-shipment";

const s = createDelivery({
  shipment: createShipment({
    sale: createSale({
      offer: createOffer({
        order: createOrder({
          includeInstallation: true,
          prices: [
            createPrice({
              cost: 1000,
              product: createProduct({
                name: "Flowers",
                description: "Very flowery.",
              }),
            }),
          ],
        }),
      }),
    }),
  }),
});

console.log(s);
