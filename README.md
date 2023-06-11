# Boutique de Plantão
![boutique_de_plantao](https://github.com/Vit0rSilveira/Boutique-de-plantao/blob/main/images/logos/logo_completo_fundo.png?raw=true)

## Sobre
Projeto de uma loja online de plantas do Grupo 5 da disciplina de *Introdução ao Desenvolvimento Web (SCC0219)*

### Membros
- André Kenji Hidaka Matsumoto (N°USP 12542689)
- Vitor da Silveira Paula (N°USP 10689651)

## Índice

1. [Requisitos do Projeto](#requisitos-do-projeto)
2. [Descrição do Projeto](#descrição-do-projeto)
3. [Comentários Sobre o Código](#comentários-sobre-o-código)
4. [Plano de Testes](#plano-de-testes)
5. [Resultado dos Testes](#resultado-dos-testes)
6. [Instalação](#instalação)
7. [Dificuldades](#dificuldades)
8. [Comentários](#comentários)

## Requisitos do Projeto
- O sistema deve ter 2 tipos de usuários: Clientes e Administradores.
  - Administradores são responsáveis por registrar/gerenciar administradores, clientes e produtos/serviços fornecidos. O aplicativo já vem com uma conta *admin* com a senha *admin*.
  - Clientes são usuários que acessam o sistema para comprar produtos/serviços.
- O registro do admin inclui, pelo menos: nome, ID, telefone, email.
- O registro de cada cliente inclui, pelo menos: nome, ID, endereço, telefone, email.
Os registros de produtos/serviços incluem, pelo menos: nome, ID, foto, descrição, preço, quantidade (em estoque), quantidade vendida.
- A loja pode vender produtos, serviços ou ambos.
- Venda de Produtos (ou serviços): Os produtos são selecionados, a quantidade escolhida e incluídos em um carrinho. Os produtos são comprados usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade de produto vendido é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados apenas no pagamento ou pelos clientes.
- Gerenciamento de Produtos/Serviços: Os administradores podem criar/atualizar/ler/excluir (crud) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.
- Sua funcionalidade: Crie uma funcionalidade específica para o seu aplicativo. Não precisa ser algo complicado. Por exemplo, se você estiver vendendo carros, pode permitir que os usuários usem um acelerador para ouvir como cada motor de carro ruge.
- O sistema deve fornecer requisitos de acessibilidade e boa usabilidade. O sistema deve ser responsivo, o que significa que deve completar tarefas atribuídas dentro de um tempo razoável.

## Descrição do Projeto

A Boutique de Plantão é uma plataforma online de venda de plantas e produtos relacionados, como vasos e ferramentas de jardinagem. O foco principal é ser uma plataforma simples e de fácil usabilidade, contendo recursos de acessibilidade e interatividade para uma experiência agradável do usuário.

O projeto consiste em um site completo, que inclui front-end, back-end e banco de dados. O frontend da Boutique de Plantão foi desenvolvido utilizando o framework React, uma biblioteca JavaScript de código aberto mantida pelo Facebook. Essa escolha foi feita devido à sua capacidade de criar interfaces de usuário interativas e escaláveis. A interface foi construída com uma abordagem responsiva, utilizando CSS Grid e Flexbox para permitir que o site se adapte a diferentes tamanhos de tela e dispositivos.

O back-end foi construído utilizando o framework Node.js, permitindo a criação de uma API RESTful para gerenciamento de usuários, produtos e pedidos.

### Protótipo
O primeiro passo para fazer o protótipo do projeto, foi criar o [Mockup](https://www.figma.com/file/GlzppZUozmCoYpkpAnXuMg/Loja-de-Plantas?node-id=0-1&t=iYVTj3BoNRpTj6aM-0) de todas as páginas no figma. Em seguida foi elaborado em HTML e CSS 3 páginas, a Homepage, página de login e a página de sobre nós. Por se tratar de um protótipo o carrossel de imagens não foi implementado, foi colocado apenas uma imagem simbolizando o mesmo que no projeto final é feito usando react.

### Funcionalidades
- Cadastro e gerenciamento de administradores e clientes;
- Criação, atualização, leitura e exclusão de novos produtos;

### Diagrama de Navegação
![diagrama_de_navegacao](https://github.com/Vit0rSilveira/Boutique-de-plantao/blob/main/images/relatorio/diagrama_de_navegacao.jpg?raw=true)

## Comentários Sobre o Código

### Frontend

O código da aplicação foi organizado em uma estrutura de pastas para melhorar a sua modularização e facilitar o reaproveitamento de código. 

A estrutura de pastas na pasta `src` é a seguinte:

```
- src
  - components
    - ComponenteA.js
    - ComponenteB.js
    - ComponenteC.js
    - ...
  - pages
    - PaginaA.js
    - PaginaB.js
    - PaginaC.js
    - ...
  - style
    - components
      - ComponenteA.css
      - ComponenteB.css
      - ComponenteC.css
      - ...
    - pages
      - PaginaA.css
      - PaginaB.css
      - PaginaC.css
      - ...
```

A pasta `components` contém os componentes reutilizáveis da aplicação. Cada arquivo nessa pasta representa um componente específico e o nome do arquivo reflete o nome do componente correspondente.

A pasta `pages` contém os arquivos que representam as diferentes páginas da aplicação. Cada arquivo dentro dessa pasta corresponde a uma página específica e geralmente utiliza os componentes da pasta `components` para construir a interface da página.

A pasta `style` é dividida em duas subpastas, `components` e `pages`, para organizar os estilos CSS dos componentes e páginas, respectivamente. Essa separação ajuda a manter os estilos de cada elemento do projeto de forma isolada e mais organizada.

Essa estrutura de pastas facilita a localização dos arquivos necessários para cada componente ou página da aplicação, tornando o desenvolvimento mais eficiente e organizado. O reuso de componentes e a separação clara de estilos também contribuem para um código mais legível e fácil de dar manutenção.

Além disso, foi utilizado o React Bootstrap para implementar o carrossel de imagens na aplicação. O React Bootstrap é uma biblioteca que oferece componentes prontos e estilizados para serem utilizados em projetos React, agilizando o desenvolvimento e garantindo uma aparência consistente.



## Plano de Testes
### Frontend
Durante o desenvolvimento do projeto, foram elaborados planos de testes para garantir a qualidade e o correto funcionamento das funcionalidades. Abaixo estão os testes planejados e realizados:

#### Cadastro de Usuário:

1. Teste de preenchimento dos campos obrigatórios:
   - **Descrição:** Verificar se todos os campos obrigatórios no formulário de cadastro são preenchidos corretamente.
   - **Resultado:** Caso algum campo obrigatório não seja preenchido, exibir um alerta solicitando ao usuário que preencha os campos obrigatórios.

2. Teste de validação do campo de e-mail:
   - **Descrição:** Verificar se o campo de e-mail aceita apenas valores de e-mail válidos.
   - **Resultado:** Caso o valor inserido não seja um e-mail válido, exibir uma mensagem de alerta solicitando ao usuário que insira um e-mail válido.

3. Teste de correspondência entre senha e confirmação de senha:
   - **Descrição:** Verificar se a senha e a confirmação de senha inseridas pelo usuário correspondem.
   - **Resultado:** Caso as senhas não sejam iguais, exibir um alerta indicando que as senhas devem ser idênticas.

#### Login:

1. Teste de validação do campo de login:
   - **Descrição:** Verificar se o campo de login exige um e-mail válido como entrada.
   - **Resultado:** Caso o valor inserido não corresponda a um e-mail válido, exibir um alerta solicitando ao usuário que insira um e-mail válido.

2. Teste de login inválido:
   - **Descrição:** Verificar se o sistema trata corretamente os casos em que o login ou a senha inseridos são inválidos.
   - **Resultado:** Caso o login ou a senha não correspondam a um usuário válido, exibir um alerta informando ao usuário que o login ou a senha são inválidos.

#### Input Number:

1. Teste de campo vazio:
   - **Descrição:** Verificar se o sistema trata corretamente o caso em que o usuário deixa o campo de número vazio.
   - **Resultado:** O sistema não deve permitir que o campo fique vazio e deve registrar o valor como zero.

2. Teste de números negativos:
   - **Descrição:** Verificar se o sistema restringe a entrada de números negativos no campo de número.
   - **Resultado:** Caso o usuário tente inserir um número negativo, o sistema não deve aceitar.

3. Teste de valor nulo:
   - **Descrição:** Verificar se o sistema trata corretamente o caso em que o usuário tenta passar um valor nulo para o campo de número.
   - **Resultado:** O sistema deve registrar o valor como zero caso o usuário tente passar um valor nulo.

#### Rotas:

1. Teste de acesso à página de perfil não logado:
   - **Descrição:** Verificar se o sistema redireciona corretamente um usuário não logado ao tentar acessar a página de perfil.
   - **Resultado:** Caso um usuário não logado tente acessar a página de perfil, o sistema deve redirecioná-lo para a página de login.

2. Teste de acesso restrito à página de administrador:
   - **Descrição:** Verificar se o sistema impede corretamente que um cliente logado acesse a página de administrador.
   - **Resultado:** Caso um cliente logado tente acessar a página de administrador, o sistema não deve permitir o acesso.

3. Teste de acesso restrito ao perfil de cliente:
   - **Descrição:** Verificar se o sistema impede corretamente que um administrador acesse o perfil de cliente.
   - **Resultado:** Caso um administrador tente acessar o perfil de cliente, o sistema não deve permitir o acesso.

## Resultado dos Testes
### Frontend
Os testes foram realizados com sucesso e os seguintes resultados foram obtidos:

- **Cadastro de Usuário:**
  - Todos os campos obrigatórios são devidamente validados e o usuário é alertado caso algum campo esteja em branco.
  - O campo de e-mail aceita apenas valores de e-mail válidos.
  - A correspondência entre a senha e a confirmação de senha é verificada corretamente.

- **Login:**
  - O campo de login exige um e-mail válido como entrada.
  - O sistema trata corretamente os casos de login ou senha inválidos.

- **Input Number:**
  - O campo vazio é tratado corretamente, não permitindo que fique em branco e registrando o valor como zero.
  - A entrada de números negativos é restrita corretamente.
  - O sistema trata adequadamente o caso de valor nulo, registrando-o como zero.

- **Rotas:**
  - O sistema redireciona corretamente um usuário não logado ao tentar acessar a página de perfil.
  - O acesso à página de administrador é devidamente restrito para clientes logados.
  - O acesso ao perfil de cliente é restrito para administradores.

Esses resultados validam o correto funcionamento das funcionalidades e garantem uma melhor experiência para os usuários.

## Instalação
Para instalar e executar corretamente a aplicação, siga os passos abaixo. Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js versão 18.16 LTS
- Vite versão 2.5.1
- npm versão 9.5.1

Após verificar as versões das ferramentas acima, siga as instruções abaixo:

1. Acesse a pasta do frontend no seu terminal:

```bash
cd frontend
```

2. Instale as dependências necessárias executando o seguinte comando:

```bash
npm install
```

Este comando irá baixar e instalar todas as dependências listadas no arquivo `package.json` do projeto.

3. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

Este comando irá iniciar o servidor de desenvolvimento e você poderá acessar a aplicação no seu navegador através do endereço `http://localhost:5173`.

Certifique-se de seguir todos os passos corretamente para garantir uma instalação adequada da aplicação. Caso encontre algum erro ou tenha alguma dificuldade durante o processo, consulte a documentação do Node.js, Vite e npm para obter mais informações e suporte.

## Dificuldades
### Dificuldades no Frontend

Durante o desenvolvimento do frontend, foram encontradas algumas dificuldades, que são listadas abaixo:

- Uso do React: A familiarização com o React foi um desafio inicial, especialmente ao lidar com a construção da página do administrador. Estruturar a lógica para renderizar componentes com base nos botões selecionados exigiu um entendimento mais aprofundado do ciclo de vida do React e do uso de estados.

- Adaptação do Mockup: Seguir fielmente o mockup fornecido pelo design exigiu algumas adaptações. Nem sempre era possível reproduzir exatamente o layout ou as interações propostas, o que exigiu tomar decisões e ajustar o design para garantir a melhor experiência do usuário.

- Responsividade para dispositivos móveis: Criar a responsividade adequada para dispositivos móveis foi um desafio, especialmente quando se tratava de componentes que precisavam alterar o layout de grade para flexbox ou a direção do display flex. Encontrar a melhor abordagem para garantir uma boa experiência em telas menores exigiu testes e ajustes contínuos.

- Nomes significativos para IDs dos elementos HTML: A atribuição de nomes significativos para IDs dos elementos HTML foi uma dificuldade encontrada. Encontrar os nomes adequados que refletissem o propósito e a função de cada elemento era importante para facilitar a manutenção e o entendimento do código.

Essas dificuldades foram superadas com o tempo, aprendizado e a busca por soluções adequadas para cada desafio encontrado.

## Comentários
