<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        /* Reset some default styles */
        body, h1, h2, h3, h4, h5, h6, p, ul, li, form, input, textarea, button {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* General styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            overflow: hidden;
        }

        .contact-form {
            background-color: #ffffff;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        .contact-form h2 {
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            color: #333;
        }

        .input-group {
            position: relative;
            margin-bottom: 1.5rem;
        }

        .input-group label {
            position: absolute;
            top: 0.5rem;
            left: 1rem;
            pointer-events: none;
            transition: transform 0.3s ease, color 0.3s ease;
            color: #999;
        }

        .input-group input:focus + label,
        .input-group textarea:focus + label,
        .input-group input:not(:placeholder-shown) + label,
        .input-group textarea:not(:placeholder-shown) + label {
            transform: translateY(-1.5rem) scale(0.8);
            color: #333;
        }

        .input-group input,
        .input-group textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 0.3rem;
            transition: border-color 0.3s ease;
        }

        .input-group input:focus,
        .input-group textarea:focus {
            border-color: #333;
        }

        .submit-button {
            width: 100%;
            padding: 1rem;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 0.3rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .submit-button:hover {
            background-color: #555;
            transform: translateY(-2px);
        }

        @media (max-width: 600px) {
            .contact-form {
                padding: 1.5rem;
            }

            .contact-form h2 {
                font-size: 1.25rem;
            }

            .input-group input,
            .input-group textarea {
                padding: 0.75rem;
            }

            .submit-button {
                padding: 0.75rem;
            }
        }
    </style>
</head>
<body>
    <form class="contact-form">
        <h2>Contact Us</h2>
        <div class="input-group">
            <input type="text" id="name" placeholder=" " required>
            <label for="name">Name</label>
        </div>
        <div class="input-group">
            <input type="email" id="email" placeholder=" " required>
            <label for="email">Email</label>
        </div>
        <div class="input-group">
            <textarea id="message" rows="5" placeholder=" " required></textarea>
            <label for="message">Message</label>
        </div>
        <button type="submit" class="submit-button">Send</button>
    </form>
</body>
</html>
```

### Usage Code for CDN

To use this CSS in a project via a CDN, you can host the CSS file on a CDN service like [jsDelivr](https://www.jsdelivr.com/) or [Unpkg](https://unpkg.com/). Once hosted, you can include it in your HTML file using a `<link>` tag:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/your-username/your-repo@main/contact-form.css">
</head>
<body>
    <form class="contact-form">
        <h2>Contact Us</h2>
        <div class="input-group">
            <input type="text" id="name" placeholder=" " required>
            <label for="name">Name</label>
        </div>
        <div class="input-group">
            <input type="email" id="email" placeholder=" " required>
            <label for="email">Email</label>
        </div>
        <div class="input-group">
            <textarea id="message" rows="5" placeholder=" " required></textarea>
            <label for="message">Message</label>
        </div>
        <button type="submit" class="submit-button">Send</button>
    </form>
</body>
</html>
```

Replace `https://cdn.jsdelivr.net/gh/your-username/your-repo@main/contact-form.css` with the actual URL of your hosted CSS file.