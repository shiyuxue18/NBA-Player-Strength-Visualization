# NBA Shooting Visualization
This is a project to visualize the performance of players.

## demo
https://drive.google.com/file/d/1GeqMTr4G_1ZTXBzLZ0FPIK-drib3oHiX/view

## code
Code could mainly be divided into assets, styles, components and tests. I mainly focused on components and styles.

Components part:
1. App.js <br />
Container of all the components, includes TopNavBar and Main page.

2. TopNavBar.js <br />
Deal with the header and NBA icon.

3. Main.js <br />
Deal with main features, consists of SearchBar, Profile and DataViewContainer. This layer loads player information and pass down to other components.

4. SearchBar.js <br />
Use AutoComplete from Ant design and nba library to help achieve searching.

5. Profile.js <br />
Simple format of player infomation.

6. DataViewContainer.js <br />
Data visualization part. Here are three features: ShotChart, CountSlider and radio switch. <br />
  a. ShotChart.js <br />
  Based on d3 library to visualize data. <br />
  b. CountSlider.js and radio switch <br />
  Based on Ant design to format elements and pass value to ShotChart through callback function.
