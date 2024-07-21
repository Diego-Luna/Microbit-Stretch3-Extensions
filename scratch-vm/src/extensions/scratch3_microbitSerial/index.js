const imgMenu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZTEyNDJiOwogICAgICAgIHN0cm9rZTogI2ZmZjsKICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7CiAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDsKICAgICAgICBzdHJva2Utd2lkdGg6IDNweDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0zOS40LDYxLjJjLTEuMi0xLjgtMi41LTMuNy0zLjctNS41LTQuNC02LjYtOC44LTEzLjItMTMuMi0xOS43LS4zLS41LS41LTEuMy0xLjQtMS4xLTEsLjItLjcsMS4xLS43LDEuOCwwLDEyLjEsMCwyNC4xLDAsMzYuMiwwLDEuNS0uNCwxLjktMS45LDEuOS00LjYsMC05LjIsMC0xMy44LDAtMS4yLDAtMS41LS4zLTEuNS0xLjUsMC0yMi4xLDAtNDQuMiwwLTY2LjMsMC0xLjMuNC0xLjYsMS42LTEuNiw1LjQsMCwxMC45LDAsMTYuMywwLDEuMSwwLDEuNy40LDIuMywxLjMsNC43LDgsOS40LDE1LjksMTQuMSwyMy45LDEuNSwyLjYsMi4zLDIuNiwzLjksMCw1LTcuOSwxMC0xNS43LDE0LjktMjMuNi43LTEuMiwxLjUtMS42LDIuOS0xLjYsNS4yLDAsMTAuNCwwLDE1LjUsMCwxLjIsMCwxLjguMiwxLjgsMS42LDAsMjIsMCw0NC4xLDAsNjYuMSwwLDEuNC0uNSwxLjctMS44LDEuNi00LjksMC05LjcsMC0xNC42LDAtMS41LDAtMS44LS40LTEuOC0xLjgsMC0xMi4xLDAtMjQuMywwLTM2LjRzMC0uOSwwLTEuM2MwLS42LjItMS40LS41LTEuNy0uOS0uMy0xLjEuNi0xLjUsMS4yLTUuMyw4LjMtMTAuNiwxNi43LTE1LjksMjUtLjMuNS0uNSwxLjItMS4zLDEuNWgwWiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM5LjQsNjEuMmMtMS4yLTEuOC0yLjUtMy43LTMuNy01LjUtNC40LTYuNi04LjgtMTMuMi0xMy4yLTE5LjctLjMtLjUtLjUtMS4zLTEuNC0xLjEtMSwuMi0uNywxLjEtLjcsMS44LDAsMTIuMSwwLDI0LjEsMCwzNi4yLDAsMS41LS40LDEuOS0xLjksMS45LTQuNiwwLTkuMiwwLTEzLjgsMC0xLjIsMC0xLjUtLjMtMS41LTEuNSwwLTIyLjEsMC00NC4yLDAtNjYuMywwLTEuMy40LTEuNiwxLjYtMS42LDUuNCwwLDEwLjksMCwxNi4zLDAsMS4xLDAsMS43LjQsMi4zLDEuMyw0LjcsOCw5LjQsMTUuOSwxNC4xLDIzLjksMS41LDIuNiwyLjMsMi42LDMuOSwwLDUtNy45LDEwLTE1LjcsMTQuOS0yMy42LjctMS4yLDEuNS0xLjYsMi45LTEuNiw1LjIsMCwxMC40LDAsMTUuNSwwLDEuMiwwLDEuOC4yLDEuOCwxLjYsMCwyMiwwLDQ0LjEsMCw2Ni4xLDAsMS40LS41LDEuNy0xLjgsMS42LTQuOSwwLTkuNywwLTE0LjYsMC0xLjUsMC0xLjgtLjQtMS44LTEuOCwwLTEyLjEsMC0yNC4zLDAtMzYuNHMwLS45LDAtMS4zYzAtLjYuMi0xLjQtLjUtMS43LS45LS4zLTEuMS42LTEuNSwxLjItNS4zLDguMy0xNi40LDI2LjItMTcuMSwyNi42aDBaIi8+Cjwvc3ZnPg=="
const imgBLOC = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDgwIDgwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICAgIHN0cm9rZS13aWR0aDogMHB4OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC4yNywzNS45NGMtLjI3LS40MS0uNTQtLjgxLS44MS0xLjIxLS45Ni0xLjQ0LTEuOTItMi44OC0yLjg4LTQuMzItLjA3LS4xMS0uMTEtLjI5LS4zLS4yNS0uMjEuMDUtLjE1LjI0LS4xNS4zOCwwLDIuNjQsMCw1LjI4LDAsNy45MiwwLC4zMy0uMDkuNDItLjQxLjQxLTEuMDEtLjAyLTIuMDEtLjAyLTMuMDIsMC0uMjYsMC0uMzMtLjA2LS4zMy0uMzMsMC00LjgzLDAtOS42NiwwLTE0LjUsMC0uMjguMDktLjM1LjM2LS4zNSwxLjE5LjAxLDIuMzguMDEsMy41NywwLC4yNCwwLC4zNy4wOC40OS4yOSwxLjAyLDEuNzQsMi4wNiwzLjQ4LDMuMDksNS4yMi4zMy41Ni41MS41Ny44NiwwLDEuMDktMS43MiwyLjE4LTMuNDQsMy4yNS01LjE3LjE2LS4yNi4zNC0uMzUuNjQtLjM0LDEuMTMuMDIsMi4yNi4wMSwzLjQsMCwuMjcsMCwuMzkuMDQuMzkuMzYsMCw0LjgyLDAsOS42NCwwLDE0LjQ1LDAsLjMxLS4xMS4zNi0uMzkuMzYtMS4wNi0uMDEtMi4xMy0uMDItMy4xOSwwLS4zMiwwLS40LS4wOC0uMzktLjM5LjAxLTIuNjUsMC01LjMxLDAtNy45NiwwLS4xLDAtLjIsMC0uMjksMC0uMTMuMDUtLjMyLS4xMS0uMzctLjItLjA3LS4yNS4xNC0uMzMuMjYtMS4xNiwxLjgzLTIuMzEsMy42NS0zLjQ3LDUuNDgtLjA3LjExLS4xMS4yNS0uMjguMzRaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOS41Myw1My4wNWMtLjQ2LS42OS0uOS0xLjM0LTEuMzMtMS45OS0uNzctMS4xNS0xLjUzLTIuMy0yLjMtMy40NC0uMS0uMTUtLjE1LS40NC0uMzktLjM3LS4yNi4wOC0uMTQuMzYtLjE0LjU1LDAsMi41NC0uMDIsNS4wOCwwLDcuNjIsMCwuNDQtLjEzLjUzLS41NC41Mi0uOTUtLjAzLTEuOS0uMDItMi44NSwwLS4yNCwwLS4zNy0uMDItLjM3LS4zMy4wMS00LjgzLDAtOS42NiwwLTE0LjQ5LDAtLjI1LjA1LS4zNC4zMi0uMzMsMS4yLjAyLDIuNC4wMSwzLjYxLDAsLjI1LDAsLjM3LjEuNDkuMywxLjAxLDEuNzIsMi4wMywzLjQzLDMuMDUsNS4xNS4zOC42My41My42NC45MS4wMywxLjA5LTEuNzIsMi4xNy0zLjQ0LDMuMjUtNS4xNy4xMy0uMjEuMjctLjMuNTMtLjMsMS4xNi4wMSwyLjMyLjAxLDMuNDgsMCwuMjcsMCwuMzkuMDQuMzkuMzYtLjAxLDQuODIsMCw5LjYzLDAsMTQuNDUsMCwuMjktLjEuMzUtLjM2LjM1LTEuMDUtLjAxLTIuMS0uMDItMy4xNCwwLS4zNCwwLS40NC0uMDctLjQ0LS40My4wMi0yLjY3LDAtNS4zMywwLTgsMC0uMDgsMC0uMTcsMC0uMjUsMC0uMTMuMDQtLjMtLjE1LS4zNC0uMTctLjA0LS4yMS4xMS0uMjcuMjEtLjMxLjQ5LS42My45OS0uOTQsMS40OS0uOTIsMS40Ni0xLjg1LDIuOTItMi44MSw0LjQ0WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ1LjU1LDQ0LjA4Yy0uNzQuODctMS40MSwxLjY3LTIuMDksMi40Ni0uNS41OS0uOTgsMS4xOC0xLjUsMS43NS0uMjguMzEtLjMuNTYtLjA5LjkzLDEuMTksMS45OSwyLjM1LDMuOTksMy41Miw1Ljk4LjA3LjEzLjE5LjI0LjE4LjQ0LTEuMywwLTIuNTksMC0zLjg5LDAtLjIsMC0uMjUtLjE1LS4zMi0uMjgtLjY1LTEuMDctMS4zLTIuMTQtMS45Ni0zLjIyLS4zMS0uNTEtLjQ1LS40OS0uODgtLjA4LS41OS41Ny0uODcsMS4yMi0uNzYsMi4wNS4wNS40MSwwLC44NC4wMSwxLjI2LDAsLjE5LS4wNS4yNy0uMjYuMjctMS4xMiwwLTIuMjQtLjAxLTMuMzUsMC0uMjYsMC0uMjUtLjEzLS4yNS0uMzEsMC0uOTEsMC0xLjgxLDAtMi43MiwwLTQuMDksMC04LjE4LDAtMTIuMjcsMC0uMzYuMDctLjQ4LjQ1LS40Ni45OS4wMywxLjk4LjAyLDIuOTgsMCwuMzQsMCwuNDUuMDcuNDUuNDMtLjAyLDIuMzYsMCw0LjcyLDAsNy4wOCwwLC4wOCwwLC4xNywwLC4yNSwwLC4xNC0uMDMuMy4xMy4zNi4xOS4wOC4yOC0uMDguMzctLjE5LjktMS4xNCwxLjgtMi4yOCwyLjY5LTMuNDIuMTctLjIyLjMzLS4zMi42Mi0uMzIsMS4yOC4wMiwyLjU3LDAsMy45NiwwWiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTU4LjI1LDMyLjhjMC0xLjc5LDAtMy41NywwLTUuMzYsMC0uMjkuMDQtLjQxLjM4LS40LDEuMDEuMDMsMi4wMS4wMiwzLjAyLDAsLjI4LDAsLjM3LjA4LjM1LjM1LS4wMi4yOSwwLC41OSwwLC44OCwwLC4xNi4wNS4zMS4yMi4zNy4xOC4wNy4zMy4wMS40NC0uMTQuMDQtLjA2LjA5LS4xMS4xMy0uMTYsMS40Mi0xLjc0LDQuMTktMS45NCw1Ljg1LS40Mi42OC42MiwxLjAzLDEuMzksMS4wNSwyLjMzLjA3LDIuNjUtLjA0LDUuMywwLDcuOTUsMCwuMzQtLjEuNDItLjQyLjQxLTEuMDUtLjAyLTIuMS0uMDEtMy4xNCwwLS4yNSwwLS4zNC0uMDYtLjM0LS4zMi4wMS0yLjA0LDAtNC4wOC4wMS02LjExLjAxLTEuNDgtMS4zNS0yLjQxLTIuNzItMS44Mi0uNzEuMzEtMS4wMS44Ny0xLjAxLDEuNjMsMCwxLjk4LDAsMy45NiwwLDUuOTVxMCwuNjctLjY5LjY3Yy0uOTIsMC0xLjg1LS4wMS0yLjc3LDAtLjMsMC0uMzctLjA5LS4zNy0uMzcuMDEtMS44MSwwLTMuNjMsMC01LjQ0WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM1LjcxLDM4Ljk4Yy0zLjY3LjE1LTYuOTQtMi4yOC02Ljk2LTUuOTktLjAxLTIuNTYsMS4zMS00LjM5LDMuNjEtNS40NywyLjY2LTEuMjUsNS44NS0uNTYsNy43MywxLjU5LDIuNzgsMy4xOSwxLjQsOC4wNi0yLjY4LDkuNS0uNjUuMjMtMS4zMi4zNi0xLjcuMzdaTTM1LjAyLDMwLjA3Yy0xLjQ3LDAtMi42NiwxLjI3LTIuNjUsMi44MywwLDEuNTYsMS4yMSwyLjgzLDIuNjcsMi44MiwxLjQ1LDAsMi42Ny0xLjMsMi42Ni0yLjg0LS4wMS0xLjU2LTEuMjEtMi44Mi0yLjY3LTIuODFaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMuMzcsMzMuMjZjLjA5LTIuMjcsMS4xNS0zLjk5LDMuMTItNS4xNCwyLjUxLTEuNDcsNS44Ny0xLjA0LDcuOS45OSwyLjYxLDIuNiwyLjM0LDYuNjUtLjYsOC45LTMuNDQsMi42My04LjYyLDEuMjEtMTAuMDctMi43Ni0uMTMtLjM2LS4yMi0uNzItLjI3LTEuMDktLjA0LS4yOS0uMDUtLjU4LS4wNy0uOVpNNTIuMzEsMzMuMjZjMC0xLjU3LTEuMTYtMi44NC0yLjYyLTIuODYtMS40Ni0uMDEtMi42NywxLjI2LTIuNjcsMi44MSwwLDEuNTgsMS4xNiwyLjg0LDIuNjMsMi44NCwxLjQ5LDAsMi42Ny0xLjIzLDIuNjctMi44WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMxLjExLDUxLjg2YzAsMS4yLS4wMSwyLjQsMCwzLjYsMCwuMzgtLjExLjUtLjUuNDktLjk5LS4wMy0xLjk4LS4wMi0yLjk4LDAtLjI2LDAtLjM3LS4wNC0uMzYtLjM0LDAtLjI2LjE2LS42NS0uMTEtLjc4LS4zMS0uMTUtLjQ4LjI2LS42OC40My0yLDEuNjktNC40OCwxLjA3LTUuNjctLjA5LTEuMDctMS4wNC0xLjE2LTIuMzQtLjgxLTMuNjkuMzQtMS4zMiwxLjMxLTIuMDQsMi42LTIuMjUsMS40OC0uMjUsMi45OC0uMjgsNC40Mi4yNi4zMi4xMi4zNi0uMDQuMzctLjI5LjAyLTEuMjQtLjg2LTIuMS0yLjI3LTIuMTctMS4wNy0uMDUtMi4xMS4xNC0zLjExLjU2LS4xNy4wNy0uMzEuMTctLjQtLjEyLS4yMy0uNzMtLjQ5LTEuNDUtLjc1LTIuMTctLjA2LS4xNy0uMDctLjI5LjEzLS4zNiwyLjI4LS43Nyw0LjYtMS4yMSw2Ljk4LS40OSwxLjI2LjM4LDIuMzIsMS4wMywyLjg2LDIuMzEuMjMuNTMuMjYsMS4wOC4yNywxLjY0LjAxLDEuMTYsMCwyLjMyLDAsMy40OFpNMjUuNTEsNTAuODJjLS42NS0uMDQtMS4zMy4xNi0xLjgyLjgxLS41OS43Ny0uMjUsMS44Ni42NywyLjE5LDEuNTguNTUsMy4xNy0uNjksMy4wMS0yLjM1LS4wMi0uMjQtLjEyLS4zOC0uMzYtLjQ0LS40NS0uMTItLjktLjE5LTEuNS0uMloiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01My43OSw1MS4wN2MtMS4xNiwwLTIuMzIsMC0zLjQ4LDAtLjUyLDAtLjY1LjItLjQ1LjY5LjU0LDEuMzIsMi4xNSwxLjk1LDMuNiwxLjQxLjUyLS4xOS45OS0uNDcsMS4zNi0uODcuMTgtLjE5LjI4LS4xOC40Ny0uMDEuNS40NCwxLjAxLjg5LDEuNTUsMS4yOC4zNC4yNS4yNS40MS4wMy42NC0uNzMuNzctMS42MiwxLjI3LTIuNjQsMS41NC0xLjk4LjUzLTMuOTIuNDktNS42OS0uNjUtMS44Mi0xLjE2LTIuNjMtMi44OC0yLjU0LTUuMDEuMTEtMi41LDEuMDctNC41NCwzLjQ2LTUuNjIsMS42LS43MywzLjI3LS42OSw0LjktLjEsMS44LjY1LDIuNjUsMi4xNCwzLjEzLDMuODcuMjMuODEuMjIsMS42NS4yMywyLjQ5LDAsLjI5LS4xLjM1LS4zNy4zNS0xLjE5LS4wMS0yLjM4LDAtMy41NiwwWk01MS44OCw0OS4xOGMuNjQsMCwxLjI4LDAsMS45MiwwLC4yLDAsLjMtLjA0LjI5LS4yNy0uMDUtMS4zLTEuMDctMi4yNC0yLjQ0LTIuMjMtMS4xNiwwLTEuODkuODMtMS45NSwyLjE1LS4wMS4yNy4wNi4zNi4zNC4zNS42MS0uMDIsMS4yMywwLDEuODQsMFoiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03My42NCw1NS45NmMtMS43OC0uMDQtMy40Mi0uNDItNC44Ny0xLjQyLS4yNy0uMTktLjMyLS4zNC0uMTMtLjYzLjM0LS41Mi42NS0xLjA3Ljk0LTEuNjMuMTUtLjI5LjI3LS4yOS41My0uMTIuODMuNTIsMS42OS45OSwyLjY3LDEuMTUuNTQuMDksMS4wOC4xMiwxLjYyLS4wMi4zNS0uMDkuNTYtLjMxLjYtLjY3LjA0LS4zNy0uMTctLjYyLS41LS43My0uODctLjMtMS43NS0uNTgtMi42Mi0uODgtLjM3LS4xMy0uNzMtLjI4LTEuMDktLjQzLTEuMjQtLjUzLTEuODgtMS40OC0xLjk0LTIuODMtLjA1LTEuMjcuNDMtMi4yOSwxLjQ3LTMuMDEuOTMtLjY0LDEuOTgtLjg3LDMuMDktLjksMS41Mi0uMDMsMi45Ny4yMSw0LjMyLjk3LjMzLjE5LjQ3LjM1LjIyLjczLS4zMi41LS42LDEuMDQtLjg2LDEuNTgtLjE2LjMzLS4yOS40LS42NC4yLS45LS41MS0xLjg1LS45Mi0yLjkzLS44NC0uMjQuMDItLjQ3LjA0LS43LjEyLS41My4xOS0uNjUuNzMtLjI2LDEuMTMuMjUuMjYuNTcuMzkuOS41MS43MS4yNiwxLjQ2LjM3LDIuMTkuNTcuNDMuMTIuODUuMjYsMS4yNC40OS45Ny41NSwxLjQ2LDEuMzgsMS40OCwyLjUuMDEuNSwwLDEtLjEyLDEuNS0uMzYsMS41NS0xLjQ4LDIuMjEtMi45MiwyLjQ5LS41OC4xMS0xLjE2LjEzLTEuNy4xNloiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01OS43Nyw1MC4yYzAtMS44LDAtMy42LDAtNS40LDAtLjMuMDYtLjQxLjM5LS40LDEuMDMuMDIsMi4wNy4wMiwzLjEsMCwuMjUsMCwuMzQuMDYuMzMuMzItLjAyLjU3LDAsMS4xNCwwLDEuNzIsMCwuMTItLjAzLjI3LjE0LjMuMTUuMDMuMTgtLjExLjIzLS4yLjIzLS40Mi41LS44MS43Ny0xLjE5LjYtLjgzLDEuNDYtMS4wNiwyLjQxLTEuMTMuMTktLjAxLjI1LjA1LjI0LjIzLDAsMS4yLDAsMi40LDAsMy42LDAsLjItLjA5LjIyLS4yNS4yMy0uMzkuMDMtLjc4LjA3LTEuMTUuMTktMS40LjQzLTIuMjgsMS41OS0yLjM2LDMuMTItLjA3LDEuMzItLjA1LDIuNjUsMCwzLjk3LjAxLjMxLS4wNC40My0uNC40My0xLjAxLS4wMy0yLjAxLS4wMi0zLjAyLDAtLjM0LDAtLjQ1LS4wNy0uNDQtLjQzLjAyLTEuNzksMC0zLjU3LDAtNS4zNloiLz4KPC9zdmc+"

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');
const tf = require('@tensorflow/tfjs');

