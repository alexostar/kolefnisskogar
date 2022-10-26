Följer denna [guide](https://techviewleo.com/install-wordpress-with-apache-and-letsencrypt-on-ubuntu/)
MariaDB, Apache och PHP redan installerad

User IceSwede (Dd som password)

Database wpkolefnidb skapad

Which names would you like to activate HTTPS for?

---

1: lampwp.casabrava.se
2: wp.kolefnisskogar.eu

---

Select the appropriate numbers separated by commas and/or spaces, or leave input
blank to select all options shown (Enter 'c' to cancel): 2
Requesting a certificate for wp.kolefnisskogar.eu

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/wp.kolefnisskogar.eu/fullchain.pem
Key is saved at: /etc/letsencrypt/live/wp.kolefnisskogar.eu/privkey.pem
This certificate expires on 2023-01-24.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

Deploying certificate
Some rewrite rules copied from /etc/apache2/sites-enabled/wpkolefni.conf were disabled in the vhost for your HTTPS site located at /etc/apache2/sites-available/wpkolefni-le-ssl.conf because they have the potential to create redirection loops.
Successfully deployed certificate for wp.kolefnisskogar.eu to /etc/apache2/sites-available/wpkolefni-le-ssl.conf
Congratulations! You have successfully enabled HTTPS on https://wp.kolefnisskogar.eu

---

If you like Certbot, please consider supporting our work by:

- Donating to ISRG / Let's Encrypt: https://letsencrypt.org/donate
- Donating to EFF: https://eff.org/donate-le

---
