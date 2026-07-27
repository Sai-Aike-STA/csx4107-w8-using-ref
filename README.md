# Web Dev Week 8

This is a practice repo for week8 of CSX4107 Web Dev. It is not an assignment submission.  
Practice: **Using Ref**

Local repo name: `csx4107-w8-using-ref`

## What this repo demonstrates

The app contains three small examples:

1. `Demo01-MutableRef.jsx` compares a normal variable with a persistent mutable ref.
2. `Demo02-InputRef.jsx` shows how one ref can access an input DOM element.
3. `Demo03-CheckboxRefArray.jsx` shows how callback refs can store several checkbox elements in an array.

Each example has a working demo followed by notes that explain the important code, similar to the Week 5 jQuery reference demos.

## Main ref pattern

```jsx
const elementRef = useRef(null)
```

- A ref is an object with a `current` property.
- A ref keeps its value between renders.
- Changing `current` does not cause React to render again.
- A ref can hold a DOM element, timer ID, previous value, or another mutable value.

When a ref is connected to an element, React stores the DOM element in `current`:

```jsx
<input ref={elementRef} />
```

The DOM element can then be accessed through the ref:

```jsx
elementRef.current.focus()
elementRef.current.value
```

## Ref and state have different jobs

State is used for data that must update the rendered UI. A ref is used for a persistent value or DOM element that does not need to trigger a render.

The checkbox demo uses refs to read the checkbox elements and state to display the final selected values.

## Run the practice app

```bash
npm install
npm run dev
```

## Build the static app

```bash
npm run build
```
