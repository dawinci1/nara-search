# NARA NSDAP Trefferbild-Finder
Chrome-Extension für die NARA-Webseite `catalog.archives.gov`.

Die Extension startet per Klick ein Overlay auf der NARA-Seite und sucht innerhalb der NSDAP-Kartei-Serie nach konkreten Trefferbildern zu einem eingegebenen Suchbegriff. Sie ermittelt nicht nur passende Akten, sondern versucht direkt die betroffenen Bilddateien zu finden und als JPG/IIIF-Link bereitzustellen.

Version: 0.1

Startet den NARA NSDAP Trefferbild-Finder per Klick auf catalog.archives.gov. - by dawinci

## Installation

1. ZIP entpacken.
2. Chrome öffnen: `chrome://extensions/`
3. Entwicklermodus aktivieren.
4. „Entpackte Erweiterung laden“ anklicken.
5. Den entpackten Ordner auswählen.
6. `https://catalog.archives.gov/` öffnen.
7. Extension-Icon anklicken.

## Inhalt

- `manifest.json`
- `background.js`
- `content.js`

## Hinweis

Die Extension läuft nur auf `catalog.archives.gov`. Wenn du sie auf einer anderen Seite anklickst, öffnet sie die NARA-Seite.
