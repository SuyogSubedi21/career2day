/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "blockchain-web3-engineer");
  r0.set("question", "What is a blockchain?");
  r0.set("options", ["A distributed, immutable ledger of transactions","A type of database","A programming language","A cloud service"]);
  r0.set("correctAnswer", "A distributed, immutable ledger of transactions");
  r0.set("difficulty", "Beginner");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "blockchain-web3-engineer");
  r1.set("question", "What is a smart contract?");
  r1.set("options", ["Self-executing code on a blockchain","A legal document","A type of cryptocurrency","A wallet application"]);
  r1.set("correctAnswer", "Self-executing code on a blockchain");
  r1.set("difficulty", "Beginner");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "blockchain-web3-engineer");
  r2.set("question", "What is an NFT?");
  r2.set("options", ["Non-Fungible Token - unique digital asset","New Financial Token","Network Funded Transfer","Non-Fungible Transaction"]);
  r2.set("correctAnswer", "Non-Fungible Token - unique digital asset");
  r2.set("difficulty", "Beginner");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "blockchain-web3-engineer");
  r3.set("question", "What language are Ethereum smart contracts written in?");
  r3.set("options", ["Solidity","JavaScript","Python","Rust"]);
  r3.set("correctAnswer", "Solidity");
  r3.set("difficulty", "Beginner");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "blockchain-web3-engineer");
  r4.set("question", "What is gas in Ethereum?");
  r4.set("options", ["Fee paid for computation on the network","A cryptocurrency","A mining reward","A consensus mechanism"]);
  r4.set("correctAnswer", "Fee paid for computation on the network");
  r4.set("difficulty", "Beginner");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "blockchain-web3-engineer");
  r5.set("question", "What is a reentrancy attack?");
  r5.set("options", ["Attacker repeatedly calls a function before the first call finishes to drain funds","Attacking a node multiple times","Replaying a transaction","Front-running a transaction"]);
  r5.set("correctAnswer", "Attacker repeatedly calls a function before the first call finishes to drain funds");
  r5.set("difficulty", "Intermediate");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "blockchain-web3-engineer");
  r6.set("question", "What is an AMM?");
  r6.set("options", ["Automated Market Maker - uses liquidity pools instead of order books","Automated Mining Machine","Asset Management Module","Algorithmic Money Market"]);
  r6.set("correctAnswer", "Automated Market Maker - uses liquidity pools instead of order books");
  r6.set("difficulty", "Intermediate");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "blockchain-web3-engineer");
  r7.set("question", "What is a Layer 2 solution?");
  r7.set("options", ["A scaling solution built on top of a base blockchain","The second layer of the OSI model","A secondary wallet","A backup blockchain"]);
  r7.set("correctAnswer", "A scaling solution built on top of a base blockchain");
  r7.set("difficulty", "Intermediate");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "blockchain-web3-engineer");
  r8.set("question", "What is impermanent loss?");
  r8.set("options", ["Loss from providing liquidity when asset prices change relative to each other","Permanent loss of funds","Transaction fee loss","Gas cost loss"]);
  r8.set("correctAnswer", "Loss from providing liquidity when asset prices change relative to each other");
  r8.set("difficulty", "Intermediate");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "blockchain-web3-engineer");
  r9.set("question", "What is the difference between ERC-20 and ERC-721?");
  r9.set("options", ["ERC-20 is fungible tokens; ERC-721 is non-fungible tokens (NFTs)","ERC-721 is fungible; ERC-20 is non-fungible","They are the same standard","ERC-20 is for NFTs; ERC-721 is for DeFi"]);
  r9.set("correctAnswer", "ERC-20 is fungible tokens; ERC-721 is non-fungible tokens (NFTs)");
  r9.set("difficulty", "Intermediate");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "blockchain-web3-engineer");
  r10.set("question", "What is MEV (Maximal Extractable Value)?");
  r10.set("options", ["Profit extractable by reordering, inserting, or censoring transactions in a block","Maximum Ethereum Value per block","Miner's total earning per day","Market Exchange Volume"]);
  r10.set("correctAnswer", "Profit extractable by reordering, inserting, or censoring transactions in a block");
  r10.set("difficulty", "Advanced");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "blockchain-web3-engineer");
  r11.set("question", "What is the difference between Optimistic and ZK Rollups?");
  r11.set("options", ["Optimistic assumes valid and uses fraud proofs; ZK uses validity proofs cryptographically","ZK assumes valid; Optimistic uses cryptographic proofs","They are the same","Optimistic is faster; ZK is cheaper"]);
  r11.set("correctAnswer", "Optimistic assumes valid and uses fraud proofs; ZK uses validity proofs cryptographically");
  r11.set("difficulty", "Advanced");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "blockchain-web3-engineer");
  r12.set("question", "What is CREATE2 used for in Solidity?");
  r12.set("options", ["Deploy contracts to deterministic addresses before deployment","Create secondary contracts","A version of Solidity's create function","Deploy proxy contracts only"]);
  r12.set("correctAnswer", "Deploy contracts to deterministic addresses before deployment");
  r12.set("difficulty", "Advanced");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "blockchain-web3-engineer");
  r13.set("question", "What is EIP-4337 (Account Abstraction)?");
  r13.set("options", ["Allows smart contract wallets as first-class accounts without changing the protocol","A new token standard","An upgrade to gas pricing","A Layer 2 standard"]);
  r13.set("correctAnswer", "Allows smart contract wallets as first-class accounts without changing the protocol");
  r13.set("difficulty", "Advanced");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "blockchain-web3-engineer");
  r14.set("question", "What is a flash loan and its primary risk?");
  r14.set("options", ["Uncollateralized loan repaid in same transaction; risk is enabling attack vectors for manipulation","A fast small loan; risk is high interest","A loan between wallets; risk is loss of funds","A DeFi savings product; no risk"]);
  r14.set("correctAnswer", "Uncollateralized loan repaid in same transaction; risk is enabling attack vectors for manipulation");
  r14.set("difficulty", "Advanced");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "site-reliability-engineer-sre");
  r15.set("question", "What does SRE stand for?");
  r15.set("options", ["Site Reliability Engineering","System Reliability Expert","Software Runtime Environment","Service Redundancy Engineering"]);
  r15.set("correctAnswer", "Site Reliability Engineering");
  r15.set("difficulty", "Beginner");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "site-reliability-engineer-sre");
  r16.set("question", "What is an SLO?");
  r16.set("options", ["Service Level Objective","System Log Output","Software Launch Operations","Server Load Optimizer"]);
  r16.set("correctAnswer", "Service Level Objective");
  r16.set("difficulty", "Beginner");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "site-reliability-engineer-sre");
  r17.set("question", "What is toil in SRE?");
  r17.set("options", ["Manual, repetitive operational work that can be automated","Server downtime","A monitoring tool","A deployment strategy"]);
  r17.set("correctAnswer", "Manual, repetitive operational work that can be automated");
  r17.set("difficulty", "Beginner");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "site-reliability-engineer-sre");
  r18.set("question", "What is MTTR?");
  r18.set("options", ["Mean Time To Recovery","Maximum Throughput Transfer Rate","Monitoring Threshold Trigger Rate","Mean Testing Time Ratio"]);
  r18.set("correctAnswer", "Mean Time To Recovery");
  r18.set("difficulty", "Beginner");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "site-reliability-engineer-sre");
  r19.set("question", "What is a postmortem in SRE?");
  r19.set("options", ["A blameless review of an incident to learn and prevent recurrence","A type of alert","A performance test","A deployment report"]);
  r19.set("correctAnswer", "A blameless review of an incident to learn and prevent recurrence");
  r19.set("difficulty", "Beginner");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "site-reliability-engineer-sre");
  r20.set("question", "What are Google's Four Golden Signals?");
  r20.set("options", ["Latency, Traffic, Errors, Saturation","CPU, Memory, Disk, Network","Availability, Reliability, Performance, Scalability","Requests, Errors, Duration, Saturation"]);
  r20.set("correctAnswer", "Latency, Traffic, Errors, Saturation");
  r20.set("difficulty", "Intermediate");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "site-reliability-engineer-sre");
  r21.set("question", "What is an error budget?");
  r21.set("options", ["The allowed amount of unreliability based on SLO","Budget for fixing bugs","Cost of incidents","Percentage of failed deployments"]);
  r21.set("correctAnswer", "The allowed amount of unreliability based on SLO");
  r21.set("difficulty", "Intermediate");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "site-reliability-engineer-sre");
  r22.set("question", "What is the circuit breaker pattern?");
  r22.set("options", ["Stops calls to a failing service to allow recovery","A Kubernetes networking pattern","A load balancing strategy","A database backup pattern"]);
  r22.set("correctAnswer", "Stops calls to a failing service to allow recovery");
  r22.set("difficulty", "Intermediate");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "site-reliability-engineer-sre");
  r23.set("question", "What is tail latency?");
  r23.set("options", ["High latency at the 95th or 99th percentile affecting a small % of requests","Average response time","The slowest request ever recorded","Network latency"]);
  r23.set("correctAnswer", "High latency at the 95th or 99th percentile affecting a small % of requests");
  r23.set("difficulty", "Intermediate");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "site-reliability-engineer-sre");
  r24.set("question", "What is chaos engineering?");
  r24.set("options", ["Intentionally injecting failures to test system resilience","Random deployments","Unstructured testing","Breaking production systems"]);
  r24.set("correctAnswer", "Intentionally injecting failures to test system resilience");
  r24.set("difficulty", "Intermediate");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "site-reliability-engineer-sre");
  r25.set("question", "What is Little's Law in the context of SRE?");
  r25.set("options", ["L = λW: average items in system equals arrival rate × average time in system","A law about server capacity","A rule about error budgets","A guideline for SLOs"]);
  r25.set("correctAnswer", "L = λW: average items in system equals arrival rate × average time in system");
  r25.set("difficulty", "Advanced");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "site-reliability-engineer-sre");
  r26.set("question", "What is the difference between active-active and active-passive multi-region?");
  r26.set("options", ["Active-active serves traffic from all regions; active-passive has a standby region","Active-passive serves all traffic; active-active has standbys","They are the same","Active-active is cheaper"]);
  r26.set("correctAnswer", "Active-active serves traffic from all regions; active-passive has a standby region");
  r26.set("difficulty", "Advanced");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "site-reliability-engineer-sre");
  r27.set("question", "What is request hedging?");
  r27.set("options", ["Sending duplicate requests to multiple backends and using the first response","A retry strategy","Rate limiting requests","A caching technique"]);
  r27.set("correctAnswer", "Sending duplicate requests to multiple backends and using the first response");
  r27.set("difficulty", "Advanced");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "site-reliability-engineer-sre");
  r28.set("question", "What is split-brain in distributed systems?");
  r28.set("options", ["Network partition causing two parts of cluster to act as separate independent systems","A bug causing crashes","A load balancing failure","A database corruption issue"]);
  r28.set("correctAnswer", "Network partition causing two parts of cluster to act as separate independent systems");
  r28.set("difficulty", "Advanced");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "site-reliability-engineer-sre");
  r29.set("question", "What is KEDA in Kubernetes?");
  r29.set("options", ["Kubernetes Event-Driven Autoscaling - scales based on event sources like Kafka","Kubernetes External DNS Agent","Kubernetes Edge Deployment Architecture","A Kubernetes security tool"]);
  r29.set("correctAnswer", "Kubernetes Event-Driven Autoscaling - scales based on event sources like Kafka");
  r29.set("difficulty", "Advanced");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "embedded-systems-firmware-engineer");
  r30.set("question", "What is a microcontroller?");
  r30.set("options", ["Integrated circuit with processor, memory, and peripherals","A type of operating system","A programming language","A development board only"]);
  r30.set("correctAnswer", "Integrated circuit with processor, memory, and peripherals");
  r30.set("difficulty", "Beginner");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "embedded-systems-firmware-engineer");
  r31.set("question", "What does RTOS stand for?");
  r31.set("options", ["Real-Time Operating System","Remote Transfer Operating System","Rapid Testing OS","Reliable Throughput OS"]);
  r31.set("correctAnswer", "Real-Time Operating System");
  r31.set("difficulty", "Beginner");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "embedded-systems-firmware-engineer");
  r32.set("question", "What is GPIO?");
  r32.set("options", ["General Purpose Input/Output pins","Graphics Processing I/O","Global Protocol Interface Output","General Process Input Object"]);
  r32.set("correctAnswer", "General Purpose Input/Output pins");
  r32.set("difficulty", "Beginner");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "embedded-systems-firmware-engineer");
  r33.set("question", "What is UART?");
  r33.set("options", ["Universal Asynchronous Receiver-Transmitter","Unified Asynchronous Radio Transmitter","Universal Array Register Transfer","Unit Address Resolution Table"]);
  r33.set("correctAnswer", "Universal Asynchronous Receiver-Transmitter");
  r33.set("difficulty", "Beginner");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "embedded-systems-firmware-engineer");
  r34.set("question", "What is an interrupt?");
  r34.set("options", ["Signal that pauses the CPU to handle an event","A software bug","A type of memory","A communication protocol"]);
  r34.set("correctAnswer", "Signal that pauses the CPU to handle an event");
  r34.set("difficulty", "Beginner");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "embedded-systems-firmware-engineer");
  r35.set("question", "What is priority inversion in RTOS?");
  r35.set("options", ["High-priority task blocked by low-priority task holding a resource","Low-priority task running first","Incorrect interrupt priorities","Stack overflow"]);
  r35.set("correctAnswer", "High-priority task blocked by low-priority task holding a resource");
  r35.set("difficulty", "Intermediate");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "embedded-systems-firmware-engineer");
  r36.set("question", "Why is the volatile keyword important in embedded C?");
  r36.set("options", ["Prevents compiler from optimizing away reads/writes to hardware registers","Makes a variable constant","Allocates variable in flash","Speeds up access to variables"]);
  r36.set("correctAnswer", "Prevents compiler from optimizing away reads/writes to hardware registers");
  r36.set("difficulty", "Intermediate");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "embedded-systems-firmware-engineer");
  r37.set("question", "What is DMA?");
  r37.set("options", ["Direct Memory Access - transfers data without CPU involvement","Dynamic Memory Allocation","Data Management Architecture","Device Memory Address"]);
  r37.set("correctAnswer", "Direct Memory Access - transfers data without CPU involvement");
  r37.set("difficulty", "Intermediate");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "embedded-systems-firmware-engineer");
  r38.set("question", "What is the difference between mutex and semaphore?");
  r38.set("options", ["Mutex is for mutual exclusion (ownership); semaphore is for signaling/counting","They are identical","Semaphore is for mutual exclusion; mutex is for counting","Mutex allows multiple tasks; semaphore allows one"]);
  r38.set("correctAnswer", "Mutex is for mutual exclusion (ownership); semaphore is for signaling/counting");
  r38.set("difficulty", "Intermediate");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "embedded-systems-firmware-engineer");
  r39.set("question", "What is endianness?");
  r39.set("options", ["Byte order for storing multi-byte data in memory","CPU clock speed","Memory type","Communication protocol speed"]);
  r39.set("correctAnswer", "Byte order for storing multi-byte data in memory");
  r39.set("difficulty", "Intermediate");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "embedded-systems-firmware-engineer");
  r40.set("question", "What is a linker script used for in embedded?");
  r40.set("options", ["Defines memory layout, section placement, and addresses for the compiled binary","Links external libraries","Configures the debugger","Sets compiler optimization"]);
  r40.set("correctAnswer", "Defines memory layout, section placement, and addresses for the compiled binary");
  r40.set("difficulty", "Advanced");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "embedded-systems-firmware-engineer");
  r41.set("question", "What is the vector table in ARM Cortex-M?");
  r41.set("options", ["Table at start of flash containing reset handler and interrupt handlers","A hardware routing table","A data structure for interrupts in RAM","A table of GPIO pin functions"]);
  r41.set("correctAnswer", "Table at start of flash containing reset handler and interrupt handlers");
  r41.set("difficulty", "Advanced");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "embedded-systems-firmware-engineer");
  r42.set("question", "What is the difference between hard real-time and soft real-time systems?");
  r42.set("options", ["Hard: missing deadline is catastrophic failure; soft: missing deadline degrades performance","Soft: missing deadline causes failure; hard: missing deadline is acceptable","Hard real-time uses hardware; soft uses software","They are the same"]);
  r42.set("correctAnswer", "Hard: missing deadline is catastrophic failure; soft: missing deadline degrades performance");
  r42.set("difficulty", "Advanced");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "embedded-systems-firmware-engineer");
  r43.set("question", "What is memory alignment and why does it matter in embedded?");
  r43.set("options", ["Data must be stored at addresses matching its size; misalignment causes faults or performance loss","RAM must equal flash size","A compiler optimization flag","A method for memory allocation"]);
  r43.set("correctAnswer", "Data must be stored at addresses matching its size; misalignment causes faults or performance loss");
  r43.set("difficulty", "Advanced");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "embedded-systems-firmware-engineer");
  r44.set("question", "What is MISRA C?");
  r44.set("options", ["Coding standard for safety-critical embedded C to reduce undefined behavior","A microcontroller brand","An RTOS standard","A communication protocol"]);
  r44.set("correctAnswer", "Coding standard for safety-critical embedded C to reduce undefined behavior");
  r44.set("difficulty", "Advanced");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "data-scientist");
  r45.set("question", "What is EDA?");
  r45.set("options", ["Exploratory Data Analysis","External Data API","Evaluation and Design Algorithm","Enhanced Data Aggregation"]);
  r45.set("correctAnswer", "Exploratory Data Analysis");
  r45.set("difficulty", "Beginner");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "data-scientist");
  r46.set("question", "What is a p-value?");
  r46.set("options", ["Probability of observing results if null hypothesis is true","Prediction value","Performance metric","Parameter value"]);
  r46.set("correctAnswer", "Probability of observing results if null hypothesis is true");
  r46.set("difficulty", "Beginner");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "data-scientist");
  r47.set("question", "What is a correlation coefficient?");
  r47.set("options", ["Measure of relationship strength between variables","A type of regression","A clustering algorithm","A visualization tool"]);
  r47.set("correctAnswer", "Measure of relationship strength between variables");
  r47.set("difficulty", "Beginner");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "data-scientist");
  r48.set("question", "What library is used for data manipulation in Python?");
  r48.set("options", ["Pandas","TensorFlow","Scikit-learn","Matplotlib"]);
  r48.set("correctAnswer", "Pandas");
  r48.set("difficulty", "Beginner");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "data-scientist");
  r49.set("question", "What is a boxplot used for?");
  r49.set("options", ["Visualizing distribution and outliers","Line charts","Correlation analysis","Clustering results"]);
  r49.set("correctAnswer", "Visualizing distribution and outliers");
  r49.set("difficulty", "Beginner");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "data-scientist");
  r50.set("question", "What is the central limit theorem?");
  r50.set("options", ["Sample means approximate normal distribution as sample size increases","All data is normally distributed","Large datasets are always accurate","Standard deviation equals sample size"]);
  r50.set("correctAnswer", "Sample means approximate normal distribution as sample size increases");
  r50.set("difficulty", "Intermediate");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "data-scientist");
  r51.set("question", "What is Type I error?");
  r51.set("options", ["False positive - rejecting a true null hypothesis","False negative","Model underfitting","Data leakage"]);
  r51.set("correctAnswer", "False positive - rejecting a true null hypothesis");
  r51.set("difficulty", "Intermediate");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "data-scientist");
  r52.set("question", "What is multicollinearity?");
  r52.set("options", ["High correlation between predictor variables in regression","Multiple target variables","A type of overfitting","Missing data pattern"]);
  r52.set("correctAnswer", "High correlation between predictor variables in regression");
  r52.set("difficulty", "Intermediate");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "data-scientist");
  r53.set("question", "What does SHAP stand for?");
  r53.set("options", ["SHapley Additive exPlanations","Statistical Hypothesis Analysis Plot","Shallow Prediction","Stochastic Hypothesis Analysis Parameter"]);
  r53.set("correctAnswer", "SHapley Additive exPlanations");
  r53.set("difficulty", "Intermediate");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "data-scientist");
  r54.set("question", "What is stationarity in time series?");
  r54.set("options", ["Statistical properties (mean, variance) do not change over time","Data collected at regular intervals","Linear trend in data","No outliers in data"]);
  r54.set("correctAnswer", "Statistical properties (mean, variance) do not change over time");
  r54.set("difficulty", "Intermediate");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "data-scientist");
  r55.set("question", "What is the difference between Pearson and Spearman correlation?");
  r55.set("options", ["Pearson measures linear relationship; Spearman measures monotonic relationship on ranks","Spearman is for linear; Pearson for monotonic","They are identical","Pearson works on categorical; Spearman on numerical"]);
  r55.set("correctAnswer", "Pearson measures linear relationship; Spearman measures monotonic relationship on ranks");
  r55.set("difficulty", "Advanced");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "data-scientist");
  r56.set("question", "What is the difference between bagging and boosting?");
  r56.set("options", ["Bagging trains models in parallel on random subsets; boosting trains sequentially correcting errors","Boosting is parallel; bagging is sequential","They are the same","Bagging is for regression only"]);
  r56.set("correctAnswer", "Bagging trains models in parallel on random subsets; boosting trains sequentially correcting errors");
  r56.set("difficulty", "Advanced");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "data-scientist");
  r57.set("question", "What is the purpose of regularization in linear regression?");
  r57.set("options", ["Penalizes large coefficients to prevent overfitting","Increases model complexity","Normalizes the target variable","Removes outliers"]);
  r57.set("correctAnswer", "Penalizes large coefficients to prevent overfitting");
  r57.set("difficulty", "Advanced");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "data-scientist");
  r58.set("question", "What is maximum likelihood estimation?");
  r58.set("options", ["Finding parameters that maximize probability of observed data","Maximizing model accuracy","Finding optimal learning rate","Minimizing cross-entropy"]);
  r58.set("correctAnswer", "Finding parameters that maximize probability of observed data");
  r58.set("difficulty", "Advanced");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "data-scientist");
  r59.set("question", "What is the difference between t-SNE and PCA?");
  r59.set("options", ["t-SNE is non-linear for visualization; PCA is linear for dimensionality reduction","PCA is non-linear; t-SNE is linear","They are identical","t-SNE preserves global structure; PCA preserves local"]);
  r59.set("correctAnswer", "t-SNE is non-linear for visualization; PCA is linear for dimensionality reduction");
  r59.set("difficulty", "Advanced");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "backend-engineer");
  r60.set("question", "What does API stand for?");
  r60.set("options", ["Application Programming Interface","Automated Process Input","Advanced Protocol Integration","Application Process Interface"]);
  r60.set("correctAnswer", "Application Programming Interface");
  r60.set("difficulty", "Beginner");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "backend-engineer");
  r61.set("question", "What HTTP method is used to create a resource?");
  r61.set("options", ["POST","GET","DELETE","PUT"]);
  r61.set("correctAnswer", "POST");
  r61.set("difficulty", "Beginner");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "backend-engineer");
  r62.set("question", "What is a database index?");
  r62.set("options", ["Data structure that speeds up queries","A primary key","A foreign key constraint","A backup of the database"]);
  r62.set("correctAnswer", "Data structure that speeds up queries");
  r62.set("difficulty", "Beginner");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "backend-engineer");
  r63.set("question", "What is Redis used for?");
  r63.set("options", ["In-memory caching and data store","Relational database","Message queue only","Search engine"]);
  r63.set("correctAnswer", "In-memory caching and data store");
  r63.set("difficulty", "Beginner");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "backend-engineer");
  r64.set("question", "What is JWT?");
  r64.set("options", ["JSON Web Token","JavaScript Web Transfer","Java Web Tool","JSON With Types"]);
  r64.set("correctAnswer", "JSON Web Token");
  r64.set("difficulty", "Beginner");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "backend-engineer");
  r65.set("question", "What is the N+1 query problem?");
  r65.set("options", ["1 query for list + N queries for each item's relations","N database connections","N API endpoints","N+1 indexes required"]);
  r65.set("correctAnswer", "1 query for list + N queries for each item's relations");
  r65.set("difficulty", "Intermediate");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "backend-engineer");
  r66.set("question", "What is the difference between optimistic and pessimistic locking?");
  r66.set("options", ["Optimistic checks for conflicts at commit; pessimistic locks rows immediately","Pessimistic checks at commit; optimistic locks rows","They are the same","Optimistic is for reads; pessimistic for writes"]);
  r66.set("correctAnswer", "Optimistic checks for conflicts at commit; pessimistic locks rows immediately");
  r66.set("difficulty", "Intermediate");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "backend-engineer");
  r67.set("question", "What is idempotency in APIs?");
  r67.set("options", ["Making same request multiple times produces same result","APIs that never fail","APIs that respond instantly","Encrypted API endpoints"]);
  r67.set("correctAnswer", "Making same request multiple times produces same result");
  r67.set("difficulty", "Intermediate");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "backend-engineer");
  r68.set("question", "What is a message queue used for?");
  r68.set("options", ["Decoupling services and async processing","Storing user messages","Database backups","API versioning"]);
  r68.set("correctAnswer", "Decoupling services and async processing");
  r68.set("difficulty", "Intermediate");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "backend-engineer");
  r69.set("question", "What is gRPC?");
  r69.set("options", ["High-performance RPC framework using Protocol Buffers","A REST API framework","A GraphQL implementation","A database protocol"]);
  r69.set("correctAnswer", "High-performance RPC framework using Protocol Buffers");
  r69.set("difficulty", "Intermediate");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "backend-engineer");
  r70.set("question", "What is the SAGA pattern in microservices?");
  r70.set("options", ["Manages distributed transactions using a sequence of local transactions with compensating actions","A deployment strategy","A monitoring approach","A database design pattern"]);
  r70.set("correctAnswer", "Manages distributed transactions using a sequence of local transactions with compensating actions");
  r70.set("difficulty", "Advanced");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "backend-engineer");
  r71.set("question", "What is event sourcing?");
  r71.set("options", ["Storing state changes as a sequence of events rather than current state","Logging API events","Streaming events with Kafka","A monitoring pattern"]);
  r71.set("correctAnswer", "Storing state changes as a sequence of events rather than current state");
  r71.set("difficulty", "Advanced");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "backend-engineer");
  r72.set("question", "What is CQRS?");
  r72.set("options", ["Command Query Responsibility Segregation - separates read and write models","Concurrent Query Routing System","Cached Query Response Strategy","Command Queue Resolution System"]);
  r72.set("correctAnswer", "Command Query Responsibility Segregation - separates read and write models");
  r72.set("difficulty", "Advanced");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "backend-engineer");
  r73.set("question", "What is database sharding?");
  r73.set("options", ["Horizontally partitioning data across multiple databases","Backing up a database","Encrypting a database","Replicating a database"]);
  r73.set("correctAnswer", "Horizontally partitioning data across multiple databases");
  r73.set("difficulty", "Advanced");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "backend-engineer");
  r74.set("question", "What is the circuit breaker pattern?");
  r74.set("options", ["Stops requests to a failing service; opens after threshold; tests with half-open state","A security pattern","A database pattern","A deployment strategy"]);
  r74.set("correctAnswer", "Stops requests to a failing service; opens after threshold; tests with half-open state");
  r74.set("difficulty", "Advanced");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "mobile-app-developer-ios-android");
  r75.set("question", "What language is used for iOS development?");
  r75.set("options", ["Swift","Kotlin","Dart","Java"]);
  r75.set("correctAnswer", "Swift");
  r75.set("difficulty", "Beginner");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "mobile-app-developer-ios-android");
  r76.set("question", "What is Flutter?");
  r76.set("options", ["Cross-platform mobile framework by Google","An iOS-only framework","An Android testing tool","A backend framework"]);
  r76.set("correctAnswer", "Cross-platform mobile framework by Google");
  r76.set("difficulty", "Beginner");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "mobile-app-developer-ios-android");
  r77.set("question", "What is the difference between native and cross-platform apps?");
  r77.set("options", ["Native uses platform-specific code; cross-platform uses shared codebase","Cross-platform uses platform-specific code","They are the same","Native is always faster and prettier"]);
  r77.set("correctAnswer", "Native uses platform-specific code; cross-platform uses shared codebase");
  r77.set("difficulty", "Beginner");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "mobile-app-developer-ios-android");
  r78.set("question", "What is React Native?");
  r78.set("options", ["Framework for building mobile apps using React and JavaScript","A React web library","A native iOS framework","A game engine"]);
  r78.set("correctAnswer", "Framework for building mobile apps using React and JavaScript");
  r78.set("difficulty", "Beginner");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "mobile-app-developer-ios-android");
  r79.set("question", "What is Kotlin used for?");
  r79.set("options", ["Android app development","iOS development","Backend only","Web development"]);
  r79.set("correctAnswer", "Android app development");
  r79.set("difficulty", "Beginner");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "mobile-app-developer-ios-android");
  r80.set("question", "What is MVVM architecture?");
  r80.set("options", ["Model-View-ViewModel - separates UI from business logic","Model-View-Controller","Multiple View Management","Model-Validation-View-Module"]);
  r80.set("correctAnswer", "Model-View-ViewModel - separates UI from business logic");
  r80.set("difficulty", "Intermediate");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "mobile-app-developer-ios-android");
  r81.set("question", "What is ARC in iOS?");
  r81.set("options", ["Automatic Reference Counting - manages memory automatically","App Review Controller","Async Runtime Component","Animated Rendering Core"]);
  r81.set("correctAnswer", "Automatic Reference Counting - manages memory automatically");
  r81.set("difficulty", "Intermediate");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "mobile-app-developer-ios-android");
  r82.set("question", "What is a retain cycle?");
  r82.set("options", ["Two objects holding strong references to each other causing memory leak","A CPU loop","A background task cycle","A UI animation loop"]);
  r82.set("correctAnswer", "Two objects holding strong references to each other causing memory leak");
  r82.set("difficulty", "Intermediate");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "mobile-app-developer-ios-android");
  r83.set("question", "What is coroutines in Kotlin?");
  r83.set("options", ["Lightweight threads for async programming","A design pattern","A UI component","A database library"]);
  r83.set("correctAnswer", "Lightweight threads for async programming");
  r83.set("difficulty", "Intermediate");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "mobile-app-developer-ios-android");
  r84.set("question", "What is dependency injection in mobile?");
  r84.set("options", ["Providing dependencies from outside rather than creating them inside","Installing app dependencies","Injecting code at runtime","A testing technique"]);
  r84.set("correctAnswer", "Providing dependencies from outside rather than creating them inside");
  r84.set("difficulty", "Intermediate");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "mobile-app-developer-ios-android");
  r85.set("question", "What is the difference between Combine and async/await in Swift?");
  r85.set("options", ["Combine is reactive streams framework; async/await is structured concurrency for sequential async code","They are identical","async/await is older; Combine is newer","Combine is for UI; async/await is for networking"]);
  r85.set("correctAnswer", "Combine is reactive streams framework; async/await is structured concurrency for sequential async code");
  r85.set("difficulty", "Advanced");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "mobile-app-developer-ios-android");
  r86.set("question", "What is the Composable Architecture (TCA)?");
  r86.set("options", ["State management pattern using unidirectional data flow with reducers and effects","A component library","An architecture for microservices","A SwiftUI layout system"]);
  r86.set("correctAnswer", "State management pattern using unidirectional data flow with reducers and effects");
  r86.set("difficulty", "Advanced");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "mobile-app-developer-ios-android");
  r87.set("question", "What is certificate pinning in mobile security?");
  r87.set("options", ["Hardcoding expected server certificate to prevent MITM attacks","Pinning UI elements","Storing certificates locally","A code signing technique"]);
  r87.set("correctAnswer", "Hardcoding expected server certificate to prevent MITM attacks");
  r87.set("difficulty", "Advanced");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "mobile-app-developer-ios-android");
  r88.set("question", "What is offline-first architecture?");
  r88.set("options", ["App works fully offline and syncs when connected","App requires constant internet","App caches only images","A deployment strategy"]);
  r88.set("correctAnswer", "App works fully offline and syncs when connected");
  r88.set("difficulty", "Advanced");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "mobile-app-developer-ios-android");
  r89.set("question", "What is ANR in Android?");
  r89.set("options", ["Application Not Responding - triggered when UI thread blocked over 5 seconds","Android Network Request error","App Node Runtime failure","A notification type"]);
  r89.set("correctAnswer", "Application Not Responding - triggered when UI thread blocked over 5 seconds");
  r89.set("difficulty", "Advanced");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "product-manager-technical");
  r90.set("question", "What does PRD stand for?");
  r90.set("options", ["Product Requirements Document","Project Review Document","Product Roadmap Draft","Process Requirements Definition"]);
  r90.set("correctAnswer", "Product Requirements Document");
  r90.set("difficulty", "Beginner");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "product-manager-technical");
  r91.set("question", "What is MVP?");
  r91.set("options", ["Minimum Viable Product","Maximum Value Proposition","Most Valued Product","Minimum Validated Product"]);
  r91.set("correctAnswer", "Minimum Viable Product");
  r91.set("difficulty", "Beginner");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "product-manager-technical");
  r92.set("question", "What is NPS?");
  r92.set("options", ["Net Promoter Score","New Product Strategy","Network Performance Score","Net Purchase Score"]);
  r92.set("correctAnswer", "Net Promoter Score");
  r92.set("difficulty", "Beginner");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "product-manager-technical");
  r93.set("question", "What are OKRs?");
  r93.set("options", ["Objectives and Key Results","Operations and Key Risks","Output and Key Ratios","Objectives and Key Roadmaps"]);
  r93.set("correctAnswer", "Objectives and Key Results");
  r93.set("difficulty", "Beginner");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "product-manager-technical");
  r94.set("question", "What is a user story?");
  r94.set("options", ["As a [user], I want [feature] so that [benefit]","A case study","A product specification","A user interview"]);
  r94.set("correctAnswer", "As a [user], I want [feature] so that [benefit]");
  r94.set("difficulty", "Beginner");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "product-manager-technical");
  r95.set("question", "What is the RICE prioritization framework?");
  r95.set("options", ["Reach × Impact × Confidence ÷ Effort","Revenue × Impact × Cost × Effort","Reach × Impact × Cost × Ease","Revenue × Interest × Cost × Evaluation"]);
  r95.set("correctAnswer", "Reach × Impact × Confidence ÷ Effort");
  r95.set("difficulty", "Intermediate");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "product-manager-technical");
  r96.set("question", "What is product-market fit?");
  r96.set("options", ["When a product satisfies a strong market demand","When a product is profitable","When a product is launched","When a product has 1000 users"]);
  r96.set("correctAnswer", "When a product satisfies a strong market demand");
  r96.set("difficulty", "Intermediate");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "product-manager-technical");
  r97.set("question", "What is DAU/MAU ratio used for?");
  r97.set("options", ["Measuring user engagement and stickiness","Measuring revenue","Measuring app store rating","Measuring team velocity"]);
  r97.set("correctAnswer", "Measuring user engagement and stickiness");
  r97.set("difficulty", "Intermediate");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "product-manager-technical");
  r98.set("question", "What is Jobs to be Done (JTBD)?");
  r98.set("options", ["Framework focusing on what customers hire a product to accomplish","A task management system","An agile methodology","A hiring framework"]);
  r98.set("correctAnswer", "Framework focusing on what customers hire a product to accomplish");
  r98.set("difficulty", "Intermediate");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "product-manager-technical");
  r99.set("question", "What is a north star metric?");
  r99.set("options", ["Single metric that best captures core product value delivered to customers","Revenue target","Number of features shipped","User growth rate"]);
  r99.set("correctAnswer", "Single metric that best captures core product value delivered to customers");
  r99.set("difficulty", "Intermediate");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "product-manager-technical");
  r100.set("question", "What is the difference between PLG and SLG?");
  r100.set("options", ["PLG uses product itself to acquire/retain users; SLG relies on sales team to close deals","SLG is product-led; PLG is sales-led","They are identical","PLG is for B2B; SLG is for B2C"]);
  r100.set("correctAnswer", "PLG uses product itself to acquire/retain users; SLG relies on sales team to close deals");
  r100.set("difficulty", "Advanced");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "product-manager-technical");
  r101.set("question", "What is the difference between output and outcome metrics?");
  r101.set("options", ["Output: features shipped; outcome: business/user impact achieved","Output: user satisfaction; outcome: features shipped","They are the same","Output is for engineering; outcome is for design"]);
  r101.set("correctAnswer", "Output: features shipped; outcome: business/user impact achieved");
  r101.set("difficulty", "Advanced");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "product-manager-technical");
  r102.set("question", "What is network effect?");
  r102.set("options", ["Product becomes more valuable as more people use it","A viral marketing campaign","A technical infrastructure effect","Social media engagement"]);
  r102.set("correctAnswer", "Product becomes more valuable as more people use it");
  r102.set("difficulty", "Advanced");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "product-manager-technical");
  r103.set("question", "What is the double diamond design process?");
  r103.set("options", ["Diverge-converge twice: discover→define→develop→deliver","Two sprints in a row","A competitive analysis framework","A pricing model"]);
  r103.set("correctAnswer", "Diverge-converge twice: discover→define→develop→deliver");
  r103.set("difficulty", "Advanced");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "product-manager-technical");
  r104.set("question", "What is the difference between data-driven and data-informed product decisions?");
  r104.set("options", ["Data-driven lets data make decisions; data-informed uses data as one input alongside judgment","They are identical","Data-informed ignores data","Data-driven requires less data"]);
  r104.set("correctAnswer", "Data-driven lets data make decisions; data-informed uses data as one input alongside judgment");
  r104.set("difficulty", "Advanced");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
