(function(){

  xtag.register('x-plusone', {
    events: {
      tap: function(){
        this.plus = !this.plus;
      }
    },
    accessors: {
      count: {
        attribute: {
          def: 0
        },
        set: function(val){
          this.xtag.count = Number(val) || 0;
        },
        get: function(){
          return this.xtag.count;
        }
      },
      plus: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          this.count = this.count + (val ? 1 : old ? -1 : 0);
          xtag.fireEvent(this, 'plusone' + (val ? 'added' : 'removed'));
        }
      }
    }
  });

})();
