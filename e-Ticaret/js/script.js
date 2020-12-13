//Product Load and UI Stream Fetch Api
function getProduct(data,selector) {
    this.data = data
    this.selector = selector;
    fetch(data)
        .then(response => {
            return response.json()
        }).then(products => {
        let html = "";
        products.forEach(product => {
            html += `
             <div class="d-flex">
            <div class="card " style="max-width: 13.97rem; text-align: center ; align-items: center; border-radius:0px  ">
            
        <div class="view overlay mt-2" style="width: 120px; height: 120px; "><img class="card-img" src="${product.img}"></div
        <div class="card-body">
           <div class="card-body text-center"><p style="font-size: 11pt">${product.title}</p></div>
           
            <a class="grey-text">
                <i class="fa fa-star">${product.rating} <span>(${product.comment} Yorum)</span></i>
              </a>
         <small>${product.code}</small>
         <h7 style="color: blue; font-size: 20pt;">
                <b>${product.price} ${product.cur}</b>
              </h7>
              <a><button class="btn btn-primary  " id="productButton" style="height: 100%; width: 13.7rem; border-radius: 0px;">Sepete Ekle</button></a>
        </div>
    </div>
    </div>
    </div>
    `;
        });
        document.querySelector(selector).innerHTML = html;
    })
        .catch(err => {
            console.log(err)
        });
}
//relatedProduct
getProduct("data/bestSeller.json","#relatedProduct");
//bestSeller
getProduct("data/relatedProducts.json","#product-list");

