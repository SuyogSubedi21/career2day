/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "ar-vr-engineer");
  r0.set("questionNumber", 1);
  r0.set("question", "What is AR vs VR vs MR vs XR?");
  r0.set("category", "Technical");
  r0.set("difficulty", "Beginner");
  r0.set("explanation", "Beginner level question for AR/VR Engineer. What is AR vs VR vs MR vs XR?");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "ar-vr-engineer");
  r1.set("questionNumber", 2);
  r1.set("question", "What is 6DoF vs 3DoF?");
  r1.set("category", "Technical");
  r1.set("difficulty", "Beginner");
  r1.set("explanation", "Beginner level question for AR/VR Engineer. What is 6DoF vs 3DoF?");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "ar-vr-engineer");
  r2.set("questionNumber", 3);
  r2.set("question", "What is field of view (FOV)?");
  r2.set("category", "Behavioral");
  r2.set("difficulty", "Beginner");
  r2.set("explanation", "Beginner level question for AR/VR Engineer. What is field of view (FOV)?");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "ar-vr-engineer");
  r3.set("questionNumber", 4);
  r3.set("question", "What is refresh rate and why is it critical in VR?");
  r3.set("category", "Technical");
  r3.set("difficulty", "Beginner");
  r3.set("explanation", "Beginner level question for AR/VR Engineer. What is refresh rate and why is it critical in VR?");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "ar-vr-engineer");
  r4.set("questionNumber", 5);
  r4.set("question", "What is latency in XR and why does it matter?");
  r4.set("category", "Technical");
  r4.set("difficulty", "Beginner");
  r4.set("explanation", "Beginner level question for AR/VR Engineer. What is latency in XR and why does it matter?");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "ar-vr-engineer");
  r5.set("questionNumber", 6);
  r5.set("question", "What is motion sickness in VR?");
  r5.set("category", "System Design");
  r5.set("difficulty", "Beginner");
  r5.set("explanation", "Beginner level question for AR/VR Engineer. What is motion sickness in VR?");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "ar-vr-engineer");
  r6.set("questionNumber", 7);
  r6.set("question", "What is ATW (Asynchronous TimeWarp)?");
  r6.set("category", "Technical");
  r6.set("difficulty", "Beginner");
  r6.set("explanation", "Beginner level question for AR/VR Engineer. What is ATW (Asynchronous TimeWarp)?");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "ar-vr-engineer");
  r7.set("questionNumber", 8);
  r7.set("question", "What is foveated rendering?");
  r7.set("category", "Technical");
  r7.set("difficulty", "Beginner");
  r7.set("explanation", "Beginner level question for AR/VR Engineer. What is foveated rendering?");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "ar-vr-engineer");
  r8.set("questionNumber", 9);
  r8.set("question", "What is fixed vs dynamic foveated rendering?");
  r8.set("category", "Behavioral");
  r8.set("difficulty", "Beginner");
  r8.set("explanation", "Beginner level question for AR/VR Engineer. What is fixed vs dynamic foveated rendering?");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "ar-vr-engineer");
  r9.set("questionNumber", 10);
  r9.set("question", "What is eye tracking?");
  r9.set("category", "Technical");
  r9.set("difficulty", "Beginner");
  r9.set("explanation", "Beginner level question for AR/VR Engineer. What is eye tracking?");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "ar-vr-engineer");
  r10.set("questionNumber", 11);
  r10.set("question", "What is hand tracking?");
  r10.set("category", "Technical");
  r10.set("difficulty", "Beginner");
  r10.set("explanation", "Beginner level question for AR/VR Engineer. What is hand tracking?");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "ar-vr-engineer");
  r11.set("questionNumber", 12);
  r11.set("question", "What is inside-out vs outside-in tracking?");
  r11.set("category", "System Design");
  r11.set("difficulty", "Beginner");
  r11.set("explanation", "Beginner level question for AR/VR Engineer. What is inside-out vs outside-in tracking?");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "ar-vr-engineer");
  r12.set("questionNumber", 13);
  r12.set("question", "What is SLAM?");
  r12.set("category", "Technical");
  r12.set("difficulty", "Beginner");
  r12.set("explanation", "Beginner level question for AR/VR Engineer. What is SLAM?");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "ar-vr-engineer");
  r13.set("questionNumber", 14);
  r13.set("question", "What is spatial anchors?");
  r13.set("category", "Technical");
  r13.set("difficulty", "Beginner");
  r13.set("explanation", "Beginner level question for AR/VR Engineer. What is spatial anchors?");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "ar-vr-engineer");
  r14.set("questionNumber", 15);
  r14.set("question", "What is room scale VR?");
  r14.set("category", "Behavioral");
  r14.set("difficulty", "Beginner");
  r14.set("explanation", "Beginner level question for AR/VR Engineer. What is room scale VR?");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "ar-vr-engineer");
  r15.set("questionNumber", 16);
  r15.set("question", "What is a transform in 3D?");
  r15.set("category", "Technical");
  r15.set("difficulty", "Beginner");
  r15.set("explanation", "Beginner level question for AR/VR Engineer. What is a transform in 3D?");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "ar-vr-engineer");
  r16.set("questionNumber", 17);
  r16.set("question", "What are quaternions?");
  r16.set("category", "Technical");
  r16.set("difficulty", "Beginner");
  r16.set("explanation", "Beginner level question for AR/VR Engineer. What are quaternions?");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "ar-vr-engineer");
  r17.set("questionNumber", 18);
  r17.set("question", "What is gimbal lock?");
  r17.set("category", "System Design");
  r17.set("difficulty", "Beginner");
  r17.set("explanation", "Beginner level question for AR/VR Engineer. What is gimbal lock?");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "ar-vr-engineer");
  r18.set("questionNumber", 19);
  r18.set("question", "What is a scene graph?");
  r18.set("category", "Technical");
  r18.set("difficulty", "Beginner");
  r18.set("explanation", "Beginner level question for AR/VR Engineer. What is a scene graph?");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "ar-vr-engineer");
  r19.set("questionNumber", 20);
  r19.set("question", "What is a GameObject in Unity?");
  r19.set("category", "Technical");
  r19.set("difficulty", "Beginner");
  r19.set("explanation", "Beginner level question for AR/VR Engineer. What is a GameObject in Unity?");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "ar-vr-engineer");
  r20.set("questionNumber", 21);
  r20.set("question", "What is a Component in Unity?");
  r20.set("category", "Behavioral");
  r20.set("difficulty", "Beginner");
  r20.set("explanation", "Beginner level question for AR/VR Engineer. What is a Component in Unity?");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "ar-vr-engineer");
  r21.set("questionNumber", 22);
  r21.set("question", "What is MonoBehaviour?");
  r21.set("category", "Technical");
  r21.set("difficulty", "Beginner");
  r21.set("explanation", "Beginner level question for AR/VR Engineer. What is MonoBehaviour?");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "ar-vr-engineer");
  r22.set("questionNumber", 23);
  r22.set("question", "What is the Unity lifecycle (Awake, Start, Update, FixedUpdate)?");
  r22.set("category", "Technical");
  r22.set("difficulty", "Beginner");
  r22.set("explanation", "Beginner level question for AR/VR Engineer. What is the Unity lifecycle (Awake, Start, Update, FixedUpdate)?");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "ar-vr-engineer");
  r23.set("questionNumber", 24);
  r23.set("question", "What is a shader?");
  r23.set("category", "System Design");
  r23.set("difficulty", "Beginner");
  r23.set("explanation", "Beginner level question for AR/VR Engineer. What is a shader?");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "ar-vr-engineer");
  r24.set("questionNumber", 25);
  r24.set("question", "What is vertex shader vs fragment shader?");
  r24.set("category", "Technical");
  r24.set("difficulty", "Beginner");
  r24.set("explanation", "Beginner level question for AR/VR Engineer. What is vertex shader vs fragment shader?");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "ar-vr-engineer");
  r25.set("questionNumber", 26);
  r25.set("question", "What is HLSL vs GLSL?");
  r25.set("category", "Technical");
  r25.set("difficulty", "Beginner");
  r25.set("explanation", "Beginner level question for AR/VR Engineer. What is HLSL vs GLSL?");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "ar-vr-engineer");
  r26.set("questionNumber", 27);
  r26.set("question", "What is URP vs HDRP in Unity?");
  r26.set("category", "Behavioral");
  r26.set("difficulty", "Beginner");
  r26.set("explanation", "Beginner level question for AR/VR Engineer. What is URP vs HDRP in Unity?");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "ar-vr-engineer");
  r27.set("questionNumber", 28);
  r27.set("question", "What is Nanite in Unreal Engine 5?");
  r27.set("category", "Technical");
  r27.set("difficulty", "Beginner");
  r27.set("explanation", "Beginner level question for AR/VR Engineer. What is Nanite in Unreal Engine 5?");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "ar-vr-engineer");
  r28.set("questionNumber", 29);
  r28.set("question", "What is Lumen in Unreal Engine 5?");
  r28.set("category", "Technical");
  r28.set("difficulty", "Beginner");
  r28.set("explanation", "Beginner level question for AR/VR Engineer. What is Lumen in Unreal Engine 5?");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "ar-vr-engineer");
  r29.set("questionNumber", 30);
  r29.set("question", "What is LOD (Level of Detail)?");
  r29.set("category", "System Design");
  r29.set("difficulty", "Beginner");
  r29.set("explanation", "Beginner level question for AR/VR Engineer. What is LOD (Level of Detail)?");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "ar-vr-engineer");
  r30.set("questionNumber", 31);
  r30.set("question", "What is occlusion culling?");
  r30.set("category", "Technical");
  r30.set("difficulty", "Beginner");
  r30.set("explanation", "Beginner level question for AR/VR Engineer. What is occlusion culling?");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "ar-vr-engineer");
  r31.set("questionNumber", 32);
  r31.set("question", "What is frustum culling?");
  r31.set("category", "Technical");
  r31.set("difficulty", "Beginner");
  r31.set("explanation", "Beginner level question for AR/VR Engineer. What is frustum culling?");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "ar-vr-engineer");
  r32.set("questionNumber", 33);
  r32.set("question", "What is draw call?");
  r32.set("category", "Behavioral");
  r32.set("difficulty", "Beginner");
  r32.set("explanation", "Beginner level question for AR/VR Engineer. What is draw call?");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "ar-vr-engineer");
  r33.set("questionNumber", 34);
  r33.set("question", "What is batching?");
  r33.set("category", "Technical");
  r33.set("difficulty", "Intermediate");
  r33.set("explanation", "Intermediate level question for AR/VR Engineer. What is batching?");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "ar-vr-engineer");
  r34.set("questionNumber", 35);
  r34.set("question", "What is GPU instancing?");
  r34.set("category", "Technical");
  r34.set("difficulty", "Intermediate");
  r34.set("explanation", "Intermediate level question for AR/VR Engineer. What is GPU instancing?");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "ar-vr-engineer");
  r35.set("questionNumber", 36);
  r35.set("question", "What is PBR (Physically Based Rendering)?");
  r35.set("category", "System Design");
  r35.set("difficulty", "Intermediate");
  r35.set("explanation", "Intermediate level question for AR/VR Engineer. What is PBR (Physically Based Rendering)?");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "ar-vr-engineer");
  r36.set("questionNumber", 37);
  r36.set("question", "What is real-time ray tracing?");
  r36.set("category", "Technical");
  r36.set("difficulty", "Intermediate");
  r36.set("explanation", "Intermediate level question for AR/VR Engineer. What is real-time ray tracing?");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "ar-vr-engineer");
  r37.set("questionNumber", 38);
  r37.set("question", "What is a collider vs rigid body?");
  r37.set("category", "Technical");
  r37.set("difficulty", "Intermediate");
  r37.set("explanation", "Intermediate level question for AR/VR Engineer. What is a collider vs rigid body?");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "ar-vr-engineer");
  r38.set("questionNumber", 39);
  r38.set("question", "What is a physics layer in Unity?");
  r38.set("category", "Behavioral");
  r38.set("difficulty", "Intermediate");
  r38.set("explanation", "Intermediate level question for AR/VR Engineer. What is a physics layer in Unity?");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "ar-vr-engineer");
  r39.set("questionNumber", 40);
  r39.set("question", "What is raycasting?");
  r39.set("category", "Technical");
  r39.set("difficulty", "Intermediate");
  r39.set("explanation", "Intermediate level question for AR/VR Engineer. What is raycasting?");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "ar-vr-engineer");
  r40.set("questionNumber", 41);
  r40.set("question", "What is a prefab in Unity?");
  r40.set("category", "Technical");
  r40.set("difficulty", "Intermediate");
  r40.set("explanation", "Intermediate level question for AR/VR Engineer. What is a prefab in Unity?");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "ar-vr-engineer");
  r41.set("questionNumber", 42);
  r41.set("question", "What is scriptable object?");
  r41.set("category", "System Design");
  r41.set("difficulty", "Intermediate");
  r41.set("explanation", "Intermediate level question for AR/VR Engineer. What is scriptable object?");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "ar-vr-engineer");
  r42.set("questionNumber", 43);
  r42.set("question", "What is coroutine in Unity?");
  r42.set("category", "Technical");
  r42.set("difficulty", "Intermediate");
  r42.set("explanation", "Intermediate level question for AR/VR Engineer. What is coroutine in Unity?");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "ar-vr-engineer");
  r43.set("questionNumber", 44);
  r43.set("question", "What is Unity's XR Interaction Toolkit?");
  r43.set("category", "Technical");
  r43.set("difficulty", "Intermediate");
  r43.set("explanation", "Intermediate level question for AR/VR Engineer. What is Unity's XR Interaction Toolkit?");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "ar-vr-engineer");
  r44.set("questionNumber", 45);
  r44.set("question", "What is OpenXR?");
  r44.set("category", "Behavioral");
  r44.set("difficulty", "Intermediate");
  r44.set("explanation", "Intermediate level question for AR/VR Engineer. What is OpenXR?");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "ar-vr-engineer");
  r45.set("questionNumber", 46);
  r45.set("question", "What is WebXR?");
  r45.set("category", "Technical");
  r45.set("difficulty", "Intermediate");
  r45.set("explanation", "Intermediate level question for AR/VR Engineer. What is WebXR?");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "ar-vr-engineer");
  r46.set("questionNumber", 47);
  r46.set("question", "What is Apple Vision Pro spatial computing?");
  r46.set("category", "Technical");
  r46.set("difficulty", "Intermediate");
  r46.set("explanation", "Intermediate level question for AR/VR Engineer. What is Apple Vision Pro spatial computing?");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "ar-vr-engineer");
  r47.set("questionNumber", 48);
  r47.set("question", "What is visionOS?");
  r47.set("category", "System Design");
  r47.set("difficulty", "Intermediate");
  r47.set("explanation", "Intermediate level question for AR/VR Engineer. What is visionOS?");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "ar-vr-engineer");
  r48.set("questionNumber", 49);
  r48.set("question", "What is SwiftUI for visionOS?");
  r48.set("category", "Technical");
  r48.set("difficulty", "Intermediate");
  r48.set("explanation", "Intermediate level question for AR/VR Engineer. What is SwiftUI for visionOS?");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "ar-vr-engineer");
  r49.set("questionNumber", 50);
  r49.set("question", "What is RealityKit?");
  r49.set("category", "Technical");
  r49.set("difficulty", "Intermediate");
  r49.set("explanation", "Intermediate level question for AR/VR Engineer. What is RealityKit?");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "ar-vr-engineer");
  r50.set("questionNumber", 51);
  r50.set("question", "What is ARKit?");
  r50.set("category", "Behavioral");
  r50.set("difficulty", "Intermediate");
  r50.set("explanation", "Intermediate level question for AR/VR Engineer. What is ARKit?");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "ar-vr-engineer");
  r51.set("questionNumber", 52);
  r51.set("question", "What is ARCore?");
  r51.set("category", "Technical");
  r51.set("difficulty", "Intermediate");
  r51.set("explanation", "Intermediate level question for AR/VR Engineer. What is ARCore?");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "ar-vr-engineer");
  r52.set("questionNumber", 53);
  r52.set("question", "What is plane detection in AR?");
  r52.set("category", "Technical");
  r52.set("difficulty", "Intermediate");
  r52.set("explanation", "Intermediate level question for AR/VR Engineer. What is plane detection in AR?");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "ar-vr-engineer");
  r53.set("questionNumber", 54);
  r53.set("question", "What is image recognition in AR?");
  r53.set("category", "System Design");
  r53.set("difficulty", "Intermediate");
  r53.set("explanation", "Intermediate level question for AR/VR Engineer. What is image recognition in AR?");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "ar-vr-engineer");
  r54.set("questionNumber", 55);
  r54.set("question", "What is object tracking in AR?");
  r54.set("category", "Technical");
  r54.set("difficulty", "Intermediate");
  r54.set("explanation", "Intermediate level question for AR/VR Engineer. What is object tracking in AR?");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "ar-vr-engineer");
  r55.set("questionNumber", 56);
  r55.set("question", "What is LiDAR scanner use in AR?");
  r55.set("category", "Technical");
  r55.set("difficulty", "Intermediate");
  r55.set("explanation", "Intermediate level question for AR/VR Engineer. What is LiDAR scanner use in AR?");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "ar-vr-engineer");
  r56.set("questionNumber", 57);
  r56.set("question", "What is an AR anchor?");
  r56.set("category", "Behavioral");
  r56.set("difficulty", "Intermediate");
  r56.set("explanation", "Intermediate level question for AR/VR Engineer. What is an AR anchor?");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "ar-vr-engineer");
  r57.set("questionNumber", 58);
  r57.set("question", "What is scene understanding?");
  r57.set("category", "Technical");
  r57.set("difficulty", "Intermediate");
  r57.set("explanation", "Intermediate level question for AR/VR Engineer. What is scene understanding?");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "ar-vr-engineer");
  r58.set("questionNumber", 59);
  r58.set("question", "What is occlusion in AR?");
  r58.set("category", "Technical");
  r58.set("difficulty", "Intermediate");
  r58.set("explanation", "Intermediate level question for AR/VR Engineer. What is occlusion in AR?");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "ar-vr-engineer");
  r59.set("questionNumber", 60);
  r59.set("question", "What is spatial audio?");
  r59.set("category", "System Design");
  r59.set("difficulty", "Intermediate");
  r59.set("explanation", "Intermediate level question for AR/VR Engineer. What is spatial audio?");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "ar-vr-engineer");
  r60.set("questionNumber", 61);
  r60.set("question", "What is haptic feedback in XR?");
  r60.set("category", "Technical");
  r60.set("difficulty", "Intermediate");
  r60.set("explanation", "Intermediate level question for AR/VR Engineer. What is haptic feedback in XR?");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "ar-vr-engineer");
  r61.set("questionNumber", 62);
  r61.set("question", "What is a hologram?");
  r61.set("category", "Technical");
  r61.set("difficulty", "Intermediate");
  r61.set("explanation", "Intermediate level question for AR/VR Engineer. What is a hologram?");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "ar-vr-engineer");
  r62.set("questionNumber", 63);
  r62.set("question", "What is Microsoft HoloLens?");
  r62.set("category", "Behavioral");
  r62.set("difficulty", "Intermediate");
  r62.set("explanation", "Intermediate level question for AR/VR Engineer. What is Microsoft HoloLens?");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "ar-vr-engineer");
  r63.set("questionNumber", 64);
  r63.set("question", "What is Magic Leap?");
  r63.set("category", "Technical");
  r63.set("difficulty", "Intermediate");
  r63.set("explanation", "Intermediate level question for AR/VR Engineer. What is Magic Leap?");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "ar-vr-engineer");
  r64.set("questionNumber", 65);
  r64.set("question", "What is Meta Quest?");
  r64.set("category", "Technical");
  r64.set("difficulty", "Intermediate");
  r64.set("explanation", "Intermediate level question for AR/VR Engineer. What is Meta Quest?");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "ar-vr-engineer");
  r65.set("questionNumber", 66);
  r65.set("question", "What is PlayStation VR?");
  r65.set("category", "System Design");
  r65.set("difficulty", "Intermediate");
  r65.set("explanation", "Intermediate level question for AR/VR Engineer. What is PlayStation VR?");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "ar-vr-engineer");
  r66.set("questionNumber", 67);
  r66.set("question", "What is PCVR vs standalone VR?");
  r66.set("category", "Technical");
  r66.set("difficulty", "Intermediate");
  r66.set("explanation", "Intermediate level question for AR/VR Engineer. What is PCVR vs standalone VR?");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "ar-vr-engineer");
  r67.set("questionNumber", 68);
  r67.set("question", "What is streaming VR (ALVR, Virtual Desktop)?");
  r67.set("category", "Technical");
  r67.set("difficulty", "Advanced");
  r67.set("explanation", "Advanced level question for AR/VR Engineer. What is streaming VR (ALVR, Virtual Desktop)?");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "ar-vr-engineer");
  r68.set("questionNumber", 69);
  r68.set("question", "What is photogrammetry?");
  r68.set("category", "Behavioral");
  r68.set("difficulty", "Advanced");
  r68.set("explanation", "Advanced level question for AR/VR Engineer. What is photogrammetry?");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "ar-vr-engineer");
  r69.set("questionNumber", 70);
  r69.set("question", "What is volumetric video?");
  r69.set("category", "Technical");
  r69.set("difficulty", "Advanced");
  r69.set("explanation", "Advanced level question for AR/VR Engineer. What is volumetric video?");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "ar-vr-engineer");
  r70.set("questionNumber", 71);
  r70.set("question", "What is 360-degree video?");
  r70.set("category", "Technical");
  r70.set("difficulty", "Advanced");
  r70.set("explanation", "Advanced level question for AR/VR Engineer. What is 360-degree video?");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "ar-vr-engineer");
  r71.set("questionNumber", 72);
  r71.set("question", "What is a skybox?");
  r71.set("category", "System Design");
  r71.set("difficulty", "Advanced");
  r71.set("explanation", "Advanced level question for AR/VR Engineer. What is a skybox?");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "ar-vr-engineer");
  r72.set("questionNumber", 73);
  r72.set("question", "What is a 3D model format (FBX, OBJ, glTF)?");
  r72.set("category", "Technical");
  r72.set("difficulty", "Advanced");
  r72.set("explanation", "Advanced level question for AR/VR Engineer. What is a 3D model format (FBX, OBJ, glTF)?");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "ar-vr-engineer");
  r73.set("questionNumber", 74);
  r73.set("question", "What is Blender used for in XR?");
  r73.set("category", "Technical");
  r73.set("difficulty", "Advanced");
  r73.set("explanation", "Advanced level question for AR/VR Engineer. What is Blender used for in XR?");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "ar-vr-engineer");
  r74.set("questionNumber", 75);
  r74.set("question", "What is UV mapping?");
  r74.set("category", "Behavioral");
  r74.set("difficulty", "Advanced");
  r74.set("explanation", "Advanced level question for AR/VR Engineer. What is UV mapping?");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "ar-vr-engineer");
  r75.set("questionNumber", 76);
  r75.set("question", "What is texture atlas?");
  r75.set("category", "Technical");
  r75.set("difficulty", "Advanced");
  r75.set("explanation", "Advanced level question for AR/VR Engineer. What is texture atlas?");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "ar-vr-engineer");
  r76.set("questionNumber", 77);
  r76.set("question", "What is normal map?");
  r76.set("category", "Technical");
  r76.set("difficulty", "Advanced");
  r76.set("explanation", "Advanced level question for AR/VR Engineer. What is normal map?");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "ar-vr-engineer");
  r77.set("questionNumber", 78);
  r77.set("question", "What is occlusion map?");
  r77.set("category", "System Design");
  r77.set("difficulty", "Advanced");
  r77.set("explanation", "Advanced level question for AR/VR Engineer. What is occlusion map?");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "ar-vr-engineer");
  r78.set("questionNumber", 79);
  r78.set("question", "What is a particle system?");
  r78.set("category", "Technical");
  r78.set("difficulty", "Advanced");
  r78.set("explanation", "Advanced level question for AR/VR Engineer. What is a particle system?");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "ar-vr-engineer");
  r79.set("questionNumber", 80);
  r79.set("question", "What is an avatar in XR?");
  r79.set("category", "Technical");
  r79.set("difficulty", "Advanced");
  r79.set("explanation", "Advanced level question for AR/VR Engineer. What is an avatar in XR?");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "ar-vr-engineer");
  r80.set("questionNumber", 81);
  r80.set("question", "What is inverse kinematics (IK)?");
  r80.set("category", "Behavioral");
  r80.set("difficulty", "Advanced");
  r80.set("explanation", "Advanced level question for AR/VR Engineer. What is inverse kinematics (IK)?");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "ar-vr-engineer");
  r81.set("questionNumber", 82);
  r81.set("question", "What is motion capture?");
  r81.set("category", "Technical");
  r81.set("difficulty", "Advanced");
  r81.set("explanation", "Advanced level question for AR/VR Engineer. What is motion capture?");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "ar-vr-engineer");
  r82.set("questionNumber", 83);
  r82.set("question", "What is the metaverse?");
  r82.set("category", "Technical");
  r82.set("difficulty", "Advanced");
  r82.set("explanation", "Advanced level question for AR/VR Engineer. What is the metaverse?");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "ar-vr-engineer");
  r83.set("questionNumber", 84);
  r83.set("question", "What is a virtual world?");
  r83.set("category", "System Design");
  r83.set("difficulty", "Advanced");
  r83.set("explanation", "Advanced level question for AR/VR Engineer. What is a virtual world?");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "ar-vr-engineer");
  r84.set("questionNumber", 85);
  r84.set("question", "What is WebGL?");
  r84.set("category", "Technical");
  r84.set("difficulty", "Advanced");
  r84.set("explanation", "Advanced level question for AR/VR Engineer. What is WebGL?");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "ar-vr-engineer");
  r85.set("questionNumber", 86);
  r85.set("question", "What is Three.js for WebXR?");
  r85.set("category", "Technical");
  r85.set("difficulty", "Advanced");
  r85.set("explanation", "Advanced level question for AR/VR Engineer. What is Three.js for WebXR?");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "ar-vr-engineer");
  r86.set("questionNumber", 87);
  r86.set("question", "What is A-Frame?");
  r86.set("category", "Behavioral");
  r86.set("difficulty", "Advanced");
  r86.set("explanation", "Advanced level question for AR/VR Engineer. What is A-Frame?");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "ar-vr-engineer");
  r87.set("questionNumber", 88);
  r87.set("question", "What is Babylon.js?");
  r87.set("category", "Technical");
  r87.set("difficulty", "Advanced");
  r87.set("explanation", "Advanced level question for AR/VR Engineer. What is Babylon.js?");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "ar-vr-engineer");
  r88.set("questionNumber", 89);
  r88.set("question", "What is Niantic's platform?");
  r88.set("category", "Technical");
  r88.set("difficulty", "Advanced");
  r88.set("explanation", "Advanced level question for AR/VR Engineer. What is Niantic's platform?");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "ar-vr-engineer");
  r89.set("questionNumber", 90);
  r89.set("question", "What is AR in enterprise (training, design)?");
  r89.set("category", "System Design");
  r89.set("difficulty", "Advanced");
  r89.set("explanation", "Advanced level question for AR/VR Engineer. What is AR in enterprise (training, design)?");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "ar-vr-engineer");
  r90.set("questionNumber", 91);
  r90.set("question", "What is digital twin in XR?");
  r90.set("category", "Technical");
  r90.set("difficulty", "Advanced");
  r90.set("explanation", "Advanced level question for AR/VR Engineer. What is digital twin in XR?");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "ar-vr-engineer");
  r91.set("questionNumber", 92);
  r91.set("question", "What is XR for healthcare?");
  r91.set("category", "Technical");
  r91.set("difficulty", "Advanced");
  r91.set("explanation", "Advanced level question for AR/VR Engineer. What is XR for healthcare?");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "ar-vr-engineer");
  r92.set("questionNumber", 93);
  r92.set("question", "What is XR for education?");
  r92.set("category", "Behavioral");
  r92.set("difficulty", "Advanced");
  r92.set("explanation", "Advanced level question for AR/VR Engineer. What is XR for education?");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "ar-vr-engineer");
  r93.set("questionNumber", 94);
  r93.set("question", "What is presence in VR?");
  r93.set("category", "Technical");
  r93.set("difficulty", "Advanced");
  r93.set("explanation", "Advanced level question for AR/VR Engineer. What is presence in VR?");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "ar-vr-engineer");
  r94.set("questionNumber", 95);
  r94.set("question", "What is immersion?");
  r94.set("category", "Technical");
  r94.set("difficulty", "Advanced");
  r94.set("explanation", "Advanced level question for AR/VR Engineer. What is immersion?");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "ar-vr-engineer");
  r95.set("questionNumber", 96);
  r95.set("question", "What is the uncanny valley?");
  r95.set("category", "System Design");
  r95.set("difficulty", "Advanced");
  r95.set("explanation", "Advanced level question for AR/VR Engineer. What is the uncanny valley?");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "ar-vr-engineer");
  r96.set("questionNumber", 97);
  r96.set("question", "What is social VR?");
  r96.set("category", "Technical");
  r96.set("difficulty", "Advanced");
  r96.set("explanation", "Advanced level question for AR/VR Engineer. What is social VR?");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "ar-vr-engineer");
  r97.set("questionNumber", 98);
  r97.set("question", "What is co-location?");
  r97.set("category", "Technical");
  r97.set("difficulty", "Advanced");
  r97.set("explanation", "Advanced level question for AR/VR Engineer. What is co-location?");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "ar-vr-engineer");
  r98.set("questionNumber", 99);
  r98.set("question", "What is passthrough in VR?");
  r98.set("category", "Behavioral");
  r98.set("difficulty", "Advanced");
  r98.set("explanation", "Advanced level question for AR/VR Engineer. What is passthrough in VR?");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "ar-vr-engineer");
  r99.set("questionNumber", 100);
  r99.set("question", "What is mixed reality passthrough?");
  r99.set("category", "Technical");
  r99.set("difficulty", "Advanced");
  r99.set("explanation", "Advanced level question for AR/VR Engineer. What is mixed reality passthrough?");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "robotics-engineer");
  r100.set("questionNumber", 1);
  r100.set("question", "What is ROS?");
  r100.set("category", "Technical");
  r100.set("difficulty", "Beginner");
  r100.set("explanation", "Beginner level question for Robotics Engineer. What is ROS?");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "robotics-engineer");
  r101.set("questionNumber", 2);
  r101.set("question", "What is ROS2 vs ROS1?");
  r101.set("category", "Technical");
  r101.set("difficulty", "Beginner");
  r101.set("explanation", "Beginner level question for Robotics Engineer. What is ROS2 vs ROS1?");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "robotics-engineer");
  r102.set("questionNumber", 3);
  r102.set("question", "What is a ROS node?");
  r102.set("category", "Behavioral");
  r102.set("difficulty", "Beginner");
  r102.set("explanation", "Beginner level question for Robotics Engineer. What is a ROS node?");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "robotics-engineer");
  r103.set("questionNumber", 4);
  r103.set("question", "What is a topic in ROS?");
  r103.set("category", "Technical");
  r103.set("difficulty", "Beginner");
  r103.set("explanation", "Beginner level question for Robotics Engineer. What is a topic in ROS?");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "robotics-engineer");
  r104.set("questionNumber", 5);
  r104.set("question", "What is a service in ROS?");
  r104.set("category", "Technical");
  r104.set("difficulty", "Beginner");
  r104.set("explanation", "Beginner level question for Robotics Engineer. What is a service in ROS?");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r105 = new Record(collection);
  r105.set("careerSlug", "robotics-engineer");
  r105.set("questionNumber", 6);
  r105.set("question", "What is an action in ROS?");
  r105.set("category", "System Design");
  r105.set("difficulty", "Beginner");
  r105.set("explanation", "Beginner level question for Robotics Engineer. What is an action in ROS?");
  try { app.save(r105); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r106 = new Record(collection);
  r106.set("careerSlug", "robotics-engineer");
  r106.set("questionNumber", 7);
  r106.set("question", "What is roslaunch?");
  r106.set("category", "Technical");
  r106.set("difficulty", "Beginner");
  r106.set("explanation", "Beginner level question for Robotics Engineer. What is roslaunch?");
  try { app.save(r106); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r107 = new Record(collection);
  r107.set("careerSlug", "robotics-engineer");
  r107.set("questionNumber", 8);
  r107.set("question", "What is URDF?");
  r107.set("category", "Technical");
  r107.set("difficulty", "Beginner");
  r107.set("explanation", "Beginner level question for Robotics Engineer. What is URDF?");
  try { app.save(r107); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r108 = new Record(collection);
  r108.set("careerSlug", "robotics-engineer");
  r108.set("questionNumber", 9);
  r108.set("question", "What is TF (transform) in ROS?");
  r108.set("category", "Behavioral");
  r108.set("difficulty", "Beginner");
  r108.set("explanation", "Beginner level question for Robotics Engineer. What is TF (transform) in ROS?");
  try { app.save(r108); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r109 = new Record(collection);
  r109.set("careerSlug", "robotics-engineer");
  r109.set("questionNumber", 10);
  r109.set("question", "What is a robot model?");
  r109.set("category", "Technical");
  r109.set("difficulty", "Beginner");
  r109.set("explanation", "Beginner level question for Robotics Engineer. What is a robot model?");
  try { app.save(r109); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r110 = new Record(collection);
  r110.set("careerSlug", "robotics-engineer");
  r110.set("questionNumber", 11);
  r110.set("question", "What is forward kinematics?");
  r110.set("category", "Technical");
  r110.set("difficulty", "Beginner");
  r110.set("explanation", "Beginner level question for Robotics Engineer. What is forward kinematics?");
  try { app.save(r110); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r111 = new Record(collection);
  r111.set("careerSlug", "robotics-engineer");
  r111.set("questionNumber", 12);
  r111.set("question", "What is inverse kinematics?");
  r111.set("category", "System Design");
  r111.set("difficulty", "Beginner");
  r111.set("explanation", "Beginner level question for Robotics Engineer. What is inverse kinematics?");
  try { app.save(r111); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r112 = new Record(collection);
  r112.set("careerSlug", "robotics-engineer");
  r112.set("questionNumber", 13);
  r112.set("question", "What is a Denavit-Hartenberg parameter?");
  r112.set("category", "Technical");
  r112.set("difficulty", "Beginner");
  r112.set("explanation", "Beginner level question for Robotics Engineer. What is a Denavit-Hartenberg parameter?");
  try { app.save(r112); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r113 = new Record(collection);
  r113.set("careerSlug", "robotics-engineer");
  r113.set("questionNumber", 14);
  r113.set("question", "What is a jacobian?");
  r113.set("category", "Technical");
  r113.set("difficulty", "Beginner");
  r113.set("explanation", "Beginner level question for Robotics Engineer. What is a jacobian?");
  try { app.save(r113); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r114 = new Record(collection);
  r114.set("careerSlug", "robotics-engineer");
  r114.set("questionNumber", 15);
  r114.set("question", "What is a PID controller?");
  r114.set("category", "Behavioral");
  r114.set("difficulty", "Beginner");
  r114.set("explanation", "Beginner level question for Robotics Engineer. What is a PID controller?");
  try { app.save(r114); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r115 = new Record(collection);
  r115.set("careerSlug", "robotics-engineer");
  r115.set("questionNumber", 16);
  r115.set("question", "What is P, I, D terms?");
  r115.set("category", "Technical");
  r115.set("difficulty", "Beginner");
  r115.set("explanation", "Beginner level question for Robotics Engineer. What is P, I, D terms?");
  try { app.save(r115); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r116 = new Record(collection);
  r116.set("careerSlug", "robotics-engineer");
  r116.set("questionNumber", 17);
  r116.set("question", "What is control loop?");
  r116.set("category", "Technical");
  r116.set("difficulty", "Beginner");
  r116.set("explanation", "Beginner level question for Robotics Engineer. What is control loop?");
  try { app.save(r116); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r117 = new Record(collection);
  r117.set("careerSlug", "robotics-engineer");
  r117.set("questionNumber", 18);
  r117.set("question", "What is feedback control?");
  r117.set("category", "System Design");
  r117.set("difficulty", "Beginner");
  r117.set("explanation", "Beginner level question for Robotics Engineer. What is feedback control?");
  try { app.save(r117); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r118 = new Record(collection);
  r118.set("careerSlug", "robotics-engineer");
  r118.set("questionNumber", 19);
  r118.set("question", "What is feedforward control?");
  r118.set("category", "Technical");
  r118.set("difficulty", "Beginner");
  r118.set("explanation", "Beginner level question for Robotics Engineer. What is feedforward control?");
  try { app.save(r118); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r119 = new Record(collection);
  r119.set("careerSlug", "robotics-engineer");
  r119.set("questionNumber", 20);
  r119.set("question", "What is a state machine?");
  r119.set("category", "Technical");
  r119.set("difficulty", "Beginner");
  r119.set("explanation", "Beginner level question for Robotics Engineer. What is a state machine?");
  try { app.save(r119); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r120 = new Record(collection);
  r120.set("careerSlug", "robotics-engineer");
  r120.set("questionNumber", 21);
  r120.set("question", "What is behavior tree?");
  r120.set("category", "Behavioral");
  r120.set("difficulty", "Beginner");
  r120.set("explanation", "Beginner level question for Robotics Engineer. What is behavior tree?");
  try { app.save(r120); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r121 = new Record(collection);
  r121.set("careerSlug", "robotics-engineer");
  r121.set("questionNumber", 22);
  r121.set("question", "What is SLAM?");
  r121.set("category", "Technical");
  r121.set("difficulty", "Beginner");
  r121.set("explanation", "Beginner level question for Robotics Engineer. What is SLAM?");
  try { app.save(r121); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r122 = new Record(collection);
  r122.set("careerSlug", "robotics-engineer");
  r122.set("questionNumber", 23);
  r122.set("question", "What is LIDAR?");
  r122.set("category", "Technical");
  r122.set("difficulty", "Beginner");
  r122.set("explanation", "Beginner level question for Robotics Engineer. What is LIDAR?");
  try { app.save(r122); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r123 = new Record(collection);
  r123.set("careerSlug", "robotics-engineer");
  r123.set("questionNumber", 24);
  r123.set("question", "What is point cloud?");
  r123.set("category", "System Design");
  r123.set("difficulty", "Beginner");
  r123.set("explanation", "Beginner level question for Robotics Engineer. What is point cloud?");
  try { app.save(r123); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r124 = new Record(collection);
  r124.set("careerSlug", "robotics-engineer");
  r124.set("questionNumber", 25);
  r124.set("question", "What is ICP (Iterative Closest Point)?");
  r124.set("category", "Technical");
  r124.set("difficulty", "Beginner");
  r124.set("explanation", "Beginner level question for Robotics Engineer. What is ICP (Iterative Closest Point)?");
  try { app.save(r124); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r125 = new Record(collection);
  r125.set("careerSlug", "robotics-engineer");
  r125.set("questionNumber", 26);
  r125.set("question", "What is occupancy grid?");
  r125.set("category", "Technical");
  r125.set("difficulty", "Beginner");
  r125.set("explanation", "Beginner level question for Robotics Engineer. What is occupancy grid?");
  try { app.save(r125); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r126 = new Record(collection);
  r126.set("careerSlug", "robotics-engineer");
  r126.set("questionNumber", 27);
  r126.set("question", "What is a costmap?");
  r126.set("category", "Behavioral");
  r126.set("difficulty", "Beginner");
  r126.set("explanation", "Beginner level question for Robotics Engineer. What is a costmap?");
  try { app.save(r126); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r127 = new Record(collection);
  r127.set("careerSlug", "robotics-engineer");
  r127.set("questionNumber", 28);
  r127.set("question", "What is path planning?");
  r127.set("category", "Technical");
  r127.set("difficulty", "Beginner");
  r127.set("explanation", "Beginner level question for Robotics Engineer. What is path planning?");
  try { app.save(r127); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r128 = new Record(collection);
  r128.set("careerSlug", "robotics-engineer");
  r128.set("questionNumber", 29);
  r128.set("question", "What is A* algorithm?");
  r128.set("category", "Technical");
  r128.set("difficulty", "Beginner");
  r128.set("explanation", "Beginner level question for Robotics Engineer. What is A* algorithm?");
  try { app.save(r128); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r129 = new Record(collection);
  r129.set("careerSlug", "robotics-engineer");
  r129.set("questionNumber", 30);
  r129.set("question", "What is RRT?");
  r129.set("category", "System Design");
  r129.set("difficulty", "Beginner");
  r129.set("explanation", "Beginner level question for Robotics Engineer. What is RRT?");
  try { app.save(r129); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r130 = new Record(collection);
  r130.set("careerSlug", "robotics-engineer");
  r130.set("questionNumber", 31);
  r130.set("question", "What is PRM?");
  r130.set("category", "Technical");
  r130.set("difficulty", "Beginner");
  r130.set("explanation", "Beginner level question for Robotics Engineer. What is PRM?");
  try { app.save(r130); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r131 = new Record(collection);
  r131.set("careerSlug", "robotics-engineer");
  r131.set("questionNumber", 32);
  r131.set("question", "What is motion planning vs path planning?");
  r131.set("category", "Technical");
  r131.set("difficulty", "Beginner");
  r131.set("explanation", "Beginner level question for Robotics Engineer. What is motion planning vs path planning?");
  try { app.save(r131); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r132 = new Record(collection);
  r132.set("careerSlug", "robotics-engineer");
  r132.set("questionNumber", 33);
  r132.set("question", "What is trajectory optimization?");
  r132.set("category", "Behavioral");
  r132.set("difficulty", "Beginner");
  r132.set("explanation", "Beginner level question for Robotics Engineer. What is trajectory optimization?");
  try { app.save(r132); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r133 = new Record(collection);
  r133.set("careerSlug", "robotics-engineer");
  r133.set("questionNumber", 34);
  r133.set("question", "What is MPC (Model Predictive Control)?");
  r133.set("category", "Technical");
  r133.set("difficulty", "Intermediate");
  r133.set("explanation", "Intermediate level question for Robotics Engineer. What is MPC (Model Predictive Control)?");
  try { app.save(r133); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r134 = new Record(collection);
  r134.set("careerSlug", "robotics-engineer");
  r134.set("questionNumber", 35);
  r134.set("question", "What is an IMU?");
  r134.set("category", "Technical");
  r134.set("difficulty", "Intermediate");
  r134.set("explanation", "Intermediate level question for Robotics Engineer. What is an IMU?");
  try { app.save(r134); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r135 = new Record(collection);
  r135.set("careerSlug", "robotics-engineer");
  r135.set("questionNumber", 36);
  r135.set("question", "What is sensor fusion?");
  r135.set("category", "System Design");
  r135.set("difficulty", "Intermediate");
  r135.set("explanation", "Intermediate level question for Robotics Engineer. What is sensor fusion?");
  try { app.save(r135); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r136 = new Record(collection);
  r136.set("careerSlug", "robotics-engineer");
  r136.set("questionNumber", 37);
  r136.set("question", "What is Kalman Filter?");
  r136.set("category", "Technical");
  r136.set("difficulty", "Intermediate");
  r136.set("explanation", "Intermediate level question for Robotics Engineer. What is Kalman Filter?");
  try { app.save(r136); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r137 = new Record(collection);
  r137.set("careerSlug", "robotics-engineer");
  r137.set("questionNumber", 38);
  r137.set("question", "What is Extended Kalman Filter?");
  r137.set("category", "Technical");
  r137.set("difficulty", "Intermediate");
  r137.set("explanation", "Intermediate level question for Robotics Engineer. What is Extended Kalman Filter?");
  try { app.save(r137); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r138 = new Record(collection);
  r138.set("careerSlug", "robotics-engineer");
  r138.set("questionNumber", 39);
  r138.set("question", "What is particle filter?");
  r138.set("category", "Behavioral");
  r138.set("difficulty", "Intermediate");
  r138.set("explanation", "Intermediate level question for Robotics Engineer. What is particle filter?");
  try { app.save(r138); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r139 = new Record(collection);
  r139.set("careerSlug", "robotics-engineer");
  r139.set("questionNumber", 40);
  r139.set("question", "What is dead reckoning?");
  r139.set("category", "Technical");
  r139.set("difficulty", "Intermediate");
  r139.set("explanation", "Intermediate level question for Robotics Engineer. What is dead reckoning?");
  try { app.save(r139); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r140 = new Record(collection);
  r140.set("careerSlug", "robotics-engineer");
  r140.set("questionNumber", 41);
  r140.set("question", "What is odometry?");
  r140.set("category", "Technical");
  r140.set("difficulty", "Intermediate");
  r140.set("explanation", "Intermediate level question for Robotics Engineer. What is odometry?");
  try { app.save(r140); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r141 = new Record(collection);
  r141.set("careerSlug", "robotics-engineer");
  r141.set("questionNumber", 42);
  r141.set("question", "What is wheel encoder?");
  r141.set("category", "System Design");
  r141.set("difficulty", "Intermediate");
  r141.set("explanation", "Intermediate level question for Robotics Engineer. What is wheel encoder?");
  try { app.save(r141); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r142 = new Record(collection);
  r142.set("careerSlug", "robotics-engineer");
  r142.set("questionNumber", 43);
  r142.set("question", "What is GPS in robotics?");
  r142.set("category", "Technical");
  r142.set("difficulty", "Intermediate");
  r142.set("explanation", "Intermediate level question for Robotics Engineer. What is GPS in robotics?");
  try { app.save(r142); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r143 = new Record(collection);
  r143.set("careerSlug", "robotics-engineer");
  r143.set("questionNumber", 44);
  r143.set("question", "What is RealSense?");
  r143.set("category", "Technical");
  r143.set("difficulty", "Intermediate");
  r143.set("explanation", "Intermediate level question for Robotics Engineer. What is RealSense?");
  try { app.save(r143); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r144 = new Record(collection);
  r144.set("careerSlug", "robotics-engineer");
  r144.set("questionNumber", 45);
  r144.set("question", "What is stereo vision?");
  r144.set("category", "Behavioral");
  r144.set("difficulty", "Intermediate");
  r144.set("explanation", "Intermediate level question for Robotics Engineer. What is stereo vision?");
  try { app.save(r144); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r145 = new Record(collection);
  r145.set("careerSlug", "robotics-engineer");
  r145.set("questionNumber", 46);
  r145.set("question", "What is structured light?");
  r145.set("category", "Technical");
  r145.set("difficulty", "Intermediate");
  r145.set("explanation", "Intermediate level question for Robotics Engineer. What is structured light?");
  try { app.save(r145); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r146 = new Record(collection);
  r146.set("careerSlug", "robotics-engineer");
  r146.set("questionNumber", 47);
  r146.set("question", "What is ToF sensor?");
  r146.set("category", "Technical");
  r146.set("difficulty", "Intermediate");
  r146.set("explanation", "Intermediate level question for Robotics Engineer. What is ToF sensor?");
  try { app.save(r146); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r147 = new Record(collection);
  r147.set("careerSlug", "robotics-engineer");
  r147.set("questionNumber", 48);
  r147.set("question", "What is OpenCV?");
  r147.set("category", "System Design");
  r147.set("difficulty", "Intermediate");
  r147.set("explanation", "Intermediate level question for Robotics Engineer. What is OpenCV?");
  try { app.save(r147); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r148 = new Record(collection);
  r148.set("careerSlug", "robotics-engineer");
  r148.set("questionNumber", 49);
  r148.set("question", "What is object detection in robotics?");
  r148.set("category", "Technical");
  r148.set("difficulty", "Intermediate");
  r148.set("explanation", "Intermediate level question for Robotics Engineer. What is object detection in robotics?");
  try { app.save(r148); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r149 = new Record(collection);
  r149.set("careerSlug", "robotics-engineer");
  r149.set("questionNumber", 50);
  r149.set("question", "What is YOLO?");
  r149.set("category", "Technical");
  r149.set("difficulty", "Intermediate");
  r149.set("explanation", "Intermediate level question for Robotics Engineer. What is YOLO?");
  try { app.save(r149); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r150 = new Record(collection);
  r150.set("careerSlug", "robotics-engineer");
  r150.set("questionNumber", 51);
  r150.set("question", "What is pose estimation?");
  r150.set("category", "Behavioral");
  r150.set("difficulty", "Intermediate");
  r150.set("explanation", "Intermediate level question for Robotics Engineer. What is pose estimation?");
  try { app.save(r150); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r151 = new Record(collection);
  r151.set("careerSlug", "robotics-engineer");
  r151.set("questionNumber", 52);
  r151.set("question", "What is 6DoF pose estimation?");
  r151.set("category", "Technical");
  r151.set("difficulty", "Intermediate");
  r151.set("explanation", "Intermediate level question for Robotics Engineer. What is 6DoF pose estimation?");
  try { app.save(r151); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r152 = new Record(collection);
  r152.set("careerSlug", "robotics-engineer");
  r152.set("questionNumber", 53);
  r152.set("question", "What is grasp planning?");
  r152.set("category", "Technical");
  r152.set("difficulty", "Intermediate");
  r152.set("explanation", "Intermediate level question for Robotics Engineer. What is grasp planning?");
  try { app.save(r152); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r153 = new Record(collection);
  r153.set("careerSlug", "robotics-engineer");
  r153.set("questionNumber", 54);
  r153.set("question", "What is force torque sensor?");
  r153.set("category", "System Design");
  r153.set("difficulty", "Intermediate");
  r153.set("explanation", "Intermediate level question for Robotics Engineer. What is force torque sensor?");
  try { app.save(r153); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r154 = new Record(collection);
  r154.set("careerSlug", "robotics-engineer");
  r154.set("questionNumber", 55);
  r154.set("question", "What is compliance control?");
  r154.set("category", "Technical");
  r154.set("difficulty", "Intermediate");
  r154.set("explanation", "Intermediate level question for Robotics Engineer. What is compliance control?");
  try { app.save(r154); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r155 = new Record(collection);
  r155.set("careerSlug", "robotics-engineer");
  r155.set("questionNumber", 56);
  r155.set("question", "What is impedance control?");
  r155.set("category", "Technical");
  r155.set("difficulty", "Intermediate");
  r155.set("explanation", "Intermediate level question for Robotics Engineer. What is impedance control?");
  try { app.save(r155); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r156 = new Record(collection);
  r156.set("careerSlug", "robotics-engineer");
  r156.set("questionNumber", 57);
  r156.set("question", "What is admittance control?");
  r156.set("category", "Behavioral");
  r156.set("difficulty", "Intermediate");
  r156.set("explanation", "Intermediate level question for Robotics Engineer. What is admittance control?");
  try { app.save(r156); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r157 = new Record(collection);
  r157.set("careerSlug", "robotics-engineer");
  r157.set("questionNumber", 58);
  r157.set("question", "What is teleoperation?");
  r157.set("category", "Technical");
  r157.set("difficulty", "Intermediate");
  r157.set("explanation", "Intermediate level question for Robotics Engineer. What is teleoperation?");
  try { app.save(r157); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r158 = new Record(collection);
  r158.set("careerSlug", "robotics-engineer");
  r158.set("questionNumber", 59);
  r158.set("question", "What is autonomous navigation?");
  r158.set("category", "Technical");
  r158.set("difficulty", "Intermediate");
  r158.set("explanation", "Intermediate level question for Robotics Engineer. What is autonomous navigation?");
  try { app.save(r158); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r159 = new Record(collection);
  r159.set("careerSlug", "robotics-engineer");
  r159.set("questionNumber", 60);
  r159.set("question", "What is MoveIt?");
  r159.set("category", "System Design");
  r159.set("difficulty", "Intermediate");
  r159.set("explanation", "Intermediate level question for Robotics Engineer. What is MoveIt?");
  try { app.save(r159); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r160 = new Record(collection);
  r160.set("careerSlug", "robotics-engineer");
  r160.set("questionNumber", 61);
  r160.set("question", "What is Nav2?");
  r160.set("category", "Technical");
  r160.set("difficulty", "Intermediate");
  r160.set("explanation", "Intermediate level question for Robotics Engineer. What is Nav2?");
  try { app.save(r160); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r161 = new Record(collection);
  r161.set("careerSlug", "robotics-engineer");
  r161.set("questionNumber", 62);
  r161.set("question", "What is Gazebo?");
  r161.set("category", "Technical");
  r161.set("difficulty", "Intermediate");
  r161.set("explanation", "Intermediate level question for Robotics Engineer. What is Gazebo?");
  try { app.save(r161); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r162 = new Record(collection);
  r162.set("careerSlug", "robotics-engineer");
  r162.set("questionNumber", 63);
  r162.set("question", "What is Isaac Sim?");
  r162.set("category", "Behavioral");
  r162.set("difficulty", "Intermediate");
  r162.set("explanation", "Intermediate level question for Robotics Engineer. What is Isaac Sim?");
  try { app.save(r162); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r163 = new Record(collection);
  r163.set("careerSlug", "robotics-engineer");
  r163.set("questionNumber", 64);
  r163.set("question", "What is PyBullet?");
  r163.set("category", "Technical");
  r163.set("difficulty", "Intermediate");
  r163.set("explanation", "Intermediate level question for Robotics Engineer. What is PyBullet?");
  try { app.save(r163); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r164 = new Record(collection);
  r164.set("careerSlug", "robotics-engineer");
  r164.set("questionNumber", 65);
  r164.set("question", "What is MuJoCo?");
  r164.set("category", "Technical");
  r164.set("difficulty", "Intermediate");
  r164.set("explanation", "Intermediate level question for Robotics Engineer. What is MuJoCo?");
  try { app.save(r164); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r165 = new Record(collection);
  r165.set("careerSlug", "robotics-engineer");
  r165.set("questionNumber", 66);
  r165.set("question", "What is ROS control?");
  r165.set("category", "System Design");
  r165.set("difficulty", "Intermediate");
  r165.set("explanation", "Intermediate level question for Robotics Engineer. What is ROS control?");
  try { app.save(r165); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r166 = new Record(collection);
  r166.set("careerSlug", "robotics-engineer");
  r166.set("questionNumber", 67);
  r166.set("question", "What is hardware abstraction layer?");
  r166.set("category", "Technical");
  r166.set("difficulty", "Intermediate");
  r166.set("explanation", "Intermediate level question for Robotics Engineer. What is hardware abstraction layer?");
  try { app.save(r166); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r167 = new Record(collection);
  r167.set("careerSlug", "robotics-engineer");
  r167.set("questionNumber", 68);
  r167.set("question", "What is embedded programming in robotics?");
  r167.set("category", "Technical");
  r167.set("difficulty", "Advanced");
  r167.set("explanation", "Advanced level question for Robotics Engineer. What is embedded programming in robotics?");
  try { app.save(r167); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r168 = new Record(collection);
  r168.set("careerSlug", "robotics-engineer");
  r168.set("questionNumber", 69);
  r168.set("question", "What is a microcontroller in robotics?");
  r168.set("category", "Behavioral");
  r168.set("difficulty", "Advanced");
  r168.set("explanation", "Advanced level question for Robotics Engineer. What is a microcontroller in robotics?");
  try { app.save(r168); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r169 = new Record(collection);
  r169.set("careerSlug", "robotics-engineer");
  r169.set("questionNumber", 70);
  r169.set("question", "What is motor control?");
  r169.set("category", "Technical");
  r169.set("difficulty", "Advanced");
  r169.set("explanation", "Advanced level question for Robotics Engineer. What is motor control?");
  try { app.save(r169); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r170 = new Record(collection);
  r170.set("careerSlug", "robotics-engineer");
  r170.set("questionNumber", 71);
  r170.set("question", "What is a servo motor vs stepper motor vs BLDC?");
  r170.set("category", "Technical");
  r170.set("difficulty", "Advanced");
  r170.set("explanation", "Advanced level question for Robotics Engineer. What is a servo motor vs stepper motor vs BLDC?");
  try { app.save(r170); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r171 = new Record(collection);
  r171.set("careerSlug", "robotics-engineer");
  r171.set("questionNumber", 72);
  r171.set("question", "What is CAN bus in robotics?");
  r171.set("category", "System Design");
  r171.set("difficulty", "Advanced");
  r171.set("explanation", "Advanced level question for Robotics Engineer. What is CAN bus in robotics?");
  try { app.save(r171); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r172 = new Record(collection);
  r172.set("careerSlug", "robotics-engineer");
  r172.set("questionNumber", 73);
  r172.set("question", "What is EtherCAT?");
  r172.set("category", "Technical");
  r172.set("difficulty", "Advanced");
  r172.set("explanation", "Advanced level question for Robotics Engineer. What is EtherCAT?");
  try { app.save(r172); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r173 = new Record(collection);
  r173.set("careerSlug", "robotics-engineer");
  r173.set("questionNumber", 74);
  r173.set("question", "What is a robotic arm?");
  r173.set("category", "Technical");
  r173.set("difficulty", "Advanced");
  r173.set("explanation", "Advanced level question for Robotics Engineer. What is a robotic arm?");
  try { app.save(r173); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r174 = new Record(collection);
  r174.set("careerSlug", "robotics-engineer");
  r174.set("questionNumber", 75);
  r174.set("question", "What is a cobot?");
  r174.set("category", "Behavioral");
  r174.set("difficulty", "Advanced");
  r174.set("explanation", "Advanced level question for Robotics Engineer. What is a cobot?");
  try { app.save(r174); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r175 = new Record(collection);
  r175.set("careerSlug", "robotics-engineer");
  r175.set("questionNumber", 76);
  r175.set("question", "What is a mobile robot?");
  r175.set("category", "Technical");
  r175.set("difficulty", "Advanced");
  r175.set("explanation", "Advanced level question for Robotics Engineer. What is a mobile robot?");
  try { app.save(r175); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r176 = new Record(collection);
  r176.set("careerSlug", "robotics-engineer");
  r176.set("questionNumber", 77);
  r176.set("question", "What is a drone (UAV)?");
  r176.set("category", "Technical");
  r176.set("difficulty", "Advanced");
  r176.set("explanation", "Advanced level question for Robotics Engineer. What is a drone (UAV)?");
  try { app.save(r176); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r177 = new Record(collection);
  r177.set("careerSlug", "robotics-engineer");
  r177.set("questionNumber", 78);
  r177.set("question", "What is a humanoid robot?");
  r177.set("category", "System Design");
  r177.set("difficulty", "Advanced");
  r177.set("explanation", "Advanced level question for Robotics Engineer. What is a humanoid robot?");
  try { app.save(r177); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r178 = new Record(collection);
  r178.set("careerSlug", "robotics-engineer");
  r178.set("questionNumber", 79);
  r178.set("question", "What is reinforcement learning for robotics?");
  r178.set("category", "Technical");
  r178.set("difficulty", "Advanced");
  r178.set("explanation", "Advanced level question for Robotics Engineer. What is reinforcement learning for robotics?");
  try { app.save(r178); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r179 = new Record(collection);
  r179.set("careerSlug", "robotics-engineer");
  r179.set("questionNumber", 80);
  r179.set("question", "What is sim-to-real transfer?");
  r179.set("category", "Technical");
  r179.set("difficulty", "Advanced");
  r179.set("explanation", "Advanced level question for Robotics Engineer. What is sim-to-real transfer?");
  try { app.save(r179); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r180 = new Record(collection);
  r180.set("careerSlug", "robotics-engineer");
  r180.set("questionNumber", 81);
  r180.set("question", "What is domain randomization?");
  r180.set("category", "Behavioral");
  r180.set("difficulty", "Advanced");
  r180.set("explanation", "Advanced level question for Robotics Engineer. What is domain randomization?");
  try { app.save(r180); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r181 = new Record(collection);
  r181.set("careerSlug", "robotics-engineer");
  r181.set("questionNumber", 82);
  r181.set("question", "What is imitation learning?");
  r181.set("category", "Technical");
  r181.set("difficulty", "Advanced");
  r181.set("explanation", "Advanced level question for Robotics Engineer. What is imitation learning?");
  try { app.save(r181); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r182 = new Record(collection);
  r182.set("careerSlug", "robotics-engineer");
  r182.set("questionNumber", 83);
  r182.set("question", "What is learning from demonstration?");
  r182.set("category", "Technical");
  r182.set("difficulty", "Advanced");
  r182.set("explanation", "Advanced level question for Robotics Engineer. What is learning from demonstration?");
  try { app.save(r182); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r183 = new Record(collection);
  r183.set("careerSlug", "robotics-engineer");
  r183.set("questionNumber", 84);
  r183.set("question", "What is safety in robotics?");
  r183.set("category", "System Design");
  r183.set("difficulty", "Advanced");
  r183.set("explanation", "Advanced level question for Robotics Engineer. What is safety in robotics?");
  try { app.save(r183); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r184 = new Record(collection);
  r184.set("careerSlug", "robotics-engineer");
  r184.set("questionNumber", 85);
  r184.set("question", "What is functional safety (IEC 61508)?");
  r184.set("category", "Technical");
  r184.set("difficulty", "Advanced");
  r184.set("explanation", "Advanced level question for Robotics Engineer. What is functional safety (IEC 61508)?");
  try { app.save(r184); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r185 = new Record(collection);
  r185.set("careerSlug", "robotics-engineer");
  r185.set("questionNumber", 86);
  r185.set("question", "What is a robot safety zone?");
  r185.set("category", "Technical");
  r185.set("difficulty", "Advanced");
  r185.set("explanation", "Advanced level question for Robotics Engineer. What is a robot safety zone?");
  try { app.save(r185); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r186 = new Record(collection);
  r186.set("careerSlug", "robotics-engineer");
  r186.set("questionNumber", 87);
  r186.set("question", "What is collision avoidance?");
  r186.set("category", "Behavioral");
  r186.set("difficulty", "Advanced");
  r186.set("explanation", "Advanced level question for Robotics Engineer. What is collision avoidance?");
  try { app.save(r186); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r187 = new Record(collection);
  r187.set("careerSlug", "robotics-engineer");
  r187.set("questionNumber", 88);
  r187.set("question", "What is force limiting?");
  r187.set("category", "Technical");
  r187.set("difficulty", "Advanced");
  r187.set("explanation", "Advanced level question for Robotics Engineer. What is force limiting?");
  try { app.save(r187); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r188 = new Record(collection);
  r188.set("careerSlug", "robotics-engineer");
  r188.set("questionNumber", 89);
  r188.set("question", "What is ISO 10218?");
  r188.set("category", "Technical");
  r188.set("difficulty", "Advanced");
  r188.set("explanation", "Advanced level question for Robotics Engineer. What is ISO 10218?");
  try { app.save(r188); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r189 = new Record(collection);
  r189.set("careerSlug", "robotics-engineer");
  r189.set("questionNumber", 90);
  r189.set("question", "What is a robot cell?");
  r189.set("category", "System Design");
  r189.set("difficulty", "Advanced");
  r189.set("explanation", "Advanced level question for Robotics Engineer. What is a robot cell?");
  try { app.save(r189); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r190 = new Record(collection);
  r190.set("careerSlug", "robotics-engineer");
  r190.set("questionNumber", 91);
  r190.set("question", "What is pick and place?");
  r190.set("category", "Technical");
  r190.set("difficulty", "Advanced");
  r190.set("explanation", "Advanced level question for Robotics Engineer. What is pick and place?");
  try { app.save(r190); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r191 = new Record(collection);
  r191.set("careerSlug", "robotics-engineer");
  r191.set("questionNumber", 92);
  r191.set("question", "What is bin picking?");
  r191.set("category", "Technical");
  r191.set("difficulty", "Advanced");
  r191.set("explanation", "Advanced level question for Robotics Engineer. What is bin picking?");
  try { app.save(r191); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r192 = new Record(collection);
  r192.set("careerSlug", "robotics-engineer");
  r192.set("questionNumber", 93);
  r192.set("question", "What is quality inspection with robots?");
  r192.set("category", "Behavioral");
  r192.set("difficulty", "Advanced");
  r192.set("explanation", "Advanced level question for Robotics Engineer. What is quality inspection with robots?");
  try { app.save(r192); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r193 = new Record(collection);
  r193.set("careerSlug", "robotics-engineer");
  r193.set("questionNumber", 94);
  r193.set("question", "What is collaborative robotics (cobots)?");
  r193.set("category", "Technical");
  r193.set("difficulty", "Advanced");
  r193.set("explanation", "Advanced level question for Robotics Engineer. What is collaborative robotics (cobots)?");
  try { app.save(r193); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r194 = new Record(collection);
  r194.set("careerSlug", "robotics-engineer");
  r194.set("questionNumber", 95);
  r194.set("question", "What is industrial robot programming (RAPID, KRL)?");
  r194.set("category", "Technical");
  r194.set("difficulty", "Advanced");
  r194.set("explanation", "Advanced level question for Robotics Engineer. What is industrial robot programming (RAPID, KRL)?");
  try { app.save(r194); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r195 = new Record(collection);
  r195.set("careerSlug", "robotics-engineer");
  r195.set("questionNumber", 96);
  r195.set("question", "What is ROS-Industrial?");
  r195.set("category", "System Design");
  r195.set("difficulty", "Advanced");
  r195.set("explanation", "Advanced level question for Robotics Engineer. What is ROS-Industrial?");
  try { app.save(r195); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r196 = new Record(collection);
  r196.set("careerSlug", "robotics-engineer");
  r196.set("questionNumber", 97);
  r196.set("question", "What is digital twin in robotics?");
  r196.set("category", "Technical");
  r196.set("difficulty", "Advanced");
  r196.set("explanation", "Advanced level question for Robotics Engineer. What is digital twin in robotics?");
  try { app.save(r196); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r197 = new Record(collection);
  r197.set("careerSlug", "robotics-engineer");
  r197.set("questionNumber", 98);
  r197.set("question", "What is a robot fleet management?");
  r197.set("category", "Technical");
  r197.set("difficulty", "Advanced");
  r197.set("explanation", "Advanced level question for Robotics Engineer. What is a robot fleet management?");
  try { app.save(r197); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r198 = new Record(collection);
  r198.set("careerSlug", "robotics-engineer");
  r198.set("questionNumber", 99);
  r198.set("question", "What is multi-robot coordination?");
  r198.set("category", "Behavioral");
  r198.set("difficulty", "Advanced");
  r198.set("explanation", "Advanced level question for Robotics Engineer. What is multi-robot coordination?");
  try { app.save(r198); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r199 = new Record(collection);
  r199.set("careerSlug", "network-engineer");
  r199.set("questionNumber", 1);
  r199.set("question", "What is the OSI model?");
  r199.set("category", "Technical");
  r199.set("difficulty", "Beginner");
  r199.set("explanation", "Beginner level question for Network Engineer. What is the OSI model?");
  try { app.save(r199); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r200 = new Record(collection);
  r200.set("careerSlug", "network-engineer");
  r200.set("questionNumber", 2);
  r200.set("question", "What are the 7 layers of the OSI model?");
  r200.set("category", "Technical");
  r200.set("difficulty", "Beginner");
  r200.set("explanation", "Beginner level question for Network Engineer. What are the 7 layers of the OSI model?");
  try { app.save(r200); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r201 = new Record(collection);
  r201.set("careerSlug", "network-engineer");
  r201.set("questionNumber", 3);
  r201.set("question", "What is TCP vs UDP?");
  r201.set("category", "Behavioral");
  r201.set("difficulty", "Beginner");
  r201.set("explanation", "Beginner level question for Network Engineer. What is TCP vs UDP?");
  try { app.save(r201); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r202 = new Record(collection);
  r202.set("careerSlug", "network-engineer");
  r202.set("questionNumber", 4);
  r202.set("question", "What is a subnet mask?");
  r202.set("category", "Technical");
  r202.set("difficulty", "Beginner");
  r202.set("explanation", "Beginner level question for Network Engineer. What is a subnet mask?");
  try { app.save(r202); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r203 = new Record(collection);
  r203.set("careerSlug", "network-engineer");
  r203.set("questionNumber", 5);
  r203.set("question", "What is CIDR notation?");
  r203.set("category", "Technical");
  r203.set("difficulty", "Beginner");
  r203.set("explanation", "Beginner level question for Network Engineer. What is CIDR notation?");
  try { app.save(r203); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r204 = new Record(collection);
  r204.set("careerSlug", "network-engineer");
  r204.set("questionNumber", 6);
  r204.set("question", "What is subnetting?");
  r204.set("category", "System Design");
  r204.set("difficulty", "Beginner");
  r204.set("explanation", "Beginner level question for Network Engineer. What is subnetting?");
  try { app.save(r204); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r205 = new Record(collection);
  r205.set("careerSlug", "network-engineer");
  r205.set("questionNumber", 7);
  r205.set("question", "What is VLSM?");
  r205.set("category", "Technical");
  r205.set("difficulty", "Beginner");
  r205.set("explanation", "Beginner level question for Network Engineer. What is VLSM?");
  try { app.save(r205); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r206 = new Record(collection);
  r206.set("careerSlug", "network-engineer");
  r206.set("questionNumber", 8);
  r206.set("question", "What is NAT?");
  r206.set("category", "Technical");
  r206.set("difficulty", "Beginner");
  r206.set("explanation", "Beginner level question for Network Engineer. What is NAT?");
  try { app.save(r206); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r207 = new Record(collection);
  r207.set("careerSlug", "network-engineer");
  r207.set("questionNumber", 9);
  r207.set("question", "What is PAT?");
  r207.set("category", "Behavioral");
  r207.set("difficulty", "Beginner");
  r207.set("explanation", "Beginner level question for Network Engineer. What is PAT?");
  try { app.save(r207); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r208 = new Record(collection);
  r208.set("careerSlug", "network-engineer");
  r208.set("questionNumber", 10);
  r208.set("question", "What is a default gateway?");
  r208.set("category", "Technical");
  r208.set("difficulty", "Beginner");
  r208.set("explanation", "Beginner level question for Network Engineer. What is a default gateway?");
  try { app.save(r208); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r209 = new Record(collection);
  r209.set("careerSlug", "network-engineer");
  r209.set("questionNumber", 11);
  r209.set("question", "What is ARP?");
  r209.set("category", "Technical");
  r209.set("difficulty", "Beginner");
  r209.set("explanation", "Beginner level question for Network Engineer. What is ARP?");
  try { app.save(r209); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r210 = new Record(collection);
  r210.set("careerSlug", "network-engineer");
  r210.set("questionNumber", 12);
  r210.set("question", "What is MAC address?");
  r210.set("category", "System Design");
  r210.set("difficulty", "Beginner");
  r210.set("explanation", "Beginner level question for Network Engineer. What is MAC address?");
  try { app.save(r210); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r211 = new Record(collection);
  r211.set("careerSlug", "network-engineer");
  r211.set("questionNumber", 13);
  r211.set("question", "What is switching?");
  r211.set("category", "Technical");
  r211.set("difficulty", "Beginner");
  r211.set("explanation", "Beginner level question for Network Engineer. What is switching?");
  try { app.save(r211); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r212 = new Record(collection);
  r212.set("careerSlug", "network-engineer");
  r212.set("questionNumber", 14);
  r212.set("question", "What is routing?");
  r212.set("category", "Technical");
  r212.set("difficulty", "Beginner");
  r212.set("explanation", "Beginner level question for Network Engineer. What is routing?");
  try { app.save(r212); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r213 = new Record(collection);
  r213.set("careerSlug", "network-engineer");
  r213.set("questionNumber", 15);
  r213.set("question", "What is a router?");
  r213.set("category", "Behavioral");
  r213.set("difficulty", "Beginner");
  r213.set("explanation", "Beginner level question for Network Engineer. What is a router?");
  try { app.save(r213); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r214 = new Record(collection);
  r214.set("careerSlug", "network-engineer");
  r214.set("questionNumber", 16);
  r214.set("question", "What is a switch?");
  r214.set("category", "Technical");
  r214.set("difficulty", "Beginner");
  r214.set("explanation", "Beginner level question for Network Engineer. What is a switch?");
  try { app.save(r214); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r215 = new Record(collection);
  r215.set("careerSlug", "network-engineer");
  r215.set("questionNumber", 17);
  r215.set("question", "What is a hub?");
  r215.set("category", "Technical");
  r215.set("difficulty", "Beginner");
  r215.set("explanation", "Beginner level question for Network Engineer. What is a hub?");
  try { app.save(r215); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r216 = new Record(collection);
  r216.set("careerSlug", "network-engineer");
  r216.set("questionNumber", 18);
  r216.set("question", "What is VLAN?");
  r216.set("category", "System Design");
  r216.set("difficulty", "Beginner");
  r216.set("explanation", "Beginner level question for Network Engineer. What is VLAN?");
  try { app.save(r216); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r217 = new Record(collection);
  r217.set("careerSlug", "network-engineer");
  r217.set("questionNumber", 19);
  r217.set("question", "What is trunking?");
  r217.set("category", "Technical");
  r217.set("difficulty", "Beginner");
  r217.set("explanation", "Beginner level question for Network Engineer. What is trunking?");
  try { app.save(r217); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r218 = new Record(collection);
  r218.set("careerSlug", "network-engineer");
  r218.set("questionNumber", 20);
  r218.set("question", "What is 802.1Q?");
  r218.set("category", "Technical");
  r218.set("difficulty", "Beginner");
  r218.set("explanation", "Beginner level question for Network Engineer. What is 802.1Q?");
  try { app.save(r218); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r219 = new Record(collection);
  r219.set("careerSlug", "network-engineer");
  r219.set("questionNumber", 21);
  r219.set("question", "What is STP (Spanning Tree Protocol)?");
  r219.set("category", "Behavioral");
  r219.set("difficulty", "Beginner");
  r219.set("explanation", "Beginner level question for Network Engineer. What is STP (Spanning Tree Protocol)?");
  try { app.save(r219); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r220 = new Record(collection);
  r220.set("careerSlug", "network-engineer");
  r220.set("questionNumber", 22);
  r220.set("question", "What is RSTP?");
  r220.set("category", "Technical");
  r220.set("difficulty", "Beginner");
  r220.set("explanation", "Beginner level question for Network Engineer. What is RSTP?");
  try { app.save(r220); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r221 = new Record(collection);
  r221.set("careerSlug", "network-engineer");
  r221.set("questionNumber", 23);
  r221.set("question", "What is OSPF?");
  r221.set("category", "Technical");
  r221.set("difficulty", "Beginner");
  r221.set("explanation", "Beginner level question for Network Engineer. What is OSPF?");
  try { app.save(r221); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r222 = new Record(collection);
  r222.set("careerSlug", "network-engineer");
  r222.set("questionNumber", 24);
  r222.set("question", "What is BGP?");
  r222.set("category", "System Design");
  r222.set("difficulty", "Beginner");
  r222.set("explanation", "Beginner level question for Network Engineer. What is BGP?");
  try { app.save(r222); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r223 = new Record(collection);
  r223.set("careerSlug", "network-engineer");
  r223.set("questionNumber", 25);
  r223.set("question", "What is EIGRP?");
  r223.set("category", "Technical");
  r223.set("difficulty", "Beginner");
  r223.set("explanation", "Beginner level question for Network Engineer. What is EIGRP?");
  try { app.save(r223); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r224 = new Record(collection);
  r224.set("careerSlug", "network-engineer");
  r224.set("questionNumber", 26);
  r224.set("question", "What is RIP?");
  r224.set("category", "Technical");
  r224.set("difficulty", "Beginner");
  r224.set("explanation", "Beginner level question for Network Engineer. What is RIP?");
  try { app.save(r224); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r225 = new Record(collection);
  r225.set("careerSlug", "network-engineer");
  r225.set("questionNumber", 27);
  r225.set("question", "What is static routing?");
  r225.set("category", "Behavioral");
  r225.set("difficulty", "Beginner");
  r225.set("explanation", "Beginner level question for Network Engineer. What is static routing?");
  try { app.save(r225); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r226 = new Record(collection);
  r226.set("careerSlug", "network-engineer");
  r226.set("questionNumber", 28);
  r226.set("question", "What is dynamic routing?");
  r226.set("category", "Technical");
  r226.set("difficulty", "Beginner");
  r226.set("explanation", "Beginner level question for Network Engineer. What is dynamic routing?");
  try { app.save(r226); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r227 = new Record(collection);
  r227.set("careerSlug", "network-engineer");
  r227.set("questionNumber", 29);
  r227.set("question", "What is an AS (Autonomous System)?");
  r227.set("category", "Technical");
  r227.set("difficulty", "Beginner");
  r227.set("explanation", "Beginner level question for Network Engineer. What is an AS (Autonomous System)?");
  try { app.save(r227); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r228 = new Record(collection);
  r228.set("careerSlug", "network-engineer");
  r228.set("questionNumber", 30);
  r228.set("question", "What is iBGP vs eBGP?");
  r228.set("category", "System Design");
  r228.set("difficulty", "Beginner");
  r228.set("explanation", "Beginner level question for Network Engineer. What is iBGP vs eBGP?");
  try { app.save(r228); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r229 = new Record(collection);
  r229.set("careerSlug", "network-engineer");
  r229.set("questionNumber", 31);
  r229.set("question", "What is route redistribution?");
  r229.set("category", "Technical");
  r229.set("difficulty", "Beginner");
  r229.set("explanation", "Beginner level question for Network Engineer. What is route redistribution?");
  try { app.save(r229); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r230 = new Record(collection);
  r230.set("careerSlug", "network-engineer");
  r230.set("questionNumber", 32);
  r230.set("question", "What is MPLS?");
  r230.set("category", "Technical");
  r230.set("difficulty", "Beginner");
  r230.set("explanation", "Beginner level question for Network Engineer. What is MPLS?");
  try { app.save(r230); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r231 = new Record(collection);
  r231.set("careerSlug", "network-engineer");
  r231.set("questionNumber", 33);
  r231.set("question", "What is SD-WAN?");
  r231.set("category", "Behavioral");
  r231.set("difficulty", "Beginner");
  r231.set("explanation", "Beginner level question for Network Engineer. What is SD-WAN?");
  try { app.save(r231); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r232 = new Record(collection);
  r232.set("careerSlug", "network-engineer");
  r232.set("questionNumber", 34);
  r232.set("question", "What is QoS?");
  r232.set("category", "Technical");
  r232.set("difficulty", "Intermediate");
  r232.set("explanation", "Intermediate level question for Network Engineer. What is QoS?");
  try { app.save(r232); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r233 = new Record(collection);
  r233.set("careerSlug", "network-engineer");
  r233.set("questionNumber", 35);
  r233.set("question", "What is traffic shaping?");
  r233.set("category", "Technical");
  r233.set("difficulty", "Intermediate");
  r233.set("explanation", "Intermediate level question for Network Engineer. What is traffic shaping?");
  try { app.save(r233); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r234 = new Record(collection);
  r234.set("careerSlug", "network-engineer");
  r234.set("questionNumber", 36);
  r234.set("question", "What is traffic policing?");
  r234.set("category", "System Design");
  r234.set("difficulty", "Intermediate");
  r234.set("explanation", "Intermediate level question for Network Engineer. What is traffic policing?");
  try { app.save(r234); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r235 = new Record(collection);
  r235.set("careerSlug", "network-engineer");
  r235.set("questionNumber", 37);
  r235.set("question", "What is bandwidth vs throughput vs latency?");
  r235.set("category", "Technical");
  r235.set("difficulty", "Intermediate");
  r235.set("explanation", "Intermediate level question for Network Engineer. What is bandwidth vs throughput vs latency?");
  try { app.save(r235); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r236 = new Record(collection);
  r236.set("careerSlug", "network-engineer");
  r236.set("questionNumber", 38);
  r236.set("question", "What is a firewall?");
  r236.set("category", "Technical");
  r236.set("difficulty", "Intermediate");
  r236.set("explanation", "Intermediate level question for Network Engineer. What is a firewall?");
  try { app.save(r236); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r237 = new Record(collection);
  r237.set("careerSlug", "network-engineer");
  r237.set("questionNumber", 39);
  r237.set("question", "What is stateful vs stateless firewall?");
  r237.set("category", "Behavioral");
  r237.set("difficulty", "Intermediate");
  r237.set("explanation", "Intermediate level question for Network Engineer. What is stateful vs stateless firewall?");
  try { app.save(r237); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r238 = new Record(collection);
  r238.set("careerSlug", "network-engineer");
  r238.set("questionNumber", 40);
  r238.set("question", "What is NGFW?");
  r238.set("category", "Technical");
  r238.set("difficulty", "Intermediate");
  r238.set("explanation", "Intermediate level question for Network Engineer. What is NGFW?");
  try { app.save(r238); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r239 = new Record(collection);
  r239.set("careerSlug", "network-engineer");
  r239.set("questionNumber", 41);
  r239.set("question", "What is a DMZ?");
  r239.set("category", "Technical");
  r239.set("difficulty", "Intermediate");
  r239.set("explanation", "Intermediate level question for Network Engineer. What is a DMZ?");
  try { app.save(r239); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r240 = new Record(collection);
  r240.set("careerSlug", "network-engineer");
  r240.set("questionNumber", 42);
  r240.set("question", "What is IDS vs IPS?");
  r240.set("category", "System Design");
  r240.set("difficulty", "Intermediate");
  r240.set("explanation", "Intermediate level question for Network Engineer. What is IDS vs IPS?");
  try { app.save(r240); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r241 = new Record(collection);
  r241.set("careerSlug", "network-engineer");
  r241.set("questionNumber", 43);
  r241.set("question", "What is a VPN?");
  r241.set("category", "Technical");
  r241.set("difficulty", "Intermediate");
  r241.set("explanation", "Intermediate level question for Network Engineer. What is a VPN?");
  try { app.save(r241); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r242 = new Record(collection);
  r242.set("careerSlug", "network-engineer");
  r242.set("questionNumber", 44);
  r242.set("question", "What is IPsec?");
  r242.set("category", "Technical");
  r242.set("difficulty", "Intermediate");
  r242.set("explanation", "Intermediate level question for Network Engineer. What is IPsec?");
  try { app.save(r242); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r243 = new Record(collection);
  r243.set("careerSlug", "network-engineer");
  r243.set("questionNumber", 45);
  r243.set("question", "What is SSL/TLS VPN?");
  r243.set("category", "Behavioral");
  r243.set("difficulty", "Intermediate");
  r243.set("explanation", "Intermediate level question for Network Engineer. What is SSL/TLS VPN?");
  try { app.save(r243); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r244 = new Record(collection);
  r244.set("careerSlug", "network-engineer");
  r244.set("questionNumber", 46);
  r244.set("question", "What is site-to-site VPN?");
  r244.set("category", "Technical");
  r244.set("difficulty", "Intermediate");
  r244.set("explanation", "Intermediate level question for Network Engineer. What is site-to-site VPN?");
  try { app.save(r244); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r245 = new Record(collection);
  r245.set("careerSlug", "network-engineer");
  r245.set("questionNumber", 47);
  r245.set("question", "What is remote access VPN?");
  r245.set("category", "Technical");
  r245.set("difficulty", "Intermediate");
  r245.set("explanation", "Intermediate level question for Network Engineer. What is remote access VPN?");
  try { app.save(r245); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r246 = new Record(collection);
  r246.set("careerSlug", "network-engineer");
  r246.set("questionNumber", 48);
  r246.set("question", "What is SSID?");
  r246.set("category", "System Design");
  r246.set("difficulty", "Intermediate");
  r246.set("explanation", "Intermediate level question for Network Engineer. What is SSID?");
  try { app.save(r246); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r247 = new Record(collection);
  r247.set("careerSlug", "network-engineer");
  r247.set("questionNumber", 49);
  r247.set("question", "What is WPA3?");
  r247.set("category", "Technical");
  r247.set("difficulty", "Intermediate");
  r247.set("explanation", "Intermediate level question for Network Engineer. What is WPA3?");
  try { app.save(r247); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r248 = new Record(collection);
  r248.set("careerSlug", "network-engineer");
  r248.set("questionNumber", 50);
  r248.set("question", "What is 802.11ax (Wi-Fi 6)?");
  r248.set("category", "Technical");
  r248.set("difficulty", "Intermediate");
  r248.set("explanation", "Intermediate level question for Network Engineer. What is 802.11ax (Wi-Fi 6)?");
  try { app.save(r248); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r249 = new Record(collection);
  r249.set("careerSlug", "network-engineer");
  r249.set("questionNumber", 51);
  r249.set("question", "What is a wireless controller?");
  r249.set("category", "Behavioral");
  r249.set("difficulty", "Intermediate");
  r249.set("explanation", "Intermediate level question for Network Engineer. What is a wireless controller?");
  try { app.save(r249); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r250 = new Record(collection);
  r250.set("careerSlug", "network-engineer");
  r250.set("questionNumber", 52);
  r250.set("question", "What is CAPWAP?");
  r250.set("category", "Technical");
  r250.set("difficulty", "Intermediate");
  r250.set("explanation", "Intermediate level question for Network Engineer. What is CAPWAP?");
  try { app.save(r250); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r251 = new Record(collection);
  r251.set("careerSlug", "network-engineer");
  r251.set("questionNumber", 53);
  r251.set("question", "What is DHCP?");
  r251.set("category", "Technical");
  r251.set("difficulty", "Intermediate");
  r251.set("explanation", "Intermediate level question for Network Engineer. What is DHCP?");
  try { app.save(r251); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r252 = new Record(collection);
  r252.set("careerSlug", "network-engineer");
  r252.set("questionNumber", 54);
  r252.set("question", "What is DNS?");
  r252.set("category", "System Design");
  r252.set("difficulty", "Intermediate");
  r252.set("explanation", "Intermediate level question for Network Engineer. What is DNS?");
  try { app.save(r252); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r253 = new Record(collection);
  r253.set("careerSlug", "network-engineer");
  r253.set("questionNumber", 55);
  r253.set("question", "What is DNS record types (A, AAAA, CNAME, MX, TXT)?");
  r253.set("category", "Technical");
  r253.set("difficulty", "Intermediate");
  r253.set("explanation", "Intermediate level question for Network Engineer. What is DNS record types (A, AAAA, CNAME, MX, TXT)?");
  try { app.save(r253); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r254 = new Record(collection);
  r254.set("careerSlug", "network-engineer");
  r254.set("questionNumber", 56);
  r254.set("question", "What is recursive vs iterative DNS?");
  r254.set("category", "Technical");
  r254.set("difficulty", "Intermediate");
  r254.set("explanation", "Intermediate level question for Network Engineer. What is recursive vs iterative DNS?");
  try { app.save(r254); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r255 = new Record(collection);
  r255.set("careerSlug", "network-engineer");
  r255.set("questionNumber", 57);
  r255.set("question", "What is NTP?");
  r255.set("category", "Behavioral");
  r255.set("difficulty", "Intermediate");
  r255.set("explanation", "Intermediate level question for Network Engineer. What is NTP?");
  try { app.save(r255); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r256 = new Record(collection);
  r256.set("careerSlug", "network-engineer");
  r256.set("questionNumber", 58);
  r256.set("question", "What is SNMP?");
  r256.set("category", "Technical");
  r256.set("difficulty", "Intermediate");
  r256.set("explanation", "Intermediate level question for Network Engineer. What is SNMP?");
  try { app.save(r256); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r257 = new Record(collection);
  r257.set("careerSlug", "network-engineer");
  r257.set("questionNumber", 59);
  r257.set("question", "What is NetFlow?");
  r257.set("category", "Technical");
  r257.set("difficulty", "Intermediate");
  r257.set("explanation", "Intermediate level question for Network Engineer. What is NetFlow?");
  try { app.save(r257); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r258 = new Record(collection);
  r258.set("careerSlug", "network-engineer");
  r258.set("questionNumber", 60);
  r258.set("question", "What is syslog?");
  r258.set("category", "System Design");
  r258.set("difficulty", "Intermediate");
  r258.set("explanation", "Intermediate level question for Network Engineer. What is syslog?");
  try { app.save(r258); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r259 = new Record(collection);
  r259.set("careerSlug", "network-engineer");
  r259.set("questionNumber", 61);
  r259.set("question", "What is a network baseline?");
  r259.set("category", "Technical");
  r259.set("difficulty", "Intermediate");
  r259.set("explanation", "Intermediate level question for Network Engineer. What is a network baseline?");
  try { app.save(r259); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r260 = new Record(collection);
  r260.set("careerSlug", "network-engineer");
  r260.set("questionNumber", 62);
  r260.set("question", "What is network monitoring?");
  r260.set("category", "Technical");
  r260.set("difficulty", "Intermediate");
  r260.set("explanation", "Intermediate level question for Network Engineer. What is network monitoring?");
  try { app.save(r260); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r261 = new Record(collection);
  r261.set("careerSlug", "network-engineer");
  r261.set("questionNumber", 63);
  r261.set("question", "What is Wireshark?");
  r261.set("category", "Behavioral");
  r261.set("difficulty", "Intermediate");
  r261.set("explanation", "Intermediate level question for Network Engineer. What is Wireshark?");
  try { app.save(r261); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r262 = new Record(collection);
  r262.set("careerSlug", "network-engineer");
  r262.set("questionNumber", 64);
  r262.set("question", "What is packet analysis?");
  r262.set("category", "Technical");
  r262.set("difficulty", "Intermediate");
  r262.set("explanation", "Intermediate level question for Network Engineer. What is packet analysis?");
  try { app.save(r262); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r263 = new Record(collection);
  r263.set("careerSlug", "network-engineer");
  r263.set("questionNumber", 65);
  r263.set("question", "What is a packet capture?");
  r263.set("category", "Technical");
  r263.set("difficulty", "Intermediate");
  r263.set("explanation", "Intermediate level question for Network Engineer. What is a packet capture?");
  try { app.save(r263); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r264 = new Record(collection);
  r264.set("careerSlug", "network-engineer");
  r264.set("questionNumber", 66);
  r264.set("question", "What is port mirroring (SPAN)?");
  r264.set("category", "System Design");
  r264.set("difficulty", "Intermediate");
  r264.set("explanation", "Intermediate level question for Network Engineer. What is port mirroring (SPAN)?");
  try { app.save(r264); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r265 = new Record(collection);
  r265.set("careerSlug", "network-engineer");
  r265.set("questionNumber", 67);
  r265.set("question", "What is jumbo frames?");
  r265.set("category", "Technical");
  r265.set("difficulty", "Intermediate");
  r265.set("explanation", "Intermediate level question for Network Engineer. What is jumbo frames?");
  try { app.save(r265); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r266 = new Record(collection);
  r266.set("careerSlug", "network-engineer");
  r266.set("questionNumber", 68);
  r266.set("question", "What is MTU?");
  r266.set("category", "Technical");
  r266.set("difficulty", "Advanced");
  r266.set("explanation", "Advanced level question for Network Engineer. What is MTU?");
  try { app.save(r266); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r267 = new Record(collection);
  r267.set("careerSlug", "network-engineer");
  r267.set("questionNumber", 69);
  r267.set("question", "What is TCP handshake?");
  r267.set("category", "Behavioral");
  r267.set("difficulty", "Advanced");
  r267.set("explanation", "Advanced level question for Network Engineer. What is TCP handshake?");
  try { app.save(r267); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r268 = new Record(collection);
  r268.set("careerSlug", "network-engineer");
  r268.set("questionNumber", 70);
  r268.set("question", "What is TCP window size?");
  r268.set("category", "Technical");
  r268.set("difficulty", "Advanced");
  r268.set("explanation", "Advanced level question for Network Engineer. What is TCP window size?");
  try { app.save(r268); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r269 = new Record(collection);
  r269.set("careerSlug", "network-engineer");
  r269.set("questionNumber", 71);
  r269.set("question", "What is TCP retransmission?");
  r269.set("category", "Technical");
  r269.set("difficulty", "Advanced");
  r269.set("explanation", "Advanced level question for Network Engineer. What is TCP retransmission?");
  try { app.save(r269); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r270 = new Record(collection);
  r270.set("careerSlug", "network-engineer");
  r270.set("questionNumber", 72);
  r270.set("question", "What is half-open connection?");
  r270.set("category", "System Design");
  r270.set("difficulty", "Advanced");
  r270.set("explanation", "Advanced level question for Network Engineer. What is half-open connection?");
  try { app.save(r270); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r271 = new Record(collection);
  r271.set("careerSlug", "network-engineer");
  r271.set("questionNumber", 73);
  r271.set("question", "What is SYN flood?");
  r271.set("category", "Technical");
  r271.set("difficulty", "Advanced");
  r271.set("explanation", "Advanced level question for Network Engineer. What is SYN flood?");
  try { app.save(r271); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r272 = new Record(collection);
  r272.set("careerSlug", "network-engineer");
  r272.set("questionNumber", 74);
  r272.set("question", "What is DDoS mitigation?");
  r272.set("category", "Technical");
  r272.set("difficulty", "Advanced");
  r272.set("explanation", "Advanced level question for Network Engineer. What is DDoS mitigation?");
  try { app.save(r272); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r273 = new Record(collection);
  r273.set("careerSlug", "network-engineer");
  r273.set("questionNumber", 75);
  r273.set("question", "What is anycast?");
  r273.set("category", "Behavioral");
  r273.set("difficulty", "Advanced");
  r273.set("explanation", "Advanced level question for Network Engineer. What is anycast?");
  try { app.save(r273); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r274 = new Record(collection);
  r274.set("careerSlug", "network-engineer");
  r274.set("questionNumber", 76);
  r274.set("question", "What is CDN networking?");
  r274.set("category", "Technical");
  r274.set("difficulty", "Advanced");
  r274.set("explanation", "Advanced level question for Network Engineer. What is CDN networking?");
  try { app.save(r274); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r275 = new Record(collection);
  r275.set("careerSlug", "network-engineer");
  r275.set("questionNumber", 77);
  r275.set("question", "What is load balancer networking?");
  r275.set("category", "Technical");
  r275.set("difficulty", "Advanced");
  r275.set("explanation", "Advanced level question for Network Engineer. What is load balancer networking?");
  try { app.save(r275); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r276 = new Record(collection);
  r276.set("careerSlug", "network-engineer");
  r276.set("questionNumber", 78);
  r276.set("question", "What is ECMP?");
  r276.set("category", "System Design");
  r276.set("difficulty", "Advanced");
  r276.set("explanation", "Advanced level question for Network Engineer. What is ECMP?");
  try { app.save(r276); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r277 = new Record(collection);
  r277.set("careerSlug", "network-engineer");
  r277.set("questionNumber", 79);
  r277.set("question", "What is link aggregation (LACP)?");
  r277.set("category", "Technical");
  r277.set("difficulty", "Advanced");
  r277.set("explanation", "Advanced level question for Network Engineer. What is link aggregation (LACP)?");
  try { app.save(r277); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r278 = new Record(collection);
  r278.set("careerSlug", "network-engineer");
  r278.set("questionNumber", 80);
  r278.set("question", "What is redundancy?");
  r278.set("category", "Technical");
  r278.set("difficulty", "Advanced");
  r278.set("explanation", "Advanced level question for Network Engineer. What is redundancy?");
  try { app.save(r278); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r279 = new Record(collection);
  r279.set("careerSlug", "network-engineer");
  r279.set("questionNumber", 81);
  r279.set("question", "What is HSRP/VRRP?");
  r279.set("category", "Behavioral");
  r279.set("difficulty", "Advanced");
  r279.set("explanation", "Advanced level question for Network Engineer. What is HSRP/VRRP?");
  try { app.save(r279); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r280 = new Record(collection);
  r280.set("careerSlug", "network-engineer");
  r280.set("questionNumber", 82);
  r280.set("question", "What is BFD?");
  r280.set("category", "Technical");
  r280.set("difficulty", "Advanced");
  r280.set("explanation", "Advanced level question for Network Engineer. What is BFD?");
  try { app.save(r280); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r281 = new Record(collection);
  r281.set("careerSlug", "network-engineer");
  r281.set("questionNumber", 83);
  r281.set("question", "What is IPv6?");
  r281.set("category", "Technical");
  r281.set("difficulty", "Advanced");
  r281.set("explanation", "Advanced level question for Network Engineer. What is IPv6?");
  try { app.save(r281); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r282 = new Record(collection);
  r282.set("careerSlug", "network-engineer");
  r282.set("questionNumber", 84);
  r282.set("question", "What is IPv6 address types?");
  r282.set("category", "System Design");
  r282.set("difficulty", "Advanced");
  r282.set("explanation", "Advanced level question for Network Engineer. What is IPv6 address types?");
  try { app.save(r282); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r283 = new Record(collection);
  r283.set("careerSlug", "network-engineer");
  r283.set("questionNumber", 85);
  r283.set("question", "What is DHCPv6?");
  r283.set("category", "Technical");
  r283.set("difficulty", "Advanced");
  r283.set("explanation", "Advanced level question for Network Engineer. What is DHCPv6?");
  try { app.save(r283); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r284 = new Record(collection);
  r284.set("careerSlug", "network-engineer");
  r284.set("questionNumber", 86);
  r284.set("question", "What is SLAAC?");
  r284.set("category", "Technical");
  r284.set("difficulty", "Advanced");
  r284.set("explanation", "Advanced level question for Network Engineer. What is SLAAC?");
  try { app.save(r284); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r285 = new Record(collection);
  r285.set("careerSlug", "network-engineer");
  r285.set("questionNumber", 87);
  r285.set("question", "What is dual stack?");
  r285.set("category", "Behavioral");
  r285.set("difficulty", "Advanced");
  r285.set("explanation", "Advanced level question for Network Engineer. What is dual stack?");
  try { app.save(r285); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r286 = new Record(collection);
  r286.set("careerSlug", "network-engineer");
  r286.set("questionNumber", 88);
  r286.set("question", "What is network automation?");
  r286.set("category", "Technical");
  r286.set("difficulty", "Advanced");
  r286.set("explanation", "Advanced level question for Network Engineer. What is network automation?");
  try { app.save(r286); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r287 = new Record(collection);
  r287.set("careerSlug", "network-engineer");
  r287.set("questionNumber", 89);
  r287.set("question", "What is Ansible for network?");
  r287.set("category", "Technical");
  r287.set("difficulty", "Advanced");
  r287.set("explanation", "Advanced level question for Network Engineer. What is Ansible for network?");
  try { app.save(r287); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r288 = new Record(collection);
  r288.set("careerSlug", "network-engineer");
  r288.set("questionNumber", 90);
  r288.set("question", "What is NETCONF/RESTCONF?");
  r288.set("category", "System Design");
  r288.set("difficulty", "Advanced");
  r288.set("explanation", "Advanced level question for Network Engineer. What is NETCONF/RESTCONF?");
  try { app.save(r288); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r289 = new Record(collection);
  r289.set("careerSlug", "network-engineer");
  r289.set("questionNumber", 91);
  r289.set("question", "What is YANG model?");
  r289.set("category", "Technical");
  r289.set("difficulty", "Advanced");
  r289.set("explanation", "Advanced level question for Network Engineer. What is YANG model?");
  try { app.save(r289); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r290 = new Record(collection);
  r290.set("careerSlug", "network-engineer");
  r290.set("questionNumber", 92);
  r290.set("question", "What is SDN?");
  r290.set("category", "Technical");
  r290.set("difficulty", "Advanced");
  r290.set("explanation", "Advanced level question for Network Engineer. What is SDN?");
  try { app.save(r290); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r291 = new Record(collection);
  r291.set("careerSlug", "network-engineer");
  r291.set("questionNumber", 93);
  r291.set("question", "What is OpenFlow?");
  r291.set("category", "Behavioral");
  r291.set("difficulty", "Advanced");
  r291.set("explanation", "Advanced level question for Network Engineer. What is OpenFlow?");
  try { app.save(r291); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r292 = new Record(collection);
  r292.set("careerSlug", "network-engineer");
  r292.set("questionNumber", 94);
  r292.set("question", "What is NFV?");
  r292.set("category", "Technical");
  r292.set("difficulty", "Advanced");
  r292.set("explanation", "Advanced level question for Network Engineer. What is NFV?");
  try { app.save(r292); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r293 = new Record(collection);
  r293.set("careerSlug", "network-engineer");
  r293.set("questionNumber", 95);
  r293.set("question", "What is network slicing (5G)?");
  r293.set("category", "Technical");
  r293.set("difficulty", "Advanced");
  r293.set("explanation", "Advanced level question for Network Engineer. What is network slicing (5G)?");
  try { app.save(r293); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r294 = new Record(collection);
  r294.set("careerSlug", "network-engineer");
  r294.set("questionNumber", 96);
  r294.set("question", "What is 5G core network?");
  r294.set("category", "System Design");
  r294.set("difficulty", "Advanced");
  r294.set("explanation", "Advanced level question for Network Engineer. What is 5G core network?");
  try { app.save(r294); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r295 = new Record(collection);
  r295.set("careerSlug", "network-engineer");
  r295.set("questionNumber", 97);
  r295.set("question", "What is network virtualization?");
  r295.set("category", "Technical");
  r295.set("difficulty", "Advanced");
  r295.set("explanation", "Advanced level question for Network Engineer. What is network virtualization?");
  try { app.save(r295); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r296 = new Record(collection);
  r296.set("careerSlug", "network-engineer");
  r296.set("questionNumber", 98);
  r296.set("question", "What is overlay vs underlay?");
  r296.set("category", "Technical");
  r296.set("difficulty", "Advanced");
  r296.set("explanation", "Advanced level question for Network Engineer. What is overlay vs underlay?");
  try { app.save(r296); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r297 = new Record(collection);
  r297.set("careerSlug", "network-engineer");
  r297.set("questionNumber", 99);
  r297.set("question", "What is VXLAN?");
  r297.set("category", "Behavioral");
  r297.set("difficulty", "Advanced");
  r297.set("explanation", "Advanced level question for Network Engineer. What is VXLAN?");
  try { app.save(r297); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r298 = new Record(collection);
  r298.set("careerSlug", "solutions-architect");
  r298.set("questionNumber", 1);
  r298.set("question", "What is a solutions architect?");
  r298.set("category", "Technical");
  r298.set("difficulty", "Beginner");
  r298.set("explanation", "Beginner level question for Solutions Architect. What is a solutions architect?");
  try { app.save(r298); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r299 = new Record(collection);
  r299.set("careerSlug", "solutions-architect");
  r299.set("questionNumber", 2);
  r299.set("question", "What is the difference between solutions architect and software architect?");
  r299.set("category", "Technical");
  r299.set("difficulty", "Beginner");
  r299.set("explanation", "Beginner level question for Solutions Architect. What is the difference between solutions architect and software architect?");
  try { app.save(r299); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r300 = new Record(collection);
  r300.set("careerSlug", "solutions-architect");
  r300.set("questionNumber", 3);
  r300.set("question", "What is TOGAF?");
  r300.set("category", "Behavioral");
  r300.set("difficulty", "Beginner");
  r300.set("explanation", "Beginner level question for Solutions Architect. What is TOGAF?");
  try { app.save(r300); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r301 = new Record(collection);
  r301.set("careerSlug", "solutions-architect");
  r301.set("questionNumber", 4);
  r301.set("question", "What is the AWS Well-Architected Framework?");
  r301.set("category", "Technical");
  r301.set("difficulty", "Beginner");
  r301.set("explanation", "Beginner level question for Solutions Architect. What is the AWS Well-Architected Framework?");
  try { app.save(r301); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r302 = new Record(collection);
  r302.set("careerSlug", "solutions-architect");
  r302.set("questionNumber", 5);
  r302.set("question", "What are the 6 pillars of AWS Well-Architected?");
  r302.set("category", "Technical");
  r302.set("difficulty", "Beginner");
  r302.set("explanation", "Beginner level question for Solutions Architect. What are the 6 pillars of AWS Well-Architected?");
  try { app.save(r302); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r303 = new Record(collection);
  r303.set("careerSlug", "solutions-architect");
  r303.set("questionNumber", 6);
  r303.set("question", "What is operational excellence?");
  r303.set("category", "System Design");
  r303.set("difficulty", "Beginner");
  r303.set("explanation", "Beginner level question for Solutions Architect. What is operational excellence?");
  try { app.save(r303); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r304 = new Record(collection);
  r304.set("careerSlug", "solutions-architect");
  r304.set("questionNumber", 7);
  r304.set("question", "What is security pillar?");
  r304.set("category", "Technical");
  r304.set("difficulty", "Beginner");
  r304.set("explanation", "Beginner level question for Solutions Architect. What is security pillar?");
  try { app.save(r304); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r305 = new Record(collection);
  r305.set("careerSlug", "solutions-architect");
  r305.set("questionNumber", 8);
  r305.set("question", "What is reliability pillar?");
  r305.set("category", "Technical");
  r305.set("difficulty", "Beginner");
  r305.set("explanation", "Beginner level question for Solutions Architect. What is reliability pillar?");
  try { app.save(r305); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r306 = new Record(collection);
  r306.set("careerSlug", "solutions-architect");
  r306.set("questionNumber", 9);
  r306.set("question", "What is performance efficiency?");
  r306.set("category", "Behavioral");
  r306.set("difficulty", "Beginner");
  r306.set("explanation", "Beginner level question for Solutions Architect. What is performance efficiency?");
  try { app.save(r306); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r307 = new Record(collection);
  r307.set("careerSlug", "solutions-architect");
  r307.set("questionNumber", 10);
  r307.set("question", "What is cost optimization pillar?");
  r307.set("category", "Technical");
  r307.set("difficulty", "Beginner");
  r307.set("explanation", "Beginner level question for Solutions Architect. What is cost optimization pillar?");
  try { app.save(r307); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r308 = new Record(collection);
  r308.set("careerSlug", "solutions-architect");
  r308.set("questionNumber", 11);
  r308.set("question", "What is sustainability pillar?");
  r308.set("category", "Technical");
  r308.set("difficulty", "Beginner");
  r308.set("explanation", "Beginner level question for Solutions Architect. What is sustainability pillar?");
  try { app.save(r308); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r309 = new Record(collection);
  r309.set("careerSlug", "solutions-architect");
  r309.set("questionNumber", 12);
  r309.set("question", "What is a non-functional requirement?");
  r309.set("category", "System Design");
  r309.set("difficulty", "Beginner");
  r309.set("explanation", "Beginner level question for Solutions Architect. What is a non-functional requirement?");
  try { app.save(r309); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r310 = new Record(collection);
  r310.set("careerSlug", "solutions-architect");
  r310.set("questionNumber", 13);
  r310.set("question", "What is scalability?");
  r310.set("category", "Technical");
  r310.set("difficulty", "Beginner");
  r310.set("explanation", "Beginner level question for Solutions Architect. What is scalability?");
  try { app.save(r310); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r311 = new Record(collection);
  r311.set("careerSlug", "solutions-architect");
  r311.set("questionNumber", 14);
  r311.set("question", "What is availability?");
  r311.set("category", "Technical");
  r311.set("difficulty", "Beginner");
  r311.set("explanation", "Beginner level question for Solutions Architect. What is availability?");
  try { app.save(r311); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r312 = new Record(collection);
  r312.set("careerSlug", "solutions-architect");
  r312.set("questionNumber", 15);
  r312.set("question", "What is reliability?");
  r312.set("category", "Behavioral");
  r312.set("difficulty", "Beginner");
  r312.set("explanation", "Beginner level question for Solutions Architect. What is reliability?");
  try { app.save(r312); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r313 = new Record(collection);
  r313.set("careerSlug", "solutions-architect");
  r313.set("questionNumber", 16);
  r313.set("question", "What is performance?");
  r313.set("category", "Technical");
  r313.set("difficulty", "Beginner");
  r313.set("explanation", "Beginner level question for Solutions Architect. What is performance?");
  try { app.save(r313); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r314 = new Record(collection);
  r314.set("careerSlug", "solutions-architect");
  r314.set("questionNumber", 17);
  r314.set("question", "What is security architecture?");
  r314.set("category", "Technical");
  r314.set("difficulty", "Beginner");
  r314.set("explanation", "Beginner level question for Solutions Architect. What is security architecture?");
  try { app.save(r314); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r315 = new Record(collection);
  r315.set("careerSlug", "solutions-architect");
  r315.set("questionNumber", 18);
  r315.set("question", "What is defense in depth?");
  r315.set("category", "System Design");
  r315.set("difficulty", "Beginner");
  r315.set("explanation", "Beginner level question for Solutions Architect. What is defense in depth?");
  try { app.save(r315); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r316 = new Record(collection);
  r316.set("careerSlug", "solutions-architect");
  r316.set("questionNumber", 19);
  r316.set("question", "What is zero trust?");
  r316.set("category", "Technical");
  r316.set("difficulty", "Beginner");
  r316.set("explanation", "Beginner level question for Solutions Architect. What is zero trust?");
  try { app.save(r316); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r317 = new Record(collection);
  r317.set("careerSlug", "solutions-architect");
  r317.set("questionNumber", 20);
  r317.set("question", "What is a reference architecture?");
  r317.set("category", "Technical");
  r317.set("difficulty", "Beginner");
  r317.set("explanation", "Beginner level question for Solutions Architect. What is a reference architecture?");
  try { app.save(r317); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r318 = new Record(collection);
  r318.set("careerSlug", "solutions-architect");
  r318.set("questionNumber", 21);
  r318.set("question", "What is a design pattern?");
  r318.set("category", "Behavioral");
  r318.set("difficulty", "Beginner");
  r318.set("explanation", "Beginner level question for Solutions Architect. What is a design pattern?");
  try { app.save(r318); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r319 = new Record(collection);
  r319.set("careerSlug", "solutions-architect");
  r319.set("questionNumber", 22);
  r319.set("question", "What is microservices architecture?");
  r319.set("category", "Technical");
  r319.set("difficulty", "Beginner");
  r319.set("explanation", "Beginner level question for Solutions Architect. What is microservices architecture?");
  try { app.save(r319); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r320 = new Record(collection);
  r320.set("careerSlug", "solutions-architect");
  r320.set("questionNumber", 23);
  r320.set("question", "What is SOA vs microservices?");
  r320.set("category", "Technical");
  r320.set("difficulty", "Beginner");
  r320.set("explanation", "Beginner level question for Solutions Architect. What is SOA vs microservices?");
  try { app.save(r320); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r321 = new Record(collection);
  r321.set("careerSlug", "solutions-architect");
  r321.set("questionNumber", 24);
  r321.set("question", "What is event-driven architecture?");
  r321.set("category", "System Design");
  r321.set("difficulty", "Beginner");
  r321.set("explanation", "Beginner level question for Solutions Architect. What is event-driven architecture?");
  try { app.save(r321); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r322 = new Record(collection);
  r322.set("careerSlug", "solutions-architect");
  r322.set("questionNumber", 25);
  r322.set("question", "What is CQRS?");
  r322.set("category", "Technical");
  r322.set("difficulty", "Beginner");
  r322.set("explanation", "Beginner level question for Solutions Architect. What is CQRS?");
  try { app.save(r322); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r323 = new Record(collection);
  r323.set("careerSlug", "solutions-architect");
  r323.set("questionNumber", 26);
  r323.set("question", "What is event sourcing?");
  r323.set("category", "Technical");
  r323.set("difficulty", "Beginner");
  r323.set("explanation", "Beginner level question for Solutions Architect. What is event sourcing?");
  try { app.save(r323); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r324 = new Record(collection);
  r324.set("careerSlug", "solutions-architect");
  r324.set("questionNumber", 27);
  r324.set("question", "What is domain-driven design?");
  r324.set("category", "Behavioral");
  r324.set("difficulty", "Beginner");
  r324.set("explanation", "Beginner level question for Solutions Architect. What is domain-driven design?");
  try { app.save(r324); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r325 = new Record(collection);
  r325.set("careerSlug", "solutions-architect");
  r325.set("questionNumber", 28);
  r325.set("question", "What is bounded context?");
  r325.set("category", "Technical");
  r325.set("difficulty", "Beginner");
  r325.set("explanation", "Beginner level question for Solutions Architect. What is bounded context?");
  try { app.save(r325); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r326 = new Record(collection);
  r326.set("careerSlug", "solutions-architect");
  r326.set("questionNumber", 29);
  r326.set("question", "What is API-first design?");
  r326.set("category", "Technical");
  r326.set("difficulty", "Beginner");
  r326.set("explanation", "Beginner level question for Solutions Architect. What is API-first design?");
  try { app.save(r326); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r327 = new Record(collection);
  r327.set("careerSlug", "solutions-architect");
  r327.set("questionNumber", 30);
  r327.set("question", "What is async vs sync communication?");
  r327.set("category", "System Design");
  r327.set("difficulty", "Beginner");
  r327.set("explanation", "Beginner level question for Solutions Architect. What is async vs sync communication?");
  try { app.save(r327); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r328 = new Record(collection);
  r328.set("careerSlug", "solutions-architect");
  r328.set("questionNumber", 31);
  r328.set("question", "What is a message broker?");
  r328.set("category", "Technical");
  r328.set("difficulty", "Beginner");
  r328.set("explanation", "Beginner level question for Solutions Architect. What is a message broker?");
  try { app.save(r328); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r329 = new Record(collection);
  r329.set("careerSlug", "solutions-architect");
  r329.set("questionNumber", 32);
  r329.set("question", "What is a service bus?");
  r329.set("category", "Technical");
  r329.set("difficulty", "Beginner");
  r329.set("explanation", "Beginner level question for Solutions Architect. What is a service bus?");
  try { app.save(r329); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r330 = new Record(collection);
  r330.set("careerSlug", "solutions-architect");
  r330.set("questionNumber", 33);
  r330.set("question", "What is a data architecture?");
  r330.set("category", "Behavioral");
  r330.set("difficulty", "Beginner");
  r330.set("explanation", "Beginner level question for Solutions Architect. What is a data architecture?");
  try { app.save(r330); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r331 = new Record(collection);
  r331.set("careerSlug", "solutions-architect");
  r331.set("questionNumber", 34);
  r331.set("question", "What is a data warehouse vs data lake?");
  r331.set("category", "Technical");
  r331.set("difficulty", "Intermediate");
  r331.set("explanation", "Intermediate level question for Solutions Architect. What is a data warehouse vs data lake?");
  try { app.save(r331); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r332 = new Record(collection);
  r332.set("careerSlug", "solutions-architect");
  r332.set("questionNumber", 35);
  r332.set("question", "What is a data lakehouse?");
  r332.set("category", "Technical");
  r332.set("difficulty", "Intermediate");
  r332.set("explanation", "Intermediate level question for Solutions Architect. What is a data lakehouse?");
  try { app.save(r332); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r333 = new Record(collection);
  r333.set("careerSlug", "solutions-architect");
  r333.set("questionNumber", 36);
  r333.set("question", "What is enterprise architecture?");
  r333.set("category", "System Design");
  r333.set("difficulty", "Intermediate");
  r333.set("explanation", "Intermediate level question for Solutions Architect. What is enterprise architecture?");
  try { app.save(r333); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r334 = new Record(collection);
  r334.set("careerSlug", "solutions-architect");
  r334.set("questionNumber", 37);
  r334.set("question", "What is a technology roadmap?");
  r334.set("category", "Technical");
  r334.set("difficulty", "Intermediate");
  r334.set("explanation", "Intermediate level question for Solutions Architect. What is a technology roadmap?");
  try { app.save(r334); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r335 = new Record(collection);
  r335.set("careerSlug", "solutions-architect");
  r335.set("questionNumber", 38);
  r335.set("question", "What is TCO (Total Cost of Ownership)?");
  r335.set("category", "Technical");
  r335.set("difficulty", "Intermediate");
  r335.set("explanation", "Intermediate level question for Solutions Architect. What is TCO (Total Cost of Ownership)?");
  try { app.save(r335); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r336 = new Record(collection);
  r336.set("careerSlug", "solutions-architect");
  r336.set("questionNumber", 39);
  r336.set("question", "What is ROI in architecture decisions?");
  r336.set("category", "Behavioral");
  r336.set("difficulty", "Intermediate");
  r336.set("explanation", "Intermediate level question for Solutions Architect. What is ROI in architecture decisions?");
  try { app.save(r336); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r337 = new Record(collection);
  r337.set("careerSlug", "solutions-architect");
  r337.set("questionNumber", 40);
  r337.set("question", "What is CapEx vs OpEx in cloud?");
  r337.set("category", "Technical");
  r337.set("difficulty", "Intermediate");
  r337.set("explanation", "Intermediate level question for Solutions Architect. What is CapEx vs OpEx in cloud?");
  try { app.save(r337); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r338 = new Record(collection);
  r338.set("careerSlug", "solutions-architect");
  r338.set("questionNumber", 41);
  r338.set("question", "What is a build vs buy decision?");
  r338.set("category", "Technical");
  r338.set("difficulty", "Intermediate");
  r338.set("explanation", "Intermediate level question for Solutions Architect. What is a build vs buy decision?");
  try { app.save(r338); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r339 = new Record(collection);
  r339.set("careerSlug", "solutions-architect");
  r339.set("questionNumber", 42);
  r339.set("question", "What is vendor lock-in?");
  r339.set("category", "System Design");
  r339.set("difficulty", "Intermediate");
  r339.set("explanation", "Intermediate level question for Solutions Architect. What is vendor lock-in?");
  try { app.save(r339); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r340 = new Record(collection);
  r340.set("careerSlug", "solutions-architect");
  r340.set("questionNumber", 43);
  r340.set("question", "What is multi-cloud strategy?");
  r340.set("category", "Technical");
  r340.set("difficulty", "Intermediate");
  r340.set("explanation", "Intermediate level question for Solutions Architect. What is multi-cloud strategy?");
  try { app.save(r340); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r341 = new Record(collection);
  r341.set("careerSlug", "solutions-architect");
  r341.set("questionNumber", 44);
  r341.set("question", "What is hybrid cloud?");
  r341.set("category", "Technical");
  r341.set("difficulty", "Intermediate");
  r341.set("explanation", "Intermediate level question for Solutions Architect. What is hybrid cloud?");
  try { app.save(r341); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r342 = new Record(collection);
  r342.set("careerSlug", "solutions-architect");
  r342.set("questionNumber", 45);
  r342.set("question", "What is cloud migration strategy (6 Rs)?");
  r342.set("category", "Behavioral");
  r342.set("difficulty", "Intermediate");
  r342.set("explanation", "Intermediate level question for Solutions Architect. What is cloud migration strategy (6 Rs)?");
  try { app.save(r342); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r343 = new Record(collection);
  r343.set("careerSlug", "solutions-architect");
  r343.set("questionNumber", 46);
  r343.set("question", "What is lift and shift?");
  r343.set("category", "Technical");
  r343.set("difficulty", "Intermediate");
  r343.set("explanation", "Intermediate level question for Solutions Architect. What is lift and shift?");
  try { app.save(r343); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r344 = new Record(collection);
  r344.set("careerSlug", "solutions-architect");
  r344.set("questionNumber", 47);
  r344.set("question", "What is cloud-native architecture?");
  r344.set("category", "Technical");
  r344.set("difficulty", "Intermediate");
  r344.set("explanation", "Intermediate level question for Solutions Architect. What is cloud-native architecture?");
  try { app.save(r344); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r345 = new Record(collection);
  r345.set("careerSlug", "solutions-architect");
  r345.set("questionNumber", 48);
  r345.set("question", "What is a 12-factor app?");
  r345.set("category", "System Design");
  r345.set("difficulty", "Intermediate");
  r345.set("explanation", "Intermediate level question for Solutions Architect. What is a 12-factor app?");
  try { app.save(r345); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r346 = new Record(collection);
  r346.set("careerSlug", "solutions-architect");
  r346.set("questionNumber", 49);
  r346.set("question", "What is containerization?");
  r346.set("category", "Technical");
  r346.set("difficulty", "Intermediate");
  r346.set("explanation", "Intermediate level question for Solutions Architect. What is containerization?");
  try { app.save(r346); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r347 = new Record(collection);
  r347.set("careerSlug", "solutions-architect");
  r347.set("questionNumber", 50);
  r347.set("question", "What is serverless architecture?");
  r347.set("category", "Technical");
  r347.set("difficulty", "Intermediate");
  r347.set("explanation", "Intermediate level question for Solutions Architect. What is serverless architecture?");
  try { app.save(r347); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r348 = new Record(collection);
  r348.set("careerSlug", "solutions-architect");
  r348.set("questionNumber", 51);
  r348.set("question", "What is API gateway?");
  r348.set("category", "Behavioral");
  r348.set("difficulty", "Intermediate");
  r348.set("explanation", "Intermediate level question for Solutions Architect. What is API gateway?");
  try { app.save(r348); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r349 = new Record(collection);
  r349.set("careerSlug", "solutions-architect");
  r349.set("questionNumber", 52);
  r349.set("question", "What is service mesh?");
  r349.set("category", "Technical");
  r349.set("difficulty", "Intermediate");
  r349.set("explanation", "Intermediate level question for Solutions Architect. What is service mesh?");
  try { app.save(r349); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r350 = new Record(collection);
  r350.set("careerSlug", "solutions-architect");
  r350.set("questionNumber", 53);
  r350.set("question", "What is database per service pattern?");
  r350.set("category", "Technical");
  r350.set("difficulty", "Intermediate");
  r350.set("explanation", "Intermediate level question for Solutions Architect. What is database per service pattern?");
  try { app.save(r350); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r351 = new Record(collection);
  r351.set("careerSlug", "solutions-architect");
  r351.set("questionNumber", 54);
  r351.set("question", "What is shared database anti-pattern?");
  r351.set("category", "System Design");
  r351.set("difficulty", "Intermediate");
  r351.set("explanation", "Intermediate level question for Solutions Architect. What is shared database anti-pattern?");
  try { app.save(r351); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r352 = new Record(collection);
  r352.set("careerSlug", "solutions-architect");
  r352.set("questionNumber", 55);
  r352.set("question", "What is the strangler fig pattern?");
  r352.set("category", "Technical");
  r352.set("difficulty", "Intermediate");
  r352.set("explanation", "Intermediate level question for Solutions Architect. What is the strangler fig pattern?");
  try { app.save(r352); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r353 = new Record(collection);
  r353.set("careerSlug", "solutions-architect");
  r353.set("questionNumber", 56);
  r353.set("question", "What is blue-green deployment?");
  r353.set("category", "Technical");
  r353.set("difficulty", "Intermediate");
  r353.set("explanation", "Intermediate level question for Solutions Architect. What is blue-green deployment?");
  try { app.save(r353); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r354 = new Record(collection);
  r354.set("careerSlug", "solutions-architect");
  r354.set("questionNumber", 57);
  r354.set("question", "What is disaster recovery architecture?");
  r354.set("category", "Behavioral");
  r354.set("difficulty", "Intermediate");
  r354.set("explanation", "Intermediate level question for Solutions Architect. What is disaster recovery architecture?");
  try { app.save(r354); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r355 = new Record(collection);
  r355.set("careerSlug", "solutions-architect");
  r355.set("questionNumber", 58);
  r355.set("question", "What is RTO vs RPO?");
  r355.set("category", "Technical");
  r355.set("difficulty", "Intermediate");
  r355.set("explanation", "Intermediate level question for Solutions Architect. What is RTO vs RPO?");
  try { app.save(r355); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r356 = new Record(collection);
  r356.set("careerSlug", "solutions-architect");
  r356.set("questionNumber", 59);
  r356.set("question", "What is active-active vs active-passive?");
  r356.set("category", "Technical");
  r356.set("difficulty", "Intermediate");
  r356.set("explanation", "Intermediate level question for Solutions Architect. What is active-active vs active-passive?");
  try { app.save(r356); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r357 = new Record(collection);
  r357.set("careerSlug", "solutions-architect");
  r357.set("questionNumber", 60);
  r357.set("question", "What is a CDN architecture?");
  r357.set("category", "System Design");
  r357.set("difficulty", "Intermediate");
  r357.set("explanation", "Intermediate level question for Solutions Architect. What is a CDN architecture?");
  try { app.save(r357); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r358 = new Record(collection);
  r358.set("careerSlug", "solutions-architect");
  r358.set("questionNumber", 61);
  r358.set("question", "What is a global accelerator?");
  r358.set("category", "Technical");
  r358.set("difficulty", "Intermediate");
  r358.set("explanation", "Intermediate level question for Solutions Architect. What is a global accelerator?");
  try { app.save(r358); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r359 = new Record(collection);
  r359.set("careerSlug", "solutions-architect");
  r359.set("questionNumber", 62);
  r359.set("question", "What is latency optimization?");
  r359.set("category", "Technical");
  r359.set("difficulty", "Intermediate");
  r359.set("explanation", "Intermediate level question for Solutions Architect. What is latency optimization?");
  try { app.save(r359); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r360 = new Record(collection);
  r360.set("careerSlug", "solutions-architect");
  r360.set("questionNumber", 63);
  r360.set("question", "What is caching architecture?");
  r360.set("category", "Behavioral");
  r360.set("difficulty", "Intermediate");
  r360.set("explanation", "Intermediate level question for Solutions Architect. What is caching architecture?");
  try { app.save(r360); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r361 = new Record(collection);
  r361.set("careerSlug", "solutions-architect");
  r361.set("questionNumber", 64);
  r361.set("question", "What is OLTP vs OLAP?");
  r361.set("category", "Technical");
  r361.set("difficulty", "Intermediate");
  r361.set("explanation", "Intermediate level question for Solutions Architect. What is OLTP vs OLAP?");
  try { app.save(r361); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r362 = new Record(collection);
  r362.set("careerSlug", "solutions-architect");
  r362.set("questionNumber", 65);
  r362.set("question", "What is data streaming architecture?");
  r362.set("category", "Technical");
  r362.set("difficulty", "Intermediate");
  r362.set("explanation", "Intermediate level question for Solutions Architect. What is data streaming architecture?");
  try { app.save(r362); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r363 = new Record(collection);
  r363.set("careerSlug", "solutions-architect");
  r363.set("questionNumber", 66);
  r363.set("question", "What is a real-time architecture?");
  r363.set("category", "System Design");
  r363.set("difficulty", "Intermediate");
  r363.set("explanation", "Intermediate level question for Solutions Architect. What is a real-time architecture?");
  try { app.save(r363); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r364 = new Record(collection);
  r364.set("careerSlug", "solutions-architect");
  r364.set("questionNumber", 67);
  r364.set("question", "What is IoT architecture?");
  r364.set("category", "Technical");
  r364.set("difficulty", "Intermediate");
  r364.set("explanation", "Intermediate level question for Solutions Architect. What is IoT architecture?");
  try { app.save(r364); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r365 = new Record(collection);
  r365.set("careerSlug", "solutions-architect");
  r365.set("questionNumber", 68);
  r365.set("question", "What is edge computing architecture?");
  r365.set("category", "Technical");
  r365.set("difficulty", "Advanced");
  r365.set("explanation", "Advanced level question for Solutions Architect. What is edge computing architecture?");
  try { app.save(r365); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r366 = new Record(collection);
  r366.set("careerSlug", "solutions-architect");
  r366.set("questionNumber", 69);
  r366.set("question", "What is ML platform architecture?");
  r366.set("category", "Behavioral");
  r366.set("difficulty", "Advanced");
  r366.set("explanation", "Advanced level question for Solutions Architect. What is ML platform architecture?");
  try { app.save(r366); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r367 = new Record(collection);
  r367.set("careerSlug", "solutions-architect");
  r367.set("questionNumber", 70);
  r367.set("question", "What is a security architecture review?");
  r367.set("category", "Technical");
  r367.set("difficulty", "Advanced");
  r367.set("explanation", "Advanced level question for Solutions Architect. What is a security architecture review?");
  try { app.save(r367); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r368 = new Record(collection);
  r368.set("careerSlug", "solutions-architect");
  r368.set("questionNumber", 71);
  r368.set("question", "What is threat modeling?");
  r368.set("category", "Technical");
  r368.set("difficulty", "Advanced");
  r368.set("explanation", "Advanced level question for Solutions Architect. What is threat modeling?");
  try { app.save(r368); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r369 = new Record(collection);
  r369.set("careerSlug", "solutions-architect");
  r369.set("questionNumber", 72);
  r369.set("question", "What is a compliance framework?");
  r369.set("category", "System Design");
  r369.set("difficulty", "Advanced");
  r369.set("explanation", "Advanced level question for Solutions Architect. What is a compliance framework?");
  try { app.save(r369); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r370 = new Record(collection);
  r370.set("careerSlug", "solutions-architect");
  r370.set("questionNumber", 73);
  r370.set("question", "What is ISO 27001 for architects?");
  r370.set("category", "Technical");
  r370.set("difficulty", "Advanced");
  r370.set("explanation", "Advanced level question for Solutions Architect. What is ISO 27001 for architects?");
  try { app.save(r370); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r371 = new Record(collection);
  r371.set("careerSlug", "solutions-architect");
  r371.set("questionNumber", 74);
  r371.set("question", "What is PCI-DSS architecture?");
  r371.set("category", "Technical");
  r371.set("difficulty", "Advanced");
  r371.set("explanation", "Advanced level question for Solutions Architect. What is PCI-DSS architecture?");
  try { app.save(r371); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r372 = new Record(collection);
  r372.set("careerSlug", "solutions-architect");
  r372.set("questionNumber", 75);
  r372.set("question", "What is HIPAA architecture?");
  r372.set("category", "Behavioral");
  r372.set("difficulty", "Advanced");
  r372.set("explanation", "Advanced level question for Solutions Architect. What is HIPAA architecture?");
  try { app.save(r372); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r373 = new Record(collection);
  r373.set("careerSlug", "solutions-architect");
  r373.set("questionNumber", 76);
  r373.set("question", "What is a landing zone?");
  r373.set("category", "Technical");
  r373.set("difficulty", "Advanced");
  r373.set("explanation", "Advanced level question for Solutions Architect. What is a landing zone?");
  try { app.save(r373); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r374 = new Record(collection);
  r374.set("careerSlug", "solutions-architect");
  r374.set("questionNumber", 77);
  r374.set("question", "What is an AWS account structure?");
  r374.set("category", "Technical");
  r374.set("difficulty", "Advanced");
  r374.set("explanation", "Advanced level question for Solutions Architect. What is an AWS account structure?");
  try { app.save(r374); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r375 = new Record(collection);
  r375.set("careerSlug", "solutions-architect");
  r375.set("questionNumber", 78);
  r375.set("question", "What is a control tower?");
  r375.set("category", "System Design");
  r375.set("difficulty", "Advanced");
  r375.set("explanation", "Advanced level question for Solutions Architect. What is a control tower?");
  try { app.save(r375); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r376 = new Record(collection);
  r376.set("careerSlug", "solutions-architect");
  r376.set("questionNumber", 79);
  r376.set("question", "What is organizational unit?");
  r376.set("category", "Technical");
  r376.set("difficulty", "Advanced");
  r376.set("explanation", "Advanced level question for Solutions Architect. What is organizational unit?");
  try { app.save(r376); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r377 = new Record(collection);
  r377.set("careerSlug", "solutions-architect");
  r377.set("questionNumber", 80);
  r377.set("question", "What is infrastructure as code for architects?");
  r377.set("category", "Technical");
  r377.set("difficulty", "Advanced");
  r377.set("explanation", "Advanced level question for Solutions Architect. What is infrastructure as code for architects?");
  try { app.save(r377); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r378 = new Record(collection);
  r378.set("careerSlug", "solutions-architect");
  r378.set("questionNumber", 81);
  r378.set("question", "What is GitOps for architects?");
  r378.set("category", "Behavioral");
  r378.set("difficulty", "Advanced");
  r378.set("explanation", "Advanced level question for Solutions Architect. What is GitOps for architects?");
  try { app.save(r378); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r379 = new Record(collection);
  r379.set("careerSlug", "solutions-architect");
  r379.set("questionNumber", 82);
  r379.set("question", "What is observability architecture?");
  r379.set("category", "Technical");
  r379.set("difficulty", "Advanced");
  r379.set("explanation", "Advanced level question for Solutions Architect. What is observability architecture?");
  try { app.save(r379); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r380 = new Record(collection);
  r380.set("careerSlug", "solutions-architect");
  r380.set("questionNumber", 83);
  r380.set("question", "What is the 4 golden signals for architects?");
  r380.set("category", "Technical");
  r380.set("difficulty", "Advanced");
  r380.set("explanation", "Advanced level question for Solutions Architect. What is the 4 golden signals for architects?");
  try { app.save(r380); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r381 = new Record(collection);
  r381.set("careerSlug", "solutions-architect");
  r381.set("questionNumber", 84);
  r381.set("question", "What is a runbook?");
  r381.set("category", "System Design");
  r381.set("difficulty", "Advanced");
  r381.set("explanation", "Advanced level question for Solutions Architect. What is a runbook?");
  try { app.save(r381); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r382 = new Record(collection);
  r382.set("careerSlug", "solutions-architect");
  r382.set("questionNumber", 85);
  r382.set("question", "What is capacity planning from architect view?");
  r382.set("category", "Technical");
  r382.set("difficulty", "Advanced");
  r382.set("explanation", "Advanced level question for Solutions Architect. What is capacity planning from architect view?");
  try { app.save(r382); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r383 = new Record(collection);
  r383.set("careerSlug", "solutions-architect");
  r383.set("questionNumber", 86);
  r383.set("question", "What is a system context diagram?");
  r383.set("category", "Technical");
  r383.set("difficulty", "Advanced");
  r383.set("explanation", "Advanced level question for Solutions Architect. What is a system context diagram?");
  try { app.save(r383); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r384 = new Record(collection);
  r384.set("careerSlug", "solutions-architect");
  r384.set("questionNumber", 87);
  r384.set("question", "What is a C4 model?");
  r384.set("category", "Behavioral");
  r384.set("difficulty", "Advanced");
  r384.set("explanation", "Advanced level question for Solutions Architect. What is a C4 model?");
  try { app.save(r384); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r385 = new Record(collection);
  r385.set("careerSlug", "solutions-architect");
  r385.set("questionNumber", 88);
  r385.set("question", "What is arc42?");
  r385.set("category", "Technical");
  r385.set("difficulty", "Advanced");
  r385.set("explanation", "Advanced level question for Solutions Architect. What is arc42?");
  try { app.save(r385); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r386 = new Record(collection);
  r386.set("careerSlug", "solutions-architect");
  r386.set("questionNumber", 89);
  r386.set("question", "What is decision log?");
  r386.set("category", "Technical");
  r386.set("difficulty", "Advanced");
  r386.set("explanation", "Advanced level question for Solutions Architect. What is decision log?");
  try { app.save(r386); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r387 = new Record(collection);
  r387.set("careerSlug", "solutions-architect");
  r387.set("questionNumber", 90);
  r387.set("question", "What is ADR (Architecture Decision Record)?");
  r387.set("category", "System Design");
  r387.set("difficulty", "Advanced");
  r387.set("explanation", "Advanced level question for Solutions Architect. What is ADR (Architecture Decision Record)?");
  try { app.save(r387); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r388 = new Record(collection);
  r388.set("careerSlug", "solutions-architect");
  r388.set("questionNumber", 91);
  r388.set("question", "What is technical debt?");
  r388.set("category", "Technical");
  r388.set("difficulty", "Advanced");
  r388.set("explanation", "Advanced level question for Solutions Architect. What is technical debt?");
  try { app.save(r388); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r389 = new Record(collection);
  r389.set("careerSlug", "solutions-architect");
  r389.set("questionNumber", 92);
  r389.set("question", "What is a proof of concept vs pilot vs production?");
  r389.set("category", "Technical");
  r389.set("difficulty", "Advanced");
  r389.set("explanation", "Advanced level question for Solutions Architect. What is a proof of concept vs pilot vs production?");
  try { app.save(r389); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r390 = new Record(collection);
  r390.set("careerSlug", "solutions-architect");
  r390.set("questionNumber", 93);
  r390.set("question", "What is stakeholder management in architecture?");
  r390.set("category", "Behavioral");
  r390.set("difficulty", "Advanced");
  r390.set("explanation", "Advanced level question for Solutions Architect. What is stakeholder management in architecture?");
  try { app.save(r390); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r391 = new Record(collection);
  r391.set("careerSlug", "solutions-architect");
  r391.set("questionNumber", 94);
  r391.set("question", "What is a whiteboarding session?");
  r391.set("category", "Technical");
  r391.set("difficulty", "Advanced");
  r391.set("explanation", "Advanced level question for Solutions Architect. What is a whiteboarding session?");
  try { app.save(r391); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r392 = new Record(collection);
  r392.set("careerSlug", "solutions-architect");
  r392.set("questionNumber", 95);
  r392.set("question", "What is an RFP response from architect?");
  r392.set("category", "Technical");
  r392.set("difficulty", "Advanced");
  r392.set("explanation", "Advanced level question for Solutions Architect. What is an RFP response from architect?");
  try { app.save(r392); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r393 = new Record(collection);
  r393.set("careerSlug", "solutions-architect");
  r393.set("questionNumber", 96);
  r393.set("question", "What is solution sizing?");
  r393.set("category", "System Design");
  r393.set("difficulty", "Advanced");
  r393.set("explanation", "Advanced level question for Solutions Architect. What is solution sizing?");
  try { app.save(r393); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r394 = new Record(collection);
  r394.set("careerSlug", "solutions-architect");
  r394.set("questionNumber", 97);
  r394.set("question", "What is a BOM (Bill of Materials) for architecture?");
  r394.set("category", "Technical");
  r394.set("difficulty", "Advanced");
  r394.set("explanation", "Advanced level question for Solutions Architect. What is a BOM (Bill of Materials) for architecture?");
  try { app.save(r394); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r395 = new Record(collection);
  r395.set("careerSlug", "solutions-architect");
  r395.set("questionNumber", 98);
  r395.set("question", "What is cloud cost optimization as an architect?");
  r395.set("category", "Technical");
  r395.set("difficulty", "Advanced");
  r395.set("explanation", "Advanced level question for Solutions Architect. What is cloud cost optimization as an architect?");
  try { app.save(r395); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r396 = new Record(collection);
  r396.set("careerSlug", "solutions-architect");
  r396.set("questionNumber", 99);
  r396.set("question", "What is FinOps role of architect?");
  r396.set("category", "Behavioral");
  r396.set("difficulty", "Advanced");
  r396.set("explanation", "Advanced level question for Solutions Architect. What is FinOps role of architect?");
  try { app.save(r396); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r397 = new Record(collection);
  r397.set("careerSlug", "solutions-architect");
  r397.set("questionNumber", 100);
  r397.set("question", "What is a pre-sales architect?");
  r397.set("category", "Technical");
  r397.set("difficulty", "Advanced");
  r397.set("explanation", "Advanced level question for Solutions Architect. What is a pre-sales architect?");
  try { app.save(r397); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r398 = new Record(collection);
  r398.set("careerSlug", "database-administrator-database-engineer");
  r398.set("questionNumber", 1);
  r398.set("question", "What is ACID?");
  r398.set("category", "Technical");
  r398.set("difficulty", "Beginner");
  r398.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is ACID?");
  try { app.save(r398); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r399 = new Record(collection);
  r399.set("careerSlug", "database-administrator-database-engineer");
  r399.set("questionNumber", 2);
  r399.set("question", "What is atomicity?");
  r399.set("category", "Technical");
  r399.set("difficulty", "Beginner");
  r399.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is atomicity?");
  try { app.save(r399); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r400 = new Record(collection);
  r400.set("careerSlug", "database-administrator-database-engineer");
  r400.set("questionNumber", 3);
  r400.set("question", "What is consistency?");
  r400.set("category", "Behavioral");
  r400.set("difficulty", "Beginner");
  r400.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is consistency?");
  try { app.save(r400); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r401 = new Record(collection);
  r401.set("careerSlug", "database-administrator-database-engineer");
  r401.set("questionNumber", 4);
  r401.set("question", "What is isolation?");
  r401.set("category", "Technical");
  r401.set("difficulty", "Beginner");
  r401.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is isolation?");
  try { app.save(r401); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r402 = new Record(collection);
  r402.set("careerSlug", "database-administrator-database-engineer");
  r402.set("questionNumber", 5);
  r402.set("question", "What is durability?");
  r402.set("category", "Technical");
  r402.set("difficulty", "Beginner");
  r402.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is durability?");
  try { app.save(r402); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r403 = new Record(collection);
  r403.set("careerSlug", "database-administrator-database-engineer");
  r403.set("questionNumber", 6);
  r403.set("question", "What is a transaction?");
  r403.set("category", "System Design");
  r403.set("difficulty", "Beginner");
  r403.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a transaction?");
  try { app.save(r403); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r404 = new Record(collection);
  r404.set("careerSlug", "database-administrator-database-engineer");
  r404.set("questionNumber", 7);
  r404.set("question", "What is isolation levels (read uncommitted, read committed, repeatable read, serializable)?");
  r404.set("category", "Technical");
  r404.set("difficulty", "Beginner");
  r404.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is isolation levels (read uncommitted, read committed, repeatable read, serializable)?");
  try { app.save(r404); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r405 = new Record(collection);
  r405.set("careerSlug", "database-administrator-database-engineer");
  r405.set("questionNumber", 8);
  r405.set("question", "What is dirty read?");
  r405.set("category", "Technical");
  r405.set("difficulty", "Beginner");
  r405.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is dirty read?");
  try { app.save(r405); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r406 = new Record(collection);
  r406.set("careerSlug", "database-administrator-database-engineer");
  r406.set("questionNumber", 9);
  r406.set("question", "What is phantom read?");
  r406.set("category", "Behavioral");
  r406.set("difficulty", "Beginner");
  r406.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is phantom read?");
  try { app.save(r406); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r407 = new Record(collection);
  r407.set("careerSlug", "database-administrator-database-engineer");
  r407.set("questionNumber", 10);
  r407.set("question", "What is non-repeatable read?");
  r407.set("category", "Technical");
  r407.set("difficulty", "Beginner");
  r407.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is non-repeatable read?");
  try { app.save(r407); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r408 = new Record(collection);
  r408.set("careerSlug", "database-administrator-database-engineer");
  r408.set("questionNumber", 11);
  r408.set("question", "What is optimistic vs pessimistic locking?");
  r408.set("category", "Technical");
  r408.set("difficulty", "Beginner");
  r408.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is optimistic vs pessimistic locking?");
  try { app.save(r408); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r409 = new Record(collection);
  r409.set("careerSlug", "database-administrator-database-engineer");
  r409.set("questionNumber", 12);
  r409.set("question", "What is deadlock in databases?");
  r409.set("category", "System Design");
  r409.set("difficulty", "Beginner");
  r409.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is deadlock in databases?");
  try { app.save(r409); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r410 = new Record(collection);
  r410.set("careerSlug", "database-administrator-database-engineer");
  r410.set("questionNumber", 13);
  r410.set("question", "What is database index?");
  r410.set("category", "Technical");
  r410.set("difficulty", "Beginner");
  r410.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is database index?");
  try { app.save(r410); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r411 = new Record(collection);
  r411.set("careerSlug", "database-administrator-database-engineer");
  r411.set("questionNumber", 14);
  r411.set("question", "What is B-tree index?");
  r411.set("category", "Technical");
  r411.set("difficulty", "Beginner");
  r411.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is B-tree index?");
  try { app.save(r411); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r412 = new Record(collection);
  r412.set("careerSlug", "database-administrator-database-engineer");
  r412.set("questionNumber", 15);
  r412.set("question", "What is hash index?");
  r412.set("category", "Behavioral");
  r412.set("difficulty", "Beginner");
  r412.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is hash index?");
  try { app.save(r412); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r413 = new Record(collection);
  r413.set("careerSlug", "database-administrator-database-engineer");
  r413.set("questionNumber", 16);
  r413.set("question", "What is composite index?");
  r413.set("category", "Technical");
  r413.set("difficulty", "Beginner");
  r413.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is composite index?");
  try { app.save(r413); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r414 = new Record(collection);
  r414.set("careerSlug", "database-administrator-database-engineer");
  r414.set("questionNumber", 17);
  r414.set("question", "What is covering index?");
  r414.set("category", "Technical");
  r414.set("difficulty", "Beginner");
  r414.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is covering index?");
  try { app.save(r414); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r415 = new Record(collection);
  r415.set("careerSlug", "database-administrator-database-engineer");
  r415.set("questionNumber", 18);
  r415.set("question", "What is index selectivity?");
  r415.set("category", "System Design");
  r415.set("difficulty", "Beginner");
  r415.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is index selectivity?");
  try { app.save(r415); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r416 = new Record(collection);
  r416.set("careerSlug", "database-administrator-database-engineer");
  r416.set("questionNumber", 19);
  r416.set("question", "What is EXPLAIN in PostgreSQL?");
  r416.set("category", "Technical");
  r416.set("difficulty", "Beginner");
  r416.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is EXPLAIN in PostgreSQL?");
  try { app.save(r416); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r417 = new Record(collection);
  r417.set("careerSlug", "database-administrator-database-engineer");
  r417.set("questionNumber", 20);
  r417.set("question", "What is query execution plan?");
  r417.set("category", "Technical");
  r417.set("difficulty", "Beginner");
  r417.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is query execution plan?");
  try { app.save(r417); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r418 = new Record(collection);
  r418.set("careerSlug", "database-administrator-database-engineer");
  r418.set("questionNumber", 21);
  r418.set("question", "What is sequential scan vs index scan?");
  r418.set("category", "Behavioral");
  r418.set("difficulty", "Beginner");
  r418.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is sequential scan vs index scan?");
  try { app.save(r418); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r419 = new Record(collection);
  r419.set("careerSlug", "database-administrator-database-engineer");
  r419.set("questionNumber", 22);
  r419.set("question", "What is a nested loop join?");
  r419.set("category", "Technical");
  r419.set("difficulty", "Beginner");
  r419.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a nested loop join?");
  try { app.save(r419); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r420 = new Record(collection);
  r420.set("careerSlug", "database-administrator-database-engineer");
  r420.set("questionNumber", 23);
  r420.set("question", "What is a hash join?");
  r420.set("category", "Technical");
  r420.set("difficulty", "Beginner");
  r420.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a hash join?");
  try { app.save(r420); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r421 = new Record(collection);
  r421.set("careerSlug", "database-administrator-database-engineer");
  r421.set("questionNumber", 24);
  r421.set("question", "What is a merge join?");
  r421.set("category", "System Design");
  r421.set("difficulty", "Beginner");
  r421.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a merge join?");
  try { app.save(r421); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r422 = new Record(collection);
  r422.set("careerSlug", "database-administrator-database-engineer");
  r422.set("questionNumber", 25);
  r422.set("question", "What is normalization?");
  r422.set("category", "Technical");
  r422.set("difficulty", "Beginner");
  r422.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is normalization?");
  try { app.save(r422); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r423 = new Record(collection);
  r423.set("careerSlug", "database-administrator-database-engineer");
  r423.set("questionNumber", 26);
  r423.set("question", "What is 1NF, 2NF, 3NF?");
  r423.set("category", "Technical");
  r423.set("difficulty", "Beginner");
  r423.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is 1NF, 2NF, 3NF?");
  try { app.save(r423); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r424 = new Record(collection);
  r424.set("careerSlug", "database-administrator-database-engineer");
  r424.set("questionNumber", 27);
  r424.set("question", "What is BCNF?");
  r424.set("category", "Behavioral");
  r424.set("difficulty", "Beginner");
  r424.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is BCNF?");
  try { app.save(r424); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r425 = new Record(collection);
  r425.set("careerSlug", "database-administrator-database-engineer");
  r425.set("questionNumber", 28);
  r425.set("question", "What is denormalization?");
  r425.set("category", "Technical");
  r425.set("difficulty", "Beginner");
  r425.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is denormalization?");
  try { app.save(r425); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r426 = new Record(collection);
  r426.set("careerSlug", "database-administrator-database-engineer");
  r426.set("questionNumber", 29);
  r426.set("question", "What is ERD?");
  r426.set("category", "Technical");
  r426.set("difficulty", "Beginner");
  r426.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is ERD?");
  try { app.save(r426); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r427 = new Record(collection);
  r427.set("careerSlug", "database-administrator-database-engineer");
  r427.set("questionNumber", 30);
  r427.set("question", "What is a foreign key?");
  r427.set("category", "System Design");
  r427.set("difficulty", "Beginner");
  r427.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a foreign key?");
  try { app.save(r427); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r428 = new Record(collection);
  r428.set("careerSlug", "database-administrator-database-engineer");
  r428.set("questionNumber", 31);
  r428.set("question", "What is a primary key?");
  r428.set("category", "Technical");
  r428.set("difficulty", "Beginner");
  r428.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a primary key?");
  try { app.save(r428); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r429 = new Record(collection);
  r429.set("careerSlug", "database-administrator-database-engineer");
  r429.set("questionNumber", 32);
  r429.set("question", "What is a unique constraint?");
  r429.set("category", "Technical");
  r429.set("difficulty", "Beginner");
  r429.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a unique constraint?");
  try { app.save(r429); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r430 = new Record(collection);
  r430.set("careerSlug", "database-administrator-database-engineer");
  r430.set("questionNumber", 33);
  r430.set("question", "What is a check constraint?");
  r430.set("category", "Behavioral");
  r430.set("difficulty", "Beginner");
  r430.set("explanation", "Beginner level question for Database Administrator / Database Engineer. What is a check constraint?");
  try { app.save(r430); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r431 = new Record(collection);
  r431.set("careerSlug", "database-administrator-database-engineer");
  r431.set("questionNumber", 34);
  r431.set("question", "What is a view?");
  r431.set("category", "Technical");
  r431.set("difficulty", "Intermediate");
  r431.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a view?");
  try { app.save(r431); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r432 = new Record(collection);
  r432.set("careerSlug", "database-administrator-database-engineer");
  r432.set("questionNumber", 35);
  r432.set("question", "What is a materialized view?");
  r432.set("category", "Technical");
  r432.set("difficulty", "Intermediate");
  r432.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a materialized view?");
  try { app.save(r432); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r433 = new Record(collection);
  r433.set("careerSlug", "database-administrator-database-engineer");
  r433.set("questionNumber", 36);
  r433.set("question", "What is a stored procedure?");
  r433.set("category", "System Design");
  r433.set("difficulty", "Intermediate");
  r433.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a stored procedure?");
  try { app.save(r433); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r434 = new Record(collection);
  r434.set("careerSlug", "database-administrator-database-engineer");
  r434.set("questionNumber", 37);
  r434.set("question", "What is a trigger?");
  r434.set("category", "Technical");
  r434.set("difficulty", "Intermediate");
  r434.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a trigger?");
  try { app.save(r434); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r435 = new Record(collection);
  r435.set("careerSlug", "database-administrator-database-engineer");
  r435.set("questionNumber", 38);
  r435.set("question", "What is a function in SQL?");
  r435.set("category", "Technical");
  r435.set("difficulty", "Intermediate");
  r435.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a function in SQL?");
  try { app.save(r435); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r436 = new Record(collection);
  r436.set("careerSlug", "database-administrator-database-engineer");
  r436.set("questionNumber", 39);
  r436.set("question", "What is CTE?");
  r436.set("category", "Behavioral");
  r436.set("difficulty", "Intermediate");
  r436.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is CTE?");
  try { app.save(r436); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r437 = new Record(collection);
  r437.set("careerSlug", "database-administrator-database-engineer");
  r437.set("questionNumber", 40);
  r437.set("question", "What is window function?");
  r437.set("category", "Technical");
  r437.set("difficulty", "Intermediate");
  r437.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is window function?");
  try { app.save(r437); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r438 = new Record(collection);
  r438.set("careerSlug", "database-administrator-database-engineer");
  r438.set("questionNumber", 41);
  r438.set("question", "What is RANK vs DENSE_RANK vs ROW_NUMBER?");
  r438.set("category", "Technical");
  r438.set("difficulty", "Intermediate");
  r438.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is RANK vs DENSE_RANK vs ROW_NUMBER?");
  try { app.save(r438); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r439 = new Record(collection);
  r439.set("careerSlug", "database-administrator-database-engineer");
  r439.set("questionNumber", 42);
  r439.set("question", "What is partitioning?");
  r439.set("category", "System Design");
  r439.set("difficulty", "Intermediate");
  r439.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is partitioning?");
  try { app.save(r439); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r440 = new Record(collection);
  r440.set("careerSlug", "database-administrator-database-engineer");
  r440.set("questionNumber", 43);
  r440.set("question", "What is range partitioning?");
  r440.set("category", "Technical");
  r440.set("difficulty", "Intermediate");
  r440.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is range partitioning?");
  try { app.save(r440); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r441 = new Record(collection);
  r441.set("careerSlug", "database-administrator-database-engineer");
  r441.set("questionNumber", 44);
  r441.set("question", "What is hash partitioning?");
  r441.set("category", "Technical");
  r441.set("difficulty", "Intermediate");
  r441.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is hash partitioning?");
  try { app.save(r441); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r442 = new Record(collection);
  r442.set("careerSlug", "database-administrator-database-engineer");
  r442.set("questionNumber", 45);
  r442.set("question", "What is list partitioning?");
  r442.set("category", "Behavioral");
  r442.set("difficulty", "Intermediate");
  r442.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is list partitioning?");
  try { app.save(r442); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r443 = new Record(collection);
  r443.set("careerSlug", "database-administrator-database-engineer");
  r443.set("questionNumber", 46);
  r443.set("question", "What is table inheritance?");
  r443.set("category", "Technical");
  r443.set("difficulty", "Intermediate");
  r443.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is table inheritance?");
  try { app.save(r443); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r444 = new Record(collection);
  r444.set("careerSlug", "database-administrator-database-engineer");
  r444.set("questionNumber", 47);
  r444.set("question", "What is sharding?");
  r444.set("category", "Technical");
  r444.set("difficulty", "Intermediate");
  r444.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is sharding?");
  try { app.save(r444); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r445 = new Record(collection);
  r445.set("careerSlug", "database-administrator-database-engineer");
  r445.set("questionNumber", 48);
  r445.set("question", "What is horizontal vs vertical partitioning?");
  r445.set("category", "System Design");
  r445.set("difficulty", "Intermediate");
  r445.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is horizontal vs vertical partitioning?");
  try { app.save(r445); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r446 = new Record(collection);
  r446.set("careerSlug", "database-administrator-database-engineer");
  r446.set("questionNumber", 49);
  r446.set("question", "What is replication?");
  r446.set("category", "Technical");
  r446.set("difficulty", "Intermediate");
  r446.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is replication?");
  try { app.save(r446); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r447 = new Record(collection);
  r447.set("careerSlug", "database-administrator-database-engineer");
  r447.set("questionNumber", 50);
  r447.set("question", "What is streaming replication (PostgreSQL)?");
  r447.set("category", "Technical");
  r447.set("difficulty", "Intermediate");
  r447.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is streaming replication (PostgreSQL)?");
  try { app.save(r447); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r448 = new Record(collection);
  r448.set("careerSlug", "database-administrator-database-engineer");
  r448.set("questionNumber", 51);
  r448.set("question", "What is logical replication?");
  r448.set("category", "Behavioral");
  r448.set("difficulty", "Intermediate");
  r448.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is logical replication?");
  try { app.save(r448); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r449 = new Record(collection);
  r449.set("careerSlug", "database-administrator-database-engineer");
  r449.set("questionNumber", 52);
  r449.set("question", "What is master-slave vs master-master?");
  r449.set("category", "Technical");
  r449.set("difficulty", "Intermediate");
  r449.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is master-slave vs master-master?");
  try { app.save(r449); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r450 = new Record(collection);
  r450.set("careerSlug", "database-administrator-database-engineer");
  r450.set("questionNumber", 53);
  r450.set("question", "What is read replica?");
  r450.set("category", "Technical");
  r450.set("difficulty", "Intermediate");
  r450.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is read replica?");
  try { app.save(r450); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r451 = new Record(collection);
  r451.set("careerSlug", "database-administrator-database-engineer");
  r451.set("questionNumber", 54);
  r451.set("question", "What is connection pooling?");
  r451.set("category", "System Design");
  r451.set("difficulty", "Intermediate");
  r451.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is connection pooling?");
  try { app.save(r451); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r452 = new Record(collection);
  r452.set("careerSlug", "database-administrator-database-engineer");
  r452.set("questionNumber", 55);
  r452.set("question", "What is PgBouncer?");
  r452.set("category", "Technical");
  r452.set("difficulty", "Intermediate");
  r452.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is PgBouncer?");
  try { app.save(r452); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r453 = new Record(collection);
  r453.set("careerSlug", "database-administrator-database-engineer");
  r453.set("questionNumber", 56);
  r453.set("question", "What is pg_stat_activity?");
  r453.set("category", "Technical");
  r453.set("difficulty", "Intermediate");
  r453.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is pg_stat_activity?");
  try { app.save(r453); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r454 = new Record(collection);
  r454.set("careerSlug", "database-administrator-database-engineer");
  r454.set("questionNumber", 57);
  r454.set("question", "What is autovacuum in PostgreSQL?");
  r454.set("category", "Behavioral");
  r454.set("difficulty", "Intermediate");
  r454.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is autovacuum in PostgreSQL?");
  try { app.save(r454); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r455 = new Record(collection);
  r455.set("careerSlug", "database-administrator-database-engineer");
  r455.set("questionNumber", 58);
  r455.set("question", "What is MVCC?");
  r455.set("category", "Technical");
  r455.set("difficulty", "Intermediate");
  r455.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is MVCC?");
  try { app.save(r455); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r456 = new Record(collection);
  r456.set("careerSlug", "database-administrator-database-engineer");
  r456.set("questionNumber", 59);
  r456.set("question", "What is bloat in PostgreSQL?");
  r456.set("category", "Technical");
  r456.set("difficulty", "Intermediate");
  r456.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is bloat in PostgreSQL?");
  try { app.save(r456); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r457 = new Record(collection);
  r457.set("careerSlug", "database-administrator-database-engineer");
  r457.set("questionNumber", 60);
  r457.set("question", "What is VACUUM and ANALYZE?");
  r457.set("category", "System Design");
  r457.set("difficulty", "Intermediate");
  r457.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is VACUUM and ANALYZE?");
  try { app.save(r457); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r458 = new Record(collection);
  r458.set("careerSlug", "database-administrator-database-engineer");
  r458.set("questionNumber", 61);
  r458.set("question", "What is WAL (Write-Ahead Log)?");
  r458.set("category", "Technical");
  r458.set("difficulty", "Intermediate");
  r458.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is WAL (Write-Ahead Log)?");
  try { app.save(r458); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r459 = new Record(collection);
  r459.set("careerSlug", "database-administrator-database-engineer");
  r459.set("questionNumber", 62);
  r459.set("question", "What is checkpoint?");
  r459.set("category", "Technical");
  r459.set("difficulty", "Intermediate");
  r459.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is checkpoint?");
  try { app.save(r459); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r460 = new Record(collection);
  r460.set("careerSlug", "database-administrator-database-engineer");
  r460.set("questionNumber", 63);
  r460.set("question", "What is pg_dump?");
  r460.set("category", "Behavioral");
  r460.set("difficulty", "Intermediate");
  r460.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is pg_dump?");
  try { app.save(r460); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r461 = new Record(collection);
  r461.set("careerSlug", "database-administrator-database-engineer");
  r461.set("questionNumber", 64);
  r461.set("question", "What is point-in-time recovery (PITR)?");
  r461.set("category", "Technical");
  r461.set("difficulty", "Intermediate");
  r461.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is point-in-time recovery (PITR)?");
  try { app.save(r461); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r462 = new Record(collection);
  r462.set("careerSlug", "database-administrator-database-engineer");
  r462.set("questionNumber", 65);
  r462.set("question", "What is a backup strategy?");
  r462.set("category", "Technical");
  r462.set("difficulty", "Intermediate");
  r462.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is a backup strategy?");
  try { app.save(r462); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r463 = new Record(collection);
  r463.set("careerSlug", "database-administrator-database-engineer");
  r463.set("questionNumber", 66);
  r463.set("question", "What is RTO and RPO for databases?");
  r463.set("category", "System Design");
  r463.set("difficulty", "Intermediate");
  r463.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is RTO and RPO for databases?");
  try { app.save(r463); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r464 = new Record(collection);
  r464.set("careerSlug", "database-administrator-database-engineer");
  r464.set("questionNumber", 67);
  r464.set("question", "What is failover in databases?");
  r464.set("category", "Technical");
  r464.set("difficulty", "Intermediate");
  r464.set("explanation", "Intermediate level question for Database Administrator / Database Engineer. What is failover in databases?");
  try { app.save(r464); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r465 = new Record(collection);
  r465.set("careerSlug", "database-administrator-database-engineer");
  r465.set("questionNumber", 68);
  r465.set("question", "What is high availability setup?");
  r465.set("category", "Technical");
  r465.set("difficulty", "Advanced");
  r465.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is high availability setup?");
  try { app.save(r465); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r466 = new Record(collection);
  r466.set("careerSlug", "database-administrator-database-engineer");
  r466.set("questionNumber", 69);
  r466.set("question", "What is Patroni?");
  r466.set("category", "Behavioral");
  r466.set("difficulty", "Advanced");
  r466.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Patroni?");
  try { app.save(r466); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r467 = new Record(collection);
  r467.set("careerSlug", "database-administrator-database-engineer");
  r467.set("questionNumber", 70);
  r467.set("question", "What is pgpool?");
  r467.set("category", "Technical");
  r467.set("difficulty", "Advanced");
  r467.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is pgpool?");
  try { app.save(r467); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r468 = new Record(collection);
  r468.set("careerSlug", "database-administrator-database-engineer");
  r468.set("questionNumber", 71);
  r468.set("question", "What is database security?");
  r468.set("category", "Technical");
  r468.set("difficulty", "Advanced");
  r468.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is database security?");
  try { app.save(r468); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r469 = new Record(collection);
  r469.set("careerSlug", "database-administrator-database-engineer");
  r469.set("questionNumber", 72);
  r469.set("question", "What is row-level security?");
  r469.set("category", "System Design");
  r469.set("difficulty", "Advanced");
  r469.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is row-level security?");
  try { app.save(r469); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r470 = new Record(collection);
  r470.set("careerSlug", "database-administrator-database-engineer");
  r470.set("questionNumber", 73);
  r470.set("question", "What is column-level encryption?");
  r470.set("category", "Technical");
  r470.set("difficulty", "Advanced");
  r470.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is column-level encryption?");
  try { app.save(r470); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r471 = new Record(collection);
  r471.set("careerSlug", "database-administrator-database-engineer");
  r471.set("questionNumber", 74);
  r471.set("question", "What is data masking?");
  r471.set("category", "Technical");
  r471.set("difficulty", "Advanced");
  r471.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is data masking?");
  try { app.save(r471); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r472 = new Record(collection);
  r472.set("careerSlug", "database-administrator-database-engineer");
  r472.set("questionNumber", 75);
  r472.set("question", "What is auditing in databases?");
  r472.set("category", "Behavioral");
  r472.set("difficulty", "Advanced");
  r472.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is auditing in databases?");
  try { app.save(r472); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r473 = new Record(collection);
  r473.set("careerSlug", "database-administrator-database-engineer");
  r473.set("questionNumber", 76);
  r473.set("question", "What is SQL injection?");
  r473.set("category", "Technical");
  r473.set("difficulty", "Advanced");
  r473.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is SQL injection?");
  try { app.save(r473); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r474 = new Record(collection);
  r474.set("careerSlug", "database-administrator-database-engineer");
  r474.set("questionNumber", 77);
  r474.set("question", "What is NoSQL?");
  r474.set("category", "Technical");
  r474.set("difficulty", "Advanced");
  r474.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is NoSQL?");
  try { app.save(r474); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r475 = new Record(collection);
  r475.set("careerSlug", "database-administrator-database-engineer");
  r475.set("questionNumber", 78);
  r475.set("question", "What is document store (MongoDB)?");
  r475.set("category", "System Design");
  r475.set("difficulty", "Advanced");
  r475.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is document store (MongoDB)?");
  try { app.save(r475); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r476 = new Record(collection);
  r476.set("careerSlug", "database-administrator-database-engineer");
  r476.set("questionNumber", 79);
  r476.set("question", "What is key-value store (Redis, DynamoDB)?");
  r476.set("category", "Technical");
  r476.set("difficulty", "Advanced");
  r476.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is key-value store (Redis, DynamoDB)?");
  try { app.save(r476); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r477 = new Record(collection);
  r477.set("careerSlug", "database-administrator-database-engineer");
  r477.set("questionNumber", 80);
  r477.set("question", "What is column-family store (Cassandra)?");
  r477.set("category", "Technical");
  r477.set("difficulty", "Advanced");
  r477.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is column-family store (Cassandra)?");
  try { app.save(r477); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r478 = new Record(collection);
  r478.set("careerSlug", "database-administrator-database-engineer");
  r478.set("questionNumber", 81);
  r478.set("question", "What is graph database (Neo4j)?");
  r478.set("category", "Behavioral");
  r478.set("difficulty", "Advanced");
  r478.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is graph database (Neo4j)?");
  try { app.save(r478); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r479 = new Record(collection);
  r479.set("careerSlug", "database-administrator-database-engineer");
  r479.set("questionNumber", 82);
  r479.set("question", "What is CAP theorem for database choices?");
  r479.set("category", "Technical");
  r479.set("difficulty", "Advanced");
  r479.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is CAP theorem for database choices?");
  try { app.save(r479); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r480 = new Record(collection);
  r480.set("careerSlug", "database-administrator-database-engineer");
  r480.set("questionNumber", 83);
  r480.set("question", "What is eventual consistency?");
  r480.set("category", "Technical");
  r480.set("difficulty", "Advanced");
  r480.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is eventual consistency?");
  try { app.save(r480); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r481 = new Record(collection);
  r481.set("careerSlug", "database-administrator-database-engineer");
  r481.set("questionNumber", 84);
  r481.set("question", "What is strong consistency?");
  r481.set("category", "System Design");
  r481.set("difficulty", "Advanced");
  r481.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is strong consistency?");
  try { app.save(r481); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r482 = new Record(collection);
  r482.set("careerSlug", "database-administrator-database-engineer");
  r482.set("questionNumber", 85);
  r482.set("question", "What is DynamoDB?");
  r482.set("category", "Technical");
  r482.set("difficulty", "Advanced");
  r482.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is DynamoDB?");
  try { app.save(r482); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r483 = new Record(collection);
  r483.set("careerSlug", "database-administrator-database-engineer");
  r483.set("questionNumber", 86);
  r483.set("question", "What is Cassandra architecture?");
  r483.set("category", "Technical");
  r483.set("difficulty", "Advanced");
  r483.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Cassandra architecture?");
  try { app.save(r483); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r484 = new Record(collection);
  r484.set("careerSlug", "database-administrator-database-engineer");
  r484.set("questionNumber", 87);
  r484.set("question", "What is MongoDB aggregation pipeline?");
  r484.set("category", "Behavioral");
  r484.set("difficulty", "Advanced");
  r484.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is MongoDB aggregation pipeline?");
  try { app.save(r484); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r485 = new Record(collection);
  r485.set("careerSlug", "database-administrator-database-engineer");
  r485.set("questionNumber", 88);
  r485.set("question", "What is Redis data types?");
  r485.set("category", "Technical");
  r485.set("difficulty", "Advanced");
  r485.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Redis data types?");
  try { app.save(r485); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r486 = new Record(collection);
  r486.set("careerSlug", "database-administrator-database-engineer");
  r486.set("questionNumber", 89);
  r486.set("question", "What is Redis persistence (RDB vs AOF)?");
  r486.set("category", "Technical");
  r486.set("difficulty", "Advanced");
  r486.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Redis persistence (RDB vs AOF)?");
  try { app.save(r486); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r487 = new Record(collection);
  r487.set("careerSlug", "database-administrator-database-engineer");
  r487.set("questionNumber", 90);
  r487.set("question", "What is Redis cluster?");
  r487.set("category", "System Design");
  r487.set("difficulty", "Advanced");
  r487.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Redis cluster?");
  try { app.save(r487); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r488 = new Record(collection);
  r488.set("careerSlug", "database-administrator-database-engineer");
  r488.set("questionNumber", 91);
  r488.set("question", "What is Elasticsearch?");
  r488.set("category", "Technical");
  r488.set("difficulty", "Advanced");
  r488.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Elasticsearch?");
  try { app.save(r488); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r489 = new Record(collection);
  r489.set("careerSlug", "database-administrator-database-engineer");
  r489.set("questionNumber", 92);
  r489.set("question", "What is a vector database (Pinecone, pgvector)?");
  r489.set("category", "Technical");
  r489.set("difficulty", "Advanced");
  r489.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is a vector database (Pinecone, pgvector)?");
  try { app.save(r489); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r490 = new Record(collection);
  r490.set("careerSlug", "database-administrator-database-engineer");
  r490.set("questionNumber", 93);
  r490.set("question", "What is database migration?");
  r490.set("category", "Behavioral");
  r490.set("difficulty", "Advanced");
  r490.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is database migration?");
  try { app.save(r490); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r491 = new Record(collection);
  r491.set("careerSlug", "database-administrator-database-engineer");
  r491.set("questionNumber", 94);
  r491.set("question", "What is Flyway?");
  r491.set("category", "Technical");
  r491.set("difficulty", "Advanced");
  r491.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Flyway?");
  try { app.save(r491); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r492 = new Record(collection);
  r492.set("careerSlug", "database-administrator-database-engineer");
  r492.set("questionNumber", 95);
  r492.set("question", "What is Liquibase?");
  r492.set("category", "Technical");
  r492.set("difficulty", "Advanced");
  r492.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Liquibase?");
  try { app.save(r492); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r493 = new Record(collection);
  r493.set("careerSlug", "database-administrator-database-engineer");
  r493.set("questionNumber", 96);
  r493.set("question", "What is a schema registry?");
  r493.set("category", "System Design");
  r493.set("difficulty", "Advanced");
  r493.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is a schema registry?");
  try { app.save(r493); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r494 = new Record(collection);
  r494.set("careerSlug", "database-administrator-database-engineer");
  r494.set("questionNumber", 97);
  r494.set("question", "What is OLTP vs OLAP?");
  r494.set("category", "Technical");
  r494.set("difficulty", "Advanced");
  r494.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is OLTP vs OLAP?");
  try { app.save(r494); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r495 = new Record(collection);
  r495.set("careerSlug", "database-administrator-database-engineer");
  r495.set("questionNumber", 98);
  r495.set("question", "What is columnar storage?");
  r495.set("category", "Technical");
  r495.set("difficulty", "Advanced");
  r495.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is columnar storage?");
  try { app.save(r495); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r496 = new Record(collection);
  r496.set("careerSlug", "database-administrator-database-engineer");
  r496.set("questionNumber", 99);
  r496.set("question", "What is Parquet?");
  r496.set("category", "Behavioral");
  r496.set("difficulty", "Advanced");
  r496.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Parquet?");
  try { app.save(r496); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r497 = new Record(collection);
  r497.set("careerSlug", "database-administrator-database-engineer");
  r497.set("questionNumber", 100);
  r497.set("question", "What is Snowflake architecture?");
  r497.set("category", "Technical");
  r497.set("difficulty", "Advanced");
  r497.set("explanation", "Advanced level question for Database Administrator / Database Engineer. What is Snowflake architecture?");
  try { app.save(r497); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
