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
const mainContainer = document.getElementById("main");

// 상품 카드 만드는 부분
function createProductCard(imgUrl, price, productName, onClick) {
    const $productCard = document.createElement("div");
    const $productName = document.createElement("strong");
    const $price = document.createElement("span");

    $price.innerText = price + "원";
    $productName.innerText = productName;

    $productCard.append($productName, $price);
    $productCard.addEventListener("click", onClick);

    return $productCard;
}

function createProductDetail(imgUrl) {
    const $productDetail = document.createElement("img");
    $productDetail.src = imgUrl;
    return $productDetail;
}

// async/await를 사용한 main 함수
async function main() {
    const productsContainer = document.createElement("div");
    productsContainer.id = "products";
    const detailContainer = document.createElement("div");
    detailContainer.id = "detail";
    mainContainer.appendChild(productsContainer);
    mainContainer.appendChild(detailContainer);

    try {
        const res = await fetch(BASE_URL + "mall");
        const json = await res.json();

        for (const data of json) {
            const productId = data.id;
            const productImgUrl = BASE_URL + data.thumbnailImg;
            const productName = data.productName;
            const price = data.price;

            const onClick = async(e) => {
                detailContainer.innerHTML = "";
                const res = await fetch(BASE_URL + "mall/" + productId);
                const json = await res.json();
                for (const imgUrl of json.detailInfoImage) {
                    const detailImgUrl = BASE_URL + imgUrl;
                    const $productDetail = createProductDetail(detailImgUrl);
                    detailContainer.appendChild($productDetail);
                } //finally{}
            };

            const $productCard = createProductCard(productImgUrl, price, productName, onClick);
            productsContainer.appendChild($productCard);
        }
    } //finally{}
    catch (error) {
        console.error("Error:", error);
    }
}

main();