document.getElementById('portrait').addEventListener('click', function(e) {
  const widths = ['65%', '90%', '80%']
  const menu = document.getElementById('menu');
  // menu.style.display = (menu.style.display == "" || menu.style.display === 'none') ? 'flex' : 'none';

  const lines = menu.getElementsByClassName('menu-line');
  for (let i = 0; i < lines.length; i++) {
    if (lines.item(i).style.width == '0px' || lines.item(i).style.width == '') {
      lines.item(i).style.transition = 'width 1s';
      lines.item(i).style.width = widths[i];

    } else {
      lines.item(i).style.transition = '';
      lines.item(i).style.width = '0px';

    }
  }
    const items = menu.getElementsByClassName('item');
    for (let i = 0; i < items.length; i++) {
      items.item(i).style.opacity = (items.item(i).style.display == '' || items.item(i).style.display === 'none') ? '1' : '0';
      items.item(i).style.transition = (items.item(i).style.display == '' || items.item(i).style.display === 'none') ? 'opacity 2s' : '';
      items.item(i).style.display = (items.item(i).style.display == '' || items.item(i).style.display === 'none') ? 'block' : 'none';
    }
});