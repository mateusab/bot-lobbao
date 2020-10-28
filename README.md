<p align="center">
  <img src="https://i.pinimg.com/564x/2d/54/a1/2d54a10e540661b22606e45fc7576871.jpg" width="350">
</p>

## Descrição

Oi! Eu sou o [Lobão](https://github.com/mateusab/bot-lobbao), um bot que foi desenvolvido para ajudar a galera da [GamersClub](https://gamersclub.com.br) se divertir na lobbyzinha da firma!

Minha função é gerenciar, criar e facilitar o processo de sortear os times, dessa forma eles só precisam se preocupar em fazer bonito dentro do servidor!

## Instalação

```bash
$ npm install
```

## Colocando em execução

```bash
$ npm run start
```

Para que você possa de fato testar, é necessário criar um bot e adicionar no seu servidor.

Seu bot vai ter um token onde você deverá colocar em um arquivo .env atribuido a variável TOKEN

[Mais informações sobre criação de um bot](https://www.toptal.com/typescript/dependency-injection-discord-bot-tutorial)

## Comandos

<b>!level</b> registra um level para quem enviou a mensagem. Exemplo: <b>!level 20</b>

- Para que esse comando funcione, o servidor precisa ter as roles registradas (de 0 a 20)

<b>!list</b> lista todas as lobbies abertas. Se quiser ver os jogadores de uma lobby, digite <b>!list nome da lobby</b>.

<b>!create nome da lobby</b> cria uma lobby.

<b>!join nome da lobby</b> entra em uma lobby.

<b>!leave nome da lobby</b> sai de uma lobby.

<b>!clear nome da lobby</b> retira todos os jogadores de uma lobby.

<b>!delete nome da lobby</b> deleta uma lobby.

<b>!start nome da lobby</b> inicia uma lobby e sorteia os times.

## Desenvolvido por

- [@xipslenda](https://twitter.com/xipslenda)