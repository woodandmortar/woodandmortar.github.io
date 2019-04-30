

var app = new Vue({
  el: '#app',
  data: {
    cart: [],
    selling: [
      {
        id: 1,
        image: 'pics/kitchen.png',
        name: 'Basic Kitchen',
        price: 370000,
      },
      {
        id: 2,
        image: 'pics/hinge.jpg',
        name: 'Soft Close Cabinets',
        price: 128000,
      },
      {
        id: 3,
        image: 'pics/countertop.png',
        name: 'Countertops',
        price: 120000,
      },
      {
        id: 4,
        image: 'pics/moulding.png',
        name: 'Crown Moulding',
        price: 70000,
      },
      {
        id: 5,
        image: 'pics/shower.png',
        name: 'Basic Bathroom',
        price: 250000,
      },
      {
        id: 6,
        image: 'pics/bathroom.jpg',
        name: 'Custom Shower',
        price: 150000,
      },
      {
        id: 7,
        image: 'pics/enhance.png',
        name: 'Enhancements',
        price: 100000,
      },
      {
        id: 8,
        image: 'pics/room.jpg',
        name: 'Room Painting',
        price: 50000,
      },
      {
        id: 9,
        image: 'pics/house.png',
        name: 'Exterior Painting',
        price: 200000,
      },
      {
        id: 10,
        image: 'pics/house2.png',
        name: 'Multilevel Painting',
        price: 350000,
      },
    ],
  },
  computed: {
    cartTotal: function () {
      var i;
      var total = 0;

      for (i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price;
      }

      return total;
    },
  },
  methods: {
    addToCart: function (e) {
      var i;
      var item;

      for (i = 0; i < this.selling.length; i++) {
        if (this.selling[i].id == e.target.getAttribute('data-id')) {
          this.cart.push(this.selling[i]);
          break;
        }
      }
    }
  }
});



function checkout() {
  setTimeout(function(){

    window.location.href = 'mailto:woodmortar@gmail.com?&subject=Wood%20and%20Mortar&body=I%20have%20a%20quick%20question%20here%20is%20my%20email%20address%20and%20I%20am%20looking%20forward%20to%20speaking%20with%20you';
  }, 2500);
}
