// 1. Перевірка темної теми на рівні системи


function detectDarkMode () {
    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        return 'dark'
    }
    return 'light'
}

export default detectDarkMode