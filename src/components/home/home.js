/* TO-DO
- Add jQuery img
- Make project images clickable
- Make GitHub logo clickable and add back to top button
- Change colour of navbar links depedning on the section the user is viewing (with fade animation), add anchor/click function
- Finish submit button and error
- Add mail background image to contact section
- Netlify custom success page
- Finish footer
- Add favicon
- Add "view my work" or "scroll down", etc. on home section
- Add green hue and blur filter to navbar?
- Add patterns on sides of section headings (Scale >> Text << Animation with letters of heading slowly changing to a special character/number e.g "A" changing to 4, "o" changing to "0", etc. glow effect )
- Add hover animations on buttons/anchors with glow effect
- Add animations (Scrolling skills, moving dash for profile, typing/slide in animations for home sections/other text?)
- Add interactive background (triangular moving waves top and bottom connected with binary digits, faint binary background with interactivity or binary digits that float and bounce as particles and connect with lines with the cursor) for home section
- Add non-interactive background for other sections (floating and moving binary)
- Make scroll lock to section/change scroll speed
- Make responsive and suitable for mobile
- Check if website looks good on other browsers (firefox, bing, opera, IE, etc.)
- Make page colour changeable? (Sass variable - change lime to $primary-color, manually add colour filters for images, add this feature on the top of page at home section which appears slowly with animation, when user scrolls, it will look like it connects with the navbar)
- Change dash styles to be longer?
- Change demo links to google drive/dropbox, embed videos?
- "Show more" button after adding another project
- SQL, PHP project (full-stack project?)
*/

$(window).scroll(function() {
    if ($(window).scrollTop() > $('.home-overlay').height()) {
        $('#home-cont').hide();
    }
    else {
        $('#home-cont').show();
    }
});