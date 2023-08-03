document.addEventListener('DOMContentLoaded', () => {
    const sayHello = (name, language) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let helloMessage = '';
                switch (language) {
                    case 'English':
                        helloMessage = `Hello, ${name}`;
                        break;
                    case 'French':
                        helloMessage = `Bonjour, ${name}`;
                        break;
                    case 'Italian':
                        helloMessage = `Ciao, ${name}`;
                        break;
                    case 'Korean':
                        helloMessage = `Annyeonghaseyo, ${name}`;
                        break;
                    case 'Vietnamese':
                        helloMessage = `Chao, ${name}`;
                        break;
                }
                resolve(helloMessage);
            }, 1000);
        });
    };

    const sayHelloBtn = document.getElementById('sayHelloBtn');
    const helloMessage = document.getElementById('helloMessage');
    sayHelloBtn.addEventListener('click', async () => {
        const name = document.getElementById('name').value;
        const language = document.getElementById('language').value;

        try {
            const message = await sayHello(name, language);
            helloMessage.textContent = message;
        } catch (error) {
            console.error(error);
        }
    });
});