let port;
let writer;
let reader;
let isConnected = false;
let classNames = [];
let dataByClass = [];
let model;
let timeToken = 1;
let sampleCount = {};

async function connect() {
    if (!('serial' in navigator)) {
        alert('Tu navegador no soporta la API Web Serial');
        return;
    }

    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });

        const textEncoder = new TextEncoderStream();
        const writableStreamClosed = textEncoder.readable.pipeTo(port.writable);
        writer = textEncoder.writable.getWriter();

        const textDecoder = new TextDecoderStream();
        const readableStreamClosed = port.readable.pipeTo(textDecoder.writable);
        reader = textDecoder.readable.getReader();

        isConnected = true;
        console.log('Conectado a la micro:bit');
    } catch (error) {
        console.error('Error al conectar:', error);
    }
}

async function sendData(dataToSend) {
    if (isConnected && writer) {
        try {
            await writer.write(dataToSend + '\n');
            console.log('Datos enviados:', dataToSend);
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    } else {
        console.log('No hay conexión activa');
    }
}

async function receiveData() {
    if (isConnected && reader) {
        let lineBuffer = '';
        const { value, done } = await reader.read();
        if (done) {
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            return "Error in Micro:bit";
        }
        if (value) {
            lineBuffer += value;
            let newlineIndex;
            while ((newlineIndex = lineBuffer.indexOf('\n')) >= 0) {
                const line = lineBuffer.substring(0, newlineIndex + 1);
                lineBuffer = lineBuffer.substring(newlineIndex + 1);

                if (line.includes("system") === false ) {
                    console.log(line.trim());
                    return (line.trim());
                }
            }
        }
    }
    return "Error: no Value";
}

function normalizeData(data) {
    return data.map(val => val / 1023);
}

async function readDataFromMicrobit() {
    await sendData(`system:on,${timeToken}`);
    const data = [];
    let check = "0";
    let lineBuffer = '';
    while (check !== "system:off\n") {
        const { value, done } = await reader.read();
        if (done) {
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
        }
        if (value) {
            lineBuffer += value;
            let newlineIndex;
            while ((newlineIndex = lineBuffer.indexOf('\n')) >= 0) {
                const line = lineBuffer.substring(0, newlineIndex + 1);
                lineBuffer = lineBuffer.substring(newlineIndex + 1);

                if (line !== "system:off\n" && line.split("-") && line.split("-")[0] === "system") {
                    console.log(line.trim());
                    line = line.split("-")[1];
                    const pinValues = line.trim().split(',').map(pin => parseFloat(pin.split(':')[1]));
                    console.log(pinValues);
                    if (pinValues.length === 3) {
                        data.push(pinValues);
                    } else {
                        console.log("error in line:", line);
                        data.push([0, 0, 0]); // Valores por defecto si no se reciben datos completos
                    }
                }
                check = line;
            }
        }
    }
    const normalizedData = normalizeData(data.flat());
    console.log("data:", normalizedData);
    console.log("data length:", normalizedData.length);
    return normalizedData;
}

function prepareData() {
    const maxLength = Math.max(...dataByClass.flat().map(arr => arr.length));
    dataByClass = dataByClass.map(classData =>
        classData.map(sample =>
            sample.length === maxLength ? sample : [...sample, ...Array(maxLength - sample.length).fill(0)]
        )
    );

    const samples = dataByClass.flatMap((samples, index) =>
        samples.map(sample => ({ xs: sample, ys: index }))
    );

    if (samples.length === 0) {
        alert('No hay suficientes muestras para entrenar el modelo');
        return;
    }

    const inputSize = samples[0].xs.length;
    const xs = tf.tensor2d(samples.map(sample => sample.xs), [samples.length, inputSize]);
    const ys = tf.tensor1d(samples.map(sample => sample.ys), 'float32');

    const numClasses = classNames.length;

    return { xs, ys, inputSize, numClasses };
}

async function trainConvolutionalModel(epochs) {
    const { xs, ys, inputSize, numClasses } = prepareData();

    const reshapedXs = xs.reshape([xs.shape[0], inputSize / 3, 3]);

    model = tf.sequential();
    model.add(tf.layers.conv1d({ inputShape: [inputSize / 3, 3], filters: 16, kernelSize: 3, activation: 'relu' }));
    model.add(tf.layers.maxPooling1d({ poolSize: 2 }));
    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 10, activation: 'relu' }));
    model.add(tf.layers.dense({ units: numClasses, activation: 'softmax' }));

    model.compile({ loss: 'sparseCategoricalCrossentropy', optimizer: 'adam', metrics: ['accuracy'] });

    console.log('Entrenando modelo convolucional...');
    await model.fit(reshapedXs, ys, {
        epochs: epochs,
        callbacks: {
            onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}: loss = ${logs.loss}, accuracy = ${logs.acc}`)
        }
    });
    console.log('Entrenamiento completo.');
}

async function predict() {
    if (!model || !model.layers) {
        return 'No Model';
    }

    let data = await readDataFromMicrobit();

    const inputShape = model.layers[0].input.shape;
    const dimensions = inputShape.length;
    const inputSize = model.layers[0].input.shape[1];
    let reshapedData;

    if (dimensions === 3) {
        const channels = model.layers[0].input.shape[2];
        const expectedInputSize = inputSize * channels;
        if (data.length !== expectedInputSize) {
            if (data.length < expectedInputSize) {
                data = [...data, ...Array(expectedInputSize - data.length).fill(0)];
            } else {
                data = data.slice(0, expectedInputSize);
            }
        }
        reshapedData = tf.tensor(data).reshape([1, inputSize, channels]);
    } else {
        alert('Modelo no soportado.');
        return '';
    }

    const prediction = model.predict(reshapedData);
    const predictedClass = prediction.argMax(-1).dataSync()[0];
    console.log(`Predicción: ${classNames[predictedClass]}`);
    return classNames[predictedClass];
}

async function downloadModel() {
    if (model) {
        await model.save('downloads://microbit-model');
        const classNamesBlob = new Blob([JSON.stringify(classNames)], { type: 'application/json' });
        const classNamesUrl = URL.createObjectURL(classNamesBlob);
        const a = document.createElement('a');
        a.href = classNamesUrl;
        a.download = 'classNames.json';
        a.click();
        URL.revokeObjectURL(classNamesUrl);
        console.log('Modelo y nombres de clases descargados.');
    } else {
        alert('No hay modelo entrenado para descargar.');
    }
}

function convertGoogleDriveLink(link) {
    const fileIdMatch = link.match(/\/d\/(.*?)\/view/);
    if (fileIdMatch && fileIdMatch[1]) {
        return `https://drive.google.com/uc?export=download&id=${fileIdMatch[1]}`;
    }
    return link;
}

