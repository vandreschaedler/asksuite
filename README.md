# Ask Suite - Teste

#### WebCrawler - AskSuite - https://www.asksuite.com/

## Instalação

Clonar repositório => git@github.com:vandreschaedler/asksuite.git
* **Success Response:**

```sh
cd asksuite
npm install
npm run start
```
* **Endpoint para o teste:**

```sh
curl -d "checkin="19/10/2018"&checkout="21/10/2018"" -X POST http://localhost:3000/v1/api/buscar
```

* **Retorno esperado:**

* **Code:** 200 <br />
    **Content:** `{
    "status": true,
    "info": [
        {
            "name": "Luxo - Ala Magique",
            "singlePrice": "R$ 950,00",
            "description": "Uma viagem no tempo! A ala Magique promete agradar especialmente às crianças e adolescentes pela decoração medieval e pela localização b...",
            "images": [
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=167875.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=167874.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166063.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166064.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166065.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166066.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166067.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=166069.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=167875.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=167874.jpg"
            ]
        },
        {
            "name": "Luxo Superior - Ala Magique",
            "singlePrice": "R$ 1.045,00",
            "description": "Contato com a natureza desafios e clima de aventura! A Ala Magique tem decoração medieval e fica situada bem em frente à área de lazer d...",
            "images": [
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195356.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195353.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195354.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195355.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195356.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=195353.jpg"
            ]
        },
        {
            "name": "Luxo",
            "singlePrice": "R$ 1.045,00",
            "description": "Confortavelmente decorado para fazer da sua estadia um momento de prazer e bem-estar. Os quartos da categoria Luxo contam Ar climatizado ...",
            "images": [
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189959.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152620.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152621.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=189959.jpg",
                "https://myreservations.omnibees.com/Handlers/ImageLoader.ashx?sz=250x166&imageID=152620.jpg"
            ]`
