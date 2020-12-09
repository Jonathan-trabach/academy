### Application

- Backend (FeathersJS) https://docs.feathersjs.com/

- App (Expo - React Native) https://docs.expo.io/

O backend ja tem autenticação com JWT e websocket em todas as rotas

Pasta devops tem o docker-compose do banco postgresSQL com a pagina de administrador

Para fazer toda a instalação, basta executar o install.sh no /devops


### Criação do banco
Para criar o banco basta logar no localhost:5050 com user@admin.com/123456 e criar o banco `api` que está configurado no `/backend/config/default.json` - `"postgres://postgres:@localhost:5432/api"` ou fazer isso pelo dbeaver
as credenciais do banco estão no docker-compose na pasta `/devops` - POSTGRES_USER: postgres - POSTGRES_PASSWORD: 1234

### Iniciar o backend
Para iniciar o backend basta executar o `npm run dev` na pasta do backend, foi gerado com o CLI do feathers

### Iniciar o App
Para iniciar o app basta executar o `npm run android` na pasta do mobile, foi gerado com o Expo