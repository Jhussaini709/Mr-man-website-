// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    // Add active class to clicked link
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
  });
});

// Add event listener to aside section
document.querySelector('aside').addEventListener('click', event => {
  // Toggle aside section
  document.querySelector('aside').classList.toggle('open');
});

// Add event listener to footer
document.querySelector('footer').addEventListener('click', event => {
  // Display copyright information
  alert('Copyright 2024 MR,MAN Phone Parts Supplier. All Rights Reserved.');
});