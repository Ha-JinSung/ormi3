console.log("js가 연결되었다");

const data = {
    "id": 1,
    "productName": "버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링",
    "price": 12500,
    "stockCount": 100,
    "thumbnailImg": "asset/img/1/thumbnailImg.jpg",
    "option": [],
    "discountRate": 0,
    "shippingFee": 1500,
    "detailInfoImage": ["asset/detail/2/detail1.png", "asset/detail/2/detail2.png"],
    "viewCount": 0,
    "pubDate": "2022-02-28",
    "modDate": "2022-02-28"
}

const BASE_URL = "http://test.api.weniv.co.kr/";
//const BASEURL = "https://test.api.weniv.co.kr/";
const mainContainer = document.getElementById("main");


//상품 카드 만드는 부분
function createproductCard(imgurl, price, productName) {
    const $productCard = document.createElement("div")
    const $productName = document.createElement("strong");
    const $price = document.createElement("span");
    const $thumbnailImg = document.createElement("img");


    //thumbnailImg.src = BASEURL + data.thumbnailImg;

    $thumbnailImg.src = imgurl;
    $price.innerText = price + "원";
    $productName.innerText = productName;
    $productCard.append(thumbnailImg, productName, price);

    return $productCard;
}
//여기까지
//thumbnailImg.src = BASE_URL + data.thumbnailImg
function main() {
    const productimgurl = BASE_URL + data.thumbnailImg
    const productName = data.productName
    const price = data.price
    const $productCard = createproductCard(productimgurl, productName, mainContainer.appendChild($productCard));
}
main();
// //출력부분
// mainContainer.appendChild(thumbnailImg);
// mainContainer.appendChild(productName);
// mainContainer.appendChild(price);
//여기까지