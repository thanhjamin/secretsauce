var encoder = {
        setMessage: function() {
          console.log("messaged stored");
          this.message = document.getElementById('message').value

        },
        getPassword: function() {
          console.log("password");
          this.password = prompt("Give me your password human")

        },
        setUrl: function() {
          console.log("set url");
          this.pass = encoder.encrypt();

        },
        replaceMessageWithUrl: function () {
          console.log("encrypt url");
          document.getElementById('message').value = document.URL.replace("encoder.html", "decode.html").toString() + "?" + this.pass;

        },
        encrypt: function() {
          cypher = CryptoJS.AES.encrypt(this.message, this.password)
          console.log("Verified: " +
            CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
          return cypher
        },
        protect: function() {
          this.setMessage()
          this.getPassword()
          this.setUrl()
          this.replaceMessageWithUrl()
        }
      }
document.getElementById('encrypt').onclick = function() { encoder.protect(); };
