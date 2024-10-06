 const products=[

    {image:'https://www.animalpak.com/cdn/shop/files/Omega_2024_1_grande.png?v=1707764087',
     name:'Omega-3 Fish Oil',
     pricerupees: 1200,
     description:'Supports healthy skin, coat, and joint function. Ideal for pets with skin allergies and joint issues.',
     purpose:'Skin and Joint Health',
     quntity:'120 capsules',
     //product1;omega3fishcap


    },

    {image:'https://assets.petco.com/petco/image/upload/f_auto,q_auto/3812995-center-1',
        name:'Multivitamin Chews',
        pricerupees:900 ,
        description:'Provides essential vitamins and minerals to support overall health and well-being.',
       purpose:'General Health',
        quntity:'60 chews',
        //product2;multivitaminchews

   

    },

    {image:'https://m.media-amazon.com/images/I/71NHJn8UsCL._SX679_.jpg ',
        name:'Probiotic Powder',
        pricerupees:1500 ,
        description:'Promotes a healthy digestive system and improves gut health. Suitable for pets with digestive issues.',
        purpose :' Digestive Health',
        quntity:'100gm',
        //product3;probioticpowder

    },

    {image:'https://zestypaws.com/cdn/shop/files/ZP-12oz_Hip-and-Joint-Bites_V3_Render_Front-with-Bites_26da01d8-3964-4941-9258-dee2c6e07650.png?v=1718654057&width=2730 ',
        name:'Glucosamine Joint Supplement',
        pricerupees:  1800,
        description:' Helps maintain healthy joints and cartilage. Ideal for aging pets or those with joint issues.',
        purpose :'Joint Health',
        quntity:'90 tablets',
        //product4;Glucosamine Joint Supplement

    },



 ];



let productsHTML='';












 products.forEach(  (product)  =>{ 
    
    productsHTML =   productsHTML+ `<div class="product-item">
        <img src="${product.image}" >
        <div class="product-content">
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> ₹${product.pricerupees}</p>
            <p><strong>Description:</strong>${product.description}</p>
            <p><strong>Purpose:</strong> ${product.purpose}</p>
            <p><strong>Quantity:</strong> ${product.quntity}</p>
            <a href="addtocart.html" class="add-to-cart-btn">Add to Cart</a>
        </div>
    </div>  `;

   

}   );



console.log(productsHTML);


