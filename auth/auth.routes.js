const callback1 = () => {
  console.log(">>>> this is callback1");
};
const callback2 = () => {
  console.log(">>>> this is callback2");
};

module.exports = [
  {
    path: "/api",
    callback: callback1,
  },
  {
    path: "/nice",
    callback: callback2,
  },
];
