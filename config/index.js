const activefonfig = "dev"

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
      api: "",//public
      assets: "",
      origin: "",
    },
  }
}

module.exports = config[activefonfig]