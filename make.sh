#!/bin/bash

(
    cat <<EOF
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="utf-8"/>
    <title>Flashing lights</title>
    <link rel="stylesheet" type="text/css" media="all" href="./email-LEDs.css"/>
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
      crossorigin="anonymous"></script>
    <script src="./email-LEDs.js"></script>
  </head>
  <body>
EOF

    cat email-LEDs.html

    cat <<EOF
   </body>
</html>
EOF
) > index.html
