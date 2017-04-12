import Ember from 'ember';

export default Ember.Service.extend({
  items:[],
  latestItem: null,
  total: null,

  add(item){
    this.get('items').pushObject(item);
    this.set('latestItem', item);
  },

  calculateTotal() {
    var newTotal = 0;
    var total = this.get('total');
    var lastItem = this.get('latestItem.cost');

    newTotal = total + lastItem;
    this.set('total', newTotal);
    console.log(this.get('total'));
  }
});
