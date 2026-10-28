Blocking confirmation or short form.
```jsx
<Dialog open title="Delete branch?" onClose={close} actions={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Delete</Button></>}>This cannot be undone.</Dialog>
```
