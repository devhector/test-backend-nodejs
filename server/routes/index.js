const {Router} = require('express');
const Product = require('../database/models/product');

const router = Router();

router.route('/products')

    .get((request, response)=>{

        Product.find((error, products) => {

            if(error){

                response.send(error);

            }else{

                response.json(products);

            }

        });

    })

    .post((request, response) => {

        const product = new Product;

        product.title = request.body.title;
        product.description = request.body.description;
        product.price = request.body.price;
        product.category = request.body.category;

        product.save((error)=>{
            if (error){

                response.send(error);

            }else{

                response.json({
                    message: 'Successful registration!'
                });

            }
        });


    });

    

module.exports = router;

