const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', function(event) {
    const { target } = event;
    const value = target.value;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            screen.value += ` ${value} `;
            break;
        case '=':
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = 'Error';
            }
            break;
        case 'all-clear':
            screen.value = '';
            break;
        default:
            screen.value += value;
    }
});