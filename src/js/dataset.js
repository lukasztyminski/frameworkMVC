(function() {

let tooltip = document.querySelector('[data-toggle="tooltip"]');

tooltip.dataset.toggle = 'dupa';
tooltip.removeAttribute('data-toggle');
})();