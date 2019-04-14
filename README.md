# SellyAPI - Selly.gg API Wrapper

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