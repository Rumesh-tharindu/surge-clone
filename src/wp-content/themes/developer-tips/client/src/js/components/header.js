import $ from "jquery";

export default () => {
  $("#my-btn").on("click", function () {
    console.log("hi");
  });
};
