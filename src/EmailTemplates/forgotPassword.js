export const forgetPassword = async () => {
    const result = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&display=swap"
            rel="stylesheet">
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: Montserrat;
            }
    
            .template-main {
                background-image: url(https://epik-portal-dev.s3.us-west-1.amazonaws.com/User/ProfileImage/1689419023280.templatebg.png);
                width: 21cm;
                height: 100vh;
                background-repeat: no-repeat;
                background-size: 100% 100%;
                margin: 0px auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .gradient-bx {
                width: 17cm;
                background-image: url(https://epik-portal-dev.s3.us-west-1.amazonaws.com/User/ProfileImage/1689419070620.secondbg.png);
                background-size: 100% 100%;
                padding: 158px 59px 0px 59px;
                margin: auto;
                height: calc(100% - 130px);
            }
    
            .white-bx {
                width: 100%;
                height: 100%;
            }
    
            .content-box h2 {
                font-size: 36px;
                font-style: normal;
                font-weight: 700;
                text-align: center;
                color: #021818;
            }
    
            .content-box h2 span {
                color: #3AC5C5;
            }
    
            .content-box p {
                font-size: 20px;
                font-weight: 400;
                color: #667575;
                font-style: normal;
                text-align: center;
                margin: 20px 0px;
            }
    
            .content-box figure {
                text-align: center;
                margin: 40px 0px;
            }
    
            .content-box figure img {
                width: 220px;
            }
    
            .content-box .otp-section {
                background-image: url(https://epik-portal-dev.s3.us-west-1.amazonaws.com/User/ProfileImage/1689419115577.arrow.png);
                background-size: 245px;
                background-repeat: no-repeat;
                padding: 56px 0px 12px;
                background-position: top -22px left;
            }
    
            .otp-section h4 {
                color: #F68030;
                text-align: center;
                font-size: 44px;
                font-style: normal;
                font-weight: 700;
                border-radius: 11px;
                background: rgba(246, 128, 48, 0.04);
            }
    
            .otp-section p {
                color: #F68030;
            }
    
            .logo-here{
                text-align: center;
            }
        </style>
    </head>
    
    <body>
        <div class="template-main">
            <div class="gradient-bx">
                <div class="white-bx">
                    <div class="content-box">
                        <h2>Verification <span>Code</span></h2>
                        <p>Keep your account secure by confirming your identity with the provided code</p>
                        <figure>
                            <img src="https://epik-portal-dev.s3.us-west-1.amazonaws.com/User/ProfileImage/1689419152085.girl-email.png" alt="">
                        </figure>
                        <div class="otp-section">
                            <h4>4567</h4>
                            <p>Your verification code</p>
                        </div>
                        <div class="logo-here">
                            <img src="https://epik-portal-dev.s3.us-west-1.amazonaws.com/User/ProfileImage/1689419181357.logoepic.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`;
    return result;
  };
  