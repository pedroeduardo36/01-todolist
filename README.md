Olá, esse projeto criar uma aplicação para solucionar problemas de organização e produtividade do seu dia! Para rodar o projeto siga esses passsos:
1. clone o repositório 
2. Acesse a pasta através do terminal
3. npm install
4. npm run dev

![image](https://github.com/user-attachments/assets/c50350b4-9d59-412e-87ee-c613a9df0637)
![image](https://github.com/user-attachments/assets/c25a1139-5567-4e3f-828e-186cd5755f81)
![image](https://github.com/user-attachments/assets/48d673ea-f68e-4043-9b1e-97e60fba9523)




https://github.com/user-attachments/assets/89aca393-4dd7-4df0-bc9c-814b61f9cda1


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
