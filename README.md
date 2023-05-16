# Test of `createContext`, `useContext` from `@wordpress/element` doesn't work on `InnerBlocks` in gutenberg custom block

## How to test
- Download this repo.
- Install node packages `npm install`
- Run `npm start`
- Active this plugin name: `Test Context`
- Add block on a page or post name `Context Parent`
- You will see a `console` message on Chrome console panel
- Now add `Context child` as inner block on  `Context Parent` block
- It should show same `console` data passed from parent block.
