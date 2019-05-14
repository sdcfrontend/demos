_satellite.pushBlockingScript(function(event, target, $variables){
  /*
* DTM-Type: Sequential Javascript
* DTM-Name: SkyTags Helper Functions
*/

/**
*  Inspects a Prices entity to retrive a specified price type.
*/
var dtmUtils = window.dtmUtils = {}; 

dtmUtils.getPriceByFrequency = function(priceArray, frequency){
    return priceArray.filter( function(price){
        return price.frequency == frequency;
    }).shift()
};

/**
*  Returns a list of products ordered by id.
*/
dtmUtils.getSortedProduct = function(productArray, delimiter){
    var productSorted = productArray.sort( function(prodA, prodB){
        return prodA.id - prodB.id
    });
    
    if (delimiter){
        return productSorted.map(function(lineItem){
            if( lineItem.product ){
                return lineItem.product.id
            } else {
                lineItem.id
            }
        }).filter(function(id){
            return id 
        }).join(delimiter);
    } else {
        return productSorted;
    }
}; 

/** 
* Returns a list of products added in quote. 
*/
dtmUtils.getAddedQuoteProducts = function(quoteProducts){ 
    return quoteProducts.filter(function(quoteItem){
        return quoteItem.quantity > 0 
    });
};

/** 
* Returns a list of products added in quote. 
*/
dtmUtils.getRemovedQuoteProducts = function(quoteProducts){ 
    return quoteProducts.filter(function(quoteItem){
        return quoteItem.quantity < 0 
    });
};

/**
* Calculates Product Arrays
*/

dtmUtils.getProductArrays = function(quote){
    var all_products = quote.products;
    var products_removed = all_products.filter(function(product){ return product.quantity < 0 });
    var products_added = all_products.filter(function(product){ return product.quantity > 0 });

    var products_added_id = products_added.map(function(item) { return item.product.id });
    var products_removed_id = products_removed.map(function(item) { return item.product.id });

    var added_and_removed_ids = products_added_id.filter(function(id) { return products_removed_id.includes(id); })
    var added_and_not_removed_ids = products_added_id.filter(function(id) { return !products_removed_id.includes(id); })
    var removed_and_not_added_ids = products_removed_id.filter(function(id) { return !added_and_removed_ids.includes(id); })

    var added_and_removed = added_and_removed_ids.map(function(id) {
        return products_added.filter(function(item){
            return item.product.id == id
        })[0];
    });

    var added_and_not_removed = added_and_not_removed_ids.map(function(id) {
        return products_added.filter(function(item){
            return item.product.id == id
        })[0];
    });

    var removed_and_not_added = removed_and_not_added_ids.map(function(id) {
        return products_removed.filter(function(item){
            return item.product.id == id
        })[0];
    });

    return {
        'added_and_removed': added_and_removed,
        'added_and_not_removed': added_and_not_removed, 
        'removed_and_not_added': removed_and_not_added
    }
};
});
