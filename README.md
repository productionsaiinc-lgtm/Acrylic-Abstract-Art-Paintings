# Acrylic Abstract Art Paintings

Static storefront for original acrylic abstract paintings and custom commission requests.

## Files

- `index.html` - page structure and artwork sections
- `showcase.html` - showcase-only page without prices or checkout controls
- `styles.css` - responsive visual design
- `app.js` - gallery data, filters, inquiry form, shipping section, and PayPal link generation
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

Each artwork card includes a PayPal action. While prices or the PayPal business email are missing, the button starts a PayPal invoice request through the contact form. After `price` and `paypalBusinessEmail` are filled in, the same button opens PayPal checkout for that artwork.

The contact form sends through FormSubmit AJAX instead of opening the visitor's email app. The first live submission may require confirming an activation email sent to `mel.cormier@mail.com`.

## Shipping Rates

The storefront currently shows Canada Post flat-rate box prices in CAD:

- Extra small box, up to 5 kg: `$18.99 CAD`
- Small box, up to 5 kg: `$21.99 CAD`
- Medium box, up to 5 kg: `$24.99 CAD`
- Large box, up to 5 kg: `$32.99 CAD`
- Oversized, extra-insured, or international orders: quoted before checkout

Source: Canada Post flat rate box pricing.

## Deploy On Render

This repo includes `render.yaml` for a Render Static Site.

1. In Render, create a new Blueprint from this GitHub repo.
2. Render will publish the site from the repo root with no build command.
3. Use the assigned Render URL for the live site:
   `https://acrylic-abstract-art-paintings.onrender.com`

Shopify can be used for the storefront and shipping when you are ready to connect products and checkout.
