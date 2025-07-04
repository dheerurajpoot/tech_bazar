// forget password mail template
export const forgotMailTemplate = (token) => {
	return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset your password</title>
</head>

<body>
  <h3>
    Welcome to ${process.env.COMPANY_NAME}
  </h3>
  <p>
    Click <a href="${process.env.DOMAIN_NAME}/newpassword?token=${token}">Reset Password</a> to Reset your password <br/> or <br/> copy and paste the link to into the browser <br/> ${process.env.DOMAIN_NAME}/newpassword?token=${token} </p> 
</body>

</html>`;
};

// verify mail template
export const verifyMailTemplate = (token) => {
	return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify your email address</title>
</head>

<body>
  <h3>
    Welcome to ${process.env.COMPANY_NAME}
  </h3>
  <p>
    Click <a href="${process.env.DOMAIN_NAME}/verifyemail?token=${token}">Verify Email</a> to verify your email <br/> or <br/> copy and paste the link to into the browser <br/> ${process.env.DOMAIN_NAME}/verifyemail?token=${token} </p> 
</body>

</html>`;
};

// verify mail template
export const newProductMail = (product) => {
	return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Product Added!</title>
</head>

<body>
  <h3>
    Welcome to ${process.env.COMPANY_NAME}
  </h3>
  <p>New product is added on EVTN.Org, Check and Approve it as soon as possible </p> 
</body>

</html>`;
};

// new order mail template
export const newOrderMail = () => {
	return `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Poppins:ital,wght@0,400;0,400;0,500;0,600" rel="stylesheet" />
 <title>New Order Notification</title>
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
                 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide, .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-40-24-40-24 {padding: 40px 24px 40px 24px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-font-size-14px {font-size: 14px !important;}
 .pc-w620-line-height-140pc {line-height: 140% !important;}
 .pc-w620-padding-24-0-0-0 {padding: 24px 0px 0px 0px !important;}
 table.pc-w620-spacing-10-0-0-0 {margin: 10px 0px 0px 0px !important;}
 td.pc-w620-spacing-10-0-0-0,th.pc-w620-spacing-10-0-0-0{margin: 0 !important;padding: 10px 0px 0px 0px !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-itemsSpacings-6-0 {padding-left: 3px !important;padding-right: 3px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-12-12-12-12 {padding: 12px 12px 12px 12px !important;}
 .pc-w620-padding-24-24-24-24 {padding: 24px 24px 24px 24px !important;}
 .pc-w620-itemsSpacings-0-0 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-radius-10-10-10-10 {border-radius: 10px 10px 10px 10px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFQ.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnedA.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecg.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFQ.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #ffffff;" bgcolor="#ffffff">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #ffffff;" bgcolor="#ffffff" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Hero -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-24-0-0-0" style="padding: 0px 0px 0px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-40-24-40-24" align="center" valign="bottom" style="padding: 44px 44px 44px 44px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 32px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/image-17379883990942.png" width="150" height="162" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 150px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 40px;line-height: 100%;text-align:center;text-align-last:center;color:#001942;letter-spacing:-0.03em;font-weight:600;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 40px; line-height: 100%; text-decoration: none; text-transform: none;">You have received a new order!</span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 14px;line-height: 140%;text-align:center;text-align-last:center;color:#001942;letter-spacing:0px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 140%; text-decoration: none; text-transform: none;" class="pc-w620-font-size-14px pc-w620-line-height-140pc">Great news! You have received a new order check the details and process this order as soon as possible. </span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <th valign="top" align="center" style="text-align: center; font-weight: normal; line-height: 1;">
                               <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 500px 500px 500px 500px; background-color: #0067ff; text-align:center; color: #ffffff; padding: 14px 28px 14px 28px; mso-padding-left-alt: 0; margin-left:28px;" bgcolor="#0067ff">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; text-align: center;" href="https://evtn.org/admin/orders" target="_blank"><span style="font-size: 17px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;font-variant-ligatures:normal;"><span style="display:inline-block;"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 24px; text-decoration: none; text-transform: none;">See details</span></span></span></a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                               <!--[if !mso]><!-- -->
                               <a style="display: inline-block; box-sizing: border-box; border-radius: 500px 500px 500px 500px; background-color: #0067ff; padding: 14px 28px 14px 28px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" href="https://evtn.org/admin/orders" target="_blank"><span style="font-size: 17px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;font-variant-ligatures:normal;"><span style="display:inline-block;"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 24px; text-decoration: none; text-transform: none;">See details</span></span></span></a>
                               <!--<![endif]-->
                              </th>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Hero -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-radius-10-10-10-10 pc-w620-padding-24-24-24-24" style="padding: 24px 24px 24px 24px; height: unset; border-radius: 10px 10px 10px 10px; background-color: #0067ff;" bgcolor="#0067ff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 12px 0px;">
                   <img src="https://www.evtn.org/_next/image?url=%2Fevtn.png&w=384&q=75" width="135" height="26" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 135px; height: auto; max-width: 100%; border: 0;" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-10-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt" style="text-decoration: none;">
                       <div style="font-size: 14px;line-height: 143%;text-align:center;text-align-last:center;color:#ffffff;letter-spacing:-0.2px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                        <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 143%; text-decoration: none; text-transform: none;">Bamba Road, Kalyanpur, Kanpur Nagar (208017)</span>
                        </div>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 24px 0px 0px 0px;">
                   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr class="pc-grid-tr-first pc-grid-tr-last">
                        <td class="pc-grid-td-first pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 0px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/649c68b0a6dc8f618df90ec1f44e0082.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/e931e54b1bf5c1e0cac743c437478e90.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/d39505db407e6ca83fd432b2866ccda0.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-grid-td-last pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/3b897c472dab53429b14734d1fa9a8bd.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
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

</html>
`;
};
// new order mail template
export const userOrderMail = () => {
	return `
<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Poppins:ital,wght@0,400;0,400;0,500;0,600" rel="stylesheet" />
 <title>Your Product is Sold!</title>
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
                 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide, .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-40-24-40-24 {padding: 40px 24px 40px 24px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-font-size-14px {font-size: 14px !important;}
 .pc-w620-line-height-140pc {line-height: 140% !important;}
 .pc-w620-padding-24-0-0-0 {padding: 24px 0px 0px 0px !important;}
 .pc-w620-fontSize-24px {font-size: 24px !important;}
 .pc-w620-lineHeight-32 {line-height: 32px !important;}
 table.pc-w620-spacing-0-0-20-0 {margin: 0px 0px 20px 0px !important;}
 td.pc-w620-spacing-0-0-20-0,th.pc-w620-spacing-0-0-20-0{margin: 0 !important;padding: 0px 0px 20px 0px !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-itemsSpacings-0-4 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 2px !important;padding-bottom: 2px !important;}
 .pc-w620-valign-middle {vertical-align: middle !important;}
 td.pc-w620-halign-center,th.pc-w620-halign-center {text-align: center !important;}
 table.pc-w620-halign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-halign-center {margin-right: auto !important;margin-left: auto !important;}
 .pc-w620-padding-16-24-16-24 {padding: 16px 24px 16px 24px !important;}
 .pc-w620-itemsSpacings-0-16 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 8px !important;padding-bottom: 8px !important;}
 td.pc-w620-halign-left,th.pc-w620-halign-left {text-align: left !important;}
 table.pc-w620-halign-left {float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-halign-left {margin-right: auto !important;margin-left: 0 !important;}
 div.pc-w620-textAlign-left,th.pc-w620-textAlign-left,a.pc-w620-textAlign-left,td.pc-w620-textAlign-left {text-align: left !important;text-align-last: left !important;}
 table.pc-w620-textAlign-left{float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-textAlign-left{margin-right: auto !important;margin-left: 0 !important;}
 .pc-w620-text-align-left {text-align: left !important;text-align-last: left !important;}
 td.pc-w620-halign-right,th.pc-w620-halign-right {text-align: right !important;}
 table.pc-w620-halign-right {float: none !important;margin-right: 0 !important;margin-left: auto !important;}
 img.pc-w620-halign-right {margin-right: 0 !important;margin-left: auto !important;}
 .pc-w620-width-fill {width: 100% !important;}
 div.pc-w620-align-right,th.pc-w620-align-right,a.pc-w620-align-right,td.pc-w620-align-right {text-align: right !important;text-align-last: right !important;}
 table.pc-w620-align-right{float: none !important;margin-left: auto !important;margin-right: 0 !important;}
 img.pc-w620-align-right{margin-right: 0 !important;margin-left: auto !important;}
 .pc-w620-padding-32-0-4-0 {padding: 32px 0px 4px 0px !important;}
 table.pc-w620-spacing-10-0-0-0 {margin: 10px 0px 0px 0px !important;}
 td.pc-w620-spacing-10-0-0-0,th.pc-w620-spacing-10-0-0-0{margin: 0 !important;padding: 10px 0px 0px 0px !important;}
 .pc-w620-itemsSpacings-6-0 {padding-left: 3px !important;padding-right: 3px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-12-12-12-12 {padding: 12px 12px 12px 12px !important;}
 .pc-w620-padding-24-24-24-24 {padding: 24px 24px 24px 24px !important;}
 .pc-w620-itemsSpacings-0-0 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-radius-10-10-10-10 {border-radius: 10px 10px 10px 10px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFQ.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnedA.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecg.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFQ.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #ffffff;" bgcolor="#ffffff">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #ffffff;" bgcolor="#ffffff" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Hero -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-24-0-0-0" style="padding: 0px 0px 0px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-40-24-40-24" align="center" valign="bottom" style="padding: 44px 44px 44px 44px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 32px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/image-17379883990942.png" width="150" height="162" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 150px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 40px;line-height: 100%;text-align:center;text-align-last:center;color:#001942;letter-spacing:-0.03em;font-weight:600;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 40px; line-height: 100%; text-decoration: none; text-transform: none;">Your Product is Sold!</span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 14px;line-height: 140%;text-align:center;text-align-last:center;color:#001942;letter-spacing:0px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 140%; text-decoration: none; text-transform: none;" class="pc-w620-font-size-14px pc-w620-line-height-140pc">Great news! Your product is sold, we have received the payment, we are processing this order, send your login details on our WhatsApp or email.. </span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <th valign="top" align="center" style="text-align: center; font-weight: normal; line-height: 1;">
                               <!--[if mso]>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
            <tr>
                <td valign="middle" align="center" style="border-radius: 500px 500px 500px 500px; background-color: #0067ff; text-align:center; color: #ffffff; padding: 14px 28px 14px 28px; mso-padding-left-alt: 0; margin-left:28px;" bgcolor="#0067ff">
                                    <a class="pc-font-alt" style="display: inline-block; text-decoration: none; font-variant-ligatures: normal; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; text-align: center;" href="https://evtn.org/profile/orders" target="_blank"><span style="font-size: 17px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;font-variant-ligatures:normal;"><span style="display:inline-block;"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 24px; text-decoration: none; text-transform: none;">See details</span></span></span></a>
                                </td>
            </tr>
        </table>
        <![endif]-->
                               <!--[if !mso]><!-- -->
                               <a style="display: inline-block; box-sizing: border-box; border-radius: 500px 500px 500px 500px; background-color: #0067ff; padding: 14px 28px 14px 28px; font-family: 'Fira Sans', Arial, Helvetica, sans-serif; vertical-align: top; text-align: center; text-align-last: center; text-decoration: none; -webkit-text-size-adjust: none;" href="https://evtn.org/profile/orders" target="_blank"><span style="font-size: 17px;line-height: 24px;color:#ffffff;letter-spacing:-0.2px;font-weight:500;font-style:normal;display:inline-block;font-variant-ligatures:normal;"><span style="display:inline-block;"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 24px; text-decoration: none; text-transform: none;">See details</span></span></span></a>
                               <!--<![endif]-->
                              </th>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Hero -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Contact -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-32-0-4-0" style="padding: 40px 0px 4px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-20-0" align="center" valign="top" style="padding: 0px 0px 32px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-24px pc-w620-lineHeight-32" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: center; text-align-last: center;">
                       <div><span>Problems with the Order?</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-4" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 2px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-16-24-16-24 pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 16px 16px 16px 16px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-valign-middle pc-w620-halign-left">
                               <table class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-halign-left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
                                  <table class="pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 5px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: 0.04em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-transform: uppercase; text-align: left; text-align-last: left;">
                                               <div><span style="text-transform: uppercase;">Email Us</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 0px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left">
                                              <div class="pc-font-alt" style="text-decoration: none;">
                                               <div style="font-size: 17px;line-height: 140%;text-align:left;text-align-last:left;color:#001942;letter-spacing:-0.03em;font-weight:600;font-style:normal;font-variant-ligatures:normal;">
                                                <div class="pc-w620-text-align-left"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 140%; text-decoration: none; text-transform: none;">evtnofficial@gmail.com</span>
                                                </div>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
                                  <table class="pc-w620-width-fill pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-right pc-w620-valign-middle" align="right" valign="middle">
                                     <table class="pc-w620-halign-right" align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-right" align="right" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-halign-right" align="right" valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/c2fa1723839cb48cc87fa29b518490bd.png" class="pc-w620-align-right" width="32" height="25" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 32px; height: auto; max-width: 100%; border: 0;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-4" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 2px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-16-24-16-24 pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 16px 16px 16px 16px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-valign-middle pc-w620-halign-left">
                               <table class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-halign-left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
                                  <table class="pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 5px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: 0.04em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-transform: uppercase; text-align: left; text-align-last: left;">
                                               <div><span style="text-transform: uppercase;">Phone Us</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 0px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0" align="left">
                                              <div class="pc-font-alt" style="text-decoration: none;">
                                               <div style="font-size: 17px;line-height: 140%;text-align:left;text-align-last:left;color:#001942;letter-spacing:-0.03em;font-weight:600;font-style:normal;font-variant-ligatures:normal;">
                                                <div class="pc-w620-text-align-left"><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; line-height: 140%; text-decoration: none; text-transform: none;">+91 7755089819</span>
                                                </div>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
                                  <table class="pc-w620-width-fill pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-right pc-w620-valign-middle" align="right" valign="middle">
                                     <table class="pc-w620-halign-right" align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-right" align="right" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-halign-right" align="right" valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/34e7e765c4eb401497370027260523e1.png" class="pc-w620-align-right" width="32" height="32" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 32px; height: auto; max-width: 100%; border: 0;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Contact -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-radius-10-10-10-10 pc-w620-padding-24-24-24-24" style="padding: 24px 24px 24px 24px; height: unset; border-radius: 10px 10px 10px 10px; background-color: #0067ff;" bgcolor="#0067ff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" valign="top" style="padding: 0px 0px 12px 0px;">
                   <img src="https://www.evtn.org/_next/image?url=%2Fevtn.png&w=384&q=75" width="135" height="26" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 135px; height: auto; max-width: 100%; border: 0;" />
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-10-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt" style="text-decoration: none;">
                       <div style="font-size: 14px;line-height: 143%;text-align:center;text-align-last:center;color:#ffffff;letter-spacing:-0.2px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                        <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 143%; text-decoration: none; text-transform: none;">Bamba Road, Kalyanpur, Kanpur Nagar (208017)</span>
                        </div>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 24px 0px 0px 0px;">
                   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr class="pc-grid-tr-first">
                        <td class="pc-grid-td-first pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 0px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/649c68b0a6dc8f618df90ec1f44e0082.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/e931e54b1bf5c1e0cac743c437478e90.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/d39505db407e6ca83fd432b2866ccda0.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-grid-td-last pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/3b897c472dab53429b14734d1fa9a8bd.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
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

</html>
`;
};

// new contact mail template
export const contactMail = (contact) => {
	return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Order Notification</title>
</head>

<body>
  <h3>
    Welcome to ${process.env.COMPANY_NAME}
  </h3>
  <p>You have received a new contact form submission on our site.</p> 
  <p>Name: <span>${contact?.name}</span></p> 
  <p>Email: <span>${contact?.email}</span></p> 
  <p>Phone: <span>${contact?.phone}</span></p> 
  <p>Subject: <span>${contact?.subject}</span></p> 
  <p>Message: <span>${contact?.message}</span></p> 
</body>

</html>`;
};

// new order mail template
export const orderEmailTemplate = (orderDetails) => {
	return `
  <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Poppins:ital,wght@0,400;0,400;0,500;0,600" rel="stylesheet" />
 <title>Your order is successfully placed!</title>
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
                 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide, .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-40-24-40-24 {padding: 40px 24px 40px 24px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-fontSize-32px {font-size: 32px !important;}
 .pc-w620-lineHeight-32 {line-height: 32px !important;}
 .pc-w620-font-size-14px {font-size: 14px !important;}
 .pc-w620-line-height-140pc {line-height: 140% !important;}
 .pc-w620-padding-24-0-0-0 {padding: 24px 0px 0px 0px !important;}
 .pc-w620-width-fill {width: 100% !important;}
 .pc-w620-itemsSpacings-0-30 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 15px !important;padding-bottom: 15px !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 .pc-w620-width-38 {width: 38px !important;}
 .pc-w620-height-auto {height: auto !important;}
 .pc-w620-width-auto {width: auto !important;}
 .pc-w620-fontSize-14px {font-size: 14px !important;}
 .pc-w620-width-60 {width: 60px !important;}
 
 img.pc-w620-width-60-min {min-width: 60px !important;}
 .pc-w620-height-2 {height: 2px !important;}
 table.pc-w620-spacing-0-0-34-0 {margin: 0px 0px 34px 0px !important;}
 td.pc-w620-spacing-0-0-34-0,th.pc-w620-spacing-0-0-34-0{margin: 0 !important;padding: 0px 0px 34px 0px !important;}
 .pc-w620-padding-0-6-0-6 {padding: 0px 6px 0px 6px !important;}
 .pc-w620-padding-30-0-30-0 {padding: 30px 0px 30px 0px !important;}
 .pc-w620-fontSize-24px {font-size: 24px !important;}
 .pc-w620-lineHeight-40 {line-height: 40px !important;}
 .pc-w620-fontSize-16px {font-size: 16px !important;}
 .pc-w620-lineHeight-28 {line-height: 28px !important;}
 table.pc-w620-spacing-0-0-20-0 {margin: 0px 0px 20px 0px !important;}
 td.pc-w620-spacing-0-0-20-0,th.pc-w620-spacing-0-0-20-0{margin: 0 !important;padding: 0px 0px 20px 0px !important;}
 table.pc-w620-spacing-0-16-20-0 {margin: 0px 16px 20px 0px !important;}
 td.pc-w620-spacing-0-16-20-0,th.pc-w620-spacing-0-16-20-0{margin: 0 !important;padding: 0px 16px 20px 0px !important;}
 .pc-w620-width-64 {width: 64px !important;}
 
 img.pc-w620-width-64-min {min-width: 64px !important;}
 .pc-w620-height-64 {height: 64px !important;}
 .pc-w620-view-vertical,.pc-w620-view-vertical > tbody,.pc-w620-view-vertical > tbody > tr,.pc-w620-view-vertical > tbody > tr > th,.pc-w620-view-vertical > tr,.pc-w620-view-vertical > tr > th {display: inline-block;width: 100% !important;}
 .pc-w620-fontSize-16 {font-size: 16px !important;}
 .pc-w620-lineHeight-26 {line-height: 26px !important;}
 .pc-w620-padding-28-32-24-16 {padding: 28px 32px 24px 16px !important;}
 .pc-w620-lineHeight-20 {line-height: 20px !important;}
 .pc-w620-padding-32-24-32-24 {padding: 32px 24px 32px 24px !important;}
 .pc-w620-radius-10-10-10-10 {border-radius: 10px 10px 10px 10px !important;}
 .pc-w620-itemsSpacings-0-4 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 2px !important;padding-bottom: 2px !important;}
 .pc-w620-valign-middle {vertical-align: middle !important;}
 td.pc-w620-halign-center,th.pc-w620-halign-center {text-align: center !important;}
 table.pc-w620-halign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-halign-center {margin-right: auto !important;margin-left: auto !important;}
 .pc-w620-padding-16-24-16-24 {padding: 16px 24px 16px 24px !important;}
 .pc-w620-itemsSpacings-0-16 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 8px !important;padding-bottom: 8px !important;}
 td.pc-w620-halign-left,th.pc-w620-halign-left {text-align: left !important;}
 table.pc-w620-halign-left {float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-halign-left {margin-right: auto !important;margin-left: 0 !important;}
 div.pc-w620-textAlign-left,th.pc-w620-textAlign-left,a.pc-w620-textAlign-left,td.pc-w620-textAlign-left {text-align: left !important;text-align-last: left !important;}
 table.pc-w620-textAlign-left{float: none !important;margin-right: auto !important;margin-left: 0 !important;}
 img.pc-w620-textAlign-left{margin-right: auto !important;margin-left: 0 !important;}
 td.pc-w620-halign-right,th.pc-w620-halign-right {text-align: right !important;}
 table.pc-w620-halign-right {float: none !important;margin-right: 0 !important;margin-left: auto !important;}
 img.pc-w620-halign-right {margin-right: 0 !important;margin-left: auto !important;}
 div.pc-w620-align-right,th.pc-w620-align-right,a.pc-w620-align-right,td.pc-w620-align-right {text-align: right !important;text-align-last: right !important;}
 table.pc-w620-align-right{float: none !important;margin-left: auto !important;margin-right: 0 !important;}
 img.pc-w620-align-right{margin-right: 0 !important;margin-left: auto !important;}
 .pc-w620-padding-32-0-4-0 {padding: 32px 0px 4px 0px !important;}
 table.pc-w620-spacing-10-0-0-0 {margin: 10px 0px 0px 0px !important;}
 td.pc-w620-spacing-10-0-0-0,th.pc-w620-spacing-10-0-0-0{margin: 0 !important;padding: 10px 0px 0px 0px !important;}
 .pc-w620-itemsSpacings-6-0 {padding-left: 3px !important;padding-right: 3px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 .pc-w620-padding-12-12-12-12 {padding: 12px 12px 12px 12px !important;}
 .pc-w620-padding-24-24-24-24 {padding: 24px 24px 24px 24px !important;}
 .pc-w620-itemsSpacings-0-0 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;padding-bottom: 0px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLGT9Z1JlFQ.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnedA.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiEyp8kv8JHgFVrJJnecg.woff2') format('woff2'); } @font-face { font-family: 'Poppins'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlEw.woff') format('woff'), url('https://fonts.gstatic.com/s/poppins/v22/pxiByp8kv8JHgFVrLEj6Z1JlFQ.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #ffffff;" bgcolor="#ffffff">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #ffffff;" bgcolor="#ffffff" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Hero -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-24-0-0-0" style="padding: 0px 0px 0px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-40-24-40-24" align="center" valign="bottom" style="padding: 44px 44px 44px 44px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 32px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/image-1719380710757.png" width="150" height="162" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 150px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt pc-w620-fontSize-32px pc-w620-lineHeight-32" style="line-height: 100%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 40px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: center; text-align-last: center;">
                                   <div><span>Thanks for the Order</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 20px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 14px;line-height: 140%;text-align:center;text-align-last:center;color:#001942;letter-spacing:0px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 140%; text-decoration: none; text-transform: none;" class="pc-w620-font-size-14px pc-w620-line-height-140pc">Great news! Your order is all set to hit the road. We're are processing your order and asset transfer. </span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Hero -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Delivery Status -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-30-0-30-0" style="padding: 44px 0px 44px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table class="pc-w620-width-fill" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
                   <table class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-width-fill" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="center" valign="bottom">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 12px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/5b305647c0f5e5a664d2cca777f34bf4.png" class="pc-w620-width-38 pc-w620-height-auto" width="38" height="38" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 38px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table class="pc-w620-width-auto" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 6px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt pc-w620-fontSize-14px" style="line-height: 133%; letter-spacing: -0.2px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #0067ff; text-align: center; text-align-last: center;">
                                   <div><span>Confirmed</span>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                      <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td class="pc-w620-spacing-0-0-34-0" valign="top" style="padding: 0px 0px 32px 0px;">
                               <table class="pc-w620-width-60" width="87" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #0167ff;">&nbsp;</td>
                <![endif]-->
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px dashed #0167ff;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-0-6-0-6" align="center" valign="bottom">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 12px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/99e51c88245905d275cf11b1e90194ab.png" class="pc-w620-width-38 pc-w620-height-auto" width="38" height="38" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 38px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table class="pc-w620-width-auto" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 6px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 14px;line-height: 133%;text-align:center;text-align-last:center;color:#53627a;letter-spacing:-0.2px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 133%; text-decoration: none; text-transform: none;" class="pc-w620-font-size-14px">Processing</span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 15px; padding-bottom: 0px; padding-left: 15px;">
                      <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="center" valign="middle">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td class="pc-w620-spacing-0-0-34-0" valign="top" style="padding: 0px 0px 32px 0px;">
                               <table class="pc-w620-width-60" width="87" border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: auto;">
                                <tr>
                                 <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #D9D9D9;">&nbsp;</td>
                <![endif]-->
                                 <!--[if !gte mso 9]><!-- -->
                                 <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px dashed #D9D9D9;">&nbsp;</td>
                                 <!--<![endif]-->
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-30" align="center" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 15px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%; height: 100%;" width="100%" height="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="center" valign="bottom">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="center" valign="top" style="padding: 0px 0px 12px 0px;">
                               <img src="https://cloudfilesdm.com/postcards/7af250fce78f428f47ab75eeda734977.png" class="pc-w620-width-38 pc-w620-height-auto" width="38" height="38" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 38px; height: auto; max-width: 100%; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                          <tr>
                           <td align="center" valign="top">
                            <table class="pc-w620-width-auto" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top" style="padding: 0px 0px 6px 0px;">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="center">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 14px;line-height: 133%;text-align:center;text-align-last:center;color:#53627a;letter-spacing:-0.2px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 133%; text-decoration: none; text-transform: none;" class="pc-w620-font-size-14px">Completed</span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Delivery Status -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Order Summary -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-radius-10-10-10-10 pc-w620-padding-32-24-32-24" style="padding: 40px 24px 40px 24px; height: unset; border-radius: 20px 20px 20px 20px; background-color: #ecf1fb;" bgcolor="#ecf1fb">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0" align="center" valign="top" style="padding: 0px 0px 8px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-24px pc-w620-lineHeight-40" style="line-height: 100%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: center; text-align-last: center;">
                       <div><span>Your item in this order </span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-20-0" align="center" valign="top" style="padding: 0px 0px 30px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-16px pc-w620-lineHeight-28" style="line-height: 140%; letter-spacing: 0px; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-align: center; text-align-last: center;">
                       <div><span style="letter-spacing: 0px;">Order number: ${orderDetails?._id}</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 4px 0px; ">
                   <table class="pc-w620-tableCollapsed-0" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" style="border-collapse: separate; border-spacing: 0; width: 100%; background-color:#FFFFFF; border-radius: 10px 10px 10px 10px;">
                    <tbody>
                     <tr>
                      <td align="left" valign="top" style="padding: 16px 0px 8px 16px;">
                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td>
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td valign="top">
                             <table class="" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <th valign="top" style="font-weight: normal; text-align: left;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td class="pc-w620-spacing-0-16-20-0" valign="top" style="padding: 0px 20px 0px 0px;">
                                   <img src="${orderDetails?.product?.images[0]}" class="pc-w620-width-64 pc-w620-height-64 pc-w620-width-64-min" width="100" height="104" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100px; height: 104px; border: 0;" />
                                  </td>
                                 </tr>
                                </table>
                               </th>
                               <th valign="top" style="font-weight: normal; text-align: left;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td>
                                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                     <td valign="top">
                                      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <th align="left" valign="top" style="font-weight: normal; text-align: left; padding: 0px 0px 4px 0px;">
                                         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                                          <tr>
                                           <td valign="top" align="left" style="padding: 9px 0px 0px 0px;">
                                            <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: left; text-align-last: left;">
                                             <div><span>${orderDetails?.product?.title}</span>
                                             </div>
                                            </div>
                                           </td>
                                          </tr>
                                         </table>
                                        </th>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </th>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td class="pc-w620-padding-28-32-24-16" align="right" valign="top" style="padding: 24px 16px 24px 16px;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-20" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-align: right; text-align-last: right;">
                           <div><span style="color: #001942;">$${orderDetails?.amount}</span>
                           </div>
                          </div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td style="padding: 0px 0px 32px 0px; ">
                   <table class="pc-w620-tableCollapsed-0" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#ffffff" style="border-collapse: separate; border-spacing: 0; width: 100%; background-color:#ffffff; border-radius: 10px 10px 10px 10px;">
                    <tbody>
                     <tr>
                      <td width="377" valign="middle" style="width: 377px;">
                       <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                        <tr>
                         <td style="padding: 16px 0px 16px 16px;" align="left">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="left" valign="top" style="padding: 0px 0px 0px 0px;">
                             <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                              <tr>
                               <td valign="top" align="left" style="padding: 0px 0px 0px 0px;">
                                <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-26" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: left; text-align-last: left;">
                                 <div><span>Total</span>
                                 </div>
                                </div>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                      <td align="right" valign="middle" style="padding: 16px 16px 16px 16px;">
                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                        <tr>
                         <td valign="top" align="right">
                          <div class="pc-font-alt pc-w620-fontSize-16 pc-w620-lineHeight-20" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 16px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: right; text-align-last: right;">
                           <div><span>$${orderDetails?.amount}</span>
                           </div>
                          </div>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </tbody>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Order Summary -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Contact -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-32-0-4-0" style="padding: 40px 0px 4px 0px; height: unset; border-radius: 0px; background-color: #ffffff;" bgcolor="#ffffff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-20-0" align="center" valign="top" style="padding: 0px 0px 32px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt pc-w620-fontSize-24px pc-w620-lineHeight-32" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: center; text-align-last: center;">
                       <div><span>Problems with the Order?</span>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-w620-itemsSpacings-0-4" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 2px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-16-24-16-24 pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 16px 16px 16px 16px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-valign-middle pc-w620-halign-left">
                               <table class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-halign-left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
                                  <table class="pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 5px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: 0.04em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-transform: uppercase; text-align: left; text-align-last: left;">
                                               <div><span style="text-transform: uppercase;">Email Us</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 0px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0 pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: left; text-align-last: left;">
                                               <div><span style="letter-spacing: -0.03em;">evtnofficial@gmail.com</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
                                  <table class="pc-w620-width-fill pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-right pc-w620-valign-middle" align="right" valign="middle">
                                     <table class="pc-w620-halign-right" align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-right" align="right" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-halign-right" align="right" valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/c2fa1723839cb48cc87fa29b518490bd.png" class="pc-w620-align-right" width="32" height="25" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 32px; height: auto; max-width: 100%; border: 0;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                     <td class="pc-grid-td-last pc-w620-itemsSpacings-0-4" align="left" valign="top" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 2px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-16-24-16-24 pc-w620-halign-center pc-w620-valign-middle" align="left" valign="middle" style="padding: 16px 16px 16px 16px; background-color: #ecf1fb; border-radius: 10px 10px 10px 10px;">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table class="pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-valign-middle pc-w620-halign-left">
                               <table class="pc-width-fill pc-w620-gridCollapsed-0 pc-w620-halign-left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr class="pc-grid-tr-first pc-grid-tr-last">
                                 <td class="pc-grid-td-first pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 8px; padding-bottom: 0px; padding-left: 0px;">
                                  <table class="pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-left pc-w620-valign-middle" align="left" valign="middle">
                                     <table class="pc-w620-halign-left" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td valign="top" style="padding: 0px 0px 5px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: 0.04em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; font-variant-ligatures: normal; color: #001942; text-transform: uppercase; text-align: left; text-align-last: left;">
                                               <div><span style="text-transform: uppercase;">Phone Us</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                      <tr>
                                       <td class="pc-w620-halign-left" align="left" valign="top">
                                        <table class="pc-w620-halign-left" align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-spacing-0-0-0-0" valign="top" style="padding: 0px 0px 0px 0px;">
                                           <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0;">
                                            <tr>
                                             <td valign="top" class="pc-w620-padding-0-0-0-0 pc-w620-textAlign-left" align="left">
                                              <div class="pc-font-alt pc-w620-textAlign-left" style="line-height: 140%; letter-spacing: -0.03em; font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: 600; font-variant-ligatures: normal; color: #001942; text-align: left; text-align-last: left;">
                                               <div><span>+91 7755089819</span>
                                               </div>
                                              </div>
                                             </td>
                                            </tr>
                                           </table>
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                 <td class="pc-grid-td-last pc-w620-itemsSpacings-0-16" align="left" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 8px;">
                                  <table class="pc-w620-width-fill pc-w620-halign-left" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                   <tr>
                                    <td class="pc-w620-halign-right pc-w620-valign-middle" align="right" valign="middle">
                                     <table class="pc-w620-halign-right" align="right" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                                      <tr>
                                       <td class="pc-w620-halign-right" align="right" valign="top">
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                         <tr>
                                          <td class="pc-w620-halign-right" align="right" valign="top">
                                           <img src="https://cloudfilesdm.com/postcards/34e7e765c4eb401497370027260523e1.png" class="pc-w620-align-right" width="32" height="32" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; object-fit: contain; width: 32px; height: auto; max-width: 100%; border: 0;" />
                                          </td>
                                         </tr>
                                        </table>
                                       </td>
                                      </tr>
                                     </table>
                                    </td>
                                   </tr>
                                  </table>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Contact -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-radius-10-10-10-10 pc-w620-padding-24-24-24-24" style="padding: 24px 24px 24px 24px; height: unset; border-radius: 10px 10px 10px 10px; background-color: #0067ff;" bgcolor="#0067ff">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-10-0-0-0" align="center" valign="top" style="padding: 0px 0px 0px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" class="pc-w620-padding-0-0-0-0" align="center">
                      <div class="pc-font-alt" style="text-decoration: none;">
                       <div style="font-size: 14px;line-height: 143%;text-align:center;text-align-last:center;color:#ffffff;letter-spacing:-0.2px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                        <div><span style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; line-height: 143%; text-decoration: none; text-transform: none;">Bamba Road, Kalynapur, Kanpur Nagar (208017)</span>
                        </div>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="center" style="padding: 24px 0px 0px 0px;">
                   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <td valign="top">
                      <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr class="pc-grid-tr-first pc-grid-tr-last">
                        <td class="pc-grid-td-first pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 0px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/649c68b0a6dc8f618df90ec1f44e0082.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 12px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/e931e54b1bf5c1e0cac743c437478e90.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                        <td class="pc-grid-td-last pc-w620-itemsSpacings-6-0" valign="middle" style="width: 20%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 12px;">
                         <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                          <tr>
                           <td class="pc-w620-padding-12-12-12-12" align="center" valign="middle" style="padding: 0px 0px 0px 0px; border-radius: 500px 500px 500px 500px;">
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                             <tr>
                              <td align="center" valign="top">
                               <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                 <td valign="top">
                                  <a class="pc-font-alt" href="https://designmodo.com/postcards" target="_blank" style="text-decoration: none;">
                                   <img src="https://cloudfilesdm.com/postcards/d39505db407e6ca83fd432b2866ccda0.png" class="" width="26" height="26" style="display: block; border: 0; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 26px; height: 26px;" alt="" />
                                  </a>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
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

</html>

  `;
};
