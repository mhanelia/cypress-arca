# desafio-arca

O projeto deve realizar a automatização de testes em um site de anuncios
Foram utilizados neste processo:

  - cypress
  - cypress-file-upload
  - page objects

# Comandos para instalação do cypress e cypress-file-upload:
```sh
  > git init    
  > npm init -y   
  > npm install -D cypress
  > npm install --save-dev cypress-file-upload
```

Dificuldades encontradas:
  - Alguns componentes não possuiam classe ou ID, o que dificultava a sua localização
  - .selectize eu nunca tinha visto então dificultou a realização das assertivas 

Pontos relevantes sobre a segurança:
  - A parte de upload do arquivo não trata os arquivos que são anexados pois basea-se apenas nas extensões, sendo assim, foi possível anexar um shell reverso em php. Não finalizei e não explorei pois não sei como funciona a politica de bugs encontratos em sites da Arca Solutions então preferi não passar desta parte por questões jurídicas, mas como a parte onde anexa entendeu que o shell era um .gif acredito que seria possível a exploração.

