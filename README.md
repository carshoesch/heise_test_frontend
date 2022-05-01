# Heise Frontend Developer - Testaufgaben

#### wichtig

Nach blockieren der Location die Seite bitte neu laden, damit der default-Wert greift.

### Welcher Layout-Mode wurde verwendet?

**Layout 1**
Hierfür wurde Display:flex verwendet, da damit dafür gesorgt werden konnte, dass ab xy-Pixeln die Haupt- und Kreuzachse des Containers getauscht wird und die Elemente selbst gleich viel Raum einnehmen.

**Layout 2**
Hier habe ich mich ab dem Umbruch für display:grid entschieden, da ich somit das Layout in feste Bereiche (Zeilen und Spalten) einteilen konnte und die Anordnung somit nicht willkürlich geschieht.

**Layout 3**
Hier habe ich mich für den float-Ansatz entschieden, da somit das Bild ab dem Umbruch in die linke Ecke positioniert werden konnte. Des Weiteren können damit Text und andere inline-Elemente um das Element herum angeordnet werden.

### Tailwind vs SASS

**Unterschiede**

- SASS kann als "Verbesserung" des herkömmlichen CSS gesehen werden, in dem weitere Features eingebunden wurden, wie Variablen, Kaskadierung etc.
- Tailwind wird nicht wie CSS/SASS in einer separaten Datei geschrieben, sondern basiert auf Klassennamen, welche bereits sämtliche Funktionalitäten mitbringen.

**SASS**

**Pros**

- Verschachtelungen für bessere Lesbarkeit und scoping
- Keine bestimmte Konvention
  - Klassennamen können frei gewählt werden

**Cons**

- kann sehr unübersichtlich werden
  - aufgrund von Verschachtelungen etc.
- Externes File, welches erst verlinkt werden muss

**Tailwind**

**Pros**

- Markup und Styling in einer Datei
- Naming wurde bereits vordefiniert
- weniger CSS selbst schreiben

**Cons**

- viel "inline-styling"
  - Klassennamen können überladen werden
- größtenteils nur feste Klassennamen, welche bereits vordefiniert sind
- CSS muss "neu" gelernt werden
- keine Kaskadierung

### CSS Box Modell

- Das Box-Model beschreibt den Platz eines Elements innerhalb der Webseite. Das Element kann i.d.R. aus vier unterschiedlichen Teilen zusammengesetzt werden.
  Bestandteile:
- Content -> Text, Bild etc.
- Padding -> Der Platz unmittelbar um den Content herum
- Border -> Der Rahmen um den Content + Border
- Margin -> Der Platz außerhalb des Borders

- Das Box-Modell kann durch die Veränderung der Höhe und Weite ebenfalls manipuliert werden. Hier muss jedoch berücksichtigt werden, dass die Weite durch padding, margin und border vergrößert wird. Um die gewählte Weite/Höhe beizubehalten, kann `box-sizing: border-box;` gewählt werden.
