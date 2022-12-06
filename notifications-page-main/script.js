const notificationBtn = document.querySelector('.notification-mark-all');
const notificationCount = document.querySelector('.notification-count');
const notificationsNotRead = document.querySelectorAll('.notification-blue');
const notificationsNotReadDots = document.querySelectorAll('.notification-not-read');

const notificationNotReadLength = notificationsNotRead.length;

notificationCount.textContent = notificationNotReadLength;

notificationBtn.addEventListener('click', function () {
  notificationCount.style.display = 'none';
  notificationsNotRead.forEach((notification) => notification.classList.remove('notification-blue'));
  notificationsNotReadDots.forEach((dot) => (dot.style.display = 'none'));
});
