# Mydea

> This is a "green paper", an early stage project proposal.
>
> This document is a work in progress.

Mydea is an Ethereum based Distributed Application to record ideas and thoughts.
Users store ideas in a smart contract to demonstrate the originality of their ideas.

Mydea can be used for:

- Startups or business ideas
- App ideas
- Game mechanics
- Story or plot-lines
- Academic hypotheses

A user should be able to store an idea and later retrieve the idea, proving they thought of it before anybody else.

## Purpose

Mydea is a simple learning side-project to get familiar with Solidity, Ethereum and Distributed Applications.
The purpose of this documentation is to experiment with building a Dapp based on well defined requirements.

## Development and Deployment Plan

1. Create 'green paper' specification
2. Create high fidelity front end UI mockup
3. Create smart contracts
4. Link front end to smart contracts
5. Deploy to test network
6. Publish to Reddit, State of the Dapps and various communities for feedback.

# Requirements

## 1. User Accounts

Ideas will be associated with an external account on the Ethereum network, not with any internal account system.

The user account should be accessible through web3 (metamask?).

If an account (or address) is identified through web3 (metamask?), the UI should assume this is the authenticated user.

If no account (or address) information is found, the UI should assume the user is not authenticated and display appropriate information.

## 2. Creating Ideas

An idea should be a short piece of text, like a tweet. The authenticated user should be able to create a new idea as simply as they can create a tweet.

- a previous idea pointer should be set to null.
- a deprecated boolean variable should be set to false.
- a deleted boolean variable should be set to false.

## 3. Reading Ideas

An authenticated user should see a list of all the ideas they have create and the date they were recorded.

## 4. Updating Ideas

An authenticated user should NOT be able to update an idea that they have created.
However, a button in the UI should allow the user to create a new idea, with a pointer to the previous idea. This button should be titled "Update".

In the new idea:
- a previous idea pointer should be set.
- a deprecated boolean variable should be set to false.

In the old idea:
- a deprecated boolean variable should be set to true.

## 5. Deleting Ideas

An authenticated user should be able to mark an ideas as deleted.

In the deleted idea:
- text should be empty.
- previous idea pointer should be set to null.
- a deprecated boolean variable should be set to true.
- a deleted boolean variable should be set to true.

Any attempt to view a deleted idea should show the text "[deleted]".

## 6. Disputing Ideas
See [future work](/future.md) (TODO: fix this link)
