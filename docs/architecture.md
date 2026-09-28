# Architecture

```text
Shopify theme/customer events
  -> normalized dataLayer
  -> GTM triggers + variables
  -> GA4 ecommerce events
  -> DebugView / reports
```

The core rule is to build one clean event contract and let GTM consume it instead of duplicating business logic across tags.
