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

6. A outra é a funcionalidade de filtragem por tags.
Cada card recebe um tag, isto é, uma categorização de seu conteúdo geral. Por exemplo, se um card é sobre filme, série, ou livro. Com isso, o usuário clica um botão, e imediatamente continuam visíveis apenas os cards
pertinentes a esse filtro, retirando de vista qualquer artigo que não o interesse e deixando-o escolher sem distrações o que ele irá ler a seguir.


