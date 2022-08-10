export function formatPrice(cents) {
  return (cents).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
}

export function formatToppings(arr) {
  const joined = arr.join(', ');
  return joined.charAt(0).toUpperCase() + joined.slice(1);
}
