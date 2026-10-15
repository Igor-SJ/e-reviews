# E-reviews!

## Conheça o mais novo site de reviews.

E-reviews é um projeto de Web-Design feito por alunos da UniFacens para praticar e aprimorar as habilidades necessárias para o Web Design requeridas pelo mercado de trabalho, sejam elas _soft_ ou _hard skills_, isto é
competências brutas e técnicas na elaboração estrutural e estética do código, no que se diz _soft skills_, ou as habilidades sociais e emocionais necessárias para gerenciar um projeto enquanto se trabalha em grupo.

### Membros do grupo.

O grupo E é composto pelos alunos Gabriel Schiavotto Bezerra, Giovanni Massuela Gerdenits, Igor Santos Justi, José Paulo Roveri de Camargo, e Nicolli Aparecida Zatorre.
Estes são os mesmo que desenvolvem os códigos e elabora as _reviews_ e artigos contidas no website.

## Quais funcionalidades o site possui até agora?

Ele funciona como a página inicial, que direciona para muitas outras, que contém os respectivos artigos e _reviews_. Para atender as necessidades que tal _layout_ e conceito inicial demanda, temos as seguintes funcionalidades:

- Diferentes seções, como o header, que facilitam a navegação pelo site;
- Parte de acesso ao conteúdo de cada respectivo aluno;
- Cards com todos os artigos mais recentes;
- Funcionalidade de pesquisa de acordo com o card;
- Filtro para selecionar os cards que devem ser vistos de acordo com a _tag_;
- Função de adicionar o próprio comentário ou artigo;
- Possibilidade de receber as informações no e-mail;
- Aba de saiba mais que direciona o usuário à esta página do Github;

Além de algumas funcionalidades invisíveis ao usuário, como:

- Separação de arquivos .html, .css e .js;
- Utilização de Flexbox para melhoria estética do site;
- Uso do Trello para prática de Scrum, Kanban, e trabalho em equipe.

### Explicando cada uma delas:

1. O site é dividido em diversas seções, que podem ser acessadas logo no cabeçalho. Cada botão daqueles direciona para uma parte diferente do website. Utilizando um sistema de _ids_ e _hrefs_ internos, é possível 
direcionar o usuários para essas partes com apenas um clique. Por exemplo:
`<a href="#login">
  Inscreva-se
</a>` 

2. Após uma breve seção expositiva sobre o que é o site, há o nome de todos os alunos que toparam escrever resenhas para o site. Ao clicar nelas, o usuário é redirecionado para suas respectivas páginas.

3. Os cards são uma maneira fácil de rapidamente decidir qual artigo o usuário deseja ler, além de ser buscável, divisível, e replicável em centenas, ou até mesmo milhares de cards semelhantes. De maneira
estilizada e compacta, estes pequenos artigos dizem ao leitor tudo que ele precisa saber antes de decidir se um artigo o interessa ou não.

4.  Contudo, os cards não são úteis apenas por si só. Para que eles se tornem eficientes, é necessário adicionar outras funções ao site.
Uma delas é a pesquisa por texto. Ao digitar qualquer coisa em uma barra acima dos cards, por meio de um código de JavaScript, filtra-se apenas os cards que tenham, de alguma maneira ou disposição, as palavras
buscadas pelo usuário.

5. A outra é a funcionalidade de filtragem por tags.
Cada card recebe um tag, isto é, uma categorização de seu conteúdo geral. Por exemplo, se um card é sobre filme, série, ou livro. Com isso, o usuário clica um botão, e imediatamente continuam visíveis apenas os cards
pertinentes a esse filtro, retirando de vista qualquer artigo que não o interesse e deixando-o escolher sem distrações o que ele irá ler a seguir.

6. Para aumentar a interatividade que o site possui com o usuário, foi adicionado uma funcionalidade em que ele pode enviar o próprio comentário ou artigo por meio de uma simples barra de _input_. Assim, ele pode dizer
as próprias opiniões e contribuir com o crescimento do conteúdo do site com anedotas, histórias, críticas construtivas, ou até mesmo mensagens de agradecimento.

7. Caso um usuário realmente adore o conteúdo publicado no site, ele pode optar por receber atualizações em seu e-mail pessoal. Ao registrar uma conta, ele se torna um inscrito oficial, que receberá sempre as
atualizações e novidades direto no e-mail.

8. Por ser, primeiramente, um projeto acadêmico de desenvolvimento web, o projeto tem, no final, uma aba de "saiba-mais", em que o usuário pode se informar sobre a real intenção educacional e lúdica por trás do website.
Nessa mesma seção, ele tem acesso a um link para este repositório do Github, onde poderá acessar todo o código, commits, e o processo criativo por trás dele.

9. Ao separar a programação do site em 3 arquivos diferentes, fica muito mais simples a compreensão do código. O html é para a estrutura do site e seu conteúdo bruto. CSS é para a estilização visual, mas
principalmente estática dele, alterando coisas como cor, formato, tamanho e disposição na tela em relação aos diferentes dispositivos e resoluções de tela. Por último, o JavaScript tem a função de aumentar a
interatividade do site, adicionando funções mais complexas que complementam a experiência do usuário e tornam maior a possibilidade que ele fique por mais tempo na página ou retorne para ela com mais frequência.

10. Flexbox é um dos fatores essenciais do CSS, sendo ele a base da maioria dos websites modernos da Internet. Ele permite que os elementos e objetos em um site se alternem de posição, tamanho e ordem para caber
nas condições determinadas. Graças a esse fator, os celulares podem acessar os mesmos sites que computadores e monitores sem prejudicar o desempenho, acessibilidade ou usabilidade.

11. No ambiente profissional, modelos de organização de projeto como Scrum e Kanban são extremamente valorizados; mas o que são eles?
  - KanBan: Modelo baseado no estado de determinada tarefa, ou seja, se ela já está feita, em progresso, ou a ser feita. É um dos modelos mais simples de organização de times e projetos, ao mesmo tempo que um dos
  mais populares e úteis mundialmente.
  - Scrum: Derivado do KanBan, este modelo de organização de projetos adiciona mais um aspecto: o backlog, em que toda e qualquer ideia é colocada, como em uma lista infinita, e apenas as mais importantes, urgentes,
  ou pertinentes são passadas adiante para serem realmente feitas. Além, disso, com a ajuda de um _Scrum Master_, são feitas _sprints_ e reuniões para decidir quais ideias devem ser colocadas no backlog, quais devem
  ser removidas, e, por fim, quais das ideias no backlog devem ser efetivamente realizadas.
