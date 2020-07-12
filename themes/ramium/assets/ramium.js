// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// Google search engine function
function executeQuery() {
  var input = document.getElementById('cse-search-input-box-id');
  var element = google.search.cse.element.getElement('searchresults-only0');
  if (input.value == '') {
    element.clearAllResults();
  } else {
    element.execute(input.value);
  }
  return false;
}

// Social media share
function socialMediaPopUp(url, title, width, height) {
	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);
	window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+ width +', height='+ height +', top=' + top + ', left=' + left);
} 
