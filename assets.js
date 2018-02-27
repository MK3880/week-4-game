Array.prototype.random = function (length) {
          return this[Math.floor((Math.random()*length))];
         }

         var letters = ['a','b','c']
         var chosen_letters = letters.random(letters.length)
         console.log(chosen_letters) 