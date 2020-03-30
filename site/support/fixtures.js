// Products as returned by Shopify
export const shopifyProducts = [
  {
    description: "description 1",
    handle: "handle-1",
    id: "id 1",
    images: [{ src: "src 1" }],
    title: "title 1",
  },
  {
    description: "description 2",
    handle: "handle-2",
    id: "id 2",
    images: [{ src: "src 2" }],
    title: "title 2",
  },
];

// Products as given to frontend (transformed from shopifyProducts above)
export const products = [
  {
    description: "description 1",
    handle: "handle-1",
    id: "id 1",
    src: "src 1",
    title: "title 1",
  },
  {
    description: "description 2",
    handle: "handle-2",
    id: "id 2",
    src: "src 2",
    title: "title 2",
  },
];
