Vue.config.devtools = true;
window.addEventListener('load', () => {
    new Vue({
        el: '#app1',
        data: {
            message: 'Hello Vue!',
            isLoggedIn: true
        }
    });
window.vue = new Vue({
        el: '#app2',
        data: {
            message: 'Hello Vue!',
            isLoggedIn: true,
            username: 'Emir'
        }
    });
    window.vue = new Vue({
        el: '#app3',
        data: {
            message: '<h1>Hello Vue!</h1>',
            isLoggedIn: true,
            username: 'Emir'
        }
    });
    window.vue = new Vue({
        el: '#app4',
        data: {
            message: 'Hello Vue!',
            isLoggedIn: true,
            username: 'Emir'
        }
    });
});