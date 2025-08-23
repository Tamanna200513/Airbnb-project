const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259], 
    },
  },
  {
    title: "Modern Loft in Downtown Tokyo",
    description:
      "Experience the vibrant heart of Tokyo in this stylish and modern loft. Steps away from world-class dining and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Shibuya, Tokyo",
    country: "Japan",
    geometry: {
      type: "Point",
      coordinates: [139.7, 35.659],
    },
  },
  {
    title: "Secluded Mountain Cabin",
    description:
      "Unplug and unwind in this secluded cabin in the Canadian Rockies. Perfect for hiking, fishing, and stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Banff",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },
  {
    title: "Historic Apartment in Rome",
    description:
      "Live like a Roman in this beautiful apartment near the Colosseum. Full of historic charm with modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Rome",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [12.4922, 41.8902],
    },
  },
  {
    title: "Luxury Desert Villa",
    description:
      "Indulge in luxury at this stunning desert villa with a private pool. An oasis of calm with breathtaking dune views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4500,
    location: "Dubai",
    country: "United Arab Emirates",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "Rainforest Treehouse in Costa Rica",
    description:
      "Sleep among the treetops in this unique rainforest treehouse. Wake up to the sounds of howler monkeys and toucans.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501870190084-7f8e3a937579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "La Fortuna",
    country: "Costa Rica",
    geometry: {
      type: "Point",
      coordinates: [-84.6441, 10.4718],
    },
  },
];
module.exports = { data: sampleListings };