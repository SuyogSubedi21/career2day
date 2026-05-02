/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "game-developer");
  r0.set("questionNumber", 1);
  r0.set("question", "What is a game loop?");
  r0.set("category", "Technical");
  r0.set("difficulty", "Beginner");
  r0.set("explanation", "Beginner level question for Game Developer. What is a game loop?");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "game-developer");
  r1.set("questionNumber", 2);
  r1.set("question", "What is delta time?");
  r1.set("category", "Technical");
  r1.set("difficulty", "Beginner");
  r1.set("explanation", "Beginner level question for Game Developer. What is delta time?");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "game-developer");
  r2.set("questionNumber", 3);
  r2.set("question", "What is a fixed update vs update?");
  r2.set("category", "Behavioral");
  r2.set("difficulty", "Beginner");
  r2.set("explanation", "Beginner level question for Game Developer. What is a fixed update vs update?");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "game-developer");
  r3.set("questionNumber", 4);
  r3.set("question", "What is a coroutine in Unity?");
  r3.set("category", "Technical");
  r3.set("difficulty", "Beginner");
  r3.set("explanation", "Beginner level question for Game Developer. What is a coroutine in Unity?");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "game-developer");
  r4.set("questionNumber", 5);
  r4.set("question", "What is a prefab?");
  r4.set("category", "Technical");
  r4.set("difficulty", "Beginner");
  r4.set("explanation", "Beginner level question for Game Developer. What is a prefab?");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "game-developer");
  r5.set("questionNumber", 6);
  r5.set("question", "What is a scene in Unity?");
  r5.set("category", "System Design");
  r5.set("difficulty", "Beginner");
  r5.set("explanation", "Beginner level question for Game Developer. What is a scene in Unity?");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "game-developer");
  r6.set("questionNumber", 7);
  r6.set("question", "What is object pooling?");
  r6.set("category", "Technical");
  r6.set("difficulty", "Beginner");
  r6.set("explanation", "Beginner level question for Game Developer. What is object pooling?");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "game-developer");
  r7.set("questionNumber", 8);
  r7.set("question", "What is garbage collection in Unity?");
  r7.set("category", "Technical");
  r7.set("difficulty", "Beginner");
  r7.set("explanation", "Beginner level question for Game Developer. What is garbage collection in Unity?");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "game-developer");
  r8.set("questionNumber", 9);
  r8.set("question", "What is a scriptable object?");
  r8.set("category", "Behavioral");
  r8.set("difficulty", "Beginner");
  r8.set("explanation", "Beginner level question for Game Developer. What is a scriptable object?");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "game-developer");
  r9.set("questionNumber", 10);
  r9.set("question", "What is the component pattern?");
  r9.set("category", "Technical");
  r9.set("difficulty", "Beginner");
  r9.set("explanation", "Beginner level question for Game Developer. What is the component pattern?");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "game-developer");
  r10.set("questionNumber", 11);
  r10.set("question", "What is entity component system (ECS)?");
  r10.set("category", "Technical");
  r10.set("difficulty", "Beginner");
  r10.set("explanation", "Beginner level question for Game Developer. What is entity component system (ECS)?");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "game-developer");
  r11.set("questionNumber", 12);
  r11.set("question", "What is the Unity DOTS?");
  r11.set("category", "System Design");
  r11.set("difficulty", "Beginner");
  r11.set("explanation", "Beginner level question for Game Developer. What is the Unity DOTS?");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "game-developer");
  r12.set("questionNumber", 13);
  r12.set("question", "What is Burst Compiler?");
  r12.set("category", "Technical");
  r12.set("difficulty", "Beginner");
  r12.set("explanation", "Beginner level question for Game Developer. What is Burst Compiler?");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "game-developer");
  r13.set("questionNumber", 14);
  r13.set("question", "What is the Job System in Unity?");
  r13.set("category", "Technical");
  r13.set("difficulty", "Beginner");
  r13.set("explanation", "Beginner level question for Game Developer. What is the Job System in Unity?");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "game-developer");
  r14.set("questionNumber", 15);
  r14.set("question", "What is a physics layer?");
  r14.set("category", "Behavioral");
  r14.set("difficulty", "Beginner");
  r14.set("explanation", "Beginner level question for Game Developer. What is a physics layer?");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "game-developer");
  r15.set("questionNumber", 16);
  r15.set("question", "What is a rigidbody?");
  r15.set("category", "Technical");
  r15.set("difficulty", "Beginner");
  r15.set("explanation", "Beginner level question for Game Developer. What is a rigidbody?");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "game-developer");
  r16.set("questionNumber", 17);
  r16.set("question", "What is a collider?");
  r16.set("category", "Technical");
  r16.set("difficulty", "Beginner");
  r16.set("explanation", "Beginner level question for Game Developer. What is a collider?");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "game-developer");
  r17.set("questionNumber", 18);
  r17.set("question", "What is trigger vs collision?");
  r17.set("category", "System Design");
  r17.set("difficulty", "Beginner");
  r17.set("explanation", "Beginner level question for Game Developer. What is trigger vs collision?");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "game-developer");
  r18.set("questionNumber", 19);
  r18.set("question", "What is raycasting?");
  r18.set("category", "Technical");
  r18.set("difficulty", "Beginner");
  r18.set("explanation", "Beginner level question for Game Developer. What is raycasting?");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "game-developer");
  r19.set("questionNumber", 20);
  r19.set("question", "What is a navmesh?");
  r19.set("category", "Technical");
  r19.set("difficulty", "Beginner");
  r19.set("explanation", "Beginner level question for Game Developer. What is a navmesh?");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "game-developer");
  r20.set("questionNumber", 21);
  r20.set("question", "What is pathfinding?");
  r20.set("category", "Behavioral");
  r20.set("difficulty", "Beginner");
  r20.set("explanation", "Beginner level question for Game Developer. What is pathfinding?");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "game-developer");
  r21.set("questionNumber", 22);
  r21.set("question", "What is A* pathfinding?");
  r21.set("category", "Technical");
  r21.set("difficulty", "Beginner");
  r21.set("explanation", "Beginner level question for Game Developer. What is A* pathfinding?");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "game-developer");
  r22.set("questionNumber", 23);
  r22.set("question", "What is a behavior tree in game AI?");
  r22.set("category", "Technical");
  r22.set("difficulty", "Beginner");
  r22.set("explanation", "Beginner level question for Game Developer. What is a behavior tree in game AI?");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "game-developer");
  r23.set("questionNumber", 24);
  r23.set("question", "What is a finite state machine in games?");
  r23.set("category", "System Design");
  r23.set("difficulty", "Beginner");
  r23.set("explanation", "Beginner level question for Game Developer. What is a finite state machine in games?");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "game-developer");
  r24.set("questionNumber", 25);
  r24.set("question", "What is a shader?");
  r24.set("category", "Technical");
  r24.set("difficulty", "Beginner");
  r24.set("explanation", "Beginner level question for Game Developer. What is a shader?");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "game-developer");
  r25.set("questionNumber", 26);
  r25.set("question", "What is a vertex shader?");
  r25.set("category", "Technical");
  r25.set("difficulty", "Beginner");
  r25.set("explanation", "Beginner level question for Game Developer. What is a vertex shader?");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "game-developer");
  r26.set("questionNumber", 27);
  r26.set("question", "What is a fragment shader?");
  r26.set("category", "Behavioral");
  r26.set("difficulty", "Beginner");
  r26.set("explanation", "Beginner level question for Game Developer. What is a fragment shader?");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "game-developer");
  r27.set("questionNumber", 28);
  r27.set("question", "What is PBR rendering?");
  r27.set("category", "Technical");
  r27.set("difficulty", "Beginner");
  r27.set("explanation", "Beginner level question for Game Developer. What is PBR rendering?");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "game-developer");
  r28.set("questionNumber", 29);
  r28.set("question", "What is a normal map?");
  r28.set("category", "Technical");
  r28.set("difficulty", "Beginner");
  r28.set("explanation", "Beginner level question for Game Developer. What is a normal map?");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "game-developer");
  r29.set("questionNumber", 30);
  r29.set("question", "What is a shadow map?");
  r29.set("category", "System Design");
  r29.set("difficulty", "Beginner");
  r29.set("explanation", "Beginner level question for Game Developer. What is a shadow map?");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "game-developer");
  r30.set("questionNumber", 31);
  r30.set("question", "What is LOD (Level of Detail)?");
  r30.set("category", "Technical");
  r30.set("difficulty", "Beginner");
  r30.set("explanation", "Beginner level question for Game Developer. What is LOD (Level of Detail)?");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "game-developer");
  r31.set("questionNumber", 32);
  r31.set("question", "What is frustum culling?");
  r31.set("category", "Technical");
  r31.set("difficulty", "Beginner");
  r31.set("explanation", "Beginner level question for Game Developer. What is frustum culling?");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "game-developer");
  r32.set("questionNumber", 33);
  r32.set("question", "What is occlusion culling?");
  r32.set("category", "Behavioral");
  r32.set("difficulty", "Beginner");
  r32.set("explanation", "Beginner level question for Game Developer. What is occlusion culling?");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "game-developer");
  r33.set("questionNumber", 34);
  r33.set("question", "What is batching?");
  r33.set("category", "Technical");
  r33.set("difficulty", "Intermediate");
  r33.set("explanation", "Intermediate level question for Game Developer. What is batching?");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "game-developer");
  r34.set("questionNumber", 35);
  r34.set("question", "What is texture atlas?");
  r34.set("category", "Technical");
  r34.set("difficulty", "Intermediate");
  r34.set("explanation", "Intermediate level question for Game Developer. What is texture atlas?");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "game-developer");
  r35.set("questionNumber", 36);
  r35.set("question", "What is sprite sheet?");
  r35.set("category", "System Design");
  r35.set("difficulty", "Intermediate");
  r35.set("explanation", "Intermediate level question for Game Developer. What is sprite sheet?");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "game-developer");
  r36.set("questionNumber", 37);
  r36.set("question", "What is bone animation?");
  r36.set("category", "Technical");
  r36.set("difficulty", "Intermediate");
  r36.set("explanation", "Intermediate level question for Game Developer. What is bone animation?");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "game-developer");
  r37.set("questionNumber", 38);
  r37.set("question", "What is blend tree?");
  r37.set("category", "Technical");
  r37.set("difficulty", "Intermediate");
  r37.set("explanation", "Intermediate level question for Game Developer. What is blend tree?");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "game-developer");
  r38.set("questionNumber", 39);
  r38.set("question", "What is animation state machine?");
  r38.set("category", "Behavioral");
  r38.set("difficulty", "Intermediate");
  r38.set("explanation", "Intermediate level question for Game Developer. What is animation state machine?");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "game-developer");
  r39.set("questionNumber", 40);
  r39.set("question", "What is inverse kinematics in games?");
  r39.set("category", "Technical");
  r39.set("difficulty", "Intermediate");
  r39.set("explanation", "Intermediate level question for Game Developer. What is inverse kinematics in games?");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "game-developer");
  r40.set("questionNumber", 41);
  r40.set("question", "What is a game camera?");
  r40.set("category", "Technical");
  r40.set("difficulty", "Intermediate");
  r40.set("explanation", "Intermediate level question for Game Developer. What is a game camera?");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "game-developer");
  r41.set("questionNumber", 42);
  r41.set("question", "What is a virtual camera (Cinemachine)?");
  r41.set("category", "System Design");
  r41.set("difficulty", "Intermediate");
  r41.set("explanation", "Intermediate level question for Game Developer. What is a virtual camera (Cinemachine)?");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "game-developer");
  r42.set("questionNumber", 43);
  r42.set("question", "What is UI in Unity (Canvas)?");
  r42.set("category", "Technical");
  r42.set("difficulty", "Intermediate");
  r42.set("explanation", "Intermediate level question for Game Developer. What is UI in Unity (Canvas)?");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "game-developer");
  r43.set("questionNumber", 44);
  r43.set("question", "What is UI Toolkit?");
  r43.set("category", "Technical");
  r43.set("difficulty", "Intermediate");
  r43.set("explanation", "Intermediate level question for Game Developer. What is UI Toolkit?");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "game-developer");
  r44.set("questionNumber", 45);
  r44.set("question", "What is an audio source?");
  r44.set("category", "Behavioral");
  r44.set("difficulty", "Intermediate");
  r44.set("explanation", "Intermediate level question for Game Developer. What is an audio source?");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "game-developer");
  r45.set("questionNumber", 46);
  r45.set("question", "What is spatial audio in games?");
  r45.set("category", "Technical");
  r45.set("difficulty", "Intermediate");
  r45.set("explanation", "Intermediate level question for Game Developer. What is spatial audio in games?");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "game-developer");
  r46.set("questionNumber", 47);
  r46.set("question", "What is a game save system?");
  r46.set("category", "Technical");
  r46.set("difficulty", "Intermediate");
  r46.set("explanation", "Intermediate level question for Game Developer. What is a game save system?");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "game-developer");
  r47.set("questionNumber", 48);
  r47.set("question", "What is PlayerPrefs?");
  r47.set("category", "System Design");
  r47.set("difficulty", "Intermediate");
  r47.set("explanation", "Intermediate level question for Game Developer. What is PlayerPrefs?");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "game-developer");
  r48.set("questionNumber", 49);
  r48.set("question", "What is serialization in Unity?");
  r48.set("category", "Technical");
  r48.set("difficulty", "Intermediate");
  r48.set("explanation", "Intermediate level question for Game Developer. What is serialization in Unity?");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "game-developer");
  r49.set("questionNumber", 50);
  r49.set("question", "What is ScriptableObject for game data?");
  r49.set("category", "Technical");
  r49.set("difficulty", "Intermediate");
  r49.set("explanation", "Intermediate level question for Game Developer. What is ScriptableObject for game data?");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "game-developer");
  r50.set("questionNumber", 51);
  r50.set("question", "What is a singleton in games?");
  r50.set("category", "Behavioral");
  r50.set("difficulty", "Intermediate");
  r50.set("explanation", "Intermediate level question for Game Developer. What is a singleton in games?");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "game-developer");
  r51.set("questionNumber", 52);
  r51.set("question", "What is a service locator pattern?");
  r51.set("category", "Technical");
  r51.set("difficulty", "Intermediate");
  r51.set("explanation", "Intermediate level question for Game Developer. What is a service locator pattern?");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "game-developer");
  r52.set("questionNumber", 53);
  r52.set("question", "What is an observer pattern in games?");
  r52.set("category", "Technical");
  r52.set("difficulty", "Intermediate");
  r52.set("explanation", "Intermediate level question for Game Developer. What is an observer pattern in games?");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "game-developer");
  r53.set("questionNumber", 54);
  r53.set("question", "What is an event system?");
  r53.set("category", "System Design");
  r53.set("difficulty", "Intermediate");
  r53.set("explanation", "Intermediate level question for Game Developer. What is an event system?");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "game-developer");
  r54.set("questionNumber", 55);
  r54.set("question", "What is the command pattern in games?");
  r54.set("category", "Technical");
  r54.set("difficulty", "Intermediate");
  r54.set("explanation", "Intermediate level question for Game Developer. What is the command pattern in games?");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "game-developer");
  r55.set("questionNumber", 56);
  r55.set("question", "What is the state pattern in games?");
  r55.set("category", "Technical");
  r55.set("difficulty", "Intermediate");
  r55.set("explanation", "Intermediate level question for Game Developer. What is the state pattern in games?");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "game-developer");
  r56.set("questionNumber", 57);
  r56.set("question", "What is multiplayer networking in games?");
  r56.set("category", "Behavioral");
  r56.set("difficulty", "Intermediate");
  r56.set("explanation", "Intermediate level question for Game Developer. What is multiplayer networking in games?");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "game-developer");
  r57.set("questionNumber", 58);
  r57.set("question", "What is client-server vs peer-to-peer?");
  r57.set("category", "Technical");
  r57.set("difficulty", "Intermediate");
  r57.set("explanation", "Intermediate level question for Game Developer. What is client-server vs peer-to-peer?");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "game-developer");
  r58.set("questionNumber", 59);
  r58.set("question", "What is lag compensation?");
  r58.set("category", "Technical");
  r58.set("difficulty", "Intermediate");
  r58.set("explanation", "Intermediate level question for Game Developer. What is lag compensation?");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "game-developer");
  r59.set("questionNumber", 60);
  r59.set("question", "What is client-side prediction?");
  r59.set("category", "System Design");
  r59.set("difficulty", "Intermediate");
  r59.set("explanation", "Intermediate level question for Game Developer. What is client-side prediction?");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "game-developer");
  r60.set("questionNumber", 61);
  r60.set("question", "What is server reconciliation?");
  r60.set("category", "Technical");
  r60.set("difficulty", "Intermediate");
  r60.set("explanation", "Intermediate level question for Game Developer. What is server reconciliation?");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "game-developer");
  r61.set("questionNumber", 62);
  r61.set("question", "What is rollback netcode?");
  r61.set("category", "Technical");
  r61.set("difficulty", "Intermediate");
  r61.set("explanation", "Intermediate level question for Game Developer. What is rollback netcode?");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "game-developer");
  r62.set("questionNumber", 63);
  r62.set("question", "What is Unity Netcode for GameObjects?");
  r62.set("category", "Behavioral");
  r62.set("difficulty", "Intermediate");
  r62.set("explanation", "Intermediate level question for Game Developer. What is Unity Netcode for GameObjects?");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "game-developer");
  r63.set("questionNumber", 64);
  r63.set("question", "What is Photon PUN?");
  r63.set("category", "Technical");
  r63.set("difficulty", "Intermediate");
  r63.set("explanation", "Intermediate level question for Game Developer. What is Photon PUN?");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "game-developer");
  r64.set("questionNumber", 65);
  r64.set("question", "What is Mirror networking?");
  r64.set("category", "Technical");
  r64.set("difficulty", "Intermediate");
  r64.set("explanation", "Intermediate level question for Game Developer. What is Mirror networking?");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "game-developer");
  r65.set("questionNumber", 66);
  r65.set("question", "What is a game server?");
  r65.set("category", "System Design");
  r65.set("difficulty", "Intermediate");
  r65.set("explanation", "Intermediate level question for Game Developer. What is a game server?");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "game-developer");
  r66.set("questionNumber", 67);
  r66.set("question", "What is matchmaking?");
  r66.set("category", "Technical");
  r66.set("difficulty", "Intermediate");
  r66.set("explanation", "Intermediate level question for Game Developer. What is matchmaking?");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "game-developer");
  r67.set("questionNumber", 68);
  r67.set("question", "What is a dedicated server?");
  r67.set("category", "Technical");
  r67.set("difficulty", "Advanced");
  r67.set("explanation", "Advanced level question for Game Developer. What is a dedicated server?");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "game-developer");
  r68.set("questionNumber", 69);
  r68.set("question", "What is a relay server?");
  r68.set("category", "Behavioral");
  r68.set("difficulty", "Advanced");
  r68.set("explanation", "Advanced level question for Game Developer. What is a relay server?");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "game-developer");
  r69.set("questionNumber", 70);
  r69.set("question", "What is WebGL build?");
  r69.set("category", "Technical");
  r69.set("difficulty", "Advanced");
  r69.set("explanation", "Advanced level question for Game Developer. What is WebGL build?");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "game-developer");
  r70.set("questionNumber", 71);
  r70.set("question", "What is mobile optimization for games?");
  r70.set("category", "Technical");
  r70.set("difficulty", "Advanced");
  r70.set("explanation", "Advanced level question for Game Developer. What is mobile optimization for games?");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "game-developer");
  r71.set("questionNumber", 72);
  r71.set("question", "What is profiling in Unity?");
  r71.set("category", "System Design");
  r71.set("difficulty", "Advanced");
  r71.set("explanation", "Advanced level question for Game Developer. What is profiling in Unity?");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "game-developer");
  r72.set("questionNumber", 73);
  r72.set("question", "What is the Unity Profiler?");
  r72.set("category", "Technical");
  r72.set("difficulty", "Advanced");
  r72.set("explanation", "Advanced level question for Game Developer. What is the Unity Profiler?");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "game-developer");
  r73.set("questionNumber", 74);
  r73.set("question", "What is memory management in games?");
  r73.set("category", "Technical");
  r73.set("difficulty", "Advanced");
  r73.set("explanation", "Advanced level question for Game Developer. What is memory management in games?");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "game-developer");
  r74.set("questionNumber", 75);
  r74.set("question", "What is a memory pool?");
  r74.set("category", "Behavioral");
  r74.set("difficulty", "Advanced");
  r74.set("explanation", "Advanced level question for Game Developer. What is a memory pool?");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "game-developer");
  r75.set("questionNumber", 76);
  r75.set("question", "What is draw call optimization?");
  r75.set("category", "Technical");
  r75.set("difficulty", "Advanced");
  r75.set("explanation", "Advanced level question for Game Developer. What is draw call optimization?");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "game-developer");
  r76.set("questionNumber", 77);
  r76.set("question", "What is GPU vs CPU bound?");
  r76.set("category", "Technical");
  r76.set("difficulty", "Advanced");
  r76.set("explanation", "Advanced level question for Game Developer. What is GPU vs CPU bound?");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "game-developer");
  r77.set("questionNumber", 78);
  r77.set("question", "What is frame rate vs refresh rate?");
  r77.set("category", "System Design");
  r77.set("difficulty", "Advanced");
  r77.set("explanation", "Advanced level question for Game Developer. What is frame rate vs refresh rate?");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "game-developer");
  r78.set("questionNumber", 79);
  r78.set("question", "What is VSync?");
  r78.set("category", "Technical");
  r78.set("difficulty", "Advanced");
  r78.set("explanation", "Advanced level question for Game Developer. What is VSync?");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "game-developer");
  r79.set("questionNumber", 80);
  r79.set("question", "What is anti-aliasing?");
  r79.set("category", "Technical");
  r79.set("difficulty", "Advanced");
  r79.set("explanation", "Advanced level question for Game Developer. What is anti-aliasing?");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "game-developer");
  r80.set("questionNumber", 81);
  r80.set("question", "What is post-processing?");
  r80.set("category", "Behavioral");
  r80.set("difficulty", "Advanced");
  r80.set("explanation", "Advanced level question for Game Developer. What is post-processing?");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "game-developer");
  r81.set("questionNumber", 82);
  r81.set("question", "What is Steam SDK?");
  r81.set("category", "Technical");
  r81.set("difficulty", "Advanced");
  r81.set("explanation", "Advanced level question for Game Developer. What is Steam SDK?");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "game-developer");
  r82.set("questionNumber", 83);
  r82.set("question", "What is achievements integration?");
  r82.set("category", "Technical");
  r82.set("difficulty", "Advanced");
  r82.set("explanation", "Advanced level question for Game Developer. What is achievements integration?");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "game-developer");
  r83.set("questionNumber", 84);
  r83.set("question", "What is leaderboard?");
  r83.set("category", "System Design");
  r83.set("difficulty", "Advanced");
  r83.set("explanation", "Advanced level question for Game Developer. What is leaderboard?");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "game-developer");
  r84.set("questionNumber", 85);
  r84.set("question", "What is in-app purchase in games?");
  r84.set("category", "Technical");
  r84.set("difficulty", "Advanced");
  r84.set("explanation", "Advanced level question for Game Developer. What is in-app purchase in games?");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "game-developer");
  r85.set("questionNumber", 86);
  r85.set("question", "What is a game economy?");
  r85.set("category", "Technical");
  r85.set("difficulty", "Advanced");
  r85.set("explanation", "Advanced level question for Game Developer. What is a game economy?");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "game-developer");
  r86.set("questionNumber", 87);
  r86.set("question", "What is loot box?");
  r86.set("category", "Behavioral");
  r86.set("difficulty", "Advanced");
  r86.set("explanation", "Advanced level question for Game Developer. What is loot box?");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "game-developer");
  r87.set("questionNumber", 88);
  r87.set("question", "What is a live ops?");
  r87.set("category", "Technical");
  r87.set("difficulty", "Advanced");
  r87.set("explanation", "Advanced level question for Game Developer. What is a live ops?");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "game-developer");
  r88.set("questionNumber", 89);
  r88.set("question", "What is a game analytics?");
  r88.set("category", "Technical");
  r88.set("difficulty", "Advanced");
  r88.set("explanation", "Advanced level question for Game Developer. What is a game analytics?");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "game-developer");
  r89.set("questionNumber", 90);
  r89.set("question", "What is A/B testing in games?");
  r89.set("category", "System Design");
  r89.set("difficulty", "Advanced");
  r89.set("explanation", "Advanced level question for Game Developer. What is A/B testing in games?");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "game-developer");
  r90.set("questionNumber", 91);
  r90.set("question", "What is player retention?");
  r90.set("category", "Technical");
  r90.set("difficulty", "Advanced");
  r90.set("explanation", "Advanced level question for Game Developer. What is player retention?");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "game-developer");
  r91.set("questionNumber", 92);
  r91.set("question", "What is D1/D7/D30 retention?");
  r91.set("category", "Technical");
  r91.set("difficulty", "Advanced");
  r91.set("explanation", "Advanced level question for Game Developer. What is D1/D7/D30 retention?");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "game-developer");
  r92.set("questionNumber", 93);
  r92.set("question", "What is LTV in games?");
  r92.set("category", "Behavioral");
  r92.set("difficulty", "Advanced");
  r92.set("explanation", "Advanced level question for Game Developer. What is LTV in games?");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "game-developer");
  r93.set("questionNumber", 94);
  r93.set("question", "What is ARPU?");
  r93.set("category", "Technical");
  r93.set("difficulty", "Advanced");
  r93.set("explanation", "Advanced level question for Game Developer. What is ARPU?");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "game-developer");
  r94.set("questionNumber", 95);
  r94.set("question", "What is DAU?");
  r94.set("category", "Technical");
  r94.set("difficulty", "Advanced");
  r94.set("explanation", "Advanced level question for Game Developer. What is DAU?");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "game-developer");
  r95.set("questionNumber", 96);
  r95.set("question", "What is a game design document (GDD)?");
  r95.set("category", "System Design");
  r95.set("difficulty", "Advanced");
  r95.set("explanation", "Advanced level question for Game Developer. What is a game design document (GDD)?");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "game-developer");
  r96.set("questionNumber", 97);
  r96.set("question", "What is a level design?");
  r96.set("category", "Technical");
  r96.set("difficulty", "Advanced");
  r96.set("explanation", "Advanced level question for Game Developer. What is a level design?");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "game-developer");
  r97.set("questionNumber", 98);
  r97.set("question", "What is procedural generation?");
  r97.set("category", "Technical");
  r97.set("difficulty", "Advanced");
  r97.set("explanation", "Advanced level question for Game Developer. What is procedural generation?");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "game-developer");
  r98.set("questionNumber", 99);
  r98.set("question", "What is noise function (Perlin noise)?");
  r98.set("category", "Behavioral");
  r98.set("difficulty", "Advanced");
  r98.set("explanation", "Advanced level question for Game Developer. What is noise function (Perlin noise)?");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "game-developer");
  r99.set("questionNumber", 100);
  r99.set("question", "What is a voxel?");
  r99.set("category", "Technical");
  r99.set("difficulty", "Advanced");
  r99.set("explanation", "Advanced level question for Game Developer. What is a voxel?");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "bioinformatics-engineer");
  r100.set("questionNumber", 1);
  r100.set("question", "What is bioinformatics?");
  r100.set("category", "Technical");
  r100.set("difficulty", "Beginner");
  r100.set("explanation", "Beginner level question for Bioinformatics Engineer. What is bioinformatics?");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "bioinformatics-engineer");
  r101.set("questionNumber", 2);
  r101.set("question", "What is a genome?");
  r101.set("category", "Technical");
  r101.set("difficulty", "Beginner");
  r101.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a genome?");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "bioinformatics-engineer");
  r102.set("questionNumber", 3);
  r102.set("question", "What is DNA sequencing?");
  r102.set("category", "Behavioral");
  r102.set("difficulty", "Beginner");
  r102.set("explanation", "Beginner level question for Bioinformatics Engineer. What is DNA sequencing?");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "bioinformatics-engineer");
  r103.set("questionNumber", 4);
  r103.set("question", "What is next-generation sequencing (NGS)?");
  r103.set("category", "Technical");
  r103.set("difficulty", "Beginner");
  r103.set("explanation", "Beginner level question for Bioinformatics Engineer. What is next-generation sequencing (NGS)?");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "bioinformatics-engineer");
  r104.set("questionNumber", 5);
  r104.set("question", "What is a FASTQ file?");
  r104.set("category", "Technical");
  r104.set("difficulty", "Beginner");
  r104.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a FASTQ file?");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r105 = new Record(collection);
  r105.set("careerSlug", "bioinformatics-engineer");
  r105.set("questionNumber", 6);
  r105.set("question", "What is a FASTA file?");
  r105.set("category", "System Design");
  r105.set("difficulty", "Beginner");
  r105.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a FASTA file?");
  try { app.save(r105); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r106 = new Record(collection);
  r106.set("careerSlug", "bioinformatics-engineer");
  r106.set("questionNumber", 7);
  r106.set("question", "What is sequence alignment?");
  r106.set("category", "Technical");
  r106.set("difficulty", "Beginner");
  r106.set("explanation", "Beginner level question for Bioinformatics Engineer. What is sequence alignment?");
  try { app.save(r106); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r107 = new Record(collection);
  r107.set("careerSlug", "bioinformatics-engineer");
  r107.set("questionNumber", 8);
  r107.set("question", "What is BLAST?");
  r107.set("category", "Technical");
  r107.set("difficulty", "Beginner");
  r107.set("explanation", "Beginner level question for Bioinformatics Engineer. What is BLAST?");
  try { app.save(r107); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r108 = new Record(collection);
  r108.set("careerSlug", "bioinformatics-engineer");
  r108.set("questionNumber", 9);
  r108.set("question", "What is BWA?");
  r108.set("category", "Behavioral");
  r108.set("difficulty", "Beginner");
  r108.set("explanation", "Beginner level question for Bioinformatics Engineer. What is BWA?");
  try { app.save(r108); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r109 = new Record(collection);
  r109.set("careerSlug", "bioinformatics-engineer");
  r109.set("questionNumber", 10);
  r109.set("question", "What is Bowtie2?");
  r109.set("category", "Technical");
  r109.set("difficulty", "Beginner");
  r109.set("explanation", "Beginner level question for Bioinformatics Engineer. What is Bowtie2?");
  try { app.save(r109); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r110 = new Record(collection);
  r110.set("careerSlug", "bioinformatics-engineer");
  r110.set("questionNumber", 11);
  r110.set("question", "What is STAR aligner?");
  r110.set("category", "Technical");
  r110.set("difficulty", "Beginner");
  r110.set("explanation", "Beginner level question for Bioinformatics Engineer. What is STAR aligner?");
  try { app.save(r110); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r111 = new Record(collection);
  r111.set("careerSlug", "bioinformatics-engineer");
  r111.set("questionNumber", 12);
  r111.set("question", "What is a SAM/BAM file?");
  r111.set("category", "System Design");
  r111.set("difficulty", "Beginner");
  r111.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a SAM/BAM file?");
  try { app.save(r111); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r112 = new Record(collection);
  r112.set("careerSlug", "bioinformatics-engineer");
  r112.set("questionNumber", 13);
  r112.set("question", "What is samtools?");
  r112.set("category", "Technical");
  r112.set("difficulty", "Beginner");
  r112.set("explanation", "Beginner level question for Bioinformatics Engineer. What is samtools?");
  try { app.save(r112); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r113 = new Record(collection);
  r113.set("careerSlug", "bioinformatics-engineer");
  r113.set("questionNumber", 14);
  r113.set("question", "What is variant calling?");
  r113.set("category", "Technical");
  r113.set("difficulty", "Beginner");
  r113.set("explanation", "Beginner level question for Bioinformatics Engineer. What is variant calling?");
  try { app.save(r113); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r114 = new Record(collection);
  r114.set("careerSlug", "bioinformatics-engineer");
  r114.set("questionNumber", 15);
  r114.set("question", "What is GATK?");
  r114.set("category", "Behavioral");
  r114.set("difficulty", "Beginner");
  r114.set("explanation", "Beginner level question for Bioinformatics Engineer. What is GATK?");
  try { app.save(r114); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r115 = new Record(collection);
  r115.set("careerSlug", "bioinformatics-engineer");
  r115.set("questionNumber", 16);
  r115.set("question", "What is a SNP?");
  r115.set("category", "Technical");
  r115.set("difficulty", "Beginner");
  r115.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a SNP?");
  try { app.save(r115); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r116 = new Record(collection);
  r116.set("careerSlug", "bioinformatics-engineer");
  r116.set("questionNumber", 17);
  r116.set("question", "What is an indel?");
  r116.set("category", "Technical");
  r116.set("difficulty", "Beginner");
  r116.set("explanation", "Beginner level question for Bioinformatics Engineer. What is an indel?");
  try { app.save(r116); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r117 = new Record(collection);
  r117.set("careerSlug", "bioinformatics-engineer");
  r117.set("questionNumber", 18);
  r117.set("question", "What is VCF file?");
  r117.set("category", "System Design");
  r117.set("difficulty", "Beginner");
  r117.set("explanation", "Beginner level question for Bioinformatics Engineer. What is VCF file?");
  try { app.save(r117); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r118 = new Record(collection);
  r118.set("careerSlug", "bioinformatics-engineer");
  r118.set("questionNumber", 19);
  r118.set("question", "What is genome assembly?");
  r118.set("category", "Technical");
  r118.set("difficulty", "Beginner");
  r118.set("explanation", "Beginner level question for Bioinformatics Engineer. What is genome assembly?");
  try { app.save(r118); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r119 = new Record(collection);
  r119.set("careerSlug", "bioinformatics-engineer");
  r119.set("questionNumber", 20);
  r119.set("question", "What is de novo assembly?");
  r119.set("category", "Technical");
  r119.set("difficulty", "Beginner");
  r119.set("explanation", "Beginner level question for Bioinformatics Engineer. What is de novo assembly?");
  try { app.save(r119); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r120 = new Record(collection);
  r120.set("careerSlug", "bioinformatics-engineer");
  r120.set("questionNumber", 21);
  r120.set("question", "What is a reference genome?");
  r120.set("category", "Behavioral");
  r120.set("difficulty", "Beginner");
  r120.set("explanation", "Beginner level question for Bioinformatics Engineer. What is a reference genome?");
  try { app.save(r120); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r121 = new Record(collection);
  r121.set("careerSlug", "bioinformatics-engineer");
  r121.set("questionNumber", 22);
  r121.set("question", "What is read depth/coverage?");
  r121.set("category", "Technical");
  r121.set("difficulty", "Beginner");
  r121.set("explanation", "Beginner level question for Bioinformatics Engineer. What is read depth/coverage?");
  try { app.save(r121); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r122 = new Record(collection);
  r122.set("careerSlug", "bioinformatics-engineer");
  r122.set("questionNumber", 23);
  r122.set("question", "What is quality score (Phred)?");
  r122.set("category", "Technical");
  r122.set("difficulty", "Beginner");
  r122.set("explanation", "Beginner level question for Bioinformatics Engineer. What is quality score (Phred)?");
  try { app.save(r122); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r123 = new Record(collection);
  r123.set("careerSlug", "bioinformatics-engineer");
  r123.set("questionNumber", 24);
  r123.set("question", "What is adapter trimming?");
  r123.set("category", "System Design");
  r123.set("difficulty", "Beginner");
  r123.set("explanation", "Beginner level question for Bioinformatics Engineer. What is adapter trimming?");
  try { app.save(r123); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r124 = new Record(collection);
  r124.set("careerSlug", "bioinformatics-engineer");
  r124.set("questionNumber", 25);
  r124.set("question", "What is FastQC?");
  r124.set("category", "Technical");
  r124.set("difficulty", "Beginner");
  r124.set("explanation", "Beginner level question for Bioinformatics Engineer. What is FastQC?");
  try { app.save(r124); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r125 = new Record(collection);
  r125.set("careerSlug", "bioinformatics-engineer");
  r125.set("questionNumber", 26);
  r125.set("question", "What is Trimmomatic?");
  r125.set("category", "Technical");
  r125.set("difficulty", "Beginner");
  r125.set("explanation", "Beginner level question for Bioinformatics Engineer. What is Trimmomatic?");
  try { app.save(r125); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r126 = new Record(collection);
  r126.set("careerSlug", "bioinformatics-engineer");
  r126.set("questionNumber", 27);
  r126.set("question", "What is RNA-seq?");
  r126.set("category", "Behavioral");
  r126.set("difficulty", "Beginner");
  r126.set("explanation", "Beginner level question for Bioinformatics Engineer. What is RNA-seq?");
  try { app.save(r126); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r127 = new Record(collection);
  r127.set("careerSlug", "bioinformatics-engineer");
  r127.set("questionNumber", 28);
  r127.set("question", "What is differential gene expression?");
  r127.set("category", "Technical");
  r127.set("difficulty", "Beginner");
  r127.set("explanation", "Beginner level question for Bioinformatics Engineer. What is differential gene expression?");
  try { app.save(r127); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r128 = new Record(collection);
  r128.set("careerSlug", "bioinformatics-engineer");
  r128.set("questionNumber", 29);
  r128.set("question", "What is DESeq2?");
  r128.set("category", "Technical");
  r128.set("difficulty", "Beginner");
  r128.set("explanation", "Beginner level question for Bioinformatics Engineer. What is DESeq2?");
  try { app.save(r128); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r129 = new Record(collection);
  r129.set("careerSlug", "bioinformatics-engineer");
  r129.set("questionNumber", 30);
  r129.set("question", "What is edgeR?");
  r129.set("category", "System Design");
  r129.set("difficulty", "Beginner");
  r129.set("explanation", "Beginner level question for Bioinformatics Engineer. What is edgeR?");
  try { app.save(r129); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r130 = new Record(collection);
  r130.set("careerSlug", "bioinformatics-engineer");
  r130.set("questionNumber", 31);
  r130.set("question", "What is FPKM vs TPM vs RPKM?");
  r130.set("category", "Technical");
  r130.set("difficulty", "Beginner");
  r130.set("explanation", "Beginner level question for Bioinformatics Engineer. What is FPKM vs TPM vs RPKM?");
  try { app.save(r130); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r131 = new Record(collection);
  r131.set("careerSlug", "bioinformatics-engineer");
  r131.set("questionNumber", 32);
  r131.set("question", "What is single-cell RNA-seq?");
  r131.set("category", "Technical");
  r131.set("difficulty", "Beginner");
  r131.set("explanation", "Beginner level question for Bioinformatics Engineer. What is single-cell RNA-seq?");
  try { app.save(r131); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r132 = new Record(collection);
  r132.set("careerSlug", "bioinformatics-engineer");
  r132.set("questionNumber", 33);
  r132.set("question", "What is Seurat?");
  r132.set("category", "Behavioral");
  r132.set("difficulty", "Beginner");
  r132.set("explanation", "Beginner level question for Bioinformatics Engineer. What is Seurat?");
  try { app.save(r132); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r133 = new Record(collection);
  r133.set("careerSlug", "bioinformatics-engineer");
  r133.set("questionNumber", 34);
  r133.set("question", "What is Scanpy?");
  r133.set("category", "Technical");
  r133.set("difficulty", "Intermediate");
  r133.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is Scanpy?");
  try { app.save(r133); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r134 = new Record(collection);
  r134.set("careerSlug", "bioinformatics-engineer");
  r134.set("questionNumber", 35);
  r134.set("question", "What is UMAP in biology?");
  r134.set("category", "Technical");
  r134.set("difficulty", "Intermediate");
  r134.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is UMAP in biology?");
  try { app.save(r134); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r135 = new Record(collection);
  r135.set("careerSlug", "bioinformatics-engineer");
  r135.set("questionNumber", 36);
  r135.set("question", "What is cell clustering?");
  r135.set("category", "System Design");
  r135.set("difficulty", "Intermediate");
  r135.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is cell clustering?");
  try { app.save(r135); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r136 = new Record(collection);
  r136.set("careerSlug", "bioinformatics-engineer");
  r136.set("questionNumber", 37);
  r136.set("question", "What is trajectory analysis?");
  r136.set("category", "Technical");
  r136.set("difficulty", "Intermediate");
  r136.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is trajectory analysis?");
  try { app.save(r136); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r137 = new Record(collection);
  r137.set("careerSlug", "bioinformatics-engineer");
  r137.set("questionNumber", 38);
  r137.set("question", "What is ChIP-seq?");
  r137.set("category", "Technical");
  r137.set("difficulty", "Intermediate");
  r137.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is ChIP-seq?");
  try { app.save(r137); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r138 = new Record(collection);
  r138.set("careerSlug", "bioinformatics-engineer");
  r138.set("questionNumber", 39);
  r138.set("question", "What is ATAC-seq?");
  r138.set("category", "Behavioral");
  r138.set("difficulty", "Intermediate");
  r138.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is ATAC-seq?");
  try { app.save(r138); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r139 = new Record(collection);
  r139.set("careerSlug", "bioinformatics-engineer");
  r139.set("questionNumber", 40);
  r139.set("question", "What is epigenomics?");
  r139.set("category", "Technical");
  r139.set("difficulty", "Intermediate");
  r139.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is epigenomics?");
  try { app.save(r139); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r140 = new Record(collection);
  r140.set("careerSlug", "bioinformatics-engineer");
  r140.set("questionNumber", 41);
  r140.set("question", "What is metagenomics?");
  r140.set("category", "Technical");
  r140.set("difficulty", "Intermediate");
  r140.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is metagenomics?");
  try { app.save(r140); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r141 = new Record(collection);
  r141.set("careerSlug", "bioinformatics-engineer");
  r141.set("questionNumber", 42);
  r141.set("question", "What is microbiome analysis?");
  r141.set("category", "System Design");
  r141.set("difficulty", "Intermediate");
  r141.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is microbiome analysis?");
  try { app.save(r141); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r142 = new Record(collection);
  r142.set("careerSlug", "bioinformatics-engineer");
  r142.set("questionNumber", 43);
  r142.set("question", "What is a phylogenetic tree?");
  r142.set("category", "Technical");
  r142.set("difficulty", "Intermediate");
  r142.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a phylogenetic tree?");
  try { app.save(r142); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r143 = new Record(collection);
  r143.set("careerSlug", "bioinformatics-engineer");
  r143.set("questionNumber", 44);
  r143.set("question", "What is MUSCLE alignment?");
  r143.set("category", "Technical");
  r143.set("difficulty", "Intermediate");
  r143.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is MUSCLE alignment?");
  try { app.save(r143); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r144 = new Record(collection);
  r144.set("careerSlug", "bioinformatics-engineer");
  r144.set("questionNumber", 45);
  r144.set("question", "What is ClustalW?");
  r144.set("category", "Behavioral");
  r144.set("difficulty", "Intermediate");
  r144.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is ClustalW?");
  try { app.save(r144); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r145 = new Record(collection);
  r145.set("careerSlug", "bioinformatics-engineer");
  r145.set("questionNumber", 46);
  r145.set("question", "What is protein structure prediction?");
  r145.set("category", "Technical");
  r145.set("difficulty", "Intermediate");
  r145.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is protein structure prediction?");
  try { app.save(r145); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r146 = new Record(collection);
  r146.set("careerSlug", "bioinformatics-engineer");
  r146.set("questionNumber", 47);
  r146.set("question", "What is AlphaFold?");
  r146.set("category", "Technical");
  r146.set("difficulty", "Intermediate");
  r146.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is AlphaFold?");
  try { app.save(r146); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r147 = new Record(collection);
  r147.set("careerSlug", "bioinformatics-engineer");
  r147.set("questionNumber", 48);
  r147.set("question", "What is protein folding?");
  r147.set("category", "System Design");
  r147.set("difficulty", "Intermediate");
  r147.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is protein folding?");
  try { app.save(r147); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r148 = new Record(collection);
  r148.set("careerSlug", "bioinformatics-engineer");
  r148.set("questionNumber", 49);
  r148.set("question", "What is a protein domain?");
  r148.set("category", "Technical");
  r148.set("difficulty", "Intermediate");
  r148.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a protein domain?");
  try { app.save(r148); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r149 = new Record(collection);
  r149.set("careerSlug", "bioinformatics-engineer");
  r149.set("questionNumber", 50);
  r149.set("question", "What is a protein-protein interaction?");
  r149.set("category", "Technical");
  r149.set("difficulty", "Intermediate");
  r149.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a protein-protein interaction?");
  try { app.save(r149); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r150 = new Record(collection);
  r150.set("careerSlug", "bioinformatics-engineer");
  r150.set("questionNumber", 51);
  r150.set("question", "What is docking simulation?");
  r150.set("category", "Behavioral");
  r150.set("difficulty", "Intermediate");
  r150.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is docking simulation?");
  try { app.save(r150); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r151 = new Record(collection);
  r151.set("careerSlug", "bioinformatics-engineer");
  r151.set("questionNumber", 52);
  r151.set("question", "What is molecular dynamics?");
  r151.set("category", "Technical");
  r151.set("difficulty", "Intermediate");
  r151.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is molecular dynamics?");
  try { app.save(r151); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r152 = new Record(collection);
  r152.set("careerSlug", "bioinformatics-engineer");
  r152.set("questionNumber", 53);
  r152.set("question", "What is drug discovery with ML?");
  r152.set("category", "Technical");
  r152.set("difficulty", "Intermediate");
  r152.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is drug discovery with ML?");
  try { app.save(r152); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r153 = new Record(collection);
  r153.set("careerSlug", "bioinformatics-engineer");
  r153.set("questionNumber", 54);
  r153.set("question", "What is QSAR?");
  r153.set("category", "System Design");
  r153.set("difficulty", "Intermediate");
  r153.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is QSAR?");
  try { app.save(r153); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r154 = new Record(collection);
  r154.set("careerSlug", "bioinformatics-engineer");
  r154.set("questionNumber", 55);
  r154.set("question", "What is a pharmacophore model?");
  r154.set("category", "Technical");
  r154.set("difficulty", "Intermediate");
  r154.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a pharmacophore model?");
  try { app.save(r154); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r155 = new Record(collection);
  r155.set("careerSlug", "bioinformatics-engineer");
  r155.set("questionNumber", 56);
  r155.set("question", "What is a virtual screening?");
  r155.set("category", "Technical");
  r155.set("difficulty", "Intermediate");
  r155.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a virtual screening?");
  try { app.save(r155); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r156 = new Record(collection);
  r156.set("careerSlug", "bioinformatics-engineer");
  r156.set("questionNumber", 57);
  r156.set("question", "What is SMILES notation?");
  r156.set("category", "Behavioral");
  r156.set("difficulty", "Intermediate");
  r156.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is SMILES notation?");
  try { app.save(r156); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r157 = new Record(collection);
  r157.set("careerSlug", "bioinformatics-engineer");
  r157.set("questionNumber", 58);
  r157.set("question", "What is RDKit?");
  r157.set("category", "Technical");
  r157.set("difficulty", "Intermediate");
  r157.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is RDKit?");
  try { app.save(r157); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r158 = new Record(collection);
  r158.set("careerSlug", "bioinformatics-engineer");
  r158.set("questionNumber", 59);
  r158.set("question", "What is graph neural network for molecules?");
  r158.set("category", "Technical");
  r158.set("difficulty", "Intermediate");
  r158.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is graph neural network for molecules?");
  try { app.save(r158); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r159 = new Record(collection);
  r159.set("careerSlug", "bioinformatics-engineer");
  r159.set("questionNumber", 60);
  r159.set("question", "What is a knowledge graph for biology?");
  r159.set("category", "System Design");
  r159.set("difficulty", "Intermediate");
  r159.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a knowledge graph for biology?");
  try { app.save(r159); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r160 = new Record(collection);
  r160.set("careerSlug", "bioinformatics-engineer");
  r160.set("questionNumber", 61);
  r160.set("question", "What is a pathway database?");
  r160.set("category", "Technical");
  r160.set("difficulty", "Intermediate");
  r160.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a pathway database?");
  try { app.save(r160); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r161 = new Record(collection);
  r161.set("careerSlug", "bioinformatics-engineer");
  r161.set("questionNumber", 62);
  r161.set("question", "What is KEGG?");
  r161.set("category", "Technical");
  r161.set("difficulty", "Intermediate");
  r161.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is KEGG?");
  try { app.save(r161); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r162 = new Record(collection);
  r162.set("careerSlug", "bioinformatics-engineer");
  r162.set("questionNumber", 63);
  r162.set("question", "What is Gene Ontology?");
  r162.set("category", "Behavioral");
  r162.set("difficulty", "Intermediate");
  r162.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is Gene Ontology?");
  try { app.save(r162); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r163 = new Record(collection);
  r163.set("careerSlug", "bioinformatics-engineer");
  r163.set("questionNumber", 64);
  r163.set("question", "What is enrichment analysis?");
  r163.set("category", "Technical");
  r163.set("difficulty", "Intermediate");
  r163.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is enrichment analysis?");
  try { app.save(r163); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r164 = new Record(collection);
  r164.set("careerSlug", "bioinformatics-engineer");
  r164.set("questionNumber", 65);
  r164.set("question", "What is GSEA?");
  r164.set("category", "Technical");
  r164.set("difficulty", "Intermediate");
  r164.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is GSEA?");
  try { app.save(r164); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r165 = new Record(collection);
  r165.set("careerSlug", "bioinformatics-engineer");
  r165.set("questionNumber", 66);
  r165.set("question", "What is a heatmap in bioinformatics?");
  r165.set("category", "System Design");
  r165.set("difficulty", "Intermediate");
  r165.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a heatmap in bioinformatics?");
  try { app.save(r165); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r166 = new Record(collection);
  r166.set("careerSlug", "bioinformatics-engineer");
  r166.set("questionNumber", 67);
  r166.set("question", "What is a volcano plot?");
  r166.set("category", "Technical");
  r166.set("difficulty", "Intermediate");
  r166.set("explanation", "Intermediate level question for Bioinformatics Engineer. What is a volcano plot?");
  try { app.save(r166); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r167 = new Record(collection);
  r167.set("careerSlug", "bioinformatics-engineer");
  r167.set("questionNumber", 68);
  r167.set("question", "What is a PCA plot in bioinformatics?");
  r167.set("category", "Technical");
  r167.set("difficulty", "Advanced");
  r167.set("explanation", "Advanced level question for Bioinformatics Engineer. What is a PCA plot in bioinformatics?");
  try { app.save(r167); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r168 = new Record(collection);
  r168.set("careerSlug", "bioinformatics-engineer");
  r168.set("questionNumber", 69);
  r168.set("question", "What is Bioconductor?");
  r168.set("category", "Behavioral");
  r168.set("difficulty", "Advanced");
  r168.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Bioconductor?");
  try { app.save(r168); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r169 = new Record(collection);
  r169.set("careerSlug", "bioinformatics-engineer");
  r169.set("questionNumber", 70);
  r169.set("question", "What is BioPython?");
  r169.set("category", "Technical");
  r169.set("difficulty", "Advanced");
  r169.set("explanation", "Advanced level question for Bioinformatics Engineer. What is BioPython?");
  try { app.save(r169); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r170 = new Record(collection);
  r170.set("careerSlug", "bioinformatics-engineer");
  r170.set("questionNumber", 71);
  r170.set("question", "What is Nextflow?");
  r170.set("category", "Technical");
  r170.set("difficulty", "Advanced");
  r170.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Nextflow?");
  try { app.save(r170); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r171 = new Record(collection);
  r171.set("careerSlug", "bioinformatics-engineer");
  r171.set("questionNumber", 72);
  r171.set("question", "What is Snakemake?");
  r171.set("category", "System Design");
  r171.set("difficulty", "Advanced");
  r171.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Snakemake?");
  try { app.save(r171); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r172 = new Record(collection);
  r172.set("careerSlug", "bioinformatics-engineer");
  r172.set("questionNumber", 73);
  r172.set("question", "What is WDL?");
  r172.set("category", "Technical");
  r172.set("difficulty", "Advanced");
  r172.set("explanation", "Advanced level question for Bioinformatics Engineer. What is WDL?");
  try { app.save(r172); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r173 = new Record(collection);
  r173.set("careerSlug", "bioinformatics-engineer");
  r173.set("questionNumber", 74);
  r173.set("question", "What is a bioinformatics pipeline?");
  r173.set("category", "Technical");
  r173.set("difficulty", "Advanced");
  r173.set("explanation", "Advanced level question for Bioinformatics Engineer. What is a bioinformatics pipeline?");
  try { app.save(r173); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r174 = new Record(collection);
  r174.set("careerSlug", "bioinformatics-engineer");
  r174.set("questionNumber", 75);
  r174.set("question", "What is containerization for bioinformatics (Docker/Singularity)?");
  r174.set("category", "Behavioral");
  r174.set("difficulty", "Advanced");
  r174.set("explanation", "Advanced level question for Bioinformatics Engineer. What is containerization for bioinformatics (Docker/Singularity)?");
  try { app.save(r174); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r175 = new Record(collection);
  r175.set("careerSlug", "bioinformatics-engineer");
  r175.set("questionNumber", 76);
  r175.set("question", "What is AWS for genomics?");
  r175.set("category", "Technical");
  r175.set("difficulty", "Advanced");
  r175.set("explanation", "Advanced level question for Bioinformatics Engineer. What is AWS for genomics?");
  try { app.save(r175); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r176 = new Record(collection);
  r176.set("careerSlug", "bioinformatics-engineer");
  r176.set("questionNumber", 77);
  r176.set("question", "What is Google Cloud Life Sciences?");
  r176.set("category", "Technical");
  r176.set("difficulty", "Advanced");
  r176.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Google Cloud Life Sciences?");
  try { app.save(r176); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r177 = new Record(collection);
  r177.set("careerSlug", "bioinformatics-engineer");
  r177.set("questionNumber", 78);
  r177.set("question", "What is Terra platform?");
  r177.set("category", "System Design");
  r177.set("difficulty", "Advanced");
  r177.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Terra platform?");
  try { app.save(r177); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r178 = new Record(collection);
  r178.set("careerSlug", "bioinformatics-engineer");
  r178.set("questionNumber", 79);
  r178.set("question", "What is Galaxy?");
  r178.set("category", "Technical");
  r178.set("difficulty", "Advanced");
  r178.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Galaxy?");
  try { app.save(r178); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r179 = new Record(collection);
  r179.set("careerSlug", "bioinformatics-engineer");
  r179.set("questionNumber", 80);
  r179.set("question", "What is NCBI?");
  r179.set("category", "Technical");
  r179.set("difficulty", "Advanced");
  r179.set("explanation", "Advanced level question for Bioinformatics Engineer. What is NCBI?");
  try { app.save(r179); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r180 = new Record(collection);
  r180.set("careerSlug", "bioinformatics-engineer");
  r180.set("questionNumber", 81);
  r180.set("question", "What is Ensembl?");
  r180.set("category", "Behavioral");
  r180.set("difficulty", "Advanced");
  r180.set("explanation", "Advanced level question for Bioinformatics Engineer. What is Ensembl?");
  try { app.save(r180); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r181 = new Record(collection);
  r181.set("careerSlug", "bioinformatics-engineer");
  r181.set("questionNumber", 82);
  r181.set("question", "What is UCSC Genome Browser?");
  r181.set("category", "Technical");
  r181.set("difficulty", "Advanced");
  r181.set("explanation", "Advanced level question for Bioinformatics Engineer. What is UCSC Genome Browser?");
  try { app.save(r181); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r182 = new Record(collection);
  r182.set("careerSlug", "bioinformatics-engineer");
  r182.set("questionNumber", 83);
  r182.set("question", "What is dbSNP?");
  r182.set("category", "Technical");
  r182.set("difficulty", "Advanced");
  r182.set("explanation", "Advanced level question for Bioinformatics Engineer. What is dbSNP?");
  try { app.save(r182); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r183 = new Record(collection);
  r183.set("careerSlug", "bioinformatics-engineer");
  r183.set("questionNumber", 84);
  r183.set("question", "What is ClinVar?");
  r183.set("category", "System Design");
  r183.set("difficulty", "Advanced");
  r183.set("explanation", "Advanced level question for Bioinformatics Engineer. What is ClinVar?");
  try { app.save(r183); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r184 = new Record(collection);
  r184.set("careerSlug", "bioinformatics-engineer");
  r184.set("questionNumber", 85);
  r184.set("question", "What is gnomAD?");
  r184.set("category", "Technical");
  r184.set("difficulty", "Advanced");
  r184.set("explanation", "Advanced level question for Bioinformatics Engineer. What is gnomAD?");
  try { app.save(r184); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r185 = new Record(collection);
  r185.set("careerSlug", "bioinformatics-engineer");
  r185.set("questionNumber", 86);
  r185.set("question", "What is clinical genomics?");
  r185.set("category", "Technical");
  r185.set("difficulty", "Advanced");
  r185.set("explanation", "Advanced level question for Bioinformatics Engineer. What is clinical genomics?");
  try { app.save(r185); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r186 = new Record(collection);
  r186.set("careerSlug", "bioinformatics-engineer");
  r186.set("questionNumber", 87);
  r186.set("question", "What is whole genome vs whole exome sequencing?");
  r186.set("category", "Behavioral");
  r186.set("difficulty", "Advanced");
  r186.set("explanation", "Advanced level question for Bioinformatics Engineer. What is whole genome vs whole exome sequencing?");
  try { app.save(r186); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r187 = new Record(collection);
  r187.set("careerSlug", "bioinformatics-engineer");
  r187.set("questionNumber", 88);
  r187.set("question", "What is long-read sequencing (PacBio, Oxford Nanopore)?");
  r187.set("category", "Technical");
  r187.set("difficulty", "Advanced");
  r187.set("explanation", "Advanced level question for Bioinformatics Engineer. What is long-read sequencing (PacBio, Oxford Nanopore)?");
  try { app.save(r187); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r188 = new Record(collection);
  r188.set("careerSlug", "bioinformatics-engineer");
  r188.set("questionNumber", 89);
  r188.set("question", "What is spatial transcriptomics?");
  r188.set("category", "Technical");
  r188.set("difficulty", "Advanced");
  r188.set("explanation", "Advanced level question for Bioinformatics Engineer. What is spatial transcriptomics?");
  try { app.save(r188); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r189 = new Record(collection);
  r189.set("careerSlug", "bioinformatics-engineer");
  r189.set("questionNumber", 90);
  r189.set("question", "What is proteomics?");
  r189.set("category", "System Design");
  r189.set("difficulty", "Advanced");
  r189.set("explanation", "Advanced level question for Bioinformatics Engineer. What is proteomics?");
  try { app.save(r189); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r190 = new Record(collection);
  r190.set("careerSlug", "bioinformatics-engineer");
  r190.set("questionNumber", 91);
  r190.set("question", "What is mass spectrometry in proteomics?");
  r190.set("category", "Technical");
  r190.set("difficulty", "Advanced");
  r190.set("explanation", "Advanced level question for Bioinformatics Engineer. What is mass spectrometry in proteomics?");
  try { app.save(r190); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r191 = new Record(collection);
  r191.set("careerSlug", "bioinformatics-engineer");
  r191.set("questionNumber", 92);
  r191.set("question", "What is metabolomics?");
  r191.set("category", "Technical");
  r191.set("difficulty", "Advanced");
  r191.set("explanation", "Advanced level question for Bioinformatics Engineer. What is metabolomics?");
  try { app.save(r191); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r192 = new Record(collection);
  r192.set("careerSlug", "bioinformatics-engineer");
  r192.set("questionNumber", 93);
  r192.set("question", "What is multi-omics integration?");
  r192.set("category", "Behavioral");
  r192.set("difficulty", "Advanced");
  r192.set("explanation", "Advanced level question for Bioinformatics Engineer. What is multi-omics integration?");
  try { app.save(r192); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r193 = new Record(collection);
  r193.set("careerSlug", "bioinformatics-engineer");
  r193.set("questionNumber", 94);
  r193.set("question", "What is CRISPR design tools?");
  r193.set("category", "Technical");
  r193.set("difficulty", "Advanced");
  r193.set("explanation", "Advanced level question for Bioinformatics Engineer. What is CRISPR design tools?");
  try { app.save(r193); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r194 = new Record(collection);
  r194.set("careerSlug", "bioinformatics-engineer");
  r194.set("questionNumber", 95);
  r194.set("question", "What is gene editing in silico?");
  r194.set("category", "Technical");
  r194.set("difficulty", "Advanced");
  r194.set("explanation", "Advanced level question for Bioinformatics Engineer. What is gene editing in silico?");
  try { app.save(r194); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r195 = new Record(collection);
  r195.set("careerSlug", "bioinformatics-engineer");
  r195.set("questionNumber", 96);
  r195.set("question", "What is synthetic biology?");
  r195.set("category", "System Design");
  r195.set("difficulty", "Advanced");
  r195.set("explanation", "Advanced level question for Bioinformatics Engineer. What is synthetic biology?");
  try { app.save(r195); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r196 = new Record(collection);
  r196.set("careerSlug", "bioinformatics-engineer");
  r196.set("questionNumber", 97);
  r196.set("question", "What is systems biology?");
  r196.set("category", "Technical");
  r196.set("difficulty", "Advanced");
  r196.set("explanation", "Advanced level question for Bioinformatics Engineer. What is systems biology?");
  try { app.save(r196); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r197 = new Record(collection);
  r197.set("careerSlug", "bioinformatics-engineer");
  r197.set("questionNumber", 98);
  r197.set("question", "What is regulatory genomics?");
  r197.set("category", "Technical");
  r197.set("difficulty", "Advanced");
  r197.set("explanation", "Advanced level question for Bioinformatics Engineer. What is regulatory genomics?");
  try { app.save(r197); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r198 = new Record(collection);
  r198.set("careerSlug", "bioinformatics-engineer");
  r198.set("questionNumber", 99);
  r198.set("question", "What is ENCODE project?");
  r198.set("category", "Behavioral");
  r198.set("difficulty", "Advanced");
  r198.set("explanation", "Advanced level question for Bioinformatics Engineer. What is ENCODE project?");
  try { app.save(r198); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r199 = new Record(collection);
  r199.set("careerSlug", "bioinformatics-engineer");
  r199.set("questionNumber", 100);
  r199.set("question", "What is data sharing in bioinformatics (FAIR principles)?");
  r199.set("category", "Technical");
  r199.set("difficulty", "Advanced");
  r199.set("explanation", "Advanced level question for Bioinformatics Engineer. What is data sharing in bioinformatics (FAIR principles)?");
  try { app.save(r199); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r200 = new Record(collection);
  r200.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r200.set("questionNumber", 1);
  r200.set("question", "What is prompt engineering?");
  r200.set("category", "Technical");
  r200.set("difficulty", "Beginner");
  r200.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is prompt engineering?");
  try { app.save(r200); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r201 = new Record(collection);
  r201.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r201.set("questionNumber", 2);
  r201.set("question", "What is zero-shot prompting?");
  r201.set("category", "Technical");
  r201.set("difficulty", "Beginner");
  r201.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is zero-shot prompting?");
  try { app.save(r201); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r202 = new Record(collection);
  r202.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r202.set("questionNumber", 3);
  r202.set("question", "What is few-shot prompting?");
  r202.set("category", "Behavioral");
  r202.set("difficulty", "Beginner");
  r202.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is few-shot prompting?");
  try { app.save(r202); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r203 = new Record(collection);
  r203.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r203.set("questionNumber", 4);
  r203.set("question", "What is chain-of-thought prompting?");
  r203.set("category", "Technical");
  r203.set("difficulty", "Beginner");
  r203.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is chain-of-thought prompting?");
  try { app.save(r203); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r204 = new Record(collection);
  r204.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r204.set("questionNumber", 5);
  r204.set("question", "What is self-consistency?");
  r204.set("category", "Technical");
  r204.set("difficulty", "Beginner");
  r204.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is self-consistency?");
  try { app.save(r204); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r205 = new Record(collection);
  r205.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r205.set("questionNumber", 6);
  r205.set("question", "What is tree of thoughts?");
  r205.set("category", "System Design");
  r205.set("difficulty", "Beginner");
  r205.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is tree of thoughts?");
  try { app.save(r205); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r206 = new Record(collection);
  r206.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r206.set("questionNumber", 7);
  r206.set("question", "What is ReAct prompting?");
  r206.set("category", "Technical");
  r206.set("difficulty", "Beginner");
  r206.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is ReAct prompting?");
  try { app.save(r206); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r207 = new Record(collection);
  r207.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r207.set("questionNumber", 8);
  r207.set("question", "What is a system prompt?");
  r207.set("category", "Technical");
  r207.set("difficulty", "Beginner");
  r207.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is a system prompt?");
  try { app.save(r207); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r208 = new Record(collection);
  r208.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r208.set("questionNumber", 9);
  r208.set("question", "What is a user prompt?");
  r208.set("category", "Behavioral");
  r208.set("difficulty", "Beginner");
  r208.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is a user prompt?");
  try { app.save(r208); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r209 = new Record(collection);
  r209.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r209.set("questionNumber", 10);
  r209.set("question", "What is context window?");
  r209.set("category", "Technical");
  r209.set("difficulty", "Beginner");
  r209.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is context window?");
  try { app.save(r209); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r210 = new Record(collection);
  r210.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r210.set("questionNumber", 11);
  r210.set("question", "What is temperature in LLMs?");
  r210.set("category", "Technical");
  r210.set("difficulty", "Beginner");
  r210.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is temperature in LLMs?");
  try { app.save(r210); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r211 = new Record(collection);
  r211.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r211.set("questionNumber", 12);
  r211.set("question", "What is top-p sampling?");
  r211.set("category", "System Design");
  r211.set("difficulty", "Beginner");
  r211.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is top-p sampling?");
  try { app.save(r211); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r212 = new Record(collection);
  r212.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r212.set("questionNumber", 13);
  r212.set("question", "What is top-k sampling?");
  r212.set("category", "Technical");
  r212.set("difficulty", "Beginner");
  r212.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is top-k sampling?");
  try { app.save(r212); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r213 = new Record(collection);
  r213.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r213.set("questionNumber", 14);
  r213.set("question", "What is hallucination?");
  r213.set("category", "Technical");
  r213.set("difficulty", "Beginner");
  r213.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is hallucination?");
  try { app.save(r213); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r214 = new Record(collection);
  r214.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r214.set("questionNumber", 15);
  r214.set("question", "How do you reduce hallucination?");
  r214.set("category", "Behavioral");
  r214.set("difficulty", "Beginner");
  r214.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. How do you reduce hallucination?");
  try { app.save(r214); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r215 = new Record(collection);
  r215.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r215.set("questionNumber", 16);
  r215.set("question", "What is grounding?");
  r215.set("category", "Technical");
  r215.set("difficulty", "Beginner");
  r215.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is grounding?");
  try { app.save(r215); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r216 = new Record(collection);
  r216.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r216.set("questionNumber", 17);
  r216.set("question", "What is RAG?");
  r216.set("category", "Technical");
  r216.set("difficulty", "Beginner");
  r216.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is RAG?");
  try { app.save(r216); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r217 = new Record(collection);
  r217.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r217.set("questionNumber", 18);
  r217.set("question", "What is chunking strategy?");
  r217.set("category", "System Design");
  r217.set("difficulty", "Beginner");
  r217.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is chunking strategy?");
  try { app.save(r217); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r218 = new Record(collection);
  r218.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r218.set("questionNumber", 19);
  r218.set("question", "What is semantic chunking?");
  r218.set("category", "Technical");
  r218.set("difficulty", "Beginner");
  r218.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is semantic chunking?");
  try { app.save(r218); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r219 = new Record(collection);
  r219.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r219.set("questionNumber", 20);
  r219.set("question", "What is embedding?");
  r219.set("category", "Technical");
  r219.set("difficulty", "Beginner");
  r219.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is embedding?");
  try { app.save(r219); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r220 = new Record(collection);
  r220.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r220.set("questionNumber", 21);
  r220.set("question", "What is vector similarity search?");
  r220.set("category", "Behavioral");
  r220.set("difficulty", "Beginner");
  r220.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is vector similarity search?");
  try { app.save(r220); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r221 = new Record(collection);
  r221.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r221.set("questionNumber", 22);
  r221.set("question", "What is re-ranking?");
  r221.set("category", "Technical");
  r221.set("difficulty", "Beginner");
  r221.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is re-ranking?");
  try { app.save(r221); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r222 = new Record(collection);
  r222.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r222.set("questionNumber", 23);
  r222.set("question", "What is HyDE?");
  r222.set("category", "Technical");
  r222.set("difficulty", "Beginner");
  r222.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is HyDE?");
  try { app.save(r222); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r223 = new Record(collection);
  r223.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r223.set("questionNumber", 24);
  r223.set("question", "What is hybrid search?");
  r223.set("category", "System Design");
  r223.set("difficulty", "Beginner");
  r223.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is hybrid search?");
  try { app.save(r223); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r224 = new Record(collection);
  r224.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r224.set("questionNumber", 25);
  r224.set("question", "What is a vector database?");
  r224.set("category", "Technical");
  r224.set("difficulty", "Beginner");
  r224.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is a vector database?");
  try { app.save(r224); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r225 = new Record(collection);
  r225.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r225.set("questionNumber", 26);
  r225.set("question", "What is Pinecone?");
  r225.set("category", "Technical");
  r225.set("difficulty", "Beginner");
  r225.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is Pinecone?");
  try { app.save(r225); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r226 = new Record(collection);
  r226.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r226.set("questionNumber", 27);
  r226.set("question", "What is Weaviate?");
  r226.set("category", "Behavioral");
  r226.set("difficulty", "Beginner");
  r226.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is Weaviate?");
  try { app.save(r226); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r227 = new Record(collection);
  r227.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r227.set("questionNumber", 28);
  r227.set("question", "What is pgvector?");
  r227.set("category", "Technical");
  r227.set("difficulty", "Beginner");
  r227.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is pgvector?");
  try { app.save(r227); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r228 = new Record(collection);
  r228.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r228.set("questionNumber", 29);
  r228.set("question", "What is LangChain?");
  r228.set("category", "Technical");
  r228.set("difficulty", "Beginner");
  r228.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is LangChain?");
  try { app.save(r228); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r229 = new Record(collection);
  r229.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r229.set("questionNumber", 30);
  r229.set("question", "What is LlamaIndex?");
  r229.set("category", "System Design");
  r229.set("difficulty", "Beginner");
  r229.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is LlamaIndex?");
  try { app.save(r229); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r230 = new Record(collection);
  r230.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r230.set("questionNumber", 31);
  r230.set("question", "What is function calling?");
  r230.set("category", "Technical");
  r230.set("difficulty", "Beginner");
  r230.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is function calling?");
  try { app.save(r230); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r231 = new Record(collection);
  r231.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r231.set("questionNumber", 32);
  r231.set("question", "What is tool use?");
  r231.set("category", "Technical");
  r231.set("difficulty", "Beginner");
  r231.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is tool use?");
  try { app.save(r231); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r232 = new Record(collection);
  r232.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r232.set("questionNumber", 33);
  r232.set("question", "What is a multi-agent system?");
  r232.set("category", "Behavioral");
  r232.set("difficulty", "Beginner");
  r232.set("explanation", "Beginner level question for Prompt Engineer / AI Product Specialist. What is a multi-agent system?");
  try { app.save(r232); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r233 = new Record(collection);
  r233.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r233.set("questionNumber", 34);
  r233.set("question", "What is an AI agent?");
  r233.set("category", "Technical");
  r233.set("difficulty", "Intermediate");
  r233.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is an AI agent?");
  try { app.save(r233); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r234 = new Record(collection);
  r234.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r234.set("questionNumber", 35);
  r234.set("question", "What is memory in agents?");
  r234.set("category", "Technical");
  r234.set("difficulty", "Intermediate");
  r234.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is memory in agents?");
  try { app.save(r234); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r235 = new Record(collection);
  r235.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r235.set("questionNumber", 36);
  r235.set("question", "What is short-term vs long-term memory?");
  r235.set("category", "System Design");
  r235.set("difficulty", "Intermediate");
  r235.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is short-term vs long-term memory?");
  try { app.save(r235); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r236 = new Record(collection);
  r236.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r236.set("questionNumber", 37);
  r236.set("question", "What is prompt injection?");
  r236.set("category", "Technical");
  r236.set("difficulty", "Intermediate");
  r236.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is prompt injection?");
  try { app.save(r236); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r237 = new Record(collection);
  r237.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r237.set("questionNumber", 38);
  r237.set("question", "What is jailbreaking?");
  r237.set("category", "Technical");
  r237.set("difficulty", "Intermediate");
  r237.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is jailbreaking?");
  try { app.save(r237); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r238 = new Record(collection);
  r238.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r238.set("questionNumber", 39);
  r238.set("question", "What is adversarial prompting?");
  r238.set("category", "Behavioral");
  r238.set("difficulty", "Intermediate");
  r238.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is adversarial prompting?");
  try { app.save(r238); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r239 = new Record(collection);
  r239.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r239.set("questionNumber", 40);
  r239.set("question", "What is guardrails for LLMs?");
  r239.set("category", "Technical");
  r239.set("difficulty", "Intermediate");
  r239.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is guardrails for LLMs?");
  try { app.save(r239); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r240 = new Record(collection);
  r240.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r240.set("questionNumber", 41);
  r240.set("question", "What is a content filter?");
  r240.set("category", "Technical");
  r240.set("difficulty", "Intermediate");
  r240.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is a content filter?");
  try { app.save(r240); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r241 = new Record(collection);
  r241.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r241.set("questionNumber", 42);
  r241.set("question", "What is toxicity detection?");
  r241.set("category", "System Design");
  r241.set("difficulty", "Intermediate");
  r241.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is toxicity detection?");
  try { app.save(r241); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r242 = new Record(collection);
  r242.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r242.set("questionNumber", 43);
  r242.set("question", "What is PII detection in prompts?");
  r242.set("category", "Technical");
  r242.set("difficulty", "Intermediate");
  r242.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is PII detection in prompts?");
  try { app.save(r242); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r243 = new Record(collection);
  r243.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r243.set("questionNumber", 44);
  r243.set("question", "What is LLM evaluation?");
  r243.set("category", "Technical");
  r243.set("difficulty", "Intermediate");
  r243.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is LLM evaluation?");
  try { app.save(r243); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r244 = new Record(collection);
  r244.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r244.set("questionNumber", 45);
  r244.set("question", "What is RAGAS?");
  r244.set("category", "Behavioral");
  r244.set("difficulty", "Intermediate");
  r244.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is RAGAS?");
  try { app.save(r244); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r245 = new Record(collection);
  r245.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r245.set("questionNumber", 46);
  r245.set("question", "What is LLM-as-a-judge?");
  r245.set("category", "Technical");
  r245.set("difficulty", "Intermediate");
  r245.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is LLM-as-a-judge?");
  try { app.save(r245); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r246 = new Record(collection);
  r246.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r246.set("questionNumber", 47);
  r246.set("question", "What is faithfulness in RAG?");
  r246.set("category", "Technical");
  r246.set("difficulty", "Intermediate");
  r246.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is faithfulness in RAG?");
  try { app.save(r246); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r247 = new Record(collection);
  r247.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r247.set("questionNumber", 48);
  r247.set("question", "What is context precision?");
  r247.set("category", "System Design");
  r247.set("difficulty", "Intermediate");
  r247.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is context precision?");
  try { app.save(r247); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r248 = new Record(collection);
  r248.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r248.set("questionNumber", 49);
  r248.set("question", "What is context recall?");
  r248.set("category", "Technical");
  r248.set("difficulty", "Intermediate");
  r248.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is context recall?");
  try { app.save(r248); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r249 = new Record(collection);
  r249.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r249.set("questionNumber", 50);
  r249.set("question", "What is answer relevancy?");
  r249.set("category", "Technical");
  r249.set("difficulty", "Intermediate");
  r249.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is answer relevancy?");
  try { app.save(r249); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r250 = new Record(collection);
  r250.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r250.set("questionNumber", 51);
  r250.set("question", "What is BLEU?");
  r250.set("category", "Behavioral");
  r250.set("difficulty", "Intermediate");
  r250.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is BLEU?");
  try { app.save(r250); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r251 = new Record(collection);
  r251.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r251.set("questionNumber", 52);
  r251.set("question", "What is ROUGE?");
  r251.set("category", "Technical");
  r251.set("difficulty", "Intermediate");
  r251.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is ROUGE?");
  try { app.save(r251); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r252 = new Record(collection);
  r252.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r252.set("questionNumber", 53);
  r252.set("question", "What is BERTScore?");
  r252.set("category", "Technical");
  r252.set("difficulty", "Intermediate");
  r252.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is BERTScore?");
  try { app.save(r252); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r253 = new Record(collection);
  r253.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r253.set("questionNumber", 54);
  r253.set("question", "What is a benchmark for LLMs (MMLU, HellaSwag, HumanEval)?");
  r253.set("category", "System Design");
  r253.set("difficulty", "Intermediate");
  r253.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is a benchmark for LLMs (MMLU, HellaSwag, HumanEval)?");
  try { app.save(r253); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r254 = new Record(collection);
  r254.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r254.set("questionNumber", 55);
  r254.set("question", "What is red-teaming for LLMs?");
  r254.set("category", "Technical");
  r254.set("difficulty", "Intermediate");
  r254.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is red-teaming for LLMs?");
  try { app.save(r254); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r255 = new Record(collection);
  r255.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r255.set("questionNumber", 56);
  r255.set("question", "What is safety alignment?");
  r255.set("category", "Technical");
  r255.set("difficulty", "Intermediate");
  r255.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is safety alignment?");
  try { app.save(r255); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r256 = new Record(collection);
  r256.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r256.set("questionNumber", 57);
  r256.set("question", "What is Constitutional AI?");
  r256.set("category", "Behavioral");
  r256.set("difficulty", "Intermediate");
  r256.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is Constitutional AI?");
  try { app.save(r256); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r257 = new Record(collection);
  r257.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r257.set("questionNumber", 58);
  r257.set("question", "What is instruction following?");
  r257.set("category", "Technical");
  r257.set("difficulty", "Intermediate");
  r257.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is instruction following?");
  try { app.save(r257); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r258 = new Record(collection);
  r258.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r258.set("questionNumber", 59);
  r258.set("question", "What is structured output?");
  r258.set("category", "Technical");
  r258.set("difficulty", "Intermediate");
  r258.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is structured output?");
  try { app.save(r258); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r259 = new Record(collection);
  r259.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r259.set("questionNumber", 60);
  r259.set("question", "What is JSON mode?");
  r259.set("category", "System Design");
  r259.set("difficulty", "Intermediate");
  r259.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is JSON mode?");
  try { app.save(r259); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r260 = new Record(collection);
  r260.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r260.set("questionNumber", 61);
  r260.set("question", "What is function schema?");
  r260.set("category", "Technical");
  r260.set("difficulty", "Intermediate");
  r260.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is function schema?");
  try { app.save(r260); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r261 = new Record(collection);
  r261.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r261.set("questionNumber", 62);
  r261.set("question", "What is Pydantic for LLM output validation?");
  r261.set("category", "Technical");
  r261.set("difficulty", "Intermediate");
  r261.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is Pydantic for LLM output validation?");
  try { app.save(r261); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r262 = new Record(collection);
  r262.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r262.set("questionNumber", 63);
  r262.set("question", "What is prompt chaining?");
  r262.set("category", "Behavioral");
  r262.set("difficulty", "Intermediate");
  r262.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is prompt chaining?");
  try { app.save(r262); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r263 = new Record(collection);
  r263.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r263.set("questionNumber", 64);
  r263.set("question", "What is map-reduce for long documents?");
  r263.set("category", "Technical");
  r263.set("difficulty", "Intermediate");
  r263.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is map-reduce for long documents?");
  try { app.save(r263); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r264 = new Record(collection);
  r264.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r264.set("questionNumber", 65);
  r264.set("question", "What is a prompt template?");
  r264.set("category", "Technical");
  r264.set("difficulty", "Intermediate");
  r264.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is a prompt template?");
  try { app.save(r264); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r265 = new Record(collection);
  r265.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r265.set("questionNumber", 66);
  r265.set("question", "What is LangChain prompt templates?");
  r265.set("category", "System Design");
  r265.set("difficulty", "Intermediate");
  r265.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is LangChain prompt templates?");
  try { app.save(r265); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r266 = new Record(collection);
  r266.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r266.set("questionNumber", 67);
  r266.set("question", "What is output parsers?");
  r266.set("category", "Technical");
  r266.set("difficulty", "Intermediate");
  r266.set("explanation", "Intermediate level question for Prompt Engineer / AI Product Specialist. What is output parsers?");
  try { app.save(r266); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r267 = new Record(collection);
  r267.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r267.set("questionNumber", 68);
  r267.set("question", "What is semantic caching?");
  r267.set("category", "Technical");
  r267.set("difficulty", "Advanced");
  r267.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is semantic caching?");
  try { app.save(r267); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r268 = new Record(collection);
  r268.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r268.set("questionNumber", 69);
  r268.set("question", "What is LLM cost optimization?");
  r268.set("category", "Behavioral");
  r268.set("difficulty", "Advanced");
  r268.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is LLM cost optimization?");
  try { app.save(r268); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r269 = new Record(collection);
  r269.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r269.set("questionNumber", 70);
  r269.set("question", "What is token counting?");
  r269.set("category", "Technical");
  r269.set("difficulty", "Advanced");
  r269.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is token counting?");
  try { app.save(r269); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r270 = new Record(collection);
  r270.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r270.set("questionNumber", 71);
  r270.set("question", "What is prompt compression?");
  r270.set("category", "Technical");
  r270.set("difficulty", "Advanced");
  r270.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is prompt compression?");
  try { app.save(r270); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r271 = new Record(collection);
  r271.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r271.set("questionNumber", 72);
  r271.set("question", "What is context compression?");
  r271.set("category", "System Design");
  r271.set("difficulty", "Advanced");
  r271.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is context compression?");
  try { app.save(r271); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r272 = new Record(collection);
  r272.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r272.set("questionNumber", 73);
  r272.set("question", "What is LLMlingua?");
  r272.set("category", "Technical");
  r272.set("difficulty", "Advanced");
  r272.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is LLMlingua?");
  try { app.save(r272); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r273 = new Record(collection);
  r273.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r273.set("questionNumber", 74);
  r273.set("question", "What is streaming in LLMs?");
  r273.set("category", "Technical");
  r273.set("difficulty", "Advanced");
  r273.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is streaming in LLMs?");
  try { app.save(r273); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r274 = new Record(collection);
  r274.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r274.set("questionNumber", 75);
  r274.set("question", "What is batch inference?");
  r274.set("category", "Behavioral");
  r274.set("difficulty", "Advanced");
  r274.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is batch inference?");
  try { app.save(r274); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r275 = new Record(collection);
  r275.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r275.set("questionNumber", 76);
  r275.set("question", "What is latency optimization for LLMs?");
  r275.set("category", "Technical");
  r275.set("difficulty", "Advanced");
  r275.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is latency optimization for LLMs?");
  try { app.save(r275); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r276 = new Record(collection);
  r276.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r276.set("questionNumber", 77);
  r276.set("question", "What is model selection (GPT-4o vs Claude vs Gemini)?");
  r276.set("category", "Technical");
  r276.set("difficulty", "Advanced");
  r276.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is model selection (GPT-4o vs Claude vs Gemini)?");
  try { app.save(r276); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r277 = new Record(collection);
  r277.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r277.set("questionNumber", 78);
  r277.set("question", "What is API rate limiting for LLMs?");
  r277.set("category", "System Design");
  r277.set("difficulty", "Advanced");
  r277.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is API rate limiting for LLMs?");
  try { app.save(r277); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r278 = new Record(collection);
  r278.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r278.set("questionNumber", 79);
  r278.set("question", "What is fallback strategy for LLM APIs?");
  r278.set("category", "Technical");
  r278.set("difficulty", "Advanced");
  r278.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is fallback strategy for LLM APIs?");
  try { app.save(r278); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r279 = new Record(collection);
  r279.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r279.set("questionNumber", 80);
  r279.set("question", "What is LangSmith?");
  r279.set("category", "Technical");
  r279.set("difficulty", "Advanced");
  r279.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is LangSmith?");
  try { app.save(r279); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r280 = new Record(collection);
  r280.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r280.set("questionNumber", 81);
  r280.set("question", "What is PromptLayer?");
  r280.set("category", "Behavioral");
  r280.set("difficulty", "Advanced");
  r280.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is PromptLayer?");
  try { app.save(r280); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r281 = new Record(collection);
  r281.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r281.set("questionNumber", 82);
  r281.set("question", "What is Langfuse?");
  r281.set("category", "Technical");
  r281.set("difficulty", "Advanced");
  r281.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is Langfuse?");
  try { app.save(r281); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r282 = new Record(collection);
  r282.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r282.set("questionNumber", 83);
  r282.set("question", "What is Helicone?");
  r282.set("category", "Technical");
  r282.set("difficulty", "Advanced");
  r282.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is Helicone?");
  try { app.save(r282); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r283 = new Record(collection);
  r283.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r283.set("questionNumber", 84);
  r283.set("question", "What is model observability?");
  r283.set("category", "System Design");
  r283.set("difficulty", "Advanced");
  r283.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is model observability?");
  try { app.save(r283); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r284 = new Record(collection);
  r284.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r284.set("questionNumber", 85);
  r284.set("question", "What is conversation history management?");
  r284.set("category", "Technical");
  r284.set("difficulty", "Advanced");
  r284.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is conversation history management?");
  try { app.save(r284); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r285 = new Record(collection);
  r285.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r285.set("questionNumber", 86);
  r285.set("question", "What is context stuffing?");
  r285.set("category", "Technical");
  r285.set("difficulty", "Advanced");
  r285.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is context stuffing?");
  try { app.save(r285); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r286 = new Record(collection);
  r286.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r286.set("questionNumber", 87);
  r286.set("question", "What is retrieval-augmented prompting vs fine-tuning tradeoff?");
  r286.set("category", "Behavioral");
  r286.set("difficulty", "Advanced");
  r286.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is retrieval-augmented prompting vs fine-tuning tradeoff?");
  try { app.save(r286); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r287 = new Record(collection);
  r287.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r287.set("questionNumber", 88);
  r287.set("question", "What is persona prompting?");
  r287.set("category", "Technical");
  r287.set("difficulty", "Advanced");
  r287.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is persona prompting?");
  try { app.save(r287); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r288 = new Record(collection);
  r288.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r288.set("questionNumber", 89);
  r288.set("question", "What is role prompting?");
  r288.set("category", "Technical");
  r288.set("difficulty", "Advanced");
  r288.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is role prompting?");
  try { app.save(r288); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r289 = new Record(collection);
  r289.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r289.set("questionNumber", 90);
  r289.set("question", "What is format prompting?");
  r289.set("category", "System Design");
  r289.set("difficulty", "Advanced");
  r289.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is format prompting?");
  try { app.save(r289); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r290 = new Record(collection);
  r290.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r290.set("questionNumber", 91);
  r290.set("question", "What is negative prompting?");
  r290.set("category", "Technical");
  r290.set("difficulty", "Advanced");
  r290.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is negative prompting?");
  try { app.save(r290); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r291 = new Record(collection);
  r291.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r291.set("questionNumber", 92);
  r291.set("question", "What is delimiters in prompts?");
  r291.set("category", "Technical");
  r291.set("difficulty", "Advanced");
  r291.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is delimiters in prompts?");
  try { app.save(r291); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r292 = new Record(collection);
  r292.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r292.set("questionNumber", 93);
  r292.set("question", "What is XML tags in prompts?");
  r292.set("category", "Behavioral");
  r292.set("difficulty", "Advanced");
  r292.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is XML tags in prompts?");
  try { app.save(r292); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r293 = new Record(collection);
  r293.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r293.set("questionNumber", 94);
  r293.set("question", "What is prompt versioning?");
  r293.set("category", "Technical");
  r293.set("difficulty", "Advanced");
  r293.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is prompt versioning?");
  try { app.save(r293); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r294 = new Record(collection);
  r294.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r294.set("questionNumber", 95);
  r294.set("question", "What is A/B testing prompts?");
  r294.set("category", "Technical");
  r294.set("difficulty", "Advanced");
  r294.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is A/B testing prompts?");
  try { app.save(r294); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r295 = new Record(collection);
  r295.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r295.set("questionNumber", 96);
  r295.set("question", "What is prompt regression testing?");
  r295.set("category", "System Design");
  r295.set("difficulty", "Advanced");
  r295.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is prompt regression testing?");
  try { app.save(r295); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r296 = new Record(collection);
  r296.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r296.set("questionNumber", 97);
  r296.set("question", "What is a DSPy framework?");
  r296.set("category", "Technical");
  r296.set("difficulty", "Advanced");
  r296.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is a DSPy framework?");
  try { app.save(r296); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r297 = new Record(collection);
  r297.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r297.set("questionNumber", 98);
  r297.set("question", "What is automatic prompt optimization?");
  r297.set("category", "Technical");
  r297.set("difficulty", "Advanced");
  r297.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is automatic prompt optimization?");
  try { app.save(r297); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r298 = new Record(collection);
  r298.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r298.set("questionNumber", 99);
  r298.set("question", "What is meta-prompting?");
  r298.set("category", "Behavioral");
  r298.set("difficulty", "Advanced");
  r298.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is meta-prompting?");
  try { app.save(r298); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r299 = new Record(collection);
  r299.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r299.set("questionNumber", 100);
  r299.set("question", "What is LCEL (LangChain Expression Language)?");
  r299.set("category", "Technical");
  r299.set("difficulty", "Advanced");
  r299.set("explanation", "Advanced level question for Prompt Engineer / AI Product Specialist. What is LCEL (LangChain Expression Language)?");
  try { app.save(r299); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r300 = new Record(collection);
  r300.set("careerSlug", "hardware-engineer");
  r300.set("questionNumber", 1);
  r300.set("question", "What is Verilog?");
  r300.set("category", "Technical");
  r300.set("difficulty", "Beginner");
  r300.set("explanation", "Beginner level question for Hardware Engineer. What is Verilog?");
  try { app.save(r300); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r301 = new Record(collection);
  r301.set("careerSlug", "hardware-engineer");
  r301.set("questionNumber", 2);
  r301.set("question", "What is VHDL?");
  r301.set("category", "Technical");
  r301.set("difficulty", "Beginner");
  r301.set("explanation", "Beginner level question for Hardware Engineer. What is VHDL?");
  try { app.save(r301); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r302 = new Record(collection);
  r302.set("careerSlug", "hardware-engineer");
  r302.set("questionNumber", 3);
  r302.set("question", "What is an FPGA?");
  r302.set("category", "Behavioral");
  r302.set("difficulty", "Beginner");
  r302.set("explanation", "Beginner level question for Hardware Engineer. What is an FPGA?");
  try { app.save(r302); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r303 = new Record(collection);
  r303.set("careerSlug", "hardware-engineer");
  r303.set("questionNumber", 4);
  r303.set("question", "What is ASIC?");
  r303.set("category", "Technical");
  r303.set("difficulty", "Beginner");
  r303.set("explanation", "Beginner level question for Hardware Engineer. What is ASIC?");
  try { app.save(r303); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r304 = new Record(collection);
  r304.set("careerSlug", "hardware-engineer");
  r304.set("questionNumber", 5);
  r304.set("question", "What is RTL?");
  r304.set("category", "Technical");
  r304.set("difficulty", "Beginner");
  r304.set("explanation", "Beginner level question for Hardware Engineer. What is RTL?");
  try { app.save(r304); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r305 = new Record(collection);
  r305.set("careerSlug", "hardware-engineer");
  r305.set("questionNumber", 6);
  r305.set("question", "What is synthesis?");
  r305.set("category", "System Design");
  r305.set("difficulty", "Beginner");
  r305.set("explanation", "Beginner level question for Hardware Engineer. What is synthesis?");
  try { app.save(r305); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r306 = new Record(collection);
  r306.set("careerSlug", "hardware-engineer");
  r306.set("questionNumber", 7);
  r306.set("question", "What is place and route?");
  r306.set("category", "Technical");
  r306.set("difficulty", "Beginner");
  r306.set("explanation", "Beginner level question for Hardware Engineer. What is place and route?");
  try { app.save(r306); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r307 = new Record(collection);
  r307.set("careerSlug", "hardware-engineer");
  r307.set("questionNumber", 8);
  r307.set("question", "What is timing analysis?");
  r307.set("category", "Technical");
  r307.set("difficulty", "Beginner");
  r307.set("explanation", "Beginner level question for Hardware Engineer. What is timing analysis?");
  try { app.save(r307); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r308 = new Record(collection);
  r308.set("careerSlug", "hardware-engineer");
  r308.set("questionNumber", 9);
  r308.set("question", "What is setup time?");
  r308.set("category", "Behavioral");
  r308.set("difficulty", "Beginner");
  r308.set("explanation", "Beginner level question for Hardware Engineer. What is setup time?");
  try { app.save(r308); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r309 = new Record(collection);
  r309.set("careerSlug", "hardware-engineer");
  r309.set("questionNumber", 10);
  r309.set("question", "What is hold time?");
  r309.set("category", "Technical");
  r309.set("difficulty", "Beginner");
  r309.set("explanation", "Beginner level question for Hardware Engineer. What is hold time?");
  try { app.save(r309); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r310 = new Record(collection);
  r310.set("careerSlug", "hardware-engineer");
  r310.set("questionNumber", 11);
  r310.set("question", "What is clock skew?");
  r310.set("category", "Technical");
  r310.set("difficulty", "Beginner");
  r310.set("explanation", "Beginner level question for Hardware Engineer. What is clock skew?");
  try { app.save(r310); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r311 = new Record(collection);
  r311.set("careerSlug", "hardware-engineer");
  r311.set("questionNumber", 12);
  r311.set("question", "What is metastability?");
  r311.set("category", "System Design");
  r311.set("difficulty", "Beginner");
  r311.set("explanation", "Beginner level question for Hardware Engineer. What is metastability?");
  try { app.save(r311); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r312 = new Record(collection);
  r312.set("careerSlug", "hardware-engineer");
  r312.set("questionNumber", 13);
  r312.set("question", "What is a flip-flop?");
  r312.set("category", "Technical");
  r312.set("difficulty", "Beginner");
  r312.set("explanation", "Beginner level question for Hardware Engineer. What is a flip-flop?");
  try { app.save(r312); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r313 = new Record(collection);
  r313.set("careerSlug", "hardware-engineer");
  r313.set("questionNumber", 14);
  r313.set("question", "What is a latch?");
  r313.set("category", "Technical");
  r313.set("difficulty", "Beginner");
  r313.set("explanation", "Beginner level question for Hardware Engineer. What is a latch?");
  try { app.save(r313); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r314 = new Record(collection);
  r314.set("careerSlug", "hardware-engineer");
  r314.set("questionNumber", 15);
  r314.set("question", "What is a FSM?");
  r314.set("category", "Behavioral");
  r314.set("difficulty", "Beginner");
  r314.set("explanation", "Beginner level question for Hardware Engineer. What is a FSM?");
  try { app.save(r314); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r315 = new Record(collection);
  r315.set("careerSlug", "hardware-engineer");
  r315.set("questionNumber", 16);
  r315.set("question", "What is a Moore vs Mealy machine?");
  r315.set("category", "Technical");
  r315.set("difficulty", "Beginner");
  r315.set("explanation", "Beginner level question for Hardware Engineer. What is a Moore vs Mealy machine?");
  try { app.save(r315); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r316 = new Record(collection);
  r316.set("careerSlug", "hardware-engineer");
  r316.set("questionNumber", 17);
  r316.set("question", "What is a pipeline?");
  r316.set("category", "Technical");
  r316.set("difficulty", "Beginner");
  r316.set("explanation", "Beginner level question for Hardware Engineer. What is a pipeline?");
  try { app.save(r316); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r317 = new Record(collection);
  r317.set("careerSlug", "hardware-engineer");
  r317.set("questionNumber", 18);
  r317.set("question", "What is hazard in pipeline?");
  r317.set("category", "System Design");
  r317.set("difficulty", "Beginner");
  r317.set("explanation", "Beginner level question for Hardware Engineer. What is hazard in pipeline?");
  try { app.save(r317); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r318 = new Record(collection);
  r318.set("careerSlug", "hardware-engineer");
  r318.set("questionNumber", 19);
  r318.set("question", "What is forwarding/bypassing?");
  r318.set("category", "Technical");
  r318.set("difficulty", "Beginner");
  r318.set("explanation", "Beginner level question for Hardware Engineer. What is forwarding/bypassing?");
  try { app.save(r318); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r319 = new Record(collection);
  r319.set("careerSlug", "hardware-engineer");
  r319.set("questionNumber", 20);
  r319.set("question", "What is branch prediction?");
  r319.set("category", "Technical");
  r319.set("difficulty", "Beginner");
  r319.set("explanation", "Beginner level question for Hardware Engineer. What is branch prediction?");
  try { app.save(r319); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r320 = new Record(collection);
  r320.set("careerSlug", "hardware-engineer");
  r320.set("questionNumber", 21);
  r320.set("question", "What is out-of-order execution?");
  r320.set("category", "Behavioral");
  r320.set("difficulty", "Beginner");
  r320.set("explanation", "Beginner level question for Hardware Engineer. What is out-of-order execution?");
  try { app.save(r320); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r321 = new Record(collection);
  r321.set("careerSlug", "hardware-engineer");
  r321.set("questionNumber", 22);
  r321.set("question", "What is superscalar?");
  r321.set("category", "Technical");
  r321.set("difficulty", "Beginner");
  r321.set("explanation", "Beginner level question for Hardware Engineer. What is superscalar?");
  try { app.save(r321); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r322 = new Record(collection);
  r322.set("careerSlug", "hardware-engineer");
  r322.set("questionNumber", 23);
  r322.set("question", "What is SIMD?");
  r322.set("category", "Technical");
  r322.set("difficulty", "Beginner");
  r322.set("explanation", "Beginner level question for Hardware Engineer. What is SIMD?");
  try { app.save(r322); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r323 = new Record(collection);
  r323.set("careerSlug", "hardware-engineer");
  r323.set("questionNumber", 24);
  r323.set("question", "What is cache?");
  r323.set("category", "System Design");
  r323.set("difficulty", "Beginner");
  r323.set("explanation", "Beginner level question for Hardware Engineer. What is cache?");
  try { app.save(r323); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r324 = new Record(collection);
  r324.set("careerSlug", "hardware-engineer");
  r324.set("questionNumber", 25);
  r324.set("question", "What is cache hierarchy (L1, L2, L3)?");
  r324.set("category", "Technical");
  r324.set("difficulty", "Beginner");
  r324.set("explanation", "Beginner level question for Hardware Engineer. What is cache hierarchy (L1, L2, L3)?");
  try { app.save(r324); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r325 = new Record(collection);
  r325.set("careerSlug", "hardware-engineer");
  r325.set("questionNumber", 26);
  r325.set("question", "What is cache miss?");
  r325.set("category", "Technical");
  r325.set("difficulty", "Beginner");
  r325.set("explanation", "Beginner level question for Hardware Engineer. What is cache miss?");
  try { app.save(r325); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r326 = new Record(collection);
  r326.set("careerSlug", "hardware-engineer");
  r326.set("questionNumber", 27);
  r326.set("question", "What is cache coherence?");
  r326.set("category", "Behavioral");
  r326.set("difficulty", "Beginner");
  r326.set("explanation", "Beginner level question for Hardware Engineer. What is cache coherence?");
  try { app.save(r326); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r327 = new Record(collection);
  r327.set("careerSlug", "hardware-engineer");
  r327.set("questionNumber", 28);
  r327.set("question", "What is MESI protocol?");
  r327.set("category", "Technical");
  r327.set("difficulty", "Beginner");
  r327.set("explanation", "Beginner level question for Hardware Engineer. What is MESI protocol?");
  try { app.save(r327); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r328 = new Record(collection);
  r328.set("careerSlug", "hardware-engineer");
  r328.set("questionNumber", 29);
  r328.set("question", "What is virtual memory?");
  r328.set("category", "Technical");
  r328.set("difficulty", "Beginner");
  r328.set("explanation", "Beginner level question for Hardware Engineer. What is virtual memory?");
  try { app.save(r328); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r329 = new Record(collection);
  r329.set("careerSlug", "hardware-engineer");
  r329.set("questionNumber", 30);
  r329.set("question", "What is TLB?");
  r329.set("category", "System Design");
  r329.set("difficulty", "Beginner");
  r329.set("explanation", "Beginner level question for Hardware Engineer. What is TLB?");
  try { app.save(r329); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r330 = new Record(collection);
  r330.set("careerSlug", "hardware-engineer");
  r330.set("questionNumber", 31);
  r330.set("question", "What is page fault?");
  r330.set("category", "Technical");
  r330.set("difficulty", "Beginner");
  r330.set("explanation", "Beginner level question for Hardware Engineer. What is page fault?");
  try { app.save(r330); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r331 = new Record(collection);
  r331.set("careerSlug", "hardware-engineer");
  r331.set("questionNumber", 32);
  r331.set("question", "What is DRAM?");
  r331.set("category", "Technical");
  r331.set("difficulty", "Beginner");
  r331.set("explanation", "Beginner level question for Hardware Engineer. What is DRAM?");
  try { app.save(r331); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r332 = new Record(collection);
  r332.set("careerSlug", "hardware-engineer");
  r332.set("questionNumber", 33);
  r332.set("question", "What is SRAM?");
  r332.set("category", "Behavioral");
  r332.set("difficulty", "Beginner");
  r332.set("explanation", "Beginner level question for Hardware Engineer. What is SRAM?");
  try { app.save(r332); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r333 = new Record(collection);
  r333.set("careerSlug", "hardware-engineer");
  r333.set("questionNumber", 34);
  r333.set("question", "What is DDR?");
  r333.set("category", "Technical");
  r333.set("difficulty", "Intermediate");
  r333.set("explanation", "Intermediate level question for Hardware Engineer. What is DDR?");
  try { app.save(r333); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r334 = new Record(collection);
  r334.set("careerSlug", "hardware-engineer");
  r334.set("questionNumber", 35);
  r334.set("question", "What is memory bandwidth?");
  r334.set("category", "Technical");
  r334.set("difficulty", "Intermediate");
  r334.set("explanation", "Intermediate level question for Hardware Engineer. What is memory bandwidth?");
  try { app.save(r334); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r335 = new Record(collection);
  r335.set("careerSlug", "hardware-engineer");
  r335.set("questionNumber", 36);
  r335.set("question", "What is PCIe?");
  r335.set("category", "System Design");
  r335.set("difficulty", "Intermediate");
  r335.set("explanation", "Intermediate level question for Hardware Engineer. What is PCIe?");
  try { app.save(r335); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r336 = new Record(collection);
  r336.set("careerSlug", "hardware-engineer");
  r336.set("questionNumber", 37);
  r336.set("question", "What is NVMe?");
  r336.set("category", "Technical");
  r336.set("difficulty", "Intermediate");
  r336.set("explanation", "Intermediate level question for Hardware Engineer. What is NVMe?");
  try { app.save(r336); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r337 = new Record(collection);
  r337.set("careerSlug", "hardware-engineer");
  r337.set("questionNumber", 38);
  r337.set("question", "What is USB?");
  r337.set("category", "Technical");
  r337.set("difficulty", "Intermediate");
  r337.set("explanation", "Intermediate level question for Hardware Engineer. What is USB?");
  try { app.save(r337); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r338 = new Record(collection);
  r338.set("careerSlug", "hardware-engineer");
  r338.set("questionNumber", 39);
  r338.set("question", "What is I2C vs SPI vs UART?");
  r338.set("category", "Behavioral");
  r338.set("difficulty", "Intermediate");
  r338.set("explanation", "Intermediate level question for Hardware Engineer. What is I2C vs SPI vs UART?");
  try { app.save(r338); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r339 = new Record(collection);
  r339.set("careerSlug", "hardware-engineer");
  r339.set("questionNumber", 40);
  r339.set("question", "What is JTAG?");
  r339.set("category", "Technical");
  r339.set("difficulty", "Intermediate");
  r339.set("explanation", "Intermediate level question for Hardware Engineer. What is JTAG?");
  try { app.save(r339); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r340 = new Record(collection);
  r340.set("careerSlug", "hardware-engineer");
  r340.set("questionNumber", 41);
  r340.set("question", "What is a logic analyzer?");
  r340.set("category", "Technical");
  r340.set("difficulty", "Intermediate");
  r340.set("explanation", "Intermediate level question for Hardware Engineer. What is a logic analyzer?");
  try { app.save(r340); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r341 = new Record(collection);
  r341.set("careerSlug", "hardware-engineer");
  r341.set("questionNumber", 42);
  r341.set("question", "What is an oscilloscope?");
  r341.set("category", "System Design");
  r341.set("difficulty", "Intermediate");
  r341.set("explanation", "Intermediate level question for Hardware Engineer. What is an oscilloscope?");
  try { app.save(r341); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r342 = new Record(collection);
  r342.set("careerSlug", "hardware-engineer");
  r342.set("questionNumber", 43);
  r342.set("question", "What is signal integrity?");
  r342.set("category", "Technical");
  r342.set("difficulty", "Intermediate");
  r342.set("explanation", "Intermediate level question for Hardware Engineer. What is signal integrity?");
  try { app.save(r342); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r343 = new Record(collection);
  r343.set("careerSlug", "hardware-engineer");
  r343.set("questionNumber", 44);
  r343.set("question", "What is impedance matching?");
  r343.set("category", "Technical");
  r343.set("difficulty", "Intermediate");
  r343.set("explanation", "Intermediate level question for Hardware Engineer. What is impedance matching?");
  try { app.save(r343); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r344 = new Record(collection);
  r344.set("careerSlug", "hardware-engineer");
  r344.set("questionNumber", 45);
  r344.set("question", "What is EMI?");
  r344.set("category", "Behavioral");
  r344.set("difficulty", "Intermediate");
  r344.set("explanation", "Intermediate level question for Hardware Engineer. What is EMI?");
  try { app.save(r344); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r345 = new Record(collection);
  r345.set("careerSlug", "hardware-engineer");
  r345.set("questionNumber", 46);
  r345.set("question", "What is differential signaling?");
  r345.set("category", "Technical");
  r345.set("difficulty", "Intermediate");
  r345.set("explanation", "Intermediate level question for Hardware Engineer. What is differential signaling?");
  try { app.save(r345); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r346 = new Record(collection);
  r346.set("careerSlug", "hardware-engineer");
  r346.set("questionNumber", 47);
  r346.set("question", "What is a power delivery network?");
  r346.set("category", "Technical");
  r346.set("difficulty", "Intermediate");
  r346.set("explanation", "Intermediate level question for Hardware Engineer. What is a power delivery network?");
  try { app.save(r346); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r347 = new Record(collection);
  r347.set("careerSlug", "hardware-engineer");
  r347.set("questionNumber", 48);
  r347.set("question", "What is decoupling capacitor?");
  r347.set("category", "System Design");
  r347.set("difficulty", "Intermediate");
  r347.set("explanation", "Intermediate level question for Hardware Engineer. What is decoupling capacitor?");
  try { app.save(r347); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r348 = new Record(collection);
  r348.set("careerSlug", "hardware-engineer");
  r348.set("questionNumber", 49);
  r348.set("question", "What is a voltage regulator?");
  r348.set("category", "Technical");
  r348.set("difficulty", "Intermediate");
  r348.set("explanation", "Intermediate level question for Hardware Engineer. What is a voltage regulator?");
  try { app.save(r348); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r349 = new Record(collection);
  r349.set("careerSlug", "hardware-engineer");
  r349.set("questionNumber", 50);
  r349.set("question", "What is PCB stackup?");
  r349.set("category", "Technical");
  r349.set("difficulty", "Intermediate");
  r349.set("explanation", "Intermediate level question for Hardware Engineer. What is PCB stackup?");
  try { app.save(r349); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r350 = new Record(collection);
  r350.set("careerSlug", "hardware-engineer");
  r350.set("questionNumber", 51);
  r350.set("question", "What is ground plane?");
  r350.set("category", "Behavioral");
  r350.set("difficulty", "Intermediate");
  r350.set("explanation", "Intermediate level question for Hardware Engineer. What is ground plane?");
  try { app.save(r350); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r351 = new Record(collection);
  r351.set("careerSlug", "hardware-engineer");
  r351.set("questionNumber", 52);
  r351.set("question", "What is trace width?");
  r351.set("category", "Technical");
  r351.set("difficulty", "Intermediate");
  r351.set("explanation", "Intermediate level question for Hardware Engineer. What is trace width?");
  try { app.save(r351); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r352 = new Record(collection);
  r352.set("careerSlug", "hardware-engineer");
  r352.set("questionNumber", 53);
  r352.set("question", "What is via?");
  r352.set("category", "Technical");
  r352.set("difficulty", "Intermediate");
  r352.set("explanation", "Intermediate level question for Hardware Engineer. What is via?");
  try { app.save(r352); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r353 = new Record(collection);
  r353.set("careerSlug", "hardware-engineer");
  r353.set("questionNumber", 54);
  r353.set("question", "What is DRC/ERC?");
  r353.set("category", "System Design");
  r353.set("difficulty", "Intermediate");
  r353.set("explanation", "Intermediate level question for Hardware Engineer. What is DRC/ERC?");
  try { app.save(r353); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r354 = new Record(collection);
  r354.set("careerSlug", "hardware-engineer");
  r354.set("questionNumber", 55);
  r354.set("question", "What is BOM?");
  r354.set("category", "Technical");
  r354.set("difficulty", "Intermediate");
  r354.set("explanation", "Intermediate level question for Hardware Engineer. What is BOM?");
  try { app.save(r354); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r355 = new Record(collection);
  r355.set("careerSlug", "hardware-engineer");
  r355.set("questionNumber", 56);
  r355.set("question", "What is Gerber file?");
  r355.set("category", "Technical");
  r355.set("difficulty", "Intermediate");
  r355.set("explanation", "Intermediate level question for Hardware Engineer. What is Gerber file?");
  try { app.save(r355); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r356 = new Record(collection);
  r356.set("careerSlug", "hardware-engineer");
  r356.set("questionNumber", 57);
  r356.set("question", "What is KiCad?");
  r356.set("category", "Behavioral");
  r356.set("difficulty", "Intermediate");
  r356.set("explanation", "Intermediate level question for Hardware Engineer. What is KiCad?");
  try { app.save(r356); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r357 = new Record(collection);
  r357.set("careerSlug", "hardware-engineer");
  r357.set("questionNumber", 58);
  r357.set("question", "What is Altium Designer?");
  r357.set("category", "Technical");
  r357.set("difficulty", "Intermediate");
  r357.set("explanation", "Intermediate level question for Hardware Engineer. What is Altium Designer?");
  try { app.save(r357); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r358 = new Record(collection);
  r358.set("careerSlug", "hardware-engineer");
  r358.set("questionNumber", 59);
  r358.set("question", "What is CMOS?");
  r358.set("category", "Technical");
  r358.set("difficulty", "Intermediate");
  r358.set("explanation", "Intermediate level question for Hardware Engineer. What is CMOS?");
  try { app.save(r358); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r359 = new Record(collection);
  r359.set("careerSlug", "hardware-engineer");
  r359.set("questionNumber", 60);
  r359.set("question", "What is VLSI?");
  r359.set("category", "System Design");
  r359.set("difficulty", "Intermediate");
  r359.set("explanation", "Intermediate level question for Hardware Engineer. What is VLSI?");
  try { app.save(r359); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r360 = new Record(collection);
  r360.set("careerSlug", "hardware-engineer");
  r360.set("questionNumber", 61);
  r360.set("question", "What is a transistor?");
  r360.set("category", "Technical");
  r360.set("difficulty", "Intermediate");
  r360.set("explanation", "Intermediate level question for Hardware Engineer. What is a transistor?");
  try { app.save(r360); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r361 = new Record(collection);
  r361.set("careerSlug", "hardware-engineer");
  r361.set("questionNumber", 62);
  r361.set("question", "What is MOSFET?");
  r361.set("category", "Technical");
  r361.set("difficulty", "Intermediate");
  r361.set("explanation", "Intermediate level question for Hardware Engineer. What is MOSFET?");
  try { app.save(r361); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r362 = new Record(collection);
  r362.set("careerSlug", "hardware-engineer");
  r362.set("questionNumber", 63);
  r362.set("question", "What is FinFET?");
  r362.set("category", "Behavioral");
  r362.set("difficulty", "Intermediate");
  r362.set("explanation", "Intermediate level question for Hardware Engineer. What is FinFET?");
  try { app.save(r362); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r363 = new Record(collection);
  r363.set("careerSlug", "hardware-engineer");
  r363.set("questionNumber", 64);
  r363.set("question", "What is process node (7nm, 5nm, 3nm)?");
  r363.set("category", "Technical");
  r363.set("difficulty", "Intermediate");
  r363.set("explanation", "Intermediate level question for Hardware Engineer. What is process node (7nm, 5nm, 3nm)?");
  try { app.save(r363); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r364 = new Record(collection);
  r364.set("careerSlug", "hardware-engineer");
  r364.set("questionNumber", 65);
  r364.set("question", "What is standard cell?");
  r364.set("category", "Technical");
  r364.set("difficulty", "Intermediate");
  r364.set("explanation", "Intermediate level question for Hardware Engineer. What is standard cell?");
  try { app.save(r364); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r365 = new Record(collection);
  r365.set("careerSlug", "hardware-engineer");
  r365.set("questionNumber", 66);
  r365.set("question", "What is IP core?");
  r365.set("category", "System Design");
  r365.set("difficulty", "Intermediate");
  r365.set("explanation", "Intermediate level question for Hardware Engineer. What is IP core?");
  try { app.save(r365); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r366 = new Record(collection);
  r366.set("careerSlug", "hardware-engineer");
  r366.set("questionNumber", 67);
  r366.set("question", "What is SoC?");
  r366.set("category", "Technical");
  r366.set("difficulty", "Intermediate");
  r366.set("explanation", "Intermediate level question for Hardware Engineer. What is SoC?");
  try { app.save(r366); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r367 = new Record(collection);
  r367.set("careerSlug", "hardware-engineer");
  r367.set("questionNumber", 68);
  r367.set("question", "What is ARM architecture?");
  r367.set("category", "Technical");
  r367.set("difficulty", "Advanced");
  r367.set("explanation", "Advanced level question for Hardware Engineer. What is ARM architecture?");
  try { app.save(r367); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r368 = new Record(collection);
  r368.set("careerSlug", "hardware-engineer");
  r368.set("questionNumber", 69);
  r368.set("question", "What is RISC-V?");
  r368.set("category", "Behavioral");
  r368.set("difficulty", "Advanced");
  r368.set("explanation", "Advanced level question for Hardware Engineer. What is RISC-V?");
  try { app.save(r368); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r369 = new Record(collection);
  r369.set("careerSlug", "hardware-engineer");
  r369.set("questionNumber", 70);
  r369.set("question", "What is GPU architecture?");
  r369.set("category", "Technical");
  r369.set("difficulty", "Advanced");
  r369.set("explanation", "Advanced level question for Hardware Engineer. What is GPU architecture?");
  try { app.save(r369); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r370 = new Record(collection);
  r370.set("careerSlug", "hardware-engineer");
  r370.set("questionNumber", 71);
  r370.set("question", "What is NPU (Neural Processing Unit)?");
  r370.set("category", "Technical");
  r370.set("difficulty", "Advanced");
  r370.set("explanation", "Advanced level question for Hardware Engineer. What is NPU (Neural Processing Unit)?");
  try { app.save(r370); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r371 = new Record(collection);
  r371.set("careerSlug", "hardware-engineer");
  r371.set("questionNumber", 72);
  r371.set("question", "What is TPU?");
  r371.set("category", "System Design");
  r371.set("difficulty", "Advanced");
  r371.set("explanation", "Advanced level question for Hardware Engineer. What is TPU?");
  try { app.save(r371); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r372 = new Record(collection);
  r372.set("careerSlug", "hardware-engineer");
  r372.set("questionNumber", 73);
  r372.set("question", "What is HBM memory?");
  r372.set("category", "Technical");
  r372.set("difficulty", "Advanced");
  r372.set("explanation", "Advanced level question for Hardware Engineer. What is HBM memory?");
  try { app.save(r372); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r373 = new Record(collection);
  r373.set("careerSlug", "hardware-engineer");
  r373.set("questionNumber", 74);
  r373.set("question", "What is chiplet?");
  r373.set("category", "Technical");
  r373.set("difficulty", "Advanced");
  r373.set("explanation", "Advanced level question for Hardware Engineer. What is chiplet?");
  try { app.save(r373); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r374 = new Record(collection);
  r374.set("careerSlug", "hardware-engineer");
  r374.set("questionNumber", 75);
  r374.set("question", "What is die stacking?");
  r374.set("category", "Behavioral");
  r374.set("difficulty", "Advanced");
  r374.set("explanation", "Advanced level question for Hardware Engineer. What is die stacking?");
  try { app.save(r374); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r375 = new Record(collection);
  r375.set("careerSlug", "hardware-engineer");
  r375.set("questionNumber", 76);
  r375.set("question", "What is 3D IC?");
  r375.set("category", "Technical");
  r375.set("difficulty", "Advanced");
  r375.set("explanation", "Advanced level question for Hardware Engineer. What is 3D IC?");
  try { app.save(r375); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r376 = new Record(collection);
  r376.set("careerSlug", "hardware-engineer");
  r376.set("questionNumber", 77);
  r376.set("question", "What is wafer?");
  r376.set("category", "Technical");
  r376.set("difficulty", "Advanced");
  r376.set("explanation", "Advanced level question for Hardware Engineer. What is wafer?");
  try { app.save(r376); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r377 = new Record(collection);
  r377.set("careerSlug", "hardware-engineer");
  r377.set("questionNumber", 78);
  r377.set("question", "What is lithography?");
  r377.set("category", "System Design");
  r377.set("difficulty", "Advanced");
  r377.set("explanation", "Advanced level question for Hardware Engineer. What is lithography?");
  try { app.save(r377); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r378 = new Record(collection);
  r378.set("careerSlug", "hardware-engineer");
  r378.set("questionNumber", 79);
  r378.set("question", "What is EUV lithography?");
  r378.set("category", "Technical");
  r378.set("difficulty", "Advanced");
  r378.set("explanation", "Advanced level question for Hardware Engineer. What is EUV lithography?");
  try { app.save(r378); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r379 = new Record(collection);
  r379.set("careerSlug", "hardware-engineer");
  r379.set("questionNumber", 80);
  r379.set("question", "What is design for manufacturability (DFM)?");
  r379.set("category", "Technical");
  r379.set("difficulty", "Advanced");
  r379.set("explanation", "Advanced level question for Hardware Engineer. What is design for manufacturability (DFM)?");
  try { app.save(r379); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r380 = new Record(collection);
  r380.set("careerSlug", "hardware-engineer");
  r380.set("questionNumber", 81);
  r380.set("question", "What is design for test (DFT)?");
  r380.set("category", "Behavioral");
  r380.set("difficulty", "Advanced");
  r380.set("explanation", "Advanced level question for Hardware Engineer. What is design for test (DFT)?");
  try { app.save(r380); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r381 = new Record(collection);
  r381.set("careerSlug", "hardware-engineer");
  r381.set("questionNumber", 82);
  r381.set("question", "What is scan chain?");
  r381.set("category", "Technical");
  r381.set("difficulty", "Advanced");
  r381.set("explanation", "Advanced level question for Hardware Engineer. What is scan chain?");
  try { app.save(r381); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r382 = new Record(collection);
  r382.set("careerSlug", "hardware-engineer");
  r382.set("questionNumber", 83);
  r382.set("question", "What is BIST?");
  r382.set("category", "Technical");
  r382.set("difficulty", "Advanced");
  r382.set("explanation", "Advanced level question for Hardware Engineer. What is BIST?");
  try { app.save(r382); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r383 = new Record(collection);
  r383.set("careerSlug", "hardware-engineer");
  r383.set("questionNumber", 84);
  r383.set("question", "What is formal verification?");
  r383.set("category", "System Design");
  r383.set("difficulty", "Advanced");
  r383.set("explanation", "Advanced level question for Hardware Engineer. What is formal verification?");
  try { app.save(r383); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r384 = new Record(collection);
  r384.set("careerSlug", "hardware-engineer");
  r384.set("questionNumber", 85);
  r384.set("question", "What is simulation vs emulation?");
  r384.set("category", "Technical");
  r384.set("difficulty", "Advanced");
  r384.set("explanation", "Advanced level question for Hardware Engineer. What is simulation vs emulation?");
  try { app.save(r384); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r385 = new Record(collection);
  r385.set("careerSlug", "hardware-engineer");
  r385.set("questionNumber", 86);
  r385.set("question", "What is power analysis?");
  r385.set("category", "Technical");
  r385.set("difficulty", "Advanced");
  r385.set("explanation", "Advanced level question for Hardware Engineer. What is power analysis?");
  try { app.save(r385); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r386 = new Record(collection);
  r386.set("careerSlug", "hardware-engineer");
  r386.set("questionNumber", 87);
  r386.set("question", "What is dynamic power vs static power?");
  r386.set("category", "Behavioral");
  r386.set("difficulty", "Advanced");
  r386.set("explanation", "Advanced level question for Hardware Engineer. What is dynamic power vs static power?");
  try { app.save(r386); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r387 = new Record(collection);
  r387.set("careerSlug", "hardware-engineer");
  r387.set("questionNumber", 88);
  r387.set("question", "What is clock gating?");
  r387.set("category", "Technical");
  r387.set("difficulty", "Advanced");
  r387.set("explanation", "Advanced level question for Hardware Engineer. What is clock gating?");
  try { app.save(r387); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r388 = new Record(collection);
  r388.set("careerSlug", "hardware-engineer");
  r388.set("questionNumber", 89);
  r388.set("question", "What is power gating?");
  r388.set("category", "Technical");
  r388.set("difficulty", "Advanced");
  r388.set("explanation", "Advanced level question for Hardware Engineer. What is power gating?");
  try { app.save(r388); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r389 = new Record(collection);
  r389.set("careerSlug", "hardware-engineer");
  r389.set("questionNumber", 90);
  r389.set("question", "What is voltage scaling (DVFS)?");
  r389.set("category", "System Design");
  r389.set("difficulty", "Advanced");
  r389.set("explanation", "Advanced level question for Hardware Engineer. What is voltage scaling (DVFS)?");
  try { app.save(r389); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r390 = new Record(collection);
  r390.set("careerSlug", "hardware-engineer");
  r390.set("questionNumber", 91);
  r390.set("question", "What is thermal management?");
  r390.set("category", "Technical");
  r390.set("difficulty", "Advanced");
  r390.set("explanation", "Advanced level question for Hardware Engineer. What is thermal management?");
  try { app.save(r390); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r391 = new Record(collection);
  r391.set("careerSlug", "hardware-engineer");
  r391.set("questionNumber", 92);
  r391.set("question", "What is thermal throttling?");
  r391.set("category", "Technical");
  r391.set("difficulty", "Advanced");
  r391.set("explanation", "Advanced level question for Hardware Engineer. What is thermal throttling?");
  try { app.save(r391); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r392 = new Record(collection);
  r392.set("careerSlug", "hardware-engineer");
  r392.set("questionNumber", 93);
  r392.set("question", "What is a heatsink?");
  r392.set("category", "Behavioral");
  r392.set("difficulty", "Advanced");
  r392.set("explanation", "Advanced level question for Hardware Engineer. What is a heatsink?");
  try { app.save(r392); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r393 = new Record(collection);
  r393.set("careerSlug", "hardware-engineer");
  r393.set("questionNumber", 94);
  r393.set("question", "What is TDP?");
  r393.set("category", "Technical");
  r393.set("difficulty", "Advanced");
  r393.set("explanation", "Advanced level question for Hardware Engineer. What is TDP?");
  try { app.save(r393); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r394 = new Record(collection);
  r394.set("careerSlug", "hardware-engineer");
  r394.set("questionNumber", 95);
  r394.set("question", "What is yield in chip manufacturing?");
  r394.set("category", "Technical");
  r394.set("difficulty", "Advanced");
  r394.set("explanation", "Advanced level question for Hardware Engineer. What is yield in chip manufacturing?");
  try { app.save(r394); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r395 = new Record(collection);
  r395.set("careerSlug", "hardware-engineer");
  r395.set("questionNumber", 96);
  r395.set("question", "What is EDA (Electronic Design Automation)?");
  r395.set("category", "System Design");
  r395.set("difficulty", "Advanced");
  r395.set("explanation", "Advanced level question for Hardware Engineer. What is EDA (Electronic Design Automation)?");
  try { app.save(r395); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r396 = new Record(collection);
  r396.set("careerSlug", "hardware-engineer");
  r396.set("questionNumber", 97);
  r396.set("question", "What is Cadence?");
  r396.set("category", "Technical");
  r396.set("difficulty", "Advanced");
  r396.set("explanation", "Advanced level question for Hardware Engineer. What is Cadence?");
  try { app.save(r396); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r397 = new Record(collection);
  r397.set("careerSlug", "hardware-engineer");
  r397.set("questionNumber", 98);
  r397.set("question", "What is Synopsys?");
  r397.set("category", "Technical");
  r397.set("difficulty", "Advanced");
  r397.set("explanation", "Advanced level question for Hardware Engineer. What is Synopsys?");
  try { app.save(r397); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r398 = new Record(collection);
  r398.set("careerSlug", "hardware-engineer");
  r398.set("questionNumber", 99);
  r398.set("question", "What is OpenROAD?");
  r398.set("category", "Behavioral");
  r398.set("difficulty", "Advanced");
  r398.set("explanation", "Advanced level question for Hardware Engineer. What is OpenROAD?");
  try { app.save(r398); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r399 = new Record(collection);
  r399.set("careerSlug", "hardware-engineer");
  r399.set("questionNumber", 100);
  r399.set("question", "What is open-source chip design?");
  r399.set("category", "Technical");
  r399.set("difficulty", "Advanced");
  r399.set("explanation", "Advanced level question for Hardware Engineer. What is open-source chip design?");
  try { app.save(r399); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r400 = new Record(collection);
  r400.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r400.set("questionNumber", 1);
  r400.set("question", "What is autonomous driving stack?");
  r400.set("category", "Technical");
  r400.set("difficulty", "Beginner");
  r400.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is autonomous driving stack?");
  try { app.save(r400); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r401 = new Record(collection);
  r401.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r401.set("questionNumber", 2);
  r401.set("question", "What is perception in autonomous systems?");
  r401.set("category", "Technical");
  r401.set("difficulty", "Beginner");
  r401.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is perception in autonomous systems?");
  try { app.save(r401); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r402 = new Record(collection);
  r402.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r402.set("questionNumber", 3);
  r402.set("question", "What is localization?");
  r402.set("category", "Behavioral");
  r402.set("difficulty", "Beginner");
  r402.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is localization?");
  try { app.save(r402); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r403 = new Record(collection);
  r403.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r403.set("questionNumber", 4);
  r403.set("question", "What is path planning?");
  r403.set("category", "Technical");
  r403.set("difficulty", "Beginner");
  r403.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is path planning?");
  try { app.save(r403); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r404 = new Record(collection);
  r404.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r404.set("questionNumber", 5);
  r404.set("question", "What is motion control?");
  r404.set("category", "Technical");
  r404.set("difficulty", "Beginner");
  r404.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is motion control?");
  try { app.save(r404); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r405 = new Record(collection);
  r405.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r405.set("questionNumber", 6);
  r405.set("question", "What is HD map?");
  r405.set("category", "System Design");
  r405.set("difficulty", "Beginner");
  r405.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is HD map?");
  try { app.save(r405); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r406 = new Record(collection);
  r406.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r406.set("questionNumber", 7);
  r406.set("question", "What is semantic segmentation?");
  r406.set("category", "Technical");
  r406.set("difficulty", "Beginner");
  r406.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is semantic segmentation?");
  try { app.save(r406); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r407 = new Record(collection);
  r407.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r407.set("questionNumber", 8);
  r407.set("question", "What is instance segmentation?");
  r407.set("category", "Technical");
  r407.set("difficulty", "Beginner");
  r407.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is instance segmentation?");
  try { app.save(r407); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r408 = new Record(collection);
  r408.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r408.set("questionNumber", 9);
  r408.set("question", "What is 3D object detection?");
  r408.set("category", "Behavioral");
  r408.set("difficulty", "Beginner");
  r408.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is 3D object detection?");
  try { app.save(r408); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r409 = new Record(collection);
  r409.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r409.set("questionNumber", 10);
  r409.set("question", "What is PointNet?");
  r409.set("category", "Technical");
  r409.set("difficulty", "Beginner");
  r409.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is PointNet?");
  try { app.save(r409); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r410 = new Record(collection);
  r410.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r410.set("questionNumber", 11);
  r410.set("question", "What is VoxelNet?");
  r410.set("category", "Technical");
  r410.set("difficulty", "Beginner");
  r410.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is VoxelNet?");
  try { app.save(r410); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r411 = new Record(collection);
  r411.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r411.set("questionNumber", 12);
  r411.set("question", "What is BEV (Bird's Eye View) perception?");
  r411.set("category", "System Design");
  r411.set("difficulty", "Beginner");
  r411.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is BEV (Bird's Eye View) perception?");
  try { app.save(r411); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r412 = new Record(collection);
  r412.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r412.set("questionNumber", 13);
  r412.set("question", "What is transformer for perception?");
  r412.set("category", "Technical");
  r412.set("difficulty", "Beginner");
  r412.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is transformer for perception?");
  try { app.save(r412); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r413 = new Record(collection);
  r413.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r413.set("questionNumber", 14);
  r413.set("question", "What is occupancy network?");
  r413.set("category", "Technical");
  r413.set("difficulty", "Beginner");
  r413.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is occupancy network?");
  try { app.save(r413); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r414 = new Record(collection);
  r414.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r414.set("questionNumber", 15);
  r414.set("question", "What is a LIDAR?");
  r414.set("category", "Behavioral");
  r414.set("difficulty", "Beginner");
  r414.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is a LIDAR?");
  try { app.save(r414); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r415 = new Record(collection);
  r415.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r415.set("questionNumber", 16);
  r415.set("question", "What is a RADAR?");
  r415.set("category", "Technical");
  r415.set("difficulty", "Beginner");
  r415.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is a RADAR?");
  try { app.save(r415); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r416 = new Record(collection);
  r416.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r416.set("questionNumber", 17);
  r416.set("question", "What is camera-only vs LiDAR?");
  r416.set("category", "Technical");
  r416.set("difficulty", "Beginner");
  r416.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is camera-only vs LiDAR?");
  try { app.save(r416); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r417 = new Record(collection);
  r417.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r417.set("questionNumber", 18);
  r417.set("question", "What is multi-modal fusion?");
  r417.set("category", "System Design");
  r417.set("difficulty", "Beginner");
  r417.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is multi-modal fusion?");
  try { app.save(r417); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r418 = new Record(collection);
  r418.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r418.set("questionNumber", 19);
  r418.set("question", "What is early vs late fusion?");
  r418.set("category", "Technical");
  r418.set("difficulty", "Beginner");
  r418.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is early vs late fusion?");
  try { app.save(r418); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r419 = new Record(collection);
  r419.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r419.set("questionNumber", 20);
  r419.set("question", "What is BEV fusion?");
  r419.set("category", "Technical");
  r419.set("difficulty", "Beginner");
  r419.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is BEV fusion?");
  try { app.save(r419); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r420 = new Record(collection);
  r420.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r420.set("questionNumber", 21);
  r420.set("question", "What is a point cloud?");
  r420.set("category", "Behavioral");
  r420.set("difficulty", "Beginner");
  r420.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is a point cloud?");
  try { app.save(r420); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r421 = new Record(collection);
  r421.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r421.set("questionNumber", 22);
  r421.set("question", "What is voxelization?");
  r421.set("category", "Technical");
  r421.set("difficulty", "Beginner");
  r421.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is voxelization?");
  try { app.save(r421); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r422 = new Record(collection);
  r422.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r422.set("questionNumber", 23);
  r422.set("question", "What is ground segmentation?");
  r422.set("category", "Technical");
  r422.set("difficulty", "Beginner");
  r422.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is ground segmentation?");
  try { app.save(r422); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r423 = new Record(collection);
  r423.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r423.set("questionNumber", 24);
  r423.set("question", "What is sensor calibration?");
  r423.set("category", "System Design");
  r423.set("difficulty", "Beginner");
  r423.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is sensor calibration?");
  try { app.save(r423); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r424 = new Record(collection);
  r424.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r424.set("questionNumber", 25);
  r424.set("question", "What is extrinsic vs intrinsic calibration?");
  r424.set("category", "Technical");
  r424.set("difficulty", "Beginner");
  r424.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is extrinsic vs intrinsic calibration?");
  try { app.save(r424); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r425 = new Record(collection);
  r425.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r425.set("questionNumber", 26);
  r425.set("question", "What is LiDAR-camera calibration?");
  r425.set("category", "Technical");
  r425.set("difficulty", "Beginner");
  r425.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is LiDAR-camera calibration?");
  try { app.save(r425); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r426 = new Record(collection);
  r426.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r426.set("questionNumber", 27);
  r426.set("question", "What is camera projection model?");
  r426.set("category", "Behavioral");
  r426.set("difficulty", "Beginner");
  r426.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is camera projection model?");
  try { app.save(r426); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r427 = new Record(collection);
  r427.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r427.set("questionNumber", 28);
  r427.set("question", "What is stereo depth estimation?");
  r427.set("category", "Technical");
  r427.set("difficulty", "Beginner");
  r427.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is stereo depth estimation?");
  try { app.save(r427); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r428 = new Record(collection);
  r428.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r428.set("questionNumber", 29);
  r428.set("question", "What is optical flow?");
  r428.set("category", "Technical");
  r428.set("difficulty", "Beginner");
  r428.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is optical flow?");
  try { app.save(r428); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r429 = new Record(collection);
  r429.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r429.set("questionNumber", 30);
  r429.set("question", "What is SLAM for autonomous driving?");
  r429.set("category", "System Design");
  r429.set("difficulty", "Beginner");
  r429.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is SLAM for autonomous driving?");
  try { app.save(r429); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r430 = new Record(collection);
  r430.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r430.set("questionNumber", 31);
  r430.set("question", "What is NDT (Normal Distribution Transform)?");
  r430.set("category", "Technical");
  r430.set("difficulty", "Beginner");
  r430.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is NDT (Normal Distribution Transform)?");
  try { app.save(r430); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r431 = new Record(collection);
  r431.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r431.set("questionNumber", 32);
  r431.set("question", "What is ICP (Iterative Closest Point)?");
  r431.set("category", "Technical");
  r431.set("difficulty", "Beginner");
  r431.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is ICP (Iterative Closest Point)?");
  try { app.save(r431); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r432 = new Record(collection);
  r432.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r432.set("questionNumber", 33);
  r432.set("question", "What is GPS/IMU integration?");
  r432.set("category", "Behavioral");
  r432.set("difficulty", "Beginner");
  r432.set("explanation", "Beginner level question for Autonomous Systems / Self-Driving Engineer. What is GPS/IMU integration?");
  try { app.save(r432); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r433 = new Record(collection);
  r433.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r433.set("questionNumber", 34);
  r433.set("question", "What is dead reckoning?");
  r433.set("category", "Technical");
  r433.set("difficulty", "Intermediate");
  r433.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is dead reckoning?");
  try { app.save(r433); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r434 = new Record(collection);
  r434.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r434.set("questionNumber", 35);
  r434.set("question", "What is Kalman Filter?");
  r434.set("category", "Technical");
  r434.set("difficulty", "Intermediate");
  r434.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Kalman Filter?");
  try { app.save(r434); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r435 = new Record(collection);
  r435.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r435.set("questionNumber", 36);
  r435.set("question", "What is Extended Kalman Filter?");
  r435.set("category", "System Design");
  r435.set("difficulty", "Intermediate");
  r435.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Extended Kalman Filter?");
  try { app.save(r435); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r436 = new Record(collection);
  r436.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r436.set("questionNumber", 37);
  r436.set("question", "What is Unscented Kalman Filter?");
  r436.set("category", "Technical");
  r436.set("difficulty", "Intermediate");
  r436.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Unscented Kalman Filter?");
  try { app.save(r436); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r437 = new Record(collection);
  r437.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r437.set("questionNumber", 38);
  r437.set("question", "What is particle filter?");
  r437.set("category", "Technical");
  r437.set("difficulty", "Intermediate");
  r437.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is particle filter?");
  try { app.save(r437); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r438 = new Record(collection);
  r438.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r438.set("questionNumber", 39);
  r438.set("question", "What is probabilistic localization?");
  r438.set("category", "Behavioral");
  r438.set("difficulty", "Intermediate");
  r438.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is probabilistic localization?");
  try { app.save(r438); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r439 = new Record(collection);
  r439.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r439.set("questionNumber", 40);
  r439.set("question", "What is map-based localization?");
  r439.set("category", "Technical");
  r439.set("difficulty", "Intermediate");
  r439.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is map-based localization?");
  try { app.save(r439); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r440 = new Record(collection);
  r440.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r440.set("questionNumber", 41);
  r440.set("question", "What is behavior prediction?");
  r440.set("category", "Technical");
  r440.set("difficulty", "Intermediate");
  r440.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is behavior prediction?");
  try { app.save(r440); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r441 = new Record(collection);
  r441.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r441.set("questionNumber", 42);
  r441.set("question", "What is trajectory prediction?");
  r441.set("category", "System Design");
  r441.set("difficulty", "Intermediate");
  r441.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is trajectory prediction?");
  try { app.save(r441); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r442 = new Record(collection);
  r442.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r442.set("questionNumber", 43);
  r442.set("question", "What is social force model?");
  r442.set("category", "Technical");
  r442.set("difficulty", "Intermediate");
  r442.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is social force model?");
  try { app.save(r442); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r443 = new Record(collection);
  r443.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r443.set("questionNumber", 44);
  r443.set("question", "What is LSTM for trajectory prediction?");
  r443.set("category", "Technical");
  r443.set("difficulty", "Intermediate");
  r443.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is LSTM for trajectory prediction?");
  try { app.save(r443); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r444 = new Record(collection);
  r444.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r444.set("questionNumber", 45);
  r444.set("question", "What is Transformer for trajectory prediction?");
  r444.set("category", "Behavioral");
  r444.set("difficulty", "Intermediate");
  r444.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Transformer for trajectory prediction?");
  try { app.save(r444); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r445 = new Record(collection);
  r445.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r445.set("questionNumber", 46);
  r445.set("question", "What is behavior planning?");
  r445.set("category", "Technical");
  r445.set("difficulty", "Intermediate");
  r445.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is behavior planning?");
  try { app.save(r445); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r446 = new Record(collection);
  r446.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r446.set("questionNumber", 47);
  r446.set("question", "What is state machine for behavior?");
  r446.set("category", "Technical");
  r446.set("difficulty", "Intermediate");
  r446.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is state machine for behavior?");
  try { app.save(r446); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r447 = new Record(collection);
  r447.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r447.set("questionNumber", 48);
  r447.set("question", "What is rule-based planning?");
  r447.set("category", "System Design");
  r447.set("difficulty", "Intermediate");
  r447.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is rule-based planning?");
  try { app.save(r447); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r448 = new Record(collection);
  r448.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r448.set("questionNumber", 49);
  r448.set("question", "What is learning-based planning?");
  r448.set("category", "Technical");
  r448.set("difficulty", "Intermediate");
  r448.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is learning-based planning?");
  try { app.save(r448); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r449 = new Record(collection);
  r449.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r449.set("questionNumber", 50);
  r449.set("question", "What is Imitation Learning?");
  r449.set("category", "Technical");
  r449.set("difficulty", "Intermediate");
  r449.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Imitation Learning?");
  try { app.save(r449); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r450 = new Record(collection);
  r450.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r450.set("questionNumber", 51);
  r450.set("question", "What is inverse reinforcement learning?");
  r450.set("category", "Behavioral");
  r450.set("difficulty", "Intermediate");
  r450.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is inverse reinforcement learning?");
  try { app.save(r450); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r451 = new Record(collection);
  r451.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r451.set("questionNumber", 52);
  r451.set("question", "What is reinforcement learning for autonomous driving?");
  r451.set("category", "Technical");
  r451.set("difficulty", "Intermediate");
  r451.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is reinforcement learning for autonomous driving?");
  try { app.save(r451); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r452 = new Record(collection);
  r452.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r452.set("questionNumber", 53);
  r452.set("question", "What is CARLA simulator?");
  r452.set("category", "Technical");
  r452.set("difficulty", "Intermediate");
  r452.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is CARLA simulator?");
  try { app.save(r452); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r453 = new Record(collection);
  r453.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r453.set("questionNumber", 54);
  r453.set("question", "What is Apollo simulator?");
  r453.set("category", "System Design");
  r453.set("difficulty", "Intermediate");
  r453.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Apollo simulator?");
  try { app.save(r453); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r454 = new Record(collection);
  r454.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r454.set("questionNumber", 55);
  r454.set("question", "What is Waymo Open Dataset?");
  r454.set("category", "Technical");
  r454.set("difficulty", "Intermediate");
  r454.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Waymo Open Dataset?");
  try { app.save(r454); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r455 = new Record(collection);
  r455.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r455.set("questionNumber", 56);
  r455.set("question", "What is nuScenes dataset?");
  r455.set("category", "Technical");
  r455.set("difficulty", "Intermediate");
  r455.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is nuScenes dataset?");
  try { app.save(r455); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r456 = new Record(collection);
  r456.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r456.set("questionNumber", 57);
  r456.set("question", "What is KITTI dataset?");
  r456.set("category", "Behavioral");
  r456.set("difficulty", "Intermediate");
  r456.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is KITTI dataset?");
  try { app.save(r456); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r457 = new Record(collection);
  r457.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r457.set("questionNumber", 58);
  r457.set("question", "What is ONCE dataset?");
  r457.set("category", "Technical");
  r457.set("difficulty", "Intermediate");
  r457.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is ONCE dataset?");
  try { app.save(r457); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r458 = new Record(collection);
  r458.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r458.set("questionNumber", 59);
  r458.set("question", "What is motion planning?");
  r458.set("category", "Technical");
  r458.set("difficulty", "Intermediate");
  r458.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is motion planning?");
  try { app.save(r458); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r459 = new Record(collection);
  r459.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r459.set("questionNumber", 60);
  r459.set("question", "What is lattice planner?");
  r459.set("category", "System Design");
  r459.set("difficulty", "Intermediate");
  r459.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is lattice planner?");
  try { app.save(r459); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r460 = new Record(collection);
  r460.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r460.set("questionNumber", 61);
  r460.set("question", "What is sampling-based planning?");
  r460.set("category", "Technical");
  r460.set("difficulty", "Intermediate");
  r460.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is sampling-based planning?");
  try { app.save(r460); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r461 = new Record(collection);
  r461.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r461.set("questionNumber", 62);
  r461.set("question", "What is optimization-based planning?");
  r461.set("category", "Technical");
  r461.set("difficulty", "Intermediate");
  r461.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is optimization-based planning?");
  try { app.save(r461); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r462 = new Record(collection);
  r462.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r462.set("questionNumber", 63);
  r462.set("question", "What is MPC for vehicles?");
  r462.set("category", "Behavioral");
  r462.set("difficulty", "Intermediate");
  r462.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is MPC for vehicles?");
  try { app.save(r462); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r463 = new Record(collection);
  r463.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r463.set("questionNumber", 64);
  r463.set("question", "What is Stanley controller?");
  r463.set("category", "Technical");
  r463.set("difficulty", "Intermediate");
  r463.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is Stanley controller?");
  try { app.save(r463); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r464 = new Record(collection);
  r464.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r464.set("questionNumber", 65);
  r464.set("question", "What is pure pursuit?");
  r464.set("category", "Technical");
  r464.set("difficulty", "Intermediate");
  r464.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is pure pursuit?");
  try { app.save(r464); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r465 = new Record(collection);
  r465.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r465.set("questionNumber", 66);
  r465.set("question", "What is PID for steering?");
  r465.set("category", "System Design");
  r465.set("difficulty", "Intermediate");
  r465.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is PID for steering?");
  try { app.save(r465); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r466 = new Record(collection);
  r466.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r466.set("questionNumber", 67);
  r466.set("question", "What is actuator control?");
  r466.set("category", "Technical");
  r466.set("difficulty", "Intermediate");
  r466.set("explanation", "Intermediate level question for Autonomous Systems / Self-Driving Engineer. What is actuator control?");
  try { app.save(r466); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r467 = new Record(collection);
  r467.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r467.set("questionNumber", 68);
  r467.set("question", "What is drive-by-wire?");
  r467.set("category", "Technical");
  r467.set("difficulty", "Advanced");
  r467.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is drive-by-wire?");
  try { app.save(r467); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r468 = new Record(collection);
  r468.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r468.set("questionNumber", 69);
  r468.set("question", "What is CAN bus for vehicles?");
  r468.set("category", "Behavioral");
  r468.set("difficulty", "Advanced");
  r468.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is CAN bus for vehicles?");
  try { app.save(r468); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r469 = new Record(collection);
  r469.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r469.set("questionNumber", 70);
  r469.set("question", "What is AUTOSAR for autonomous driving?");
  r469.set("category", "Technical");
  r469.set("difficulty", "Advanced");
  r469.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is AUTOSAR for autonomous driving?");
  try { app.save(r469); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r470 = new Record(collection);
  r470.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r470.set("questionNumber", 71);
  r470.set("question", "What is ROS2 for autonomous vehicles?");
  r470.set("category", "Technical");
  r470.set("difficulty", "Advanced");
  r470.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is ROS2 for autonomous vehicles?");
  try { app.save(r470); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r471 = new Record(collection);
  r471.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r471.set("questionNumber", 72);
  r471.set("question", "What is Cyber-RT (Apollo)?");
  r471.set("category", "System Design");
  r471.set("difficulty", "Advanced");
  r471.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is Cyber-RT (Apollo)?");
  try { app.save(r471); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r472 = new Record(collection);
  r472.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r472.set("questionNumber", 73);
  r472.set("question", "What is functional safety?");
  r472.set("category", "Technical");
  r472.set("difficulty", "Advanced");
  r472.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is functional safety?");
  try { app.save(r472); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r473 = new Record(collection);
  r473.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r473.set("questionNumber", 74);
  r473.set("question", "What is ISO 26262?");
  r473.set("category", "Technical");
  r473.set("difficulty", "Advanced");
  r473.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is ISO 26262?");
  try { app.save(r473); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r474 = new Record(collection);
  r474.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r474.set("questionNumber", 75);
  r474.set("question", "What is SOTIF (ISO 21448)?");
  r474.set("category", "Behavioral");
  r474.set("difficulty", "Advanced");
  r474.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is SOTIF (ISO 21448)?");
  try { app.save(r474); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r475 = new Record(collection);
  r475.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r475.set("questionNumber", 76);
  r475.set("question", "What is ASIL level?");
  r475.set("category", "Technical");
  r475.set("difficulty", "Advanced");
  r475.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is ASIL level?");
  try { app.save(r475); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r476 = new Record(collection);
  r476.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r476.set("questionNumber", 77);
  r476.set("question", "What is fault detection?");
  r476.set("category", "Technical");
  r476.set("difficulty", "Advanced");
  r476.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is fault detection?");
  try { app.save(r476); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r477 = new Record(collection);
  r477.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r477.set("questionNumber", 78);
  r477.set("question", "What is fail-safe vs fail-operational?");
  r477.set("category", "System Design");
  r477.set("difficulty", "Advanced");
  r477.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is fail-safe vs fail-operational?");
  try { app.save(r477); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r478 = new Record(collection);
  r478.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r478.set("questionNumber", 79);
  r478.set("question", "What is redundancy in autonomous systems?");
  r478.set("category", "Technical");
  r478.set("difficulty", "Advanced");
  r478.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is redundancy in autonomous systems?");
  try { app.save(r478); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r479 = new Record(collection);
  r479.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r479.set("questionNumber", 80);
  r479.set("question", "What is corner cases?");
  r479.set("category", "Technical");
  r479.set("difficulty", "Advanced");
  r479.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is corner cases?");
  try { app.save(r479); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r480 = new Record(collection);
  r480.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r480.set("questionNumber", 81);
  r480.set("question", "What is long tail problem?");
  r480.set("category", "Behavioral");
  r480.set("difficulty", "Advanced");
  r480.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is long tail problem?");
  try { app.save(r480); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r481 = new Record(collection);
  r481.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r481.set("questionNumber", 82);
  r481.set("question", "What is data-driven development?");
  r481.set("category", "Technical");
  r481.set("difficulty", "Advanced");
  r481.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is data-driven development?");
  try { app.save(r481); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r482 = new Record(collection);
  r482.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r482.set("questionNumber", 83);
  r482.set("question", "What is simulation testing?");
  r482.set("category", "Technical");
  r482.set("difficulty", "Advanced");
  r482.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is simulation testing?");
  try { app.save(r482); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r483 = new Record(collection);
  r483.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r483.set("questionNumber", 84);
  r483.set("question", "What is scenario testing?");
  r483.set("category", "System Design");
  r483.set("difficulty", "Advanced");
  r483.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is scenario testing?");
  try { app.save(r483); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r484 = new Record(collection);
  r484.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r484.set("questionNumber", 85);
  r484.set("question", "What is a data engine?");
  r484.set("category", "Technical");
  r484.set("difficulty", "Advanced");
  r484.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is a data engine?");
  try { app.save(r484); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r485 = new Record(collection);
  r485.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r485.set("questionNumber", 86);
  r485.set("question", "What is active learning for autonomous driving?");
  r485.set("category", "Technical");
  r485.set("difficulty", "Advanced");
  r485.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is active learning for autonomous driving?");
  try { app.save(r485); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r486 = new Record(collection);
  r486.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r486.set("questionNumber", 87);
  r486.set("question", "What is auto-labeling?");
  r486.set("category", "Behavioral");
  r486.set("difficulty", "Advanced");
  r486.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is auto-labeling?");
  try { app.save(r486); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r487 = new Record(collection);
  r487.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r487.set("questionNumber", 88);
  r487.set("question", "What is foundation model for driving?");
  r487.set("category", "Technical");
  r487.set("difficulty", "Advanced");
  r487.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is foundation model for driving?");
  try { app.save(r487); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r488 = new Record(collection);
  r488.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r488.set("questionNumber", 89);
  r488.set("question", "What is Tesla Autopilot vs FSD architecture?");
  r488.set("category", "Technical");
  r488.set("difficulty", "Advanced");
  r488.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is Tesla Autopilot vs FSD architecture?");
  try { app.save(r488); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r489 = new Record(collection);
  r489.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r489.set("questionNumber", 90);
  r489.set("question", "What is Waymo vs Cruise approach?");
  r489.set("category", "System Design");
  r489.set("difficulty", "Advanced");
  r489.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is Waymo vs Cruise approach?");
  try { app.save(r489); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r490 = new Record(collection);
  r490.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r490.set("questionNumber", 91);
  r490.set("question", "What is Level 2 vs Level 4 autonomy?");
  r490.set("category", "Technical");
  r490.set("difficulty", "Advanced");
  r490.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is Level 2 vs Level 4 autonomy?");
  try { app.save(r490); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r491 = new Record(collection);
  r491.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r491.set("questionNumber", 92);
  r491.set("question", "What is SAE autonomy levels?");
  r491.set("category", "Technical");
  r491.set("difficulty", "Advanced");
  r491.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is SAE autonomy levels?");
  try { app.save(r491); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r492 = new Record(collection);
  r492.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r492.set("questionNumber", 93);
  r492.set("question", "What is V2X communication?");
  r492.set("category", "Behavioral");
  r492.set("difficulty", "Advanced");
  r492.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is V2X communication?");
  try { app.save(r492); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r493 = new Record(collection);
  r493.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r493.set("questionNumber", 94);
  r493.set("question", "What is C-V2X?");
  r493.set("category", "Technical");
  r493.set("difficulty", "Advanced");
  r493.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is C-V2X?");
  try { app.save(r493); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r494 = new Record(collection);
  r494.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r494.set("questionNumber", 95);
  r494.set("question", "What is DSRC?");
  r494.set("category", "Technical");
  r494.set("difficulty", "Advanced");
  r494.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is DSRC?");
  try { app.save(r494); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r495 = new Record(collection);
  r495.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r495.set("questionNumber", 96);
  r495.set("question", "What is cooperative perception?");
  r495.set("category", "System Design");
  r495.set("difficulty", "Advanced");
  r495.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is cooperative perception?");
  try { app.save(r495); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r496 = new Record(collection);
  r496.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r496.set("questionNumber", 97);
  r496.set("question", "What is fleet data utilization?");
  r496.set("category", "Technical");
  r496.set("difficulty", "Advanced");
  r496.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is fleet data utilization?");
  try { app.save(r496); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r497 = new Record(collection);
  r497.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r497.set("questionNumber", 98);
  r497.set("question", "What is over-the-air (OTA) update for vehicles?");
  r497.set("category", "Technical");
  r497.set("difficulty", "Advanced");
  r497.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is over-the-air (OTA) update for vehicles?");
  try { app.save(r497); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r498 = new Record(collection);
  r498.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r498.set("questionNumber", 99);
  r498.set("question", "What is shadow mode testing?");
  r498.set("category", "Behavioral");
  r498.set("difficulty", "Advanced");
  r498.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is shadow mode testing?");
  try { app.save(r498); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r499 = new Record(collection);
  r499.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r499.set("questionNumber", 100);
  r499.set("question", "What is disengagement report?");
  r499.set("category", "Technical");
  r499.set("difficulty", "Advanced");
  r499.set("explanation", "Advanced level question for Autonomous Systems / Self-Driving Engineer. What is disengagement report?");
  try { app.save(r499); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
