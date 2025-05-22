---
sidebar_position: 3
title: Structure
---
# Structure of Lichess Studies

## Managing Studies

Before we look at the structure of a study and its settings, here are some notes on managing studies in total.

![Managing Lichess Studies](images/02_studies-overview.png "Managing Lichess Studies")

*Figure 2: Management interface for studies*

* Studies are classified by who they belong to and whether you have access to them.
* Therefore, the first entries are the following:
  * All Studies: All studies you have access to and that are searchable. i.e., visibility public or by invitation. A study to which you are not invited with the visibility "Unlisted" is not listed here.
  * My studies: All studies that I own.
  * Studies I contribute to: All studies where you are a contributor (write permissions) or member (read permissions).
  * My public studies: The title is clear here, only studies that belong to you and have the visibility "Public" are displayed.
  * My private studies: All studies that belong to you and have either visibility "Unlisted" or "Invitation Only".
  * My favorite studies: Studies you have access to and that you have given a heart to.
  * Topics: Entry into study management via topics, see chapter below.
  * Staff picks: Studies that are public and suggested by the Lichess operators. Currently, the categories Opening, Middlegame, Endgame, World Chess Championships, Miscellaneous, and Puzzle Packs are distinguished.
  * What are Studies?: The only description of studies that gives a very good overview but leaves many things open. Here is the [link](https://lichess.org/@/lichess/blog/study-chess-the-lichess-way/V0KrLSkA).

## Structure of a Study

When creating a study, you need to provide some information. We'll go through briefly what these entries mean:

1. **Flair**: You can assign an icon to each study, which is then displayed with the study. Possibly, if you structure the study sensibly, you can then distinguish them better from each other in a long list of studies.
1. **Name**: The main name of your study. This is displayed in the list of studies, along with other information. Otherwise, the name has no meaning. More on choosing meaningful names when we delve deeper into the organization of studies.
2. **Visibility**: Currently, 3 visibilities are supported:
    * Public: public studies are visible to every user, and most importantly, searchable. If you make studies Public, then you **want** the studies to be found.
    * Unlisted: these are visible but not findable. A user who is not actively involved in a study (more on this later) can only open it if they have the link to the study.
    * Invitate only: here only participants in the study (more on the different roles later) can open the study. Even if someone has the link, they still cannot access the content of the study.
3. **Chat**: There are also different possibilities here for who can participate in the chat in what form. I haven't been able to find a use case for this so far.
3. **Computer Analysis**: Various options are provided here as well:
    * Nobody: no one in the study can use the integrated engine. This is especially useful for training situations, so that participants can't quickly turn on the engine to avoid having to think for themselves.
    * Only me: i.e., the creator of the study. We'll come to the different roles of people in a study later.
    * Contributors: i.e., the active participants of a study who can change the study contents.
    * Members: i.e., the passive participants of a study who have access but cannot change content.
    * Everyone: i.e., everyone, really everyone who uses the study, can use computer analysis.
3. **Opening explorer & tablebase**: Studies offer access to the opening library and the endgame tablebases (all analyzed endgames with win, draw, loss) via the book button below the move list. The same settings as before can be chosen here. Relevant or not depending on what is being studied or practiced.
4. **Allow cloning**: Studies can be easily copied, with all contents, comments, etc. This is often the only way to work meaningfully with a study, especially if you want to change it without affecting the original study. Here too, you can decide whether and who is allowed to clone.
5. **Share & export**: This is about access to the "Share & Export" tab, the second from the right under the board. If this is forbidden, the functions contained therein, including the possibility to create a clone, are forbidden. The section below explains various sensible (and not sensible) combinations of settings.
6. **Enable sync**: This is one of the most important settings as it determines whether a study can be used with others in synchronous sessions or not. The following settings are possible:
    * Yes: Same position for everyone ==> Participants using a study at the same time see the same position at any given time. This is explained in detail, including how different roles affect usage. The owner of the study or all contributors determine which position is currently shown. Everyone else can make moves independently, but then decouples from the synchronous study. More on this later in XYZ.
    * No: Independent navigation for all ==> Any number of participants can open the study simultaneously and navigate completely freely. It's even possible to actively work on the moves of the study at the same time, of course in different chapters, but even in the same chapter. Always assuming that you have write permissions in the study.
7. **Pinned study comment**: The study comment is below the study all the time, so it's not a comment that relates to a chapter (and there to a position). One could imagine putting additional information about the study here. The values are "None" or "Directly below the board". People who can handle Markdown have the possibility to design quite interesting text here.

When editing a study afterwards, you have the following additional options:

* **Delete Study**: Does what it says. For safety, you still have to enter the name of the study correctly to be able to delete a study.
* **Clear Chat**: If you're tired of the many comments in the chat and want to reset it. Until then, there was no way to change the chat afterwards.

### Roles of Study Participants

The following roles appear again and again and should therefore be explained centrally here. They are used in similar ways in different places.

* Owner of a study
  * Only the owner can change all settings of the study. No one else has access to the settings, so they can't even see them.
  * As far as visibility is concerned, the owner has the most possibilities. The various scenarios are examined here and then documented here.
* Contributors to a study
  * Contributors to a study can change everything in the content of a study, but nothing in the settings.
  * Assumption is that this applies especially to the modes of a study.
* Members of a study
  * They can participate in all studies they are invited to, but only as spectators.
  * Depending on the settings of the chapters, they can then replay the moves, but not change them. And if the moves are hidden, then also from the participants.
* Everyone else
  * can access the study if it's hidden but they have the link, or if it's open.
  * They have all possibilities that are explicitly granted to them, i.e., computer analysis, opening books and tablebases, or participation in chat (although I don't see any meaningful use case for that at all).

### Sensible Combinations of Settings

The following constellations are considered:

* Cloning and Sharing and exporting
* Computer Analysis and Opening Book & Tablebase

## Organizing Chapters

- Create new chapters for different topics or games.
- Arrange chapters in a logical order.
- Use meaningful chapter names for easy navigation.

## Adding Variations

- Add alternative move sequences to explore different possibilities.
- Use sub-variations to represent complex branching.
- Keep the variation structure clear and not too deeply nested.

## Effective Comments and Annotations

- Use clear and precise language in your comments.
- Use annotation symbols (!, ?, !!, ??, etc.) to quickly evaluate moves.
- Combine text comments with symbolic annotations for comprehensive analysis.

## Collaboration in Studies

- Invite other users as collaborators.
- Use real-time cooperation for joint analyses.
- Define clear roles and responsibilities in collaborative studies.

A well-structured study greatly facilitates learning and analyzing chess games.
