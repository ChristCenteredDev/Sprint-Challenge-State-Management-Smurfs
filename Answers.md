1. What problem does the context API help solve?
   Context API removes the need to place props on parents & children and makes them available on the context removing the need to prop drill.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions are functions which cause state to change
   Reducers is a function that takes the previous state and an action then returns the new state
   Store allows components to share state
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global and component state is local.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux-think makes async actions
1. What is your favorite state management system you've learned and this sprint? Please explain why!  
   I prefer Context but will use both.
