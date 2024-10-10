## Choosing the Web Framework:

### Context and Problem Statement:
AML require a clean user-interface to interact with the system. In order to develop that, we require a front-end
framework to contain all of this code, and render it on the website. 

#### Decision Drivers:
* Clean 

#### Considered Options:

* [NextJS](https://nextjs.org/) - Front-end Web Framework.
* [Nuxt](https://nuxt.com/) - Vue Framework.
* [React](https://react.dev/) - React | Too verbose and messy. 
* [Vue](https://vuejs.org/) Similar to react, verbose and not very maintainable.
* [SvelteKit](https://kit.svelte.dev/) - Web Framework focussed around components and modularity.

### Decision Outcome: 

#### SvelteKit.
Chosen because:

* The majority of our team have experience inside SvelteKit. 
* The documentation and integration of other technologies is also fantastic, although the stack is new, it's very well adopted.
* The modular methodology of SvelteKit allows for easy maintenance and development.
* Global state stops the TS from getting messy and having Memory Race issues.


