/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "data-engineer");
  r0.set("questionNumber", 1);
  r0.set("question", "What is the difference between ETL and ELT?");
  r0.set("category", "Technical");
  r0.set("difficulty", "Beginner");
  r0.set("explanation", "Beginner level question for Data Engineer. What is the difference between ETL and ELT?");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "data-engineer");
  r1.set("questionNumber", 2);
  r1.set("question", "What is a data lake vs data warehouse?");
  r1.set("category", "Technical");
  r1.set("difficulty", "Beginner");
  r1.set("explanation", "Beginner level question for Data Engineer. What is a data lake vs data warehouse?");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "data-engineer");
  r2.set("questionNumber", 3);
  r2.set("question", "What is a data lakehouse?");
  r2.set("category", "Behavioral");
  r2.set("difficulty", "Beginner");
  r2.set("explanation", "Beginner level question for Data Engineer. What is a data lakehouse?");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "data-engineer");
  r3.set("questionNumber", 4);
  r3.set("question", "What is Apache Spark?");
  r3.set("category", "Technical");
  r3.set("difficulty", "Beginner");
  r3.set("explanation", "Beginner level question for Data Engineer. What is Apache Spark?");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "data-engineer");
  r4.set("questionNumber", 5);
  r4.set("question", "What is RDD in Spark?");
  r4.set("category", "Technical");
  r4.set("difficulty", "Beginner");
  r4.set("explanation", "Beginner level question for Data Engineer. What is RDD in Spark?");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "data-engineer");
  r5.set("questionNumber", 6);
  r5.set("question", "What is a DataFrame in Spark?");
  r5.set("category", "System Design");
  r5.set("difficulty", "Beginner");
  r5.set("explanation", "Beginner level question for Data Engineer. What is a DataFrame in Spark?");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "data-engineer");
  r6.set("questionNumber", 7);
  r6.set("question", "What is Spark streaming?");
  r6.set("category", "Technical");
  r6.set("difficulty", "Beginner");
  r6.set("explanation", "Beginner level question for Data Engineer. What is Spark streaming?");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "data-engineer");
  r7.set("questionNumber", 8);
  r7.set("question", "What is Apache Kafka?");
  r7.set("category", "Technical");
  r7.set("difficulty", "Beginner");
  r7.set("explanation", "Beginner level question for Data Engineer. What is Apache Kafka?");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "data-engineer");
  r8.set("questionNumber", 9);
  r8.set("question", "What is a Kafka topic?");
  r8.set("category", "Behavioral");
  r8.set("difficulty", "Beginner");
  r8.set("explanation", "Beginner level question for Data Engineer. What is a Kafka topic?");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "data-engineer");
  r9.set("questionNumber", 10);
  r9.set("question", "What is a Kafka consumer group?");
  r9.set("category", "Technical");
  r9.set("difficulty", "Beginner");
  r9.set("explanation", "Beginner level question for Data Engineer. What is a Kafka consumer group?");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "data-engineer");
  r10.set("questionNumber", 11);
  r10.set("question", "What is exactly-once semantics?");
  r10.set("category", "Technical");
  r10.set("difficulty", "Beginner");
  r10.set("explanation", "Beginner level question for Data Engineer. What is exactly-once semantics?");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "data-engineer");
  r11.set("questionNumber", 12);
  r11.set("question", "What is Apache Airflow?");
  r11.set("category", "System Design");
  r11.set("difficulty", "Beginner");
  r11.set("explanation", "Beginner level question for Data Engineer. What is Apache Airflow?");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "data-engineer");
  r12.set("questionNumber", 13);
  r12.set("question", "What is a DAG in Airflow?");
  r12.set("category", "Technical");
  r12.set("difficulty", "Beginner");
  r12.set("explanation", "Beginner level question for Data Engineer. What is a DAG in Airflow?");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "data-engineer");
  r13.set("questionNumber", 14);
  r13.set("question", "What is an Airflow operator?");
  r13.set("category", "Technical");
  r13.set("difficulty", "Beginner");
  r13.set("explanation", "Beginner level question for Data Engineer. What is an Airflow operator?");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "data-engineer");
  r14.set("questionNumber", 15);
  r14.set("question", "What is dbt?");
  r14.set("category", "Behavioral");
  r14.set("difficulty", "Beginner");
  r14.set("explanation", "Beginner level question for Data Engineer. What is dbt?");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "data-engineer");
  r15.set("questionNumber", 16);
  r15.set("question", "What is a dbt model?");
  r15.set("category", "Technical");
  r15.set("difficulty", "Beginner");
  r15.set("explanation", "Beginner level question for Data Engineer. What is a dbt model?");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "data-engineer");
  r16.set("questionNumber", 17);
  r16.set("question", "What is dbt test?");
  r16.set("category", "Technical");
  r16.set("difficulty", "Beginner");
  r16.set("explanation", "Beginner level question for Data Engineer. What is dbt test?");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "data-engineer");
  r17.set("questionNumber", 18);
  r17.set("question", "What is dbt documentation?");
  r17.set("category", "System Design");
  r17.set("difficulty", "Beginner");
  r17.set("explanation", "Beginner level question for Data Engineer. What is dbt documentation?");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "data-engineer");
  r18.set("questionNumber", 19);
  r18.set("question", "What is Snowflake?");
  r18.set("category", "Technical");
  r18.set("difficulty", "Beginner");
  r18.set("explanation", "Beginner level question for Data Engineer. What is Snowflake?");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "data-engineer");
  r19.set("questionNumber", 20);
  r19.set("question", "What is a Snowflake virtual warehouse?");
  r19.set("category", "Technical");
  r19.set("difficulty", "Beginner");
  r19.set("explanation", "Beginner level question for Data Engineer. What is a Snowflake virtual warehouse?");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "data-engineer");
  r20.set("questionNumber", 21);
  r20.set("question", "What is zero-copy cloning in Snowflake?");
  r20.set("category", "Behavioral");
  r20.set("difficulty", "Beginner");
  r20.set("explanation", "Beginner level question for Data Engineer. What is zero-copy cloning in Snowflake?");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "data-engineer");
  r21.set("questionNumber", 22);
  r21.set("question", "What is time travel in Snowflake?");
  r21.set("category", "Technical");
  r21.set("difficulty", "Beginner");
  r21.set("explanation", "Beginner level question for Data Engineer. What is time travel in Snowflake?");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "data-engineer");
  r22.set("questionNumber", 23);
  r22.set("question", "What is BigQuery?");
  r22.set("category", "Technical");
  r22.set("difficulty", "Beginner");
  r22.set("explanation", "Beginner level question for Data Engineer. What is BigQuery?");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "data-engineer");
  r23.set("questionNumber", 24);
  r23.set("question", "What is partitioning in BigQuery?");
  r23.set("category", "System Design");
  r23.set("difficulty", "Beginner");
  r23.set("explanation", "Beginner level question for Data Engineer. What is partitioning in BigQuery?");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "data-engineer");
  r24.set("questionNumber", 25);
  r24.set("question", "What is clustering in BigQuery?");
  r24.set("category", "Technical");
  r24.set("difficulty", "Beginner");
  r24.set("explanation", "Beginner level question for Data Engineer. What is clustering in BigQuery?");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "data-engineer");
  r25.set("questionNumber", 26);
  r25.set("question", "What is Delta Lake?");
  r25.set("category", "Technical");
  r25.set("difficulty", "Beginner");
  r25.set("explanation", "Beginner level question for Data Engineer. What is Delta Lake?");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "data-engineer");
  r26.set("questionNumber", 27);
  r26.set("question", "What is ACID transactions in data engineering?");
  r26.set("category", "Behavioral");
  r26.set("difficulty", "Beginner");
  r26.set("explanation", "Beginner level question for Data Engineer. What is ACID transactions in data engineering?");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "data-engineer");
  r27.set("questionNumber", 28);
  r27.set("question", "What is schema evolution?");
  r27.set("category", "Technical");
  r27.set("difficulty", "Beginner");
  r27.set("explanation", "Beginner level question for Data Engineer. What is schema evolution?");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "data-engineer");
  r28.set("questionNumber", 29);
  r28.set("question", "What is data partitioning?");
  r28.set("category", "Technical");
  r28.set("difficulty", "Beginner");
  r28.set("explanation", "Beginner level question for Data Engineer. What is data partitioning?");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "data-engineer");
  r29.set("questionNumber", 30);
  r29.set("question", "What is data skew?");
  r29.set("category", "System Design");
  r29.set("difficulty", "Beginner");
  r29.set("explanation", "Beginner level question for Data Engineer. What is data skew?");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "data-engineer");
  r30.set("questionNumber", 31);
  r30.set("question", "What is broadcast join in Spark?");
  r30.set("category", "Technical");
  r30.set("difficulty", "Beginner");
  r30.set("explanation", "Beginner level question for Data Engineer. What is broadcast join in Spark?");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "data-engineer");
  r31.set("questionNumber", 32);
  r31.set("question", "What is shuffle in Spark?");
  r31.set("category", "Technical");
  r31.set("difficulty", "Beginner");
  r31.set("explanation", "Beginner level question for Data Engineer. What is shuffle in Spark?");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "data-engineer");
  r32.set("questionNumber", 33);
  r32.set("question", "What is lazy evaluation in Spark?");
  r32.set("category", "Behavioral");
  r32.set("difficulty", "Beginner");
  r32.set("explanation", "Beginner level question for Data Engineer. What is lazy evaluation in Spark?");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "data-engineer");
  r33.set("questionNumber", 34);
  r33.set("question", "What is caching in Spark?");
  r33.set("category", "Technical");
  r33.set("difficulty", "Intermediate");
  r33.set("explanation", "Intermediate level question for Data Engineer. What is caching in Spark?");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "data-engineer");
  r34.set("questionNumber", 35);
  r34.set("question", "What is Spark's execution model?");
  r34.set("category", "Technical");
  r34.set("difficulty", "Intermediate");
  r34.set("explanation", "Intermediate level question for Data Engineer. What is Spark's execution model?");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "data-engineer");
  r35.set("questionNumber", 36);
  r35.set("question", "What is a Parquet file?");
  r35.set("category", "System Design");
  r35.set("difficulty", "Intermediate");
  r35.set("explanation", "Intermediate level question for Data Engineer. What is a Parquet file?");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "data-engineer");
  r36.set("questionNumber", 37);
  r36.set("question", "What is ORC vs Parquet vs Avro?");
  r36.set("category", "Technical");
  r36.set("difficulty", "Intermediate");
  r36.set("explanation", "Intermediate level question for Data Engineer. What is ORC vs Parquet vs Avro?");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "data-engineer");
  r37.set("questionNumber", 38);
  r37.set("question", "What is column-oriented vs row-oriented storage?");
  r37.set("category", "Technical");
  r37.set("difficulty", "Intermediate");
  r37.set("explanation", "Intermediate level question for Data Engineer. What is column-oriented vs row-oriented storage?");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "data-engineer");
  r38.set("questionNumber", 39);
  r38.set("question", "What is data compression in pipelines?");
  r38.set("category", "Behavioral");
  r38.set("difficulty", "Intermediate");
  r38.set("explanation", "Intermediate level question for Data Engineer. What is data compression in pipelines?");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "data-engineer");
  r39.set("questionNumber", 40);
  r39.set("question", "What is Change Data Capture (CDC)?");
  r39.set("category", "Technical");
  r39.set("difficulty", "Intermediate");
  r39.set("explanation", "Intermediate level question for Data Engineer. What is Change Data Capture (CDC)?");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "data-engineer");
  r40.set("questionNumber", 41);
  r40.set("question", "What is Debezium?");
  r40.set("category", "Technical");
  r40.set("difficulty", "Intermediate");
  r40.set("explanation", "Intermediate level question for Data Engineer. What is Debezium?");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "data-engineer");
  r41.set("questionNumber", 42);
  r41.set("question", "What is stream processing vs batch processing?");
  r41.set("category", "System Design");
  r41.set("difficulty", "Intermediate");
  r41.set("explanation", "Intermediate level question for Data Engineer. What is stream processing vs batch processing?");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "data-engineer");
  r42.set("questionNumber", 43);
  r42.set("question", "What is Lambda architecture?");
  r42.set("category", "Technical");
  r42.set("difficulty", "Intermediate");
  r42.set("explanation", "Intermediate level question for Data Engineer. What is Lambda architecture?");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "data-engineer");
  r43.set("questionNumber", 44);
  r43.set("question", "What is Kappa architecture?");
  r43.set("category", "Technical");
  r43.set("difficulty", "Intermediate");
  r43.set("explanation", "Intermediate level question for Data Engineer. What is Kappa architecture?");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "data-engineer");
  r44.set("questionNumber", 45);
  r44.set("question", "What is data lineage?");
  r44.set("category", "Behavioral");
  r44.set("difficulty", "Intermediate");
  r44.set("explanation", "Intermediate level question for Data Engineer. What is data lineage?");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "data-engineer");
  r45.set("questionNumber", 46);
  r45.set("question", "What is data catalog?");
  r45.set("category", "Technical");
  r45.set("difficulty", "Intermediate");
  r45.set("explanation", "Intermediate level question for Data Engineer. What is data catalog?");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "data-engineer");
  r46.set("questionNumber", 47);
  r46.set("question", "What is data governance?");
  r46.set("category", "Technical");
  r46.set("difficulty", "Intermediate");
  r46.set("explanation", "Intermediate level question for Data Engineer. What is data governance?");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "data-engineer");
  r47.set("questionNumber", 48);
  r47.set("question", "What is GDPR impact on data engineering?");
  r47.set("category", "System Design");
  r47.set("difficulty", "Intermediate");
  r47.set("explanation", "Intermediate level question for Data Engineer. What is GDPR impact on data engineering?");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "data-engineer");
  r48.set("questionNumber", 49);
  r48.set("question", "What is PII data and how do you handle it?");
  r48.set("category", "Technical");
  r48.set("difficulty", "Intermediate");
  r48.set("explanation", "Intermediate level question for Data Engineer. What is PII data and how do you handle it?");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "data-engineer");
  r49.set("questionNumber", 50);
  r49.set("question", "What is data masking?");
  r49.set("category", "Technical");
  r49.set("difficulty", "Intermediate");
  r49.set("explanation", "Intermediate level question for Data Engineer. What is data masking?");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "data-engineer");
  r50.set("questionNumber", 51);
  r50.set("question", "What is data quality?");
  r50.set("category", "Behavioral");
  r50.set("difficulty", "Intermediate");
  r50.set("explanation", "Intermediate level question for Data Engineer. What is data quality?");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "data-engineer");
  r51.set("questionNumber", 52);
  r51.set("question", "What are data quality dimensions?");
  r51.set("category", "Technical");
  r51.set("difficulty", "Intermediate");
  r51.set("explanation", "Intermediate level question for Data Engineer. What are data quality dimensions?");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "data-engineer");
  r52.set("questionNumber", 53);
  r52.set("question", "What is Great Expectations?");
  r52.set("category", "Technical");
  r52.set("difficulty", "Intermediate");
  r52.set("explanation", "Intermediate level question for Data Engineer. What is Great Expectations?");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "data-engineer");
  r53.set("questionNumber", 54);
  r53.set("question", "What is a slowly changing dimension (SCD)?");
  r53.set("category", "System Design");
  r53.set("difficulty", "Intermediate");
  r53.set("explanation", "Intermediate level question for Data Engineer. What is a slowly changing dimension (SCD)?");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "data-engineer");
  r54.set("questionNumber", 55);
  r54.set("question", "What are SCD types (1, 2, 3)?");
  r54.set("category", "Technical");
  r54.set("difficulty", "Intermediate");
  r54.set("explanation", "Intermediate level question for Data Engineer. What are SCD types (1, 2, 3)?");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "data-engineer");
  r55.set("questionNumber", 56);
  r55.set("question", "What is star schema vs snowflake schema?");
  r55.set("category", "Technical");
  r55.set("difficulty", "Intermediate");
  r55.set("explanation", "Intermediate level question for Data Engineer. What is star schema vs snowflake schema?");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "data-engineer");
  r56.set("questionNumber", 57);
  r56.set("question", "What is a fact table vs dimension table?");
  r56.set("category", "Behavioral");
  r56.set("difficulty", "Intermediate");
  r56.set("explanation", "Intermediate level question for Data Engineer. What is a fact table vs dimension table?");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "data-engineer");
  r57.set("questionNumber", 58);
  r57.set("question", "What is surrogate key?");
  r57.set("category", "Technical");
  r57.set("difficulty", "Intermediate");
  r57.set("explanation", "Intermediate level question for Data Engineer. What is surrogate key?");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "data-engineer");
  r58.set("questionNumber", 59);
  r58.set("question", "What is natural key?");
  r58.set("category", "Technical");
  r58.set("difficulty", "Intermediate");
  r58.set("explanation", "Intermediate level question for Data Engineer. What is natural key?");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "data-engineer");
  r59.set("questionNumber", 60);
  r59.set("question", "What is incremental load vs full load?");
  r59.set("category", "System Design");
  r59.set("difficulty", "Intermediate");
  r59.set("explanation", "Intermediate level question for Data Engineer. What is incremental load vs full load?");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "data-engineer");
  r60.set("questionNumber", 61);
  r60.set("question", "What is watermarking in streaming?");
  r60.set("category", "Technical");
  r60.set("difficulty", "Intermediate");
  r60.set("explanation", "Intermediate level question for Data Engineer. What is watermarking in streaming?");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "data-engineer");
  r61.set("questionNumber", 62);
  r61.set("question", "What is windowing in streaming (tumbling, sliding, session)?");
  r61.set("category", "Technical");
  r61.set("difficulty", "Intermediate");
  r61.set("explanation", "Intermediate level question for Data Engineer. What is windowing in streaming (tumbling, sliding, session)?");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "data-engineer");
  r62.set("questionNumber", 63);
  r62.set("question", "What is backpressure in streaming?");
  r62.set("category", "Behavioral");
  r62.set("difficulty", "Intermediate");
  r62.set("explanation", "Intermediate level question for Data Engineer. What is backpressure in streaming?");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "data-engineer");
  r63.set("questionNumber", 64);
  r63.set("question", "What is at-least-once vs exactly-once delivery?");
  r63.set("category", "Technical");
  r63.set("difficulty", "Intermediate");
  r63.set("explanation", "Intermediate level question for Data Engineer. What is at-least-once vs exactly-once delivery?");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "data-engineer");
  r64.set("questionNumber", 65);
  r64.set("question", "What is idempotency in pipelines?");
  r64.set("category", "Technical");
  r64.set("difficulty", "Intermediate");
  r64.set("explanation", "Intermediate level question for Data Engineer. What is idempotency in pipelines?");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "data-engineer");
  r65.set("questionNumber", 66);
  r65.set("question", "What is data serialization?");
  r65.set("category", "System Design");
  r65.set("difficulty", "Intermediate");
  r65.set("explanation", "Intermediate level question for Data Engineer. What is data serialization?");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "data-engineer");
  r66.set("questionNumber", 67);
  r66.set("question", "What is Avro schema registry?");
  r66.set("category", "Technical");
  r66.set("difficulty", "Intermediate");
  r66.set("explanation", "Intermediate level question for Data Engineer. What is Avro schema registry?");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "data-engineer");
  r67.set("questionNumber", 68);
  r67.set("question", "What is Apache Flink vs Spark Streaming?");
  r67.set("category", "Technical");
  r67.set("difficulty", "Advanced");
  r67.set("explanation", "Advanced level question for Data Engineer. What is Apache Flink vs Spark Streaming?");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "data-engineer");
  r68.set("questionNumber", 69);
  r68.set("question", "What is Apache Beam?");
  r68.set("category", "Behavioral");
  r68.set("difficulty", "Advanced");
  r68.set("explanation", "Advanced level question for Data Engineer. What is Apache Beam?");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "data-engineer");
  r69.set("questionNumber", 70);
  r69.set("question", "What is Google Dataflow?");
  r69.set("category", "Technical");
  r69.set("difficulty", "Advanced");
  r69.set("explanation", "Advanced level question for Data Engineer. What is Google Dataflow?");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "data-engineer");
  r70.set("questionNumber", 71);
  r70.set("question", "What is AWS Glue?");
  r70.set("category", "Technical");
  r70.set("difficulty", "Advanced");
  r70.set("explanation", "Advanced level question for Data Engineer. What is AWS Glue?");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "data-engineer");
  r71.set("questionNumber", 72);
  r71.set("question", "What is AWS Glue Data Catalog?");
  r71.set("category", "System Design");
  r71.set("difficulty", "Advanced");
  r71.set("explanation", "Advanced level question for Data Engineer. What is AWS Glue Data Catalog?");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "data-engineer");
  r72.set("questionNumber", 73);
  r72.set("question", "What is Azure Data Factory?");
  r72.set("category", "Technical");
  r72.set("difficulty", "Advanced");
  r72.set("explanation", "Advanced level question for Data Engineer. What is Azure Data Factory?");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "data-engineer");
  r73.set("questionNumber", 74);
  r73.set("question", "What is Azure Synapse?");
  r73.set("category", "Technical");
  r73.set("difficulty", "Advanced");
  r73.set("explanation", "Advanced level question for Data Engineer. What is Azure Synapse?");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "data-engineer");
  r74.set("questionNumber", 75);
  r74.set("question", "What is Databricks?");
  r74.set("category", "Behavioral");
  r74.set("difficulty", "Advanced");
  r74.set("explanation", "Advanced level question for Data Engineer. What is Databricks?");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "data-engineer");
  r75.set("questionNumber", 76);
  r75.set("question", "What is Unity Catalog in Databricks?");
  r75.set("category", "Technical");
  r75.set("difficulty", "Advanced");
  r75.set("explanation", "Advanced level question for Data Engineer. What is Unity Catalog in Databricks?");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "data-engineer");
  r76.set("questionNumber", 77);
  r76.set("question", "What is a medallion architecture?");
  r76.set("category", "Technical");
  r76.set("difficulty", "Advanced");
  r76.set("explanation", "Advanced level question for Data Engineer. What is a medallion architecture?");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "data-engineer");
  r77.set("questionNumber", 78);
  r77.set("question", "What is Bronze, Silver, Gold layers?");
  r77.set("category", "System Design");
  r77.set("difficulty", "Advanced");
  r77.set("explanation", "Advanced level question for Data Engineer. What is Bronze, Silver, Gold layers?");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "data-engineer");
  r78.set("questionNumber", 79);
  r78.set("question", "What is data mesh?");
  r78.set("category", "Technical");
  r78.set("difficulty", "Advanced");
  r78.set("explanation", "Advanced level question for Data Engineer. What is data mesh?");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "data-engineer");
  r79.set("questionNumber", 80);
  r79.set("question", "What is data product?");
  r79.set("category", "Technical");
  r79.set("difficulty", "Advanced");
  r79.set("explanation", "Advanced level question for Data Engineer. What is data product?");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "data-engineer");
  r80.set("questionNumber", 81);
  r80.set("question", "What is data contract?");
  r80.set("category", "Behavioral");
  r80.set("difficulty", "Advanced");
  r80.set("explanation", "Advanced level question for Data Engineer. What is data contract?");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "data-engineer");
  r81.set("questionNumber", 82);
  r81.set("question", "What is Apache Hudi?");
  r81.set("category", "Technical");
  r81.set("difficulty", "Advanced");
  r81.set("explanation", "Advanced level question for Data Engineer. What is Apache Hudi?");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "data-engineer");
  r82.set("questionNumber", 83);
  r82.set("question", "What is Apache Iceberg?");
  r82.set("category", "Technical");
  r82.set("difficulty", "Advanced");
  r82.set("explanation", "Advanced level question for Data Engineer. What is Apache Iceberg?");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "data-engineer");
  r83.set("questionNumber", 84);
  r83.set("question", "What is a table format?");
  r83.set("category", "System Design");
  r83.set("difficulty", "Advanced");
  r83.set("explanation", "Advanced level question for Data Engineer. What is a table format?");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "data-engineer");
  r84.set("questionNumber", 85);
  r84.set("question", "What is time-travel queries?");
  r84.set("category", "Technical");
  r84.set("difficulty", "Advanced");
  r84.set("explanation", "Advanced level question for Data Engineer. What is time-travel queries?");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "data-engineer");
  r85.set("questionNumber", 86);
  r85.set("question", "What is vacuuming in Delta Lake?");
  r85.set("category", "Technical");
  r85.set("difficulty", "Advanced");
  r85.set("explanation", "Advanced level question for Data Engineer. What is vacuuming in Delta Lake?");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "data-engineer");
  r86.set("questionNumber", 87);
  r86.set("question", "What is Z-ordering in Delta Lake?");
  r86.set("category", "Behavioral");
  r86.set("difficulty", "Advanced");
  r86.set("explanation", "Advanced level question for Data Engineer. What is Z-ordering in Delta Lake?");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "data-engineer");
  r87.set("questionNumber", 88);
  r87.set("question", "What is a data pipeline SLA?");
  r87.set("category", "Technical");
  r87.set("difficulty", "Advanced");
  r87.set("explanation", "Advanced level question for Data Engineer. What is a data pipeline SLA?");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "data-engineer");
  r88.set("questionNumber", 89);
  r88.set("question", "How do you handle pipeline failures?");
  r88.set("category", "Technical");
  r88.set("difficulty", "Advanced");
  r88.set("explanation", "Advanced level question for Data Engineer. How do you handle pipeline failures?");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "data-engineer");
  r89.set("questionNumber", 90);
  r89.set("question", "What is dead letter queue?");
  r89.set("category", "System Design");
  r89.set("difficulty", "Advanced");
  r89.set("explanation", "Advanced level question for Data Engineer. What is dead letter queue?");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "data-engineer");
  r90.set("questionNumber", 91);
  r90.set("question", "What is backfilling a pipeline?");
  r90.set("category", "Technical");
  r90.set("difficulty", "Advanced");
  r90.set("explanation", "Advanced level question for Data Engineer. What is backfilling a pipeline?");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "data-engineer");
  r91.set("questionNumber", 92);
  r91.set("question", "What is data observability?");
  r91.set("category", "Technical");
  r91.set("difficulty", "Advanced");
  r91.set("explanation", "Advanced level question for Data Engineer. What is data observability?");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "data-engineer");
  r92.set("questionNumber", 93);
  r92.set("question", "What tools are used for data observability (Monte Carlo, Anomalo)?");
  r92.set("category", "Behavioral");
  r92.set("difficulty", "Advanced");
  r92.set("explanation", "Advanced level question for Data Engineer. What tools are used for data observability (Monte Carlo, Anomalo)?");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "data-engineer");
  r93.set("questionNumber", 94);
  r93.set("question", "What is a data platform?");
  r93.set("category", "Technical");
  r93.set("difficulty", "Advanced");
  r93.set("explanation", "Advanced level question for Data Engineer. What is a data platform?");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "data-engineer");
  r94.set("questionNumber", 95);
  r94.set("question", "What is self-serve analytics?");
  r94.set("category", "Technical");
  r94.set("difficulty", "Advanced");
  r94.set("explanation", "Advanced level question for Data Engineer. What is self-serve analytics?");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "data-engineer");
  r95.set("questionNumber", 96);
  r95.set("question", "What is data democratization?");
  r95.set("category", "System Design");
  r95.set("difficulty", "Advanced");
  r95.set("explanation", "Advanced level question for Data Engineer. What is data democratization?");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "data-engineer");
  r96.set("questionNumber", 97);
  r96.set("question", "What is BI (Business Intelligence)?");
  r96.set("category", "Technical");
  r96.set("difficulty", "Advanced");
  r96.set("explanation", "Advanced level question for Data Engineer. What is BI (Business Intelligence)?");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "data-engineer");
  r97.set("questionNumber", 98);
  r97.set("question", "What is the difference between a data engineer and data analyst?");
  r97.set("category", "Technical");
  r97.set("difficulty", "Advanced");
  r97.set("explanation", "Advanced level question for Data Engineer. What is the difference between a data engineer and data analyst?");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "data-engineer");
  r98.set("questionNumber", 99);
  r98.set("question", "What is a data architect?");
  r98.set("category", "Behavioral");
  r98.set("difficulty", "Advanced");
  r98.set("explanation", "Advanced level question for Data Engineer. What is a data architect?");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "data-engineer");
  r99.set("questionNumber", 100);
  r99.set("question", "What is MLOps vs DataOps?");
  r99.set("category", "Technical");
  r99.set("difficulty", "Advanced");
  r99.set("explanation", "Advanced level question for Data Engineer. What is MLOps vs DataOps?");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "full-stack-engineer");
  r100.set("questionNumber", 1);
  r100.set("question", "What is the difference between == and === in JavaScript?");
  r100.set("category", "Technical");
  r100.set("difficulty", "Beginner");
  r100.set("explanation", "Beginner level question for Full Stack Engineer. What is the difference between == and === in JavaScript?");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "full-stack-engineer");
  r101.set("questionNumber", 2);
  r101.set("question", "What is closure in JavaScript?");
  r101.set("category", "Technical");
  r101.set("difficulty", "Beginner");
  r101.set("explanation", "Beginner level question for Full Stack Engineer. What is closure in JavaScript?");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "full-stack-engineer");
  r102.set("questionNumber", 3);
  r102.set("question", "What is the event loop in JavaScript?");
  r102.set("category", "Behavioral");
  r102.set("difficulty", "Beginner");
  r102.set("explanation", "Beginner level question for Full Stack Engineer. What is the event loop in JavaScript?");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "full-stack-engineer");
  r103.set("questionNumber", 4);
  r103.set("question", "What is async/await vs Promises?");
  r103.set("category", "Technical");
  r103.set("difficulty", "Beginner");
  r103.set("explanation", "Beginner level question for Full Stack Engineer. What is async/await vs Promises?");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "full-stack-engineer");
  r104.set("questionNumber", 5);
  r104.set("question", "What is hoisting in JavaScript?");
  r104.set("category", "Technical");
  r104.set("difficulty", "Beginner");
  r104.set("explanation", "Beginner level question for Full Stack Engineer. What is hoisting in JavaScript?");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r105 = new Record(collection);
  r105.set("careerSlug", "full-stack-engineer");
  r105.set("questionNumber", 6);
  r105.set("question", "What is the difference between var, let, and const?");
  r105.set("category", "System Design");
  r105.set("difficulty", "Beginner");
  r105.set("explanation", "Beginner level question for Full Stack Engineer. What is the difference between var, let, and const?");
  try { app.save(r105); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r106 = new Record(collection);
  r106.set("careerSlug", "full-stack-engineer");
  r106.set("questionNumber", 7);
  r106.set("question", "What is prototype inheritance?");
  r106.set("category", "Technical");
  r106.set("difficulty", "Beginner");
  r106.set("explanation", "Beginner level question for Full Stack Engineer. What is prototype inheritance?");
  try { app.save(r106); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r107 = new Record(collection);
  r107.set("careerSlug", "full-stack-engineer");
  r107.set("questionNumber", 8);
  r107.set("question", "What is the DOM?");
  r107.set("category", "Technical");
  r107.set("difficulty", "Beginner");
  r107.set("explanation", "Beginner level question for Full Stack Engineer. What is the DOM?");
  try { app.save(r107); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r108 = new Record(collection);
  r108.set("careerSlug", "full-stack-engineer");
  r108.set("questionNumber", 9);
  r108.set("question", "What is virtual DOM?");
  r108.set("category", "Behavioral");
  r108.set("difficulty", "Beginner");
  r108.set("explanation", "Beginner level question for Full Stack Engineer. What is virtual DOM?");
  try { app.save(r108); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r109 = new Record(collection);
  r109.set("careerSlug", "full-stack-engineer");
  r109.set("questionNumber", 10);
  r109.set("question", "How does React's reconciliation work?");
  r109.set("category", "Technical");
  r109.set("difficulty", "Beginner");
  r109.set("explanation", "Beginner level question for Full Stack Engineer. How does React's reconciliation work?");
  try { app.save(r109); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r110 = new Record(collection);
  r110.set("careerSlug", "full-stack-engineer");
  r110.set("questionNumber", 11);
  r110.set("question", "What are React hooks?");
  r110.set("category", "Technical");
  r110.set("difficulty", "Beginner");
  r110.set("explanation", "Beginner level question for Full Stack Engineer. What are React hooks?");
  try { app.save(r110); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r111 = new Record(collection);
  r111.set("careerSlug", "full-stack-engineer");
  r111.set("questionNumber", 12);
  r111.set("question", "What is useState and useEffect?");
  r111.set("category", "System Design");
  r111.set("difficulty", "Beginner");
  r111.set("explanation", "Beginner level question for Full Stack Engineer. What is useState and useEffect?");
  try { app.save(r111); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r112 = new Record(collection);
  r112.set("careerSlug", "full-stack-engineer");
  r112.set("questionNumber", 13);
  r112.set("question", "What is useContext?");
  r112.set("category", "Technical");
  r112.set("difficulty", "Beginner");
  r112.set("explanation", "Beginner level question for Full Stack Engineer. What is useContext?");
  try { app.save(r112); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r113 = new Record(collection);
  r113.set("careerSlug", "full-stack-engineer");
  r113.set("questionNumber", 14);
  r113.set("question", "What is useReducer?");
  r113.set("category", "Technical");
  r113.set("difficulty", "Beginner");
  r113.set("explanation", "Beginner level question for Full Stack Engineer. What is useReducer?");
  try { app.save(r113); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r114 = new Record(collection);
  r114.set("careerSlug", "full-stack-engineer");
  r114.set("questionNumber", 15);
  r114.set("question", "What is useMemo and useCallback?");
  r114.set("category", "Behavioral");
  r114.set("difficulty", "Beginner");
  r114.set("explanation", "Beginner level question for Full Stack Engineer. What is useMemo and useCallback?");
  try { app.save(r114); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r115 = new Record(collection);
  r115.set("careerSlug", "full-stack-engineer");
  r115.set("questionNumber", 16);
  r115.set("question", "What is React.memo?");
  r115.set("category", "Technical");
  r115.set("difficulty", "Beginner");
  r115.set("explanation", "Beginner level question for Full Stack Engineer. What is React.memo?");
  try { app.save(r115); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r116 = new Record(collection);
  r116.set("careerSlug", "full-stack-engineer");
  r116.set("questionNumber", 17);
  r116.set("question", "What is Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)?");
  r116.set("category", "Technical");
  r116.set("difficulty", "Beginner");
  r116.set("explanation", "Beginner level question for Full Stack Engineer. What is Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)?");
  try { app.save(r116); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r117 = new Record(collection);
  r117.set("careerSlug", "full-stack-engineer");
  r117.set("questionNumber", 18);
  r117.set("question", "What is Static Site Generation (SSG)?");
  r117.set("category", "System Design");
  r117.set("difficulty", "Beginner");
  r117.set("explanation", "Beginner level question for Full Stack Engineer. What is Static Site Generation (SSG)?");
  try { app.save(r117); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r118 = new Record(collection);
  r118.set("careerSlug", "full-stack-engineer");
  r118.set("questionNumber", 19);
  r118.set("question", "What is ISR (Incremental Static Regeneration)?");
  r118.set("category", "Technical");
  r118.set("difficulty", "Beginner");
  r118.set("explanation", "Beginner level question for Full Stack Engineer. What is ISR (Incremental Static Regeneration)?");
  try { app.save(r118); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r119 = new Record(collection);
  r119.set("careerSlug", "full-stack-engineer");
  r119.set("questionNumber", 20);
  r119.set("question", "What is Next.js App Router vs Pages Router?");
  r119.set("category", "Technical");
  r119.set("difficulty", "Beginner");
  r119.set("explanation", "Beginner level question for Full Stack Engineer. What is Next.js App Router vs Pages Router?");
  try { app.save(r119); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r120 = new Record(collection);
  r120.set("careerSlug", "full-stack-engineer");
  r120.set("questionNumber", 21);
  r120.set("question", "What is TypeScript and why use it?");
  r120.set("category", "Behavioral");
  r120.set("difficulty", "Beginner");
  r120.set("explanation", "Beginner level question for Full Stack Engineer. What is TypeScript and why use it?");
  try { app.save(r120); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r121 = new Record(collection);
  r121.set("careerSlug", "full-stack-engineer");
  r121.set("questionNumber", 22);
  r121.set("question", "What are generics in TypeScript?");
  r121.set("category", "Technical");
  r121.set("difficulty", "Beginner");
  r121.set("explanation", "Beginner level question for Full Stack Engineer. What are generics in TypeScript?");
  try { app.save(r121); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r122 = new Record(collection);
  r122.set("careerSlug", "full-stack-engineer");
  r122.set("questionNumber", 23);
  r122.set("question", "What is REST vs GraphQL?");
  r122.set("category", "Technical");
  r122.set("difficulty", "Beginner");
  r122.set("explanation", "Beginner level question for Full Stack Engineer. What is REST vs GraphQL?");
  try { app.save(r122); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r123 = new Record(collection);
  r123.set("careerSlug", "full-stack-engineer");
  r123.set("questionNumber", 24);
  r123.set("question", "What is HTTP methods (GET, POST, PUT, PATCH, DELETE)?");
  r123.set("category", "System Design");
  r123.set("difficulty", "Beginner");
  r123.set("explanation", "Beginner level question for Full Stack Engineer. What is HTTP methods (GET, POST, PUT, PATCH, DELETE)?");
  try { app.save(r123); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r124 = new Record(collection);
  r124.set("careerSlug", "full-stack-engineer");
  r124.set("questionNumber", 25);
  r124.set("question", "What are HTTP status codes?");
  r124.set("category", "Technical");
  r124.set("difficulty", "Beginner");
  r124.set("explanation", "Beginner level question for Full Stack Engineer. What are HTTP status codes?");
  try { app.save(r124); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r125 = new Record(collection);
  r125.set("careerSlug", "full-stack-engineer");
  r125.set("questionNumber", 26);
  r125.set("question", "What is CORS?");
  r125.set("category", "Technical");
  r125.set("difficulty", "Beginner");
  r125.set("explanation", "Beginner level question for Full Stack Engineer. What is CORS?");
  try { app.save(r125); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r126 = new Record(collection);
  r126.set("careerSlug", "full-stack-engineer");
  r126.set("questionNumber", 27);
  r126.set("question", "What is JWT?");
  r126.set("category", "Behavioral");
  r126.set("difficulty", "Beginner");
  r126.set("explanation", "Beginner level question for Full Stack Engineer. What is JWT?");
  try { app.save(r126); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r127 = new Record(collection);
  r127.set("careerSlug", "full-stack-engineer");
  r127.set("questionNumber", 28);
  r127.set("question", "What is OAuth 2.0?");
  r127.set("category", "Technical");
  r127.set("difficulty", "Beginner");
  r127.set("explanation", "Beginner level question for Full Stack Engineer. What is OAuth 2.0?");
  try { app.save(r127); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r128 = new Record(collection);
  r128.set("careerSlug", "full-stack-engineer");
  r128.set("questionNumber", 29);
  r128.set("question", "What is session vs token authentication?");
  r128.set("category", "Technical");
  r128.set("difficulty", "Beginner");
  r128.set("explanation", "Beginner level question for Full Stack Engineer. What is session vs token authentication?");
  try { app.save(r128); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r129 = new Record(collection);
  r129.set("careerSlug", "full-stack-engineer");
  r129.set("questionNumber", 30);
  r129.set("question", "What is middleware in Express?");
  r129.set("category", "System Design");
  r129.set("difficulty", "Beginner");
  r129.set("explanation", "Beginner level question for Full Stack Engineer. What is middleware in Express?");
  try { app.save(r129); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r130 = new Record(collection);
  r130.set("careerSlug", "full-stack-engineer");
  r130.set("questionNumber", 31);
  r130.set("question", "What is a REST API?");
  r130.set("category", "Technical");
  r130.set("difficulty", "Beginner");
  r130.set("explanation", "Beginner level question for Full Stack Engineer. What is a REST API?");
  try { app.save(r130); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r131 = new Record(collection);
  r131.set("careerSlug", "full-stack-engineer");
  r131.set("questionNumber", 32);
  r131.set("question", "What is an ORM?");
  r131.set("category", "Technical");
  r131.set("difficulty", "Beginner");
  r131.set("explanation", "Beginner level question for Full Stack Engineer. What is an ORM?");
  try { app.save(r131); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r132 = new Record(collection);
  r132.set("careerSlug", "full-stack-engineer");
  r132.set("questionNumber", 33);
  r132.set("question", "What is Prisma?");
  r132.set("category", "Behavioral");
  r132.set("difficulty", "Beginner");
  r132.set("explanation", "Beginner level question for Full Stack Engineer. What is Prisma?");
  try { app.save(r132); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r133 = new Record(collection);
  r133.set("careerSlug", "full-stack-engineer");
  r133.set("questionNumber", 34);
  r133.set("question", "What is a database transaction?");
  r133.set("category", "Technical");
  r133.set("difficulty", "Intermediate");
  r133.set("explanation", "Intermediate level question for Full Stack Engineer. What is a database transaction?");
  try { app.save(r133); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r134 = new Record(collection);
  r134.set("careerSlug", "full-stack-engineer");
  r134.set("questionNumber", 35);
  r134.set("question", "What is ACID?");
  r134.set("category", "Technical");
  r134.set("difficulty", "Intermediate");
  r134.set("explanation", "Intermediate level question for Full Stack Engineer. What is ACID?");
  try { app.save(r134); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r135 = new Record(collection);
  r135.set("careerSlug", "full-stack-engineer");
  r135.set("questionNumber", 36);
  r135.set("question", "What is N+1 query problem?");
  r135.set("category", "System Design");
  r135.set("difficulty", "Intermediate");
  r135.set("explanation", "Intermediate level question for Full Stack Engineer. What is N+1 query problem?");
  try { app.save(r135); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r136 = new Record(collection);
  r136.set("careerSlug", "full-stack-engineer");
  r136.set("questionNumber", 37);
  r136.set("question", "What is database indexing?");
  r136.set("category", "Technical");
  r136.set("difficulty", "Intermediate");
  r136.set("explanation", "Intermediate level question for Full Stack Engineer. What is database indexing?");
  try { app.save(r136); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r137 = new Record(collection);
  r137.set("careerSlug", "full-stack-engineer");
  r137.set("questionNumber", 38);
  r137.set("question", "What is PostgreSQL vs MySQL?");
  r137.set("category", "Technical");
  r137.set("difficulty", "Intermediate");
  r137.set("explanation", "Intermediate level question for Full Stack Engineer. What is PostgreSQL vs MySQL?");
  try { app.save(r137); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r138 = new Record(collection);
  r138.set("careerSlug", "full-stack-engineer");
  r138.set("questionNumber", 39);
  r138.set("question", "What is NoSQL vs SQL?");
  r138.set("category", "Behavioral");
  r138.set("difficulty", "Intermediate");
  r138.set("explanation", "Intermediate level question for Full Stack Engineer. What is NoSQL vs SQL?");
  try { app.save(r138); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r139 = new Record(collection);
  r139.set("careerSlug", "full-stack-engineer");
  r139.set("questionNumber", 40);
  r139.set("question", "What is MongoDB?");
  r139.set("category", "Technical");
  r139.set("difficulty", "Intermediate");
  r139.set("explanation", "Intermediate level question for Full Stack Engineer. What is MongoDB?");
  try { app.save(r139); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r140 = new Record(collection);
  r140.set("careerSlug", "full-stack-engineer");
  r140.set("questionNumber", 41);
  r140.set("question", "What is Redis and when do you use it?");
  r140.set("category", "Technical");
  r140.set("difficulty", "Intermediate");
  r140.set("explanation", "Intermediate level question for Full Stack Engineer. What is Redis and when do you use it?");
  try { app.save(r140); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r141 = new Record(collection);
  r141.set("careerSlug", "full-stack-engineer");
  r141.set("questionNumber", 42);
  r141.set("question", "What is caching strategies?");
  r141.set("category", "System Design");
  r141.set("difficulty", "Intermediate");
  r141.set("explanation", "Intermediate level question for Full Stack Engineer. What is caching strategies?");
  try { app.save(r141); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r142 = new Record(collection);
  r142.set("careerSlug", "full-stack-engineer");
  r142.set("questionNumber", 43);
  r142.set("question", "What is WebSockets?");
  r142.set("category", "Technical");
  r142.set("difficulty", "Intermediate");
  r142.set("explanation", "Intermediate level question for Full Stack Engineer. What is WebSockets?");
  try { app.save(r142); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r143 = new Record(collection);
  r143.set("careerSlug", "full-stack-engineer");
  r143.set("questionNumber", 44);
  r143.set("question", "What is Server-Sent Events?");
  r143.set("category", "Technical");
  r143.set("difficulty", "Intermediate");
  r143.set("explanation", "Intermediate level question for Full Stack Engineer. What is Server-Sent Events?");
  try { app.save(r143); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r144 = new Record(collection);
  r144.set("careerSlug", "full-stack-engineer");
  r144.set("questionNumber", 45);
  r144.set("question", "What is service worker?");
  r144.set("category", "Behavioral");
  r144.set("difficulty", "Intermediate");
  r144.set("explanation", "Intermediate level question for Full Stack Engineer. What is service worker?");
  try { app.save(r144); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r145 = new Record(collection);
  r145.set("careerSlug", "full-stack-engineer");
  r145.set("questionNumber", 46);
  r145.set("question", "What is PWA?");
  r145.set("category", "Technical");
  r145.set("difficulty", "Intermediate");
  r145.set("explanation", "Intermediate level question for Full Stack Engineer. What is PWA?");
  try { app.save(r145); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r146 = new Record(collection);
  r146.set("careerSlug", "full-stack-engineer");
  r146.set("questionNumber", 47);
  r146.set("question", "What is lazy loading?");
  r146.set("category", "Technical");
  r146.set("difficulty", "Intermediate");
  r146.set("explanation", "Intermediate level question for Full Stack Engineer. What is lazy loading?");
  try { app.save(r146); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r147 = new Record(collection);
  r147.set("careerSlug", "full-stack-engineer");
  r147.set("questionNumber", 48);
  r147.set("question", "What is code splitting?");
  r147.set("category", "System Design");
  r147.set("difficulty", "Intermediate");
  r147.set("explanation", "Intermediate level question for Full Stack Engineer. What is code splitting?");
  try { app.save(r147); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r148 = new Record(collection);
  r148.set("careerSlug", "full-stack-engineer");
  r148.set("questionNumber", 49);
  r148.set("question", "What is tree shaking?");
  r148.set("category", "Technical");
  r148.set("difficulty", "Intermediate");
  r148.set("explanation", "Intermediate level question for Full Stack Engineer. What is tree shaking?");
  try { app.save(r148); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r149 = new Record(collection);
  r149.set("careerSlug", "full-stack-engineer");
  r149.set("questionNumber", 50);
  r149.set("question", "What is Webpack vs Vite?");
  r149.set("category", "Technical");
  r149.set("difficulty", "Intermediate");
  r149.set("explanation", "Intermediate level question for Full Stack Engineer. What is Webpack vs Vite?");
  try { app.save(r149); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r150 = new Record(collection);
  r150.set("careerSlug", "full-stack-engineer");
  r150.set("questionNumber", 51);
  r150.set("question", "What is CSS Grid vs Flexbox?");
  r150.set("category", "Behavioral");
  r150.set("difficulty", "Intermediate");
  r150.set("explanation", "Intermediate level question for Full Stack Engineer. What is CSS Grid vs Flexbox?");
  try { app.save(r150); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r151 = new Record(collection);
  r151.set("careerSlug", "full-stack-engineer");
  r151.set("questionNumber", 52);
  r151.set("question", "What is responsive design?");
  r151.set("category", "Technical");
  r151.set("difficulty", "Intermediate");
  r151.set("explanation", "Intermediate level question for Full Stack Engineer. What is responsive design?");
  try { app.save(r151); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r152 = new Record(collection);
  r152.set("careerSlug", "full-stack-engineer");
  r152.set("questionNumber", 53);
  r152.set("question", "What is mobile-first design?");
  r152.set("category", "Technical");
  r152.set("difficulty", "Intermediate");
  r152.set("explanation", "Intermediate level question for Full Stack Engineer. What is mobile-first design?");
  try { app.save(r152); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r153 = new Record(collection);
  r153.set("careerSlug", "full-stack-engineer");
  r153.set("questionNumber", 54);
  r153.set("question", "What is accessibility (a11y)?");
  r153.set("category", "System Design");
  r153.set("difficulty", "Intermediate");
  r153.set("explanation", "Intermediate level question for Full Stack Engineer. What is accessibility (a11y)?");
  try { app.save(r153); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r154 = new Record(collection);
  r154.set("careerSlug", "full-stack-engineer");
  r154.set("questionNumber", 55);
  r154.set("question", "What is SEO and how do you optimize for it?");
  r154.set("category", "Technical");
  r154.set("difficulty", "Intermediate");
  r154.set("explanation", "Intermediate level question for Full Stack Engineer. What is SEO and how do you optimize for it?");
  try { app.save(r154); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r155 = new Record(collection);
  r155.set("careerSlug", "full-stack-engineer");
  r155.set("questionNumber", 56);
  r155.set("question", "What is Core Web Vitals?");
  r155.set("category", "Technical");
  r155.set("difficulty", "Intermediate");
  r155.set("explanation", "Intermediate level question for Full Stack Engineer. What is Core Web Vitals?");
  try { app.save(r155); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r156 = new Record(collection);
  r156.set("careerSlug", "full-stack-engineer");
  r156.set("questionNumber", 57);
  r156.set("question", "What is LCP, FID, CLS?");
  r156.set("category", "Behavioral");
  r156.set("difficulty", "Intermediate");
  r156.set("explanation", "Intermediate level question for Full Stack Engineer. What is LCP, FID, CLS?");
  try { app.save(r156); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r157 = new Record(collection);
  r157.set("careerSlug", "full-stack-engineer");
  r157.set("questionNumber", 58);
  r157.set("question", "What is CDN?");
  r157.set("category", "Technical");
  r157.set("difficulty", "Intermediate");
  r157.set("explanation", "Intermediate level question for Full Stack Engineer. What is CDN?");
  try { app.save(r157); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r158 = new Record(collection);
  r158.set("careerSlug", "full-stack-engineer");
  r158.set("questionNumber", 59);
  r158.set("question", "What is edge computing for web?");
  r158.set("category", "Technical");
  r158.set("difficulty", "Intermediate");
  r158.set("explanation", "Intermediate level question for Full Stack Engineer. What is edge computing for web?");
  try { app.save(r158); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r159 = new Record(collection);
  r159.set("careerSlug", "full-stack-engineer");
  r159.set("questionNumber", 60);
  r159.set("question", "What is CI/CD for web apps?");
  r159.set("category", "System Design");
  r159.set("difficulty", "Intermediate");
  r159.set("explanation", "Intermediate level question for Full Stack Engineer. What is CI/CD for web apps?");
  try { app.save(r159); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r160 = new Record(collection);
  r160.set("careerSlug", "full-stack-engineer");
  r160.set("questionNumber", 61);
  r160.set("question", "What is unit testing vs integration testing vs e2e testing?");
  r160.set("category", "Technical");
  r160.set("difficulty", "Intermediate");
  r160.set("explanation", "Intermediate level question for Full Stack Engineer. What is unit testing vs integration testing vs e2e testing?");
  try { app.save(r160); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r161 = new Record(collection);
  r161.set("careerSlug", "full-stack-engineer");
  r161.set("questionNumber", 62);
  r161.set("question", "What is Jest?");
  r161.set("category", "Technical");
  r161.set("difficulty", "Intermediate");
  r161.set("explanation", "Intermediate level question for Full Stack Engineer. What is Jest?");
  try { app.save(r161); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r162 = new Record(collection);
  r162.set("careerSlug", "full-stack-engineer");
  r162.set("questionNumber", 63);
  r162.set("question", "What is React Testing Library?");
  r162.set("category", "Behavioral");
  r162.set("difficulty", "Intermediate");
  r162.set("explanation", "Intermediate level question for Full Stack Engineer. What is React Testing Library?");
  try { app.save(r162); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r163 = new Record(collection);
  r163.set("careerSlug", "full-stack-engineer");
  r163.set("questionNumber", 64);
  r163.set("question", "What is Cypress?");
  r163.set("category", "Technical");
  r163.set("difficulty", "Intermediate");
  r163.set("explanation", "Intermediate level question for Full Stack Engineer. What is Cypress?");
  try { app.save(r163); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r164 = new Record(collection);
  r164.set("careerSlug", "full-stack-engineer");
  r164.set("questionNumber", 65);
  r164.set("question", "What is Playwright?");
  r164.set("category", "Technical");
  r164.set("difficulty", "Intermediate");
  r164.set("explanation", "Intermediate level question for Full Stack Engineer. What is Playwright?");
  try { app.save(r164); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r165 = new Record(collection);
  r165.set("careerSlug", "full-stack-engineer");
  r165.set("questionNumber", 66);
  r165.set("question", "What is Docker for web development?");
  r165.set("category", "System Design");
  r165.set("difficulty", "Intermediate");
  r165.set("explanation", "Intermediate level question for Full Stack Engineer. What is Docker for web development?");
  try { app.save(r165); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r166 = new Record(collection);
  r166.set("careerSlug", "full-stack-engineer");
  r166.set("questionNumber", 67);
  r166.set("question", "What is environment variables?");
  r166.set("category", "Technical");
  r166.set("difficulty", "Intermediate");
  r166.set("explanation", "Intermediate level question for Full Stack Engineer. What is environment variables?");
  try { app.save(r166); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r167 = new Record(collection);
  r167.set("careerSlug", "full-stack-engineer");
  r167.set("questionNumber", 68);
  r167.set("question", "What is .env file?");
  r167.set("category", "Technical");
  r167.set("difficulty", "Advanced");
  r167.set("explanation", "Advanced level question for Full Stack Engineer. What is .env file?");
  try { app.save(r167); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r168 = new Record(collection);
  r168.set("careerSlug", "full-stack-engineer");
  r168.set("questionNumber", 69);
  r168.set("question", "What is a monorepo?");
  r168.set("category", "Behavioral");
  r168.set("difficulty", "Advanced");
  r168.set("explanation", "Advanced level question for Full Stack Engineer. What is a monorepo?");
  try { app.save(r168); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r169 = new Record(collection);
  r169.set("careerSlug", "full-stack-engineer");
  r169.set("questionNumber", 70);
  r169.set("question", "What is Turborepo?");
  r169.set("category", "Technical");
  r169.set("difficulty", "Advanced");
  r169.set("explanation", "Advanced level question for Full Stack Engineer. What is Turborepo?");
  try { app.save(r169); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r170 = new Record(collection);
  r170.set("careerSlug", "full-stack-engineer");
  r170.set("questionNumber", 71);
  r170.set("question", "What is a microservices vs monolithic architecture?");
  r170.set("category", "Technical");
  r170.set("difficulty", "Advanced");
  r170.set("explanation", "Advanced level question for Full Stack Engineer. What is a microservices vs monolithic architecture?");
  try { app.save(r170); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r171 = new Record(collection);
  r171.set("careerSlug", "full-stack-engineer");
  r171.set("questionNumber", 72);
  r171.set("question", "What is API rate limiting?");
  r171.set("category", "System Design");
  r171.set("difficulty", "Advanced");
  r171.set("explanation", "Advanced level question for Full Stack Engineer. What is API rate limiting?");
  try { app.save(r171); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r172 = new Record(collection);
  r172.set("careerSlug", "full-stack-engineer");
  r172.set("questionNumber", 73);
  r172.set("question", "What is pagination?");
  r172.set("category", "Technical");
  r172.set("difficulty", "Advanced");
  r172.set("explanation", "Advanced level question for Full Stack Engineer. What is pagination?");
  try { app.save(r172); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r173 = new Record(collection);
  r173.set("careerSlug", "full-stack-engineer");
  r173.set("questionNumber", 74);
  r173.set("question", "What is cursor vs offset pagination?");
  r173.set("category", "Technical");
  r173.set("difficulty", "Advanced");
  r173.set("explanation", "Advanced level question for Full Stack Engineer. What is cursor vs offset pagination?");
  try { app.save(r173); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r174 = new Record(collection);
  r174.set("careerSlug", "full-stack-engineer");
  r174.set("questionNumber", 75);
  r174.set("question", "What is full-text search?");
  r174.set("category", "Behavioral");
  r174.set("difficulty", "Advanced");
  r174.set("explanation", "Advanced level question for Full Stack Engineer. What is full-text search?");
  try { app.save(r174); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r175 = new Record(collection);
  r175.set("careerSlug", "full-stack-engineer");
  r175.set("questionNumber", 76);
  r175.set("question", "What is Elasticsearch for web apps?");
  r175.set("category", "Technical");
  r175.set("difficulty", "Advanced");
  r175.set("explanation", "Advanced level question for Full Stack Engineer. What is Elasticsearch for web apps?");
  try { app.save(r175); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r176 = new Record(collection);
  r176.set("careerSlug", "full-stack-engineer");
  r176.set("questionNumber", 77);
  r176.set("question", "What is image optimization?");
  r176.set("category", "Technical");
  r176.set("difficulty", "Advanced");
  r176.set("explanation", "Advanced level question for Full Stack Engineer. What is image optimization?");
  try { app.save(r176); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r177 = new Record(collection);
  r177.set("careerSlug", "full-stack-engineer");
  r177.set("questionNumber", 78);
  r177.set("question", "What is next/image?");
  r177.set("category", "System Design");
  r177.set("difficulty", "Advanced");
  r177.set("explanation", "Advanced level question for Full Stack Engineer. What is next/image?");
  try { app.save(r177); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r178 = new Record(collection);
  r178.set("careerSlug", "full-stack-engineer");
  r178.set("questionNumber", 79);
  r178.set("question", "What is a Content Management System (CMS)?");
  r178.set("category", "Technical");
  r178.set("difficulty", "Advanced");
  r178.set("explanation", "Advanced level question for Full Stack Engineer. What is a Content Management System (CMS)?");
  try { app.save(r178); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r179 = new Record(collection);
  r179.set("careerSlug", "full-stack-engineer");
  r179.set("questionNumber", 80);
  r179.set("question", "What is headless CMS?");
  r179.set("category", "Technical");
  r179.set("difficulty", "Advanced");
  r179.set("explanation", "Advanced level question for Full Stack Engineer. What is headless CMS?");
  try { app.save(r179); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r180 = new Record(collection);
  r180.set("careerSlug", "full-stack-engineer");
  r180.set("questionNumber", 81);
  r180.set("question", "What is Stripe integration?");
  r180.set("category", "Behavioral");
  r180.set("difficulty", "Advanced");
  r180.set("explanation", "Advanced level question for Full Stack Engineer. What is Stripe integration?");
  try { app.save(r180); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r181 = new Record(collection);
  r181.set("careerSlug", "full-stack-engineer");
  r181.set("questionNumber", 82);
  r181.set("question", "What is webhook?");
  r181.set("category", "Technical");
  r181.set("difficulty", "Advanced");
  r181.set("explanation", "Advanced level question for Full Stack Engineer. What is webhook?");
  try { app.save(r181); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r182 = new Record(collection);
  r182.set("careerSlug", "full-stack-engineer");
  r182.set("questionNumber", 83);
  r182.set("question", "What is event-driven architecture for web?");
  r182.set("category", "Technical");
  r182.set("difficulty", "Advanced");
  r182.set("explanation", "Advanced level question for Full Stack Engineer. What is event-driven architecture for web?");
  try { app.save(r182); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r183 = new Record(collection);
  r183.set("careerSlug", "full-stack-engineer");
  r183.set("questionNumber", 84);
  r183.set("question", "What is BFF (Backend for Frontend)?");
  r183.set("category", "System Design");
  r183.set("difficulty", "Advanced");
  r183.set("explanation", "Advanced level question for Full Stack Engineer. What is BFF (Backend for Frontend)?");
  try { app.save(r183); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r184 = new Record(collection);
  r184.set("careerSlug", "full-stack-engineer");
  r184.set("questionNumber", 85);
  r184.set("question", "What is tRPC?");
  r184.set("category", "Technical");
  r184.set("difficulty", "Advanced");
  r184.set("explanation", "Advanced level question for Full Stack Engineer. What is tRPC?");
  try { app.save(r184); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r185 = new Record(collection);
  r185.set("careerSlug", "full-stack-engineer");
  r185.set("questionNumber", 86);
  r185.set("question", "What is Zod?");
  r185.set("category", "Technical");
  r185.set("difficulty", "Advanced");
  r185.set("explanation", "Advanced level question for Full Stack Engineer. What is Zod?");
  try { app.save(r185); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r186 = new Record(collection);
  r186.set("careerSlug", "full-stack-engineer");
  r186.set("questionNumber", 87);
  r186.set("question", "What is form validation?");
  r186.set("category", "Behavioral");
  r186.set("difficulty", "Advanced");
  r186.set("explanation", "Advanced level question for Full Stack Engineer. What is form validation?");
  try { app.save(r186); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r187 = new Record(collection);
  r187.set("careerSlug", "full-stack-engineer");
  r187.set("questionNumber", 88);
  r187.set("question", "What is React Hook Form?");
  r187.set("category", "Technical");
  r187.set("difficulty", "Advanced");
  r187.set("explanation", "Advanced level question for Full Stack Engineer. What is React Hook Form?");
  try { app.save(r187); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r188 = new Record(collection);
  r188.set("careerSlug", "full-stack-engineer");
  r188.set("questionNumber", 89);
  r188.set("question", "What is state management (Redux, Zustand, Jotai)?");
  r188.set("category", "Technical");
  r188.set("difficulty", "Advanced");
  r188.set("explanation", "Advanced level question for Full Stack Engineer. What is state management (Redux, Zustand, Jotai)?");
  try { app.save(r188); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r189 = new Record(collection);
  r189.set("careerSlug", "full-stack-engineer");
  r189.set("questionNumber", 90);
  r189.set("question", "What is Tailwind CSS?");
  r189.set("category", "System Design");
  r189.set("difficulty", "Advanced");
  r189.set("explanation", "Advanced level question for Full Stack Engineer. What is Tailwind CSS?");
  try { app.save(r189); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r190 = new Record(collection);
  r190.set("careerSlug", "full-stack-engineer");
  r190.set("questionNumber", 91);
  r190.set("question", "What is CSS-in-JS?");
  r190.set("category", "Technical");
  r190.set("difficulty", "Advanced");
  r190.set("explanation", "Advanced level question for Full Stack Engineer. What is CSS-in-JS?");
  try { app.save(r190); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r191 = new Record(collection);
  r191.set("careerSlug", "full-stack-engineer");
  r191.set("questionNumber", 92);
  r191.set("question", "What is styled-components?");
  r191.set("category", "Technical");
  r191.set("difficulty", "Advanced");
  r191.set("explanation", "Advanced level question for Full Stack Engineer. What is styled-components?");
  try { app.save(r191); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r192 = new Record(collection);
  r192.set("careerSlug", "full-stack-engineer");
  r192.set("questionNumber", 93);
  r192.set("question", "What is Shadcn UI?");
  r192.set("category", "Behavioral");
  r192.set("difficulty", "Advanced");
  r192.set("explanation", "Advanced level question for Full Stack Engineer. What is Shadcn UI?");
  try { app.save(r192); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r193 = new Record(collection);
  r193.set("careerSlug", "full-stack-engineer");
  r193.set("questionNumber", 94);
  r193.set("question", "What is design system?");
  r193.set("category", "Technical");
  r193.set("difficulty", "Advanced");
  r193.set("explanation", "Advanced level question for Full Stack Engineer. What is design system?");
  try { app.save(r193); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r194 = new Record(collection);
  r194.set("careerSlug", "full-stack-engineer");
  r194.set("questionNumber", 95);
  r194.set("question", "What is Storybook?");
  r194.set("category", "Technical");
  r194.set("difficulty", "Advanced");
  r194.set("explanation", "Advanced level question for Full Stack Engineer. What is Storybook?");
  try { app.save(r194); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r195 = new Record(collection);
  r195.set("careerSlug", "full-stack-engineer");
  r195.set("questionNumber", 96);
  r195.set("question", "What is i18n (internationalization)?");
  r195.set("category", "System Design");
  r195.set("difficulty", "Advanced");
  r195.set("explanation", "Advanced level question for Full Stack Engineer. What is i18n (internationalization)?");
  try { app.save(r195); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r196 = new Record(collection);
  r196.set("careerSlug", "full-stack-engineer");
  r196.set("questionNumber", 97);
  r196.set("question", "What is web security (XSS, CSRF, SQL injection)?");
  r196.set("category", "Technical");
  r196.set("difficulty", "Advanced");
  r196.set("explanation", "Advanced level question for Full Stack Engineer. What is web security (XSS, CSRF, SQL injection)?");
  try { app.save(r196); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r197 = new Record(collection);
  r197.set("careerSlug", "full-stack-engineer");
  r197.set("questionNumber", 98);
  r197.set("question", "What is HTTPS?");
  r197.set("category", "Technical");
  r197.set("difficulty", "Advanced");
  r197.set("explanation", "Advanced level question for Full Stack Engineer. What is HTTPS?");
  try { app.save(r197); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r198 = new Record(collection);
  r198.set("careerSlug", "full-stack-engineer");
  r198.set("questionNumber", 99);
  r198.set("question", "What is Content Security Policy?");
  r198.set("category", "Behavioral");
  r198.set("difficulty", "Advanced");
  r198.set("explanation", "Advanced level question for Full Stack Engineer. What is Content Security Policy?");
  try { app.save(r198); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r199 = new Record(collection);
  r199.set("careerSlug", "full-stack-engineer");
  r199.set("questionNumber", 100);
  r199.set("question", "What is OWASP Top 10 for web?");
  r199.set("category", "Technical");
  r199.set("difficulty", "Advanced");
  r199.set("explanation", "Advanced level question for Full Stack Engineer. What is OWASP Top 10 for web?");
  try { app.save(r199); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r200 = new Record(collection);
  r200.set("careerSlug", "blockchain-web3-engineer");
  r200.set("questionNumber", 1);
  r200.set("question", "What is blockchain?");
  r200.set("category", "Technical");
  r200.set("difficulty", "Beginner");
  r200.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is blockchain?");
  try { app.save(r200); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r201 = new Record(collection);
  r201.set("careerSlug", "blockchain-web3-engineer");
  r201.set("questionNumber", 2);
  r201.set("question", "What is a consensus mechanism?");
  r201.set("category", "Technical");
  r201.set("difficulty", "Beginner");
  r201.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a consensus mechanism?");
  try { app.save(r201); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r202 = new Record(collection);
  r202.set("careerSlug", "blockchain-web3-engineer");
  r202.set("questionNumber", 3);
  r202.set("question", "What is Proof of Work vs Proof of Stake?");
  r202.set("category", "Behavioral");
  r202.set("difficulty", "Beginner");
  r202.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Proof of Work vs Proof of Stake?");
  try { app.save(r202); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r203 = new Record(collection);
  r203.set("careerSlug", "blockchain-web3-engineer");
  r203.set("questionNumber", 4);
  r203.set("question", "What is Ethereum?");
  r203.set("category", "Technical");
  r203.set("difficulty", "Beginner");
  r203.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Ethereum?");
  try { app.save(r203); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r204 = new Record(collection);
  r204.set("careerSlug", "blockchain-web3-engineer");
  r204.set("questionNumber", 5);
  r204.set("question", "What is a smart contract?");
  r204.set("category", "Technical");
  r204.set("difficulty", "Beginner");
  r204.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a smart contract?");
  try { app.save(r204); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r205 = new Record(collection);
  r205.set("careerSlug", "blockchain-web3-engineer");
  r205.set("questionNumber", 6);
  r205.set("question", "What is Solidity?");
  r205.set("category", "System Design");
  r205.set("difficulty", "Beginner");
  r205.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Solidity?");
  try { app.save(r205); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r206 = new Record(collection);
  r206.set("careerSlug", "blockchain-web3-engineer");
  r206.set("questionNumber", 7);
  r206.set("question", "What is EVM?");
  r206.set("category", "Technical");
  r206.set("difficulty", "Beginner");
  r206.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is EVM?");
  try { app.save(r206); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r207 = new Record(collection);
  r207.set("careerSlug", "blockchain-web3-engineer");
  r207.set("questionNumber", 8);
  r207.set("question", "What is gas in Ethereum?");
  r207.set("category", "Technical");
  r207.set("difficulty", "Beginner");
  r207.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is gas in Ethereum?");
  try { app.save(r207); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r208 = new Record(collection);
  r208.set("careerSlug", "blockchain-web3-engineer");
  r208.set("questionNumber", 9);
  r208.set("question", "What is a wallet?");
  r208.set("category", "Behavioral");
  r208.set("difficulty", "Beginner");
  r208.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a wallet?");
  try { app.save(r208); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r209 = new Record(collection);
  r209.set("careerSlug", "blockchain-web3-engineer");
  r209.set("questionNumber", 10);
  r209.set("question", "What is a private key vs public key?");
  r209.set("category", "Technical");
  r209.set("difficulty", "Beginner");
  r209.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a private key vs public key?");
  try { app.save(r209); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r210 = new Record(collection);
  r210.set("careerSlug", "blockchain-web3-engineer");
  r210.set("questionNumber", 11);
  r210.set("question", "What is a seed phrase?");
  r210.set("category", "Technical");
  r210.set("difficulty", "Beginner");
  r210.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a seed phrase?");
  try { app.save(r210); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r211 = new Record(collection);
  r211.set("careerSlug", "blockchain-web3-engineer");
  r211.set("questionNumber", 12);
  r211.set("question", "What is MetaMask?");
  r211.set("category", "System Design");
  r211.set("difficulty", "Beginner");
  r211.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is MetaMask?");
  try { app.save(r211); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r212 = new Record(collection);
  r212.set("careerSlug", "blockchain-web3-engineer");
  r212.set("questionNumber", 13);
  r212.set("question", "What is a transaction in Ethereum?");
  r212.set("category", "Technical");
  r212.set("difficulty", "Beginner");
  r212.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a transaction in Ethereum?");
  try { app.save(r212); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r213 = new Record(collection);
  r213.set("careerSlug", "blockchain-web3-engineer");
  r213.set("questionNumber", 14);
  r213.set("question", "What is a block?");
  r213.set("category", "Technical");
  r213.set("difficulty", "Beginner");
  r213.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a block?");
  try { app.save(r213); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r214 = new Record(collection);
  r214.set("careerSlug", "blockchain-web3-engineer");
  r214.set("questionNumber", 15);
  r214.set("question", "What is a hash?");
  r214.set("category", "Behavioral");
  r214.set("difficulty", "Beginner");
  r214.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a hash?");
  try { app.save(r214); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r215 = new Record(collection);
  r215.set("careerSlug", "blockchain-web3-engineer");
  r215.set("questionNumber", 16);
  r215.set("question", "What is SHA-256?");
  r215.set("category", "Technical");
  r215.set("difficulty", "Beginner");
  r215.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is SHA-256?");
  try { app.save(r215); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r216 = new Record(collection);
  r216.set("careerSlug", "blockchain-web3-engineer");
  r216.set("questionNumber", 17);
  r216.set("question", "What is Merkle tree?");
  r216.set("category", "Technical");
  r216.set("difficulty", "Beginner");
  r216.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Merkle tree?");
  try { app.save(r216); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r217 = new Record(collection);
  r217.set("careerSlug", "blockchain-web3-engineer");
  r217.set("questionNumber", 18);
  r217.set("question", "What is an ERC-20 token?");
  r217.set("category", "System Design");
  r217.set("difficulty", "Beginner");
  r217.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is an ERC-20 token?");
  try { app.save(r217); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r218 = new Record(collection);
  r218.set("careerSlug", "blockchain-web3-engineer");
  r218.set("questionNumber", 19);
  r218.set("question", "What is ERC-721 (NFT)?");
  r218.set("category", "Technical");
  r218.set("difficulty", "Beginner");
  r218.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is ERC-721 (NFT)?");
  try { app.save(r218); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r219 = new Record(collection);
  r219.set("careerSlug", "blockchain-web3-engineer");
  r219.set("questionNumber", 20);
  r219.set("question", "What is ERC-1155?");
  r219.set("category", "Technical");
  r219.set("difficulty", "Beginner");
  r219.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is ERC-1155?");
  try { app.save(r219); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r220 = new Record(collection);
  r220.set("careerSlug", "blockchain-web3-engineer");
  r220.set("questionNumber", 21);
  r220.set("question", "What is OpenZeppelin?");
  r220.set("category", "Behavioral");
  r220.set("difficulty", "Beginner");
  r220.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is OpenZeppelin?");
  try { app.save(r220); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r221 = new Record(collection);
  r221.set("careerSlug", "blockchain-web3-engineer");
  r221.set("questionNumber", 22);
  r221.set("question", "What is Hardhat?");
  r221.set("category", "Technical");
  r221.set("difficulty", "Beginner");
  r221.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Hardhat?");
  try { app.save(r221); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r222 = new Record(collection);
  r222.set("careerSlug", "blockchain-web3-engineer");
  r222.set("questionNumber", 23);
  r222.set("question", "What is Foundry?");
  r222.set("category", "Technical");
  r222.set("difficulty", "Beginner");
  r222.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Foundry?");
  try { app.save(r222); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r223 = new Record(collection);
  r223.set("careerSlug", "blockchain-web3-engineer");
  r223.set("questionNumber", 24);
  r223.set("question", "What is Truffle?");
  r223.set("category", "System Design");
  r223.set("difficulty", "Beginner");
  r223.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Truffle?");
  try { app.save(r223); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r224 = new Record(collection);
  r224.set("careerSlug", "blockchain-web3-engineer");
  r224.set("questionNumber", 25);
  r224.set("question", "What is Ganache?");
  r224.set("category", "Technical");
  r224.set("difficulty", "Beginner");
  r224.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Ganache?");
  try { app.save(r224); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r225 = new Record(collection);
  r225.set("careerSlug", "blockchain-web3-engineer");
  r225.set("questionNumber", 26);
  r225.set("question", "What is Alchemy/Infura?");
  r225.set("category", "Technical");
  r225.set("difficulty", "Beginner");
  r225.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is Alchemy/Infura?");
  try { app.save(r225); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r226 = new Record(collection);
  r226.set("careerSlug", "blockchain-web3-engineer");
  r226.set("questionNumber", 27);
  r226.set("question", "What is ethers.js?");
  r226.set("category", "Behavioral");
  r226.set("difficulty", "Beginner");
  r226.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is ethers.js?");
  try { app.save(r226); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r227 = new Record(collection);
  r227.set("careerSlug", "blockchain-web3-engineer");
  r227.set("questionNumber", 28);
  r227.set("question", "What is web3.js?");
  r227.set("category", "Technical");
  r227.set("difficulty", "Beginner");
  r227.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is web3.js?");
  try { app.save(r227); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r228 = new Record(collection);
  r228.set("careerSlug", "blockchain-web3-engineer");
  r228.set("questionNumber", 29);
  r228.set("question", "What is wagmi?");
  r228.set("category", "Technical");
  r228.set("difficulty", "Beginner");
  r228.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is wagmi?");
  try { app.save(r228); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r229 = new Record(collection);
  r229.set("careerSlug", "blockchain-web3-engineer");
  r229.set("questionNumber", 30);
  r229.set("question", "What is RainbowKit?");
  r229.set("category", "System Design");
  r229.set("difficulty", "Beginner");
  r229.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is RainbowKit?");
  try { app.save(r229); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r230 = new Record(collection);
  r230.set("careerSlug", "blockchain-web3-engineer");
  r230.set("questionNumber", 31);
  r230.set("question", "What is a dApp?");
  r230.set("category", "Technical");
  r230.set("difficulty", "Beginner");
  r230.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is a dApp?");
  try { app.save(r230); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r231 = new Record(collection);
  r231.set("careerSlug", "blockchain-web3-engineer");
  r231.set("questionNumber", 32);
  r231.set("question", "What is DeFi?");
  r231.set("category", "Technical");
  r231.set("difficulty", "Beginner");
  r231.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is DeFi?");
  try { app.save(r231); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r232 = new Record(collection);
  r232.set("careerSlug", "blockchain-web3-engineer");
  r232.set("questionNumber", 33);
  r232.set("question", "What is an AMM?");
  r232.set("category", "Behavioral");
  r232.set("difficulty", "Beginner");
  r232.set("explanation", "Beginner level question for Blockchain / Web3 Engineer. What is an AMM?");
  try { app.save(r232); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r233 = new Record(collection);
  r233.set("careerSlug", "blockchain-web3-engineer");
  r233.set("questionNumber", 34);
  r233.set("question", "What is Uniswap?");
  r233.set("category", "Technical");
  r233.set("difficulty", "Intermediate");
  r233.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Uniswap?");
  try { app.save(r233); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r234 = new Record(collection);
  r234.set("careerSlug", "blockchain-web3-engineer");
  r234.set("questionNumber", 35);
  r234.set("question", "What is liquidity pool?");
  r234.set("category", "Technical");
  r234.set("difficulty", "Intermediate");
  r234.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is liquidity pool?");
  try { app.save(r234); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r235 = new Record(collection);
  r235.set("careerSlug", "blockchain-web3-engineer");
  r235.set("questionNumber", 36);
  r235.set("question", "What is impermanent loss?");
  r235.set("category", "System Design");
  r235.set("difficulty", "Intermediate");
  r235.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is impermanent loss?");
  try { app.save(r235); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r236 = new Record(collection);
  r236.set("careerSlug", "blockchain-web3-engineer");
  r236.set("questionNumber", 37);
  r236.set("question", "What is yield farming?");
  r236.set("category", "Technical");
  r236.set("difficulty", "Intermediate");
  r236.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is yield farming?");
  try { app.save(r236); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r237 = new Record(collection);
  r237.set("careerSlug", "blockchain-web3-engineer");
  r237.set("questionNumber", 38);
  r237.set("question", "What is staking?");
  r237.set("category", "Technical");
  r237.set("difficulty", "Intermediate");
  r237.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is staking?");
  try { app.save(r237); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r238 = new Record(collection);
  r238.set("careerSlug", "blockchain-web3-engineer");
  r238.set("questionNumber", 39);
  r238.set("question", "What is a DAO?");
  r238.set("category", "Behavioral");
  r238.set("difficulty", "Intermediate");
  r238.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is a DAO?");
  try { app.save(r238); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r239 = new Record(collection);
  r239.set("careerSlug", "blockchain-web3-engineer");
  r239.set("questionNumber", 40);
  r239.set("question", "What is governance token?");
  r239.set("category", "Technical");
  r239.set("difficulty", "Intermediate");
  r239.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is governance token?");
  try { app.save(r239); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r240 = new Record(collection);
  r240.set("careerSlug", "blockchain-web3-engineer");
  r240.set("questionNumber", 41);
  r240.set("question", "What is an oracle?");
  r240.set("category", "Technical");
  r240.set("difficulty", "Intermediate");
  r240.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is an oracle?");
  try { app.save(r240); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r241 = new Record(collection);
  r241.set("careerSlug", "blockchain-web3-engineer");
  r241.set("questionNumber", 42);
  r241.set("question", "What is Chainlink?");
  r241.set("category", "System Design");
  r241.set("difficulty", "Intermediate");
  r241.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Chainlink?");
  try { app.save(r241); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r242 = new Record(collection);
  r242.set("careerSlug", "blockchain-web3-engineer");
  r242.set("questionNumber", 43);
  r242.set("question", "What is flash loan?");
  r242.set("category", "Technical");
  r242.set("difficulty", "Intermediate");
  r242.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is flash loan?");
  try { app.save(r242); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r243 = new Record(collection);
  r243.set("careerSlug", "blockchain-web3-engineer");
  r243.set("questionNumber", 44);
  r243.set("question", "What is reentrancy attack?");
  r243.set("category", "Technical");
  r243.set("difficulty", "Intermediate");
  r243.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is reentrancy attack?");
  try { app.save(r243); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r244 = new Record(collection);
  r244.set("careerSlug", "blockchain-web3-engineer");
  r244.set("questionNumber", 45);
  r244.set("question", "How do you prevent reentrancy?");
  r244.set("category", "Behavioral");
  r244.set("difficulty", "Intermediate");
  r244.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. How do you prevent reentrancy?");
  try { app.save(r244); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r245 = new Record(collection);
  r245.set("careerSlug", "blockchain-web3-engineer");
  r245.set("questionNumber", 46);
  r245.set("question", "What is front-running?");
  r245.set("category", "Technical");
  r245.set("difficulty", "Intermediate");
  r245.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is front-running?");
  try { app.save(r245); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r246 = new Record(collection);
  r246.set("careerSlug", "blockchain-web3-engineer");
  r246.set("questionNumber", 47);
  r246.set("question", "What is MEV (Miner Extractable Value)?");
  r246.set("category", "Technical");
  r246.set("difficulty", "Intermediate");
  r246.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is MEV (Miner Extractable Value)?");
  try { app.save(r246); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r247 = new Record(collection);
  r247.set("careerSlug", "blockchain-web3-engineer");
  r247.set("questionNumber", 48);
  r247.set("question", "What is Layer 2?");
  r247.set("category", "System Design");
  r247.set("difficulty", "Intermediate");
  r247.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Layer 2?");
  try { app.save(r247); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r248 = new Record(collection);
  r248.set("careerSlug", "blockchain-web3-engineer");
  r248.set("questionNumber", 49);
  r248.set("question", "What is Optimistic Rollup?");
  r248.set("category", "Technical");
  r248.set("difficulty", "Intermediate");
  r248.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Optimistic Rollup?");
  try { app.save(r248); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r249 = new Record(collection);
  r249.set("careerSlug", "blockchain-web3-engineer");
  r249.set("questionNumber", 50);
  r249.set("question", "What is ZK Rollup?");
  r249.set("category", "Technical");
  r249.set("difficulty", "Intermediate");
  r249.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is ZK Rollup?");
  try { app.save(r249); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r250 = new Record(collection);
  r250.set("careerSlug", "blockchain-web3-engineer");
  r250.set("questionNumber", 51);
  r250.set("question", "What is Polygon?");
  r250.set("category", "Behavioral");
  r250.set("difficulty", "Intermediate");
  r250.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Polygon?");
  try { app.save(r250); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r251 = new Record(collection);
  r251.set("careerSlug", "blockchain-web3-engineer");
  r251.set("questionNumber", 52);
  r251.set("question", "What is Arbitrum?");
  r251.set("category", "Technical");
  r251.set("difficulty", "Intermediate");
  r251.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Arbitrum?");
  try { app.save(r251); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r252 = new Record(collection);
  r252.set("careerSlug", "blockchain-web3-engineer");
  r252.set("questionNumber", 53);
  r252.set("question", "What is Optimism?");
  r252.set("category", "Technical");
  r252.set("difficulty", "Intermediate");
  r252.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Optimism?");
  try { app.save(r252); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r253 = new Record(collection);
  r253.set("careerSlug", "blockchain-web3-engineer");
  r253.set("questionNumber", 54);
  r253.set("question", "What is a bridge?");
  r253.set("category", "System Design");
  r253.set("difficulty", "Intermediate");
  r253.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is a bridge?");
  try { app.save(r253); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r254 = new Record(collection);
  r254.set("careerSlug", "blockchain-web3-engineer");
  r254.set("questionNumber", 55);
  r254.set("question", "What is IPFS?");
  r254.set("category", "Technical");
  r254.set("difficulty", "Intermediate");
  r254.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is IPFS?");
  try { app.save(r254); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r255 = new Record(collection);
  r255.set("careerSlug", "blockchain-web3-engineer");
  r255.set("questionNumber", 56);
  r255.set("question", "What is Filecoin?");
  r255.set("category", "Technical");
  r255.set("difficulty", "Intermediate");
  r255.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Filecoin?");
  try { app.save(r255); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r256 = new Record(collection);
  r256.set("careerSlug", "blockchain-web3-engineer");
  r256.set("questionNumber", 57);
  r256.set("question", "What is a smart contract audit?");
  r256.set("category", "Behavioral");
  r256.set("difficulty", "Intermediate");
  r256.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is a smart contract audit?");
  try { app.save(r256); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r257 = new Record(collection);
  r257.set("careerSlug", "blockchain-web3-engineer");
  r257.set("questionNumber", 58);
  r257.set("question", "What is Slither?");
  r257.set("category", "Technical");
  r257.set("difficulty", "Intermediate");
  r257.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Slither?");
  try { app.save(r257); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r258 = new Record(collection);
  r258.set("careerSlug", "blockchain-web3-engineer");
  r258.set("questionNumber", 59);
  r258.set("question", "What is Mythril?");
  r258.set("category", "Technical");
  r258.set("difficulty", "Intermediate");
  r258.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is Mythril?");
  try { app.save(r258); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r259 = new Record(collection);
  r259.set("careerSlug", "blockchain-web3-engineer");
  r259.set("questionNumber", 60);
  r259.set("question", "What are common smart contract vulnerabilities?");
  r259.set("category", "System Design");
  r259.set("difficulty", "Intermediate");
  r259.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What are common smart contract vulnerabilities?");
  try { app.save(r259); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r260 = new Record(collection);
  r260.set("careerSlug", "blockchain-web3-engineer");
  r260.set("questionNumber", 61);
  r260.set("question", "What is integer overflow/underflow in Solidity?");
  r260.set("category", "Technical");
  r260.set("difficulty", "Intermediate");
  r260.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is integer overflow/underflow in Solidity?");
  try { app.save(r260); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r261 = new Record(collection);
  r261.set("careerSlug", "blockchain-web3-engineer");
  r261.set("questionNumber", 62);
  r261.set("question", "What is access control in smart contracts?");
  r261.set("category", "Technical");
  r261.set("difficulty", "Intermediate");
  r261.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is access control in smart contracts?");
  try { app.save(r261); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r262 = new Record(collection);
  r262.set("careerSlug", "blockchain-web3-engineer");
  r262.set("questionNumber", 63);
  r262.set("question", "What is proxy pattern in smart contracts?");
  r262.set("category", "Behavioral");
  r262.set("difficulty", "Intermediate");
  r262.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is proxy pattern in smart contracts?");
  try { app.save(r262); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r263 = new Record(collection);
  r263.set("careerSlug", "blockchain-web3-engineer");
  r263.set("questionNumber", 64);
  r263.set("question", "What is upgradeable smart contract?");
  r263.set("category", "Technical");
  r263.set("difficulty", "Intermediate");
  r263.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is upgradeable smart contract?");
  try { app.save(r263); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r264 = new Record(collection);
  r264.set("careerSlug", "blockchain-web3-engineer");
  r264.set("questionNumber", 65);
  r264.set("question", "What is the diamond pattern?");
  r264.set("category", "Technical");
  r264.set("difficulty", "Intermediate");
  r264.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is the diamond pattern?");
  try { app.save(r264); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r265 = new Record(collection);
  r265.set("careerSlug", "blockchain-web3-engineer");
  r265.set("questionNumber", 66);
  r265.set("question", "What is ABI?");
  r265.set("category", "System Design");
  r265.set("difficulty", "Intermediate");
  r265.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is ABI?");
  try { app.save(r265); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r266 = new Record(collection);
  r266.set("careerSlug", "blockchain-web3-engineer");
  r266.set("questionNumber", 67);
  r266.set("question", "What is bytecode?");
  r266.set("category", "Technical");
  r266.set("difficulty", "Intermediate");
  r266.set("explanation", "Intermediate level question for Blockchain / Web3 Engineer. What is bytecode?");
  try { app.save(r266); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r267 = new Record(collection);
  r267.set("careerSlug", "blockchain-web3-engineer");
  r267.set("questionNumber", 68);
  r267.set("question", "What is the difference between memory and storage in Solidity?");
  r267.set("category", "Technical");
  r267.set("difficulty", "Advanced");
  r267.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is the difference between memory and storage in Solidity?");
  try { app.save(r267); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r268 = new Record(collection);
  r268.set("careerSlug", "blockchain-web3-engineer");
  r268.set("questionNumber", 69);
  r268.set("question", "What is calldata?");
  r268.set("category", "Behavioral");
  r268.set("difficulty", "Advanced");
  r268.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is calldata?");
  try { app.save(r268); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r269 = new Record(collection);
  r269.set("careerSlug", "blockchain-web3-engineer");
  r269.set("questionNumber", 70);
  r269.set("question", "What is event and emit in Solidity?");
  r269.set("category", "Technical");
  r269.set("difficulty", "Advanced");
  r269.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is event and emit in Solidity?");
  try { app.save(r269); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r270 = new Record(collection);
  r270.set("careerSlug", "blockchain-web3-engineer");
  r270.set("questionNumber", 71);
  r270.set("question", "What is a modifier in Solidity?");
  r270.set("category", "Technical");
  r270.set("difficulty", "Advanced");
  r270.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is a modifier in Solidity?");
  try { app.save(r270); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r271 = new Record(collection);
  r271.set("careerSlug", "blockchain-web3-engineer");
  r271.set("questionNumber", 72);
  r271.set("question", "What is mapping in Solidity?");
  r271.set("category", "System Design");
  r271.set("difficulty", "Advanced");
  r271.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is mapping in Solidity?");
  try { app.save(r271); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r272 = new Record(collection);
  r272.set("careerSlug", "blockchain-web3-engineer");
  r272.set("questionNumber", 73);
  r272.set("question", "What is struct in Solidity?");
  r272.set("category", "Technical");
  r272.set("difficulty", "Advanced");
  r272.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is struct in Solidity?");
  try { app.save(r272); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r273 = new Record(collection);
  r273.set("careerSlug", "blockchain-web3-engineer");
  r273.set("questionNumber", 74);
  r273.set("question", "What is payable in Solidity?");
  r273.set("category", "Technical");
  r273.set("difficulty", "Advanced");
  r273.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is payable in Solidity?");
  try { app.save(r273); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r274 = new Record(collection);
  r274.set("careerSlug", "blockchain-web3-engineer");
  r274.set("questionNumber", 75);
  r274.set("question", "What is fallback function?");
  r274.set("category", "Behavioral");
  r274.set("difficulty", "Advanced");
  r274.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is fallback function?");
  try { app.save(r274); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r275 = new Record(collection);
  r275.set("careerSlug", "blockchain-web3-engineer");
  r275.set("questionNumber", 76);
  r275.set("question", "What is receive function?");
  r275.set("category", "Technical");
  r275.set("difficulty", "Advanced");
  r275.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is receive function?");
  try { app.save(r275); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r276 = new Record(collection);
  r276.set("careerSlug", "blockchain-web3-engineer");
  r276.set("questionNumber", 77);
  r276.set("question", "What is self-destruct?");
  r276.set("category", "Technical");
  r276.set("difficulty", "Advanced");
  r276.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is self-destruct?");
  try { app.save(r276); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r277 = new Record(collection);
  r277.set("careerSlug", "blockchain-web3-engineer");
  r277.set("questionNumber", 78);
  r277.set("question", "What is CREATE2?");
  r277.set("category", "System Design");
  r277.set("difficulty", "Advanced");
  r277.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is CREATE2?");
  try { app.save(r277); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r278 = new Record(collection);
  r278.set("careerSlug", "blockchain-web3-engineer");
  r278.set("questionNumber", 79);
  r278.set("question", "What is deterministic deployment?");
  r278.set("category", "Technical");
  r278.set("difficulty", "Advanced");
  r278.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is deterministic deployment?");
  try { app.save(r278); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r279 = new Record(collection);
  r279.set("careerSlug", "blockchain-web3-engineer");
  r279.set("questionNumber", 80);
  r279.set("question", "What is multi-sig wallet?");
  r279.set("category", "Technical");
  r279.set("difficulty", "Advanced");
  r279.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is multi-sig wallet?");
  try { app.save(r279); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r280 = new Record(collection);
  r280.set("careerSlug", "blockchain-web3-engineer");
  r280.set("questionNumber", 81);
  r280.set("question", "What is Gnosis Safe?");
  r280.set("category", "Behavioral");
  r280.set("difficulty", "Advanced");
  r280.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is Gnosis Safe?");
  try { app.save(r280); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r281 = new Record(collection);
  r281.set("careerSlug", "blockchain-web3-engineer");
  r281.set("questionNumber", 82);
  r281.set("question", "What is a vesting contract?");
  r281.set("category", "Technical");
  r281.set("difficulty", "Advanced");
  r281.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is a vesting contract?");
  try { app.save(r281); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r282 = new Record(collection);
  r282.set("careerSlug", "blockchain-web3-engineer");
  r282.set("questionNumber", 83);
  r282.set("question", "What is stablecoin?");
  r282.set("category", "Technical");
  r282.set("difficulty", "Advanced");
  r282.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is stablecoin?");
  try { app.save(r282); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r283 = new Record(collection);
  r283.set("careerSlug", "blockchain-web3-engineer");
  r283.set("questionNumber", 84);
  r283.set("question", "What is algorithmic stablecoin?");
  r283.set("category", "System Design");
  r283.set("difficulty", "Advanced");
  r283.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is algorithmic stablecoin?");
  try { app.save(r283); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r284 = new Record(collection);
  r284.set("careerSlug", "blockchain-web3-engineer");
  r284.set("questionNumber", 85);
  r284.set("question", "What is CDP (Collateralized Debt Position)?");
  r284.set("category", "Technical");
  r284.set("difficulty", "Advanced");
  r284.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is CDP (Collateralized Debt Position)?");
  try { app.save(r284); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r285 = new Record(collection);
  r285.set("careerSlug", "blockchain-web3-engineer");
  r285.set("questionNumber", 86);
  r285.set("question", "What is MakerDAO?");
  r285.set("category", "Technical");
  r285.set("difficulty", "Advanced");
  r285.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is MakerDAO?");
  try { app.save(r285); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r286 = new Record(collection);
  r286.set("careerSlug", "blockchain-web3-engineer");
  r286.set("questionNumber", 87);
  r286.set("question", "What is Aave?");
  r286.set("category", "Behavioral");
  r286.set("difficulty", "Advanced");
  r286.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is Aave?");
  try { app.save(r286); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r287 = new Record(collection);
  r287.set("careerSlug", "blockchain-web3-engineer");
  r287.set("questionNumber", 88);
  r287.set("question", "What is Compound?");
  r287.set("category", "Technical");
  r287.set("difficulty", "Advanced");
  r287.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is Compound?");
  try { app.save(r287); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r288 = new Record(collection);
  r288.set("careerSlug", "blockchain-web3-engineer");
  r288.set("questionNumber", 89);
  r288.set("question", "What is Curve Finance?");
  r288.set("category", "Technical");
  r288.set("difficulty", "Advanced");
  r288.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is Curve Finance?");
  try { app.save(r288); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r289 = new Record(collection);
  r289.set("careerSlug", "blockchain-web3-engineer");
  r289.set("questionNumber", 90);
  r289.set("question", "What is token economics?");
  r289.set("category", "System Design");
  r289.set("difficulty", "Advanced");
  r289.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is token economics?");
  try { app.save(r289); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r290 = new Record(collection);
  r290.set("careerSlug", "blockchain-web3-engineer");
  r290.set("questionNumber", 91);
  r290.set("question", "What is tokenomics?");
  r290.set("category", "Technical");
  r290.set("difficulty", "Advanced");
  r290.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is tokenomics?");
  try { app.save(r290); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r291 = new Record(collection);
  r291.set("careerSlug", "blockchain-web3-engineer");
  r291.set("questionNumber", 92);
  r291.set("question", "What is an airdrop?");
  r291.set("category", "Technical");
  r291.set("difficulty", "Advanced");
  r291.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is an airdrop?");
  try { app.save(r291); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r292 = new Record(collection);
  r292.set("careerSlug", "blockchain-web3-engineer");
  r292.set("questionNumber", 93);
  r292.set("question", "What is a whitelist?");
  r292.set("category", "Behavioral");
  r292.set("difficulty", "Advanced");
  r292.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is a whitelist?");
  try { app.save(r292); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r293 = new Record(collection);
  r293.set("careerSlug", "blockchain-web3-engineer");
  r293.set("questionNumber", 94);
  r293.set("question", "What is KYC/AML in Web3?");
  r293.set("category", "Technical");
  r293.set("difficulty", "Advanced");
  r293.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is KYC/AML in Web3?");
  try { app.save(r293); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r294 = new Record(collection);
  r294.set("careerSlug", "blockchain-web3-engineer");
  r294.set("questionNumber", 95);
  r294.set("question", "What is soulbound token?");
  r294.set("category", "Technical");
  r294.set("difficulty", "Advanced");
  r294.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is soulbound token?");
  try { app.save(r294); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r295 = new Record(collection);
  r295.set("careerSlug", "blockchain-web3-engineer");
  r295.set("questionNumber", 96);
  r295.set("question", "What is EIP?");
  r295.set("category", "System Design");
  r295.set("difficulty", "Advanced");
  r295.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is EIP?");
  try { app.save(r295); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r296 = new Record(collection);
  r296.set("careerSlug", "blockchain-web3-engineer");
  r296.set("questionNumber", 97);
  r296.set("question", "What is EIP-1559?");
  r296.set("category", "Technical");
  r296.set("difficulty", "Advanced");
  r296.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is EIP-1559?");
  try { app.save(r296); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r297 = new Record(collection);
  r297.set("careerSlug", "blockchain-web3-engineer");
  r297.set("questionNumber", 98);
  r297.set("question", "What is EIP-4337 (Account Abstraction)?");
  r297.set("category", "Technical");
  r297.set("difficulty", "Advanced");
  r297.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is EIP-4337 (Account Abstraction)?");
  try { app.save(r297); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r298 = new Record(collection);
  r298.set("careerSlug", "blockchain-web3-engineer");
  r298.set("questionNumber", 99);
  r298.set("question", "What is The Graph protocol?");
  r298.set("category", "Behavioral");
  r298.set("difficulty", "Advanced");
  r298.set("explanation", "Advanced level question for Blockchain / Web3 Engineer. What is The Graph protocol?");
  try { app.save(r298); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r299 = new Record(collection);
  r299.set("careerSlug", "site-reliability-engineer-sre");
  r299.set("questionNumber", 1);
  r299.set("question", "What is SRE and how does it differ from DevOps?");
  r299.set("category", "Technical");
  r299.set("difficulty", "Beginner");
  r299.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is SRE and how does it differ from DevOps?");
  try { app.save(r299); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r300 = new Record(collection);
  r300.set("careerSlug", "site-reliability-engineer-sre");
  r300.set("questionNumber", 2);
  r300.set("question", "What is an SLI?");
  r300.set("category", "Technical");
  r300.set("difficulty", "Beginner");
  r300.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is an SLI?");
  try { app.save(r300); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r301 = new Record(collection);
  r301.set("careerSlug", "site-reliability-engineer-sre");
  r301.set("questionNumber", 3);
  r301.set("question", "What is an SLO?");
  r301.set("category", "Behavioral");
  r301.set("difficulty", "Beginner");
  r301.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is an SLO?");
  try { app.save(r301); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r302 = new Record(collection);
  r302.set("careerSlug", "site-reliability-engineer-sre");
  r302.set("questionNumber", 4);
  r302.set("question", "What is an SLA?");
  r302.set("category", "Technical");
  r302.set("difficulty", "Beginner");
  r302.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is an SLA?");
  try { app.save(r302); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r303 = new Record(collection);
  r303.set("careerSlug", "site-reliability-engineer-sre");
  r303.set("questionNumber", 5);
  r303.set("question", "What is error budget?");
  r303.set("category", "Technical");
  r303.set("difficulty", "Beginner");
  r303.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is error budget?");
  try { app.save(r303); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r304 = new Record(collection);
  r304.set("careerSlug", "site-reliability-engineer-sre");
  r304.set("questionNumber", 6);
  r304.set("question", "What is toil?");
  r304.set("category", "System Design");
  r304.set("difficulty", "Beginner");
  r304.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is toil?");
  try { app.save(r304); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r305 = new Record(collection);
  r305.set("careerSlug", "site-reliability-engineer-sre");
  r305.set("questionNumber", 7);
  r305.set("question", "What is the 50% toil rule?");
  r305.set("category", "Technical");
  r305.set("difficulty", "Beginner");
  r305.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is the 50% toil rule?");
  try { app.save(r305); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r306 = new Record(collection);
  r306.set("careerSlug", "site-reliability-engineer-sre");
  r306.set("questionNumber", 8);
  r306.set("question", "What is reliability?");
  r306.set("category", "Technical");
  r306.set("difficulty", "Beginner");
  r306.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is reliability?");
  try { app.save(r306); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r307 = new Record(collection);
  r307.set("careerSlug", "site-reliability-engineer-sre");
  r307.set("questionNumber", 9);
  r307.set("question", "What is availability?");
  r307.set("category", "Behavioral");
  r307.set("difficulty", "Beginner");
  r307.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is availability?");
  try { app.save(r307); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r308 = new Record(collection);
  r308.set("careerSlug", "site-reliability-engineer-sre");
  r308.set("questionNumber", 10);
  r308.set("question", "What is the difference between availability and reliability?");
  r308.set("category", "Technical");
  r308.set("difficulty", "Beginner");
  r308.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is the difference between availability and reliability?");
  try { app.save(r308); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r309 = new Record(collection);
  r309.set("careerSlug", "site-reliability-engineer-sre");
  r309.set("questionNumber", 11);
  r309.set("question", "What is MTTR?");
  r309.set("category", "Technical");
  r309.set("difficulty", "Beginner");
  r309.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is MTTR?");
  try { app.save(r309); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r310 = new Record(collection);
  r310.set("careerSlug", "site-reliability-engineer-sre");
  r310.set("questionNumber", 12);
  r310.set("question", "What is MTBF?");
  r310.set("category", "System Design");
  r310.set("difficulty", "Beginner");
  r310.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is MTBF?");
  try { app.save(r310); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r311 = new Record(collection);
  r311.set("careerSlug", "site-reliability-engineer-sre");
  r311.set("questionNumber", 13);
  r311.set("question", "What is MTTD?");
  r311.set("category", "Technical");
  r311.set("difficulty", "Beginner");
  r311.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is MTTD?");
  try { app.save(r311); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r312 = new Record(collection);
  r312.set("careerSlug", "site-reliability-engineer-sre");
  r312.set("questionNumber", 14);
  r312.set("question", "What is incident management?");
  r312.set("category", "Technical");
  r312.set("difficulty", "Beginner");
  r312.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is incident management?");
  try { app.save(r312); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r313 = new Record(collection);
  r313.set("careerSlug", "site-reliability-engineer-sre");
  r313.set("questionNumber", 15);
  r313.set("question", "What are the phases of incident response?");
  r313.set("category", "Behavioral");
  r313.set("difficulty", "Beginner");
  r313.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What are the phases of incident response?");
  try { app.save(r313); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r314 = new Record(collection);
  r314.set("careerSlug", "site-reliability-engineer-sre");
  r314.set("questionNumber", 16);
  r314.set("question", "What is a severity level?");
  r314.set("category", "Technical");
  r314.set("difficulty", "Beginner");
  r314.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is a severity level?");
  try { app.save(r314); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r315 = new Record(collection);
  r315.set("careerSlug", "site-reliability-engineer-sre");
  r315.set("questionNumber", 17);
  r315.set("question", "What is a postmortem?");
  r315.set("category", "Technical");
  r315.set("difficulty", "Beginner");
  r315.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is a postmortem?");
  try { app.save(r315); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r316 = new Record(collection);
  r316.set("careerSlug", "site-reliability-engineer-sre");
  r316.set("questionNumber", 18);
  r316.set("question", "What is blameless culture?");
  r316.set("category", "System Design");
  r316.set("difficulty", "Beginner");
  r316.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is blameless culture?");
  try { app.save(r316); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r317 = new Record(collection);
  r317.set("careerSlug", "site-reliability-engineer-sre");
  r317.set("questionNumber", 19);
  r317.set("question", "What is a runbook?");
  r317.set("category", "Technical");
  r317.set("difficulty", "Beginner");
  r317.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is a runbook?");
  try { app.save(r317); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r318 = new Record(collection);
  r318.set("careerSlug", "site-reliability-engineer-sre");
  r318.set("questionNumber", 20);
  r318.set("question", "What is on-call?");
  r318.set("category", "Technical");
  r318.set("difficulty", "Beginner");
  r318.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is on-call?");
  try { app.save(r318); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r319 = new Record(collection);
  r319.set("careerSlug", "site-reliability-engineer-sre");
  r319.set("questionNumber", 21);
  r319.set("question", "What is paging vs alerting?");
  r319.set("category", "Behavioral");
  r319.set("difficulty", "Beginner");
  r319.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is paging vs alerting?");
  try { app.save(r319); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r320 = new Record(collection);
  r320.set("careerSlug", "site-reliability-engineer-sre");
  r320.set("questionNumber", 22);
  r320.set("question", "What is alert fatigue?");
  r320.set("category", "Technical");
  r320.set("difficulty", "Beginner");
  r320.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is alert fatigue?");
  try { app.save(r320); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r321 = new Record(collection);
  r321.set("careerSlug", "site-reliability-engineer-sre");
  r321.set("questionNumber", 23);
  r321.set("question", "What is actionable alert?");
  r321.set("category", "Technical");
  r321.set("difficulty", "Beginner");
  r321.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is actionable alert?");
  try { app.save(r321); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r322 = new Record(collection);
  r322.set("careerSlug", "site-reliability-engineer-sre");
  r322.set("questionNumber", 24);
  r322.set("question", "What is Prometheus?");
  r322.set("category", "System Design");
  r322.set("difficulty", "Beginner");
  r322.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is Prometheus?");
  try { app.save(r322); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r323 = new Record(collection);
  r323.set("careerSlug", "site-reliability-engineer-sre");
  r323.set("questionNumber", 25);
  r323.set("question", "What is a metric?");
  r323.set("category", "Technical");
  r323.set("difficulty", "Beginner");
  r323.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is a metric?");
  try { app.save(r323); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r324 = new Record(collection);
  r324.set("careerSlug", "site-reliability-engineer-sre");
  r324.set("questionNumber", 26);
  r324.set("question", "What are the 4 types of metrics (Gauges, Counters, Histograms, Summaries)?");
  r324.set("category", "Technical");
  r324.set("difficulty", "Beginner");
  r324.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What are the 4 types of metrics (Gauges, Counters, Histograms, Summaries)?");
  try { app.save(r324); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r325 = new Record(collection);
  r325.set("careerSlug", "site-reliability-engineer-sre");
  r325.set("questionNumber", 27);
  r325.set("question", "What is a PromQL query?");
  r325.set("category", "Behavioral");
  r325.set("difficulty", "Beginner");
  r325.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is a PromQL query?");
  try { app.save(r325); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r326 = new Record(collection);
  r326.set("careerSlug", "site-reliability-engineer-sre");
  r326.set("questionNumber", 28);
  r326.set("question", "What is Grafana?");
  r326.set("category", "Technical");
  r326.set("difficulty", "Beginner");
  r326.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is Grafana?");
  try { app.save(r326); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r327 = new Record(collection);
  r327.set("careerSlug", "site-reliability-engineer-sre");
  r327.set("questionNumber", 29);
  r327.set("question", "What is distributed tracing?");
  r327.set("category", "Technical");
  r327.set("difficulty", "Beginner");
  r327.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is distributed tracing?");
  try { app.save(r327); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r328 = new Record(collection);
  r328.set("careerSlug", "site-reliability-engineer-sre");
  r328.set("questionNumber", 30);
  r328.set("question", "What is OpenTelemetry?");
  r328.set("category", "System Design");
  r328.set("difficulty", "Beginner");
  r328.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is OpenTelemetry?");
  try { app.save(r328); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r329 = new Record(collection);
  r329.set("careerSlug", "site-reliability-engineer-sre");
  r329.set("questionNumber", 31);
  r329.set("question", "What is Jaeger?");
  r329.set("category", "Technical");
  r329.set("difficulty", "Beginner");
  r329.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is Jaeger?");
  try { app.save(r329); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r330 = new Record(collection);
  r330.set("careerSlug", "site-reliability-engineer-sre");
  r330.set("questionNumber", 32);
  r330.set("question", "What is Zipkin?");
  r330.set("category", "Technical");
  r330.set("difficulty", "Beginner");
  r330.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is Zipkin?");
  try { app.save(r330); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r331 = new Record(collection);
  r331.set("careerSlug", "site-reliability-engineer-sre");
  r331.set("questionNumber", 33);
  r331.set("question", "What is the RED method?");
  r331.set("category", "Behavioral");
  r331.set("difficulty", "Beginner");
  r331.set("explanation", "Beginner level question for Site Reliability Engineer (SRE). What is the RED method?");
  try { app.save(r331); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r332 = new Record(collection);
  r332.set("careerSlug", "site-reliability-engineer-sre");
  r332.set("questionNumber", 34);
  r332.set("question", "What is the USE method?");
  r332.set("category", "Technical");
  r332.set("difficulty", "Intermediate");
  r332.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is the USE method?");
  try { app.save(r332); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r333 = new Record(collection);
  r333.set("careerSlug", "site-reliability-engineer-sre");
  r333.set("questionNumber", 35);
  r333.set("question", "What is the Google Golden Signals?");
  r333.set("category", "Technical");
  r333.set("difficulty", "Intermediate");
  r333.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is the Google Golden Signals?");
  try { app.save(r333); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r334 = new Record(collection);
  r334.set("careerSlug", "site-reliability-engineer-sre");
  r334.set("questionNumber", 36);
  r334.set("question", "What is log aggregation?");
  r334.set("category", "System Design");
  r334.set("difficulty", "Intermediate");
  r334.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is log aggregation?");
  try { app.save(r334); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r335 = new Record(collection);
  r335.set("careerSlug", "site-reliability-engineer-sre");
  r335.set("questionNumber", 37);
  r335.set("question", "What is structured logging?");
  r335.set("category", "Technical");
  r335.set("difficulty", "Intermediate");
  r335.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is structured logging?");
  try { app.save(r335); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r336 = new Record(collection);
  r336.set("careerSlug", "site-reliability-engineer-sre");
  r336.set("questionNumber", 38);
  r336.set("question", "What is ELK stack?");
  r336.set("category", "Technical");
  r336.set("difficulty", "Intermediate");
  r336.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is ELK stack?");
  try { app.save(r336); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r337 = new Record(collection);
  r337.set("careerSlug", "site-reliability-engineer-sre");
  r337.set("questionNumber", 39);
  r337.set("question", "What is Loki?");
  r337.set("category", "Behavioral");
  r337.set("difficulty", "Intermediate");
  r337.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is Loki?");
  try { app.save(r337); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r338 = new Record(collection);
  r338.set("careerSlug", "site-reliability-engineer-sre");
  r338.set("questionNumber", 40);
  r338.set("question", "What is tracing vs logging vs metrics?");
  r338.set("category", "Technical");
  r338.set("difficulty", "Intermediate");
  r338.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is tracing vs logging vs metrics?");
  try { app.save(r338); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r339 = new Record(collection);
  r339.set("careerSlug", "site-reliability-engineer-sre");
  r339.set("questionNumber", 41);
  r339.set("question", "What is chaos engineering?");
  r339.set("category", "Technical");
  r339.set("difficulty", "Intermediate");
  r339.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is chaos engineering?");
  try { app.save(r339); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r340 = new Record(collection);
  r340.set("careerSlug", "site-reliability-engineer-sre");
  r340.set("questionNumber", 42);
  r340.set("question", "What is Chaos Monkey?");
  r340.set("category", "System Design");
  r340.set("difficulty", "Intermediate");
  r340.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is Chaos Monkey?");
  try { app.save(r340); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r341 = new Record(collection);
  r341.set("careerSlug", "site-reliability-engineer-sre");
  r341.set("questionNumber", 43);
  r341.set("question", "What is GameDay?");
  r341.set("category", "Technical");
  r341.set("difficulty", "Intermediate");
  r341.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is GameDay?");
  try { app.save(r341); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r342 = new Record(collection);
  r342.set("careerSlug", "site-reliability-engineer-sre");
  r342.set("questionNumber", 44);
  r342.set("question", "What is load testing?");
  r342.set("category", "Technical");
  r342.set("difficulty", "Intermediate");
  r342.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is load testing?");
  try { app.save(r342); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r343 = new Record(collection);
  r343.set("careerSlug", "site-reliability-engineer-sre");
  r343.set("questionNumber", 45);
  r343.set("question", "What is stress testing?");
  r343.set("category", "Behavioral");
  r343.set("difficulty", "Intermediate");
  r343.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is stress testing?");
  try { app.save(r343); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r344 = new Record(collection);
  r344.set("careerSlug", "site-reliability-engineer-sre");
  r344.set("questionNumber", 46);
  r344.set("question", "What is capacity planning?");
  r344.set("category", "Technical");
  r344.set("difficulty", "Intermediate");
  r344.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is capacity planning?");
  try { app.save(r344); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r345 = new Record(collection);
  r345.set("careerSlug", "site-reliability-engineer-sre");
  r345.set("questionNumber", 47);
  r345.set("question", "What is traffic forecasting?");
  r345.set("category", "Technical");
  r345.set("difficulty", "Intermediate");
  r345.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is traffic forecasting?");
  try { app.save(r345); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r346 = new Record(collection);
  r346.set("careerSlug", "site-reliability-engineer-sre");
  r346.set("questionNumber", 48);
  r346.set("question", "What is autoscaling?");
  r346.set("category", "System Design");
  r346.set("difficulty", "Intermediate");
  r346.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is autoscaling?");
  try { app.save(r346); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r347 = new Record(collection);
  r347.set("careerSlug", "site-reliability-engineer-sre");
  r347.set("questionNumber", 49);
  r347.set("question", "What is horizontal vs vertical scaling?");
  r347.set("category", "Technical");
  r347.set("difficulty", "Intermediate");
  r347.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is horizontal vs vertical scaling?");
  try { app.save(r347); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r348 = new Record(collection);
  r348.set("careerSlug", "site-reliability-engineer-sre");
  r348.set("questionNumber", 50);
  r348.set("question", "What is Kubernetes HPA?");
  r348.set("category", "Technical");
  r348.set("difficulty", "Intermediate");
  r348.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is Kubernetes HPA?");
  try { app.save(r348); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r349 = new Record(collection);
  r349.set("careerSlug", "site-reliability-engineer-sre");
  r349.set("questionNumber", 51);
  r349.set("question", "What is VPA (Vertical Pod Autoscaler)?");
  r349.set("category", "Behavioral");
  r349.set("difficulty", "Intermediate");
  r349.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is VPA (Vertical Pod Autoscaler)?");
  try { app.save(r349); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r350 = new Record(collection);
  r350.set("careerSlug", "site-reliability-engineer-sre");
  r350.set("questionNumber", 52);
  r350.set("question", "What is KEDA?");
  r350.set("category", "Technical");
  r350.set("difficulty", "Intermediate");
  r350.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is KEDA?");
  try { app.save(r350); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r351 = new Record(collection);
  r351.set("careerSlug", "site-reliability-engineer-sre");
  r351.set("questionNumber", 53);
  r351.set("question", "What is cluster autoscaler?");
  r351.set("category", "Technical");
  r351.set("difficulty", "Intermediate");
  r351.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is cluster autoscaler?");
  try { app.save(r351); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r352 = new Record(collection);
  r352.set("careerSlug", "site-reliability-engineer-sre");
  r352.set("questionNumber", 54);
  r352.set("question", "What is node drain?");
  r352.set("category", "System Design");
  r352.set("difficulty", "Intermediate");
  r352.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is node drain?");
  try { app.save(r352); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r353 = new Record(collection);
  r353.set("careerSlug", "site-reliability-engineer-sre");
  r353.set("questionNumber", 55);
  r353.set("question", "What is pod disruption budget?");
  r353.set("category", "Technical");
  r353.set("difficulty", "Intermediate");
  r353.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is pod disruption budget?");
  try { app.save(r353); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r354 = new Record(collection);
  r354.set("careerSlug", "site-reliability-engineer-sre");
  r354.set("questionNumber", 56);
  r354.set("question", "What is rolling update?");
  r354.set("category", "Technical");
  r354.set("difficulty", "Intermediate");
  r354.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is rolling update?");
  try { app.save(r354); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r355 = new Record(collection);
  r355.set("careerSlug", "site-reliability-engineer-sre");
  r355.set("questionNumber", 57);
  r355.set("question", "What is blue-green deployment in SRE?");
  r355.set("category", "Behavioral");
  r355.set("difficulty", "Intermediate");
  r355.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is blue-green deployment in SRE?");
  try { app.save(r355); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r356 = new Record(collection);
  r356.set("careerSlug", "site-reliability-engineer-sre");
  r356.set("questionNumber", 58);
  r356.set("question", "What is canary analysis?");
  r356.set("category", "Technical");
  r356.set("difficulty", "Intermediate");
  r356.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is canary analysis?");
  try { app.save(r356); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r357 = new Record(collection);
  r357.set("careerSlug", "site-reliability-engineer-sre");
  r357.set("questionNumber", 59);
  r357.set("question", "What is feature flags in reliability?");
  r357.set("category", "Technical");
  r357.set("difficulty", "Intermediate");
  r357.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is feature flags in reliability?");
  try { app.save(r357); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r358 = new Record(collection);
  r358.set("careerSlug", "site-reliability-engineer-sre");
  r358.set("questionNumber", 60);
  r358.set("question", "What is circuit breaker pattern?");
  r358.set("category", "System Design");
  r358.set("difficulty", "Intermediate");
  r358.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is circuit breaker pattern?");
  try { app.save(r358); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r359 = new Record(collection);
  r359.set("careerSlug", "site-reliability-engineer-sre");
  r359.set("questionNumber", 61);
  r359.set("question", "What is retry with exponential backoff?");
  r359.set("category", "Technical");
  r359.set("difficulty", "Intermediate");
  r359.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is retry with exponential backoff?");
  try { app.save(r359); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r360 = new Record(collection);
  r360.set("careerSlug", "site-reliability-engineer-sre");
  r360.set("questionNumber", 62);
  r360.set("question", "What is timeout?");
  r360.set("category", "Technical");
  r360.set("difficulty", "Intermediate");
  r360.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is timeout?");
  try { app.save(r360); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r361 = new Record(collection);
  r361.set("careerSlug", "site-reliability-engineer-sre");
  r361.set("questionNumber", 63);
  r361.set("question", "What is bulkhead pattern?");
  r361.set("category", "Behavioral");
  r361.set("difficulty", "Intermediate");
  r361.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is bulkhead pattern?");
  try { app.save(r361); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r362 = new Record(collection);
  r362.set("careerSlug", "site-reliability-engineer-sre");
  r362.set("questionNumber", 64);
  r362.set("question", "What is rate limiting?");
  r362.set("category", "Technical");
  r362.set("difficulty", "Intermediate");
  r362.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is rate limiting?");
  try { app.save(r362); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r363 = new Record(collection);
  r363.set("careerSlug", "site-reliability-engineer-sre");
  r363.set("questionNumber", 65);
  r363.set("question", "What is request hedging?");
  r363.set("category", "Technical");
  r363.set("difficulty", "Intermediate");
  r363.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is request hedging?");
  try { app.save(r363); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r364 = new Record(collection);
  r364.set("careerSlug", "site-reliability-engineer-sre");
  r364.set("questionNumber", 66);
  r364.set("question", "What is caching in reliability?");
  r364.set("category", "System Design");
  r364.set("difficulty", "Intermediate");
  r364.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is caching in reliability?");
  try { app.save(r364); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r365 = new Record(collection);
  r365.set("careerSlug", "site-reliability-engineer-sre");
  r365.set("questionNumber", 67);
  r365.set("question", "What is CDN reliability?");
  r365.set("category", "Technical");
  r365.set("difficulty", "Intermediate");
  r365.set("explanation", "Intermediate level question for Site Reliability Engineer (SRE). What is CDN reliability?");
  try { app.save(r365); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r366 = new Record(collection);
  r366.set("careerSlug", "site-reliability-engineer-sre");
  r366.set("questionNumber", 68);
  r366.set("question", "What is anycast?");
  r366.set("category", "Technical");
  r366.set("difficulty", "Advanced");
  r366.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is anycast?");
  try { app.save(r366); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r367 = new Record(collection);
  r367.set("careerSlug", "site-reliability-engineer-sre");
  r367.set("questionNumber", 69);
  r367.set("question", "What is multi-region architecture?");
  r367.set("category", "Behavioral");
  r367.set("difficulty", "Advanced");
  r367.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is multi-region architecture?");
  try { app.save(r367); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r368 = new Record(collection);
  r368.set("careerSlug", "site-reliability-engineer-sre");
  r368.set("questionNumber", 70);
  r368.set("question", "What is active-active vs active-passive?");
  r368.set("category", "Technical");
  r368.set("difficulty", "Advanced");
  r368.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is active-active vs active-passive?");
  try { app.save(r368); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r369 = new Record(collection);
  r369.set("careerSlug", "site-reliability-engineer-sre");
  r369.set("questionNumber", 71);
  r369.set("question", "What is failover?");
  r369.set("category", "Technical");
  r369.set("difficulty", "Advanced");
  r369.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is failover?");
  try { app.save(r369); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r370 = new Record(collection);
  r370.set("careerSlug", "site-reliability-engineer-sre");
  r370.set("questionNumber", 72);
  r370.set("question", "What is DNS failover?");
  r370.set("category", "System Design");
  r370.set("difficulty", "Advanced");
  r370.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is DNS failover?");
  try { app.save(r370); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r371 = new Record(collection);
  r371.set("careerSlug", "site-reliability-engineer-sre");
  r371.set("questionNumber", 73);
  r371.set("question", "What is health check?");
  r371.set("category", "Technical");
  r371.set("difficulty", "Advanced");
  r371.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is health check?");
  try { app.save(r371); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r372 = new Record(collection);
  r372.set("careerSlug", "site-reliability-engineer-sre");
  r372.set("questionNumber", 74);
  r372.set("question", "What is deep health check?");
  r372.set("category", "Technical");
  r372.set("difficulty", "Advanced");
  r372.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is deep health check?");
  try { app.save(r372); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r373 = new Record(collection);
  r373.set("careerSlug", "site-reliability-engineer-sre");
  r373.set("questionNumber", 75);
  r373.set("question", "What is synthetic monitoring?");
  r373.set("category", "Behavioral");
  r373.set("difficulty", "Advanced");
  r373.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is synthetic monitoring?");
  try { app.save(r373); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r374 = new Record(collection);
  r374.set("careerSlug", "site-reliability-engineer-sre");
  r374.set("questionNumber", 76);
  r374.set("question", "What is real user monitoring (RUM)?");
  r374.set("category", "Technical");
  r374.set("difficulty", "Advanced");
  r374.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is real user monitoring (RUM)?");
  try { app.save(r374); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r375 = new Record(collection);
  r375.set("careerSlug", "site-reliability-engineer-sre");
  r375.set("questionNumber", 77);
  r375.set("question", "What is Apdex score?");
  r375.set("category", "Technical");
  r375.set("difficulty", "Advanced");
  r375.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is Apdex score?");
  try { app.save(r375); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r376 = new Record(collection);
  r376.set("careerSlug", "site-reliability-engineer-sre");
  r376.set("questionNumber", 78);
  r376.set("question", "What is tail latency?");
  r376.set("category", "System Design");
  r376.set("difficulty", "Advanced");
  r376.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is tail latency?");
  try { app.save(r376); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r377 = new Record(collection);
  r377.set("careerSlug", "site-reliability-engineer-sre");
  r377.set("questionNumber", 79);
  r377.set("question", "What is p50, p95, p99 latency?");
  r377.set("category", "Technical");
  r377.set("difficulty", "Advanced");
  r377.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is p50, p95, p99 latency?");
  try { app.save(r377); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r378 = new Record(collection);
  r378.set("careerSlug", "site-reliability-engineer-sre");
  r378.set("questionNumber", 80);
  r378.set("question", "What is Little's Law?");
  r378.set("category", "Technical");
  r378.set("difficulty", "Advanced");
  r378.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is Little's Law?");
  try { app.save(r378); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r379 = new Record(collection);
  r379.set("careerSlug", "site-reliability-engineer-sre");
  r379.set("questionNumber", 81);
  r379.set("question", "What is queueing theory?");
  r379.set("category", "Behavioral");
  r379.set("difficulty", "Advanced");
  r379.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is queueing theory?");
  try { app.save(r379); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r380 = new Record(collection);
  r380.set("careerSlug", "site-reliability-engineer-sre");
  r380.set("questionNumber", 82);
  r380.set("question", "What is back-pressure?");
  r380.set("category", "Technical");
  r380.set("difficulty", "Advanced");
  r380.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is back-pressure?");
  try { app.save(r380); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r381 = new Record(collection);
  r381.set("careerSlug", "site-reliability-engineer-sre");
  r381.set("questionNumber", 83);
  r381.set("question", "What is graceful degradation?");
  r381.set("category", "Technical");
  r381.set("difficulty", "Advanced");
  r381.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is graceful degradation?");
  try { app.save(r381); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r382 = new Record(collection);
  r382.set("careerSlug", "site-reliability-engineer-sre");
  r382.set("questionNumber", 84);
  r382.set("question", "What is shedding load?");
  r382.set("category", "System Design");
  r382.set("difficulty", "Advanced");
  r382.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is shedding load?");
  try { app.save(r382); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r383 = new Record(collection);
  r383.set("careerSlug", "site-reliability-engineer-sre");
  r383.set("questionNumber", 85);
  r383.set("question", "What is network partition?");
  r383.set("category", "Technical");
  r383.set("difficulty", "Advanced");
  r383.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is network partition?");
  try { app.save(r383); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r384 = new Record(collection);
  r384.set("careerSlug", "site-reliability-engineer-sre");
  r384.set("questionNumber", 86);
  r384.set("question", "What is split-brain?");
  r384.set("category", "Technical");
  r384.set("difficulty", "Advanced");
  r384.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is split-brain?");
  try { app.save(r384); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r385 = new Record(collection);
  r385.set("careerSlug", "site-reliability-engineer-sre");
  r385.set("questionNumber", 87);
  r385.set("question", "What is quorum?");
  r385.set("category", "Behavioral");
  r385.set("difficulty", "Advanced");
  r385.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is quorum?");
  try { app.save(r385); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r386 = new Record(collection);
  r386.set("careerSlug", "site-reliability-engineer-sre");
  r386.set("questionNumber", 88);
  r386.set("question", "What is consensus (Raft, Paxos)?");
  r386.set("category", "Technical");
  r386.set("difficulty", "Advanced");
  r386.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is consensus (Raft, Paxos)?");
  try { app.save(r386); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r387 = new Record(collection);
  r387.set("careerSlug", "site-reliability-engineer-sre");
  r387.set("questionNumber", 89);
  r387.set("question", "What is distributed systems CAP theorem?");
  r387.set("category", "Technical");
  r387.set("difficulty", "Advanced");
  r387.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is distributed systems CAP theorem?");
  try { app.save(r387); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r388 = new Record(collection);
  r388.set("careerSlug", "site-reliability-engineer-sre");
  r388.set("questionNumber", 90);
  r388.set("question", "What is service mesh role in reliability?");
  r388.set("category", "System Design");
  r388.set("difficulty", "Advanced");
  r388.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is service mesh role in reliability?");
  try { app.save(r388); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r389 = new Record(collection);
  r389.set("careerSlug", "site-reliability-engineer-sre");
  r389.set("questionNumber", 91);
  r389.set("question", "What is Envoy proxy?");
  r389.set("category", "Technical");
  r389.set("difficulty", "Advanced");
  r389.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is Envoy proxy?");
  try { app.save(r389); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r390 = new Record(collection);
  r390.set("careerSlug", "site-reliability-engineer-sre");
  r390.set("questionNumber", 92);
  r390.set("question", "What is Istio?");
  r390.set("category", "Technical");
  r390.set("difficulty", "Advanced");
  r390.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is Istio?");
  try { app.save(r390); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r391 = new Record(collection);
  r391.set("careerSlug", "site-reliability-engineer-sre");
  r391.set("questionNumber", 93);
  r391.set("question", "What is mTLS role in SRE?");
  r391.set("category", "Behavioral");
  r391.set("difficulty", "Advanced");
  r391.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is mTLS role in SRE?");
  try { app.save(r391); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r392 = new Record(collection);
  r392.set("careerSlug", "site-reliability-engineer-sre");
  r392.set("questionNumber", 94);
  r392.set("question", "What is API gateway reliability patterns?");
  r392.set("category", "Technical");
  r392.set("difficulty", "Advanced");
  r392.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is API gateway reliability patterns?");
  try { app.save(r392); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r393 = new Record(collection);
  r393.set("careerSlug", "site-reliability-engineer-sre");
  r393.set("questionNumber", 95);
  r393.set("question", "What is database connection pooling?");
  r393.set("category", "Technical");
  r393.set("difficulty", "Advanced");
  r393.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is database connection pooling?");
  try { app.save(r393); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r394 = new Record(collection);
  r394.set("careerSlug", "site-reliability-engineer-sre");
  r394.set("questionNumber", 96);
  r394.set("question", "What is read replica for reliability?");
  r394.set("category", "System Design");
  r394.set("difficulty", "Advanced");
  r394.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is read replica for reliability?");
  try { app.save(r394); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r395 = new Record(collection);
  r395.set("careerSlug", "site-reliability-engineer-sre");
  r395.set("questionNumber", 97);
  r395.set("question", "What is write-ahead log?");
  r395.set("category", "Technical");
  r395.set("difficulty", "Advanced");
  r395.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is write-ahead log?");
  try { app.save(r395); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r396 = new Record(collection);
  r396.set("careerSlug", "site-reliability-engineer-sre");
  r396.set("questionNumber", 98);
  r396.set("question", "What is database failover?");
  r396.set("category", "Technical");
  r396.set("difficulty", "Advanced");
  r396.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is database failover?");
  try { app.save(r396); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r397 = new Record(collection);
  r397.set("careerSlug", "site-reliability-engineer-sre");
  r397.set("questionNumber", 99);
  r397.set("question", "What is RDS Multi-AZ?");
  r397.set("category", "Behavioral");
  r397.set("difficulty", "Advanced");
  r397.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is RDS Multi-AZ?");
  try { app.save(r397); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r398 = new Record(collection);
  r398.set("careerSlug", "site-reliability-engineer-sre");
  r398.set("questionNumber", 100);
  r398.set("question", "What is disaster recovery in SRE?");
  r398.set("category", "Technical");
  r398.set("difficulty", "Advanced");
  r398.set("explanation", "Advanced level question for Site Reliability Engineer (SRE). What is disaster recovery in SRE?");
  try { app.save(r398); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r399 = new Record(collection);
  r399.set("careerSlug", "embedded-systems-firmware-engineer");
  r399.set("questionNumber", 1);
  r399.set("question", "What is an embedded system?");
  r399.set("category", "Technical");
  r399.set("difficulty", "Beginner");
  r399.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is an embedded system?");
  try { app.save(r399); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r400 = new Record(collection);
  r400.set("careerSlug", "embedded-systems-firmware-engineer");
  r400.set("questionNumber", 2);
  r400.set("question", "What is a microcontroller vs microprocessor?");
  r400.set("category", "Technical");
  r400.set("difficulty", "Beginner");
  r400.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is a microcontroller vs microprocessor?");
  try { app.save(r400); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r401 = new Record(collection);
  r401.set("careerSlug", "embedded-systems-firmware-engineer");
  r401.set("questionNumber", 3);
  r401.set("question", "What is RTOS?");
  r401.set("category", "Behavioral");
  r401.set("difficulty", "Beginner");
  r401.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is RTOS?");
  try { app.save(r401); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r402 = new Record(collection);
  r402.set("careerSlug", "embedded-systems-firmware-engineer");
  r402.set("questionNumber", 4);
  r402.set("question", "What is FreeRTOS?");
  r402.set("category", "Technical");
  r402.set("difficulty", "Beginner");
  r402.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is FreeRTOS?");
  try { app.save(r402); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r403 = new Record(collection);
  r403.set("careerSlug", "embedded-systems-firmware-engineer");
  r403.set("questionNumber", 5);
  r403.set("question", "What is a task in FreeRTOS?");
  r403.set("category", "Technical");
  r403.set("difficulty", "Beginner");
  r403.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is a task in FreeRTOS?");
  try { app.save(r403); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r404 = new Record(collection);
  r404.set("careerSlug", "embedded-systems-firmware-engineer");
  r404.set("questionNumber", 6);
  r404.set("question", "What is scheduling in RTOS (preemptive vs cooperative)?");
  r404.set("category", "System Design");
  r404.set("difficulty", "Beginner");
  r404.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is scheduling in RTOS (preemptive vs cooperative)?");
  try { app.save(r404); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r405 = new Record(collection);
  r405.set("careerSlug", "embedded-systems-firmware-engineer");
  r405.set("questionNumber", 7);
  r405.set("question", "What is priority inversion?");
  r405.set("category", "Technical");
  r405.set("difficulty", "Beginner");
  r405.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is priority inversion?");
  try { app.save(r405); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r406 = new Record(collection);
  r406.set("careerSlug", "embedded-systems-firmware-engineer");
  r406.set("questionNumber", 8);
  r406.set("question", "What is deadlock?");
  r406.set("category", "Technical");
  r406.set("difficulty", "Beginner");
  r406.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is deadlock?");
  try { app.save(r406); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r407 = new Record(collection);
  r407.set("careerSlug", "embedded-systems-firmware-engineer");
  r407.set("questionNumber", 9);
  r407.set("question", "What is a semaphore?");
  r407.set("category", "Behavioral");
  r407.set("difficulty", "Beginner");
  r407.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is a semaphore?");
  try { app.save(r407); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r408 = new Record(collection);
  r408.set("careerSlug", "embedded-systems-firmware-engineer");
  r408.set("questionNumber", 10);
  r408.set("question", "What is a mutex?");
  r408.set("category", "Technical");
  r408.set("difficulty", "Beginner");
  r408.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is a mutex?");
  try { app.save(r408); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r409 = new Record(collection);
  r409.set("careerSlug", "embedded-systems-firmware-engineer");
  r409.set("questionNumber", 11);
  r409.set("question", "What is a queue in RTOS?");
  r409.set("category", "Technical");
  r409.set("difficulty", "Beginner");
  r409.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is a queue in RTOS?");
  try { app.save(r409); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r410 = new Record(collection);
  r410.set("careerSlug", "embedded-systems-firmware-engineer");
  r410.set("questionNumber", 12);
  r410.set("question", "What is an interrupt?");
  r410.set("category", "System Design");
  r410.set("difficulty", "Beginner");
  r410.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is an interrupt?");
  try { app.save(r410); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r411 = new Record(collection);
  r411.set("careerSlug", "embedded-systems-firmware-engineer");
  r411.set("questionNumber", 13);
  r411.set("question", "What is ISR (Interrupt Service Routine)?");
  r411.set("category", "Technical");
  r411.set("difficulty", "Beginner");
  r411.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is ISR (Interrupt Service Routine)?");
  try { app.save(r411); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r412 = new Record(collection);
  r412.set("careerSlug", "embedded-systems-firmware-engineer");
  r412.set("questionNumber", 14);
  r412.set("question", "What is interrupt latency?");
  r412.set("category", "Technical");
  r412.set("difficulty", "Beginner");
  r412.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is interrupt latency?");
  try { app.save(r412); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r413 = new Record(collection);
  r413.set("careerSlug", "embedded-systems-firmware-engineer");
  r413.set("questionNumber", 15);
  r413.set("question", "What is DMA?");
  r413.set("category", "Behavioral");
  r413.set("difficulty", "Beginner");
  r413.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is DMA?");
  try { app.save(r413); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r414 = new Record(collection);
  r414.set("careerSlug", "embedded-systems-firmware-engineer");
  r414.set("questionNumber", 16);
  r414.set("question", "What is memory-mapped I/O?");
  r414.set("category", "Technical");
  r414.set("difficulty", "Beginner");
  r414.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is memory-mapped I/O?");
  try { app.save(r414); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r415 = new Record(collection);
  r415.set("careerSlug", "embedded-systems-firmware-engineer");
  r415.set("questionNumber", 17);
  r415.set("question", "What is GPIO?");
  r415.set("category", "Technical");
  r415.set("difficulty", "Beginner");
  r415.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is GPIO?");
  try { app.save(r415); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r416 = new Record(collection);
  r416.set("careerSlug", "embedded-systems-firmware-engineer");
  r416.set("questionNumber", 18);
  r416.set("question", "What is UART?");
  r416.set("category", "System Design");
  r416.set("difficulty", "Beginner");
  r416.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is UART?");
  try { app.save(r416); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r417 = new Record(collection);
  r417.set("careerSlug", "embedded-systems-firmware-engineer");
  r417.set("questionNumber", 19);
  r417.set("question", "What is SPI?");
  r417.set("category", "Technical");
  r417.set("difficulty", "Beginner");
  r417.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is SPI?");
  try { app.save(r417); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r418 = new Record(collection);
  r418.set("careerSlug", "embedded-systems-firmware-engineer");
  r418.set("questionNumber", 20);
  r418.set("question", "What is I2C?");
  r418.set("category", "Technical");
  r418.set("difficulty", "Beginner");
  r418.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is I2C?");
  try { app.save(r418); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r419 = new Record(collection);
  r419.set("careerSlug", "embedded-systems-firmware-engineer");
  r419.set("questionNumber", 21);
  r419.set("question", "What is CAN bus?");
  r419.set("category", "Behavioral");
  r419.set("difficulty", "Beginner");
  r419.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is CAN bus?");
  try { app.save(r419); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r420 = new Record(collection);
  r420.set("careerSlug", "embedded-systems-firmware-engineer");
  r420.set("questionNumber", 22);
  r420.set("question", "What is PWM?");
  r420.set("category", "Technical");
  r420.set("difficulty", "Beginner");
  r420.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is PWM?");
  try { app.save(r420); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r421 = new Record(collection);
  r421.set("careerSlug", "embedded-systems-firmware-engineer");
  r421.set("questionNumber", 23);
  r421.set("question", "What is ADC?");
  r421.set("category", "Technical");
  r421.set("difficulty", "Beginner");
  r421.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is ADC?");
  try { app.save(r421); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r422 = new Record(collection);
  r422.set("careerSlug", "embedded-systems-firmware-engineer");
  r422.set("questionNumber", 24);
  r422.set("question", "What is DAC?");
  r422.set("category", "System Design");
  r422.set("difficulty", "Beginner");
  r422.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is DAC?");
  try { app.save(r422); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r423 = new Record(collection);
  r423.set("careerSlug", "embedded-systems-firmware-engineer");
  r423.set("questionNumber", 25);
  r423.set("question", "What is bootloader?");
  r423.set("category", "Technical");
  r423.set("difficulty", "Beginner");
  r423.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is bootloader?");
  try { app.save(r423); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r424 = new Record(collection);
  r424.set("careerSlug", "embedded-systems-firmware-engineer");
  r424.set("questionNumber", 26);
  r424.set("question", "What is flash memory?");
  r424.set("category", "Technical");
  r424.set("difficulty", "Beginner");
  r424.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is flash memory?");
  try { app.save(r424); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r425 = new Record(collection);
  r425.set("careerSlug", "embedded-systems-firmware-engineer");
  r425.set("questionNumber", 27);
  r425.set("question", "What is SRAM vs DRAM vs FLASH?");
  r425.set("category", "Behavioral");
  r425.set("difficulty", "Beginner");
  r425.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is SRAM vs DRAM vs FLASH?");
  try { app.save(r425); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r426 = new Record(collection);
  r426.set("careerSlug", "embedded-systems-firmware-engineer");
  r426.set("questionNumber", 28);
  r426.set("question", "What is volatile keyword in C?");
  r426.set("category", "Technical");
  r426.set("difficulty", "Beginner");
  r426.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is volatile keyword in C?");
  try { app.save(r426); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r427 = new Record(collection);
  r427.set("careerSlug", "embedded-systems-firmware-engineer");
  r427.set("questionNumber", 29);
  r427.set("question", "What is const in embedded C?");
  r427.set("category", "Technical");
  r427.set("difficulty", "Beginner");
  r427.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is const in embedded C?");
  try { app.save(r427); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r428 = new Record(collection);
  r428.set("careerSlug", "embedded-systems-firmware-engineer");
  r428.set("questionNumber", 30);
  r428.set("question", "What is static in embedded C?");
  r428.set("category", "System Design");
  r428.set("difficulty", "Beginner");
  r428.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is static in embedded C?");
  try { app.save(r428); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r429 = new Record(collection);
  r429.set("careerSlug", "embedded-systems-firmware-engineer");
  r429.set("questionNumber", 31);
  r429.set("question", "What is bit manipulation?");
  r429.set("category", "Technical");
  r429.set("difficulty", "Beginner");
  r429.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is bit manipulation?");
  try { app.save(r429); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r430 = new Record(collection);
  r430.set("careerSlug", "embedded-systems-firmware-engineer");
  r430.set("questionNumber", 32);
  r430.set("question", "What is endianness?");
  r430.set("category", "Technical");
  r430.set("difficulty", "Beginner");
  r430.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is endianness?");
  try { app.save(r430); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r431 = new Record(collection);
  r431.set("careerSlug", "embedded-systems-firmware-engineer");
  r431.set("questionNumber", 33);
  r431.set("question", "What is big-endian vs little-endian?");
  r431.set("category", "Behavioral");
  r431.set("difficulty", "Beginner");
  r431.set("explanation", "Beginner level question for Embedded Systems / Firmware Engineer. What is big-endian vs little-endian?");
  try { app.save(r431); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r432 = new Record(collection);
  r432.set("careerSlug", "embedded-systems-firmware-engineer");
  r432.set("questionNumber", 34);
  r432.set("question", "What is a watchdog timer?");
  r432.set("category", "Technical");
  r432.set("difficulty", "Intermediate");
  r432.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is a watchdog timer?");
  try { app.save(r432); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r433 = new Record(collection);
  r433.set("careerSlug", "embedded-systems-firmware-engineer");
  r433.set("questionNumber", 35);
  r433.set("question", "What is power management in embedded?");
  r433.set("category", "Technical");
  r433.set("difficulty", "Intermediate");
  r433.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is power management in embedded?");
  try { app.save(r433); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r434 = new Record(collection);
  r434.set("careerSlug", "embedded-systems-firmware-engineer");
  r434.set("questionNumber", 36);
  r434.set("question", "What are sleep modes?");
  r434.set("category", "System Design");
  r434.set("difficulty", "Intermediate");
  r434.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What are sleep modes?");
  try { app.save(r434); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r435 = new Record(collection);
  r435.set("careerSlug", "embedded-systems-firmware-engineer");
  r435.set("questionNumber", 37);
  r435.set("question", "What is ARM Cortex-M?");
  r435.set("category", "Technical");
  r435.set("difficulty", "Intermediate");
  r435.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is ARM Cortex-M?");
  try { app.save(r435); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r436 = new Record(collection);
  r436.set("careerSlug", "embedded-systems-firmware-engineer");
  r436.set("questionNumber", 38);
  r436.set("question", "What is NVIC?");
  r436.set("category", "Technical");
  r436.set("difficulty", "Intermediate");
  r436.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is NVIC?");
  try { app.save(r436); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r437 = new Record(collection);
  r437.set("careerSlug", "embedded-systems-firmware-engineer");
  r437.set("questionNumber", 39);
  r437.set("question", "What is stack overflow in embedded?");
  r437.set("category", "Behavioral");
  r437.set("difficulty", "Intermediate");
  r437.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is stack overflow in embedded?");
  try { app.save(r437); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r438 = new Record(collection);
  r438.set("careerSlug", "embedded-systems-firmware-engineer");
  r438.set("questionNumber", 40);
  r438.set("question", "What is heap fragmentation?");
  r438.set("category", "Technical");
  r438.set("difficulty", "Intermediate");
  r438.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is heap fragmentation?");
  try { app.save(r438); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r439 = new Record(collection);
  r439.set("careerSlug", "embedded-systems-firmware-engineer");
  r439.set("questionNumber", 41);
  r439.set("question", "What is linker script?");
  r439.set("category", "Technical");
  r439.set("difficulty", "Intermediate");
  r439.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is linker script?");
  try { app.save(r439); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r440 = new Record(collection);
  r440.set("careerSlug", "embedded-systems-firmware-engineer");
  r440.set("questionNumber", 42);
  r440.set("question", "What is startup code?");
  r440.set("category", "System Design");
  r440.set("difficulty", "Intermediate");
  r440.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is startup code?");
  try { app.save(r440); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r441 = new Record(collection);
  r441.set("careerSlug", "embedded-systems-firmware-engineer");
  r441.set("questionNumber", 43);
  r441.set("question", "What is a vector table?");
  r441.set("category", "Technical");
  r441.set("difficulty", "Intermediate");
  r441.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is a vector table?");
  try { app.save(r441); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r442 = new Record(collection);
  r442.set("careerSlug", "embedded-systems-firmware-engineer");
  r442.set("questionNumber", 44);
  r442.set("question", "What is bare-metal programming?");
  r442.set("category", "Technical");
  r442.set("difficulty", "Intermediate");
  r442.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is bare-metal programming?");
  try { app.save(r442); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r443 = new Record(collection);
  r443.set("careerSlug", "embedded-systems-firmware-engineer");
  r443.set("questionNumber", 45);
  r443.set("question", "What is HAL (Hardware Abstraction Layer)?");
  r443.set("category", "Behavioral");
  r443.set("difficulty", "Intermediate");
  r443.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is HAL (Hardware Abstraction Layer)?");
  try { app.save(r443); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r444 = new Record(collection);
  r444.set("careerSlug", "embedded-systems-firmware-engineer");
  r444.set("questionNumber", 46);
  r444.set("question", "What is register-level programming?");
  r444.set("category", "Technical");
  r444.set("difficulty", "Intermediate");
  r444.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is register-level programming?");
  try { app.save(r444); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r445 = new Record(collection);
  r445.set("careerSlug", "embedded-systems-firmware-engineer");
  r445.set("questionNumber", 47);
  r445.set("question", "What is JTAG?");
  r445.set("category", "Technical");
  r445.set("difficulty", "Intermediate");
  r445.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is JTAG?");
  try { app.save(r445); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r446 = new Record(collection);
  r446.set("careerSlug", "embedded-systems-firmware-engineer");
  r446.set("questionNumber", 48);
  r446.set("question", "What is SWD (Serial Wire Debug)?");
  r446.set("category", "System Design");
  r446.set("difficulty", "Intermediate");
  r446.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is SWD (Serial Wire Debug)?");
  try { app.save(r446); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r447 = new Record(collection);
  r447.set("careerSlug", "embedded-systems-firmware-engineer");
  r447.set("questionNumber", 49);
  r447.set("question", "What is GDB?");
  r447.set("category", "Technical");
  r447.set("difficulty", "Intermediate");
  r447.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is GDB?");
  try { app.save(r447); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r448 = new Record(collection);
  r448.set("careerSlug", "embedded-systems-firmware-engineer");
  r448.set("questionNumber", 50);
  r448.set("question", "What is a logic analyzer?");
  r448.set("category", "Technical");
  r448.set("difficulty", "Intermediate");
  r448.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is a logic analyzer?");
  try { app.save(r448); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r449 = new Record(collection);
  r449.set("careerSlug", "embedded-systems-firmware-engineer");
  r449.set("questionNumber", 51);
  r449.set("question", "What is an oscilloscope in embedded debugging?");
  r449.set("category", "Behavioral");
  r449.set("difficulty", "Intermediate");
  r449.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is an oscilloscope in embedded debugging?");
  try { app.save(r449); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r450 = new Record(collection);
  r450.set("careerSlug", "embedded-systems-firmware-engineer");
  r450.set("questionNumber", 52);
  r450.set("question", "What is a digital multimeter?");
  r450.set("category", "Technical");
  r450.set("difficulty", "Intermediate");
  r450.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is a digital multimeter?");
  try { app.save(r450); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r451 = new Record(collection);
  r451.set("careerSlug", "embedded-systems-firmware-engineer");
  r451.set("questionNumber", 53);
  r451.set("question", "What is bus pirate?");
  r451.set("category", "Technical");
  r451.set("difficulty", "Intermediate");
  r451.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is bus pirate?");
  try { app.save(r451); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r452 = new Record(collection);
  r452.set("careerSlug", "embedded-systems-firmware-engineer");
  r452.set("questionNumber", 54);
  r452.set("question", "What is CRC?");
  r452.set("category", "System Design");
  r452.set("difficulty", "Intermediate");
  r452.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is CRC?");
  try { app.save(r452); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r453 = new Record(collection);
  r453.set("careerSlug", "embedded-systems-firmware-engineer");
  r453.set("questionNumber", 55);
  r453.set("question", "What is checksum?");
  r453.set("category", "Technical");
  r453.set("difficulty", "Intermediate");
  r453.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is checksum?");
  try { app.save(r453); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r454 = new Record(collection);
  r454.set("careerSlug", "embedded-systems-firmware-engineer");
  r454.set("questionNumber", 56);
  r454.set("question", "What is encryption on embedded?");
  r454.set("category", "Technical");
  r454.set("difficulty", "Intermediate");
  r454.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is encryption on embedded?");
  try { app.save(r454); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r455 = new Record(collection);
  r455.set("careerSlug", "embedded-systems-firmware-engineer");
  r455.set("questionNumber", 57);
  r455.set("question", "What is secure boot?");
  r455.set("category", "Behavioral");
  r455.set("difficulty", "Intermediate");
  r455.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is secure boot?");
  try { app.save(r455); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r456 = new Record(collection);
  r456.set("careerSlug", "embedded-systems-firmware-engineer");
  r456.set("questionNumber", 58);
  r456.set("question", "What is OTA update?");
  r456.set("category", "Technical");
  r456.set("difficulty", "Intermediate");
  r456.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is OTA update?");
  try { app.save(r456); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r457 = new Record(collection);
  r457.set("careerSlug", "embedded-systems-firmware-engineer");
  r457.set("questionNumber", 59);
  r457.set("question", "What is firmware versioning?");
  r457.set("category", "Technical");
  r457.set("difficulty", "Intermediate");
  r457.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is firmware versioning?");
  try { app.save(r457); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r458 = new Record(collection);
  r458.set("careerSlug", "embedded-systems-firmware-engineer");
  r458.set("questionNumber", 60);
  r458.set("question", "What is MQTT?");
  r458.set("category", "System Design");
  r458.set("difficulty", "Intermediate");
  r458.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is MQTT?");
  try { app.save(r458); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r459 = new Record(collection);
  r459.set("careerSlug", "embedded-systems-firmware-engineer");
  r459.set("questionNumber", 61);
  r459.set("question", "What is CoAP?");
  r459.set("category", "Technical");
  r459.set("difficulty", "Intermediate");
  r459.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is CoAP?");
  try { app.save(r459); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r460 = new Record(collection);
  r460.set("careerSlug", "embedded-systems-firmware-engineer");
  r460.set("questionNumber", 62);
  r460.set("question", "What is BLE?");
  r460.set("category", "Technical");
  r460.set("difficulty", "Intermediate");
  r460.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is BLE?");
  try { app.save(r460); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r461 = new Record(collection);
  r461.set("careerSlug", "embedded-systems-firmware-engineer");
  r461.set("questionNumber", 63);
  r461.set("question", "What is Zigbee?");
  r461.set("category", "Behavioral");
  r461.set("difficulty", "Intermediate");
  r461.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is Zigbee?");
  try { app.save(r461); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r462 = new Record(collection);
  r462.set("careerSlug", "embedded-systems-firmware-engineer");
  r462.set("questionNumber", 64);
  r462.set("question", "What is LoRaWAN?");
  r462.set("category", "Technical");
  r462.set("difficulty", "Intermediate");
  r462.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is LoRaWAN?");
  try { app.save(r462); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r463 = new Record(collection);
  r463.set("careerSlug", "embedded-systems-firmware-engineer");
  r463.set("questionNumber", 65);
  r463.set("question", "What is edge computing?");
  r463.set("category", "Technical");
  r463.set("difficulty", "Intermediate");
  r463.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is edge computing?");
  try { app.save(r463); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r464 = new Record(collection);
  r464.set("careerSlug", "embedded-systems-firmware-engineer");
  r464.set("questionNumber", 66);
  r464.set("question", "What is real-time constraint?");
  r464.set("category", "System Design");
  r464.set("difficulty", "Intermediate");
  r464.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is real-time constraint?");
  try { app.save(r464); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r465 = new Record(collection);
  r465.set("careerSlug", "embedded-systems-firmware-engineer");
  r465.set("questionNumber", 67);
  r465.set("question", "What is hard real-time vs soft real-time?");
  r465.set("category", "Technical");
  r465.set("difficulty", "Intermediate");
  r465.set("explanation", "Intermediate level question for Embedded Systems / Firmware Engineer. What is hard real-time vs soft real-time?");
  try { app.save(r465); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r466 = new Record(collection);
  r466.set("careerSlug", "embedded-systems-firmware-engineer");
  r466.set("questionNumber", 68);
  r466.set("question", "What is jitter?");
  r466.set("category", "Technical");
  r466.set("difficulty", "Advanced");
  r466.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is jitter?");
  try { app.save(r466); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r467 = new Record(collection);
  r467.set("careerSlug", "embedded-systems-firmware-engineer");
  r467.set("questionNumber", 69);
  r467.set("question", "What is latency?");
  r467.set("category", "Behavioral");
  r467.set("difficulty", "Advanced");
  r467.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is latency?");
  try { app.save(r467); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r468 = new Record(collection);
  r468.set("careerSlug", "embedded-systems-firmware-engineer");
  r468.set("questionNumber", 70);
  r468.set("question", "What is throughput?");
  r468.set("category", "Technical");
  r468.set("difficulty", "Advanced");
  r468.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is throughput?");
  try { app.save(r468); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r469 = new Record(collection);
  r469.set("careerSlug", "embedded-systems-firmware-engineer");
  r469.set("questionNumber", 71);
  r469.set("question", "What is a ring buffer?");
  r469.set("category", "Technical");
  r469.set("difficulty", "Advanced");
  r469.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is a ring buffer?");
  try { app.save(r469); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r470 = new Record(collection);
  r470.set("careerSlug", "embedded-systems-firmware-engineer");
  r470.set("questionNumber", 72);
  r470.set("question", "What is state machine?");
  r470.set("category", "System Design");
  r470.set("difficulty", "Advanced");
  r470.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is state machine?");
  try { app.save(r470); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r471 = new Record(collection);
  r471.set("careerSlug", "embedded-systems-firmware-engineer");
  r471.set("questionNumber", 73);
  r471.set("question", "What is event-driven programming?");
  r471.set("category", "Technical");
  r471.set("difficulty", "Advanced");
  r471.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is event-driven programming?");
  try { app.save(r471); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r472 = new Record(collection);
  r472.set("careerSlug", "embedded-systems-firmware-engineer");
  r472.set("questionNumber", 74);
  r472.set("question", "What is polling vs interrupt-driven?");
  r472.set("category", "Technical");
  r472.set("difficulty", "Advanced");
  r472.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is polling vs interrupt-driven?");
  try { app.save(r472); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r473 = new Record(collection);
  r473.set("careerSlug", "embedded-systems-firmware-engineer");
  r473.set("questionNumber", 75);
  r473.set("question", "What is memory alignment?");
  r473.set("category", "Behavioral");
  r473.set("difficulty", "Advanced");
  r473.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is memory alignment?");
  try { app.save(r473); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r474 = new Record(collection);
  r474.set("careerSlug", "embedded-systems-firmware-engineer");
  r474.set("questionNumber", 76);
  r474.set("question", "What is struct padding?");
  r474.set("category", "Technical");
  r474.set("difficulty", "Advanced");
  r474.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is struct padding?");
  try { app.save(r474); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r475 = new Record(collection);
  r475.set("careerSlug", "embedded-systems-firmware-engineer");
  r475.set("questionNumber", 77);
  r475.set("question", "What is #pragma pack?");
  r475.set("category", "Technical");
  r475.set("difficulty", "Advanced");
  r475.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is #pragma pack?");
  try { app.save(r475); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r476 = new Record(collection);
  r476.set("careerSlug", "embedded-systems-firmware-engineer");
  r476.set("questionNumber", 78);
  r476.set("question", "What is typedef in embedded C?");
  r476.set("category", "System Design");
  r476.set("difficulty", "Advanced");
  r476.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is typedef in embedded C?");
  try { app.save(r476); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r477 = new Record(collection);
  r477.set("careerSlug", "embedded-systems-firmware-engineer");
  r477.set("questionNumber", 79);
  r477.set("question", "What is a pointer to function?");
  r477.set("category", "Technical");
  r477.set("difficulty", "Advanced");
  r477.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is a pointer to function?");
  try { app.save(r477); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r478 = new Record(collection);
  r478.set("careerSlug", "embedded-systems-firmware-engineer");
  r478.set("questionNumber", 80);
  r478.set("question", "What is callback in embedded?");
  r478.set("category", "Technical");
  r478.set("difficulty", "Advanced");
  r478.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is callback in embedded?");
  try { app.save(r478); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r479 = new Record(collection);
  r479.set("careerSlug", "embedded-systems-firmware-engineer");
  r479.set("questionNumber", 81);
  r479.set("question", "What is MISRA C?");
  r479.set("category", "Behavioral");
  r479.set("difficulty", "Advanced");
  r479.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is MISRA C?");
  try { app.save(r479); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r480 = new Record(collection);
  r480.set("careerSlug", "embedded-systems-firmware-engineer");
  r480.set("questionNumber", 82);
  r480.set("question", "What is coding standard in embedded?");
  r480.set("category", "Technical");
  r480.set("difficulty", "Advanced");
  r480.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is coding standard in embedded?");
  try { app.save(r480); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r481 = new Record(collection);
  r481.set("careerSlug", "embedded-systems-firmware-engineer");
  r481.set("questionNumber", 83);
  r481.set("question", "What is unit testing in embedded (Unity, CppUTest)?");
  r481.set("category", "Technical");
  r481.set("difficulty", "Advanced");
  r481.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is unit testing in embedded (Unity, CppUTest)?");
  try { app.save(r481); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r482 = new Record(collection);
  r482.set("careerSlug", "embedded-systems-firmware-engineer");
  r482.set("questionNumber", 84);
  r482.set("question", "What is hardware-in-the-loop testing?");
  r482.set("category", "System Design");
  r482.set("difficulty", "Advanced");
  r482.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is hardware-in-the-loop testing?");
  try { app.save(r482); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r483 = new Record(collection);
  r483.set("careerSlug", "embedded-systems-firmware-engineer");
  r483.set("questionNumber", 85);
  r483.set("question", "What is a digital twin in IoT?");
  r483.set("category", "Technical");
  r483.set("difficulty", "Advanced");
  r483.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is a digital twin in IoT?");
  try { app.save(r483); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r484 = new Record(collection);
  r484.set("careerSlug", "embedded-systems-firmware-engineer");
  r484.set("questionNumber", 86);
  r484.set("question", "What is AUTOSAR?");
  r484.set("category", "Technical");
  r484.set("difficulty", "Advanced");
  r484.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is AUTOSAR?");
  try { app.save(r484); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r485 = new Record(collection);
  r485.set("careerSlug", "embedded-systems-firmware-engineer");
  r485.set("questionNumber", 87);
  r485.set("question", "What is CAN FD?");
  r485.set("category", "Behavioral");
  r485.set("difficulty", "Advanced");
  r485.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is CAN FD?");
  try { app.save(r485); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r486 = new Record(collection);
  r486.set("careerSlug", "embedded-systems-firmware-engineer");
  r486.set("questionNumber", 88);
  r486.set("question", "What is LIN bus?");
  r486.set("category", "Technical");
  r486.set("difficulty", "Advanced");
  r486.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is LIN bus?");
  try { app.save(r486); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r487 = new Record(collection);
  r487.set("careerSlug", "embedded-systems-firmware-engineer");
  r487.set("questionNumber", 89);
  r487.set("question", "What is FlexRay?");
  r487.set("category", "Technical");
  r487.set("difficulty", "Advanced");
  r487.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is FlexRay?");
  try { app.save(r487); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r488 = new Record(collection);
  r488.set("careerSlug", "embedded-systems-firmware-engineer");
  r488.set("questionNumber", 90);
  r488.set("question", "What is functional safety (ISO 26262)?");
  r488.set("category", "System Design");
  r488.set("difficulty", "Advanced");
  r488.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is functional safety (ISO 26262)?");
  try { app.save(r488); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r489 = new Record(collection);
  r489.set("careerSlug", "embedded-systems-firmware-engineer");
  r489.set("questionNumber", 91);
  r489.set("question", "What is ASIL level?");
  r489.set("category", "Technical");
  r489.set("difficulty", "Advanced");
  r489.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is ASIL level?");
  try { app.save(r489); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r490 = new Record(collection);
  r490.set("careerSlug", "embedded-systems-firmware-engineer");
  r490.set("questionNumber", 92);
  r490.set("question", "What is FMEA?");
  r490.set("category", "Technical");
  r490.set("difficulty", "Advanced");
  r490.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is FMEA?");
  try { app.save(r490); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r491 = new Record(collection);
  r491.set("careerSlug", "embedded-systems-firmware-engineer");
  r491.set("questionNumber", 93);
  r491.set("question", "What is memory protection unit (MPU)?");
  r491.set("category", "Behavioral");
  r491.set("difficulty", "Advanced");
  r491.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is memory protection unit (MPU)?");
  try { app.save(r491); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r492 = new Record(collection);
  r492.set("careerSlug", "embedded-systems-firmware-engineer");
  r492.set("questionNumber", 94);
  r492.set("question", "What is cache in embedded processors?");
  r492.set("category", "Technical");
  r492.set("difficulty", "Advanced");
  r492.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is cache in embedded processors?");
  try { app.save(r492); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r493 = new Record(collection);
  r493.set("careerSlug", "embedded-systems-firmware-engineer");
  r493.set("questionNumber", 95);
  r493.set("question", "What is pipeline in ARM?");
  r493.set("category", "Technical");
  r493.set("difficulty", "Advanced");
  r493.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is pipeline in ARM?");
  try { app.save(r493); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r494 = new Record(collection);
  r494.set("careerSlug", "embedded-systems-firmware-engineer");
  r494.set("questionNumber", 96);
  r494.set("question", "What is Thumb instruction set?");
  r494.set("category", "System Design");
  r494.set("difficulty", "Advanced");
  r494.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is Thumb instruction set?");
  try { app.save(r494); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r495 = new Record(collection);
  r495.set("careerSlug", "embedded-systems-firmware-engineer");
  r495.set("questionNumber", 97);
  r495.set("question", "What is cortex-M0 vs M3 vs M4 vs M7?");
  r495.set("category", "Technical");
  r495.set("difficulty", "Advanced");
  r495.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is cortex-M0 vs M3 vs M4 vs M7?");
  try { app.save(r495); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r496 = new Record(collection);
  r496.set("careerSlug", "embedded-systems-firmware-engineer");
  r496.set("questionNumber", 98);
  r496.set("question", "What is FPU in ARM?");
  r496.set("category", "Technical");
  r496.set("difficulty", "Advanced");
  r496.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is FPU in ARM?");
  try { app.save(r496); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r497 = new Record(collection);
  r497.set("careerSlug", "embedded-systems-firmware-engineer");
  r497.set("questionNumber", 99);
  r497.set("question", "What is compiler optimization flags in embedded (-O0, -O2, -Os)?");
  r497.set("category", "Behavioral");
  r497.set("difficulty", "Advanced");
  r497.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is compiler optimization flags in embedded (-O0, -O2, -Os)?");
  try { app.save(r497); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r498 = new Record(collection);
  r498.set("careerSlug", "embedded-systems-firmware-engineer");
  r498.set("questionNumber", 100);
  r498.set("question", "What is cross-compilation?");
  r498.set("category", "Technical");
  r498.set("difficulty", "Advanced");
  r498.set("explanation", "Advanced level question for Embedded Systems / Firmware Engineer. What is cross-compilation?");
  try { app.save(r498); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
