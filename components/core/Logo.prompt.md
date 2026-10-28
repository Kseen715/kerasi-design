Kerasi brand lockup (mark + uppercase wordmark); use in headers, footers, splash.
```jsx
<Logo theme="sakura" size={36}/>
<Mark theme="rust" size={24}/>
<Logo mono size={28} wordmark={false}/>
```
- `theme` picks the colour mark (sakura/wine/rust). Wine & rust marks are for light grounds; on dark use sakura or `mono`.
- `theme` defaults to `"auto"`: follows the nearest `[data-theme]`, swapping to lifted on-dark colours for `*-dark` themes. Pass `dark` to force on-dark inside a light theme.
