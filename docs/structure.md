---
sidebar_position: 3
---
# Struktur von Lichess-Studien

## Aufbau einer Studie

Beim Erstellen einer Studie müssen Sie einige Informationen angeben, wir gehen kurz durch, was die Bedeutung dieser Angaben sind:

1. **Flair**: Sie können jeder Studie ein Icon vorgeben, das dann mit der Studie angezeigt wird. Möglicherweise, wenn man die Studie sinnvoll strukturiert, kann man dann in einer langen Liste von Studien die besser voneinander unterscheiden.
1. **Name**: Der Hauptname Ihrer Studie. Dieser wird in der Liste der Studien angezeigt, zusammen mit anderen Informationen. Ansonsten hat der Name keine Bedeutung. Mehr zur Wahl von sinnvollen Namen, wenn wir tiefer in die Organisation von Studien einsteigen.
2. **Sichtbarkeit**: Aktuell werden 3 Sichtbarkeiten unterstützt:
    * Öffentlich: öffentliche Studien sind für jeden Benutzer sichtbar, und vor allem durchsuchbar. Wenn Sie Studien Öffentlich machen, dann **wollen** Sie, dass die Studien gefunden werden.
    * Ungelistet: diese sind zwar sichtbar, aber nicht auffindbar. Ein Benutzer, der nicht aktiv an einer Studie beteiligt ist (mehr dazu später) kann diese nur öffnen, wenn er den Link auf die Studie hat.
    * Nur mit Einladung: hier können nur Teilnehmer an der Studie (mehr zu den unterschiedlichen Rollen später) die Studie öffnen. Selbst wenn jemand den Link hat, kann er oder sie trotzdem nicht auf den Inhalt der Studie zugreifen.
3. **Chat**: Auch hier gibt es unterschiedliche Möglichkeiten, wer in welcher Form am Chat partizipieren kann. Ich habe dafür bisher keine Nutzanwendung finden können.
3. **Computer-Analyse**: Auch hier sind verschiedene MÖglichkeiten vorgesehen:
    * Niemand: keiner in der Studie kann die integrierte Engine nutzen. Das ist vor allem für Trainingssituationen nützlich, so dass die Teilnehmenden nicht mal schnell die Engine anschalten, um nicht selbst nachdenken zu müssen.
    * Nur ich: d.h. der Ersteller der Studie. Wir kommen später zu den verschiedenen Rollen von Personen in einer Studie.
    * Mitwirkende: d.h. die aktiven Teilnehmer einer Studie, die die Studieninhalte also ändern können.
    * Mitglieder: d.h. die passiven Teilnehmer einer Studie, die zwar Zugriff haben, aber keine Inhalte ändern können.
    * Alle: d.h. alle, wirklich alle, die die Studie nutzen, können die Computer-Analyse nutzen.
3. **Eröffnungsbuch & Tablebase**: Studien bieten über den Buch-Button unterhalb der Zugliste Zugriff auf die Eröffnungsbibliothek und die Endspiel Tablebases (alle ausanalysierten Endspiele mit Gewinn, Remis, Verlust). Hier können dieselben Einstellungen wie zuvor gewählt werden. Je nachdem, was studiert oder geübt werden soll, relevant oder nicht.
4. **Klonen erlaubt**: Studien können einfach kopiert werden, mit allen Inhalten, Kommentaren usw. Das ist oft die einzige Möglichkeit, sinnvoll mit einer Studie zu arbeiten, vor allem, wenn man sie verändern will, ohne die Original-Studie zu beeinflussen. Auch hier kann man entscheiden, ob und wer klonen darf.
5. **Teilen und exportieren**: Hier geht es um den Zugriff auf den Reiter "Teilen und exportieren", der zweite von rechts unter dem Brett. Wenn dieser verboten ist, sind die darin enthaltenen Funktionen, inklusive der Möglichkeit, eine Klone zu erzeugen, verboten. Im Abschnitt weiter unten werden verschiedene sinnvolle (und nicht sinnvolle) Kombinationen von Einstellungen erklärt.
6. **Sync aktivieren**: Das ist eine der wichtigsten Einstellungen, da sie darüber entscheidet, ob eine Studie mit anderen in synchronen Sessions verwendet werden kann oder nicht. Folgende Einstellungen sind möglich:
    * Ja: Gleiche Stellung für alle ==> Teilnehmer, die eine Studie zur gleichen Zeit verwenden, sehen zu jedem Zeitpunkt die gleiche Stellung. Dies wird detailliert erklärt, auch wie sich verschiedene Rollen auf die Nutzung auswirken. Dabei bestimmt der Besitzer der Studie bzw. alle Mitwirkenden, welche Stellung aktuell gezeigt wird. Alle anderen können zwar selbständig Züge machen, aber entkoppeln sich dann von der synchronen Studie. Mehr dazu später in XYZ.
    * Nein: Unabhängige Navigation für alle  ==> Beliebig viele Teilnehmer können gleichzeitig die Studie öffnen, und völlig frei navigieren. Es ist sogar möglich, gleichzeitig aktiv an den Zügen der Studie zu arbeiten, natürlich in unterschiedlichen Kapiteln, aber sogar auch im selben Kapitel. Immer vorausgesetzt, dass man Schreibrechte in der Studie hat.
