# List of changes

## Tasks

**Things that must be done**
- [ ] Why does the first click cause a href jump
- [ ] Why does clicking the dots lead to an error when images automatically go to the next phase
- [ ] Video stopping and starting
- [ ] Youtube stopping and starting
- [ ] Show slide has errors

### Past

- [ ] Youtube video does not stop when exited... need javascript
  - [ ] create custom youtube handler

- [ ] Add reference to contributors and vendors, like icons from font-awesome

- [ ] In link view, add padding to description so it doesn't bleed over
  - [ ] Also create more margin between top and bottom links
  - [ ] There is still some media query error on giving enough space on the bottom for popups header and button, its being smushed
  - [ ] Think about giving overflow-y for long images. Make sure default is to have images taken 100% width
  
- [x] remove footer links in phone
- [x] only show the first three links for tab-port in header
- [ ] a links font-size are too small in mobile, make bigger
- [ ] Make images smaller for phone
  - [ ] and then make more padding for the header and url link

- [ ] in link mode, remove heading, and just show image and link

- [ ] speed test = https://developers.google.com/speed/pagespeed/insights/
- [ ] minimize images - https://imagecompressor.com/
- [ ] remove unwanted css

- [ ] Even if link isn't present, still make one to take up space, and hide it

## Completed
- [x] test pdf rendering
- [x] iframe can be
  - [x] a website
  - [x] a video
  - [x] an image
- [x] Banner size is off
- [x] z-index for carousel image is not correct
- [x] Organize sections.yml for caption, heading, etc.
- [x] FIX LEFT RIGHT BUTTONS, to hard to click
- [x] Fix location of toggle switch in z-direction, before footer/heater, and after content
  - [x] Banner back
  - [x] Background > Banner
- [x] Fix package JS name
- [x] Reduced margin on popup text, right side
- [x] Change header-primary typography, it's not being used -> never mind, it's being used
- [x] ^ change naming convention of the banner heading, it's confusing
  - [x] Major change to naming convention of labeling in header.scss and typo.scss
  - [x] Heading is primarily reserved for h1, h2, h3 elements, banner is for the heading, and majority of typogrpahy goes there
- [x] Remove dead files
- [x] Change line height and dimensions of heading in header.scss
- [x] Move favicon to raw, make a placeholder in there
- [x] Fix gulp ignore files `.src(['src/vid/**/*.{mov,webm,mp4}', '!src/vid/raw/*', '!src/vid/drafts/*'])`
  - [x] Need bracket
  - [x] Need glob pattern `*`
- [x] Remove margin top on button
- [x] Update README to incldue imagemagick, ffmpeg, and other tools used to build the website
- [x] Change the favicon being used to cropped
- [x] Change favicon
- [x] NEED TO CHANGE HOW PHOTOS ARE CENTERED AND SCALED
- [x] Added background image to header via style injection
- [x] Make circles smaller
- [x] Remove resources from footer
- [x] Remove JS console.log
- [x] Remove Resource from footer
- [x] Added logic for video, image, or color
- [x] Add gulp handler on image folder
- [x] Added video folder and gulp process
- [x] Gulp .html and .yml search in root dir
- [x] Change footer 100% to nil
- [x] Reorganize folder for raw and dump (no longer needed for dump)
- [x] Add dummy video
- [x] Fixed image bug, need height and width to be strictly specified for figure and image
- [x] sweet scroll offset = 0, not 50px
- [x] Change section-margins to 4rem and 6rem, thinner on the sides
- [x] Close paranthesis in popup blank`
- [x] Add script for compressing files