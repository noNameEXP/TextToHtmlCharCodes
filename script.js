function convertToHtmlCodes() {
    const inputText = document.getElementById('inputText').value;
    let outputText = '';
    for (let i = 0; i < inputText.length; i++) {
        outputText += `&#${inputText.charCodeAt(i)};`;
    }
    document.getElementById('outputText').value = outputText;
}
