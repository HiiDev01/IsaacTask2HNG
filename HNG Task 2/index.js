function updateTime(){
  const now = new Date();
  const utcTime = now.toUTCString();
  document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime;
}
updateTime();
setInterval(updateTime, 1000);