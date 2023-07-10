const cartSelect = document.querySelector('#photos')
const checkout = document.querySelector('#checkout')
const submit = document.querySelector('#submit')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let message = document.querySelector('#message')
let service = document.querySelector('#photos')

window.onload = () => {
    if (window.location.search) {
        let val = window.location.search
        val = val.split('=')[1]
        cartSelect.value = val
    }
};


submit.addEventListener("click", (e) => {
    if (cartSelect.value == 0) {
        document.querySelector('#selectError').setAttribute('style', 'display: block;')
        e.preventDefault();
    } else {
        document.querySelector('#selectError').setAttribute('style', 'display: none;')

        if (name.value == "" || email.value == "" || phone.value == "") {

        }
        else {
            name = name.value
            email = email.value
            phone = phone.value
            message = message.value
            service = service.value
            Email.send({
                SecureToken: "a65e13c0-37c8-41e0-9a6d-51f215fdcf8e",
                To: 'babuchanan1@gmail.com',
                From: "mrbuchmas@gmail.com",
                Subject: "New Cart Form",
                Body: `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <style>
        table,
        td,
        div,
        h1,
        p {
            font-family: Arial, sans-serif;
        }
    </style>
</head>

<body style="margin:0;padding:0;">
    <table role="presentation"
        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
        <tr>
            <td align="center" style="padding:0;">
                <table role="presentation"
                    style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;">
                    <tr>
                        <td align="center" style="padding:40px 0 30px 0;background:#ffffff;">
                            <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f6d2.jpg"
                                alt="" width="300" style="height:auto;display:block;" />
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:36px 30px 42px 30px;">
                            <table role="presentation"
                                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                    <td style="padding:0 0 36px 0;color:#153643;">
                                        <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">
                                            You have a new cart form submission!</h1>
                                        <p>Here are the details to get in touch:</p>
                                        <ul>
                                            <li>Name: <span style="font-weight: bold;">${name}</span></li>
                                            <li>Phone: <span style="font-weight: bold;">${phone}</span></li>
                                            <li>Email: <span style="font-weight: bold;">${email}</span></li>
                                            <li>Service: <span style="font-weight: bold;">${service}</span></li>
                                            <li>Message: ${message}</li>
                                        </ul>
                                        <p
                                            style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">
                                            <a href="https://my.ionos.com/webhosting/b6686107-4539-4747-84ab-6b46467ab312/databases/4ba52c20-7e0d-410f-a204-38a9e479cfaa/open"
                                                style="color:#ee4c50;text-decoration:underline;">See Database</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px;background:#ee4c50;">
                            <table role="presentation"
                                style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                <tr>
                                    <td style="padding:0;width:50%;" align="left">
                                        <p
                                            style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                            &reg; Arizona Drone Photography LLC<br />
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`,
            })
            this.trigger(e);
        }


        // switch (cartSelect.value) {
        //     case '1':
        //         window.location.href = 'https://buy.stripe.com/aEU4gO15Ve295UY8ww';
        //         break;
        //     case '2':
        //         window.location.href = 'https://buy.stripe.com/bIY00y7uj5vD4QU6op';
        //         break;
        //     case '3':
        //         window.location.href = 'https://buy.stripe.com/00gdRo5mbcY55UY3ce';
        //         break;
        //     default:
        //         console.log(`Error`);
        // }


    }
})
