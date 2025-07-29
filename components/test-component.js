// Test Component
function createTestButton() {
    const button = document.createElement('button');
    button.textContent = 'Test Button';
    button.style.cssText = `
        background: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    `;
    button.onclick = () => alert('Button clicked!');
    return button;
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = createTestButton;
}