# Bootstrap 5 Cheatsheet

## Table of Contents

- [Bootstrap 5 Cheatsheet](#bootstrap-5-cheatsheet)
  - [Table of Contents](#table-of-contents)
    - [Layout](#layout)
      - [Starter Template](#starter-template)
      - [Breakpoints](#breakpoints)
      - [Containers](#containers)
      - [Bootstrap Grid System](#bootstrap-grid-system)

### Layout

#### Starter Template

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

#### Breakpoints

Bootstrap includes six default breakpoints, sometimes referred to as grid tiers, for building responsively.

| Breakpoint        | Class infix | Dimensions |
| :---------------- | :---------: | :--------: |
| X-small           |    None     |  `<576px`  |
| Small             |    `sm`     | `>=576px`  |
| Medium            |    `md`     | `>=768px`  |
| Large             |    `lg`     | `>=992px`  |
| Extra large       |    `xl`     | `>=1200px` |
| Extra extra large |    `xxl`    | `>=1400px` |

- **Understand dimensions**: If device `viewport` is greater than `768` than `medium` and `upper` dimensions `class infix` is work.

#### Containers

Containers are a fundamental building block of Bootstrap that contain, `pad`, and `align` your content within a given device or `viewport`.

 |                    | Extra small <576px | Small ≥576px | Medium ≥768px | Large ≥992px | X-Large ≥1200px | XX-Large ≥1400px |
 | ------------------ | ------------------ | ------------ | ------------- | ------------ | --------------- | ---------------- |
 | `.container`       | 100%               | 540px        | 720px         | 960px        | 1140px          | 1320px           |
 | `.container-sm`    | 100%               | 540px        | 720px         | 960px        | 1140px          | 1320px           |
 | `.container-md`    | 100%               | 100%         | 720px         | 960px        | 1140px          | 1320px           |
 | `.container-lg`    | 100%               | 100%         | 100%          | 960px        | 1140px          | 1320px           |
 | `.container-xl`    | 100%               | 100%         | 100%          | 100%         | 1140px          | 1320px           |
 | `.container-xxl`   | 100%               | 100%         | 100%          | 100%         | 100%            | 1320px           |
 | `.container-fluid` | 100%               | 100%         | 100%          | 100%         | 100%            | 100%             |

```html
<div class="container">
    <!-- content here -->
</div>
```

**Responsive containers**:

Responsive containers allow you to specify a class that is 100% wide until the specified breakpoint is reached, after which we apply max-widths for each of the higher breakpoints. For example, `.container-sm` is `100%` wide to start until the sm breakpoint is reached, where it will scale up with `md`, `lg`, `xl`, and `xxl`.

```html
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

**Fluid containers**:

Use .container-fluid for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
  ...
</div>
```

#### Bootstrap Grid System

```html
<div class="container">
    <div class="row">
        ....
    </div>
</div>
```

```html
<div class="container">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
```

| Class-prefix       | Description                             |
| ------------------ | --------------------------------------- |
| `.col-[1-12]`      | For extra small devices                 |
| `.col-sm-[1-12]`   | For small size devices                  |
| `.col-md-[1-12]`   | For mediums size devices                |
| `.col-lg-[1-12]`   | For large devices                       |
| `.col-xl-[1-12]`   | For extra large devices                 |
| `.col-xxl-[1-12]`  | For extra extra large devices           |
| `.row-cols-[1-12]` | Define how many columns in each row     |
| `.col` `.col`      | Equal width                             |
| `.row-cols-auto`   | Natural width                           |
| `.w-100`           | Force next columns to break to new line |
|                    |                                         |
|                    |                                         |
|                    |                                         |
|                    |                                         |
|                    |                                         |
