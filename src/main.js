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
        get: function(){
          return Number(this.getAttribute('count'));
        }
      },
      plus: {
        attribute: {
          boolean: true
        },
        set: function(val, old){
          if (val != this.xtag.plus) {
            this.count = this.count + (val ? 1 : this.xtag.plus ? -1 : 0);
            this.xtag.plus = val
            if (val != old) xtag.fireEvent(this, 'plusone', { detail: val });
          }
        }
      }
    }
  });

})();
