<?php

if(isset($_POST['submit']){

   $emailFrom = $_POST['email'];
   $subject = $_POST['subject'];
   $message = $_POST['message'];

   $mailTo = "enter@email.here";
   $headers = "From: ".$emailFrom;
   $txt = "You Have Received From ".$emailFrom.".\n\n".$message;

   mail($mailTo,$subject,$txt,$headers);
   header("Location: contact.html?mailsent")
}