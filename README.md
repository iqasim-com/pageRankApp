# PageRank

PageRank is a system for ranking web pages that Google's founders Larry Page and Sergey Brin developed at Stanford University. And what it is important to understand is that PageRank is all about links. 

The higher the PageRank of a link, the more authoritative it is. 

We can simplify the PageRank algorithm to describe it as a way for the importance of a webpage to be measured by analyzing the quantity and quality of the links that point to it.

# Implementation
  - Tech Stack
    - React js
  - Packages
    - react-cytoscapejs (Used for directed graph implementation)

  Assume a small universe of four web pages: A, B, C, and D. Links from a page to itself, or multiple outbound links from one single page to another single page, are ignored. PageRank is initialized to the same value for all pages. In the original form of PageRank, the sum of PageRank over all pages was the total number of pages on the web at that time, so each page in this example would have an initial value of 1. However, later versions of PageRank, and the remainder of this section, assume a probability distribution between 0 and 1. Hence the initial value for each page in this example is 0.25.
  The PageRank transferred from a given page to the targets of its outbound links upon the next iteration is divided equally among all outbound links.
  If the only links in the system were from pages B, C, and D to A, each link would transfer 0.25 PageRank to A upon the next iteration, for a total of 0.75.
  
  `` PR(A) = PR(B) + PR(C) + PR(D) ``

# Project Structure
NOTE: The folder structure can be improve
- src
  - Components
    - Directed Graph component (dGraph)
    - pageRank Algorithm (pageRankAlgo)
  - App.css
  - App.js

# Installation

## `` clone repo ``
## `` npm i ``
## `` npm start ``

# Screenshots with description

## Displaying `No Node found` text if node is not created
<img width="1680" alt="Screenshot 2022-07-07 at 12 23 54 AM" src="https://user-images.githubusercontent.com/23281307/177666443-e49e5221-7b60-4aa8-9853-49b61adb735d.png">

## Added single node
<img width="1680" alt="Screenshot 2022-07-07 at 12 24 38 AM" src="https://user-images.githubusercontent.com/23281307/177666556-309d6be9-81c3-424c-a322-7d6338883de1.png">

## Added two nodes without edges
<img width="1680" alt="Screenshot 2022-07-07 at 12 25 08 AM" src="https://user-images.githubusercontent.com/23281307/177666597-bd0b0082-6cd6-4795-8acb-f5cd2023eda3.png">

## After adding edge between two nodes, Edge is basically dependent on outbound links
<img width="1680" alt="Screenshot 2022-07-07 at 12 25 29 AM" src="https://user-images.githubusercontent.com/23281307/177666645-cf9d55a4-71de-46db-9552-7db03267fa2a.png">

## Form for adding new node
<img width="405" alt="Screenshot 2022-07-07 at 12 26 10 AM" src="https://user-images.githubusercontent.com/23281307/177666717-687856be-ff26-454d-9bd8-89cfed053dce.png">

## Form for adding Edge between node
<img width="400" alt="Screenshot 2022-07-07 at 12 26 26 AM" src="https://user-images.githubusercontent.com/23281307/177666775-7c76b033-4d0e-4efd-8742-d11659086a82.png">

## Directed graph
<img width="984" alt="Screenshot 2022-07-07 at 12 26 47 AM" src="https://user-images.githubusercontent.com/23281307/177666849-a8771461-14ca-4605-833f-f34ff75d21b2.png">




