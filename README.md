### Links

-   Live Site URL: [Click here to see webpage](https://space-tourism-website-eduardionescu.vercel.app/)

# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3).

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for each of the website's pages depending on their device's screen size
-   See hover states for all interactive elements on the page
-   View each page and be able to toggle between the tabs to see new information
-   **BONUS** Key + Swipe control

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [Styled Components](https://styled-components.com/) - For styles
-   TailwindCSS

### What I learned

-   How to use global Layout in Nextjs.
-   How to set up util functions.
-   I've practiced using `react-swipeable`.

```js
const handlers = useSwipeable({
	onSwiped: (eventData) => console.log("User Swiped!", eventData),
	...config,
});
return <div {...handlers}> You can swipe here </div>;
```

### Continued development

-   I want to further improve my Layouts and do more individual Layouts for each page.
-   I want to work on more multi-page apps like this one.
-   Improve keyboard / swipe control.

### Useful resources

-   [Nextjs Layout](https://nextjs.org/learn/basics/assets-metadata-css/layout-component) - Helped me learn how to use Layouts.
-   [React Swipeable](https://www.npmjs.com/package/react-swipeable?activeTab=readme) - Great resource! It makes swiping easy to implement.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
