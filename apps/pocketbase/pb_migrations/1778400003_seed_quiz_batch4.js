/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerQuizzes");

  const r0 = new Record(collection);
  r0.set("careerSlug", "bioinformatics-engineer");
  r0.set("difficulty", "Basic");
  r0.set("questionNumber", 1);
  r0.set("question", "What is bioinformatics?");
  r0.set("options", ["Applying computational methods to analyze biological data","Studying bacteria in labs","A type of chemistry","Medical imaging analysis"]);
  r0.set("correctAnswer", "Applying computational methods to analyze biological data");
  r0.set("explanation", "Answer: Applying computational methods to analyze biological data");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "bioinformatics-engineer");
  r1.set("difficulty", "Basic");
  r1.set("questionNumber", 2);
  r1.set("question", "What is a FASTQ file?");
  r1.set("options", ["File storing DNA sequences with quality scores","A fast query file","A protein structure file","A genome assembly file"]);
  r1.set("correctAnswer", "File storing DNA sequences with quality scores");
  r1.set("explanation", "Answer: File storing DNA sequences with quality scores");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "bioinformatics-engineer");
  r2.set("difficulty", "Basic");
  r2.set("questionNumber", 3);
  r2.set("question", "What is BLAST used for?");
  r2.set("options", ["Searching biological sequence databases for similar sequences","DNA assembly","Protein folding","Variant calling"]);
  r2.set("correctAnswer", "Searching biological sequence databases for similar sequences");
  r2.set("explanation", "Answer: Searching biological sequence databases for similar sequences");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "bioinformatics-engineer");
  r3.set("difficulty", "Basic");
  r3.set("questionNumber", 4);
  r3.set("question", "What is RNA-seq?");
  r3.set("options", ["Sequencing RNA to measure gene expression","A DNA repair mechanism","A protein synthesis method","A genome assembly tool"]);
  r3.set("correctAnswer", "Sequencing RNA to measure gene expression");
  r3.set("explanation", "Answer: Sequencing RNA to measure gene expression");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "bioinformatics-engineer");
  r4.set("difficulty", "Basic");
  r4.set("questionNumber", 5);
  r4.set("question", "What is AlphaFold?");
  r4.set("options", ["AI system for predicting protein 3D structure","A genome sequencer","A drug delivery system","A bioinformatics pipeline tool"]);
  r4.set("correctAnswer", "AI system for predicting protein 3D structure");
  r4.set("explanation", "Answer: AI system for predicting protein 3D structure");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "bioinformatics-engineer");
  r5.set("difficulty", "Medium");
  r5.set("questionNumber", 1);
  r5.set("question", "What is variant calling?");
  r5.set("options", ["Identifying genetic differences between a sample and reference genome","Calling a DNA lab","Identifying gene variants in proteins","Sequencing RNA variants"]);
  r5.set("correctAnswer", "Identifying genetic differences between a sample and reference genome");
  r5.set("explanation", "Answer: Identifying genetic differences between a sample and reference genome");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "bioinformatics-engineer");
  r6.set("difficulty", "Medium");
  r6.set("questionNumber", 2);
  r6.set("question", "What is single-cell RNA sequencing?");
  r6.set("options", ["Measuring gene expression in individual cells rather than bulk tissue","Sequencing a single gene","A fast sequencing method","A protein analysis technique"]);
  r6.set("correctAnswer", "Measuring gene expression in individual cells rather than bulk tissue");
  r6.set("explanation", "Answer: Measuring gene expression in individual cells rather than bulk tissue");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "bioinformatics-engineer");
  r7.set("difficulty", "Medium");
  r7.set("questionNumber", 3);
  r7.set("question", "What is a SNP?");
  r7.set("options", ["Single Nucleotide Polymorphism - a variation at one DNA position","Short Nucleotide Protein","Sequence Nucleotide Primer","Single Network Protocol"]);
  r7.set("correctAnswer", "Single Nucleotide Polymorphism - a variation at one DNA position");
  r7.set("explanation", "Answer: Single Nucleotide Polymorphism - a variation at one DNA position");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "bioinformatics-engineer");
  r8.set("difficulty", "Medium");
  r8.set("questionNumber", 4);
  r8.set("question", "What is differential gene expression?");
  r8.set("options", ["Comparing gene expression levels between conditions or groups","Expressing genes differently","A protein expression technique","A genome assembly step"]);
  r8.set("correctAnswer", "Comparing gene expression levels between conditions or groups");
  r8.set("explanation", "Answer: Comparing gene expression levels between conditions or groups");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "bioinformatics-engineer");
  r9.set("difficulty", "Medium");
  r9.set("questionNumber", 5);
  r9.set("question", "What is a bioinformatics pipeline?");
  r9.set("options", ["Automated workflow for processing biological data through multiple tools","A data transfer system","A sequencing machine","A protein analysis tool"]);
  r9.set("correctAnswer", "Automated workflow for processing biological data through multiple tools");
  r9.set("explanation", "Answer: Automated workflow for processing biological data through multiple tools");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "bioinformatics-engineer");
  r10.set("difficulty", "Hard");
  r10.set("questionNumber", 1);
  r10.set("question", "What is the difference between whole genome and whole exome sequencing?");
  r10.set("options", ["WGS sequences entire genome; WES sequences only protein-coding regions (~1-2% of genome)","WES sequences more; WGS sequences less","They are the same","WGS is only for cancer research"]);
  r10.set("correctAnswer", "WGS sequences entire genome; WES sequences only protein-coding regions (~1-2% of genome)");
  r10.set("explanation", "Answer: WGS sequences entire genome; WES sequences only protein-coding regions (~1-2% of genome)");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "bioinformatics-engineer");
  r11.set("difficulty", "Hard");
  r11.set("questionNumber", 2);
  r11.set("question", "What is spatial transcriptomics?");
  r11.set("options", ["Measuring gene expression while preserving spatial location information within tissue","Transcribing RNA in 3D space","A protein mapping technique","A genome assembly method"]);
  r11.set("correctAnswer", "Measuring gene expression while preserving spatial location information within tissue");
  r11.set("explanation", "Answer: Measuring gene expression while preserving spatial location information within tissue");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "bioinformatics-engineer");
  r12.set("difficulty", "Hard");
  r12.set("questionNumber", 3);
  r12.set("question", "What is GSEA?");
  r12.set("options", ["Gene Set Enrichment Analysis - determines if a gene set shows statistical enrichment in ranked data","Genome Sequence Evaluation Algorithm","Gene Structural Expression Analysis","Genomic Statistical Evaluation Approach"]);
  r12.set("correctAnswer", "Gene Set Enrichment Analysis - determines if a gene set shows statistical enrichment in ranked data");
  r12.set("explanation", "Answer: Gene Set Enrichment Analysis - determines if a gene set shows statistical enrichment in ranked data");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "bioinformatics-engineer");
  r13.set("difficulty", "Hard");
  r13.set("questionNumber", 4);
  r13.set("question", "What are FAIR principles in bioinformatics?");
  r13.set("options", ["Findable, Accessible, Interoperable, Reusable - standards for scientific data sharing","Fast, Accurate, Integrated, Reliable","Flexible, Automated, Integrated, Responsive","A data privacy framework"]);
  r13.set("correctAnswer", "Findable, Accessible, Interoperable, Reusable - standards for scientific data sharing");
  r13.set("explanation", "Answer: Findable, Accessible, Interoperable, Reusable - standards for scientific data sharing");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "bioinformatics-engineer");
  r14.set("difficulty", "Hard");
  r14.set("questionNumber", 5);
  r14.set("question", "What is graph neural network application in drug discovery?");
  r14.set("options", ["Modeling molecules as graphs to predict properties and interactions for drug candidates","Networking drug databases","A visualization tool","A clinical trial design method"]);
  r14.set("correctAnswer", "Modeling molecules as graphs to predict properties and interactions for drug candidates");
  r14.set("explanation", "Answer: Modeling molecules as graphs to predict properties and interactions for drug candidates");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r15.set("difficulty", "Basic");
  r15.set("questionNumber", 1);
  r15.set("question", "What is prompt engineering?");
  r15.set("options", ["Designing inputs to guide AI models to desired outputs","Engineering AI models","Training neural networks","Writing Python code for AI"]);
  r15.set("correctAnswer", "Designing inputs to guide AI models to desired outputs");
  r15.set("explanation", "Answer: Designing inputs to guide AI models to desired outputs");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r16.set("difficulty", "Basic");
  r16.set("questionNumber", 2);
  r16.set("question", "What is few-shot prompting?");
  r16.set("options", ["Providing examples in the prompt to guide model behavior","Using a small model","Fine-tuning on few examples","A low-resource technique"]);
  r16.set("correctAnswer", "Providing examples in the prompt to guide model behavior");
  r16.set("explanation", "Answer: Providing examples in the prompt to guide model behavior");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r17.set("difficulty", "Basic");
  r17.set("questionNumber", 3);
  r17.set("question", "What is RAG?");
  r17.set("options", ["Retrieval Augmented Generation","Random Access Generation","Recursive AI Generator","Reinforced Agent Graph"]);
  r17.set("correctAnswer", "Retrieval Augmented Generation");
  r17.set("explanation", "Answer: Retrieval Augmented Generation");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r18.set("difficulty", "Basic");
  r18.set("questionNumber", 4);
  r18.set("question", "What is hallucination in LLMs?");
  r18.set("options", ["Model confidently generating false information","Model refusing to answer","Model generating images","Model timing out"]);
  r18.set("correctAnswer", "Model confidently generating false information");
  r18.set("explanation", "Answer: Model confidently generating false information");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r19.set("difficulty", "Basic");
  r19.set("questionNumber", 5);
  r19.set("question", "What is temperature in LLM generation?");
  r19.set("options", ["Controls randomness - higher = more creative, lower = more deterministic","Processing speed","Model size parameter","Memory usage"]);
  r19.set("correctAnswer", "Controls randomness - higher = more creative, lower = more deterministic");
  r19.set("explanation", "Answer: Controls randomness - higher = more creative, lower = more deterministic");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r20.set("difficulty", "Medium");
  r20.set("questionNumber", 1);
  r20.set("question", "What is chain-of-thought prompting?");
  r20.set("options", ["Asking model to show step-by-step reasoning to improve accuracy","Chaining multiple prompts","A fine-tuning technique","A retrieval method"]);
  r20.set("correctAnswer", "Asking model to show step-by-step reasoning to improve accuracy");
  r20.set("explanation", "Answer: Asking model to show step-by-step reasoning to improve accuracy");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r21.set("difficulty", "Medium");
  r21.set("questionNumber", 2);
  r21.set("question", "What is prompt injection?");
  r21.set("options", ["Malicious instructions injected into prompt to override system instructions","Adding examples to a prompt","A fine-tuning attack","A data poisoning technique"]);
  r21.set("correctAnswer", "Malicious instructions injected into prompt to override system instructions");
  r21.set("explanation", "Answer: Malicious instructions injected into prompt to override system instructions");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r22.set("difficulty", "Medium");
  r22.set("questionNumber", 3);
  r22.set("question", "What is RAGAS used for?");
  r22.set("options", ["Evaluating RAG systems on faithfulness, precision, recall, and relevancy","Generating RAG pipelines","A vector database","A prompt template library"]);
  r22.set("correctAnswer", "Evaluating RAG systems on faithfulness, precision, recall, and relevancy");
  r22.set("explanation", "Answer: Evaluating RAG systems on faithfulness, precision, recall, and relevancy");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r23.set("difficulty", "Medium");
  r23.set("questionNumber", 4);
  r23.set("question", "What is semantic caching for LLMs?");
  r23.set("options", ["Caching LLM responses for semantically similar queries to save cost","Caching embeddings","Caching database queries","A model compression technique"]);
  r23.set("correctAnswer", "Caching LLM responses for semantically similar queries to save cost");
  r23.set("explanation", "Answer: Caching LLM responses for semantically similar queries to save cost");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r24.set("difficulty", "Medium");
  r24.set("questionNumber", 5);
  r24.set("question", "What is structured output in LLMs?");
  r24.set("options", ["Forcing model to respond in specific format like JSON","Organizing prompt structure","Formatting model weights","A training technique"]);
  r24.set("correctAnswer", "Forcing model to respond in specific format like JSON");
  r24.set("explanation", "Answer: Forcing model to respond in specific format like JSON");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r25.set("difficulty", "Hard");
  r25.set("questionNumber", 1);
  r25.set("question", "What is HyDE (Hypothetical Document Embeddings)?");
  r25.set("options", ["Generating hypothetical answer to embed for retrieval instead of embedding the query directly","A type of vector database","An embedding model","A chunking strategy"]);
  r25.set("correctAnswer", "Generating hypothetical answer to embed for retrieval instead of embedding the query directly");
  r25.set("explanation", "Answer: Generating hypothetical answer to embed for retrieval instead of embedding the query directly");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r26.set("difficulty", "Hard");
  r26.set("questionNumber", 2);
  r26.set("question", "What is DSPy?");
  r26.set("options", ["Framework for algorithmically optimizing LM prompts and weights through programming not prompting","A prompt template library","A vector database SDK","An LLM evaluation tool"]);
  r26.set("correctAnswer", "Framework for algorithmically optimizing LM prompts and weights through programming not prompting");
  r26.set("explanation", "Answer: Framework for algorithmically optimizing LM prompts and weights through programming not prompting");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r27.set("difficulty", "Hard");
  r27.set("questionNumber", 3);
  r27.set("question", "What is the faithfulness metric in RAGAS?");
  r27.set("options", ["Measures if generated answer is factually grounded in retrieved context","Measures how faithful the model is","A trust score for LLMs","A hallucination rate metric"]);
  r27.set("correctAnswer", "Measures if generated answer is factually grounded in retrieved context");
  r27.set("explanation", "Answer: Measures if generated answer is factually grounded in retrieved context");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r28.set("difficulty", "Hard");
  r28.set("questionNumber", 4);
  r28.set("question", "What is context compression in RAG?");
  r28.set("options", ["Reducing retrieved context size while preserving relevant information to fit context window","Compressing the model","A data compression technique","Reducing chunk size"]);
  r28.set("correctAnswer", "Reducing retrieved context size while preserving relevant information to fit context window");
  r28.set("explanation", "Answer: Reducing retrieved context size while preserving relevant information to fit context window");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "prompt-engineer-ai-product-specialist");
  r29.set("difficulty", "Hard");
  r29.set("questionNumber", 5);
  r29.set("question", "What is self-consistency prompting?");
  r29.set("options", ["Sampling multiple reasoning paths and taking majority vote for more robust answers","Being consistent in prompt style","Using the same prompt repeatedly","A deterministic decoding strategy"]);
  r29.set("correctAnswer", "Sampling multiple reasoning paths and taking majority vote for more robust answers");
  r29.set("explanation", "Answer: Sampling multiple reasoning paths and taking majority vote for more robust answers");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "hardware-engineer");
  r30.set("difficulty", "Basic");
  r30.set("questionNumber", 1);
  r30.set("question", "What is an FPGA?");
  r30.set("options", ["Field Programmable Gate Array - reconfigurable digital hardware","A type of CPU","A memory chip","A communication protocol"]);
  r30.set("correctAnswer", "Field Programmable Gate Array - reconfigurable digital hardware");
  r30.set("explanation", "Answer: Field Programmable Gate Array - reconfigurable digital hardware");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "hardware-engineer");
  r31.set("difficulty", "Basic");
  r31.set("questionNumber", 2);
  r31.set("question", "What is Verilog?");
  r31.set("options", ["Hardware Description Language for designing digital circuits","A software programming language","A PCB design tool","A chip manufacturing process"]);
  r31.set("correctAnswer", "Hardware Description Language for designing digital circuits");
  r31.set("explanation", "Answer: Hardware Description Language for designing digital circuits");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "hardware-engineer");
  r32.set("difficulty", "Basic");
  r32.set("questionNumber", 3);
  r32.set("question", "What is cache memory?");
  r32.set("options", ["Fast memory close to CPU storing frequently accessed data","Storage for programs","Graphics memory","Network buffer"]);
  r32.set("correctAnswer", "Fast memory close to CPU storing frequently accessed data");
  r32.set("explanation", "Answer: Fast memory close to CPU storing frequently accessed data");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "hardware-engineer");
  r33.set("difficulty", "Basic");
  r33.set("questionNumber", 4);
  r33.set("question", "What is PCIe used for?");
  r33.set("options", ["High-speed interface connecting CPU to GPUs and other peripherals","Power delivery","Wireless communication","Memory storage"]);
  r33.set("correctAnswer", "High-speed interface connecting CPU to GPUs and other peripherals");
  r33.set("explanation", "Answer: High-speed interface connecting CPU to GPUs and other peripherals");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "hardware-engineer");
  r34.set("difficulty", "Basic");
  r34.set("questionNumber", 5);
  r34.set("question", "What does RTL stand for?");
  r34.set("options", ["Register Transfer Level - abstraction describing digital circuits","Real-Time Logic","Resistor Transistor Logic","Register Transfer Language"]);
  r34.set("correctAnswer", "Register Transfer Level - abstraction describing digital circuits");
  r34.set("explanation", "Answer: Register Transfer Level - abstraction describing digital circuits");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "hardware-engineer");
  r35.set("difficulty", "Medium");
  r35.set("questionNumber", 1);
  r35.set("question", "What is setup time in digital design?");
  r35.set("options", ["Minimum time data must be stable before clock edge to be reliably captured","Time to power on a circuit","Time for simulation to run","Time to program an FPGA"]);
  r35.set("correctAnswer", "Minimum time data must be stable before clock edge to be reliably captured");
  r35.set("explanation", "Answer: Minimum time data must be stable before clock edge to be reliably captured");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "hardware-engineer");
  r36.set("difficulty", "Medium");
  r36.set("questionNumber", 2);
  r36.set("question", "What is cache coherence?");
  r36.set("options", ["Ensuring all CPU cores see consistent view of shared memory","Cache cleaning process","Cache replacement policy","Cache hit optimization"]);
  r36.set("correctAnswer", "Ensuring all CPU cores see consistent view of shared memory");
  r36.set("explanation", "Answer: Ensuring all CPU cores see consistent view of shared memory");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "hardware-engineer");
  r37.set("difficulty", "Medium");
  r37.set("questionNumber", 3);
  r37.set("question", "What is a pipeline hazard?");
  r37.set("options", ["Situation preventing the next instruction from executing in its designated clock cycle","A physical safety issue","A clock timing problem","A power delivery issue"]);
  r37.set("correctAnswer", "Situation preventing the next instruction from executing in its designated clock cycle");
  r37.set("explanation", "Answer: Situation preventing the next instruction from executing in its designated clock cycle");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "hardware-engineer");
  r38.set("difficulty", "Medium");
  r38.set("questionNumber", 4);
  r38.set("question", "What is CMOS technology?");
  r38.set("options", ["Complementary Metal-Oxide-Semiconductor - standard transistor technology for digital chips","A PCB material","A chip packaging method","A memory type"]);
  r38.set("correctAnswer", "Complementary Metal-Oxide-Semiconductor - standard transistor technology for digital chips");
  r38.set("explanation", "Answer: Complementary Metal-Oxide-Semiconductor - standard transistor technology for digital chips");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "hardware-engineer");
  r39.set("difficulty", "Medium");
  r39.set("questionNumber", 5);
  r39.set("question", "What is a SoC?");
  r39.set("options", ["System on Chip - integrating CPU, GPU, memory controller, and peripherals on one chip","A software component","A network device","A storage controller"]);
  r39.set("correctAnswer", "System on Chip - integrating CPU, GPU, memory controller, and peripherals on one chip");
  r39.set("explanation", "Answer: System on Chip - integrating CPU, GPU, memory controller, and peripherals on one chip");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "hardware-engineer");
  r40.set("difficulty", "Hard");
  r40.set("questionNumber", 1);
  r40.set("question", "What is metastability in digital design?");
  r40.set("options", ["Flip-flop entering undefined state when setup/hold time violated, potentially causing system failure","A stable operating state","A power consumption mode","A timing optimization technique"]);
  r40.set("correctAnswer", "Flip-flop entering undefined state when setup/hold time violated, potentially causing system failure");
  r40.set("explanation", "Answer: Flip-flop entering undefined state when setup/hold time violated, potentially causing system failure");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "hardware-engineer");
  r41.set("difficulty", "Hard");
  r41.set("questionNumber", 2);
  r41.set("question", "What is the MESI cache coherence protocol?");
  r41.set("options", ["Modified-Exclusive-Shared-Invalid states for tracking cache line status across cores","A memory encoding scheme","A cache replacement algorithm","A memory compression method"]);
  r41.set("correctAnswer", "Modified-Exclusive-Shared-Invalid states for tracking cache line status across cores");
  r41.set("explanation", "Answer: Modified-Exclusive-Shared-Invalid states for tracking cache line status across cores");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "hardware-engineer");
  r42.set("difficulty", "Hard");
  r42.set("questionNumber", 3);
  r42.set("question", "What is Dynamic Voltage and Frequency Scaling (DVFS)?");
  r42.set("options", ["Adjusting voltage and frequency based on workload to save power","A manufacturing technique","A clock distribution method","A testing technique"]);
  r42.set("correctAnswer", "Adjusting voltage and frequency based on workload to save power");
  r42.set("explanation", "Answer: Adjusting voltage and frequency based on workload to save power");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "hardware-engineer");
  r43.set("difficulty", "Hard");
  r43.set("questionNumber", 4);
  r43.set("question", "What is a chiplet architecture?");
  r43.set("options", ["Combining multiple smaller dies on a package interconnect instead of one monolithic die","A small microcontroller","A chip packaging format","A manufacturing defect"]);
  r43.set("correctAnswer", "Combining multiple smaller dies on a package interconnect instead of one monolithic die");
  r43.set("explanation", "Answer: Combining multiple smaller dies on a package interconnect instead of one monolithic die");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "hardware-engineer");
  r44.set("difficulty", "Hard");
  r44.set("questionNumber", 5);
  r44.set("question", "What is EUV lithography?");
  r44.set("options", ["Extreme Ultraviolet lithography using 13.5nm light to pattern chips at advanced nodes","A chip testing method","An etching process","A packaging technology"]);
  r44.set("correctAnswer", "Extreme Ultraviolet lithography using 13.5nm light to pattern chips at advanced nodes");
  r44.set("explanation", "Answer: Extreme Ultraviolet lithography using 13.5nm light to pattern chips at advanced nodes");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r45.set("difficulty", "Basic");
  r45.set("questionNumber", 1);
  r45.set("question", "What are the SAE levels of vehicle autonomy?");
  r45.set("options", ["Level 0-5 from no automation to full automation","Level 1-3 from basic to full","Level A-E","Level 1-10"]);
  r45.set("correctAnswer", "Level 0-5 from no automation to full automation");
  r45.set("explanation", "Answer: Level 0-5 from no automation to full automation");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r46.set("difficulty", "Basic");
  r46.set("questionNumber", 2);
  r46.set("question", "What is LIDAR used for in autonomous vehicles?");
  r46.set("options", ["Creating 3D maps of surroundings using laser pulses","GPS navigation","Weather detection","Engine monitoring"]);
  r46.set("correctAnswer", "Creating 3D maps of surroundings using laser pulses");
  r46.set("explanation", "Answer: Creating 3D maps of surroundings using laser pulses");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r47.set("difficulty", "Basic");
  r47.set("questionNumber", 3);
  r47.set("question", "What is perception in autonomous driving?");
  r47.set("options", ["Detecting and understanding objects and environment from sensors","Route planning","Speed control","User interface design"]);
  r47.set("correctAnswer", "Detecting and understanding objects and environment from sensors");
  r47.set("explanation", "Answer: Detecting and understanding objects and environment from sensors");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r48.set("difficulty", "Basic");
  r48.set("questionNumber", 4);
  r48.set("question", "What is HD Map?");
  r48.set("options", ["High-Definition map with precise lane and road geometry for autonomous driving","A high-resolution road image","A GPS database","A routing algorithm"]);
  r48.set("correctAnswer", "High-Definition map with precise lane and road geometry for autonomous driving");
  r48.set("explanation", "Answer: High-Definition map with precise lane and road geometry for autonomous driving");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r49.set("difficulty", "Basic");
  r49.set("questionNumber", 5);
  r49.set("question", "What is sensor fusion?");
  r49.set("options", ["Combining data from multiple sensors for better perception","Fusing sensor hardware","A camera processing technique","A GPS enhancement"]);
  r49.set("correctAnswer", "Combining data from multiple sensors for better perception");
  r49.set("explanation", "Answer: Combining data from multiple sensors for better perception");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r50.set("difficulty", "Medium");
  r50.set("questionNumber", 1);
  r50.set("question", "What is BEV perception?");
  r50.set("options", ["Bird's Eye View representation of sensor data unified into top-down grid for detection","Behind-Vehicle perception","Backward Environment View","A camera type"]);
  r50.set("correctAnswer", "Bird's Eye View representation of sensor data unified into top-down grid for detection");
  r50.set("explanation", "Answer: Bird's Eye View representation of sensor data unified into top-down grid for detection");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r51.set("difficulty", "Medium");
  r51.set("questionNumber", 2);
  r51.set("question", "What is Imitation Learning for autonomous driving?");
  r51.set("options", ["Training model to mimic expert driver behavior from demonstration data","Copying another AV company's approach","Training with simulated data","Reinforcement learning technique"]);
  r51.set("correctAnswer", "Training model to mimic expert driver behavior from demonstration data");
  r51.set("explanation", "Answer: Training model to mimic expert driver behavior from demonstration data");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r52.set("difficulty", "Medium");
  r52.set("questionNumber", 3);
  r52.set("question", "What is the long tail problem in autonomous driving?");
  r52.set("options", ["Rare edge cases that are hard to collect enough training data for","Traffic tail-back scenarios","Highway merging scenarios","Night driving challenges"]);
  r52.set("correctAnswer", "Rare edge cases that are hard to collect enough training data for");
  r52.set("explanation", "Answer: Rare edge cases that are hard to collect enough training data for");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r53.set("difficulty", "Medium");
  r53.set("questionNumber", 4);
  r53.set("question", "What is SOTIF (ISO 21448)?");
  r53.set("options", ["Safety Of The Intended Functionality - addressing risks from system limitations not failures","A vehicle communication standard","An autonomous driving regulation","A sensor calibration standard"]);
  r53.set("correctAnswer", "Safety Of The Intended Functionality - addressing risks from system limitations not failures");
  r53.set("explanation", "Answer: Safety Of The Intended Functionality - addressing risks from system limitations not failures");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r54.set("difficulty", "Medium");
  r54.set("questionNumber", 5);
  r54.set("question", "What is MPC in autonomous vehicle control?");
  r54.set("options", ["Model Predictive Control - optimizes trajectory over a future horizon using vehicle model","Maximum Path Controller","Multi-Point Control","Motor Power Controller"]);
  r54.set("correctAnswer", "Model Predictive Control - optimizes trajectory over a future horizon using vehicle model");
  r54.set("explanation", "Answer: Model Predictive Control - optimizes trajectory over a future horizon using vehicle model");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r55.set("difficulty", "Hard");
  r55.set("questionNumber", 1);
  r55.set("question", "What is shadow mode testing?");
  r55.set("options", ["Running new autonomy model in parallel with deployed one to compare decisions without affecting vehicle","Testing in low-light conditions","A simulation testing method","Testing with reduced sensor suite"]);
  r55.set("correctAnswer", "Running new autonomy model in parallel with deployed one to compare decisions without affecting vehicle");
  r55.set("explanation", "Answer: Running new autonomy model in parallel with deployed one to compare decisions without affecting vehicle");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r56.set("difficulty", "Hard");
  r56.set("questionNumber", 2);
  r56.set("question", "What is the difference between fail-safe and fail-operational systems?");
  r56.set("options", ["Fail-safe transitions to a safe state on failure; fail-operational continues functioning through failure","Fail-operational fails safely; fail-safe keeps operating","They are identical","Fail-safe is more expensive"]);
  r56.set("correctAnswer", "Fail-safe transitions to a safe state on failure; fail-operational continues functioning through failure");
  r56.set("explanation", "Answer: Fail-safe transitions to a safe state on failure; fail-operational continues functioning through failure");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r57.set("difficulty", "Hard");
  r57.set("questionNumber", 3);
  r57.set("question", "What is occupancy network in perception?");
  r57.set("options", ["Predicting 3D occupancy of space (occupied/free/unknown) from sensor data","A parking detection system","A road occupancy tracker","A path planning method"]);
  r57.set("correctAnswer", "Predicting 3D occupancy of space (occupied/free/unknown) from sensor data");
  r57.set("explanation", "Answer: Predicting 3D occupancy of space (occupied/free/unknown) from sensor data");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r58.set("difficulty", "Hard");
  r58.set("questionNumber", 4);
  r58.set("question", "What is the KITTI vs nuScenes dataset difference?");
  r58.set("options", ["KITTI is older single-city dataset; nuScenes is multi-city with 360° sensors and more annotations","nuScenes is older","They are identical","KITTI has more LiDAR data"]);
  r58.set("correctAnswer", "KITTI is older single-city dataset; nuScenes is multi-city with 360° sensors and more annotations");
  r58.set("explanation", "Answer: KITTI is older single-city dataset; nuScenes is multi-city with 360° sensors and more annotations");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "autonomous-systems-self-driving-engineer");
  r59.set("difficulty", "Hard");
  r59.set("questionNumber", 5);
  r59.set("question", "What is V2X communication?");
  r59.set("options", ["Vehicle-to-Everything - vehicles communicating with other vehicles, infrastructure, and networks","Vehicle data exchange protocol","A GPS standard","A sensor fusion technique"]);
  r59.set("correctAnswer", "Vehicle-to-Everything - vehicles communicating with other vehicles, infrastructure, and networks");
  r59.set("explanation", "Answer: Vehicle-to-Everything - vehicles communicating with other vehicles, infrastructure, and networks");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "ui-ux-designer-technical");
  r60.set("difficulty", "Basic");
  r60.set("questionNumber", 1);
  r60.set("question", "What is the difference between UX and UI?");
  r60.set("options", ["UX is user experience (research & flow); UI is user interface (visual design)","UI is user experience; UX is user interface","They are the same","UX is only for mobile; UI is for web"]);
  r60.set("correctAnswer", "UX is user experience (research & flow); UI is user interface (visual design)");
  r60.set("explanation", "Answer: UX is user experience (research & flow); UI is user interface (visual design)");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "ui-ux-designer-technical");
  r61.set("difficulty", "Basic");
  r61.set("questionNumber", 2);
  r61.set("question", "What is Figma?");
  r61.set("options", ["Collaborative design and prototyping tool","A programming language","A CSS framework","A project management tool"]);
  r61.set("correctAnswer", "Collaborative design and prototyping tool");
  r61.set("explanation", "Answer: Collaborative design and prototyping tool");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "ui-ux-designer-technical");
  r62.set("difficulty", "Basic");
  r62.set("questionNumber", 3);
  r62.set("question", "What is a wireframe?");
  r62.set("options", ["Low-fidelity blueprint of a screen layout","A high-quality design mockup","A code framework","A UI component"]);
  r62.set("correctAnswer", "Low-fidelity blueprint of a screen layout");
  r62.set("explanation", "Answer: Low-fidelity blueprint of a screen layout");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "ui-ux-designer-technical");
  r63.set("difficulty", "Basic");
  r63.set("questionNumber", 4);
  r63.set("question", "What is WCAG?");
  r63.set("options", ["Web Content Accessibility Guidelines","Web Content Application Guide","Website Color Accessibility Grid","Web Code Architecture Guidelines"]);
  r63.set("correctAnswer", "Web Content Accessibility Guidelines");
  r63.set("explanation", "Answer: Web Content Accessibility Guidelines");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "ui-ux-designer-technical");
  r64.set("difficulty", "Basic");
  r64.set("questionNumber", 5);
  r64.set("question", "What is a user persona?");
  r64.set("options", ["Fictional representation of target user based on research","A real user profile","A developer profile","A product manager tool"]);
  r64.set("correctAnswer", "Fictional representation of target user based on research");
  r64.set("explanation", "Answer: Fictional representation of target user based on research");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "ui-ux-designer-technical");
  r65.set("difficulty", "Medium");
  r65.set("questionNumber", 1);
  r65.set("question", "What is Fitts's Law?");
  r65.set("options", ["Time to reach a target depends on distance and size - larger/closer targets are faster to click","A color theory principle","A layout guideline","A typography rule"]);
  r65.set("correctAnswer", "Time to reach a target depends on distance and size - larger/closer targets are faster to click");
  r65.set("explanation", "Answer: Time to reach a target depends on distance and size - larger/closer targets are faster to click");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "ui-ux-designer-technical");
  r66.set("difficulty", "Medium");
  r66.set("questionNumber", 2);
  r66.set("question", "What is atomic design?");
  r66.set("options", ["Design system methodology: atoms → molecules → organisms → templates → pages","Minimal design style","A component framework","A design sprint method"]);
  r66.set("correctAnswer", "Design system methodology: atoms → molecules → organisms → templates → pages");
  r66.set("explanation", "Answer: Design system methodology: atoms → molecules → organisms → templates → pages");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "ui-ux-designer-technical");
  r67.set("difficulty", "Medium");
  r67.set("questionNumber", 3);
  r67.set("question", "What is progressive disclosure?");
  r67.set("options", ["Showing only necessary information and revealing more detail on demand","Loading content progressively","Onboarding users gradually","A security technique"]);
  r67.set("correctAnswer", "Showing only necessary information and revealing more detail on demand");
  r67.set("explanation", "Answer: Showing only necessary information and revealing more detail on demand");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "ui-ux-designer-technical");
  r68.set("difficulty", "Medium");
  r68.set("questionNumber", 4);
  r68.set("question", "What is a design token?");
  r68.set("options", ["Named variables storing design values (color, spacing, font) shared across platforms","A design review approval","A Figma license","An API token for design tools"]);
  r68.set("correctAnswer", "Named variables storing design values (color, spacing, font) shared across platforms");
  r68.set("explanation", "Answer: Named variables storing design values (color, spacing, font) shared across platforms");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "ui-ux-designer-technical");
  r69.set("difficulty", "Medium");
  r69.set("questionNumber", 5);
  r69.set("question", "What is a System Usability Scale (SUS)?");
  r69.set("options", ["10-item questionnaire giving 0-100 score measuring perceived usability","A system for managing design files","A color accessibility tool","A usability lab setup"]);
  r69.set("correctAnswer", "10-item questionnaire giving 0-100 score measuring perceived usability");
  r69.set("explanation", "Answer: 10-item questionnaire giving 0-100 score measuring perceived usability");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "ui-ux-designer-technical");
  r70.set("difficulty", "Hard");
  r70.set("questionNumber", 1);
  r70.set("question", "What is the difference between heuristic evaluation and usability testing?");
  r70.set("options", ["Heuristic evaluation: experts assess against principles; usability testing: real users perform tasks","Usability testing uses experts; heuristics use real users","They are identical","Heuristics are quantitative; usability is qualitative"]);
  r70.set("correctAnswer", "Heuristic evaluation: experts assess against principles; usability testing: real users perform tasks");
  r70.set("explanation", "Answer: Heuristic evaluation: experts assess against principles; usability testing: real users perform tasks");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "ui-ux-designer-technical");
  r71.set("difficulty", "Hard");
  r71.set("questionNumber", 2);
  r71.set("question", "What is cognitive load in UX?");
  r71.set("options", ["Mental effort required to use an interface; minimize for better UX","Processing speed of a device","Number of features in a product","User learning curve duration"]);
  r71.set("correctAnswer", "Mental effort required to use an interface; minimize for better UX");
  r71.set("explanation", "Answer: Mental effort required to use an interface; minimize for better UX");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "ui-ux-designer-technical");
  r72.set("difficulty", "Hard");
  r72.set("questionNumber", 3);
  r72.set("question", "What is a design sprint?");
  r72.set("options", ["5-day process to answer critical business questions through design, prototyping, and testing","A fast design project","A developer sprint for UI","A UX audit process"]);
  r72.set("correctAnswer", "5-day process to answer critical business questions through design, prototyping, and testing");
  r72.set("explanation", "Answer: 5-day process to answer critical business questions through design, prototyping, and testing");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "ui-ux-designer-technical");
  r73.set("difficulty", "Hard");
  r73.set("questionNumber", 4);
  r73.set("question", "What is the difference between moderated and unmoderated usability testing?");
  r73.set("options", ["Moderated: researcher present during session; unmoderated: participant tests independently","Unmoderated: researcher present; moderated: independent","They are identical","Moderated is always remote; unmoderated is in-person"]);
  r73.set("correctAnswer", "Moderated: researcher present during session; unmoderated: participant tests independently");
  r73.set("explanation", "Answer: Moderated: researcher present during session; unmoderated: participant tests independently");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "ui-ux-designer-technical");
  r74.set("difficulty", "Hard");
  r74.set("questionNumber", 5);
  r74.set("question", "What is ARIA in web accessibility?");
  r74.set("options", ["Accessible Rich Internet Applications - HTML attributes adding semantics for assistive technologies","A design system","An animation library","An accessibility audit tool"]);
  r74.set("correctAnswer", "Accessible Rich Internet Applications - HTML attributes adding semantics for assistive technologies");
  r74.set("explanation", "Answer: Accessible Rich Internet Applications - HTML attributes adding semantics for assistive technologies");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "technical-writer");
  r75.set("difficulty", "Basic");
  r75.set("questionNumber", 1);
  r75.set("question", "What is technical writing?");
  r75.set("options", ["Creating clear documentation for technical products and processes","Writing fiction about technology","Coding documentation tools","Writing marketing content"]);
  r75.set("correctAnswer", "Creating clear documentation for technical products and processes");
  r75.set("explanation", "Answer: Creating clear documentation for technical products and processes");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "technical-writer");
  r76.set("difficulty", "Basic");
  r76.set("questionNumber", 2);
  r76.set("question", "What is docs-as-code?");
  r76.set("options", ["Writing docs using same tools as code (Git, Markdown, CI/CD)","Documenting source code only","Auto-generating docs from code","A documentation framework"]);
  r76.set("correctAnswer", "Writing docs using same tools as code (Git, Markdown, CI/CD)");
  r76.set("explanation", "Answer: Writing docs using same tools as code (Git, Markdown, CI/CD)");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "technical-writer");
  r77.set("difficulty", "Basic");
  r77.set("questionNumber", 3);
  r77.set("question", "What is OpenAPI specification?");
  r77.set("options", ["Standard for describing REST APIs in machine-readable format","An open-source API framework","A testing tool for APIs","An API security standard"]);
  r77.set("correctAnswer", "Standard for describing REST APIs in machine-readable format");
  r77.set("explanation", "Answer: Standard for describing REST APIs in machine-readable format");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "technical-writer");
  r78.set("difficulty", "Basic");
  r78.set("questionNumber", 4);
  r78.set("question", "What is the Diátaxis framework?");
  r78.set("options", ["Documentation framework with 4 types: tutorials, how-to, reference, explanation","A writing style guide","A doc management system","An accessibility framework"]);
  r78.set("correctAnswer", "Documentation framework with 4 types: tutorials, how-to, reference, explanation");
  r78.set("explanation", "Answer: Documentation framework with 4 types: tutorials, how-to, reference, explanation");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "technical-writer");
  r79.set("difficulty", "Basic");
  r79.set("questionNumber", 5);
  r79.set("question", "What is Markdown?");
  r79.set("options", ["Lightweight markup language for formatting text","A programming language","A CSS framework","An HTML template"]);
  r79.set("correctAnswer", "Lightweight markup language for formatting text");
  r79.set("explanation", "Answer: Lightweight markup language for formatting text");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "technical-writer");
  r80.set("difficulty", "Medium");
  r80.set("questionNumber", 1);
  r80.set("question", "What is the difference between a tutorial and a how-to guide?");
  r80.set("options", ["Tutorial teaches through doing (learning-oriented); how-to guide solves a specific problem (task-oriented)","How-to is for beginners; tutorial is advanced","They are identical","Tutorial is shorter; how-to is longer"]);
  r80.set("correctAnswer", "Tutorial teaches through doing (learning-oriented); how-to guide solves a specific problem (task-oriented)");
  r80.set("explanation", "Answer: Tutorial teaches through doing (learning-oriented); how-to guide solves a specific problem (task-oriented)");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "technical-writer");
  r81.set("difficulty", "Medium");
  r81.set("questionNumber", 2);
  r81.set("question", "What is single-source publishing?");
  r81.set("options", ["Writing content once and publishing to multiple formats/channels","Publishing from a single author","Using one documentation tool","A Git branching strategy for docs"]);
  r81.set("correctAnswer", "Writing content once and publishing to multiple formats/channels");
  r81.set("explanation", "Answer: Writing content once and publishing to multiple formats/channels");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "technical-writer");
  r82.set("difficulty", "Medium");
  r82.set("questionNumber", 3);
  r82.set("question", "What is an API reference document?");
  r82.set("options", ["Complete technical description of all API endpoints, parameters, and responses","A guide for using an API","An API tutorial","An API changelog"]);
  r82.set("correctAnswer", "Complete technical description of all API endpoints, parameters, and responses");
  r82.set("explanation", "Answer: Complete technical description of all API endpoints, parameters, and responses");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "technical-writer");
  r83.set("difficulty", "Medium");
  r83.set("questionNumber", 4);
  r83.set("question", "What is information architecture in docs?");
  r83.set("options", ["Organizing and structuring content for findability and navigation","Technical infrastructure for hosting docs","An information security principle","A content management system"]);
  r83.set("correctAnswer", "Organizing and structuring content for findability and navigation");
  r83.set("explanation", "Answer: Organizing and structuring content for findability and navigation");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "technical-writer");
  r84.set("difficulty", "Medium");
  r84.set("questionNumber", 5);
  r84.set("question", "What is doc testing?");
  r84.set("options", ["Verifying that documented procedures and code samples actually work correctly","Testing the doc website performance","Proofreading for grammar","User testing of documentation"]);
  r84.set("correctAnswer", "Verifying that documented procedures and code samples actually work correctly");
  r84.set("explanation", "Answer: Verifying that documented procedures and code samples actually work correctly");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "technical-writer");
  r85.set("difficulty", "Hard");
  r85.set("questionNumber", 1);
  r85.set("question", "What is minimalism in technical writing?");
  r85.set("options", ["Providing only what users need to complete a task, reducing cognitive load","Using minimal formatting","Writing short sentences only","Using fewer images"]);
  r85.set("correctAnswer", "Providing only what users need to complete a task, reducing cognitive load");
  r85.set("explanation", "Answer: Providing only what users need to complete a task, reducing cognitive load");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "technical-writer");
  r86.set("difficulty", "Hard");
  r86.set("questionNumber", 2);
  r86.set("question", "What is conditional content in docs?");
  r86.set("options", ["Content that displays based on context like user role, platform, or product version","Content with if/else logic","A personalization engine","Content that changes seasonally"]);
  r86.set("correctAnswer", "Content that displays based on context like user role, platform, or product version");
  r86.set("explanation", "Answer: Content that displays based on context like user role, platform, or product version");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "technical-writer");
  r87.set("difficulty", "Hard");
  r87.set("questionNumber", 3);
  r87.set("question", "What is information debt?");
  r87.set("options", ["Accumulated outdated, inaccurate, or missing documentation that costs time to fix","Financial cost of documentation tools","Too much information in docs","Duplicate documentation"]);
  r87.set("correctAnswer", "Accumulated outdated, inaccurate, or missing documentation that costs time to fix");
  r87.set("explanation", "Answer: Accumulated outdated, inaccurate, or missing documentation that costs time to fix");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "technical-writer");
  r88.set("difficulty", "Hard");
  r88.set("questionNumber", 4);
  r88.set("question", "What is DITA?");
  r88.set("options", ["Darwin Information Typing Architecture - XML standard for topic-based technical documentation","A documentation framework","A static site generator","An API doc tool"]);
  r88.set("correctAnswer", "Darwin Information Typing Architecture - XML standard for topic-based technical documentation");
  r88.set("explanation", "Answer: Darwin Information Typing Architecture - XML standard for topic-based technical documentation");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "technical-writer");
  r89.set("difficulty", "Hard");
  r89.set("questionNumber", 5);
  r89.set("question", "What is developer experience (DX) writing?");
  r89.set("options", ["Writing focused on reducing friction for developers using APIs, SDKs, and tools","Writing for UX designers","A type of UX writing","Writing API code samples only"]);
  r89.set("correctAnswer", "Writing focused on reducing friction for developers using APIs, SDKs, and tools");
  r89.set("explanation", "Answer: Writing focused on reducing friction for developers using APIs, SDKs, and tools");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "data-analyst");
  r90.set("difficulty", "Basic");
  r90.set("questionNumber", 1);
  r90.set("question", "What is a SQL JOIN?");
  r90.set("options", ["Combining rows from two or more tables based on related columns","A database backup operation","A query optimization","A data cleaning method"]);
  r90.set("correctAnswer", "Combining rows from two or more tables based on related columns");
  r90.set("explanation", "Answer: Combining rows from two or more tables based on related columns");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "data-analyst");
  r91.set("difficulty", "Basic");
  r91.set("questionNumber", 2);
  r91.set("question", "What does GROUP BY do in SQL?");
  r91.set("options", ["Groups rows with same value for aggregation","Sorts results","Filters rows","Joins tables"]);
  r91.set("correctAnswer", "Groups rows with same value for aggregation");
  r91.set("explanation", "Answer: Groups rows with same value for aggregation");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "data-analyst");
  r92.set("difficulty", "Basic");
  r92.set("questionNumber", 3);
  r92.set("question", "What is a KPI?");
  r92.set("options", ["Key Performance Indicator","Key Process Integration","Knowledge Performance Index","Key Product Input"]);
  r92.set("correctAnswer", "Key Performance Indicator");
  r92.set("explanation", "Answer: Key Performance Indicator");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "data-analyst");
  r93.set("difficulty", "Basic");
  r93.set("questionNumber", 4);
  r93.set("question", "What is Tableau used for?");
  r93.set("options", ["Data visualization and business intelligence dashboards","Database management","Machine learning","ETL pipelines"]);
  r93.set("correctAnswer", "Data visualization and business intelligence dashboards");
  r93.set("explanation", "Answer: Data visualization and business intelligence dashboards");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "data-analyst");
  r94.set("difficulty", "Basic");
  r94.set("questionNumber", 5);
  r94.set("question", "What is a pivot table?");
  r94.set("options", ["Summarizes and aggregates data to show patterns across dimensions","A type of chart","A database query","A data cleaning tool"]);
  r94.set("correctAnswer", "Summarizes and aggregates data to show patterns across dimensions");
  r94.set("explanation", "Answer: Summarizes and aggregates data to show patterns across dimensions");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "data-analyst");
  r95.set("difficulty", "Medium");
  r95.set("questionNumber", 1);
  r95.set("question", "What is the difference between HAVING and WHERE in SQL?");
  r95.set("options", ["WHERE filters rows before aggregation; HAVING filters after aggregation","HAVING filters before aggregation; WHERE filters after","They are identical","HAVING is for joins; WHERE is for aggregations"]);
  r95.set("correctAnswer", "WHERE filters rows before aggregation; HAVING filters after aggregation");
  r95.set("explanation", "Answer: WHERE filters rows before aggregation; HAVING filters after aggregation");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "data-analyst");
  r96.set("difficulty", "Medium");
  r96.set("questionNumber", 2);
  r96.set("question", "What is a window function?");
  r96.set("options", ["Performs calculation across a set of rows related to current row without collapsing them","A SQL filter function","A chart type","A data aggregation replacing GROUP BY"]);
  r96.set("correctAnswer", "Performs calculation across a set of rows related to current row without collapsing them");
  r96.set("explanation", "Answer: Performs calculation across a set of rows related to current row without collapsing them");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "data-analyst");
  r97.set("difficulty", "Medium");
  r97.set("questionNumber", 3);
  r97.set("question", "What is cohort analysis?");
  r97.set("options", ["Analyzing behavior of groups sharing common characteristic over time","Analyzing all users together","A statistical test","A type of A/B test"]);
  r97.set("correctAnswer", "Analyzing behavior of groups sharing common characteristic over time");
  r97.set("explanation", "Answer: Analyzing behavior of groups sharing common characteristic over time");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "data-analyst");
  r98.set("difficulty", "Medium");
  r98.set("questionNumber", 4);
  r98.set("question", "What is a LOD expression in Tableau?");
  r98.set("options", ["Level of Detail expression - controls granularity of computation independent of view","A level of data filter","A LOD chart type","A data blending method"]);
  r98.set("correctAnswer", "Level of Detail expression - controls granularity of computation independent of view");
  r98.set("explanation", "Answer: Level of Detail expression - controls granularity of computation independent of view");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "data-analyst");
  r99.set("difficulty", "Medium");
  r99.set("questionNumber", 5);
  r99.set("question", "What is RFM analysis?");
  r99.set("options", ["Recency, Frequency, Monetary - segmenting customers by purchase behavior","Revenue, Forecast, Metrics analysis","A risk analysis framework","A retention model"]);
  r99.set("correctAnswer", "Recency, Frequency, Monetary - segmenting customers by purchase behavior");
  r99.set("explanation", "Answer: Recency, Frequency, Monetary - segmenting customers by purchase behavior");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "data-analyst");
  r100.set("difficulty", "Hard");
  r100.set("questionNumber", 1);
  r100.set("question", "What is the data-ink ratio concept?");
  r100.set("options", ["Maximize data representation, minimize non-data ink in visualizations (Tufte principle)","Ratio of data to storage cost","Ink used in printed reports","A dashboard loading metric"]);
  r100.set("correctAnswer", "Maximize data representation, minimize non-data ink in visualizations (Tufte principle)");
  r100.set("explanation", "Answer: Maximize data representation, minimize non-data ink in visualizations (Tufte principle)");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "data-analyst");
  r101.set("difficulty", "Hard");
  r101.set("questionNumber", 2);
  r101.set("question", "What is a leading vs lagging indicator?");
  r101.set("options", ["Leading predicts future performance; lagging measures past outcomes","Lagging predicts future; leading measures past","They are the same metric type","Leading is always revenue-based"]);
  r101.set("correctAnswer", "Leading predicts future performance; lagging measures past outcomes");
  r101.set("explanation", "Answer: Leading predicts future performance; lagging measures past outcomes");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "data-analyst");
  r102.set("difficulty", "Hard");
  r102.set("questionNumber", 3);
  r102.set("question", "What is a CTE vs subquery in SQL?");
  r102.set("options", ["CTE is named reusable query defined with WITH; subquery is inline and can reduce readability","Subquery is named; CTE is inline","They are identical in performance","CTEs are always faster"]);
  r102.set("correctAnswer", "CTE is named reusable query defined with WITH; subquery is inline and can reduce readability");
  r102.set("explanation", "Answer: CTE is named reusable query defined with WITH; subquery is inline and can reduce readability");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "data-analyst");
  r103.set("difficulty", "Hard");
  r103.set("questionNumber", 4);
  r103.set("question", "What is DAX?");
  r103.set("options", ["Data Analysis Expressions - formula language for Power BI and Excel Power Pivot","Data Aggregation XML","Dashboard Analytics Expression","A Tableau formula language"]);
  r103.set("correctAnswer", "Data Analysis Expressions - formula language for Power BI and Excel Power Pivot");
  r103.set("explanation", "Answer: Data Analysis Expressions - formula language for Power BI and Excel Power Pivot");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "data-analyst");
  r104.set("difficulty", "Hard");
  r104.set("questionNumber", 5);
  r104.set("question", "What is the difference between correlation and causation?");
  r104.set("options", ["Correlation is statistical relationship; causation means one variable causes change in another","Causation is statistical relationship; correlation means one causes another","They are the same","Correlation always implies causation with large samples"]);
  r104.set("correctAnswer", "Correlation is statistical relationship; causation means one variable causes change in another");
  r104.set("explanation", "Answer: Correlation is statistical relationship; causation means one variable causes change in another");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