async function loadModelFromLinks(classNamesLink, modelJsonLink, modelBinLink) {
    const classNamesDirectLink = convertGoogleDriveLink(classNamesLink);
    const modelJsonDirectLink = convertGoogleDriveLink(modelJsonLink);
    const modelBinDirectLink = convertGoogleDriveLink(modelBinLink);

    const classNamesResponse = await fetch(classNamesDirectLink);
    classNames = await classNamesResponse.json();

    model = await tf.loadLayersModel(tf.io.browserHTTPRequest(modelJsonDirectLink));
    await model.loadWeights(tf.io.browserHTTPRequest(modelBinDirectLink));

    console.log('Modelo y nombres de clases cargados.');
}

class MicrobitSerial {
    getInfo() {
        return {
            id: 'microbitSerial',
            name: 'Micro:bit Serial',
            menuIconURI: imgMenu,
            blockIconURI: imgBLOC,
            blocks: [
                {
                    opcode: 'connect',
                    blockType: BlockType.COMMAND,
                    text: 'Connect to micro:bit'
                },
                {
                    opcode: 'setClassCount',
                    blockType: BlockType.COMMAND,
                    text: 'Set number of classes [CLASS_COUNT]',
                    arguments: {
                        CLASS_COUNT: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 2,
                            menu: 'classCountMenu'
                        }
                    }
                },
                {
                    opcode: 'setClassName',
                    blockType: BlockType.COMMAND,
                    text: 'Set name of class [CLASS_INDEX] to [CLASS_NAME]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        },
                        CLASS_NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Class 1'
                        }
                    }
                },
                {
                    opcode: 'collectDataForClass',
                    blockType: BlockType.COMMAND,
                    text: 'Collect data for class [CLASS_INDEX]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        }
                    }
                },
                {
                    opcode: 'setTimeToken',
                    blockType: BlockType.COMMAND,
                    text: 'Set time per sample to [TIME_TOKEN] seconds',
                    arguments: {
                        TIME_TOKEN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'trainConvolutionalModel',
                    blockType: BlockType.COMMAND,
                    text: 'Train model of AI with [EPOCHS] epochs',
                    arguments: {
                        EPOCHS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 200
                        }
                    }
                },
                {
                    opcode: 'sendData',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'microbitSerial.sendData',
                        default: 'Send [DATA] to micro:bit'
                    }),
                    arguments: {
                        DATA: {
                            type: ArgumentType.STRING,
                            defaultValue: formatMessage({
                                id: 'microbitSerial.defaultData',
                                default: 'Hello micro:bit'
                            })
                        }
                    }
                },
                {
                    opcode: 'receiveData',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'microbitSerial.receiveData',
                        default: 'Receive data from micro:bit'
                    })
                },
                {
                    opcode: 'predict',
                    blockType: BlockType.REPORTER,
                    text: 'Predict'
                },
                {
                    opcode: 'downloadModel',
                    blockType: BlockType.COMMAND,
                    text: 'Download Model'
                },
                {
                    opcode: 'loadModel',
                    blockType: BlockType.COMMAND,
                    text: 'Load Model from Links [CLASS_NAMES_LINK] [MODEL_JSON_LINK] [MODEL_BIN_LINK]',
                    arguments: {
                        CLASS_NAMES_LINK: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://example.com/classNames.json'
                        },
                        MODEL_JSON_LINK: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://example.com/model.json'
                        },
                        MODEL_BIN_LINK: {
                            type: ArgumentType.STRING,
                            defaultValue: 'https://example.com/model.weights.bin'
                        }
                    }
                },
                {
                    opcode: 'getSampleCount',
                    blockType: BlockType.REPORTER,
                    text: 'Sample count for class [CLASS_INDEX]',
                    arguments: {
                        CLASS_INDEX: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1,
                            menu: 'classIndexMenu'
                        }
                    }
                }
            ],
            menus: {
                classCountMenu: {
                    acceptReporters: true,
                    items: ['2', '3', '4', '5', '6', '7', '8', '9', '10']
                },
                classIndexMenu: {
                    acceptReporters: true,
                    items: 'getClassNames'
                }
            },
            translation_map: {
                'es': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Conectar a la micro:bit',
                    'microbitSerial.sendData': 'Enviar [DATA] a la micro:bit',
                    'microbitSerial.receiveData': 'Recibir datos de la micro:bit',
                    'microbitSerial.defaultData': 'Hola micro:bit',
                    'microbitSerial.getSampleCount': 'Número de muestras por clase'
                },
                'en': {
                    'microbitSerial.name': 'Micro:bit Serial',
                    'microbitSerial.connect': 'Connect to micro:bit',
                    'microbitSerial.sendData': 'Send [DATA] to micro:bit',
                    'microbitSerial.receiveData': 'Receive data from micro:bit',
                    'microbitSerial.defaultData': 'Hello micro:bit',
                    'microbitSerial.getSampleCount': 'Sample count for class'
                }
            }
        };
    }

    connect() {
        if (!isConnected) {
            connect();
        }
    }

    setClassCount(args) {
        const classCount = parseInt(args.CLASS_COUNT);
        classNames = Array.from({ length: classCount }, (_, i) => `Class ${i + 1}`);
        dataByClass = Array(classCount).fill().map(() => []);
        sampleCount = {};
        classNames.forEach((_, index) => sampleCount[index + 1] = 0);
    }

    setClassName(args) {
        const classIndex = parseInt(args.CLASS_INDEX) - 1;
        const className = args.CLASS_NAME;
        if (classIndex >= 0 && classIndex < classNames.length) {
            classNames[classIndex] = className;
        }
    }

    async collectDataForClass(args) {
        const classIndex = parseInt(args.CLASS_INDEX) - 1;
        if (classIndex >= 0 && classIndex < classNames.length) {
            const data = await readDataFromMicrobit();
            dataByClass[classIndex].push(data);
            sampleCount[classIndex + 1]++;
            console.log(`Agregada muestra para la clase ${classNames[classIndex]}:`, dataByClass[classIndex]);
        }
    }

    setTimeToken(args) {
        timeToken = parseInt(args.TIME_TOKEN);
    }

    sendData(args) {
        sendData(args.DATA);
    }

    async receiveData() {
        const data = await receiveData();
        return data ? data.toString() : '';
    }

    async trainConvolutionalModel(args) {
        const epochs = parseInt(args.EPOCHS);
        await trainConvolutionalModel(epochs);
    }

    async predict() {
        const prediction = await predict();
        return prediction;
    }

    downloadModel() {
        downloadModel();
    }

    loadModel(args) {
        const { CLASS_NAMES_LINK, MODEL_JSON_LINK, MODEL_BIN_LINK } = args;
        loadModelFromLinks(CLASS_NAMES_LINK, MODEL_JSON_LINK, MODEL_BIN_LINK);
    }

    getClassNames() {
        if (classNames.length === 0) {
            return [{ text: 'Class 1', value: '1' }];
        }
        return classNames.map((name, index) => ({ text: name || `Class ${index + 1}`, value: `${index + 1}` }));
    }

    getSampleCount(args) {
        const classIndex = parseInt(args.CLASS_INDEX);
        return sampleCount[classIndex] || 0;
    }
}

