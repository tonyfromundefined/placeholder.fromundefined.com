# 🌈 Default Icon Generator

> by `fromundefined.com`

Default icon generator using the [Open Color](https://yeun.github.io/open-color) palette and [Pretendard](https://cactus.tistory.com/306)

- Extract the color by hashing the given string.
- Inserts the initials of the given string into the icon.
- Supports dark mode
- Supports Hangul (Korean Character)

## How to use

### Basic

Enter the string needed to express the icon as a path parameter.

```
https://placeholder.fromundefined.com/[string]
```


```html
<img src="https://placeholder.fromundefined.com/hello">
```
<img src="https://placeholder.fromundefined.com/hello" style="border-radius: .125rem;">


### Dark Mode

Append `?theme=dark` param in url

```html
<img src="https://placeholder.fromundefined.com/hello?theme=dark">
```

<img src="./README.dark.svg">


### Dark Mode Icon without JavaScript

Using `<picture>` tag with `prefers-color-scheme`

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
