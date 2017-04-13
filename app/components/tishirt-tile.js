import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    addToCart(item) {
      if (confirm('Are you sure you want to add this item to cart?')) {
        this.get('shoppingCart').add(item);
        this.get('shoppingCart').calculateTotal();
      }
    },
  }
});
