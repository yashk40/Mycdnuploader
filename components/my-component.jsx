<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Glowing Button Styles */
        .glowing-button {
            position: relative;
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: #fff;
            background-color: #ffcc00;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            outline: none;
            box-shadow: 0 0 5px rgba(255, 204, 0, 0.7);
            transition: box-shadow 0.3s ease-in-out;
        }

        .glowing-button:active {
            box-shadow: 0 0 15px rgba(255, 204, 0, 1);
        }

        .glowing-button::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.1);
            transform: translate(-50%, -50%) scale(0);
            transition: transform 0.3s ease-in-out;
        }

        .glowing-button:active::after {
            transform: translate(-50%, -50%) scale(1);
        }

        /* Responsive Design */
        @media (max-width: 600px) {
            .glowing-button {
                font-size: 14px;
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
    <!-- Glowing Button Component -->
    <button class="glowing-button" id="glowing-button">Click Me!</button>

    <script>
        // Glowing Button Component Logic
        (function() {
            'use strict';

            // Select the button element
            const button = document.getElementById('glowing-button');

            // Error handling for button selection
            if (!button) {
                console.error('Button element not found.');
                return;
            }

            // Function to handle button click
            function handleClick(event) {
                event.preventDefault();
                console.log('Button clicked!');
            }

            // Add event listener to the button
            button.addEventListener('click', handleClick);

            // Export the component for CDN usage
            window.GlowingButton = {
                button,
                handleClick
            };
        })();
    </script>
</body>
</html>