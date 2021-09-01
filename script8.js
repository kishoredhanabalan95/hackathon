var url = 'http://makeup-api.herokuapp.com/api/v1/products.json';

async function fetchMakeup() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        response.json().then(data => {
            if (!!data && !!data.length) {
                data.forEach(element => {
                    console.log(element.brand, element.name);
                });
                data.forEach(element => {
                    console.log(element.price);
                });
                data.forEach(element => {
                    console.log(element.image_link, element.product_link);
                });
                data.forEach(element => {
                    console.log(element.description);
                });
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

fetchMakeup();
