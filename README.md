# Tutorial extension for Theia and VSCode

The tutorial extension is displaying a tutorial based on a .json file. One tutorial can have multiple exercise-steps. Each exercise can display different content types but also can execute commands in the terminal, add imports and run checks on the progress of the learner. All of that has to be defined in the .json file inside the workspace.

## Feedback, Help and Support

Feel free to start a discussion by opening an issue on this repo or by contacting us [directly via email](mailto:info@eclipsesource.com).

## Developers Documentation

### First time setup

- Install [node.js](https://nodejs.org/) (version >= 6.x.x)
- Update npm (version >= 5.8.0)
- Clone this repository
- Install dependencies: `yarn install`

### Build & Testing

```
cd react-app
yarn build
cd ..
yarn compile
```

After that press `F5` to run the application.

## License

- [Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)
- [The MIT License](https://opensource.org/licenses/MIT)
