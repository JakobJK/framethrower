# Roadmap

This document will serve as a reminder of features we'd love to implemented. Both in term of the product, but also on an engineering level. Everything is at the idea level

Here is a couple of things I would love to implement before launch:

- Reddis to blacklist cookies and tokens of users being banned, or permission changes.
- Setup OpenVPN in our CI/CD database migration step
- Setup Aurora instead of Amazon RDS
  - Read replicas
  - Load balancing/pooling
- Postgraphile PRO for splitting out Reads/Writes

## Upcoming Features for Framethrower

- Company Sign up (for Schools and Companies who wanna post on our job board)
- Job Boards
- Individuals can sign up as a PRO member
- We will charge everyone via stripe instead of sending an invoice
- Animation Player will get many features
  - Paintovers will happen on a frame by frame basis
  - Playback will show and hide painted frames at playback and scrubbing
  - Undo features while painting
  - An Eraser Tool added to playback

## For the Future

- Implement Framethrower to more DCCs. Houdini, Blender, C4d are on the top of my list
- Inplement a wasm for materialX that will allow for 3d reviews of models. We could start to include 3d modellers as instructors
- Independant feedback application using electron (Could perhaps be a seperate PWA with a wasm)

## Technology Changes

- Let's get off Postgraphile
- Switch to Go & Kubernetes - (Let's get off lambda functions)
- Let's start using native web components for our PWAs. Perhaps lit.dev
- Seperate admin.framethrower.io PWA Application
