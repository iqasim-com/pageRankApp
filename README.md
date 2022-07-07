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

- src
  - Components
    - Directed Graph component (dGraph)
    - pageRank Algorithm (pageRankAlgo)
  - App.css
  - App.js

# Installation

`` clone repo ``
`` npm i ``
`` npm start ``

# Screenshots with description



