export let plants = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 100,
    image: null
  },
  {
    id: 2,
    name: "Aloe Vera",
    category: "Medicinal Plants",
    price: 150,
    image: null
  }
];

export function addPlant(newPlant) {
  plants.push({
    id: Date.now(),
    ...newPlant
  });
}

export function deletePlant(id) {
  plants = plants.filter(p => p.id !== id);
}

export function updatePlant(id, updatedData) {

  const index = plants.findIndex(p => p.id == id);

  if (index !== -1) {
    plants[index] = {
      ...plants[index],
      ...updatedData
    };
  }
}