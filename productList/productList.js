(function () {
    var mockDatabase = [
        {name: 'The Great Gatsby', price: '5.99', author: 'Fitzgerald, F.Scott', available: true, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/220px-The_Great_Gatsby_Cover_1925_Retouched.jpg'},
        {name: 'Moby Dick', price: '8.99', author: 'Melville, Herman', available: true, image: 'https://m.media-amazon.com/images/I/61qtpOrB8qL._SL500_.jpg'},
        {name: 'Hamlet', price: '4.99', author: 'Shakespeare, William', available: false, image: 'https://ecdn.teacherspayteachers.com/thumbitem/Hamlet-Adapted-Book--3093848-1491238779/original-3093848-1.jpg'},
        {name: 'The Divine Comedy', price: '4.49', author: 'Alighieri, Dante', available: false, image: 'https://i.pinimg.com/originals/7b/eb/41/7beb41d2b7fabbc249240d8a4d4a3eec.jpg'},
        {name: 'The Godfather', price: '7.49', author: 'Puzo, Mario', available: true, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Godfather-Novel-Cover.png/175px-Godfather-Novel-Cover.png'},
        {name: 'The Little Prince', price: '1.99', author: 'Antoine de Saint-Exupéry', available: false, image: 'https://cdn.waterstones.com/bookjackets/large/9781/4052/9781405288194.jpg'},
        {name: 'To Kill a MockingBird', price: '3.49', author: 'Lee, Harper', available: true, image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg'},
        {name: 'Kafka on the Shore', price: '7.99', author: 'Murakami, Haruki', available: false, image: 'http://gimnazija-fgalovic.hr/wp-content/uploads/2019/11/3190fsfp48L._SX321_BO1204203200_.jpg'},
        {name: 'The Catcher in the Rye', price: '2.99', author: 'Salinger, J.D.', available: true, image: 'https://media.thuprai.com/products/91LvoDqkF1L.jpg'},
        {name: 'Pride and Prejudice', price: '8.99', author: 'Austen, Jane', available: true, image: 'https://images-na.ssl-images-amazon.com/images/I/81ukiR5Z2JL.jpg'},
        {name: 'Heart of Darkness', price: '6.49', author: 'Conrad, Joseph', available: false, image: 'http://toughguybookclub.com/storage/app/uploads/public/5ed/b6f/a4e/5edb6fa4ea363791588877.jpg'},
        {name: 'Great Expectations', price: '3.89', author: 'Dickens, Charles', available: true, image: 'https://images.penguinrandomhouse.com/cover/9780451531186'},
        {name: 'The Kite Runner', price: '5.49', author: 'Hosseini, Khaled', available: true, image: 'https://images-na.ssl-images-amazon.com/images/I/51aC4tiXgiL.jpg'},

    ];

    function renderList (results) {
        var contentList= document.querySelector('.content-container .product-container');

        contentList.innerHTML = '';
        var str = '<div class="card">';

        var content = results.map(function (result, index) {
            return str + '<img src='+ result.image +' style="max-height: 70%; width: 100%;" id="image">' + result.name + '<br> ' + result.author + ' <br> Price: ' + result.price + '</div>';
        });

        content.forEach(function (card) {
            contentList.innerHTML += card;
        });

        var tmp = 'renderList';
            console.log(tmp);
    }
    renderList(mockDatabase);

    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'author') ?
            mockDatabase.sort(function (a, b) {
                var nameA = a.author.toUpperCase();
                var nameB = b.author.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a, b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);

    }

    document.querySelector('#orderBy').addEventListener('change', function(event){
        orderBy(event.target.value);
    });

    function priceRange(priceValue){
        var filteredResults = mockDatabase.filter(function (result) {
            return priceValue || result.price < 5;
        });
        renderList(filteredResults);
    }

    document.querySelector('#filterRange').addEventListener('change', function(event){
        var value = event.target.value === 'true';
        priceRange(value);
    });

    function toggleAvailable(showAvailable) {

        var filteredResults = mockDatabase.filter(function (result) {

            return showAvailable || result.available;
        });
        renderList(filteredResults);
    }

    document.querySelector('#available').addEventListener('change', function(event){

        var value = event.target.value === 'true';
        toggleAvailable(value);
    });

})();