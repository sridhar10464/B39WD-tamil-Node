db.orders.insertMany([
    {_id:0, productName: "Steel beam", status: "new", quantity: 10},
    {_id:0, productName: "Steel beam", status: "urgent", quantity: 20},
    {_id:0, productName: "Steel beam", status: "urgent", quantity: 30},
    {_id:0, productName: "Iron rod", status: "new", quantity: 15},
    {_id:0, productName: "Iron rod", status: "urgent", quantity: 50},
    {_id:0, productName: "Iron rod", status: "urgent", quantity: 10}
]);

// stage 1
select * from orders where status : "urgent";
[
    {_id:0, productName: "Steel beam", status: "new", quantity: 10},
    {_id:0, productName: "Steel beam", status: "urgent", quantity: 20},
    {_id:0, productName: "Steel beam", status: "urgent", quantity: 30},
    {_id:0, productName: "Iron rod", status: "new", quantity: 15},
    {_id:0, productName: "Iron rod", status: "urgent", quantity: 50},
    {_id:0, productName: "Iron rod", status: "urgent", quantity: 10}
]

//stage 2
select productName as _id, sum(quantity) as totalUrgentQuantity
from orders
where status = "urgent"
gorup by productName

[
    {_id "steel beam", totalUrgentQuantity:50},
    {_id "iron rod", totalUrgentQuantity:60}

]
