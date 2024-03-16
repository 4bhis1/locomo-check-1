const callback1 = () => {
  console.log(">>>> this is callback1 in routes");
};
const callback2 = () => {
  console.log(">>>> this is callback2 in routes");
};

module.exports = [
  {
    path: "/r-api",
    callback: callback1,
  },
  {
    path: "/r-nice",
    callback: callback2,
  },
];
