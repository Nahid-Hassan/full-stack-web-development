# HTML, CSS, and Javascript for Web Developers

## Table of Contents

- [HTML, CSS, and Javascript for Web Developers](#html-css-and-javascript-for-web-developers)
  - [Table of Contents](#table-of-contents)
    - [Introduction to HTML5](#introduction-to-html5)
      - [Development Environment Setup](#development-environment-setup)
      - [What is HTML](#what-is-html)
      - [Anatomy of HTML Tag](#anatomy-of-html-tag)
      - [Basic HTML Document Structure](#basic-html-document-structure)
      - [HTML Content Models](#html-content-models)
      - [Lecture-6: Semantic Elements](#lecture-6-semantic-elements)
      - [Lecture-7: List](#lecture-7-list)

### Introduction to HTML5

Learning **HTML** is not hard.

#### Development Environment Setup

- Sign up for an account on `Github.com`
- Google Chrome Browser `CDT`
- Sublime Text 3 Or `Vscode`
- `Git`
- Browser Sync

#### What is HTML

**HTML** - Hyper Text Markup Language

**Hypertext** - Text contains links. One document point another document and another links another.

**Technologies that drive the web**:

- **HTML**(Structure), [talk about component].
- **CSS**(Style), [Color, layout, font size].
- **JavaScript**(Behavior)

#### Anatomy of HTML Tag

```html
<!-- <p>: start tag/opening tag -->
<!-- </p>: end tag/closing tag  --
<!-- p: element name -->
<p> ...content ... </p>
```

Most of the **HTML** tag has `opening` and `closing` tag

But not all. Example:

```html
<!-- br: line break -->
<br>
<!-- hr: horizontal rule -->
<hr>
```

Every **HTML** tag has predefined `attribute`. Example

```html
<!-- attribute: (name = "value") pair -->
<!-- id: attribute name, myId: attribute value -->
<!-- id value should be unique in the whole web page. -->
<p id='myId'></p>
```

**Spacing**:

![images](images/1.png)

**Quotes**:

![images](images/2.png)

#### Basic HTML Document Structure

```html
<!-- must have -->
<!-- html is not case sensitive, so doctype and DOCTYPE is same. -->
<!DOCTYPE html>
<!-- inside <html> ...contain the entire document ... </html> -->
<html lang="en">
<!-- inside <head> ... describe the main content of the entire document ... </head> -->
<head>
    <meta charset="utf-8">
    <!-- title of the page -->
    <title>Coursera is Cool!</title>
</head>
<!-- root content for all the visible tag in the document. Viewport -->
<body>
    <p>Coursera is cool. I'm <span>learning</span> so much!</p>
</body>
</html>
```

#### HTML Content Models

| Block-Level Elements                             | Inline Elements                     |
| ------------------------------------------------ | ----------------------------------- |
| Render to begin on a new line(by default)        | Render on the same line(by default) |
| May contain inline or other block-level elements | May contain other inline elements   |

- HTML5 replaces these definitions with more complex set of content categories.
- However, this distinction remains practical because it aligns well with existing **CSS** rules.

[HTML Content Models](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html)

```html
<!DOCTYPE html>
<html lang='en'>
    <head>
        <meta charset="utf-8">
        <title>div and span elements</title>
    </head>
    <body>
        <!-- div: generic block level element -->
        <div>***DIV 1: Some content here ***</div>
        <div>*** DIV 2: Following right after div 1 ***</div>
        <!-- span: generic inline element -->
        <span>*** SPAN 1: Following right after div 2 ***</span>
        <div>
            *** Div3: Following right after span 1
            <span> *** SPAN 2: INSIDE div 3 ***</span>
            Continue content of div 3 ***
        </div>
    </body>
</html>
```

**Preview Above HTML Code**:

![images](images/3.png)

#### Lecture-6: Semantic Elements

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Heading Elements</title>
</head>
<body>
  <header>
    header element - Some header information goes here. Usually consists of company logo, some tag line, etc. Sometimes, navigation is contained in the header as well.
    <nav>nav (short for navigation) element - Usually contains links to different parts of the web site.</nav>
  </header>
  <h1>Main Heading of the Page (hard not to have it)</h1>
  <section>
    Section 1
    <article>Article 1</article>
    <article>Article 2</article>
    <article>Article 3</article>
  </section>
  <section>
    Section 2
    <article>Article 4</article>
    <article>Article 5</article>
    <article>Article 6</article>
    <div>Regular DIV element</div>
  </section>
  <aside>
    ASIDE - Some information that relates to the main topic, i.e., related posts.
  </aside>

  <footer>
    JHU Copyright 2015
  </footer>
</body>
</html>
```

**Preview**:

![images](images/4.png)

> Heading, section, article, aside & footer are all block level element that's why every element preview in it's own line.

#### Lecture-7: List
