<?php

    // setcookie('session', md5(rand()), time() + 60 * 60 * 24 * 30, '/');

?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OOP</title>
    <link rel="stylesheet" href="assets/css/style.min.css">
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
                    <input type="text" class="form-control" placeholder="Imię i nazwisko" data-error-message="Podaj imię i nazwisko" required>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Adres E-mail" data-error-message="Podaj poprawny adres e-mail" required>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Adres (ulica, nr domu)" data-error-message="Podaj adres zamieszkania" required>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Kod pocztowy (xx-xxx)" data-error-message="Podaj kod pocztowy w formacie xx-xxx" pattern="[0-9]{2}-[0-9]{3}" required>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Miejscowość" data-error-message="Podaj nazwę miejscowości" required>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Numer telefonu" data-error-message="Podaj numer telefonu">
                </div>
            </div>
            <div class="col-xs-6">
                <div class="form-group">
                    <input type="number" class="form-control" min="1" placeholder="Wiek" data-error-message="Podaj swój wiek" required>
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

<!--
    ABY POPRAWNIE PRZESYŁAĆ I ODCZYTYWAĆ DANE Z FORMULARZA PO STRONIE SERWERA,
    NALEŻY DO KAŻDEGO Z PÓL DOPISAĆ ATRYBUT 'name', KTÓRY ZOSTAŁ TUTAJ POMINIĘTY,
    ABY ZACHOWAĆ CZYSTOŚĆ KODU.
-->

    <a href="tel:501-233-232">tel</a>

    <p>lorem ipsum lttyminski@gmai.com plapsdlpsl fajnie lodkodkod@wp.pl</p>

    <script src="assets/js/formsnew.min.js"></script>
</body>
</html>