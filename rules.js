export let InvalidFName = {
  name: function(value) {
    if (value === "") {
      return "empty";
    } else if (value.length < 3) {
      return "length";
    }
  }
};
export let InvalidLName = {
  name: function(value) {
    if (value === "") {
      return "empty";
    } else if (value.length < 3) {
      return "length";
    }
  }
};

export let InvalidLAdd = {
  add: function(value) {
    if (value === "") {
      return "empty";
    } else if (value.length < 5) {
      return "length";
    }
  }
};

let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export let InvalidEmail = {
  email: function(value) {
    if (value === "") return "empty";
    else if (!filter.test(value)) return "pattern";
  }
};

export let InvalidPhone = {
  phone: function(value) {
    console.log(value);
    if (value === "") return "empty";
    else if (value.length < 10 || value.length > 10) return "size";
  }
};
