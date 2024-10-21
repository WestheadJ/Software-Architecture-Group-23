# Architecture Change from Client-Server to Service Oriented Architecture.

## Context and Problem Statement.
The Architecture of the project is the most important part as it lays out the blueprint for ongoing development. 
Developing a system that isn't scalable, modular or secure just isn't viable from a business or engineering
perspective. 

## Decision Drivers:
* Scalability.
* Modularity.
* Maintainability.

## Considered Options:
* Microservices.
* Client-Server.
* Service Oriented.

## Pros and Cons:

### Microservices:
Pros: 
* Due to the modularity, decreased risk of downtime. 
* Services are plug and play, allowing for a more readable and modular codebase.

Cons: 
* Complicated implementation and planning.
* Lots of moving parts.

### Client-Server
Pros: 
* Simple Implementation.
* Simple Planning.
* Modularity and scalability are dependent on code quality.

Cons: 
* Leaves Horizontal scaling as the main method to expand.
* Messy codebase, things are intertwined.

### SOA
Pros: 
* Good middleground between the simplicity of Microservices and the flexibility of Client-Server.
* Allows for sanitary and modular code.
* Not too complex to implement or design.

Cons: 
* Experiences the same issues as Microservices.

### Decision Outcome
SOA. 

We believe that for our group, the complexity and flexibility are worth eachother. We'll implement modular services 
such that scalability and expansion are not a problem. Integrating new features into existing codebases is messy
and we believe that breaking the code up and allowing for more freedom between services would be beneficial. 

Security is also proven to be better through modular services, we lessen the risk for MITM and XSS attacks, as our 
services are distrubuted. This prevents DoS attacks also, as our services can potentially be hosted independently of
eachother.
