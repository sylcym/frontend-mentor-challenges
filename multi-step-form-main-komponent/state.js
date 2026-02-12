export const state = {
  step: 1,
  plan: null,
  billing: "monthly",
  addons: [],
  name: "",
  email: "",
  phone: ""
};

export const PRICES = {
  arcade: { monthly: 9, yearly: 90 },
  advanced: { monthly: 12, yearly: 120 },
  pro: { monthly: 15, yearly: 150 },
  online: { monthly: 1, yearly: 10 },
  storage: { monthly: 2, yearly: 20 },
  profile: { monthly: 2, yearly: 20 }
};

export const LABELS = {
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
  online: "Online service",
  storage: "Larger storage",
  profile: "Customizable profile"
};

export function formatPrice(value, billing, isAddon = false) {
  const suffix = billing === "monthly" ? "mo" : "yr";
  const sign = isAddon ? "+" : "";
  return `${sign}$${value}/${suffix}`;
}

export function calculateTotal(state) {
  if (!state.plan || !PRICES[state.plan]) return 0;

  let total = PRICES[state.plan][state.billing] || 0;

  state.addons.forEach(addon => {
    if (PRICES[addon]) {
      total += PRICES[addon][state.billing] || 0;
    }
  });

  return total;
}
