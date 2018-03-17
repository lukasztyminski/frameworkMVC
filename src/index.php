<?php

    // setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 30, '/');

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OOP</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <h1>Wzorzec MVC</h1> alias mvc.dev

    Download:
    <progress id="download" max="100" value="0"></progress>

    Send:
    <progress id="upload" max="100" value="0"></progress>

    <form id="form" action="" novalidate>

    <h4>Formularz zgłoszeniowy</h4>
    <br>
    <div class="main-wrapper">
        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Imię i nazwisko" data-error-message="Podaj imię i nazwisko" required name="name" value="">
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Adres E-mail" data-error-message="Podaj poprawny adres e-mail" required name="email" value="">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Adres (ulica, nr domu)" data-error-message="Podaj adres zamieszkania" required name="address" value="">
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Kod pocztowy (xx-xxx)" data-error-message="Podaj kod pocztowy w formacie xx-xxx" pattern="[0-9]{2}-[0-9]{3}" required name="zipcode" value="">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Miejscowość" data-error-message="Podaj nazwę miejscowości" required name="city" value="">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Numer telefonu" data-error-message="Podaj numer telefonu" name="tel" value="">
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="number" class="form-control" min="1" placeholder="Wiek" data-error-message="Podaj swój wiek" required name="age" value="">
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6 pull-right">
                <input type="submit" class="btn btn-primary pull-right" value="Wyślij">
            </div>
        </div>

        <br>

        <div class="alert alert-danger">
            <ol>

            </ol>
        </div>
</div>
</form>

    <script src="js/formsnew.js"></script>
    <script src="js/webstorage.js"></script>
</body>
</html>