function searchFilter() {
    var searchInput = document.getElementById('search_input').value.toLowerCase();
    var content = document.getElementById('content');
    var items = content.children;
    
    Array.from(items).forEach(function(item) {
      var content = item.textContent.toLowerCase();
      var category = item.dataset.category.toLowerCase();
      
      if (content.includes(searchInput) || category.includes(searchInput)) {
        item.style.display = 'block'
      } else {
        item.style.display = 'none'
      }
    })
  };
  