module.exports = MicrobitSerial;


// --> Codigo microbit

// from microbit import *
// import utime

// uart.init(baudrate=9600)

// sensor_values_0 = []
// sensor_values_1 = []
// sensor_values_2 = []

// display.show("0")
// set_volume(255)
// while True:
//     if uart.any():
//         command = uart.read().strip().decode('utf-8')
//         if command == "on":
//             sleep(500)
//             sensor_values_0 = []
//             sensor_values_1 = []
//             sensor_values_2 = []
//             sleep(200)
//             audio.play(Sound.HELLO)
//             display.show("1")
//             sleep(200)
//             start_time = utime.ticks_ms()  # Registrar el tiempo de inicio
//             # Leer valores durante 3 segundos
//             while utime.ticks_diff(utime.ticks_ms(), start_time) < 1000:
//                 # sensor_values_0.append(pin0.read_analog())
//                 # sensor_values_1.append(pin1.read_analog())
//                 # sensor_values_2.append(pin2.read_analog())
//                 message = "pin0:{},pin1:{},pin2:{}\n".format(pin0.read_analog(), pin1.read_analog(), pin2.read_analog())
//                 uart.write(message)
//                 sleep(100)  # Leer el valor cada 100 ms

//             # Enviar los valores recogidos uno por uno en el formato especificado
//             # audio.play(Sound.HAPPY)
//             # display.show("2")
//             # for val0, val1, val2 in zip(sensor_values_0, sensor_values_1, sensor_values_2):
//             #     message = "pin0:{},pin1:{},pin2:{}\n".format(val0, val1, val2)
//             #     uart.write(message)
//             #     sleep(200)  # Pequeña pausa entre envíos para evitar congestión
            
//             # Enviar mensaje indicando que todos los valores han sido enviados
//             uart.write("off\n")
//             audio.play(Sound.SPRING)
//             display.show("0")
//             sleep(500)  # Pequeña pausa entre envíos para evitar congestión
//     sleep(100)
