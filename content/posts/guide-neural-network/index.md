---
author: "Binh Pham"
title: "[Part 2] Neural Network with a bit of State Machine in C++ from scratch"
date: "2023-05-27"
description: "How to build a Neural Network from scratch"
tags: ["C++", "University Projects"]
categories: ["C++"]
draft: false
cover:
  image: "/posts/guide-neural-network/images/banner.png" # image path/url
  alt: "Life" # alt text
  relative: true # when using page bundles set this to true
  hidden: false
---

# Brief

In the [**previous part of this article**](/posts/neural-network), we have gone through what is the project and its specifications. In the second part, we will discover:

- What is a Neural Network and how to implement it in C++?
- What is a State Machine and how to implement it in C++?

Since the topics presented in this article have been on other articles, we will only go through the idea and basics of the implementations. For the in-depth explaination, I will leave it to the critical mindset of readers.

# Introduction to Neural Network

## 1. Basics of Neural Network

In the world of buzz words like **Atificial Intelligence and Machine Learning**, **Neural Network** must be no stranger to every engineer. In the fundamentals of it, it is just a **huge mathematic equation of random coefficents** that has **tons of inputs and outputs**.

Of course, saying something of such complexity as a Neural Network like that would be **insanely hard to comprehend and calculate**. Therefore, we abstract it in the **form of a graph**.

{{< figure src="images/topology.png#center" caption="Source: https://www.v7labs.com/blog/neural-network-architectures-guide">}}

In such a graph, **each node is an equation**. The **number of variables** of this equation is **equal to the number of inputs of nodes**. Each **variable** is accomodated with a **weight** or a **coeficient** in mathematical sense. This is **all summed up** and put in an **activation function**.

{{< figure src="images/node.jpeg#center" caption="Source: https://morioh.com/p/d70aa769173a">}}

