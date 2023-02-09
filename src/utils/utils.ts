export function waitForEl(selector: string) {
    const input = document.getElementById(selector);
    if (input) {
        input.focus();
    } else {
        setTimeout(function () {
            waitForEl(selector);
        }, 100);
    }
}
