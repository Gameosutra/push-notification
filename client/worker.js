console.log("Service Worker Loaded...");

self.addEventListener('push', e => {
    // const data = e.data.text();
    const data = e.data.json();
    console.log("Push Received",data);
    e.waitUntil(self.registration.showNotification(data.title, {
        body: 'Notified by Manushivam Maheshwari',
        icon: 'https://image.ibb.co/frYOFd/tmlogo.png',
    }))

    // e.waitUntil(self.registration.showNotification(data.title))

    // const promiseChain = self.registration.showNotification('Hello, World.');
    // console.log("promiseChain",promiseChain);
    // e.waitUntil(promiseChain)
});