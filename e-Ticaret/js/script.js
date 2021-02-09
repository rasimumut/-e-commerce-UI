
function getProduct(data, selector) {
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

            <div id="pimg" class="view overlay mt-2" style="width: 120px; height: 120px; "><img class="card-img" src="${product.img}"></div
            <div class="card-body">
            <div id="pname" class="card-body text-center"><p style="font-size: 11pt">${product.title}</p></div>

                <a class="grey-text">
                    <i class="fa fa-star">${product.rating} <span>(${product.comment} Yorum)</span></i>
                </a>
            <small>${product.code}</small>
            <h7 style="color: blue; font-size: 20pt;">
                    <b id="pprice" >${product.price} ${product.cur}</b>
                </h7>
                <a><button class="btn btn-primary urunbuton" onclick="butontiklama(${product.id})" id="${product.price}" value="${product.title}" name="${product.img}"  type="submit" style="height: 100%; width: 13.7rem; border-radius: 0px;">Sepete Ekle</button></a>
            </div>
        </div>
        </div>
        </div>
        `;
        });
        selector.innerHTML = html;
    })
        .catch(err => {
            console.log(err)
        });
}
document
    .querySelectorAll('.widget')
    .forEach((ths, ind) => {
        getProduct(ths.getAttribute('data-uri'), ths);
    });



const archive = [];
function butontiklama(indx) {
    
    const urundata = document.querySelectorAll('.urunbuton')
    let selectedProductImg = urundata[indx].name
    let selectedProductTitle = urundata[indx].value
    let selectedProductPrice = urundata[indx].id
    let productObj = {
        "name": selectedProductTitle,
        "price": selectedProductPrice,
        "img": selectedProductImg
    };
    let prdObj = JSON.stringify(productObj)
    localStorage.setItem(indx,prdObj)
    archive.push(prdObj);
    return indx;
}



function allStorage() {
    for (var i = 0; i < localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }
return archive
}
allStorage()



const cardbtn = document.getElementById('sepet');
cardbtn.addEventListener('click',createCard)

let toplam=0;
function createCard() {
   
    const urunalan = document.querySelector('#sepetTr')
    let html2="";
    let gecici=[];
    for (var i = 0; i < archive.length; i++) {
    let obj = JSON.parse(archive[i])
        sayi = obj.price.toString()*1;
        toplam += sayi
        html2 =`
    <tr id="${i}">
    
    <td><img src="${obj.img}" style="height: 30px"> </td>
    <td style="vertical-align: center">${obj.name}</td>
    <td>${obj.price} TL</td>
    </tr>
    `;
        if (archive[i] !== gecici[i]) {
            urunalan.innerHTML += html2;
        }
        archive[i] = gecici[i]; 


    }
document.querySelector('#cartsum').innerText = toplam+" TL"
    }
document.querySelectorAll('#removeCard').addEventListener('click',removeCard())
function removeCard() {
    for (var i = 0; i < localStorage.length; i++) {
    localStorage.removeItem('i');
}
}














