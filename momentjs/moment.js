function moment() {
  let now = new Date();
  return {
    format: function (date) {
      if (date == "LT") {
        return `${now.getHours()}:${now.getMinutes()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      } else if (date == "LTS") {
        return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      } else if (date == "L" || date == "l") {
        return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
      } else if (date == "LL") {
        return `${now.toLocaleDateString("default", {
          month: "long",
        })} ${now.getDate()}, ${now.getFullYear()}`;
      } else if (date == "ll") {
        return `${now.toLocaleDateString("default", {
          month: "short",
        })} ${now.getDate()}, ${now.getFullYear()}`;
      } else if (date == "LLL") {
        return `${now.toLocaleDateString("default", {
          month: "long",
        })} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      } else if (date == "lll") {
        return `${now.toLocaleDateString("default", {
          month: "short",
        })} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      } else if (date == "LLLL") {
        return `${now.toLocaleString("en-us", {
          weekday: "long",
        })}, ${now.toLocaleDateString("default", {
          month: "long",
        })} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      } else if (date == "llll") {
        return `${now.toLocaleString("en-us", {
          weekday: "short",
        })}, ${now.toLocaleDateString("default", {
          month: "short",
        })} ${now.getDate()}, ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()} ${
          now.getHours() >= 12 ? "PM" : "AM"
        }`;
      }
    },
  };
}
// console.log(moment().format("LT"));
// console.log(moment().format("LTS"));
// console.log(moment().format("L"));
// console.log(moment().format("l"));
// console.log(moment().format("LL"));
// console.log(moment().format("ll"));
// console.log(moment().format("LLL"));
// console.log(moment().format("lll"));
// console.log(moment().format("LLLL"));
// console.log(moment().format("llll"));