7. **Angepinnter Studienkommentar**: Der Studienkommentar steht die ganze Zeit unter der Studie, ist also kein Kommentar, der auf ein Kapitel (und dort auf eine Stellung) bezogen ist. Denkbar wäre, hier zusätzliche Informationen zur Studie unterzubringen. Die Werte sind "Keine" oder "Direkt unterhalb des Bretts". Leute, die mit Markdown umgehen können, haben hier die Möglichkeit, auch durchaus interessanten Text zu gestalten.

Wenn man eine Studie nachträglich bearbeitet, dann hat man noch die folgenden Optionen:

* **Studie löschen**: Tut, was es sagt. Zur Sicherheit muss man noch den Namen der Studie korrekt angeben, damit man eine Studie löschen kann.
* **Chat löschen**: Wenn man der vielen Kommentare im Chat müde ist, und ihn wieder zurück setzen möchte. Es gab bis dahin nämlich keine Möglichkeit, den Chat nachträglich zu verändern.

### Rollen von Teilnehmern einer Studie

Die folgenden Rollen tauchen immer wieder auf, und sollen deshalb hier zentral erklärt werden. Sie werden an unterschiedlichsten Stellen immer wieder in ähnlicher Weise verwendet.

* Eigner einer Studie
  * Nur der Eigner kann die Studie in allen Einstellungen ändern. Alle anderen haben keinen Zugriff auf die Einstellungen, können sie also nicht mal sehen.
  * Der Eigner hat was die Sichtbarkeit angeht die meisten Möglichkeiten. Die verschiedenen Szenarien werden hier untersucht, und dann hier dokumentiert.
* Mitwirkende einer Studie
  * Mitwirkende einer Studie können am Inhalt einer Studie alles ändern, aber nichts an den Einstellungen.
  * Vermutung ist, dass dies vor allem für die Modi einer Studie gilt.
* Mitglieder einer Studie
  * Sie können an allen Studien teilnehmen, zu denen sie eingeladen sind, aber nur als Zuschauer.
  * Abhängig von den Einstellungen der Kapitel können sie dann die Züge nachspielen, aber nicht ändern. Und wenn die Züge verborgen sind, dann auch vor den Teilnehmern.
* Alle anderen
  * können auf die Studie zugreifen, wenn sie verborgen ist, sie aber den Link haben, oder offen ist.
  * Sie haben alle Möglichkeiten, die ihnen explizit zugestanden werden, also Computer-Analyse, Eröffnungsbücher und Tablebases, oder Teilnahme am Chat (wobei ich da überhaupt keinen sinnvollen Anwendungsfall drin sehe).

### Sinnvolle Kombinationen der Einstellungen

Die folgenden Konstellationen werden betrachtet:

* Klonen und Teilen und exportieren
* Computer-Analyse und Eröffnungsbuch & TablebasJa:L

## Kapitel organisieren

- Erstellen Sie neue Kapitel für unterschiedliche Themen oder Partien.
- Ordnen Sie Kapitel in einer logischen Reihenfolge an.
- Nutzen Sie aussagekräftige Kapitelnamen für eine einfache Navigation.

## Varianten hinzufügen

- Fügen Sie alternative Zugfolgen hinzu, um verschiedene Möglichkeiten zu erkunden.
- Nutzen Sie Untervarianten, um komplexe Verzweigungen darzustellen.
- Halten Sie die Variantenstruktur übersichtlich und nicht zu tief verschachtelt.

## Effektive Kommentare und Annotationen

- Verwenden Sie klare und präzise Sprache in Ihren Kommentaren.
- Nutzen Sie Annotationssymbole (!, ?, !!, ??, etc.) um Züge schnell zu bewerten.
- Kombinieren Sie Textkommentare mit symbolischen Annotationen für eine umfassende Analyse.

## Zusammenarbeit in Studien

- Laden Sie andere Benutzer als Mitarbeiter ein.
- Nutzen Sie die Echtzeitkooperation für gemeinsame Analysen.
- Definieren Sie klare Rollen und Verantwortlichkeiten in kollaborativen Studien.

Eine gut strukturierte Studie erleichtert das Lernen und die Analyse von Schachpartien erheblich.
