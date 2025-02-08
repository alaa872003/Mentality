var products = [
    { productName: 'watch1', productPrice: 2500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch2', productPrice: 3500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch3', productPrice: 4500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch4', productPrice: 5500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch5', productPrice: 6500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch6', productPrice: 7500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch7', productPrice: 8500, productDescription: 'lorem lorem lorem lorem' },
    { productName: 'watch8', productPrice: 9500, productDescription: 'lorem lorem lorem lorem' }
 ];
 
 for (var i = 0; i < products.length; i++) {
   var titleId = "cardTitle" + (i + 1);
   var priceId = "cardPrice" + (i + 1);
   var textId  = "cardText"  + (i + 1);
 
   document.getElementById(titleId).innerHTML = products[i].productName;
   document.getElementById(textId).innerHTML = products[i].productDescription;
   document.getElementById(priceId).innerHTML = "$" + products[i].productPrice;
 }
 