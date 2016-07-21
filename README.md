# Website Performance Optimization - frontend-nanodegree-mobile-portfolio
Version 1.0 7/20/2016

## Part 1: index.html - Achieve a pagespeed score of 90+ for mobile/desktop

To start, I used the async attribute on the non-render blocking JS and applied a media query to the non-render blocking CSS.

Then I used the Grunt task-runner to:

1.  Resize images (responsive images task).
2.  Compress images (imagemin task).
3.  Minify JS (uglify task).
4.  Inline critical CSS (critical task).
5.  Minify HTML and CSS (htmlmin and cssmin tasks).

In order to run Grunt for this application on your local machine, you will need to download all the project files. Once you have done this you will need to locally install Grunt and the above-mentioned tasks within the application's root folder. 

For instructions on installing Grunt, head to http://gruntjs.com/getting-started

Also, a quick google search for each of the respective tasks eg: grunt-responsive-images, grunt-imagemin etc. will provide easy access to instructions on how to install each of these.

When Completed, just type "Grunt" from the root folder and an optimized/production version of the project stored in the "src" folder will be created in the "dist" folder.

## Part 2: pizza.html - Achieve a sub-5ms time to resize pizzas and 60fps when scrolling

### Time to resize pizzas - optimizations to main.js

Removed variables with constant values from the original for loop within the changePizzaSizes function.

Used "document.getElementsByClassName" & "document.getElementById" to rechieve elements, rather than "document.querySelector".

### 60fps while scrolling - - optimizations to main.js / style.css

Added the "backface-visibility: hidden" property to the .mover class.

Moved the declaration of the pizzasDiv variable to outside of the for loop that creates and appends the pizzas when the page loads.

<b>Made the following alterations to the updatePositions function:</b>

Used "document.getElementsByClassName" rather than "document.querySelectorAll" to retrieve collection of elements.

Included phase variable in the for loop conditions to prevent it from being created every time the loop is executed. Declared the itemsLen variable outside of the for loop conditions.

Replaced style.left / basicleft with style.transform / translateX & translateZ(0) to reduce the triggering of layout.

<b>Made these changes to the fucntion that appends the sliding pizzas to the page:</b>

Reduced the number of sliding pizzas generated when the page loads from 200 to 24.

Declared the movingPizzas variable outside of the for loop to reduce the DOM calls.

Replaced the line "elem.basicLeft = (i % cols) * s;" with "elem.style.left = (i % cols) * s + 'px';" due to use of transform: TranslateX.











