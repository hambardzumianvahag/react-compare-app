import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fruits: [
    {
      name: "Cherry",
      description: "Three Cherries",
      price: 1.99,
      condition: "Fresh",
      image: "https://pngimg.com/d/cherry_PNG3085.png",
    },
    {
      name: "Orange",
      description: "Giant Orange",
      price: 2.99,
      condition: "Frozen",
      image:
        "https://www.freepnglogos.com/uploads/orange-png/orange-top-view-png-image-pngpix-9.png",
    },
    {
      name: "Nuts",
      description: "Mixed Nuts",
      price: 1.01,
      condition: "Frozen",
      image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c1d8.png",
    },
    {
      name: "Strawberry",
      description: "Just Strawberry",
      price: 1.49,
      condition: "Fresh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/96/Strawberry-icon-1000px.png",
    },
  ],
  selectedFruits: [],
};

export const fruitSlice = createSlice({
  name: "fruit",
  initialState,
  reducers: {
    addFruitToSelection: (state, action) => {
      state.selectedFruits.push(action.payload);
    },
    removeFruitFromSelection: (state, action) => {
      state.selectedFruits = state.selectedFruits.filter(
        (fruit) => fruit.name !== action.payload
      );
    },
  },
});
export const { addFruitToSelection, removeFruitFromSelection } =
  fruitSlice.actions;
export default fruitSlice.reducer;
