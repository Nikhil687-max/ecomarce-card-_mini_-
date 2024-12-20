document.addEventListener('DOMContentLoaded', () => {
    let selectedProducts = JSON.parse(localStorage.getItem('Selected')) || [];
    if(selectedProducts.length > 0){
        document.getElementById('empty').classList.add('hidden');
        document.getElementById('myCart').classList.remove('hidden');
        selectedProducts.forEach(() => {
            let newSelectedItem = document.createElement('p');
            newSelectedItem.textContent = selectedProducts[selectedProducts.length-1];
            // document.getElementById('selectedProducts').appendChild(newSelectedItem);
            // console.log(newSelectedItem);
            newSelectedItem.style.textAlign = "left";
            let sum = 0;
            let sum2 = 0;
            selectedProducts.forEach((e) => {
                sum += Number(e[e.length-5] + e[e.length-4]);
            })
            selectedProducts.forEach((e) => {
                sum2 += Number(e[e.length-2] + e[e.length-1]
                );
            })
            sum += sum2/100;
            document.getElementById('Totaling').textContent = `Total: $${sum}/-`;
            document.getElementById('selectedProducts').appendChild(newSelectedItem);
        })
    }

    const Products = [
        {id: 1, text: 'Product 1', price: 99.99},
        {id: 2, text: 'Product 2', price: 19.99},
        {id: 3, text: 'Product 3', price: 49.99},
    ]
    Products.forEach((e) => {
        let newListItem = document.createElement('li');
        let newListItemButton = document.createElement('button');
        newListItem.textContent = `${e.text} - ${e.price}`;
        newListItemButton.textContent = 'Add to Cart';
        newListItem.appendChild(newListItemButton);
        newListItemButton.addEventListener('click', () => {
            selectedProducts[selectedProducts.length] = `${e.text} - ${e.price}`;
            // console.log(selectedProducts);
            document.getElementById('empty').classList.add('hidden');
            localStorage.setItem('Selected', JSON.stringify(selectedProducts));
            let newSelectedItem = document.createElement('p');
            newSelectedItem.textContent = selectedProducts[selectedProducts.length-1];
            // document.getElementById('selectedProducts').appendChild(newSelectedItem);
            // console.log(newSelectedItem);
            newSelectedItem.style.textAlign = "left";
            let sum = 0;
            let sum2 = 0;
            selectedProducts.forEach((e) => {
                sum += Number(e[e.length-5] + e[e.length-4]);
            })
            selectedProducts.forEach((e) => {
                sum2 += Number(e[e.length-2] + e[e.length-1]
                );
            })
            sum += sum2/100;
            document.getElementById('Totaling').textContent = `Total: $${sum}/-`;
            document.getElementById('selectedProducts').appendChild(newSelectedItem);
        })
        // console.log(newListItem);
        document.getElementById('productList').appendChild(newListItem);
    })


    document.getElementById('checkout').addEventListener('click', () => 
    {
        console.log(`Checkout of ${document.getElementById('Totaling').textContent} is Successfull`);
        selectedProducts = [];
        localStorage.setItem('Selected',JSON.stringify(selectedProducts));
        document.getElementById('myCart').style.display = "none";
        document.getElementById('empty').classList.remove('hidden');
    })
    // console.log('Gsiss');
})
