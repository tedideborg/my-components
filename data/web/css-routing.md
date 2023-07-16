A super simple routing trick using css and hashes. Best use with small websites.

#### HTML

```HTML
<main>
	<section id="about"><h1>About</h1></section>
	<!-- Make sure the default view is the last one, as that will be showed when going to the root url "/" -->
	<section id="home"><h1>Home</h1></section>
</main>

```

#### CSS

```CSS
section,
section:target ~ #home {
    display: none;
}

#home,
section:target {
    display: block;
}

```
