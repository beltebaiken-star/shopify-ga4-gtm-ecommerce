const events = [
  { event: "view_item", ecommerce: { currency: "USD", value: 39, items: [{ item_id: "SKU-1", price: 39, quantity: 1 }] } },
  { event: "add_to_cart", ecommerce: { currency: "USD", value: 39, items: [{ item_id: "SKU-1", price: 39, quantity: 1 }] } },
  { event: "begin_checkout", ecommerce: { currency: "USD", value: 39, items: [{ item_id: "SKU-1", price: 39, quantity: 1 }] } },
  { event: "purchase", ecommerce: { transaction_id: "DEMO-ORDER-1", currency: "USD", value: 39, items: [{ item_id: "SKU-1", price: 39, quantity: 1 }] } }
];

const expected = ["view_item", "add_to_cart", "begin_checkout", "purchase"];
const actual = events.map((x) => x.event);
if (JSON.stringify(actual) !== JSON.stringify(expected)) throw new Error("Unexpected event sequence: " + actual.join(" -> "));
for (const e of events) {
  if (!e.ecommerce || !e.ecommerce.currency || !Array.isArray(e.ecommerce.items)) throw new Error("Invalid payload for " + e.event);
}
if (!events[events.length - 1].ecommerce.transaction_id) throw new Error("Purchase requires transaction_id");
console.log("PASS:", actual.join(" -> "));
