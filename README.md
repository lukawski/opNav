# opNav
Simple on page navigation. It works with every HTML tag and one level nesting.
## Instalation
`npm install op-nav --save`
## Usage
### Simple navigation
```javascript
var menu = new OPNav('section', 'op-nav')
menu.init()
```
```HTML
<nav id="op-nav">
</nav>

<section data-section="true" data-label="1">
  Content...
</section>

<section data-section="true" data-label="2">
  Content...
</section>

<section data-section="true" data-label="3">
  Content...
</section>

<section data-section="true" data-label="4">
  Content...
</section>
```

### Navigation with one level nesting
```javascript
var menu = new OPNav('section', 'op-nav')
menu.init()
```
```HTML
<nav id="op-nav">
</nav>

<section data-section="true" data-label="1">
  Content...
  <section data-sub-section="true" data-label="1.1">
  Content...
  </section>
</section>

<section data-section="true" data-label="2">
  Content...
</section>

<section data-section="true" data-label="3">
  Content...
</section>

<section data-section="true" data-label="4">
  Content...
</section>
```

## Elements
### JavaScript
#### OPNav(**tag**, **menuID**)
1. ```tag``` - HTML tag
2. ```menuID``` - element ID where navigation will be inserted
#### .init()
Creates navigation.

### HTML
#### data-section="true"
Specify if element should be treated as part of navigation.
#### data-label="anyValue"
Label for navigation.
#### data-sub-section="true"
Specify element that is subsection to his parent element.
