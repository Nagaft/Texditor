const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; 


window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  event.preventDefault();
  deferredPrompt = event;
  butInstall.style.display = 'block';
});


butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);
  butInstall.style.display = 'none';
  deferredPrompt = null;
});


window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
  butInstall.style.display = 'none';
});
