import { createSelector } from "reselect";

const selectorCategoryReducer = state => state.shop;

export const selectCategoriesMemoized = createSelector(
   [selectorCategoryReducer],
   shop => {
      return shop.categories
   },
)

export const selectIsLoading = createSelector(
   [selectorCategoryReducer],
   shop => shop.isLoading
);

export const selectCategories = createSelector(
   [selectCategoriesMemoized],
   (categories) => {
      return categories.reduce(
         (acc, doc) => {
            const { title, items } = doc;
            acc.set(title.toLowerCase(), items);
            return acc;
         },
         new Map()
      )
   }
)