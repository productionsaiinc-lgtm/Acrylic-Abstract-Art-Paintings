# Acrylic Abstract Art Paintings

Static storefront for original acrylic abstract paintings and custom commission requests.

## Files

- `index.html` - page structure and artwork sections
- `showcase.html` - showcase-only page without prices or checkout controls
- `styles.css` - responsive visual design
- `app.js` - gallery data, filters, inquiry form, and PayPal link generation
- `showcase.js` - visual-only showcase gallery data
- `gallery/` - optimized painting photos used by the deployed site
- `art/` - local original photos, ignored by Git because they are large

## Update Contact And PayPal

Open `app.js` and change the values at the top:

```js
const seller = {
  email: "mel.cormier@mail.com",
  paypalBusinessEmail: "mel.cormier@mail.com",
  currency: "CAD",
};
```

To adjust prices, edit the `prices` array in `app.js`. Prices are in CAD:

```js
const prices = [
  149, 99, 99, 125
];
```

Once a painting has a price and the PayPal email is updated, the PayPal button appears in the artwork preview.

Each artwork card includes a PayPal/card checkout action. While prices or the PayPal business email are missing, the button starts a PayPal invoice request through the contact form. After `price` and `paypalBusinessEmail` are filled in, the same button opens PayPal checkout for that artwork and asks PayPal to show the credit-card billing path when available.

The contact form sends through FormSubmit AJAX instead of opening the visitor's email app. If FormSubmit is unavailable, the site keeps visitors on the page and shows a direct contact message instead of redirecting to the provider outage page. A dedicated backend or email API key is needed to make inquiry sending independent of FormSubmit.

## Shipping

The storefront states that listed artwork prices include standard Canada-wide shipping.

## Deploy On Render

This repo includes `render.yaml` for a Render Static Site.

1. In Render, create a new Blueprint from this GitHub repo.
2. Render will publish the site from the repo root with no build command.
3. Use the assigned Render URL for the live site:
   `https://acrylic-abstract-art-paintings.onrender.com`

Shopify can be used for the storefront and shipping when you are ready to connect products and checkout.
