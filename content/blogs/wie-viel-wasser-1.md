---
title: Wie viel wasser?
slug: water-berlin
authors:
  - Francesca Morini
  - Johanna Hartmann
  - Anna Eschenbacher
link: https://xyz.francescamorini.com/wie-viel-wasser/
categories:
  - climate visualization
  - 3D
  - web development
date: March 18, 2024 6:29 PM
description: This visualization looks at water as a finite resource, by showing
  our daily consumption in comparison with the popular lakes of Berlin and
  Brandenburg.
himage: /uploads/wie-viel-wasser-preview-project.jpg
---
Each person living in Berlin consumes approximately 150 litres of water per day. This includes personal consumption, which amounts to the 75% of the total usage, and industrial consumption, which accounts for the other 25%. Berlin’s drinking water doesn’t come from lakes, of course, but from the ground. Essentially, groundwater is replenished through rain. However, the Berlin water system can be described as a partially closed water cycle, since wastewater gets treated and partially reused to augment available groundwater.

These are the conceptual premises behind the "Wie Viel Wasser?" project. Using the metaphor of surface water, we decided to compare the daily water consumption of Berliners with the capacity of individual lakes in the region. Why? Because Berliners love their lakes, but also because by imagining water as a finite resource its fragility becomes painfully visible.

![](/uploads/wie-viel-wasser-example-screen.png)

The user can search from a variety of lakes, upon selection the 3D model of their favourite model will pop up: if blue the water capacity is bigger than Berlin's water consumption, if red the lake would be depleted in less than one day.

The underlying data have been crunched using python, scaled using D3.js and rendered through Three.js. The geometries used as a base are real geographical features, scraped using the OSM API. 

![](/uploads/wie-viel-wasser-collage.png)

The app is optimized for mobile. The main visualization is always at the centre of the screen and additional information can be toggled exclusively by clicking on the bottom of the screen. Each lake has its own unique URL and can be shared with others.