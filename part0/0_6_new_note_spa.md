# Adding a note in Single Page App version

[//]: # ( University of Helsinki                                               )
[//]: # ( Full Stack Open, Excercice 0.6                                       )
[//]: # ( Ville Jorma <vjorma> 2026                                            )

The following diagram shows what happens when the text field of the form at
<https://studies.cs.helsinki.fi/exampleapp/spa> is filled and Save-button
is clicked.

```mermaid
sequenceDiagram

    %% Set aliases to make source code shorter
    %%
    participant B as Browser
    participant S as Server

    B ->> S: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of B: Browser sends the new note as a single json snippet
    S -->> B: 201 Created
    Note left of S: Server acknowledges the receptions of the note

    Note right of B: Event handler in browser's js initiates re-rendering of the page with the new note 
```
