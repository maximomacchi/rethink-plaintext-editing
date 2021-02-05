# Rethink Plaintext Editing

This is our frontend coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to edit text as elegantly as possible. There are a variety of different file types to experiment with as you see fit.

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Enjoy

Once complete, please email us a link to your forked repo with clean, tested code. We will use Chrome to run it.

- Rethink Engineering

# Maximo's Additions Below

## How to Run

Identical to instructions given in initial README

1. Run the following commands:

```
npm install
npm run dev
```

2. The app will be running at `localhost:3000`

## Packages / Tools Used

- [TinyMCE](https://www.tiny.cloud/)
  - Library which renders React rich text editor. Has many built-in controls which are also code friendly

## Assumptions

- File formats to be used in this editor are `.txt`, `.md`, `.js`, and `.json`

## Limitations

- No create new file functionality
- Markdown rendering occurs after newline character is entered
- Files do not save across reloads. With more time allotted, this feature would be implemented.
- Code files do not highlight syntax for specific language and need to be formatted to code view in the formatter
