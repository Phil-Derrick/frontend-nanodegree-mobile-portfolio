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

For instructions on installing Grunt, click [here] (visit http://gruntjs.com/getting-started)

Also, a quick google search for each of the respective tasks eg: grunt-responsive-images, grunt-imagemin etc. will provide easy access to instructions on how to install each of these.

When Completed, just type "Grunt" from the root folder and an optimized/production version of the project stored in the "src" folder will be created in the "dist" folder.

## Part 2: pizza.html - Achieve a sub-5ms time to resize pizzas and 60fps when scrolling

### Time to resize pizzas - optimizations to main.js

Removed variables with constant values from the original for loop within the changePizzaSizes function.

Used getElementsByClassName to rechieve elements, rather than querySelector.

### 60fps while scrolling - - optimizations to main.js

First reduced the number of sliding pizzas generated when the page loads from 200 to 20.

Then made the following alterations to the updatePositions function:

Used getElementsByClassName rather than querySelectorAll to retrieve collection of elements.

Moved expensive phase calculations outside of the original for loop and into a new for loop which pushes the resulting calculations into an array. This array is then called upon from within the original for loop.

Replaced style.left / basicleft with style.transform / translateX & translateZ(0) to reduce the triggering of layout.







