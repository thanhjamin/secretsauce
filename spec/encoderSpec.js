describe("Encoder", function(){
  it("encrypts a string into a url", function(){
    encoder.protect = function(){
      encoder.message = "Hello World";
      encoder.password = "password";
      encoder.encrypt();
    };
    encoder.encrypt = function() {
      cypher = CryptoJS.AES.encrypt(this.message, this.password);
      this.change = CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8);
      return cypher
    };
    encoder.protect();
    expect(encoder.change).toEqual("Hello World");
  });
});
