import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart:Ember.inject.service(),
  itemIsClicked:false,

  actions:{
    showItemDetails(){
      this.set('itemIsClicked', true);
    }
  }
});
