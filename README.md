# Boliye marketing website

Static site for the platform (Inferex Pvt Ltd): plain HTML, one stylesheet, a few lines of JavaScript, no build step and no external fonts or scripts.

- `index.html` is the home page (hero, why, how it works, features, trust, pricing, about, FAQ). `start.html` explains who can sign up and how to get started.
- `assets/logo-mark.svg` is the logo mark (a speech bubble with a voice waveform, in the dashboard's indigo); `assets/favicon.svg` is the same file. The wordmark is text in the page.
- Preview: `cd website && python3 -m http.server 5190`, then open http://127.0.0.1:5190/.
- The "Sign in" links point at the dashboard (`https://app.boliye.world/login.html`). If the site and the dashboard end up on different addresses, change those links (search for `boliye.world`).

What the site says that the platform does not do yet: self-serve sign-up, business KYC, the 7-day trial and billing are described as the rules but are **not built** in the platform. `start.html` says registration is being rolled out and onboarding is personal until then. Keep the copy honest about this until they exist. Claims are limited to what the product does and what was tested (see the main README); there are no customer logos, testimonials or statistics.
