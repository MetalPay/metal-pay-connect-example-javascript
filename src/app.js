// app.js
import { MetalPayConnect } from 'metal-pay-connect-js';

document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById('greeting');
    greetingElement.textContent = "Hello, World! from JavaScript";

    const metalPayConnectEl = document.getElementById('metal-pay-connect');  // Reference to the metal-pay-connect element
    // Function to fetch API key, signature, and nonce from the server
    async function fetchMetalPayParams() {
        try {
            const response = await fetch(`${process.env.BACKEND_API_BASE_URL}/v1/signature`);
            const data = await response.json();
            return {
                apiKey: data.apiKey,
                signature: data.signature,
                nonce: data.nonce
            };
        } catch (error) {
            console.error('Error fetching signature:', error);
            return null;
        }
    }

    // Initialize Metal Pay Connect SDK once you have the configuration
    async function initializeMetalPay() {
        const config = await fetchMetalPayParams();

        if (config) {
            // Initialize the SDK with configuration options
            const metalPayConnect = new MetalPayConnect({
                el: metalPayConnectEl,
                environment: 'dev',  // Type can be 'preview', 'dev', or 'prod'
                params: {
                    apiKey: config.apiKey,
                    signature: config.signature,
                    nonce: config.nonce,
                    address: { 'xpr-network': 'johndoe' }, // address for the user
                    networks: ['xpr-network'], // List of networks to enable
                }
            });

            // Cleanup Metal Pay Connect SDK on unload
            window.addEventListener('beforeunload', function() {
                metalPayConnect.destroy();
            });
        }
    }

    // Call the initialization function
    initializeMetalPay();
});