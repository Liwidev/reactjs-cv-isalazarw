import strutils, sugar, jsconsole  # https://nim-lang.github.io/Nim/lib.html
include karax/prelude  # nimble install karax

const lorem = """
Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
""".repeat 24  # Placeholder text.

let say_hi = () => console.log "Hello World" # Arrow function print to browser console.

proc function(): VNode =
  result = buildHtml(tdiv):  # Karax DSL.
    tdiv(class="text-light bg-dark text-large"):
      header(class="navbar bg-primary h1"):
        section(class="navbar-section"):
          button(class="btn btn-primary s-rounded tooltip tooltip-bottom", `data-tooltip`="Menu", onclick = say_hi):
            span(class="icon icon-menu")
        section(class="navbar-section badge", `data-badge`="Dev"):
          text "CV Template"
        section(class="navbar-section"):
          button(class="btn btn-primary s-rounded tooltip tooltip-bottom", `data-tooltip`="Info", onclick = say_hi):
            text "Info"
      section(class="container text-large bg-dark mt-2 pt-2"):
        a(id="#top")
        text lorem
        a(class="s-rounded tooltip bg-error float-right s-circle", `data-tooltip`="Go To Top", href="#top"):
          span(class="icon icon-upward icon-2x")
    link(rel="stylesheet", href="https://unpkg.com/spectre.css/dist/spectre.min.css")
    link(rel="stylesheet", href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css")

setRenderer function
