var expect=require("chai").expect;
var request=require("request");

describe("Add two numbers",function(){
    var url="http://localhost:3000/addNumber/2/3";
    it("returns status 200 if api works",function(done){
        request(url,function(err,res,body){
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    it("returns status 200 within message body",function(done){
        request(url,function(err,res,body){
            body=JSON.parse(body);
            expect(body.statusCode).to.equal(200);
            done();
        });
    });
});