const activefonfig = "production"

const config = {
  dev:{
    url: {
      api: "http://localhost:5000",//local
      assets: "",
      origin: "",
    },
  },
  production:{
    url: {
      api: "https://californian-basin.herokuapp.com",//public
      assets: "",
      origin: "",
    },
  }
}

module.exports = config[activefonfig]