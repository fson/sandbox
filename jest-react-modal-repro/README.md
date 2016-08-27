Can you test components that use `react-modal` with Jest's snapshot testing?

Because ReactModal renders the contents of the modal to a separate DOM element
that it creates, the snapshot of an element using it will be empty:

```js
exports[`App renders a welcome view 1`] = `<noscript />`;
```

See:
* `src/__tests__/__snapshots__/App-test.js.snap`
* https://github.com/reactjs/react-modal/blob/v1.4.0/lib/components/Modal.js#L50-L55
