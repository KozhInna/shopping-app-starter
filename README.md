Task:

Create a cartSlice.js that looks almost the same as productSlice.js

It will not have any getProduct in it, or any extra Reducers, these should be empty. It should contain an empty array in initialState that is called cart: [] It will not have any additional logic in there at the moment. You will then need to connect this to the store, and check it in the redux dev tools of your chrome browser

Homework:

Refactor the Cart page to take the cart array from the redux slice and display a page with all of the items in the cart on it.

You can create this behaviour by considering how the Products page shows all products at the moment from the redux slice.

You can even copy the majority of the code.

Think about how you access the data from the redux store. HINT: useSelector.