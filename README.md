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
  email: "your-email@example.com",
  paypalBusinessEmail: "your-paypal-email@example.com",
  currency: "USD",
};
```

To add prices, set the `price` field for an artwork from `null` to a number:

```js
price: 125,
```

Once a painting has a price and the PayPal email is updated, the PayPal button appears in the artwork preview.

## Shipping Rates

The storefront currently shows these editable flat rates:

- Small paintings, up to 12 x 12 inches: `$10`
- Medium paintings, up to 18 x 24 inches: `$18`
- Large paintings, up to 24 x 36 inches: `$35`
- Oversized or international orders: quoted before checkout

## Deploy On Render

This repo includes `render.yaml` for a Render Static Site.

1. In Render, create a new Blueprint from this GitHub repo.
2. Render will publish the site from the repo root with no build command.
3. In Render's custom domain settings, replace `acrylicabstractart.com` with your real domain if different.
4. Add the DNS records Render gives you at your domain registrar.

The domain in `render.yaml` is a placeholder and should be changed before production if you have a different domain.
