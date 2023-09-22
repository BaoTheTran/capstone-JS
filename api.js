function Api() {
    this.callApi = function (uri, method, data) {
      var url = "https://64709e2a3de51400f7249feb.mockapi.io";
      return axios({
        url: `${url}/${uri}`,
        method: method,
        data: data,
      });
    };
  }
  