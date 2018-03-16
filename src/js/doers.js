(function() {

    class TrollKiller {
        constructor(field, restrictedWords) {
            this._field = field;
            this._words = restrictedWords.split(/, */);
            this._regex = new RegExp(`(${this._words.join('|')})`, 'igm');

            this._assignEvents();
        }

        _censorSigns() {  return '!#$%@^'.split('');}

        _assignEvents() {
            this._field.addEventListener('keyup', this._filterMessage.bind(this), false);
        }

        _filterMessage(e) {
            this._field.value = this._field.value.replace(this._regex, function(match){
                return this._censorWord(match);
            }.bind(this));
        }

        _censorWord(word) {
            let censored = '',
                random = 0;
            for(let sign of word) {
                random = Math.round(Math.random() * (this._censorSigns().length - 1 - 0) + 0);
                censored += this._censorSigns()[random];
            }

            return censored;
        }
    }


    const tk = new TrollKiller(
        document.querySelector('[name="your-message"]'),
        'kurka, orzesz ty, wuj, psia kośc, motyla noga, kurwa'
        );

})();