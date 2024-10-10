# UI Technolohy Decision

## Context and Problem Statement
With a frontend application things need to be laid out in a neat flow, visually satisfy users, and accessible. CSS is what you use for websites to create UI's, 
however there are frameworks to make it quicker and easier to read and not need 300 lines of CSS and loading these files again and again.

## Descision Drivers
- Need for large CSS files.
- Time spent writing CSS

## Considered Options
- Vanilla CSS
- [Tailwind CSS](https://tailwindcss.com)
- [Bootsrap CSS](https://getbootstrap.com)
- [Materiaize](https://materializecss.com)

## Descision Outcome
[Tailwind CSS](https://tailwindcss.com) was the final decision based on it's high customisation, no pre-built components
creating less shared data between the server and client. Responsive mobile first design with it's utilities being responsive
as well creating well optimised and responsive designs. It's also extremely easy to use with it's shorthand and is well
adpated to [SvelteKit](https://kit.svelte.dev).

## Pros and Cons of Options

### Vanilla Css

#### Pros
- Full Control; No constraints of a framework, freedom to design and strucutre the style of the page.
- Lightweight; No bloat from additional files leading to faster load times.
- Cusotmisable; Create your own components
- No dependancies; No breaking updates or changes from third-party frameworks.
- Lowest level of website UI; You have the control, and understanding of how the the UI is being displayed.

#### Cons
- Time consuming; More time to create complext layouts, more time creating custom components. 
- No pre-built components; No pre-designed components, so you need to style and create components like buttons and modals.
- Consistency; Harder to keep the consistency through different pages.
- Responsiveness; Requires manual design of the responsiveness of the pages, this can cause inconsistency to the responsiveness
  of the UI
- Maintainability; large custom CSS files can be difficult to maintain over time.
- Cross-Browser Issues; you need to make sure your features are available across all platforms.

### [Tailwind CSS](https://tailwindcss.com)

#### Pros
- Utility-First Approach; Allows for inline HTML styling
- Customisation; All utilities are customiseable, no specific design or look to it.
- Small File Size; Removes unused CSS in production buildsm reducing final file size.
- Responsive Design; Built in mobile-first responsive design, creating complex responsive layouts quickly.
- Fits well with [SvelteKit](https://kit.svelte.dev)

#### Cons
- Verbose HTML; Clutter can be created by numerous utility classes, making the HTML harder to maintain.
- 

### - [Bootsrap CSS](https://getbootstrap.com)
