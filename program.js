// dropdown

function showDropdown() {
  const Dropdown = document.querySelector('.dropdown_menu');
  Dropdown.style.display = 'flex';
  const toggleBtnClose = document.querySelector('.toggle_btn, .toggle_btn i');
  toggleBtnClose.style.display = 'none';
  const closeBtn = document.querySelector('.close_btn,.close_btn i ');
  closeBtn.style.display = 'block';
}
function hideDropdown() {
  const Dropdown = document.querySelector('.dropdown_menu');
  Dropdown.style.display = 'none';
  const toggleBtnClose = document.querySelector('.toggle_btn, .toggle_btn i');
  toggleBtnClose.style.display = 'block';
  const closeBtn = document.querySelector('.close_btn,.close_btn i ');
  closeBtn.style.display = 'none';
}
