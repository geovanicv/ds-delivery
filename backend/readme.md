# Backend DS-Delivery

## Sobre 

API desenvolvida em Java com Spring Boot para a aplicação DevSuperior-Delivery (DS-delivery)

### [Deploy Heroku](https://geovanicv-app-deliver.herokuapp.com/)

## Modelo Conceitual
O Modelo conceitual é representado pelas duas classes de domínio Order e Product e um tipo Enumerado para o status do pedido.

![Modelo Conceitual](./assets/modelo-conceitual.png)

## Padrão camadas adotado
Abaixo está representado a padronização adotada no desenvolvimento da aplicação, bem como a integração entre frontend e backend.

![Modelo Conceitual](./assets/camadas.png)

## Executando o projeto em ambiente de test
Para executar o projeto será necessário a instalação das seguintes ferramentas:
- Java 11
- STS4 - IDE Spring Tools Suite

Depois de clonar esse repositório, abra o STS e importe a Aplicação:
```
# Siga o caminho
File -> Import -> Maven -> Existing Maven Projects -> Pesquise o Root Directory -> Finish
# Aguarde a IDE fazer as importações necessárias 
```

Feito a importação, o projeto está configurado para rodar em ambiente de testes utilizando o H2-Console.
```
https://localhost:8080/h2-console
#Se necessário altere o JDBC URL para o mesmo que está no arquivo application-test.properties
```
Pronto, agora basta executar a aplicação e testar os seguintes endpoints: 


| Method | End point | Dados |
| :--- | :---      | :---  |
|GET|  `{{host}}/products`  |  Lista todos os produtos |
|GET| `{{host}}/orders` | Lista todos os pedidos |
|PUT| `{{host}}/orders/{id}/delivered` | Altera o status de um pedido como ENTREGUE |
|POST| `{{host}}/orders` | Cria um novo pedido |

Exemplo de uma requisição POST. É necessário passar o endereço e os produtos:
```
`{
    "address": "Avenida Paulista, 1500",
    "latitude": -25.439787,
    "longitude": -49.237759,
    "products": [
       {
           "id": 2
       },
       {
           "id": 5
       }
    ]
} 
```

---

## Executando em ambiente de desenvolvimento
- Para executar o projeto em ambientede dev será necessário a instalação do PostgresSQL***

Caso deseja executar em ambiente de dev será necessário configurar os dados de Data Source, para isso edite o arquivo application-dev.properties com as credenciais do seu banco 
```
spring.datasource.url=jdbc:postgresql://localhost:5432/nome_database
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha

# Lembre-se de criar a database no seu postgres local***
# Lembre-se de descomentar (penas na primeira execução) as 4 primeiras linhas para que as tabelas sejam geradas automaticamente
```

Antes de executar a aplicação altere o arquivo application.properties e coloque o profile active, que será dev

```
spring.profiles.active=dev
```

---
Made with :purple_heart: by Geovani Cavalcante :wave: [Get in touch!](https://www.linkedin.com/in/geovani-cv/)
