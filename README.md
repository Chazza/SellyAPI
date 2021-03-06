# SellyAPI - API Wrapper
I created my own wrapper for the [selly.gg](https://selly.gg) api as I wasn't happy with the current module on the npm store.

To install this, type:
```
npm install sellyapi
```

Usage
```js
var selly = require("sellyapi");
selly.setEmail('your-email');
selly.setKey('api-key');
```

# Functions
| Function  | Description | Default |
| ------------- | ------------- | ------------- |
| ```getPages()```  | Gets total amount of order pages.  | N/A |
| ```getOrders(page)```  | Get list of orders by page.  | 1 |
| ```getOrder(id)```  | Gets order by id.  | N/A |
| ```getProducts()```  | Gets list of products.  | N/A |
| ```getProduct(id)```  | Gets product by id.  | N/A |
| ```getGroups()```  | Gets list of groups.  | N/A |
| ```getGroup(id)```  | Gets group by id.  | N/A |
| ```deletePayment(id)```  | Removes payment by id.  | N/A |
| ```getCoupons()```  | Gets list of coupons.  | N/A |
| ```getCoupon(id)```  | Gets coupon by id.  | N/A |
| ```getQueries()```  | Gets list of queries.  | N/A |
| ```getQuery(id)```  | Gets query by id.  | N/A |

# Example
Here we get the total amount of money made from our store, ensuring we only take orders that are 100% complete.
```js
async function getTotalMade() {
    var total = 0;

    var pages = await selly.getPages();

    for (page = 1; page < pages; page++) {
        var orders = await selly.getOrders(page);
        for (i = 0; i < orders.length; i++) {
            var order = orders[i];
            if(order.status < 100) continue;
            total += parseFloat(order.value);
        }
    }
    console.log(`You've received a total of $${total} from your store.`);
}

getTotalMade();
```