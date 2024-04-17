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
