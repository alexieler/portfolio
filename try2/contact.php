<?php
// import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/src/Exception.php';
require 'vendor/phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $name = trim(filter_input(INPUT_POST,"name",FILTER_SANITIZE_STRING));
  $email = trim(filter_input(INPUT_POST,"email",FILTER_SANITIZE_EMAIL));
  $message = trim(filter_input(INPUT_POST,"message",FILTER_SANITIZE_SPECIAL_CHARS));

  if ($name == "" || $email == "" || $message == "") {
    echo "Please fill in the required fields: Name, Email and Message";
    exit;
  }
  if ($_POST["address"] != ""){
    echo "Bad form input";
    exit;
  }
  if (!PHPMailer::validateAddress($email)) {
    echo "Invalid Email Address";
    exit;
  }

  $email_body = "";
  $email_body .= "Name " . $name . "\n";
  $email_body .= "Email " . $email . "\n";
  $email_body .= "Details " . $message . "\n";
  $email_body;

  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();
  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
  $mail->SMTPDebug = 0;
  //Set the hostname of the mail server
  $mail->Host = 'smtp.gmail.com';
  // use
  // $mail->Host = gethostbyname('smtp.gmail.com');
  // if your network does not support SMTP over IPv6
  //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 587;
  //Set the encryption system to use - ssl (deprecated) or tls
  $mail->SMTPSecure = 'tls';
  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;
  //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = "alexie.leroux613@gmail.com";
  //Password to use for SMTP authentication
  $mail->Password = "sagiwafdyztqcmaa";
  //It's important not to use the submitter's address as the from address as it's forgery,
  //which will cause your messages to fail SPF checks.
  //Use an address in your own domain as the from address, put the submitter's address in a reply-to
  $mail->setFrom('alexie.leroux613@gmail.com.com', $name);
  $mail->addAddress('alexie.leroux613@gmail.com', 'Alexie Leroux');
  $mail->addReplyTo($email, $name);
  $mail->Subject = 'Website email from ' . $name;
  $mail->Body = $email_body;
  if (!$mail->send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      exit;
  }
  header("location:index.php?status=thanks");
}
?>
  <main>
    <?php if (isset($_GET["status"]) && $_GET["status"] == "thanks") {
      echo  "<h1>Thank you so much for the email! I'll try to get back to you as soon as possible.</h1>";
    } else { ?>
      <div class="wrapper">
          <div id="intro">
            <h1>Welcome/Bienvenue!</h1>
              <div id="welcome-para">
                <p>I'm currently adding some last minute touches to my website.
          In the meantime feel free to <button type="button" id="contact-btn">contact me</button>, and we can continue our conversation there. 
          Possibly grab a coffee?</p>
              </div>
          </div>
          <div class="myModal">
              <form id="contact-form" method="post" action="index.php">
                  <div>
                      <label for="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your Name">
                  </div>
                  <div>
                      <label for="email">Email</label>
                      <input id="email" name="email" type="text" placeholder="Your Email">
                      <span id="valid-email">Please enter a valid email address</span>
                  </div>
                  <div style="display:none">
                      <label for="address">Address</label>
                      <input id="address" name="address" type="text" placeholder="Your Email">
                      <p>Please leave this field blank</p>
                  </div>
                  <div>
                      <label for="message">Message</label>
                      <textarea id="message" name="message" type="text" placeholder="Your Message"></textarea>
                  </div>
                  <span id="error">Oops. There is missing information in the email!</span>
                  <div id="form-btns">
                    <button id="submit-btn" type="submit">Send</button>
                    <button type="reset">Reset</button>
                    <button id="back-btn" type="button">Go Back</button>
                  </div>
              </form>
        </div>
      <?php } ?>
    </div>
  </main>