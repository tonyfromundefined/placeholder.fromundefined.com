# 🌈 Icon Placeholder

> by `fromundefined.com`

Default icon generator using the [Open Color](https://yeun.github.io/open-color) palette and [Pretendard](https://cactus.tistory.com/306)

- Extract the color by hashing the given string.
- Inserts the initials of the given string into the icon.
- Supports dark mode
- Supports Hangul (Korean Character)

## How to use

### Basic

```html
<img src="https://placeholder.fromundefined.com/hello">
```
<img src="https://placeholder.fromundefined.com/hello" style="border-radius: .125rem;">


### `?theme=dark`

```html
<img src="https://placeholder.fromundefined.com/hello?theme=dark">
```

<div style="background-color: #212529; padding: 1rem; display: flex; border-radius: .125rem;">
  <img src="https://placeholder.fromundefined.com/hello?theme=dark" style="border-radius: .125rem;">
</div>


### Dark Mode Icon without JavaScript

```html
<picture>
  <source
    srcset="https://placeholder.fromundefined.com/hello?theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://placeholder.fromundefined.com/hello"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img
    decoding="async"
    srcset="https://placeholder.fromundefined.com/hello"
  />
</picture>
```

<picture>
  <source
    srcset="https://placeholder.fromundefined.com/hello?theme=dark"
    media="(prefers-color-scheme: dark)"
  />
  <source
    srcset="https://placeholder.fromundefined.com/hello"
    media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
  />
  <img
    decoding="async"
    id="screenshot"
    srcset="https://placeholder.fromundefined.com/hello"
    style="border-radius: .125rem;"
  />
</picture>
