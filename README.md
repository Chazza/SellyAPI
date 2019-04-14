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
| Function  | Description |
| ------------- | ------------- |
| ```getPages()```  | Get amount of order pages.  |
| ```getOrders(page)```  | Get orders, defaults to first page if not specified.  |
| ```getOrder(id)```  | Gets order by id.  |
| ```getProducts()```  | Gets list of products.  |
| ```getProduct(id)```  | Gets product by id.  |
| ```getGroups()```  | Gets list of groups.  |
| ```getGroup(id)```  | Gets group by id.  |
| ```deletePayment(id)```  | Removes payment by id.  |
| ```getCoupons()```  | Gets list of coupons.  |
| ```getCoupon(id)```  | Gets coupon by id.  |
| ```getQueries()```  | Gets list of queries.  |
| ```getQuery(id)```  | Gets query by id.  |