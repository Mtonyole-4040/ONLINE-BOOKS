$(document).ready(function () {
    $(".add-to-cart").click(function () {
        let title = $(this).data("title");
        let price = $(this).data("price");

        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ title, price });

        localStorage.setItem("cart", JSON