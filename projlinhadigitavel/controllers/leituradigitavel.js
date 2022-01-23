let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let expirationDate =  date + "-" + month + "-" +  year

let amount = 20.00

let barCodeBanco = Math.random().toString().slice(2, 18) + Math.random().toString().slice(2, 18) + Math.random().toString().slice(2, 18)

let barCodeConcessionaria = Math.random().toString().slice(2, 18) + Math.random().toString().slice(2, 18) + Math.random().toString().slice(2, 17)
//Math.floor(Math.random() * 10000000000000000000000000000000000000000000001);

module.exports = app => {
    app.get('/boleto/21290001192110001210904475617405975870000002000', function(req, res){
    res.send({"status": res.statusCode, "barCodeBanco": barCodeBanco, "amount": amount, "expirationDate": expirationDate})
    });

    app.get('/boletoConcessionaria/21290001192110001210904475617405975870000002000', function(req, res){
    res.send({"status": res.statusCode, "barCodeConcessionaria": barCodeConcessionaria, "amount": amount, "expirationDate": expirationDate})
    });
}