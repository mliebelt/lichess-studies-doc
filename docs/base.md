---
sidebar_position: 4
title: Basisnutzung
---
# Basisnutzung von Lichess-Studien

REGIE: Das Folgende sind Vorschläge mit Themenblöcken, die dann durch die konkrete Ausgestaltung ersetzt werden.

## Das Brett

- Umgang mit dem Brett
- Optionen wie beim Spielen / bei der Analyse
- Optionen relevant für Studien

Zur Bedienung des Bretts über die Tastatur, siehe [Tastenkürzel](#key-shortcuts).

## Die Notation samt Erweiterungen

- Wie entsteht die Notation?
- Welche Ergänzungen sind wie möglich?
- Umgang mit Kommentaren und Varianten
_ Optionen des Hamburger-Menus

## Weitere Optionen unter dem Brett

- Was sind die Tags, welche davon sollten wann wie gefüllt werden?
- Die Bedeutung der Buttons SYNC und REC (im Überblick)
- Kommentare: was geht, was nicht
- NAGs im Detail
- Computeranalyse und Multibrett
- Möglichkeiten zum teilen

## Das Eröffnungsbuch & die Tablebase

- Wie kann man das Eröffnungsbuch in Studien nutzen?
- Und wie funktioniert hier die Tablebase?

## Übergänge zu Studien

Wie kommmt man von unterschiedlichsten Stellen in Lichess in eine Studie, welche Möglichkeiten hat man dabei?

- Aufnahme von Spielen in eine Studie.
- Hinzufügen der aktuellen Analyse zu einer Studie.
- Aufnahme einer Stellung des Brett-Editors in eine Studie.

## Tastenkürzel {#key-shortcuts}

Relativ unbekannt, aber vor allem für Power User sehr nützlich. Ich weiß nicht, seit wann die Tastenkürzel für die Navigation auf dem Brett eingeführt wurden. Einige davon kennen viele, andere sind weniger bekannt. Ich versuche mich hier an die Kategorien der Lichess-Hilfe zu halten. Ich habe auch unterschiedliche Erfahrungen mit dem Kürzel für die Tastaturhilfe gemacht, aber noch nicht genau herausbekommen, wann es funktioniert.

| Kürzel | Bedeutung | Erklärung |
|--------|-----------|-----------|
| `?` | Tastaturhilfe | Öffnet die Hilfe, aus der ich die folgenden Kürzel entnommen habe. |
| **Navigation** |||
| Pfeil links/rechts :arrow_left:/:arrow_right:  | Zug vor/zurück | |
| k/j  | Zug vor/zurück | ähnliche Kürzel wie VIM |
| `SHIFT` :arrow_up:/:arrow_down: | Variante wählen | Funktioniert nur beim Zug vor einer Variante. Erster Zug ist immer die Hauptvariante. Danach :arrow_right: für den Einstieg in die Variante. |
| `SHIFT` :arrow_left:/:arrow_right: | Springt zur vorigen / nächsten Variante | Man landet auf dem Zug direkt vor der Variante, und kann dann die Variante auswählen. |
| :arrow_up:/`0`/`Pos1` | Springt zum ersten Zug | |
| :arrow_down:/`$`/`Ende` | Springt zum letzten Zug der Hauptvariante. | Auch, wenn der Rest der Partie über "Variante erzwingen" zu einer Variante gemacht wurde. `$` hat bei mir nicht funktioniert.  |
| `n` | Nächstes Kapitel | |
| `p` | Vorheriges Kapitel | |
| Mouse Scroll | Züge vor-/zurückspulen | Mit der Maus kann man die Züge vor-/zurückspulen. Das geht oft viel schneller, und dennoch exakt. |
| `c` | Chat-Eingabefeld fokussieren | Danach kann man direkt einen Chateintrag absetzen (sofern der Chat erlaubt ist). |
| `d` | Kommentiere diese Stellung | Springt dann in das Kommentarfeld. Das geht auch vor dem ersten Zug (eine Art Spielkommentar zu Beginn). |
| **Analyse** |||
| `l` | Computeranalyse ein/aus | Stockfish wird dann mit den letzten Einstellungen gestartet/gestoppt.|
|  z | Alle Computeranalysen aktivieren / deaktivieren | Dies inkludiert `l` von oben. Ich konnte keinen weiteren Unterschied feststellen. Der Tab `Computer-Analyse` wird ebenfalls deaktiviert.|
| Leertaste | Spiele den besten Computerzug | Wenn Stockfish noch nicht aktiviert ist, wird er hiermit aktiviert, und der beste Zug wird sofort gespielt. |
| `SHIFT` `I` | Inline-Notation an-/ausschalten | |
| `x` | Bedrohungen anzeigen | Siehe  |
| `a` | Pfeil für den besten Zug | Setzt voraus, dass die Computeranalyse an ist. Die Dicke der Pfeile steht für ihre Güte. |
| `v` | Variantenpfeile ein-/ausschalten | Diese überlagern sich teilweise mit den Pfeilen für die besten Zügen. Der Pfeil für die  Hauptvariante ist größer als die anderen.  |
| `e` | Eröffnungs-/Endspielexplorer ein-/ausschalten | Je nach Phase, in der das Spiel ist. |
| `SHIFT` `SPACE` | Spielt den besten Explorerzug. | Setzt natürlich voraus, dass der Explorer aktuell aktiv ist. |
| `r` | Fordere eine Computer-Analyse an | Hat für mich zu keinem Zeitpunkt funktioniert. |
| `ENTER` | Als nächstes: Lerne aus Deinen Fehlern | Keine Ahnung, was die Bedeutung davon ist. |
| `b` | Nächster grobe Patzer | Jeder eigene Zug, der mit `??` markiert ist. |
| `m` | Nächster Fehler | Jeder eigene Zug, der mit `?` markiert ist. |
| `i` | Nächster fragwürdiger Zug | Jeder eigene Zug, der mit `?!` markiert ist. |
| **Kommentare** |||
| C | Kommentar hinzufügen/bearbeiten | Zeigt / verbirgt alle textuellen Kommentare. |
| `SHIFT` `C` | Zeige / verberge Kommentare | Zeigt / Verbirgt alle textuellen Kommentare. Annotationen an den Zügen bleiben sichtbar und erhalten. |
| `g` | Zeigt den mit Symbolen annotieren Dialog | |
| `1`\|`3`\|`5` | Guter \| Brillianter \| Interessanter Zug | Steht für `!`, `!!`, `!?`. Jeweils nur eine Möglichkeit auswählbar. |
| `2`\|`4`\|`6` | Fehler \| Grober Patzer \| Fragwürdiger Zug | Steht für `?`, `??`, `?!`. Jeweils nur eine Möglichkeit auswählbar. |
| `SHIFT` `1` - `8` | Die zweite Spalten im  Annotationen-Dialog, von ausgeglichen bis gewonnen. | Ausgeglichene Stellung (`=`) / Unklare Stellung (`∞`) <br></br> Leichter Vorteil Weiß / Schwarz (`⩲`/`⩱`) <br></br> Weiß / Schwarz steht besser (`±`/`∓`) <br></br> Weiß / Schwarz gewinnt (`+−`/`-+`). <br></br>Nur eine der 8 Möglichkeiten pro Zug auswählbar. |

Noch eine wichtige Anmerkungen:

* Die allermeisten Tastaturkürzel gelten nur für das lokale Brett, die lokale Anzeige der Studie, und haben keine Auswirkung für alle anderen, die in der Studie sind.
* Wo dies der Fall ist, habe ich es explizit erwähnt.


## Typische Szenarien in der Nutzung

- Analysieren Sie Partien potenzieller Gegner.
- Bereiten Sie spezifische Eröffnungsvarianten vor.
- Dokumentieren Sie typische Mittel- und Endspielstrategien Ihrer Gegner.
- Erstellen Sie einen Turnierplan mit Zielen und Strategien.
