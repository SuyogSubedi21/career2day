/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("quizQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "machine-learning-engineer");
  r0.set("question", "What does ML stand for?");
  r0.set("options", ["Machine Learning","Meta Language","Model Logic","Maximum Likelihood"]);
  r0.set("correctAnswer", "Machine Learning");
  r0.set("difficulty", "Beginner");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "machine-learning-engineer");
  r1.set("question", "Which library is most commonly used for ML in Python?");
  r1.set("options", ["TensorFlow","Scikit-learn","Pandas","NumPy"]);
  r1.set("correctAnswer", "Scikit-learn");
  r1.set("difficulty", "Beginner");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "machine-learning-engineer");
  r2.set("question", "What is supervised learning?");
  r2.set("options", ["Learning with labeled data","Learning without labels","Learning by reward","Learning from images"]);
  r2.set("correctAnswer", "Learning with labeled data");
  r2.set("difficulty", "Beginner");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "machine-learning-engineer");
  r3.set("question", "Which of these is a classification algorithm?");
  r3.set("options", ["Linear Regression","Logistic Regression","K-Means","PCA"]);
  r3.set("correctAnswer", "Logistic Regression");
  r3.set("difficulty", "Beginner");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "machine-learning-engineer");
  r4.set("question", "What is overfitting?");
  r4.set("options", ["Model performs well on training but poorly on test","Model performs poorly on both","Model is too simple","Model has no parameters"]);
  r4.set("correctAnswer", "Model performs well on training but poorly on test");
  r4.set("difficulty", "Beginner");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "machine-learning-engineer");
  r5.set("question", "What does the learning rate control in gradient descent?");
  r5.set("options", ["Step size during optimization","Number of neurons","Training data size","Model complexity"]);
  r5.set("correctAnswer", "Step size during optimization");
  r5.set("difficulty", "Intermediate");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "machine-learning-engineer");
  r6.set("question", "Which metric is best for imbalanced datasets?");
  r6.set("options", ["Accuracy","F1-Score","MSE","R-squared"]);
  r6.set("correctAnswer", "F1-Score");
  r6.set("difficulty", "Intermediate");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "machine-learning-engineer");
  r7.set("question", "What is the purpose of dropout in neural networks?");
  r7.set("options", ["Speed up training","Prevent overfitting","Increase accuracy","Reduce data size"]);
  r7.set("correctAnswer", "Prevent overfitting");
  r7.set("difficulty", "Intermediate");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "machine-learning-engineer");
  r8.set("question", "What does PCA stand for?");
  r8.set("options", ["Principal Component Analysis","Primary Classification Algorithm","Predictive Cluster Analysis","Partial Correlation Analysis"]);
  r8.set("correctAnswer", "Principal Component Analysis");
  r8.set("difficulty", "Intermediate");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "machine-learning-engineer");
  r9.set("question", "Which activation function is most commonly used in hidden layers of deep networks?");
  r9.set("options", ["Sigmoid","Tanh","ReLU","Softmax"]);
  r9.set("correctAnswer", "ReLU");
  r9.set("difficulty", "Intermediate");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "machine-learning-engineer");
  r10.set("question", "In XGBoost, what is the role of the regularization term lambda?");
  r10.set("options", ["Controls tree depth","Penalizes leaf weights to prevent overfitting","Sets learning rate","Determines number of trees"]);
  r10.set("correctAnswer", "Penalizes leaf weights to prevent overfitting");
  r10.set("difficulty", "Advanced");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "machine-learning-engineer");
  r11.set("question", "What is the time complexity of training a kernel SVM on n samples?");
  r11.set("options", ["O(n)","O(n log n)","O(n²) to O(n³)","O(log n)"]);
  r11.set("correctAnswer", "O(n²) to O(n³)");
  r11.set("difficulty", "Advanced");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "machine-learning-engineer");
  r12.set("question", "In the attention mechanism, what are Q, K, V?");
  r12.set("options", ["Query, Key, Value","Quantize, Kernel, Vector","Queue, Knowledge, Variable","Quick, Kernel, Volume"]);
  r12.set("correctAnswer", "Query, Key, Value");
  r12.set("difficulty", "Advanced");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "machine-learning-engineer");
  r13.set("question", "What does KL divergence measure?");
  r13.set("options", ["Distance between two probability distributions","Accuracy of a model","Complexity of a neural network","Speed of gradient descent"]);
  r13.set("correctAnswer", "Distance between two probability distributions");
  r13.set("difficulty", "Advanced");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "machine-learning-engineer");
  r14.set("question", "Which technique helps train very deep networks by normalizing inputs of each layer?");
  r14.set("options", ["Dropout","Weight Decay","Batch Normalization","Data Augmentation"]);
  r14.set("correctAnswer", "Batch Normalization");
  r14.set("difficulty", "Advanced");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "ai-llm-engineer");
  r15.set("question", "What does LLM stand for?");
  r15.set("options", ["Large Language Model","Linear Logic Machine","Low Level Module","Language Learning Method"]);
  r15.set("correctAnswer", "Large Language Model");
  r15.set("difficulty", "Beginner");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "ai-llm-engineer");
  r16.set("question", "Which company created GPT-4?");
  r16.set("options", ["Google","Meta","OpenAI","Anthropic"]);
  r16.set("correctAnswer", "OpenAI");
  r16.set("difficulty", "Beginner");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "ai-llm-engineer");
  r17.set("question", "What is RAG?");
  r17.set("options", ["Retrieval Augmented Generation","Random Access Generation","Recursive AI Graph","Reinforced Agent Grid"]);
  r17.set("correctAnswer", "Retrieval Augmented Generation");
  r17.set("difficulty", "Beginner");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "ai-llm-engineer");
  r18.set("question", "What is a prompt in the context of LLMs?");
  r18.set("options", ["Input text given to the model","A training dataset","A type of GPU","A model architecture"]);
  r18.set("correctAnswer", "Input text given to the model");
  r18.set("difficulty", "Beginner");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "ai-llm-engineer");
  r19.set("question", "Which of these is an open-source LLM?");
  r19.set("options", ["GPT-4","Claude","Llama 3","Gemini Ultra"]);
  r19.set("correctAnswer", "Llama 3");
  r19.set("difficulty", "Beginner");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "ai-llm-engineer");
  r20.set("question", "What does LoRA stand for?");
  r20.set("options", ["Low-Rank Adaptation","Loss Reduction Algorithm","Long-Range Attention","Linear Output Routing"]);
  r20.set("correctAnswer", "Low-Rank Adaptation");
  r20.set("difficulty", "Intermediate");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "ai-llm-engineer");
  r21.set("question", "What is the purpose of temperature in LLM generation?");
  r21.set("options", ["Controls randomness of outputs","Speeds up inference","Reduces model size","Increases context length"]);
  r21.set("correctAnswer", "Controls randomness of outputs");
  r21.set("difficulty", "Intermediate");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "ai-llm-engineer");
  r22.set("question", "What is a vector database used for in RAG?");
  r22.set("options", ["Storing embeddings for semantic search","Training LLMs","Running inference","Fine-tuning models"]);
  r22.set("correctAnswer", "Storing embeddings for semantic search");
  r22.set("difficulty", "Intermediate");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "ai-llm-engineer");
  r23.set("question", "What is hallucination in LLMs?");
  r23.set("options", ["Model generating false information confidently","Model refusing to answer","Model generating images","Model timing out"]);
  r23.set("correctAnswer", "Model generating false information confidently");
  r23.set("difficulty", "Intermediate");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "ai-llm-engineer");
  r24.set("question", "What is chain-of-thought prompting?");
  r24.set("options", ["Asking model to show reasoning steps","Linking multiple prompts","A type of fine-tuning","Chaining API calls"]);
  r24.set("correctAnswer", "Asking model to show reasoning steps");
  r24.set("difficulty", "Intermediate");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "ai-llm-engineer");
  r25.set("question", "What is PagedAttention in vLLM?");
  r25.set("options", ["Memory management technique for KV cache using paging","A type of attention for long documents","Chunking documents into pages","A caching strategy for prompts"]);
  r25.set("correctAnswer", "Memory management technique for KV cache using paging");
  r25.set("difficulty", "Advanced");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "ai-llm-engineer");
  r26.set("question", "In RLHF, what does the reward model learn?");
  r26.set("options", ["Human preferences between outputs","Optimal learning rate","Token probabilities","Embedding representations"]);
  r26.set("correctAnswer", "Human preferences between outputs");
  r26.set("difficulty", "Advanced");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "ai-llm-engineer");
  r27.set("question", "What is speculative decoding?");
  r27.set("options", ["Using a small draft model to propose tokens verified by a large model","Decoding with multiple beams","Randomly sampling tokens","Decoding with low temperature"]);
  r27.set("correctAnswer", "Using a small draft model to propose tokens verified by a large model");
  r27.set("difficulty", "Advanced");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "ai-llm-engineer");
  r28.set("question", "What is the key advantage of Mixture of Experts (MoE) models?");
  r28.set("options", ["Fewer active parameters per token, reducing compute","Simpler training","Smaller model size","Better tokenization"]);
  r28.set("correctAnswer", "Fewer active parameters per token, reducing compute");
  r28.set("difficulty", "Advanced");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "ai-llm-engineer");
  r29.set("question", "What is DPO compared to RLHF?");
  r29.set("options", ["Eliminates need for separate reward model using preference data directly","A faster tokenizer","A new attention mechanism","A data preprocessing step"]);
  r29.set("correctAnswer", "Eliminates need for separate reward model using preference data directly");
  r29.set("difficulty", "Advanced");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "cloud-architect");
  r30.set("question", "What does EC2 stand for in AWS?");
  r30.set("options", ["Elastic Compute Cloud","External Cloud Container","Enhanced Computing Cluster","Elastic Content Cache"]);
  r30.set("correctAnswer", "Elastic Compute Cloud");
  r30.set("difficulty", "Beginner");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "cloud-architect");
  r31.set("question", "Which AWS service is used for object storage?");
  r31.set("options", ["EBS","EFS","S3","RDS"]);
  r31.set("correctAnswer", "S3");
  r31.set("difficulty", "Beginner");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "cloud-architect");
  r32.set("question", "What is the purpose of IAM in AWS?");
  r32.set("options", ["Identity and access management","Infrastructure automation module","Internal API management","Image and artifact management"]);
  r32.set("correctAnswer", "Identity and access management");
  r32.set("difficulty", "Beginner");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "cloud-architect");
  r33.set("question", "What is a VPC?");
  r33.set("options", ["Virtual Private Cloud","Virtual Public Container","Variable Processing Core","Verified Private Connection"]);
  r33.set("correctAnswer", "Virtual Private Cloud");
  r33.set("difficulty", "Beginner");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "cloud-architect");
  r34.set("question", "Which service runs code without managing servers?");
  r34.set("options", ["EC2","RDS","Lambda","ECS"]);
  r34.set("correctAnswer", "Lambda");
  r34.set("difficulty", "Beginner");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "cloud-architect");
  r35.set("question", "What is the difference between security groups and NACLs?");
  r35.set("options", ["Security groups are stateful, NACLs are stateless","NACLs are stateful, security groups are stateless","They are the same","Security groups work at subnet level"]);
  r35.set("correctAnswer", "Security groups are stateful, NACLs are stateless");
  r35.set("difficulty", "Intermediate");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "cloud-architect");
  r36.set("question", "What does RTO stand for in disaster recovery?");
  r36.set("options", ["Recovery Time Objective","Redundant Transfer Operation","Real-Time Optimization","Resource Threshold Override"]);
  r36.set("correctAnswer", "Recovery Time Objective");
  r36.set("difficulty", "Intermediate");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "cloud-architect");
  r37.set("question", "What is the purpose of a NAT Gateway?");
  r37.set("options", ["Allow private subnet instances to access internet","Block all outbound traffic","Route traffic between VPCs","Provide DNS resolution"]);
  r37.set("correctAnswer", "Allow private subnet instances to access internet");
  r37.set("difficulty", "Intermediate");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "cloud-architect");
  r38.set("question", "What is Terraform state used for?");
  r38.set("options", ["Track the current state of infrastructure","Store application logs","Manage user authentication","Configure CI/CD pipelines"]);
  r38.set("correctAnswer", "Track the current state of infrastructure");
  r38.set("difficulty", "Intermediate");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "cloud-architect");
  r39.set("question", "What is a Kubernetes pod?");
  r39.set("options", ["Smallest deployable unit containing one or more containers","A cluster of nodes","A load balancer","A storage volume"]);
  r39.set("correctAnswer", "Smallest deployable unit containing one or more containers");
  r39.set("difficulty", "Intermediate");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "cloud-architect");
  r40.set("question", "What is the CAP theorem?");
  r40.set("options", ["A distributed system can only guarantee 2 of: Consistency, Availability, Partition Tolerance","A cloud system must have Compute, Analytics, and Processing","A principle for cache invalidation","A cloud pricing model"]);
  r40.set("correctAnswer", "A distributed system can only guarantee 2 of: Consistency, Availability, Partition Tolerance");
  r40.set("difficulty", "Advanced");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "cloud-architect");
  r41.set("question", "What is the difference between blue-green and canary deployment?");
  r41.set("options", ["Blue-green switches all traffic at once; canary gradually routes a % to new version","Canary switches all traffic; blue-green is gradual","They are identical strategies","Blue-green is for databases; canary for apps"]);
  r41.set("correctAnswer", "Blue-green switches all traffic at once; canary gradually routes a % to new version");
  r41.set("difficulty", "Advanced");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "cloud-architect");
  r42.set("question", "What is VPC peering limitation regarding transitive routing?");
  r42.set("options", ["Traffic cannot transit through a peered VPC to reach another VPC","Peering has no bandwidth limits","Peering supports transitive routing by default","Peered VPCs share the same CIDR"]);
  r42.set("correctAnswer", "Traffic cannot transit through a peered VPC to reach another VPC");
  r42.set("difficulty", "Advanced");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "cloud-architect");
  r43.set("question", "What is the SAGA pattern used for in microservices?");
  r43.set("options", ["Managing distributed transactions across services","Deploying microservices to Kubernetes","Monitoring microservice health","Load balancing between services"]);
  r43.set("correctAnswer", "Managing distributed transactions across services");
  r43.set("difficulty", "Advanced");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "cloud-architect");
  r44.set("question", "What is the difference between horizontal and vertical scaling?");
  r44.set("options", ["Horizontal adds more instances; vertical increases instance resources","Vertical adds more instances; horizontal increases resources","They are the same","Horizontal is for databases only"]);
  r44.set("correctAnswer", "Horizontal adds more instances; vertical increases instance resources");
  r44.set("difficulty", "Advanced");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "devops-platform-engineer");
  r45.set("question", "What does CI/CD stand for?");
  r45.set("options", ["Continuous Integration/Continuous Deployment","Code Integration/Code Delivery","Central Infrastructure/Cloud Deployment","Continuous Inspection/Continuous Design"]);
  r45.set("correctAnswer", "Continuous Integration/Continuous Deployment");
  r45.set("difficulty", "Beginner");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "devops-platform-engineer");
  r46.set("question", "What is Docker used for?");
  r46.set("options", ["Containerizing applications","Version control","Cloud storage","Database management"]);
  r46.set("correctAnswer", "Containerizing applications");
  r46.set("difficulty", "Beginner");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "devops-platform-engineer");
  r47.set("question", "What is the purpose of Terraform?");
  r47.set("options", ["Infrastructure as Code","Container orchestration","Application monitoring","Secret management"]);
  r47.set("correctAnswer", "Infrastructure as Code");
  r47.set("difficulty", "Beginner");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "devops-platform-engineer");
  r48.set("question", "What does GitOps mean?");
  r48.set("options", ["Using Git as source of truth for infrastructure","Git operations team","GitHub optimization strategy","A Git branching strategy"]);
  r48.set("correctAnswer", "Using Git as source of truth for infrastructure");
  r48.set("difficulty", "Beginner");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "devops-platform-engineer");
  r49.set("question", "What is Kubernetes used for?");
  r49.set("options", ["Container orchestration","Code compilation","Database management","Network monitoring"]);
  r49.set("correctAnswer", "Container orchestration");
  r49.set("difficulty", "Beginner");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "devops-platform-engineer");
  r50.set("question", "What is the difference between a Deployment and StatefulSet in Kubernetes?");
  r50.set("options", ["StatefulSet maintains pod identity and stable storage; Deployment does not","Deployment maintains state; StatefulSet does not","They are the same","StatefulSet is for jobs only"]);
  r50.set("correctAnswer", "StatefulSet maintains pod identity and stable storage; Deployment does not");
  r50.set("difficulty", "Intermediate");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "devops-platform-engineer");
  r51.set("question", "What is an SLO?");
  r51.set("options", ["Service Level Objective - a target metric for reliability","Server Log Output","System Load Optimizer","Software Launch Operations"]);
  r51.set("correctAnswer", "Service Level Objective - a target metric for reliability");
  r51.set("difficulty", "Intermediate");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "devops-platform-engineer");
  r52.set("question", "What is idempotency in infrastructure?");
  r52.set("options", ["Running the same operation multiple times produces the same result","Operations that run only once","Automated rollback capability","Zero-downtime deployments"]);
  r52.set("correctAnswer", "Running the same operation multiple times produces the same result");
  r52.set("difficulty", "Intermediate");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "devops-platform-engineer");
  r53.set("question", "What is Prometheus used for?");
  r53.set("options", ["Metrics collection and monitoring","Log aggregation","Distributed tracing","Secret management"]);
  r53.set("correctAnswer", "Metrics collection and monitoring");
  r53.set("difficulty", "Intermediate");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "devops-platform-engineer");
  r54.set("question", "What is a Helm chart?");
  r54.set("options", ["A package of Kubernetes resources","A Kubernetes monitoring dashboard","A type of CI/CD pipeline","A Docker image format"]);
  r54.set("correctAnswer", "A package of Kubernetes resources");
  r54.set("difficulty", "Intermediate");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "devops-platform-engineer");
  r55.set("question", "What is eBPF and how is it used in DevOps?");
  r55.set("options", ["Extended Berkeley Packet Filter - allows safe kernel-level observability and networking","A type of container runtime","A cloud networking protocol","An IaC tool"]);
  r55.set("correctAnswer", "Extended Berkeley Packet Filter - allows safe kernel-level observability and networking");
  r55.set("difficulty", "Advanced");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "devops-platform-engineer");
  r56.set("question", "What is the error budget concept in SRE?");
  r56.set("options", ["The allowed amount of unreliability derived from SLO; when exhausted, features freeze","The budget for infrastructure mistakes","The cost of error monitoring tools","A way to count bug fixes"]);
  r56.set("correctAnswer", "The allowed amount of unreliability derived from SLO; when exhausted, features freeze");
  r56.set("difficulty", "Advanced");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "devops-platform-engineer");
  r57.set("question", "What is chaos engineering?");
  r57.set("options", ["Intentionally injecting failures to test system resilience","Randomly deploying code","Testing without documentation","Unstructured infrastructure management"]);
  r57.set("correctAnswer", "Intentionally injecting failures to test system resilience");
  r57.set("difficulty", "Advanced");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "devops-platform-engineer");
  r58.set("question", "What is mTLS?");
  r58.set("options", ["Mutual TLS - both client and server authenticate each other","Modified Transport Layer Security","Multi-tenant TLS","Master TLS certificate"]);
  r58.set("correctAnswer", "Mutual TLS - both client and server authenticate each other");
  r58.set("difficulty", "Advanced");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "devops-platform-engineer");
  r59.set("question", "What is OPA (Open Policy Agent) used for?");
  r59.set("options", ["Policy-as-code engine for authorization and compliance","Open source monitoring","Kubernetes operator","Container image scanning"]);
  r59.set("correctAnswer", "Policy-as-code engine for authorization and compliance");
  r59.set("difficulty", "Advanced");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "cybersecurity-engineer");
  r60.set("question", "What does CIA stand for in cybersecurity?");
  r60.set("options", ["Confidentiality, Integrity, Availability","Central Intelligence Agency","Cyber Investigation Agency","Certified Information Assurance"]);
  r60.set("correctAnswer", "Confidentiality, Integrity, Availability");
  r60.set("difficulty", "Beginner");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "cybersecurity-engineer");
  r61.set("question", "What is phishing?");
  r61.set("options", ["Social engineering via deceptive emails","A type of malware","A network scanning tool","A password cracking technique"]);
  r61.set("correctAnswer", "Social engineering via deceptive emails");
  r61.set("difficulty", "Beginner");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "cybersecurity-engineer");
  r62.set("question", "What is a firewall?");
  r62.set("options", ["Network security device that monitors and filters traffic","A type of antivirus","An encryption algorithm","A VPN protocol"]);
  r62.set("correctAnswer", "Network security device that monitors and filters traffic");
  r62.set("difficulty", "Beginner");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "cybersecurity-engineer");
  r63.set("question", "What does MFA stand for?");
  r63.set("options", ["Multi-Factor Authentication","Managed Firewall Access","Multiple File Analysis","Master Firmware Algorithm"]);
  r63.set("correctAnswer", "Multi-Factor Authentication");
  r63.set("difficulty", "Beginner");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "cybersecurity-engineer");
  r64.set("question", "What is SQL injection?");
  r64.set("options", ["Inserting malicious SQL code into a query","A database optimization technique","A type of encryption","A network protocol"]);
  r64.set("correctAnswer", "Inserting malicious SQL code into a query");
  r64.set("difficulty", "Beginner");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "cybersecurity-engineer");
  r65.set("question", "What is the difference between IDS and IPS?");
  r65.set("options", ["IDS detects threats; IPS detects and blocks them","IPS detects threats; IDS blocks them","They are the same","IDS is for networks; IPS is for endpoints"]);
  r65.set("correctAnswer", "IDS detects threats; IPS detects and blocks them");
  r65.set("difficulty", "Intermediate");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "cybersecurity-engineer");
  r66.set("question", "What is MITRE ATT&CK?");
  r66.set("options", ["A knowledge base of adversary tactics and techniques","An antivirus software","A firewall vendor","A cloud security standard"]);
  r66.set("correctAnswer", "A knowledge base of adversary tactics and techniques");
  r66.set("difficulty", "Intermediate");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "cybersecurity-engineer");
  r67.set("question", "What is a zero-day vulnerability?");
  r67.set("options", ["Unknown vulnerability with no patch available","A vulnerability patched on day zero","A low severity bug","A configuration error"]);
  r67.set("correctAnswer", "Unknown vulnerability with no patch available");
  r67.set("difficulty", "Intermediate");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "cybersecurity-engineer");
  r68.set("question", "What is XSS?");
  r68.set("options", ["Cross-Site Scripting - injecting malicious scripts into web pages","Cross-System Security","Extended Security Scanning","External Script Server"]);
  r68.set("correctAnswer", "Cross-Site Scripting - injecting malicious scripts into web pages");
  r68.set("difficulty", "Intermediate");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "cybersecurity-engineer");
  r69.set("question", "What is the purpose of a SOC?");
  r69.set("options", ["Monitor and respond to security incidents","Develop security software","Manage cloud infrastructure","Conduct penetration tests"]);
  r69.set("correctAnswer", "Monitor and respond to security incidents");
  r69.set("difficulty", "Intermediate");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "cybersecurity-engineer");
  r70.set("question", "What is SSRF?");
  r70.set("options", ["Server-Side Request Forgery - tricking server into making requests to internal resources","Secure Socket Request Framework","Server Security Response Filter","Session State Request Forgery"]);
  r70.set("correctAnswer", "Server-Side Request Forgery - tricking server into making requests to internal resources");
  r70.set("difficulty", "Advanced");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "cybersecurity-engineer");
  r71.set("question", "In the Cyber Kill Chain, what phase comes after weaponization?");
  r71.set("options", ["Delivery","Reconnaissance","Exploitation","Installation"]);
  r71.set("correctAnswer", "Delivery");
  r71.set("difficulty", "Advanced");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "cybersecurity-engineer");
  r72.set("question", "What is lateral movement in a cyberattack?");
  r72.set("options", ["Moving through a network after initial compromise to reach target","Moving data to external servers","Escalating privileges on a single system","Covering tracks after an attack"]);
  r72.set("correctAnswer", "Moving through a network after initial compromise to reach target");
  r72.set("difficulty", "Advanced");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "cybersecurity-engineer");
  r73.set("question", "What is the difference between symmetric and asymmetric encryption?");
  r73.set("options", ["Symmetric uses one key; asymmetric uses public/private key pair","Asymmetric uses one key; symmetric uses two","Symmetric is slower","They are the same in modern systems"]);
  r73.set("correctAnswer", "Symmetric uses one key; asymmetric uses public/private key pair");
  r73.set("difficulty", "Advanced");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "cybersecurity-engineer");
  r74.set("question", "What is a golden ticket attack in Active Directory?");
  r74.set("options", ["Forging a Kerberos TGT using stolen KRBTGT hash for persistent access","Stealing admin credentials","A phishing attack targeting executives","Brute forcing AD accounts"]);
  r74.set("correctAnswer", "Forging a Kerberos TGT using stolen KRBTGT hash for persistent access");
  r74.set("difficulty", "Advanced");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "data-engineer");
  r75.set("question", "What does ETL stand for?");
  r75.set("options", ["Extract, Transform, Load","Export, Transfer, Log","Execute, Test, Launch","Evaluate, Train, Learn"]);
  r75.set("correctAnswer", "Extract, Transform, Load");
  r75.set("difficulty", "Beginner");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "data-engineer");
  r76.set("question", "What is Apache Kafka used for?");
  r76.set("options", ["Real-time data streaming","Batch processing","Data warehousing","Machine learning"]);
  r76.set("correctAnswer", "Real-time data streaming");
  r76.set("difficulty", "Beginner");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "data-engineer");
  r77.set("question", "What is a data warehouse?");
  r77.set("options", ["Centralized repository for structured analytical data","A file storage system","A database for transactions","A NoSQL database"]);
  r77.set("correctAnswer", "Centralized repository for structured analytical data");
  r77.set("difficulty", "Beginner");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "data-engineer");
  r78.set("question", "What is dbt?");
  r78.set("options", ["Data Build Tool for transforming data in warehouses","Database Benchmark Tool","Data Batch Transfer","Distributed Build Technology"]);
  r78.set("correctAnswer", "Data Build Tool for transforming data in warehouses");
  r78.set("difficulty", "Beginner");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "data-engineer");
  r79.set("question", "What is Apache Spark used for?");
  r79.set("options", ["Large-scale data processing","Web development","Network monitoring","Container orchestration"]);
  r79.set("correctAnswer", "Large-scale data processing");
  r79.set("difficulty", "Beginner");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "data-engineer");
  r80.set("question", "What is the difference between a data lake and a data warehouse?");
  r80.set("options", ["Data lake stores raw data in native format; warehouse stores structured processed data","Data warehouse stores raw data; data lake stores structured data","They are the same","Data lake is for real-time only"]);
  r80.set("correctAnswer", "Data lake stores raw data in native format; warehouse stores structured processed data");
  r80.set("difficulty", "Intermediate");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "data-engineer");
  r81.set("question", "What is a Slowly Changing Dimension Type 2?");
  r81.set("options", ["Tracks historical changes by adding new rows with versioning","Overwrites the old value","Stores only current and previous value","Ignores changes"]);
  r81.set("correctAnswer", "Tracks historical changes by adding new rows with versioning");
  r81.set("difficulty", "Intermediate");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "data-engineer");
  r82.set("question", "What is data partitioning used for?");
  r82.set("options", ["Improving query performance by dividing data into segments","Encrypting data","Backing up data","Compressing data"]);
  r82.set("correctAnswer", "Improving query performance by dividing data into segments");
  r82.set("difficulty", "Intermediate");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "data-engineer");
  r83.set("question", "What is a star schema?");
  r83.set("options", ["Central fact table surrounded by dimension tables","Multiple related fact tables","A schema with no foreign keys","A fully normalized schema"]);
  r83.set("correctAnswer", "Central fact table surrounded by dimension tables");
  r83.set("difficulty", "Intermediate");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "data-engineer");
  r84.set("question", "What is Change Data Capture (CDC)?");
  r84.set("options", ["Tracking and capturing changes made to a database","Changing database schemas","Capturing user activity data","Compressing database files"]);
  r84.set("correctAnswer", "Tracking and capturing changes made to a database");
  r84.set("difficulty", "Intermediate");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "data-engineer");
  r85.set("question", "What is the key difference between Lambda and Kappa architecture?");
  r85.set("options", ["Lambda has both batch and stream layers; Kappa uses only stream processing","Kappa has both layers; Lambda uses only batch","Lambda is for ML; Kappa is for analytics","They are the same"]);
  r85.set("correctAnswer", "Lambda has both batch and stream layers; Kappa uses only stream processing");
  r85.set("difficulty", "Advanced");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "data-engineer");
  r86.set("question", "What is Z-ordering in Delta Lake?");
  r86.set("options", ["Multi-dimensional clustering to colocate related data in files for faster queries","Alphabetical file ordering","Compressing files","A partitioning strategy"]);
  r86.set("correctAnswer", "Multi-dimensional clustering to colocate related data in files for faster queries");
  r86.set("difficulty", "Advanced");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "data-engineer");
  r87.set("question", "What is the difference between at-least-once and exactly-once semantics?");
  r87.set("options", ["At-least-once may duplicate; exactly-once guarantees single delivery","Exactly-once may miss records; at-least-once guarantees delivery","They are the same in Kafka","At-least-once is faster and more reliable"]);
  r87.set("correctAnswer", "At-least-once may duplicate; exactly-once guarantees single delivery");
  r87.set("difficulty", "Advanced");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "data-engineer");
  r88.set("question", "What is data skew in Spark and how do you handle it?");
  r88.set("options", ["Uneven data distribution across partitions causing hotspots; fixed by salting or repartitioning","Incorrect data types; fixed by casting","Missing data; fixed by imputation","Slow network; fixed by caching"]);
  r88.set("correctAnswer", "Uneven data distribution across partitions causing hotspots; fixed by salting or repartitioning");
  r88.set("difficulty", "Advanced");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "data-engineer");
  r89.set("question", "What is a data contract?");
  r89.set("options", ["Agreement on data schema, quality, and SLAs between producers and consumers","A legal contract for data access","A database schema file","A pipeline configuration"]);
  r89.set("correctAnswer", "Agreement on data schema, quality, and SLAs between producers and consumers");
  r89.set("difficulty", "Advanced");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "full-stack-engineer");
  r90.set("question", "What does HTML stand for?");
  r90.set("options", ["HyperText Markup Language","High Transfer Markup Language","Hyper Tool Markup Language","HyperText Management Language"]);
  r90.set("correctAnswer", "HyperText Markup Language");
  r90.set("difficulty", "Beginner");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "full-stack-engineer");
  r91.set("question", "What is React?");
  r91.set("options", ["A JavaScript library for building UIs","A backend framework","A database","A CSS framework"]);
  r91.set("correctAnswer", "A JavaScript library for building UIs");
  r91.set("difficulty", "Beginner");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "full-stack-engineer");
  r92.set("question", "What is an API?");
  r92.set("options", ["Application Programming Interface","Automated Process Integration","Application Process Input","Advanced Protocol Interface"]);
  r92.set("correctAnswer", "Application Programming Interface");
  r92.set("difficulty", "Beginner");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "full-stack-engineer");
  r93.set("question", "What is Node.js?");
  r93.set("options", ["JavaScript runtime built on Chrome's V8 engine","A frontend framework","A database","A CSS preprocessor"]);
  r93.set("correctAnswer", "JavaScript runtime built on Chrome's V8 engine");
  r93.set("difficulty", "Beginner");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "full-stack-engineer");
  r94.set("question", "What does CSS stand for?");
  r94.set("options", ["Cascading Style Sheets","Computer Style System","Creative Styling Standard","Cascading Script Syntax"]);
  r94.set("correctAnswer", "Cascading Style Sheets");
  r94.set("difficulty", "Beginner");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "full-stack-engineer");
  r95.set("question", "What is the virtual DOM in React?");
  r95.set("options", ["In-memory representation of the real DOM for efficient updates","A server-side DOM","A CSS rendering engine","A JavaScript engine"]);
  r95.set("correctAnswer", "In-memory representation of the real DOM for efficient updates");
  r95.set("difficulty", "Intermediate");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "full-stack-engineer");
  r96.set("question", "What is CORS?");
  r96.set("options", ["Cross-Origin Resource Sharing - controls cross-domain requests","Cross-Origin Response Security","Cache Origin Resource System","Cross-Origin Routing System"]);
  r96.set("correctAnswer", "Cross-Origin Resource Sharing - controls cross-domain requests");
  r96.set("difficulty", "Intermediate");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "full-stack-engineer");
  r97.set("question", "What is SSR?");
  r97.set("options", ["Server-Side Rendering - HTML generated on server per request","Static Site Rendering","Synchronous Script Routing","Secure Socket Rendering"]);
  r97.set("correctAnswer", "Server-Side Rendering - HTML generated on server per request");
  r97.set("difficulty", "Intermediate");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "full-stack-engineer");
  r98.set("question", "What is the N+1 query problem?");
  r98.set("options", ["Fetching N related records requires N additional queries","Having N database indexes","Making N API calls","Rendering N components"]);
  r98.set("correctAnswer", "Fetching N related records requires N additional queries");
  r98.set("difficulty", "Intermediate");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "full-stack-engineer");
  r99.set("question", "What is JWT?");
  r99.set("options", ["JSON Web Token for stateless authentication","JavaScript Web Tool","JSON With Types","Java Web Transaction"]);
  r99.set("correctAnswer", "JSON Web Token for stateless authentication");
  r99.set("difficulty", "Intermediate");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "full-stack-engineer");
  r100.set("question", "What is the difference between useCallback and useMemo?");
  r100.set("options", ["useCallback memoizes functions; useMemo memoizes computed values","useMemo memoizes functions; useCallback memoizes values","They are identical","useCallback is for async functions only"]);
  r100.set("correctAnswer", "useCallback memoizes functions; useMemo memoizes computed values");
  r100.set("difficulty", "Advanced");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "full-stack-engineer");
  r101.set("question", "What is ISR (Incremental Static Regeneration) in Next.js?");
  r101.set("options", ["Regenerates static pages in background after a revalidate interval","Incremental JavaScript loading","Rendering pages one at a time","A caching strategy for APIs"]);
  r101.set("correctAnswer", "Regenerates static pages in background after a revalidate interval");
  r101.set("difficulty", "Advanced");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "full-stack-engineer");
  r102.set("question", "What is cursor-based pagination vs offset pagination?");
  r102.set("options", ["Cursor uses a pointer to the last item; offset uses skip/limit. Cursor is more efficient for large datasets.","Offset is more efficient for large datasets","They are identical in performance","Cursor is only for MongoDB"]);
  r102.set("correctAnswer", "Cursor uses a pointer to the last item; offset uses skip/limit. Cursor is more efficient for large datasets.");
  r102.set("difficulty", "Advanced");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "full-stack-engineer");
  r103.set("question", "What is tree shaking in JavaScript bundlers?");
  r103.set("options", ["Eliminating dead/unused code from the final bundle","Organizing code into tree structures","A Git branching strategy","Optimizing recursive functions"]);
  r103.set("correctAnswer", "Eliminating dead/unused code from the final bundle");
  r103.set("difficulty", "Advanced");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "full-stack-engineer");
  r104.set("question", "What is the difference between optimistic and pessimistic UI updates?");
  r104.set("options", ["Optimistic updates UI immediately before server confirms; pessimistic waits for confirmation","Pessimistic updates immediately; optimistic waits","Optimistic never fails; pessimistic always fails","They refer to database locking strategies"]);
  r104.set("correctAnswer", "Optimistic updates UI immediately before server confirms; pessimistic waits for confirmation");
  r104.set("difficulty", "Advanced");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