If you are wondering, the **activation function** is to **introduce non-linearity into the network**, because if every node is just a first order function of variables it would be just a bunch of lines intersecting each other. You can find more information about [**activation functions here**](https://towardsdatascience.com/the-importance-and-reasoning-behind-activation-functions-4dc00e74db41).

{{< figure src="images/activation.png#center" caption="Source: https://www.v7labs.com/blog/neural-networks-activation-functions">}}

After **constructing the nodes**, you will see that the **Neural Network** is **actually very simple**. And the only question left behind is **how to implement it in code from scratch**.

## 2. Implementation of Neural Network

Currently, there is **2 main approaches**:

- **Implementing the network with an object-oriented approach**: This means we abstract the network into nodes, layers and network classes. This is very memory consuming and not optimized at all, but very understandle and maintainable for newcomers.
- **Implemting the network with linear algebra**: This means all calculations of nodes can be put into vectors and matrixes. This is very optimized and fast with hardware acceleration and it is the fundamentals behind every Neural Network engine right now.

If you guessed I picked the **second option to implement**, **you are right**! To me, nothing is better than the fusion of math and programming. It is just sad that many students don't feel this way.

![Meme](./images/meme.png#center)

To know **how matrices can be used in Neural Network**, you can find it in these links: [**Neural Networks, Structure, Weights and Matrices**](https://python-course.eu/machine-learning/neural-networks-structure-weights-and-matrices.php) and [**Neural Network Representation**](https://www.jeremyjordan.me/intro-to-neural-networks/).

{{< figure src="images/matrixnn.png#center" caption="Source: https://www.jeremyjordan.me/intro-to-neural-networks/">}}

The most curcial information you need to get from these articles is **how to build the weight and bias matrices**. In addition to this, you must know how to do a **foward pass**: how to calculate the output of each node using the weight and bias matrix.

From this point, you will be introduced to the world of **back propagration** to answer the question of **how is the Neural Network trained**. Quite suprisingly, it might actually be more dull than you think.

## 3. Optimization of Neural Network

In the case of Neural Network, since everything can be represented in the mathematical form. It means that you can build and graph a **function of errors based on the coefficients**.

When you have the graph of the function, you will see that by using calculus, you can find **the derivative of the function** and create a **direction vector pointing the extrema or minimum of the function**. This is the **fundamental of backward propagation**.

{{< figure src="images/gradient.png#center" caption="Source: https://towardsdatascience.com/gradient-descent-3a7db7520711">}}

To research more on this subject, you can look into [**Matt Mazur's Simple Backward Propagation Example**](https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/). This explains how you can build the **gradient function and the gradient matrix** from a mathematical point of view.

{{< figure src="images/nn-calculation.png#center" caption="Source: https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/">}}

In this article's example of a neural network, you can also see that **instead of using matrices and linear algebra**, the author uses **nodes and layers classes**. The purpose of this is **purely educational** as it **comprimises performance for ease of reading**.

If you have reached this point, you have everything it needs to read the source code of the neural network of the project.

# Introduction to State Machine

## 1. Basics of State Machine

{{< figure src="images/statemachine.png#center" caption="Source: https://micromouseonline.com/2014/05/05/state-machines-introduction/">}}

If you have ever been to the **Front-end realm of any kind of application development**, you will know that they are based on **states and props**. Cough... **React** Cough... **Vue** Cough... **Svelte**.

{{< figure src="images/state-manage.png#center" title="Creating a State Management System for React from scratch"caption="Source: https://dev.to/logeekal/building-state-management-system-like-react-from-scratch-with-vanillajs-3eon">}}

While this statement might be wrong because it is different with each framework and library, **every front-end is definately based on a state machine**.

Actually maybe everything in programming and computers in general is based on a state machine. But this is such an **abstract concept** that **developers often don't even care**. In **Binh's Archive** though, **we care**.

{{< figure src="images/turing.jpeg#center" title="A Turing State Machine Schematic"caption="Source: https://machinedeturing.com/ang_fonctionnement.php?page=7">}}

Since this project needs an user interface, it has to implement **a State Machine from scratch**. This helps the application **render with ease and efficiency**.

The basic form of a state machine is having **states** and **each state** is **connected to actions**.

{{< figure src="images/on-off.svg#center" caption="Source: https://statecharts.dev/what-is-a-state-machine.html">}}

For example, in **off state**, if we **flip the light switch**, it will move to the **on stage**. In the polling for the switch transition at the off state, we need to **define an activity** that **constantly look for the state of the switch**. This is basically **how some basic websites works**, by **constantly looking for changes and re-render the DOM**.

## 2. Implementation of State Machine

{{< figure src="images/example-trans-table.png#center" title="Example State Transition Table for a Sequential Machine" caption="Source: https://www.researchgate.net/figure/Example-State-Transition-Table-for-a-Sequential-Machine-Source-Hatley-and-Pirbhai_fig10_269710922">}}
In C++ and C, there is pretty neat trick you can do to **implement a transition table**. By storing functions into an array, you can call the transition function seamlessly by calling the array at the state index.

Below is a code snippet taken from the source code of this project:

```C++
class Controller
{
private:
    int currentState;
    bool renderFlag;

    void printBanner();
    void generationMenu();
    void controlMenu();
    void createNetwork();
    void trainNetwork();
    void testNetwork();
    void loadNetwork();
    void saveNetwork();
    void exit();

    Action stateTransitions[8];

public:

    Controller()
    {
        stateTransitions[GEN_MENU] = &Controller::generationMenu;
        stateTransitions[CREATE] = &Controller::createNetwork;
        stateTransitions[LOAD] = &Controller::loadNetwork;
        stateTransitions[CONTROL_MENU] = &Controller::controlMenu;
        stateTransitions[TRAIN] = &Controller::trainNetwork;
        stateTransitions[TEST] = &Controller::testNetwork;
        stateTransitions[SAVE] = &Controller::saveNetwork;
        stateTransitions[EXIT] = &Controller::exit;
    };

    void render() {
      (this->*stateTransitions[currentState])();
    } ;
};
```

As you can see, the **logic** behind the **user interface** of this project is **pretty simple**. By leveraging the theory of State Machine, we can easily create **transition function** to **move between different state**s and in each state we can **display the corresponding information**.

```C++
// Example function
void Controller::saveNetwork()
{
    // Display something
    cout << "save network menu";

    // Doing something
    ofstream save_file;
    save_file.open("./data/network.txt");
    n->saveNetwork(save_file);
    save_file.close();

    // Change state
    currentState = CONTROL_MENU;
}
```

Since this is a state machine, we can let this function run on an **infinite loop** and the system would only change the output when there is a state change or an explicit exit from the function.

```C++
// Infinite loop in program
Controller a;

while (a.renderFlag)
{
    a.render();
}
```

The simplicity of this code snippet is why I love the theory part of Computer Science.

Using the knowledge presented in these sections, you can now read everything inside the source code of the project.

# End note

I know that this can be a little bit too much of information for such a small article. However, as an engineer myself, I have always wanted an article like this to read so that I can find everything and branch out from one place.

Using this article, you can have the base for researching more on State Machine and Neural Network. You can also train yourself to have a new mindset in programming and ignite your passion in the theories of Computer Science and Mathematics.
