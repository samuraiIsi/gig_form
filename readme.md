# Responsive Web Design

This project is intended to create a fully responsive website. Creating a single html/css version of the three screens (Mobile, Tablet and Desktop), fully responsive and hdpi ready (retina).


## Getting Started

To clone and run this application locally, you'll need Git and Node.js installed on your computer.

sh
$ git clone https://github.com/samuraiIsi/gig_form
$ npm install
$ gulp

### Prerequisites

Recommended latest version of node.

## How it has been done

## CSS

### Mobile First
Applied this strategy for design process. 

### BEM
Ordering CSS in Block, Element and Modifier clarifying the relationship betwenn CSS and HTML.

### Basscss
Used as a guide for more scalable and readable code.

### Architecture
Used Scalable and Modular Architecture for CSS (SMACSS) as style guide in the design process.

### Grid
It has been created in 12 columns with 2 breakpoints, one for small devices and the another one for tablets and desktops.

### Preprocessor
It has been used Sass taking adventage of all its potential such as: variables, nesting, mixins and so on.

## Validation
It has been used Javascript for getting the interaction with the different elements in the form.

### First Name, Last Name, City
In these fields the validation is just for letter, they don't accept numbers, letters and numbers, symbols and empty fields.

### Post Code
It validates UK post code, following you can see some examples that they are correct:
DN3 6GB | SW42 4RG | GIR 0AA
Below are samples of what it is not valid in this field
SEW4 5TY | AA2C 4FG | AA2 4CV

### Address
It validates if it is not empty and covering the different ways to write an address, number and letter, or letter and number, symbols.

### Phone Number
It validates telephone numbers as follows:
0208 993 5689 | 0208-993-5689 | 89935689
It is not valid a number as it is below.
1608 123 456

## GIMP
This tool has been used for getting the different elements from psd, and also for changing the images resolution in order to get Retina ready.
