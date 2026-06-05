# NARA NSDAP Trefferbild-Finder

Script/Chrome-Extension für die NARA-Webseite `catalog.archives.gov`.
Startet ein Overlay auf der NARA-Seite und sucht innerhalb der NSDAP-Kartei-Serie nach konkreten Trefferbildern zu einem eingegebenen Suchbegriff.
Ermittelt nicht nur passende Akten, sondern versucht direkt die betroffenen Bilddateien zu finden und als JPG/IIIF-Link bereitzustellen.

## Funktionen

- Suche in der NARA NSDAP-Serie
- Ermittlung konkreter Trefferbilder statt nur Akten-Treffer
- Anzeige von Akte, NAID, Bildnummer, Datei und Objekt-ID
- Markierung von MFKL / MFOK
- Bild im neuen Tab öffnen
- Hintergrund-Link für Mausrad-Klick oder Strg-Klick
- URL kopieren
- Einzelbilder herunterladen
- alle aktuell gefilterten Treffer herunterladen
- JSON-Export der Trefferliste
- Retry-Logik bei temporären NARA-Fehlern

## Hinweis

Die Extension ist ein Hilfswerkzeug für Recherchezwecke. Sie nutzt die öffentlich erreichbaren NARA-Webendpunkte und sollte wegen möglicher Serverfehler oder Rate-Limits nicht zu aggressiv verwendet werden.
