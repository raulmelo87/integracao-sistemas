# Téc de integração de sistemas (Cadastro: Nome e Senha)

## Passo a Passo Completo para Instalar, Configurar e Testar a Aplicação

### 1. Instalar o Node.js e npm
1. **Baixar o Node.js**: Acesse o [site oficial do Node.js](https://nodejs.org/) e baixe a versão LTS (Long Term Support).
2. **Instalar o Node.js**: Durante a instalação, marque a opção para adicionar o Node.js ao **PATH**.
3. **Verificar a instalação**:  
   Abra o terminal e execute:
   ```bash
   node -v   # Verifica a versão do Node.js
   npm -v    # Verifica a versão do npm
   ```

### 2. Clonar o Repositório do GitHub
1. **Obter o link do repositório**: Acesse o repositório da aplicação no GitHub: [GitHub - Raul Melo](https://github.com/raulmelo87/integracao-sistemas)
2. **Clonar o repositório**: No terminal, navegue até o diretório onde deseja salvar o projeto e execute:
   ```bash
   git clone https://github.com/raulmelo87/integracao-sistemas
   ```
3. **Entrar no diretório do projeto**:
   ```bash
   cd integracao-sistemas
   ```

### 3. Instalar as Dependências do Projeto
1. **Instalar dependências**: No diretório do projeto, execute:
   ```bash
   npm install
   ```

### 4. Iniciar o Servidor
1. **Iniciar o servidor**: Execute o comando:
   ```bash
   npm start
   ```
   Se o comando `npm start` não funcionar, tente:
   ```bash
   node server.js
   ```

### 5. Acessar a Aplicação no Navegador
1. **Abrir o navegador**: Acesse a aplicação no navegador:
   ```
   http://127.0.0.1:5000/
   ```

### 6. Testar a Aplicação
1. **Adicionar um usuário**:
   - Preencha o campo "Enter username" com um nome fictício (ex: João Silva).
   - Clique em "Ok" para cadastrar ou "Cancelar" para desistir.
   - Preencha o campo "Enter password" com uma senha fictícia (ex: 12346).
   - Verifique se o usuário foi adicionado à lista de usuários.
2. **Editar um usuário**: Clique em "Edit" ao lado do usuário, altere os dados e clique em "Ok". Verifique se as alterações foram aplicadas.
3. **Remover um usuário**: Clique em "Delete" ao lado do usuário e confirme a exclusão. Verifique se o usuário foi removido da lista.

### 7. Verificar Persistência de Dados (Opcional)
1. **Reiniciar o servidor**:
   - Após adicionar ou editar um usuário, pare o servidor com **Ctrl + C** e reinicie com:
   ```bash
   npm start
   ```
   - Acesse novamente a URL http://127.0.0.1:5000/ e verifique se os dados inseridos continuam na lista

### 8. Finalizar os Testes
1. **Parar o servidor**: Após concluir os testes, pare o servidor pressionando **Ctrl + C**.
