# List of changes

## Tasks
- [ ] section and alt handling
- [ ] continue to optimize for file sizes of images and videos
- [ ] Make text fit in popup, or else it pushes the button down
  - [ ] Text decrease to fit its size
- [ ] Global a href text decoration color to some off-shade blue
- [ ] Create reference link, in case iframe doesn't work (annoyingly)
  - [ ] This will mean a new set of logic to handle linkage in the list view and the "learn more" button
  - [ ] Also includes the list link
- [ ] Create new favicon icon (edge on the bottom)
- [ ] Add support for backdrop-filter for popups

### Flex
- [ ] Employ flex  

### Media Queries
- [ ] Media queries
  - [ ] Background image and background cover shade does not fit, could be a fixed height weight problem
  - [ ] Font sizes
  
### Images
- [ ] Image switching, optimization

## Completed
- [x ] Make all hrefs pop up a little
- [x] test pdf rendering
- [x] iframe can be
  - [x] a website
  - [x] a video
  - [x] an image
- [x] Banner size is off (do not make width 100wh)
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