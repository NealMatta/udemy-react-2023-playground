# 249. What Are Forms & What's Tricky About Them?

-   What's so difficult about forms:
    -   A bit easier is Form Submission
        -   Entered values can be managed vai state or extracted via Refs
    -   Input Validation
        -   Validation on every keystroke or losing focus have their upsides and downsides

# 250. Handling Form Submission

-   `htmlFor` is the same thing as the `for` attribute on label
-   By default, buttons inside of Form elements send a HTTP request when clicked
    -   This is problem
-   Ways to prevent default behavior is by:
    1. setting `type="button"` on the button tag
    2. Add the `onSubmit()` to the form and then call `event.preventDefault()` to the submit

# 251. Managing & Getting User Input via State & Generic Handlers

-   First approach is having a state value and handle state value for every input
-   Second approach is having a state value that has all the input in it stored as an object and then a handle state value with an identifier to figure out which state piece to update
    -   You'd need to use the spread operator and previous values so that previous values are not overwritten

# 252. Getting User Inputs via Refs

-   advantage of using ref is that you'd use less code
-   Downside is that resetting these values is a bit more difficult and if you have a ton of forms, it's a bit more difficult

# 253. Getting Values via FormData & Native Browser APIs

-   FormData object is built into the browser and makes it easy to handle the different values from the form
-   All FormData should have the name prop set on the fields
-   FormData works for a lot of the field types but not all. Specifically radio buttons don't work from what I learned in this section but there may be other values too

# 254. Resetting Forms

-   event.target.reset is a function you can run

# 255. Validating Input on Every Keystroke via State

-   Keystroke validation is only avaiable via States
-   There's a ton of reasons why this would just be the best approach

# 256. Validating Input Upon Lost Focus (Blur)

-   `onBlur` is an event listener for input fields that fires when focus is lost from it

# 257. Validating input upon form submission

-   Refs means you can only validate on only form submission
-   Adding submission based validation is always a good idea even if you're validating via keystroke

# 258. Validating Input via Built-in Validation Props

-   Basically there's built in validation that you can add to inputs

# 260. Building & Using a Reusable Input Component

-
