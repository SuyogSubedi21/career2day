/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("careerInterviewQuestions");

  const r0 = new Record(collection);
  r0.set("careerSlug", "data-scientist");
  r0.set("questionNumber", 1);
  r0.set("question", "What is the difference between supervised and unsupervised learning?");
  r0.set("category", "Technical");
  r0.set("difficulty", "Beginner");
  r0.set("explanation", "Beginner level question for Data Scientist. What is the difference between supervised and unsupervised learning?");
  try { app.save(r0); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r1 = new Record(collection);
  r1.set("careerSlug", "data-scientist");
  r1.set("questionNumber", 2);
  r1.set("question", "Explain the bias-variance tradeoff.");
  r1.set("category", "Technical");
  r1.set("difficulty", "Beginner");
  r1.set("explanation", "Beginner level question for Data Scientist. Explain the bias-variance tradeoff.");
  try { app.save(r1); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r2 = new Record(collection);
  r2.set("careerSlug", "data-scientist");
  r2.set("questionNumber", 3);
  r2.set("question", "What is cross-validation?");
  r2.set("category", "Behavioral");
  r2.set("difficulty", "Beginner");
  r2.set("explanation", "Beginner level question for Data Scientist. What is cross-validation?");
  try { app.save(r2); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r3 = new Record(collection);
  r3.set("careerSlug", "data-scientist");
  r3.set("questionNumber", 4);
  r3.set("question", "What is a p-value?");
  r3.set("category", "Technical");
  r3.set("difficulty", "Beginner");
  r3.set("explanation", "Beginner level question for Data Scientist. What is a p-value?");
  try { app.save(r3); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r4 = new Record(collection);
  r4.set("careerSlug", "data-scientist");
  r4.set("questionNumber", 5);
  r4.set("question", "What is statistical significance?");
  r4.set("category", "Technical");
  r4.set("difficulty", "Beginner");
  r4.set("explanation", "Beginner level question for Data Scientist. What is statistical significance?");
  try { app.save(r4); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r5 = new Record(collection);
  r5.set("careerSlug", "data-scientist");
  r5.set("questionNumber", 6);
  r5.set("question", "What is Type I and Type II error?");
  r5.set("category", "System Design");
  r5.set("difficulty", "Beginner");
  r5.set("explanation", "Beginner level question for Data Scientist. What is Type I and Type II error?");
  try { app.save(r5); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r6 = new Record(collection);
  r6.set("careerSlug", "data-scientist");
  r6.set("questionNumber", 7);
  r6.set("question", "What is A/B testing?");
  r6.set("category", "Technical");
  r6.set("difficulty", "Beginner");
  r6.set("explanation", "Beginner level question for Data Scientist. What is A/B testing?");
  try { app.save(r6); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r7 = new Record(collection);
  r7.set("careerSlug", "data-scientist");
  r7.set("questionNumber", 8);
  r7.set("question", "What is the central limit theorem?");
  r7.set("category", "Technical");
  r7.set("difficulty", "Beginner");
  r7.set("explanation", "Beginner level question for Data Scientist. What is the central limit theorem?");
  try { app.save(r7); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r8 = new Record(collection);
  r8.set("careerSlug", "data-scientist");
  r8.set("questionNumber", 9);
  r8.set("question", "What is normal distribution?");
  r8.set("category", "Behavioral");
  r8.set("difficulty", "Beginner");
  r8.set("explanation", "Beginner level question for Data Scientist. What is normal distribution?");
  try { app.save(r8); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r9 = new Record(collection);
  r9.set("careerSlug", "data-scientist");
  r9.set("questionNumber", 10);
  r9.set("question", "What is skewness and kurtosis?");
  r9.set("category", "Technical");
  r9.set("difficulty", "Beginner");
  r9.set("explanation", "Beginner level question for Data Scientist. What is skewness and kurtosis?");
  try { app.save(r9); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r10 = new Record(collection);
  r10.set("careerSlug", "data-scientist");
  r10.set("questionNumber", 11);
  r10.set("question", "What is hypothesis testing?");
  r10.set("category", "Technical");
  r10.set("difficulty", "Beginner");
  r10.set("explanation", "Beginner level question for Data Scientist. What is hypothesis testing?");
  try { app.save(r10); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r11 = new Record(collection);
  r11.set("careerSlug", "data-scientist");
  r11.set("questionNumber", 12);
  r11.set("question", "What is confidence interval?");
  r11.set("category", "System Design");
  r11.set("difficulty", "Beginner");
  r11.set("explanation", "Beginner level question for Data Scientist. What is confidence interval?");
  try { app.save(r11); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r12 = new Record(collection);
  r12.set("careerSlug", "data-scientist");
  r12.set("questionNumber", 13);
  r12.set("question", "What is correlation vs causation?");
  r12.set("category", "Technical");
  r12.set("difficulty", "Beginner");
  r12.set("explanation", "Beginner level question for Data Scientist. What is correlation vs causation?");
  try { app.save(r12); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r13 = new Record(collection);
  r13.set("careerSlug", "data-scientist");
  r13.set("questionNumber", 14);
  r13.set("question", "What is multicollinearity?");
  r13.set("category", "Technical");
  r13.set("difficulty", "Beginner");
  r13.set("explanation", "Beginner level question for Data Scientist. What is multicollinearity?");
  try { app.save(r13); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r14 = new Record(collection);
  r14.set("careerSlug", "data-scientist");
  r14.set("questionNumber", 15);
  r14.set("question", "What is Pearson vs Spearman correlation?");
  r14.set("category", "Behavioral");
  r14.set("difficulty", "Beginner");
  r14.set("explanation", "Beginner level question for Data Scientist. What is Pearson vs Spearman correlation?");
  try { app.save(r14); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r15 = new Record(collection);
  r15.set("careerSlug", "data-scientist");
  r15.set("questionNumber", 16);
  r15.set("question", "What is linear regression?");
  r15.set("category", "Technical");
  r15.set("difficulty", "Beginner");
  r15.set("explanation", "Beginner level question for Data Scientist. What is linear regression?");
  try { app.save(r15); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r16 = new Record(collection);
  r16.set("careerSlug", "data-scientist");
  r16.set("questionNumber", 17);
  r16.set("question", "What are the assumptions of linear regression?");
  r16.set("category", "Technical");
  r16.set("difficulty", "Beginner");
  r16.set("explanation", "Beginner level question for Data Scientist. What are the assumptions of linear regression?");
  try { app.save(r16); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r17 = new Record(collection);
  r17.set("careerSlug", "data-scientist");
  r17.set("questionNumber", 18);
  r17.set("question", "What is logistic regression?");
  r17.set("category", "System Design");
  r17.set("difficulty", "Beginner");
  r17.set("explanation", "Beginner level question for Data Scientist. What is logistic regression?");
  try { app.save(r17); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r18 = new Record(collection);
  r18.set("careerSlug", "data-scientist");
  r18.set("questionNumber", 19);
  r18.set("question", "What is decision tree?");
  r18.set("category", "Technical");
  r18.set("difficulty", "Beginner");
  r18.set("explanation", "Beginner level question for Data Scientist. What is decision tree?");
  try { app.save(r18); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r19 = new Record(collection);
  r19.set("careerSlug", "data-scientist");
  r19.set("questionNumber", 20);
  r19.set("question", "What is random forest?");
  r19.set("category", "Technical");
  r19.set("difficulty", "Beginner");
  r19.set("explanation", "Beginner level question for Data Scientist. What is random forest?");
  try { app.save(r19); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r20 = new Record(collection);
  r20.set("careerSlug", "data-scientist");
  r20.set("questionNumber", 21);
  r20.set("question", "What is gradient boosting?");
  r20.set("category", "Behavioral");
  r20.set("difficulty", "Beginner");
  r20.set("explanation", "Beginner level question for Data Scientist. What is gradient boosting?");
  try { app.save(r20); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r21 = new Record(collection);
  r21.set("careerSlug", "data-scientist");
  r21.set("questionNumber", 22);
  r21.set("question", "What is XGBoost?");
  r21.set("category", "Technical");
  r21.set("difficulty", "Beginner");
  r21.set("explanation", "Beginner level question for Data Scientist. What is XGBoost?");
  try { app.save(r21); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r22 = new Record(collection);
  r22.set("careerSlug", "data-scientist");
  r22.set("questionNumber", 23);
  r22.set("question", "What is k-means clustering?");
  r22.set("category", "Technical");
  r22.set("difficulty", "Beginner");
  r22.set("explanation", "Beginner level question for Data Scientist. What is k-means clustering?");
  try { app.save(r22); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r23 = new Record(collection);
  r23.set("careerSlug", "data-scientist");
  r23.set("questionNumber", 24);
  r23.set("question", "What is DBSCAN?");
  r23.set("category", "System Design");
  r23.set("difficulty", "Beginner");
  r23.set("explanation", "Beginner level question for Data Scientist. What is DBSCAN?");
  try { app.save(r23); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r24 = new Record(collection);
  r24.set("careerSlug", "data-scientist");
  r24.set("questionNumber", 25);
  r24.set("question", "What is hierarchical clustering?");
  r24.set("category", "Technical");
  r24.set("difficulty", "Beginner");
  r24.set("explanation", "Beginner level question for Data Scientist. What is hierarchical clustering?");
  try { app.save(r24); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r25 = new Record(collection);
  r25.set("careerSlug", "data-scientist");
  r25.set("questionNumber", 26);
  r25.set("question", "What is PCA?");
  r25.set("category", "Technical");
  r25.set("difficulty", "Beginner");
  r25.set("explanation", "Beginner level question for Data Scientist. What is PCA?");
  try { app.save(r25); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r26 = new Record(collection);
  r26.set("careerSlug", "data-scientist");
  r26.set("questionNumber", 27);
  r26.set("question", "What is t-SNE?");
  r26.set("category", "Behavioral");
  r26.set("difficulty", "Beginner");
  r26.set("explanation", "Beginner level question for Data Scientist. What is t-SNE?");
  try { app.save(r26); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r27 = new Record(collection);
  r27.set("careerSlug", "data-scientist");
  r27.set("questionNumber", 28);
  r27.set("question", "What is UMAP?");
  r27.set("category", "Technical");
  r27.set("difficulty", "Beginner");
  r27.set("explanation", "Beginner level question for Data Scientist. What is UMAP?");
  try { app.save(r27); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r28 = new Record(collection);
  r28.set("careerSlug", "data-scientist");
  r28.set("questionNumber", 29);
  r28.set("question", "What is feature selection?");
  r28.set("category", "Technical");
  r28.set("difficulty", "Beginner");
  r28.set("explanation", "Beginner level question for Data Scientist. What is feature selection?");
  try { app.save(r28); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r29 = new Record(collection);
  r29.set("careerSlug", "data-scientist");
  r29.set("questionNumber", 30);
  r29.set("question", "What is feature importance?");
  r29.set("category", "System Design");
  r29.set("difficulty", "Beginner");
  r29.set("explanation", "Beginner level question for Data Scientist. What is feature importance?");
  try { app.save(r29); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r30 = new Record(collection);
  r30.set("careerSlug", "data-scientist");
  r30.set("questionNumber", 31);
  r30.set("question", "What is SHAP?");
  r30.set("category", "Technical");
  r30.set("difficulty", "Beginner");
  r30.set("explanation", "Beginner level question for Data Scientist. What is SHAP?");
  try { app.save(r30); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r31 = new Record(collection);
  r31.set("careerSlug", "data-scientist");
  r31.set("questionNumber", 32);
  r31.set("question", "What is overfitting?");
  r31.set("category", "Technical");
  r31.set("difficulty", "Beginner");
  r31.set("explanation", "Beginner level question for Data Scientist. What is overfitting?");
  try { app.save(r31); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r32 = new Record(collection);
  r32.set("careerSlug", "data-scientist");
  r32.set("questionNumber", 33);
  r32.set("question", "What is regularization?");
  r32.set("category", "Behavioral");
  r32.set("difficulty", "Beginner");
  r32.set("explanation", "Beginner level question for Data Scientist. What is regularization?");
  try { app.save(r32); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r33 = new Record(collection);
  r33.set("careerSlug", "data-scientist");
  r33.set("questionNumber", 34);
  r33.set("question", "What is cross-entropy loss?");
  r33.set("category", "Technical");
  r33.set("difficulty", "Intermediate");
  r33.set("explanation", "Intermediate level question for Data Scientist. What is cross-entropy loss?");
  try { app.save(r33); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r34 = new Record(collection);
  r34.set("careerSlug", "data-scientist");
  r34.set("questionNumber", 35);
  r34.set("question", "What is mean squared error?");
  r34.set("category", "Technical");
  r34.set("difficulty", "Intermediate");
  r34.set("explanation", "Intermediate level question for Data Scientist. What is mean squared error?");
  try { app.save(r34); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r35 = new Record(collection);
  r35.set("careerSlug", "data-scientist");
  r35.set("questionNumber", 36);
  r35.set("question", "What is R-squared?");
  r35.set("category", "System Design");
  r35.set("difficulty", "Intermediate");
  r35.set("explanation", "Intermediate level question for Data Scientist. What is R-squared?");
  try { app.save(r35); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r36 = new Record(collection);
  r36.set("careerSlug", "data-scientist");
  r36.set("questionNumber", 37);
  r36.set("question", "What is adjusted R-squared?");
  r36.set("category", "Technical");
  r36.set("difficulty", "Intermediate");
  r36.set("explanation", "Intermediate level question for Data Scientist. What is adjusted R-squared?");
  try { app.save(r36); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r37 = new Record(collection);
  r37.set("careerSlug", "data-scientist");
  r37.set("questionNumber", 38);
  r37.set("question", "What is the curse of dimensionality?");
  r37.set("category", "Technical");
  r37.set("difficulty", "Intermediate");
  r37.set("explanation", "Intermediate level question for Data Scientist. What is the curse of dimensionality?");
  try { app.save(r37); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r38 = new Record(collection);
  r38.set("careerSlug", "data-scientist");
  r38.set("questionNumber", 39);
  r38.set("question", "What is data imputation?");
  r38.set("category", "Behavioral");
  r38.set("difficulty", "Intermediate");
  r38.set("explanation", "Intermediate level question for Data Scientist. What is data imputation?");
  try { app.save(r38); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r39 = new Record(collection);
  r39.set("careerSlug", "data-scientist");
  r39.set("questionNumber", 40);
  r39.set("question", "What is outlier detection?");
  r39.set("category", "Technical");
  r39.set("difficulty", "Intermediate");
  r39.set("explanation", "Intermediate level question for Data Scientist. What is outlier detection?");
  try { app.save(r39); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r40 = new Record(collection);
  r40.set("careerSlug", "data-scientist");
  r40.set("questionNumber", 41);
  r40.set("question", "What is chi-squared test?");
  r40.set("category", "Technical");
  r40.set("difficulty", "Intermediate");
  r40.set("explanation", "Intermediate level question for Data Scientist. What is chi-squared test?");
  try { app.save(r40); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r41 = new Record(collection);
  r41.set("careerSlug", "data-scientist");
  r41.set("questionNumber", 42);
  r41.set("question", "What is ANOVA?");
  r41.set("category", "System Design");
  r41.set("difficulty", "Intermediate");
  r41.set("explanation", "Intermediate level question for Data Scientist. What is ANOVA?");
  try { app.save(r41); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r42 = new Record(collection);
  r42.set("careerSlug", "data-scientist");
  r42.set("questionNumber", 43);
  r42.set("question", "What is t-test?");
  r42.set("category", "Technical");
  r42.set("difficulty", "Intermediate");
  r42.set("explanation", "Intermediate level question for Data Scientist. What is t-test?");
  try { app.save(r42); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r43 = new Record(collection);
  r43.set("careerSlug", "data-scientist");
  r43.set("questionNumber", 44);
  r43.set("question", "What is z-test?");
  r43.set("category", "Technical");
  r43.set("difficulty", "Intermediate");
  r43.set("explanation", "Intermediate level question for Data Scientist. What is z-test?");
  try { app.save(r43); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r44 = new Record(collection);
  r44.set("careerSlug", "data-scientist");
  r44.set("questionNumber", 45);
  r44.set("question", "What is Bayes theorem?");
  r44.set("category", "Behavioral");
  r44.set("difficulty", "Intermediate");
  r44.set("explanation", "Intermediate level question for Data Scientist. What is Bayes theorem?");
  try { app.save(r44); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r45 = new Record(collection);
  r45.set("careerSlug", "data-scientist");
  r45.set("questionNumber", 46);
  r45.set("question", "What is Naive Bayes?");
  r45.set("category", "Technical");
  r45.set("difficulty", "Intermediate");
  r45.set("explanation", "Intermediate level question for Data Scientist. What is Naive Bayes?");
  try { app.save(r45); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r46 = new Record(collection);
  r46.set("careerSlug", "data-scientist");
  r46.set("questionNumber", 47);
  r46.set("question", "What is maximum likelihood estimation?");
  r46.set("category", "Technical");
  r46.set("difficulty", "Intermediate");
  r46.set("explanation", "Intermediate level question for Data Scientist. What is maximum likelihood estimation?");
  try { app.save(r46); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r47 = new Record(collection);
  r47.set("careerSlug", "data-scientist");
  r47.set("questionNumber", 48);
  r47.set("question", "What is bootstrapping?");
  r47.set("category", "System Design");
  r47.set("difficulty", "Intermediate");
  r47.set("explanation", "Intermediate level question for Data Scientist. What is bootstrapping?");
  try { app.save(r47); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r48 = new Record(collection);
  r48.set("careerSlug", "data-scientist");
  r48.set("questionNumber", 49);
  r48.set("question", "What is Monte Carlo simulation?");
  r48.set("category", "Technical");
  r48.set("difficulty", "Intermediate");
  r48.set("explanation", "Intermediate level question for Data Scientist. What is Monte Carlo simulation?");
  try { app.save(r48); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r49 = new Record(collection);
  r49.set("careerSlug", "data-scientist");
  r49.set("questionNumber", 50);
  r49.set("question", "What is time series analysis?");
  r49.set("category", "Technical");
  r49.set("difficulty", "Intermediate");
  r49.set("explanation", "Intermediate level question for Data Scientist. What is time series analysis?");
  try { app.save(r49); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r50 = new Record(collection);
  r50.set("careerSlug", "data-scientist");
  r50.set("questionNumber", 51);
  r50.set("question", "What is stationarity?");
  r50.set("category", "Behavioral");
  r50.set("difficulty", "Intermediate");
  r50.set("explanation", "Intermediate level question for Data Scientist. What is stationarity?");
  try { app.save(r50); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r51 = new Record(collection);
  r51.set("careerSlug", "data-scientist");
  r51.set("questionNumber", 52);
  r51.set("question", "What is autocorrelation?");
  r51.set("category", "Technical");
  r51.set("difficulty", "Intermediate");
  r51.set("explanation", "Intermediate level question for Data Scientist. What is autocorrelation?");
  try { app.save(r51); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r52 = new Record(collection);
  r52.set("careerSlug", "data-scientist");
  r52.set("questionNumber", 53);
  r52.set("question", "What is ARIMA?");
  r52.set("category", "Technical");
  r52.set("difficulty", "Intermediate");
  r52.set("explanation", "Intermediate level question for Data Scientist. What is ARIMA?");
  try { app.save(r52); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r53 = new Record(collection);
  r53.set("careerSlug", "data-scientist");
  r53.set("questionNumber", 54);
  r53.set("question", "What is seasonality?");
  r53.set("category", "System Design");
  r53.set("difficulty", "Intermediate");
  r53.set("explanation", "Intermediate level question for Data Scientist. What is seasonality?");
  try { app.save(r53); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r54 = new Record(collection);
  r54.set("careerSlug", "data-scientist");
  r54.set("questionNumber", 55);
  r54.set("question", "What is trend decomposition?");
  r54.set("category", "Technical");
  r54.set("difficulty", "Intermediate");
  r54.set("explanation", "Intermediate level question for Data Scientist. What is trend decomposition?");
  try { app.save(r54); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r55 = new Record(collection);
  r55.set("careerSlug", "data-scientist");
  r55.set("questionNumber", 56);
  r55.set("question", "What is cohort analysis?");
  r55.set("category", "Technical");
  r55.set("difficulty", "Intermediate");
  r55.set("explanation", "Intermediate level question for Data Scientist. What is cohort analysis?");
  try { app.save(r55); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r56 = new Record(collection);
  r56.set("careerSlug", "data-scientist");
  r56.set("questionNumber", 57);
  r56.set("question", "What is RFM analysis?");
  r56.set("category", "Behavioral");
  r56.set("difficulty", "Intermediate");
  r56.set("explanation", "Intermediate level question for Data Scientist. What is RFM analysis?");
  try { app.save(r56); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r57 = new Record(collection);
  r57.set("careerSlug", "data-scientist");
  r57.set("questionNumber", 58);
  r57.set("question", "What is funnel analysis?");
  r57.set("category", "Technical");
  r57.set("difficulty", "Intermediate");
  r57.set("explanation", "Intermediate level question for Data Scientist. What is funnel analysis?");
  try { app.save(r57); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r58 = new Record(collection);
  r58.set("careerSlug", "data-scientist");
  r58.set("questionNumber", 59);
  r58.set("question", "What is LTV (Lifetime Value)?");
  r58.set("category", "Technical");
  r58.set("difficulty", "Intermediate");
  r58.set("explanation", "Intermediate level question for Data Scientist. What is LTV (Lifetime Value)?");
  try { app.save(r58); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r59 = new Record(collection);
  r59.set("careerSlug", "data-scientist");
  r59.set("questionNumber", 60);
  r59.set("question", "What is CAC?");
  r59.set("category", "System Design");
  r59.set("difficulty", "Intermediate");
  r59.set("explanation", "Intermediate level question for Data Scientist. What is CAC?");
  try { app.save(r59); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r60 = new Record(collection);
  r60.set("careerSlug", "data-scientist");
  r60.set("questionNumber", 61);
  r60.set("question", "What is churn?");
  r60.set("category", "Technical");
  r60.set("difficulty", "Intermediate");
  r60.set("explanation", "Intermediate level question for Data Scientist. What is churn?");
  try { app.save(r60); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r61 = new Record(collection);
  r61.set("careerSlug", "data-scientist");
  r61.set("questionNumber", 62);
  r61.set("question", "What is NPS?");
  r61.set("category", "Technical");
  r61.set("difficulty", "Intermediate");
  r61.set("explanation", "Intermediate level question for Data Scientist. What is NPS?");
  try { app.save(r61); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r62 = new Record(collection);
  r62.set("careerSlug", "data-scientist");
  r62.set("questionNumber", 63);
  r62.set("question", "What is data cleaning?");
  r62.set("category", "Behavioral");
  r62.set("difficulty", "Intermediate");
  r62.set("explanation", "Intermediate level question for Data Scientist. What is data cleaning?");
  try { app.save(r62); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r63 = new Record(collection);
  r63.set("careerSlug", "data-scientist");
  r63.set("questionNumber", 64);
  r63.set("question", "What is EDA (Exploratory Data Analysis)?");
  r63.set("category", "Technical");
  r63.set("difficulty", "Intermediate");
  r63.set("explanation", "Intermediate level question for Data Scientist. What is EDA (Exploratory Data Analysis)?");
  try { app.save(r63); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r64 = new Record(collection);
  r64.set("careerSlug", "data-scientist");
  r64.set("questionNumber", 65);
  r64.set("question", "What is a violin plot?");
  r64.set("category", "Technical");
  r64.set("difficulty", "Intermediate");
  r64.set("explanation", "Intermediate level question for Data Scientist. What is a violin plot?");
  try { app.save(r64); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r65 = new Record(collection);
  r65.set("careerSlug", "data-scientist");
  r65.set("questionNumber", 66);
  r65.set("question", "What is a box plot?");
  r65.set("category", "System Design");
  r65.set("difficulty", "Intermediate");
  r65.set("explanation", "Intermediate level question for Data Scientist. What is a box plot?");
  try { app.save(r65); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r66 = new Record(collection);
  r66.set("careerSlug", "data-scientist");
  r66.set("questionNumber", 67);
  r66.set("question", "What is a heatmap?");
  r66.set("category", "Technical");
  r66.set("difficulty", "Intermediate");
  r66.set("explanation", "Intermediate level question for Data Scientist. What is a heatmap?");
  try { app.save(r66); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r67 = new Record(collection);
  r67.set("careerSlug", "data-scientist");
  r67.set("questionNumber", 68);
  r67.set("question", "What is Tableau?");
  r67.set("category", "Technical");
  r67.set("difficulty", "Advanced");
  r67.set("explanation", "Advanced level question for Data Scientist. What is Tableau?");
  try { app.save(r67); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r68 = new Record(collection);
  r68.set("careerSlug", "data-scientist");
  r68.set("questionNumber", 69);
  r68.set("question", "What is Power BI?");
  r68.set("category", "Behavioral");
  r68.set("difficulty", "Advanced");
  r68.set("explanation", "Advanced level question for Data Scientist. What is Power BI?");
  try { app.save(r68); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r69 = new Record(collection);
  r69.set("careerSlug", "data-scientist");
  r69.set("questionNumber", 70);
  r69.set("question", "What is Streamlit?");
  r69.set("category", "Technical");
  r69.set("difficulty", "Advanced");
  r69.set("explanation", "Advanced level question for Data Scientist. What is Streamlit?");
  try { app.save(r69); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r70 = new Record(collection);
  r70.set("careerSlug", "data-scientist");
  r70.set("questionNumber", 71);
  r70.set("question", "What is Dash?");
  r70.set("category", "Technical");
  r70.set("difficulty", "Advanced");
  r70.set("explanation", "Advanced level question for Data Scientist. What is Dash?");
  try { app.save(r70); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r71 = new Record(collection);
  r71.set("careerSlug", "data-scientist");
  r71.set("questionNumber", 72);
  r71.set("question", "What is SQL window function?");
  r71.set("category", "System Design");
  r71.set("difficulty", "Advanced");
  r71.set("explanation", "Advanced level question for Data Scientist. What is SQL window function?");
  try { app.save(r71); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r72 = new Record(collection);
  r72.set("careerSlug", "data-scientist");
  r72.set("questionNumber", 73);
  r72.set("question", "What is a CTE?");
  r72.set("category", "Technical");
  r72.set("difficulty", "Advanced");
  r72.set("explanation", "Advanced level question for Data Scientist. What is a CTE?");
  try { app.save(r72); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r73 = new Record(collection);
  r73.set("careerSlug", "data-scientist");
  r73.set("questionNumber", 74);
  r73.set("question", "What is GROUP BY vs PARTITION BY?");
  r73.set("category", "Technical");
  r73.set("difficulty", "Advanced");
  r73.set("explanation", "Advanced level question for Data Scientist. What is GROUP BY vs PARTITION BY?");
  try { app.save(r73); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r74 = new Record(collection);
  r74.set("careerSlug", "data-scientist");
  r74.set("questionNumber", 75);
  r74.set("question", "What is a join type?");
  r74.set("category", "Behavioral");
  r74.set("difficulty", "Advanced");
  r74.set("explanation", "Advanced level question for Data Scientist. What is a join type?");
  try { app.save(r74); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r75 = new Record(collection);
  r75.set("careerSlug", "data-scientist");
  r75.set("questionNumber", 76);
  r75.set("question", "What is subquery?");
  r75.set("category", "Technical");
  r75.set("difficulty", "Advanced");
  r75.set("explanation", "Advanced level question for Data Scientist. What is subquery?");
  try { app.save(r75); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r76 = new Record(collection);
  r76.set("careerSlug", "data-scientist");
  r76.set("questionNumber", 77);
  r76.set("question", "What is index in SQL?");
  r76.set("category", "Technical");
  r76.set("difficulty", "Advanced");
  r76.set("explanation", "Advanced level question for Data Scientist. What is index in SQL?");
  try { app.save(r76); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r77 = new Record(collection);
  r77.set("careerSlug", "data-scientist");
  r77.set("questionNumber", 78);
  r77.set("question", "What is the difference between RANK and DENSE_RANK?");
  r77.set("category", "System Design");
  r77.set("difficulty", "Advanced");
  r77.set("explanation", "Advanced level question for Data Scientist. What is the difference between RANK and DENSE_RANK?");
  try { app.save(r77); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r78 = new Record(collection);
  r78.set("careerSlug", "data-scientist");
  r78.set("questionNumber", 79);
  r78.set("question", "What is a Pandas DataFrame?");
  r78.set("category", "Technical");
  r78.set("difficulty", "Advanced");
  r78.set("explanation", "Advanced level question for Data Scientist. What is a Pandas DataFrame?");
  try { app.save(r78); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r79 = new Record(collection);
  r79.set("careerSlug", "data-scientist");
  r79.set("questionNumber", 80);
  r79.set("question", "What is groupby in Pandas?");
  r79.set("category", "Technical");
  r79.set("difficulty", "Advanced");
  r79.set("explanation", "Advanced level question for Data Scientist. What is groupby in Pandas?");
  try { app.save(r79); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r80 = new Record(collection);
  r80.set("careerSlug", "data-scientist");
  r80.set("questionNumber", 81);
  r80.set("question", "What is merge vs join in Pandas?");
  r80.set("category", "Behavioral");
  r80.set("difficulty", "Advanced");
  r80.set("explanation", "Advanced level question for Data Scientist. What is merge vs join in Pandas?");
  try { app.save(r80); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r81 = new Record(collection);
  r81.set("careerSlug", "data-scientist");
  r81.set("questionNumber", 82);
  r81.set("question", "What is apply vs map vs applymap?");
  r81.set("category", "Technical");
  r81.set("difficulty", "Advanced");
  r81.set("explanation", "Advanced level question for Data Scientist. What is apply vs map vs applymap?");
  try { app.save(r81); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r82 = new Record(collection);
  r82.set("careerSlug", "data-scientist");
  r82.set("questionNumber", 83);
  r82.set("question", "What is vectorization in NumPy?");
  r82.set("category", "Technical");
  r82.set("difficulty", "Advanced");
  r82.set("explanation", "Advanced level question for Data Scientist. What is vectorization in NumPy?");
  try { app.save(r82); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r83 = new Record(collection);
  r83.set("careerSlug", "data-scientist");
  r83.set("questionNumber", 84);
  r83.set("question", "What is broadcasting?");
  r83.set("category", "System Design");
  r83.set("difficulty", "Advanced");
  r83.set("explanation", "Advanced level question for Data Scientist. What is broadcasting?");
  try { app.save(r83); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r84 = new Record(collection);
  r84.set("careerSlug", "data-scientist");
  r84.set("questionNumber", 85);
  r84.set("question", "What is data normalization vs standardization?");
  r84.set("category", "Technical");
  r84.set("difficulty", "Advanced");
  r84.set("explanation", "Advanced level question for Data Scientist. What is data normalization vs standardization?");
  try { app.save(r84); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r85 = new Record(collection);
  r85.set("careerSlug", "data-scientist");
  r85.set("questionNumber", 86);
  r85.set("question", "What is one-hot encoding?");
  r85.set("category", "Technical");
  r85.set("difficulty", "Advanced");
  r85.set("explanation", "Advanced level question for Data Scientist. What is one-hot encoding?");
  try { app.save(r85); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r86 = new Record(collection);
  r86.set("careerSlug", "data-scientist");
  r86.set("questionNumber", 87);
  r86.set("question", "What is label encoding?");
  r86.set("category", "Behavioral");
  r86.set("difficulty", "Advanced");
  r86.set("explanation", "Advanced level question for Data Scientist. What is label encoding?");
  try { app.save(r86); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r87 = new Record(collection);
  r87.set("careerSlug", "data-scientist");
  r87.set("questionNumber", 88);
  r87.set("question", "What is a pipeline in scikit-learn?");
  r87.set("category", "Technical");
  r87.set("difficulty", "Advanced");
  r87.set("explanation", "Advanced level question for Data Scientist. What is a pipeline in scikit-learn?");
  try { app.save(r87); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r88 = new Record(collection);
  r88.set("careerSlug", "data-scientist");
  r88.set("questionNumber", 89);
  r88.set("question", "What is grid search?");
  r88.set("category", "Technical");
  r88.set("difficulty", "Advanced");
  r88.set("explanation", "Advanced level question for Data Scientist. What is grid search?");
  try { app.save(r88); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r89 = new Record(collection);
  r89.set("careerSlug", "data-scientist");
  r89.set("questionNumber", 90);
  r89.set("question", "What is class imbalance and SMOTE?");
  r89.set("category", "System Design");
  r89.set("difficulty", "Advanced");
  r89.set("explanation", "Advanced level question for Data Scientist. What is class imbalance and SMOTE?");
  try { app.save(r89); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r90 = new Record(collection);
  r90.set("careerSlug", "data-scientist");
  r90.set("questionNumber", 91);
  r90.set("question", "What is ROC curve?");
  r90.set("category", "Technical");
  r90.set("difficulty", "Advanced");
  r90.set("explanation", "Advanced level question for Data Scientist. What is ROC curve?");
  try { app.save(r90); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r91 = new Record(collection);
  r91.set("careerSlug", "data-scientist");
  r91.set("questionNumber", 92);
  r91.set("question", "What is AUC?");
  r91.set("category", "Technical");
  r91.set("difficulty", "Advanced");
  r91.set("explanation", "Advanced level question for Data Scientist. What is AUC?");
  try { app.save(r91); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r92 = new Record(collection);
  r92.set("careerSlug", "data-scientist");
  r92.set("questionNumber", 93);
  r92.set("question", "What is precision-recall tradeoff?");
  r92.set("category", "Behavioral");
  r92.set("difficulty", "Advanced");
  r92.set("explanation", "Advanced level question for Data Scientist. What is precision-recall tradeoff?");
  try { app.save(r92); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r93 = new Record(collection);
  r93.set("careerSlug", "data-scientist");
  r93.set("questionNumber", 94);
  r93.set("question", "What is the F1 score?");
  r93.set("category", "Technical");
  r93.set("difficulty", "Advanced");
  r93.set("explanation", "Advanced level question for Data Scientist. What is the F1 score?");
  try { app.save(r93); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r94 = new Record(collection);
  r94.set("careerSlug", "data-scientist");
  r94.set("questionNumber", 95);
  r94.set("question", "What is the confusion matrix?");
  r94.set("category", "Technical");
  r94.set("difficulty", "Advanced");
  r94.set("explanation", "Advanced level question for Data Scientist. What is the confusion matrix?");
  try { app.save(r94); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r95 = new Record(collection);
  r95.set("careerSlug", "data-scientist");
  r95.set("questionNumber", 96);
  r95.set("question", "What is model deployment for data scientists?");
  r95.set("category", "System Design");
  r95.set("difficulty", "Advanced");
  r95.set("explanation", "Advanced level question for Data Scientist. What is model deployment for data scientists?");
  try { app.save(r95); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r96 = new Record(collection);
  r96.set("careerSlug", "data-scientist");
  r96.set("questionNumber", 97);
  r96.set("question", "What is Streamlit vs Gradio for demos?");
  r96.set("category", "Technical");
  r96.set("difficulty", "Advanced");
  r96.set("explanation", "Advanced level question for Data Scientist. What is Streamlit vs Gradio for demos?");
  try { app.save(r96); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r97 = new Record(collection);
  r97.set("careerSlug", "data-scientist");
  r97.set("questionNumber", 98);
  r97.set("question", "What is Jupyter vs VS Code for data science?");
  r97.set("category", "Technical");
  r97.set("difficulty", "Advanced");
  r97.set("explanation", "Advanced level question for Data Scientist. What is Jupyter vs VS Code for data science?");
  try { app.save(r97); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r98 = new Record(collection);
  r98.set("careerSlug", "data-scientist");
  r98.set("questionNumber", 99);
  r98.set("question", "What is dbt for data scientists?");
  r98.set("category", "Behavioral");
  r98.set("difficulty", "Advanced");
  r98.set("explanation", "Advanced level question for Data Scientist. What is dbt for data scientists?");
  try { app.save(r98); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r99 = new Record(collection);
  r99.set("careerSlug", "data-scientist");
  r99.set("questionNumber", 100);
  r99.set("question", "What is the data science workflow?");
  r99.set("category", "Technical");
  r99.set("difficulty", "Advanced");
  r99.set("explanation", "Advanced level question for Data Scientist. What is the data science workflow?");
  try { app.save(r99); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r100 = new Record(collection);
  r100.set("careerSlug", "backend-engineer");
  r100.set("questionNumber", 1);
  r100.set("question", "What is REST?");
  r100.set("category", "Technical");
  r100.set("difficulty", "Beginner");
  r100.set("explanation", "Beginner level question for Backend Engineer. What is REST?");
  try { app.save(r100); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r101 = new Record(collection);
  r101.set("careerSlug", "backend-engineer");
  r101.set("questionNumber", 2);
  r101.set("question", "What are HTTP methods?");
  r101.set("category", "Technical");
  r101.set("difficulty", "Beginner");
  r101.set("explanation", "Beginner level question for Backend Engineer. What are HTTP methods?");
  try { app.save(r101); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r102 = new Record(collection);
  r102.set("careerSlug", "backend-engineer");
  r102.set("questionNumber", 3);
  r102.set("question", "What is HTTP status codes?");
  r102.set("category", "Behavioral");
  r102.set("difficulty", "Beginner");
  r102.set("explanation", "Beginner level question for Backend Engineer. What is HTTP status codes?");
  try { app.save(r102); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r103 = new Record(collection);
  r103.set("careerSlug", "backend-engineer");
  r103.set("questionNumber", 4);
  r103.set("question", "What is CRUD?");
  r103.set("category", "Technical");
  r103.set("difficulty", "Beginner");
  r103.set("explanation", "Beginner level question for Backend Engineer. What is CRUD?");
  try { app.save(r103); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r104 = new Record(collection);
  r104.set("careerSlug", "backend-engineer");
  r104.set("questionNumber", 5);
  r104.set("question", "What is authentication vs authorization?");
  r104.set("category", "Technical");
  r104.set("difficulty", "Beginner");
  r104.set("explanation", "Beginner level question for Backend Engineer. What is authentication vs authorization?");
  try { app.save(r104); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r105 = new Record(collection);
  r105.set("careerSlug", "backend-engineer");
  r105.set("questionNumber", 6);
  r105.set("question", "What is JWT?");
  r105.set("category", "System Design");
  r105.set("difficulty", "Beginner");
  r105.set("explanation", "Beginner level question for Backend Engineer. What is JWT?");
  try { app.save(r105); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r106 = new Record(collection);
  r106.set("careerSlug", "backend-engineer");
  r106.set("questionNumber", 7);
  r106.set("question", "What is OAuth 2.0?");
  r106.set("category", "Technical");
  r106.set("difficulty", "Beginner");
  r106.set("explanation", "Beginner level question for Backend Engineer. What is OAuth 2.0?");
  try { app.save(r106); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r107 = new Record(collection);
  r107.set("careerSlug", "backend-engineer");
  r107.set("questionNumber", 8);
  r107.set("question", "What is session management?");
  r107.set("category", "Technical");
  r107.set("difficulty", "Beginner");
  r107.set("explanation", "Beginner level question for Backend Engineer. What is session management?");
  try { app.save(r107); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r108 = new Record(collection);
  r108.set("careerSlug", "backend-engineer");
  r108.set("questionNumber", 9);
  r108.set("question", "What is CORS?");
  r108.set("category", "Behavioral");
  r108.set("difficulty", "Beginner");
  r108.set("explanation", "Beginner level question for Backend Engineer. What is CORS?");
  try { app.save(r108); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r109 = new Record(collection);
  r109.set("careerSlug", "backend-engineer");
  r109.set("questionNumber", 10);
  r109.set("question", "What is middleware?");
  r109.set("category", "Technical");
  r109.set("difficulty", "Beginner");
  r109.set("explanation", "Beginner level question for Backend Engineer. What is middleware?");
  try { app.save(r109); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r110 = new Record(collection);
  r110.set("careerSlug", "backend-engineer");
  r110.set("questionNumber", 11);
  r110.set("question", "What is rate limiting?");
  r110.set("category", "Technical");
  r110.set("difficulty", "Beginner");
  r110.set("explanation", "Beginner level question for Backend Engineer. What is rate limiting?");
  try { app.save(r110); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r111 = new Record(collection);
  r111.set("careerSlug", "backend-engineer");
  r111.set("questionNumber", 12);
  r111.set("question", "What is API versioning?");
  r111.set("category", "System Design");
  r111.set("difficulty", "Beginner");
  r111.set("explanation", "Beginner level question for Backend Engineer. What is API versioning?");
  try { app.save(r111); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r112 = new Record(collection);
  r112.set("careerSlug", "backend-engineer");
  r112.set("questionNumber", 13);
  r112.set("question", "What is GraphQL?");
  r112.set("category", "Technical");
  r112.set("difficulty", "Beginner");
  r112.set("explanation", "Beginner level question for Backend Engineer. What is GraphQL?");
  try { app.save(r112); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r113 = new Record(collection);
  r113.set("careerSlug", "backend-engineer");
  r113.set("questionNumber", 14);
  r113.set("question", "What is gRPC?");
  r113.set("category", "Technical");
  r113.set("difficulty", "Beginner");
  r113.set("explanation", "Beginner level question for Backend Engineer. What is gRPC?");
  try { app.save(r113); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r114 = new Record(collection);
  r114.set("careerSlug", "backend-engineer");
  r114.set("questionNumber", 15);
  r114.set("question", "What is WebSocket?");
  r114.set("category", "Behavioral");
  r114.set("difficulty", "Beginner");
  r114.set("explanation", "Beginner level question for Backend Engineer. What is WebSocket?");
  try { app.save(r114); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r115 = new Record(collection);
  r115.set("careerSlug", "backend-engineer");
  r115.set("questionNumber", 16);
  r115.set("question", "What is SSE?");
  r115.set("category", "Technical");
  r115.set("difficulty", "Beginner");
  r115.set("explanation", "Beginner level question for Backend Engineer. What is SSE?");
  try { app.save(r115); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r116 = new Record(collection);
  r116.set("careerSlug", "backend-engineer");
  r116.set("questionNumber", 17);
  r116.set("question", "What is a database index?");
  r116.set("category", "Technical");
  r116.set("difficulty", "Beginner");
  r116.set("explanation", "Beginner level question for Backend Engineer. What is a database index?");
  try { app.save(r116); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r117 = new Record(collection);
  r117.set("careerSlug", "backend-engineer");
  r117.set("questionNumber", 18);
  r117.set("question", "What is ACID?");
  r117.set("category", "System Design");
  r117.set("difficulty", "Beginner");
  r117.set("explanation", "Beginner level question for Backend Engineer. What is ACID?");
  try { app.save(r117); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r118 = new Record(collection);
  r118.set("careerSlug", "backend-engineer");
  r118.set("questionNumber", 19);
  r118.set("question", "What is a transaction?");
  r118.set("category", "Technical");
  r118.set("difficulty", "Beginner");
  r118.set("explanation", "Beginner level question for Backend Engineer. What is a transaction?");
  try { app.save(r118); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r119 = new Record(collection);
  r119.set("careerSlug", "backend-engineer");
  r119.set("questionNumber", 20);
  r119.set("question", "What is database normalization?");
  r119.set("category", "Technical");
  r119.set("difficulty", "Beginner");
  r119.set("explanation", "Beginner level question for Backend Engineer. What is database normalization?");
  try { app.save(r119); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r120 = new Record(collection);
  r120.set("careerSlug", "backend-engineer");
  r120.set("questionNumber", 21);
  r120.set("question", "What is denormalization?");
  r120.set("category", "Behavioral");
  r120.set("difficulty", "Beginner");
  r120.set("explanation", "Beginner level question for Backend Engineer. What is denormalization?");
  try { app.save(r120); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r121 = new Record(collection);
  r121.set("careerSlug", "backend-engineer");
  r121.set("questionNumber", 22);
  r121.set("question", "What is N+1 problem?");
  r121.set("category", "Technical");
  r121.set("difficulty", "Beginner");
  r121.set("explanation", "Beginner level question for Backend Engineer. What is N+1 problem?");
  try { app.save(r121); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r122 = new Record(collection);
  r122.set("careerSlug", "backend-engineer");
  r122.set("questionNumber", 23);
  r122.set("question", "What is connection pooling?");
  r122.set("category", "Technical");
  r122.set("difficulty", "Beginner");
  r122.set("explanation", "Beginner level question for Backend Engineer. What is connection pooling?");
  try { app.save(r122); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r123 = new Record(collection);
  r123.set("careerSlug", "backend-engineer");
  r123.set("questionNumber", 24);
  r123.set("question", "What is caching?");
  r123.set("category", "System Design");
  r123.set("difficulty", "Beginner");
  r123.set("explanation", "Beginner level question for Backend Engineer. What is caching?");
  try { app.save(r123); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r124 = new Record(collection);
  r124.set("careerSlug", "backend-engineer");
  r124.set("questionNumber", 25);
  r124.set("question", "What is Redis?");
  r124.set("category", "Technical");
  r124.set("difficulty", "Beginner");
  r124.set("explanation", "Beginner level question for Backend Engineer. What is Redis?");
  try { app.save(r124); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r125 = new Record(collection);
  r125.set("careerSlug", "backend-engineer");
  r125.set("questionNumber", 26);
  r125.set("question", "What is pub/sub?");
  r125.set("category", "Technical");
  r125.set("difficulty", "Beginner");
  r125.set("explanation", "Beginner level question for Backend Engineer. What is pub/sub?");
  try { app.save(r125); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r126 = new Record(collection);
  r126.set("careerSlug", "backend-engineer");
  r126.set("questionNumber", 27);
  r126.set("question", "What is message queue?");
  r126.set("category", "Behavioral");
  r126.set("difficulty", "Beginner");
  r126.set("explanation", "Beginner level question for Backend Engineer. What is message queue?");
  try { app.save(r126); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r127 = new Record(collection);
  r127.set("careerSlug", "backend-engineer");
  r127.set("questionNumber", 28);
  r127.set("question", "What is RabbitMQ?");
  r127.set("category", "Technical");
  r127.set("difficulty", "Beginner");
  r127.set("explanation", "Beginner level question for Backend Engineer. What is RabbitMQ?");
  try { app.save(r127); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r128 = new Record(collection);
  r128.set("careerSlug", "backend-engineer");
  r128.set("questionNumber", 29);
  r128.set("question", "What is Kafka for backend?");
  r128.set("category", "Technical");
  r128.set("difficulty", "Beginner");
  r128.set("explanation", "Beginner level question for Backend Engineer. What is Kafka for backend?");
  try { app.save(r128); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r129 = new Record(collection);
  r129.set("careerSlug", "backend-engineer");
  r129.set("questionNumber", 30);
  r129.set("question", "What is event-driven architecture?");
  r129.set("category", "System Design");
  r129.set("difficulty", "Beginner");
  r129.set("explanation", "Beginner level question for Backend Engineer. What is event-driven architecture?");
  try { app.save(r129); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r130 = new Record(collection);
  r130.set("careerSlug", "backend-engineer");
  r130.set("questionNumber", 31);
  r130.set("question", "What is a microservice?");
  r130.set("category", "Technical");
  r130.set("difficulty", "Beginner");
  r130.set("explanation", "Beginner level question for Backend Engineer. What is a microservice?");
  try { app.save(r130); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r131 = new Record(collection);
  r131.set("careerSlug", "backend-engineer");
  r131.set("questionNumber", 32);
  r131.set("question", "What is service discovery?");
  r131.set("category", "Technical");
  r131.set("difficulty", "Beginner");
  r131.set("explanation", "Beginner level question for Backend Engineer. What is service discovery?");
  try { app.save(r131); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r132 = new Record(collection);
  r132.set("careerSlug", "backend-engineer");
  r132.set("questionNumber", 33);
  r132.set("question", "What is load balancing?");
  r132.set("category", "Behavioral");
  r132.set("difficulty", "Beginner");
  r132.set("explanation", "Beginner level question for Backend Engineer. What is load balancing?");
  try { app.save(r132); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r133 = new Record(collection);
  r133.set("careerSlug", "backend-engineer");
  r133.set("questionNumber", 34);
  r133.set("question", "What is horizontal scaling?");
  r133.set("category", "Technical");
  r133.set("difficulty", "Intermediate");
  r133.set("explanation", "Intermediate level question for Backend Engineer. What is horizontal scaling?");
  try { app.save(r133); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r134 = new Record(collection);
  r134.set("careerSlug", "backend-engineer");
  r134.set("questionNumber", 35);
  r134.set("question", "What is vertical scaling?");
  r134.set("category", "Technical");
  r134.set("difficulty", "Intermediate");
  r134.set("explanation", "Intermediate level question for Backend Engineer. What is vertical scaling?");
  try { app.save(r134); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r135 = new Record(collection);
  r135.set("careerSlug", "backend-engineer");
  r135.set("questionNumber", 36);
  r135.set("question", "What is CAP theorem?");
  r135.set("category", "System Design");
  r135.set("difficulty", "Intermediate");
  r135.set("explanation", "Intermediate level question for Backend Engineer. What is CAP theorem?");
  try { app.save(r135); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r136 = new Record(collection);
  r136.set("careerSlug", "backend-engineer");
  r136.set("questionNumber", 37);
  r136.set("question", "What is eventual consistency?");
  r136.set("category", "Technical");
  r136.set("difficulty", "Intermediate");
  r136.set("explanation", "Intermediate level question for Backend Engineer. What is eventual consistency?");
  try { app.save(r136); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r137 = new Record(collection);
  r137.set("careerSlug", "backend-engineer");
  r137.set("questionNumber", 38);
  r137.set("question", "What is database sharding?");
  r137.set("category", "Technical");
  r137.set("difficulty", "Intermediate");
  r137.set("explanation", "Intermediate level question for Backend Engineer. What is database sharding?");
  try { app.save(r137); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r138 = new Record(collection);
  r138.set("careerSlug", "backend-engineer");
  r138.set("questionNumber", 39);
  r138.set("question", "What is read replica?");
  r138.set("category", "Behavioral");
  r138.set("difficulty", "Intermediate");
  r138.set("explanation", "Intermediate level question for Backend Engineer. What is read replica?");
  try { app.save(r138); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r139 = new Record(collection);
  r139.set("careerSlug", "backend-engineer");
  r139.set("questionNumber", 40);
  r139.set("question", "What is database migration?");
  r139.set("category", "Technical");
  r139.set("difficulty", "Intermediate");
  r139.set("explanation", "Intermediate level question for Backend Engineer. What is database migration?");
  try { app.save(r139); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r140 = new Record(collection);
  r140.set("careerSlug", "backend-engineer");
  r140.set("questionNumber", 41);
  r140.set("question", "What is ORM?");
  r140.set("category", "Technical");
  r140.set("difficulty", "Intermediate");
  r140.set("explanation", "Intermediate level question for Backend Engineer. What is ORM?");
  try { app.save(r140); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r141 = new Record(collection);
  r141.set("careerSlug", "backend-engineer");
  r141.set("questionNumber", 42);
  r141.set("question", "What is SQL injection prevention?");
  r141.set("category", "System Design");
  r141.set("difficulty", "Intermediate");
  r141.set("explanation", "Intermediate level question for Backend Engineer. What is SQL injection prevention?");
  try { app.save(r141); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r142 = new Record(collection);
  r142.set("careerSlug", "backend-engineer");
  r142.set("questionNumber", 43);
  r142.set("question", "What is input validation?");
  r142.set("category", "Technical");
  r142.set("difficulty", "Intermediate");
  r142.set("explanation", "Intermediate level question for Backend Engineer. What is input validation?");
  try { app.save(r142); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r143 = new Record(collection);
  r143.set("careerSlug", "backend-engineer");
  r143.set("questionNumber", 44);
  r143.set("question", "What is password hashing (bcrypt)?");
  r143.set("category", "Technical");
  r143.set("difficulty", "Intermediate");
  r143.set("explanation", "Intermediate level question for Backend Engineer. What is password hashing (bcrypt)?");
  try { app.save(r143); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r144 = new Record(collection);
  r144.set("careerSlug", "backend-engineer");
  r144.set("questionNumber", 45);
  r144.set("question", "What is HTTPS?");
  r144.set("category", "Behavioral");
  r144.set("difficulty", "Intermediate");
  r144.set("explanation", "Intermediate level question for Backend Engineer. What is HTTPS?");
  try { app.save(r144); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r145 = new Record(collection);
  r145.set("careerSlug", "backend-engineer");
  r145.set("questionNumber", 46);
  r145.set("question", "What is OWASP Top 10 backend?");
  r145.set("category", "Technical");
  r145.set("difficulty", "Intermediate");
  r145.set("explanation", "Intermediate level question for Backend Engineer. What is OWASP Top 10 backend?");
  try { app.save(r145); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r146 = new Record(collection);
  r146.set("careerSlug", "backend-engineer");
  r146.set("questionNumber", 47);
  r146.set("question", "What is containerization?");
  r146.set("category", "Technical");
  r146.set("difficulty", "Intermediate");
  r146.set("explanation", "Intermediate level question for Backend Engineer. What is containerization?");
  try { app.save(r146); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r147 = new Record(collection);
  r147.set("careerSlug", "backend-engineer");
  r147.set("questionNumber", 48);
  r147.set("question", "What is Docker?");
  r147.set("category", "System Design");
  r147.set("difficulty", "Intermediate");
  r147.set("explanation", "Intermediate level question for Backend Engineer. What is Docker?");
  try { app.save(r147); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r148 = new Record(collection);
  r148.set("careerSlug", "backend-engineer");
  r148.set("questionNumber", 49);
  r148.set("question", "What is CI/CD?");
  r148.set("category", "Technical");
  r148.set("difficulty", "Intermediate");
  r148.set("explanation", "Intermediate level question for Backend Engineer. What is CI/CD?");
  try { app.save(r148); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r149 = new Record(collection);
  r149.set("careerSlug", "backend-engineer");
  r149.set("questionNumber", 50);
  r149.set("question", "What is unit testing?");
  r149.set("category", "Technical");
  r149.set("difficulty", "Intermediate");
  r149.set("explanation", "Intermediate level question for Backend Engineer. What is unit testing?");
  try { app.save(r149); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r150 = new Record(collection);
  r150.set("careerSlug", "backend-engineer");
  r150.set("questionNumber", 51);
  r150.set("question", "What is integration testing?");
  r150.set("category", "Behavioral");
  r150.set("difficulty", "Intermediate");
  r150.set("explanation", "Intermediate level question for Backend Engineer. What is integration testing?");
  try { app.save(r150); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r151 = new Record(collection);
  r151.set("careerSlug", "backend-engineer");
  r151.set("questionNumber", 52);
  r151.set("question", "What is TDD?");
  r151.set("category", "Technical");
  r151.set("difficulty", "Intermediate");
  r151.set("explanation", "Intermediate level question for Backend Engineer. What is TDD?");
  try { app.save(r151); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r152 = new Record(collection);
  r152.set("careerSlug", "backend-engineer");
  r152.set("questionNumber", 53);
  r152.set("question", "What is mocking in tests?");
  r152.set("category", "Technical");
  r152.set("difficulty", "Intermediate");
  r152.set("explanation", "Intermediate level question for Backend Engineer. What is mocking in tests?");
  try { app.save(r152); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r153 = new Record(collection);
  r153.set("careerSlug", "backend-engineer");
  r153.set("questionNumber", 54);
  r153.set("question", "What is idempotency?");
  r153.set("category", "System Design");
  r153.set("difficulty", "Intermediate");
  r153.set("explanation", "Intermediate level question for Backend Engineer. What is idempotency?");
  try { app.save(r153); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r154 = new Record(collection);
  r154.set("careerSlug", "backend-engineer");
  r154.set("questionNumber", 55);
  r154.set("question", "What is retry logic?");
  r154.set("category", "Technical");
  r154.set("difficulty", "Intermediate");
  r154.set("explanation", "Intermediate level question for Backend Engineer. What is retry logic?");
  try { app.save(r154); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r155 = new Record(collection);
  r155.set("careerSlug", "backend-engineer");
  r155.set("questionNumber", 56);
  r155.set("question", "What is circuit breaker?");
  r155.set("category", "Technical");
  r155.set("difficulty", "Intermediate");
  r155.set("explanation", "Intermediate level question for Backend Engineer. What is circuit breaker?");
  try { app.save(r155); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r156 = new Record(collection);
  r156.set("careerSlug", "backend-engineer");
  r156.set("questionNumber", 57);
  r156.set("question", "What is bulkhead?");
  r156.set("category", "Behavioral");
  r156.set("difficulty", "Intermediate");
  r156.set("explanation", "Intermediate level question for Backend Engineer. What is bulkhead?");
  try { app.save(r156); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r157 = new Record(collection);
  r157.set("careerSlug", "backend-engineer");
  r157.set("questionNumber", 58);
  r157.set("question", "What is timeout?");
  r157.set("category", "Technical");
  r157.set("difficulty", "Intermediate");
  r157.set("explanation", "Intermediate level question for Backend Engineer. What is timeout?");
  try { app.save(r157); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r158 = new Record(collection);
  r158.set("careerSlug", "backend-engineer");
  r158.set("questionNumber", 59);
  r158.set("question", "What is graceful shutdown?");
  r158.set("category", "Technical");
  r158.set("difficulty", "Intermediate");
  r158.set("explanation", "Intermediate level question for Backend Engineer. What is graceful shutdown?");
  try { app.save(r158); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r159 = new Record(collection);
  r159.set("careerSlug", "backend-engineer");
  r159.set("questionNumber", 60);
  r159.set("question", "What is health check endpoint?");
  r159.set("category", "System Design");
  r159.set("difficulty", "Intermediate");
  r159.set("explanation", "Intermediate level question for Backend Engineer. What is health check endpoint?");
  try { app.save(r159); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r160 = new Record(collection);
  r160.set("careerSlug", "backend-engineer");
  r160.set("questionNumber", 61);
  r160.set("question", "What is logging?");
  r160.set("category", "Technical");
  r160.set("difficulty", "Intermediate");
  r160.set("explanation", "Intermediate level question for Backend Engineer. What is logging?");
  try { app.save(r160); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r161 = new Record(collection);
  r161.set("careerSlug", "backend-engineer");
  r161.set("questionNumber", 62);
  r161.set("question", "What is structured logging?");
  r161.set("category", "Technical");
  r161.set("difficulty", "Intermediate");
  r161.set("explanation", "Intermediate level question for Backend Engineer. What is structured logging?");
  try { app.save(r161); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r162 = new Record(collection);
  r162.set("careerSlug", "backend-engineer");
  r162.set("questionNumber", 63);
  r162.set("question", "What is monitoring?");
  r162.set("category", "Behavioral");
  r162.set("difficulty", "Intermediate");
  r162.set("explanation", "Intermediate level question for Backend Engineer. What is monitoring?");
  try { app.save(r162); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r163 = new Record(collection);
  r163.set("careerSlug", "backend-engineer");
  r163.set("questionNumber", 64);
  r163.set("question", "What is distributed tracing?");
  r163.set("category", "Technical");
  r163.set("difficulty", "Intermediate");
  r163.set("explanation", "Intermediate level question for Backend Engineer. What is distributed tracing?");
  try { app.save(r163); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r164 = new Record(collection);
  r164.set("careerSlug", "backend-engineer");
  r164.set("questionNumber", 65);
  r164.set("question", "What is async programming?");
  r164.set("category", "Technical");
  r164.set("difficulty", "Intermediate");
  r164.set("explanation", "Intermediate level question for Backend Engineer. What is async programming?");
  try { app.save(r164); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r165 = new Record(collection);
  r165.set("careerSlug", "backend-engineer");
  r165.set("questionNumber", 66);
  r165.set("question", "What is concurrency vs parallelism?");
  r165.set("category", "System Design");
  r165.set("difficulty", "Intermediate");
  r165.set("explanation", "Intermediate level question for Backend Engineer. What is concurrency vs parallelism?");
  try { app.save(r165); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r166 = new Record(collection);
  r166.set("careerSlug", "backend-engineer");
  r166.set("questionNumber", 67);
  r166.set("question", "What is thread vs process?");
  r166.set("category", "Technical");
  r166.set("difficulty", "Intermediate");
  r166.set("explanation", "Intermediate level question for Backend Engineer. What is thread vs process?");
  try { app.save(r166); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r167 = new Record(collection);
  r167.set("careerSlug", "backend-engineer");
  r167.set("questionNumber", 68);
  r167.set("question", "What is deadlock?");
  r167.set("category", "Technical");
  r167.set("difficulty", "Advanced");
  r167.set("explanation", "Advanced level question for Backend Engineer. What is deadlock?");
  try { app.save(r167); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r168 = new Record(collection);
  r168.set("careerSlug", "backend-engineer");
  r168.set("questionNumber", 69);
  r168.set("question", "What is race condition?");
  r168.set("category", "Behavioral");
  r168.set("difficulty", "Advanced");
  r168.set("explanation", "Advanced level question for Backend Engineer. What is race condition?");
  try { app.save(r168); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r169 = new Record(collection);
  r169.set("careerSlug", "backend-engineer");
  r169.set("questionNumber", 70);
  r169.set("question", "What is event loop (Node.js)?");
  r169.set("category", "Technical");
  r169.set("difficulty", "Advanced");
  r169.set("explanation", "Advanced level question for Backend Engineer. What is event loop (Node.js)?");
  try { app.save(r169); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r170 = new Record(collection);
  r170.set("careerSlug", "backend-engineer");
  r170.set("questionNumber", 71);
  r170.set("question", "What is goroutine (Go)?");
  r170.set("category", "Technical");
  r170.set("difficulty", "Advanced");
  r170.set("explanation", "Advanced level question for Backend Engineer. What is goroutine (Go)?");
  try { app.save(r170); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r171 = new Record(collection);
  r171.set("careerSlug", "backend-engineer");
  r171.set("questionNumber", 72);
  r171.set("question", "What is GIL in Python?");
  r171.set("category", "System Design");
  r171.set("difficulty", "Advanced");
  r171.set("explanation", "Advanced level question for Backend Engineer. What is GIL in Python?");
  try { app.save(r171); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r172 = new Record(collection);
  r172.set("careerSlug", "backend-engineer");
  r172.set("questionNumber", 73);
  r172.set("question", "What is async/await in Python?");
  r172.set("category", "Technical");
  r172.set("difficulty", "Advanced");
  r172.set("explanation", "Advanced level question for Backend Engineer. What is async/await in Python?");
  try { app.save(r172); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r173 = new Record(collection);
  r173.set("careerSlug", "backend-engineer");
  r173.set("questionNumber", 74);
  r173.set("question", "What is FastAPI vs Flask vs Django?");
  r173.set("category", "Technical");
  r173.set("difficulty", "Advanced");
  r173.set("explanation", "Advanced level question for Backend Engineer. What is FastAPI vs Flask vs Django?");
  try { app.save(r173); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r174 = new Record(collection);
  r174.set("careerSlug", "backend-engineer");
  r174.set("questionNumber", 75);
  r174.set("question", "What is dependency injection?");
  r174.set("category", "Behavioral");
  r174.set("difficulty", "Advanced");
  r174.set("explanation", "Advanced level question for Backend Engineer. What is dependency injection?");
  try { app.save(r174); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r175 = new Record(collection);
  r175.set("careerSlug", "backend-engineer");
  r175.set("questionNumber", 76);
  r175.set("question", "What is inversion of control?");
  r175.set("category", "Technical");
  r175.set("difficulty", "Advanced");
  r175.set("explanation", "Advanced level question for Backend Engineer. What is inversion of control?");
  try { app.save(r175); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r176 = new Record(collection);
  r176.set("careerSlug", "backend-engineer");
  r176.set("questionNumber", 77);
  r176.set("question", "What is SOLID principles?");
  r176.set("category", "Technical");
  r176.set("difficulty", "Advanced");
  r176.set("explanation", "Advanced level question for Backend Engineer. What is SOLID principles?");
  try { app.save(r176); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r177 = new Record(collection);
  r177.set("careerSlug", "backend-engineer");
  r177.set("questionNumber", 78);
  r177.set("question", "What is DRY principle?");
  r177.set("category", "System Design");
  r177.set("difficulty", "Advanced");
  r177.set("explanation", "Advanced level question for Backend Engineer. What is DRY principle?");
  try { app.save(r177); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r178 = new Record(collection);
  r178.set("careerSlug", "backend-engineer");
  r178.set("questionNumber", 79);
  r178.set("question", "What is clean architecture?");
  r178.set("category", "Technical");
  r178.set("difficulty", "Advanced");
  r178.set("explanation", "Advanced level question for Backend Engineer. What is clean architecture?");
  try { app.save(r178); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r179 = new Record(collection);
  r179.set("careerSlug", "backend-engineer");
  r179.set("questionNumber", 80);
  r179.set("question", "What is hexagonal architecture?");
  r179.set("category", "Technical");
  r179.set("difficulty", "Advanced");
  r179.set("explanation", "Advanced level question for Backend Engineer. What is hexagonal architecture?");
  try { app.save(r179); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r180 = new Record(collection);
  r180.set("careerSlug", "backend-engineer");
  r180.set("questionNumber", 81);
  r180.set("question", "What is domain-driven design?");
  r180.set("category", "Behavioral");
  r180.set("difficulty", "Advanced");
  r180.set("explanation", "Advanced level question for Backend Engineer. What is domain-driven design?");
  try { app.save(r180); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r181 = new Record(collection);
  r181.set("careerSlug", "backend-engineer");
  r181.set("questionNumber", 82);
  r181.set("question", "What is CQRS?");
  r181.set("category", "Technical");
  r181.set("difficulty", "Advanced");
  r181.set("explanation", "Advanced level question for Backend Engineer. What is CQRS?");
  try { app.save(r181); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r182 = new Record(collection);
  r182.set("careerSlug", "backend-engineer");
  r182.set("questionNumber", 83);
  r182.set("question", "What is event sourcing?");
  r182.set("category", "Technical");
  r182.set("difficulty", "Advanced");
  r182.set("explanation", "Advanced level question for Backend Engineer. What is event sourcing?");
  try { app.save(r182); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r183 = new Record(collection);
  r183.set("careerSlug", "backend-engineer");
  r183.set("questionNumber", 84);
  r183.set("question", "What is saga pattern?");
  r183.set("category", "System Design");
  r183.set("difficulty", "Advanced");
  r183.set("explanation", "Advanced level question for Backend Engineer. What is saga pattern?");
  try { app.save(r183); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r184 = new Record(collection);
  r184.set("careerSlug", "backend-engineer");
  r184.set("questionNumber", 85);
  r184.set("question", "What is API gateway?");
  r184.set("category", "Technical");
  r184.set("difficulty", "Advanced");
  r184.set("explanation", "Advanced level question for Backend Engineer. What is API gateway?");
  try { app.save(r184); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r185 = new Record(collection);
  r185.set("careerSlug", "backend-engineer");
  r185.set("questionNumber", 86);
  r185.set("question", "What is BFF pattern?");
  r185.set("category", "Technical");
  r185.set("difficulty", "Advanced");
  r185.set("explanation", "Advanced level question for Backend Engineer. What is BFF pattern?");
  try { app.save(r185); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r186 = new Record(collection);
  r186.set("careerSlug", "backend-engineer");
  r186.set("questionNumber", 87);
  r186.set("question", "What is service mesh?");
  r186.set("category", "Behavioral");
  r186.set("difficulty", "Advanced");
  r186.set("explanation", "Advanced level question for Backend Engineer. What is service mesh?");
  try { app.save(r186); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r187 = new Record(collection);
  r187.set("careerSlug", "backend-engineer");
  r187.set("questionNumber", 88);
  r187.set("question", "What is gRPC vs REST?");
  r187.set("category", "Technical");
  r187.set("difficulty", "Advanced");
  r187.set("explanation", "Advanced level question for Backend Engineer. What is gRPC vs REST?");
  try { app.save(r187); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r188 = new Record(collection);
  r188.set("careerSlug", "backend-engineer");
  r188.set("questionNumber", 89);
  r188.set("question", "What is Protocol Buffers?");
  r188.set("category", "Technical");
  r188.set("difficulty", "Advanced");
  r188.set("explanation", "Advanced level question for Backend Engineer. What is Protocol Buffers?");
  try { app.save(r188); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r189 = new Record(collection);
  r189.set("careerSlug", "backend-engineer");
  r189.set("questionNumber", 90);
  r189.set("question", "What is OpenAPI/Swagger?");
  r189.set("category", "System Design");
  r189.set("difficulty", "Advanced");
  r189.set("explanation", "Advanced level question for Backend Engineer. What is OpenAPI/Swagger?");
  try { app.save(r189); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r190 = new Record(collection);
  r190.set("careerSlug", "backend-engineer");
  r190.set("questionNumber", 91);
  r190.set("question", "What is API documentation?");
  r190.set("category", "Technical");
  r190.set("difficulty", "Advanced");
  r190.set("explanation", "Advanced level question for Backend Engineer. What is API documentation?");
  try { app.save(r190); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r191 = new Record(collection);
  r191.set("careerSlug", "backend-engineer");
  r191.set("questionNumber", 92);
  r191.set("question", "What is pagination?");
  r191.set("category", "Technical");
  r191.set("difficulty", "Advanced");
  r191.set("explanation", "Advanced level question for Backend Engineer. What is pagination?");
  try { app.save(r191); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r192 = new Record(collection);
  r192.set("careerSlug", "backend-engineer");
  r192.set("questionNumber", 93);
  r192.set("question", "What is cursor pagination?");
  r192.set("category", "Behavioral");
  r192.set("difficulty", "Advanced");
  r192.set("explanation", "Advanced level question for Backend Engineer. What is cursor pagination?");
  try { app.save(r192); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r193 = new Record(collection);
  r193.set("careerSlug", "backend-engineer");
  r193.set("questionNumber", 94);
  r193.set("question", "What is webhook?");
  r193.set("category", "Technical");
  r193.set("difficulty", "Advanced");
  r193.set("explanation", "Advanced level question for Backend Engineer. What is webhook?");
  try { app.save(r193); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r194 = new Record(collection);
  r194.set("careerSlug", "backend-engineer");
  r194.set("questionNumber", 95);
  r194.set("question", "What is idempotency key?");
  r194.set("category", "Technical");
  r194.set("difficulty", "Advanced");
  r194.set("explanation", "Advanced level question for Backend Engineer. What is idempotency key?");
  try { app.save(r194); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r195 = new Record(collection);
  r195.set("careerSlug", "backend-engineer");
  r195.set("questionNumber", 96);
  r195.set("question", "What is distributed lock?");
  r195.set("category", "System Design");
  r195.set("difficulty", "Advanced");
  r195.set("explanation", "Advanced level question for Backend Engineer. What is distributed lock?");
  try { app.save(r195); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r196 = new Record(collection);
  r196.set("careerSlug", "backend-engineer");
  r196.set("questionNumber", 97);
  r196.set("question", "What is optimistic locking?");
  r196.set("category", "Technical");
  r196.set("difficulty", "Advanced");
  r196.set("explanation", "Advanced level question for Backend Engineer. What is optimistic locking?");
  try { app.save(r196); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r197 = new Record(collection);
  r197.set("careerSlug", "backend-engineer");
  r197.set("questionNumber", 98);
  r197.set("question", "What is pessimistic locking?");
  r197.set("category", "Technical");
  r197.set("difficulty", "Advanced");
  r197.set("explanation", "Advanced level question for Backend Engineer. What is pessimistic locking?");
  try { app.save(r197); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r198 = new Record(collection);
  r198.set("careerSlug", "backend-engineer");
  r198.set("questionNumber", 99);
  r198.set("question", "What is database deadlock?");
  r198.set("category", "Behavioral");
  r198.set("difficulty", "Advanced");
  r198.set("explanation", "Advanced level question for Backend Engineer. What is database deadlock?");
  try { app.save(r198); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r199 = new Record(collection);
  r199.set("careerSlug", "backend-engineer");
  r199.set("questionNumber", 100);
  r199.set("question", "What is soft delete?");
  r199.set("category", "Technical");
  r199.set("difficulty", "Advanced");
  r199.set("explanation", "Advanced level question for Backend Engineer. What is soft delete?");
  try { app.save(r199); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r200 = new Record(collection);
  r200.set("careerSlug", "mobile-app-developer-ios-android");
  r200.set("questionNumber", 1);
  r200.set("question", "What is Swift vs Objective-C?");
  r200.set("category", "Technical");
  r200.set("difficulty", "Beginner");
  r200.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Swift vs Objective-C?");
  try { app.save(r200); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r201 = new Record(collection);
  r201.set("careerSlug", "mobile-app-developer-ios-android");
  r201.set("questionNumber", 2);
  r201.set("question", "What is SwiftUI vs UIKit?");
  r201.set("category", "Technical");
  r201.set("difficulty", "Beginner");
  r201.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is SwiftUI vs UIKit?");
  try { app.save(r201); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r202 = new Record(collection);
  r202.set("careerSlug", "mobile-app-developer-ios-android");
  r202.set("questionNumber", 3);
  r202.set("question", "What is Kotlin vs Java for Android?");
  r202.set("category", "Behavioral");
  r202.set("difficulty", "Beginner");
  r202.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Kotlin vs Java for Android?");
  try { app.save(r202); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r203 = new Record(collection);
  r203.set("careerSlug", "mobile-app-developer-ios-android");
  r203.set("questionNumber", 4);
  r203.set("question", "What is Jetpack Compose?");
  r203.set("category", "Technical");
  r203.set("difficulty", "Beginner");
  r203.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Jetpack Compose?");
  try { app.save(r203); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r204 = new Record(collection);
  r204.set("careerSlug", "mobile-app-developer-ios-android");
  r204.set("questionNumber", 5);
  r204.set("question", "What is Flutter?");
  r204.set("category", "Technical");
  r204.set("difficulty", "Beginner");
  r204.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Flutter?");
  try { app.save(r204); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r205 = new Record(collection);
  r205.set("careerSlug", "mobile-app-developer-ios-android");
  r205.set("questionNumber", 6);
  r205.set("question", "What is React Native?");
  r205.set("category", "System Design");
  r205.set("difficulty", "Beginner");
  r205.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is React Native?");
  try { app.save(r205); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r206 = new Record(collection);
  r206.set("careerSlug", "mobile-app-developer-ios-android");
  r206.set("questionNumber", 7);
  r206.set("question", "What is Dart?");
  r206.set("category", "Technical");
  r206.set("difficulty", "Beginner");
  r206.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Dart?");
  try { app.save(r206); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r207 = new Record(collection);
  r207.set("careerSlug", "mobile-app-developer-ios-android");
  r207.set("questionNumber", 8);
  r207.set("question", "What is the difference between native and cross-platform?");
  r207.set("category", "Technical");
  r207.set("difficulty", "Beginner");
  r207.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is the difference between native and cross-platform?");
  try { app.save(r207); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r208 = new Record(collection);
  r208.set("careerSlug", "mobile-app-developer-ios-android");
  r208.set("questionNumber", 9);
  r208.set("question", "What is MVC vs MVVM vs MVI?");
  r208.set("category", "Behavioral");
  r208.set("difficulty", "Beginner");
  r208.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is MVC vs MVVM vs MVI?");
  try { app.save(r208); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r209 = new Record(collection);
  r209.set("careerSlug", "mobile-app-developer-ios-android");
  r209.set("questionNumber", 10);
  r209.set("question", "What is MVVM?");
  r209.set("category", "Technical");
  r209.set("difficulty", "Beginner");
  r209.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is MVVM?");
  try { app.save(r209); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r210 = new Record(collection);
  r210.set("careerSlug", "mobile-app-developer-ios-android");
  r210.set("questionNumber", 11);
  r210.set("question", "What is Combine (iOS)?");
  r210.set("category", "Technical");
  r210.set("difficulty", "Beginner");
  r210.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Combine (iOS)?");
  try { app.save(r210); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r211 = new Record(collection);
  r211.set("careerSlug", "mobile-app-developer-ios-android");
  r211.set("questionNumber", 12);
  r211.set("question", "What is Flow (Android)?");
  r211.set("category", "System Design");
  r211.set("difficulty", "Beginner");
  r211.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Flow (Android)?");
  try { app.save(r211); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r212 = new Record(collection);
  r212.set("careerSlug", "mobile-app-developer-ios-android");
  r212.set("questionNumber", 13);
  r212.set("question", "What is LiveData?");
  r212.set("category", "Technical");
  r212.set("difficulty", "Beginner");
  r212.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is LiveData?");
  try { app.save(r212); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r213 = new Record(collection);
  r213.set("careerSlug", "mobile-app-developer-ios-android");
  r213.set("questionNumber", 14);
  r213.set("question", "What is ViewModel?");
  r213.set("category", "Technical");
  r213.set("difficulty", "Beginner");
  r213.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is ViewModel?");
  try { app.save(r213); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r214 = new Record(collection);
  r214.set("careerSlug", "mobile-app-developer-ios-android");
  r214.set("questionNumber", 15);
  r214.set("question", "What is dependency injection in mobile?");
  r214.set("category", "Behavioral");
  r214.set("difficulty", "Beginner");
  r214.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is dependency injection in mobile?");
  try { app.save(r214); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r215 = new Record(collection);
  r215.set("careerSlug", "mobile-app-developer-ios-android");
  r215.set("questionNumber", 16);
  r215.set("question", "What is Hilt?");
  r215.set("category", "Technical");
  r215.set("difficulty", "Beginner");
  r215.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Hilt?");
  try { app.save(r215); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r216 = new Record(collection);
  r216.set("careerSlug", "mobile-app-developer-ios-android");
  r216.set("questionNumber", 17);
  r216.set("question", "What is lifecycle in Android?");
  r216.set("category", "Technical");
  r216.set("difficulty", "Beginner");
  r216.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is lifecycle in Android?");
  try { app.save(r216); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r217 = new Record(collection);
  r217.set("careerSlug", "mobile-app-developer-ios-android");
  r217.set("questionNumber", 18);
  r217.set("question", "What is Activity vs Fragment?");
  r217.set("category", "System Design");
  r217.set("difficulty", "Beginner");
  r217.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Activity vs Fragment?");
  try { app.save(r217); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r218 = new Record(collection);
  r218.set("careerSlug", "mobile-app-developer-ios-android");
  r218.set("questionNumber", 19);
  r218.set("question", "What is Navigation Component?");
  r218.set("category", "Technical");
  r218.set("difficulty", "Beginner");
  r218.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Navigation Component?");
  try { app.save(r218); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r219 = new Record(collection);
  r219.set("careerSlug", "mobile-app-developer-ios-android");
  r219.set("questionNumber", 20);
  r219.set("question", "What is Deep Link?");
  r219.set("category", "Technical");
  r219.set("difficulty", "Beginner");
  r219.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Deep Link?");
  try { app.save(r219); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r220 = new Record(collection);
  r220.set("careerSlug", "mobile-app-developer-ios-android");
  r220.set("questionNumber", 21);
  r220.set("question", "What is App Links?");
  r220.set("category", "Behavioral");
  r220.set("difficulty", "Beginner");
  r220.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is App Links?");
  try { app.save(r220); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r221 = new Record(collection);
  r221.set("careerSlug", "mobile-app-developer-ios-android");
  r221.set("questionNumber", 22);
  r221.set("question", "What is Universal Links (iOS)?");
  r221.set("category", "Technical");
  r221.set("difficulty", "Beginner");
  r221.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Universal Links (iOS)?");
  try { app.save(r221); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r222 = new Record(collection);
  r222.set("careerSlug", "mobile-app-developer-ios-android");
  r222.set("questionNumber", 23);
  r222.set("question", "What is SQLite?");
  r222.set("category", "Technical");
  r222.set("difficulty", "Beginner");
  r222.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is SQLite?");
  try { app.save(r222); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r223 = new Record(collection);
  r223.set("careerSlug", "mobile-app-developer-ios-android");
  r223.set("questionNumber", 24);
  r223.set("question", "What is Room (Android)?");
  r223.set("category", "System Design");
  r223.set("difficulty", "Beginner");
  r223.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Room (Android)?");
  try { app.save(r223); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r224 = new Record(collection);
  r224.set("careerSlug", "mobile-app-developer-ios-android");
  r224.set("questionNumber", 25);
  r224.set("question", "What is Core Data (iOS)?");
  r224.set("category", "Technical");
  r224.set("difficulty", "Beginner");
  r224.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Core Data (iOS)?");
  try { app.save(r224); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r225 = new Record(collection);
  r225.set("careerSlug", "mobile-app-developer-ios-android");
  r225.set("questionNumber", 26);
  r225.set("question", "What is SwiftData?");
  r225.set("category", "Technical");
  r225.set("difficulty", "Beginner");
  r225.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is SwiftData?");
  try { app.save(r225); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r226 = new Record(collection);
  r226.set("careerSlug", "mobile-app-developer-ios-android");
  r226.set("questionNumber", 27);
  r226.set("question", "What is SharedPreferences?");
  r226.set("category", "Behavioral");
  r226.set("difficulty", "Beginner");
  r226.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is SharedPreferences?");
  try { app.save(r226); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r227 = new Record(collection);
  r227.set("careerSlug", "mobile-app-developer-ios-android");
  r227.set("questionNumber", 28);
  r227.set("question", "What is UserDefaults?");
  r227.set("category", "Technical");
  r227.set("difficulty", "Beginner");
  r227.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is UserDefaults?");
  try { app.save(r227); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r228 = new Record(collection);
  r228.set("careerSlug", "mobile-app-developer-ios-android");
  r228.set("questionNumber", 29);
  r228.set("question", "What is Keychain?");
  r228.set("category", "Technical");
  r228.set("difficulty", "Beginner");
  r228.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Keychain?");
  try { app.save(r228); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r229 = new Record(collection);
  r229.set("careerSlug", "mobile-app-developer-ios-android");
  r229.set("questionNumber", 30);
  r229.set("question", "What is Retrofit?");
  r229.set("category", "System Design");
  r229.set("difficulty", "Beginner");
  r229.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Retrofit?");
  try { app.save(r229); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r230 = new Record(collection);
  r230.set("careerSlug", "mobile-app-developer-ios-android");
  r230.set("questionNumber", 31);
  r230.set("question", "What is Alamofire?");
  r230.set("category", "Technical");
  r230.set("difficulty", "Beginner");
  r230.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Alamofire?");
  try { app.save(r230); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r231 = new Record(collection);
  r231.set("careerSlug", "mobile-app-developer-ios-android");
  r231.set("questionNumber", 32);
  r231.set("question", "What is URLSession?");
  r231.set("category", "Technical");
  r231.set("difficulty", "Beginner");
  r231.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is URLSession?");
  try { app.save(r231); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r232 = new Record(collection);
  r232.set("careerSlug", "mobile-app-developer-ios-android");
  r232.set("questionNumber", 33);
  r232.set("question", "What is Volley?");
  r232.set("category", "Behavioral");
  r232.set("difficulty", "Beginner");
  r232.set("explanation", "Beginner level question for Mobile App Developer (iOS/Android). What is Volley?");
  try { app.save(r232); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r233 = new Record(collection);
  r233.set("careerSlug", "mobile-app-developer-ios-android");
  r233.set("questionNumber", 34);
  r233.set("question", "What is REST in mobile?");
  r233.set("category", "Technical");
  r233.set("difficulty", "Intermediate");
  r233.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is REST in mobile?");
  try { app.save(r233); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r234 = new Record(collection);
  r234.set("careerSlug", "mobile-app-developer-ios-android");
  r234.set("questionNumber", 35);
  r234.set("question", "What is GraphQL in mobile?");
  r234.set("category", "Technical");
  r234.set("difficulty", "Intermediate");
  r234.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is GraphQL in mobile?");
  try { app.save(r234); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r235 = new Record(collection);
  r235.set("careerSlug", "mobile-app-developer-ios-android");
  r235.set("questionNumber", 36);
  r235.set("question", "What is WebSocket in mobile?");
  r235.set("category", "System Design");
  r235.set("difficulty", "Intermediate");
  r235.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is WebSocket in mobile?");
  try { app.save(r235); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r236 = new Record(collection);
  r236.set("careerSlug", "mobile-app-developer-ios-android");
  r236.set("questionNumber", 37);
  r236.set("question", "What is Firebase?");
  r236.set("category", "Technical");
  r236.set("difficulty", "Intermediate");
  r236.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Firebase?");
  try { app.save(r236); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r237 = new Record(collection);
  r237.set("careerSlug", "mobile-app-developer-ios-android");
  r237.set("questionNumber", 38);
  r237.set("question", "What is Firestore?");
  r237.set("category", "Technical");
  r237.set("difficulty", "Intermediate");
  r237.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Firestore?");
  try { app.save(r237); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r238 = new Record(collection);
  r238.set("careerSlug", "mobile-app-developer-ios-android");
  r238.set("questionNumber", 39);
  r238.set("question", "What is FCM (push notifications)?");
  r238.set("category", "Behavioral");
  r238.set("difficulty", "Intermediate");
  r238.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is FCM (push notifications)?");
  try { app.save(r238); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r239 = new Record(collection);
  r239.set("careerSlug", "mobile-app-developer-ios-android");
  r239.set("questionNumber", 40);
  r239.set("question", "What is APNs?");
  r239.set("category", "Technical");
  r239.set("difficulty", "Intermediate");
  r239.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is APNs?");
  try { app.save(r239); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r240 = new Record(collection);
  r240.set("careerSlug", "mobile-app-developer-ios-android");
  r240.set("questionNumber", 41);
  r240.set("question", "What is App Transport Security?");
  r240.set("category", "Technical");
  r240.set("difficulty", "Intermediate");
  r240.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is App Transport Security?");
  try { app.save(r240); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r241 = new Record(collection);
  r241.set("careerSlug", "mobile-app-developer-ios-android");
  r241.set("questionNumber", 42);
  r241.set("question", "What is certificate pinning?");
  r241.set("category", "System Design");
  r241.set("difficulty", "Intermediate");
  r241.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is certificate pinning?");
  try { app.save(r241); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r242 = new Record(collection);
  r242.set("careerSlug", "mobile-app-developer-ios-android");
  r242.set("questionNumber", 43);
  r242.set("question", "What is code signing?");
  r242.set("category", "Technical");
  r242.set("difficulty", "Intermediate");
  r242.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is code signing?");
  try { app.save(r242); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r243 = new Record(collection);
  r243.set("careerSlug", "mobile-app-developer-ios-android");
  r243.set("questionNumber", 44);
  r243.set("question", "What is provisioning profile?");
  r243.set("category", "Technical");
  r243.set("difficulty", "Intermediate");
  r243.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is provisioning profile?");
  try { app.save(r243); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r244 = new Record(collection);
  r244.set("careerSlug", "mobile-app-developer-ios-android");
  r244.set("questionNumber", 45);
  r244.set("question", "What is TestFlight?");
  r244.set("category", "Behavioral");
  r244.set("difficulty", "Intermediate");
  r244.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is TestFlight?");
  try { app.save(r244); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r245 = new Record(collection);
  r245.set("careerSlug", "mobile-app-developer-ios-android");
  r245.set("questionNumber", 46);
  r245.set("question", "What is App Store review process?");
  r245.set("category", "Technical");
  r245.set("difficulty", "Intermediate");
  r245.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is App Store review process?");
  try { app.save(r245); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r246 = new Record(collection);
  r246.set("careerSlug", "mobile-app-developer-ios-android");
  r246.set("questionNumber", 47);
  r246.set("question", "What is Play Store publishing?");
  r246.set("category", "Technical");
  r246.set("difficulty", "Intermediate");
  r246.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Play Store publishing?");
  try { app.save(r246); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r247 = new Record(collection);
  r247.set("careerSlug", "mobile-app-developer-ios-android");
  r247.set("questionNumber", 48);
  r247.set("question", "What is ProGuard?");
  r247.set("category", "System Design");
  r247.set("difficulty", "Intermediate");
  r247.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is ProGuard?");
  try { app.save(r247); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r248 = new Record(collection);
  r248.set("careerSlug", "mobile-app-developer-ios-android");
  r248.set("questionNumber", 49);
  r248.set("question", "What is R8?");
  r248.set("category", "Technical");
  r248.set("difficulty", "Intermediate");
  r248.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is R8?");
  try { app.save(r248); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r249 = new Record(collection);
  r249.set("careerSlug", "mobile-app-developer-ios-android");
  r249.set("questionNumber", 50);
  r249.set("question", "What is app bundle vs APK?");
  r249.set("category", "Technical");
  r249.set("difficulty", "Intermediate");
  r249.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is app bundle vs APK?");
  try { app.save(r249); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r250 = new Record(collection);
  r250.set("careerSlug", "mobile-app-developer-ios-android");
  r250.set("questionNumber", 51);
  r250.set("question", "What is Gradle?");
  r250.set("category", "Behavioral");
  r250.set("difficulty", "Intermediate");
  r250.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Gradle?");
  try { app.save(r250); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r251 = new Record(collection);
  r251.set("careerSlug", "mobile-app-developer-ios-android");
  r251.set("questionNumber", 52);
  r251.set("question", "What is CocoaPods?");
  r251.set("category", "Technical");
  r251.set("difficulty", "Intermediate");
  r251.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is CocoaPods?");
  try { app.save(r251); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r252 = new Record(collection);
  r252.set("careerSlug", "mobile-app-developer-ios-android");
  r252.set("questionNumber", 53);
  r252.set("question", "What is Swift Package Manager?");
  r252.set("category", "Technical");
  r252.set("difficulty", "Intermediate");
  r252.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Swift Package Manager?");
  try { app.save(r252); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r253 = new Record(collection);
  r253.set("careerSlug", "mobile-app-developer-ios-android");
  r253.set("questionNumber", 54);
  r253.set("question", "What is memory management in iOS (ARC)?");
  r253.set("category", "System Design");
  r253.set("difficulty", "Intermediate");
  r253.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is memory management in iOS (ARC)?");
  try { app.save(r253); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r254 = new Record(collection);
  r254.set("careerSlug", "mobile-app-developer-ios-android");
  r254.set("questionNumber", 55);
  r254.set("question", "What is strong vs weak reference?");
  r254.set("category", "Technical");
  r254.set("difficulty", "Intermediate");
  r254.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is strong vs weak reference?");
  try { app.save(r254); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r255 = new Record(collection);
  r255.set("careerSlug", "mobile-app-developer-ios-android");
  r255.set("questionNumber", 56);
  r255.set("question", "What is retain cycle?");
  r255.set("category", "Technical");
  r255.set("difficulty", "Intermediate");
  r255.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is retain cycle?");
  try { app.save(r255); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r256 = new Record(collection);
  r256.set("careerSlug", "mobile-app-developer-ios-android");
  r256.set("questionNumber", 57);
  r256.set("question", "What is GCD (Grand Central Dispatch)?");
  r256.set("category", "Behavioral");
  r256.set("difficulty", "Intermediate");
  r256.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is GCD (Grand Central Dispatch)?");
  try { app.save(r256); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r257 = new Record(collection);
  r257.set("careerSlug", "mobile-app-developer-ios-android");
  r257.set("questionNumber", 58);
  r257.set("question", "What is DispatchQueue?");
  r257.set("category", "Technical");
  r257.set("difficulty", "Intermediate");
  r257.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is DispatchQueue?");
  try { app.save(r257); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r258 = new Record(collection);
  r258.set("careerSlug", "mobile-app-developer-ios-android");
  r258.set("questionNumber", 59);
  r258.set("question", "What is async/await in Swift?");
  r258.set("category", "Technical");
  r258.set("difficulty", "Intermediate");
  r258.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is async/await in Swift?");
  try { app.save(r258); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r259 = new Record(collection);
  r259.set("careerSlug", "mobile-app-developer-ios-android");
  r259.set("questionNumber", 60);
  r259.set("question", "What is coroutines in Kotlin?");
  r259.set("category", "System Design");
  r259.set("difficulty", "Intermediate");
  r259.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is coroutines in Kotlin?");
  try { app.save(r259); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r260 = new Record(collection);
  r260.set("careerSlug", "mobile-app-developer-ios-android");
  r260.set("questionNumber", 61);
  r260.set("question", "What is ANR in Android?");
  r260.set("category", "Technical");
  r260.set("difficulty", "Intermediate");
  r260.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is ANR in Android?");
  try { app.save(r260); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r261 = new Record(collection);
  r261.set("careerSlug", "mobile-app-developer-ios-android");
  r261.set("questionNumber", 62);
  r261.set("question", "What is memory leak detection?");
  r261.set("category", "Technical");
  r261.set("difficulty", "Intermediate");
  r261.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is memory leak detection?");
  try { app.save(r261); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r262 = new Record(collection);
  r262.set("careerSlug", "mobile-app-developer-ios-android");
  r262.set("questionNumber", 63);
  r262.set("question", "What is Instruments (iOS profiling)?");
  r262.set("category", "Behavioral");
  r262.set("difficulty", "Intermediate");
  r262.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Instruments (iOS profiling)?");
  try { app.save(r262); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r263 = new Record(collection);
  r263.set("careerSlug", "mobile-app-developer-ios-android");
  r263.set("questionNumber", 64);
  r263.set("question", "What is Android Profiler?");
  r263.set("category", "Technical");
  r263.set("difficulty", "Intermediate");
  r263.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is Android Profiler?");
  try { app.save(r263); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r264 = new Record(collection);
  r264.set("careerSlug", "mobile-app-developer-ios-android");
  r264.set("questionNumber", 65);
  r264.set("question", "What is accessibility in mobile?");
  r264.set("category", "Technical");
  r264.set("difficulty", "Intermediate");
  r264.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is accessibility in mobile?");
  try { app.save(r264); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r265 = new Record(collection);
  r265.set("careerSlug", "mobile-app-developer-ios-android");
  r265.set("questionNumber", 66);
  r265.set("question", "What is localization?");
  r265.set("category", "System Design");
  r265.set("difficulty", "Intermediate");
  r265.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is localization?");
  try { app.save(r265); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r266 = new Record(collection);
  r266.set("careerSlug", "mobile-app-developer-ios-android");
  r266.set("questionNumber", 67);
  r266.set("question", "What is offline-first architecture?");
  r266.set("category", "Technical");
  r266.set("difficulty", "Intermediate");
  r266.set("explanation", "Intermediate level question for Mobile App Developer (iOS/Android). What is offline-first architecture?");
  try { app.save(r266); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r267 = new Record(collection);
  r267.set("careerSlug", "mobile-app-developer-ios-android");
  r267.set("questionNumber", 68);
  r267.set("question", "What is sync strategy in mobile?");
  r267.set("category", "Technical");
  r267.set("difficulty", "Advanced");
  r267.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is sync strategy in mobile?");
  try { app.save(r267); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r268 = new Record(collection);
  r268.set("careerSlug", "mobile-app-developer-ios-android");
  r268.set("questionNumber", 69);
  r268.set("question", "What is background fetch?");
  r268.set("category", "Behavioral");
  r268.set("difficulty", "Advanced");
  r268.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is background fetch?");
  try { app.save(r268); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r269 = new Record(collection);
  r269.set("careerSlug", "mobile-app-developer-ios-android");
  r269.set("questionNumber", 70);
  r269.set("question", "What is WorkManager (Android)?");
  r269.set("category", "Technical");
  r269.set("difficulty", "Advanced");
  r269.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is WorkManager (Android)?");
  try { app.save(r269); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r270 = new Record(collection);
  r270.set("careerSlug", "mobile-app-developer-ios-android");
  r270.set("questionNumber", 71);
  r270.set("question", "What is BackgroundTasks (iOS)?");
  r270.set("category", "Technical");
  r270.set("difficulty", "Advanced");
  r270.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is BackgroundTasks (iOS)?");
  try { app.save(r270); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r271 = new Record(collection);
  r271.set("careerSlug", "mobile-app-developer-ios-android");
  r271.set("questionNumber", 72);
  r271.set("question", "What is Camera API?");
  r271.set("category", "System Design");
  r271.set("difficulty", "Advanced");
  r271.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Camera API?");
  try { app.save(r271); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r272 = new Record(collection);
  r272.set("careerSlug", "mobile-app-developer-ios-android");
  r272.set("questionNumber", 73);
  r272.set("question", "What is ARKit/ARCore?");
  r272.set("category", "Technical");
  r272.set("difficulty", "Advanced");
  r272.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is ARKit/ARCore?");
  try { app.save(r272); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r273 = new Record(collection);
  r273.set("careerSlug", "mobile-app-developer-ios-android");
  r273.set("questionNumber", 74);
  r273.set("question", "What is MapKit/Google Maps SDK?");
  r273.set("category", "Technical");
  r273.set("difficulty", "Advanced");
  r273.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is MapKit/Google Maps SDK?");
  try { app.save(r273); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r274 = new Record(collection);
  r274.set("careerSlug", "mobile-app-developer-ios-android");
  r274.set("questionNumber", 75);
  r274.set("question", "What is HealthKit?");
  r274.set("category", "Behavioral");
  r274.set("difficulty", "Advanced");
  r274.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is HealthKit?");
  try { app.save(r274); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r275 = new Record(collection);
  r275.set("careerSlug", "mobile-app-developer-ios-android");
  r275.set("questionNumber", 76);
  r275.set("question", "What is WatchOS?");
  r275.set("category", "Technical");
  r275.set("difficulty", "Advanced");
  r275.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is WatchOS?");
  try { app.save(r275); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r276 = new Record(collection);
  r276.set("careerSlug", "mobile-app-developer-ios-android");
  r276.set("questionNumber", 77);
  r276.set("question", "What is widget extension (iOS)?");
  r276.set("category", "Technical");
  r276.set("difficulty", "Advanced");
  r276.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is widget extension (iOS)?");
  try { app.save(r276); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r277 = new Record(collection);
  r277.set("careerSlug", "mobile-app-developer-ios-android");
  r277.set("questionNumber", 78);
  r277.set("question", "What is App Clips?");
  r277.set("category", "System Design");
  r277.set("difficulty", "Advanced");
  r277.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is App Clips?");
  try { app.save(r277); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r278 = new Record(collection);
  r278.set("careerSlug", "mobile-app-developer-ios-android");
  r278.set("questionNumber", 79);
  r278.set("question", "What is Instant App (Android)?");
  r278.set("category", "Technical");
  r278.set("difficulty", "Advanced");
  r278.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Instant App (Android)?");
  try { app.save(r278); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r279 = new Record(collection);
  r279.set("careerSlug", "mobile-app-developer-ios-android");
  r279.set("questionNumber", 80);
  r279.set("question", "What is Siri Shortcuts?");
  r279.set("category", "Technical");
  r279.set("difficulty", "Advanced");
  r279.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Siri Shortcuts?");
  try { app.save(r279); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r280 = new Record(collection);
  r280.set("careerSlug", "mobile-app-developer-ios-android");
  r280.set("questionNumber", 81);
  r280.set("question", "What is in-app purchase (StoreKit)?");
  r280.set("category", "Behavioral");
  r280.set("difficulty", "Advanced");
  r280.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is in-app purchase (StoreKit)?");
  try { app.save(r280); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r281 = new Record(collection);
  r281.set("careerSlug", "mobile-app-developer-ios-android");
  r281.set("questionNumber", 82);
  r281.set("question", "What is RevenueCat?");
  r281.set("category", "Technical");
  r281.set("difficulty", "Advanced");
  r281.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is RevenueCat?");
  try { app.save(r281); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r282 = new Record(collection);
  r282.set("careerSlug", "mobile-app-developer-ios-android");
  r282.set("questionNumber", 83);
  r282.set("question", "What is analytics in mobile (Firebase Analytics, Mixpanel)?");
  r282.set("category", "Technical");
  r282.set("difficulty", "Advanced");
  r282.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is analytics in mobile (Firebase Analytics, Mixpanel)?");
  try { app.save(r282); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r283 = new Record(collection);
  r283.set("careerSlug", "mobile-app-developer-ios-android");
  r283.set("questionNumber", 84);
  r283.set("question", "What is crash reporting (Crashlytics)?");
  r283.set("category", "System Design");
  r283.set("difficulty", "Advanced");
  r283.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is crash reporting (Crashlytics)?");
  try { app.save(r283); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r284 = new Record(collection);
  r284.set("careerSlug", "mobile-app-developer-ios-android");
  r284.set("questionNumber", 85);
  r284.set("question", "What is A/B testing in mobile?");
  r284.set("category", "Technical");
  r284.set("difficulty", "Advanced");
  r284.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is A/B testing in mobile?");
  try { app.save(r284); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r285 = new Record(collection);
  r285.set("careerSlug", "mobile-app-developer-ios-android");
  r285.set("questionNumber", 86);
  r285.set("question", "What is CI/CD for mobile (Fastlane, Bitrise)?");
  r285.set("category", "Technical");
  r285.set("difficulty", "Advanced");
  r285.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is CI/CD for mobile (Fastlane, Bitrise)?");
  try { app.save(r285); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r286 = new Record(collection);
  r286.set("careerSlug", "mobile-app-developer-ios-android");
  r286.set("questionNumber", 87);
  r286.set("question", "What is unit testing in Swift (XCTest)?");
  r286.set("category", "Behavioral");
  r286.set("difficulty", "Advanced");
  r286.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is unit testing in Swift (XCTest)?");
  try { app.save(r286); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r287 = new Record(collection);
  r287.set("careerSlug", "mobile-app-developer-ios-android");
  r287.set("questionNumber", 88);
  r287.set("question", "What is instrumentation testing in Android?");
  r287.set("category", "Technical");
  r287.set("difficulty", "Advanced");
  r287.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is instrumentation testing in Android?");
  try { app.save(r287); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r288 = new Record(collection);
  r288.set("careerSlug", "mobile-app-developer-ios-android");
  r288.set("questionNumber", 89);
  r288.set("question", "What is snapshot testing?");
  r288.set("category", "Technical");
  r288.set("difficulty", "Advanced");
  r288.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is snapshot testing?");
  try { app.save(r288); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r289 = new Record(collection);
  r289.set("careerSlug", "mobile-app-developer-ios-android");
  r289.set("questionNumber", 90);
  r289.set("question", "What is UI testing?");
  r289.set("category", "System Design");
  r289.set("difficulty", "Advanced");
  r289.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is UI testing?");
  try { app.save(r289); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r290 = new Record(collection);
  r290.set("careerSlug", "mobile-app-developer-ios-android");
  r290.set("questionNumber", 91);
  r290.set("question", "What is mocking in mobile testing?");
  r290.set("category", "Technical");
  r290.set("difficulty", "Advanced");
  r290.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is mocking in mobile testing?");
  try { app.save(r290); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r291 = new Record(collection);
  r291.set("careerSlug", "mobile-app-developer-ios-android");
  r291.set("questionNumber", 92);
  r291.set("question", "What is modular architecture in mobile?");
  r291.set("category", "Technical");
  r291.set("difficulty", "Advanced");
  r291.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is modular architecture in mobile?");
  try { app.save(r291); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r292 = new Record(collection);
  r292.set("careerSlug", "mobile-app-developer-ios-android");
  r292.set("questionNumber", 93);
  r292.set("question", "What is clean architecture for mobile?");
  r292.set("category", "Behavioral");
  r292.set("difficulty", "Advanced");
  r292.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is clean architecture for mobile?");
  try { app.save(r292); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r293 = new Record(collection);
  r293.set("careerSlug", "mobile-app-developer-ios-android");
  r293.set("questionNumber", 94);
  r293.set("question", "What is TCA (The Composable Architecture)?");
  r293.set("category", "Technical");
  r293.set("difficulty", "Advanced");
  r293.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is TCA (The Composable Architecture)?");
  try { app.save(r293); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r294 = new Record(collection);
  r294.set("careerSlug", "mobile-app-developer-ios-android");
  r294.set("questionNumber", 95);
  r294.set("question", "What is Redux in React Native?");
  r294.set("category", "Technical");
  r294.set("difficulty", "Advanced");
  r294.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Redux in React Native?");
  try { app.save(r294); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r295 = new Record(collection);
  r295.set("careerSlug", "mobile-app-developer-ios-android");
  r295.set("questionNumber", 96);
  r295.set("question", "What is Zustand in React Native?");
  r295.set("category", "System Design");
  r295.set("difficulty", "Advanced");
  r295.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Zustand in React Native?");
  try { app.save(r295); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r296 = new Record(collection);
  r296.set("careerSlug", "mobile-app-developer-ios-android");
  r296.set("questionNumber", 97);
  r296.set("question", "What is Expo?");
  r296.set("category", "Technical");
  r296.set("difficulty", "Advanced");
  r296.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Expo?");
  try { app.save(r296); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r297 = new Record(collection);
  r297.set("careerSlug", "mobile-app-developer-ios-android");
  r297.set("questionNumber", 98);
  r297.set("question", "What is OTA updates in Expo?");
  r297.set("category", "Technical");
  r297.set("difficulty", "Advanced");
  r297.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is OTA updates in Expo?");
  try { app.save(r297); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r298 = new Record(collection);
  r298.set("careerSlug", "mobile-app-developer-ios-android");
  r298.set("questionNumber", 99);
  r298.set("question", "What is Flutter state management (Bloc, Provider, Riverpod)?");
  r298.set("category", "Behavioral");
  r298.set("difficulty", "Advanced");
  r298.set("explanation", "Advanced level question for Mobile App Developer (iOS/Android). What is Flutter state management (Bloc, Provider, Riverpod)?");
  try { app.save(r298); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r299 = new Record(collection);
  r299.set("careerSlug", "product-manager-technical");
  r299.set("questionNumber", 1);
  r299.set("question", "What is a PRD?");
  r299.set("category", "Technical");
  r299.set("difficulty", "Beginner");
  r299.set("explanation", "Beginner level question for Product Manager (Technical). What is a PRD?");
  try { app.save(r299); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r300 = new Record(collection);
  r300.set("careerSlug", "product-manager-technical");
  r300.set("questionNumber", 2);
  r300.set("question", "What is an MRD?");
  r300.set("category", "Technical");
  r300.set("difficulty", "Beginner");
  r300.set("explanation", "Beginner level question for Product Manager (Technical). What is an MRD?");
  try { app.save(r300); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r301 = new Record(collection);
  r301.set("careerSlug", "product-manager-technical");
  r301.set("questionNumber", 3);
  r301.set("question", "What is product-market fit?");
  r301.set("category", "Behavioral");
  r301.set("difficulty", "Beginner");
  r301.set("explanation", "Beginner level question for Product Manager (Technical). What is product-market fit?");
  try { app.save(r301); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r302 = new Record(collection);
  r302.set("careerSlug", "product-manager-technical");
  r302.set("questionNumber", 4);
  r302.set("question", "What is TAM/SAM/SOM?");
  r302.set("category", "Technical");
  r302.set("difficulty", "Beginner");
  r302.set("explanation", "Beginner level question for Product Manager (Technical). What is TAM/SAM/SOM?");
  try { app.save(r302); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r303 = new Record(collection);
  r303.set("careerSlug", "product-manager-technical");
  r303.set("questionNumber", 5);
  r303.set("question", "What are OKRs?");
  r303.set("category", "Technical");
  r303.set("difficulty", "Beginner");
  r303.set("explanation", "Beginner level question for Product Manager (Technical). What are OKRs?");
  try { app.save(r303); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r304 = new Record(collection);
  r304.set("careerSlug", "product-manager-technical");
  r304.set("questionNumber", 6);
  r304.set("question", "What is a KPI?");
  r304.set("category", "System Design");
  r304.set("difficulty", "Beginner");
  r304.set("explanation", "Beginner level question for Product Manager (Technical). What is a KPI?");
  try { app.save(r304); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r305 = new Record(collection);
  r305.set("careerSlug", "product-manager-technical");
  r305.set("questionNumber", 7);
  r305.set("question", "What is NPS?");
  r305.set("category", "Technical");
  r305.set("difficulty", "Beginner");
  r305.set("explanation", "Beginner level question for Product Manager (Technical). What is NPS?");
  try { app.save(r305); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r306 = new Record(collection);
  r306.set("careerSlug", "product-manager-technical");
  r306.set("questionNumber", 8);
  r306.set("question", "What is DAU/MAU?");
  r306.set("category", "Technical");
  r306.set("difficulty", "Beginner");
  r306.set("explanation", "Beginner level question for Product Manager (Technical). What is DAU/MAU?");
  try { app.save(r306); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r307 = new Record(collection);
  r307.set("careerSlug", "product-manager-technical");
  r307.set("questionNumber", 9);
  r307.set("question", "What is retention?");
  r307.set("category", "Behavioral");
  r307.set("difficulty", "Beginner");
  r307.set("explanation", "Beginner level question for Product Manager (Technical). What is retention?");
  try { app.save(r307); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r308 = new Record(collection);
  r308.set("careerSlug", "product-manager-technical");
  r308.set("questionNumber", 10);
  r308.set("question", "What is churn?");
  r308.set("category", "Technical");
  r308.set("difficulty", "Beginner");
  r308.set("explanation", "Beginner level question for Product Manager (Technical). What is churn?");
  try { app.save(r308); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r309 = new Record(collection);
  r309.set("careerSlug", "product-manager-technical");
  r309.set("questionNumber", 11);
  r309.set("question", "What is CAC?");
  r309.set("category", "Technical");
  r309.set("difficulty", "Beginner");
  r309.set("explanation", "Beginner level question for Product Manager (Technical). What is CAC?");
  try { app.save(r309); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r310 = new Record(collection);
  r310.set("careerSlug", "product-manager-technical");
  r310.set("questionNumber", 12);
  r310.set("question", "What is LTV?");
  r310.set("category", "System Design");
  r310.set("difficulty", "Beginner");
  r310.set("explanation", "Beginner level question for Product Manager (Technical). What is LTV?");
  try { app.save(r310); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r311 = new Record(collection);
  r311.set("careerSlug", "product-manager-technical");
  r311.set("questionNumber", 13);
  r311.set("question", "What is the RICE framework?");
  r311.set("category", "Technical");
  r311.set("difficulty", "Beginner");
  r311.set("explanation", "Beginner level question for Product Manager (Technical). What is the RICE framework?");
  try { app.save(r311); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r312 = new Record(collection);
  r312.set("careerSlug", "product-manager-technical");
  r312.set("questionNumber", 14);
  r312.set("question", "What is the MoSCoW framework?");
  r312.set("category", "Technical");
  r312.set("difficulty", "Beginner");
  r312.set("explanation", "Beginner level question for Product Manager (Technical). What is the MoSCoW framework?");
  try { app.save(r312); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r313 = new Record(collection);
  r313.set("careerSlug", "product-manager-technical");
  r313.set("questionNumber", 15);
  r313.set("question", "What is the Kano model?");
  r313.set("category", "Behavioral");
  r313.set("difficulty", "Beginner");
  r313.set("explanation", "Beginner level question for Product Manager (Technical). What is the Kano model?");
  try { app.save(r313); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r314 = new Record(collection);
  r314.set("careerSlug", "product-manager-technical");
  r314.set("questionNumber", 16);
  r314.set("question", "What is user story?");
  r314.set("category", "Technical");
  r314.set("difficulty", "Beginner");
  r314.set("explanation", "Beginner level question for Product Manager (Technical). What is user story?");
  try { app.save(r314); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r315 = new Record(collection);
  r315.set("careerSlug", "product-manager-technical");
  r315.set("questionNumber", 17);
  r315.set("question", "What is acceptance criteria?");
  r315.set("category", "Technical");
  r315.set("difficulty", "Beginner");
  r315.set("explanation", "Beginner level question for Product Manager (Technical). What is acceptance criteria?");
  try { app.save(r315); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r316 = new Record(collection);
  r316.set("careerSlug", "product-manager-technical");
  r316.set("questionNumber", 18);
  r316.set("question", "What is agile?");
  r316.set("category", "System Design");
  r316.set("difficulty", "Beginner");
  r316.set("explanation", "Beginner level question for Product Manager (Technical). What is agile?");
  try { app.save(r316); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r317 = new Record(collection);
  r317.set("careerSlug", "product-manager-technical");
  r317.set("questionNumber", 19);
  r317.set("question", "What is scrum?");
  r317.set("category", "Technical");
  r317.set("difficulty", "Beginner");
  r317.set("explanation", "Beginner level question for Product Manager (Technical). What is scrum?");
  try { app.save(r317); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r318 = new Record(collection);
  r318.set("careerSlug", "product-manager-technical");
  r318.set("questionNumber", 20);
  r318.set("question", "What is sprint?");
  r318.set("category", "Technical");
  r318.set("difficulty", "Beginner");
  r318.set("explanation", "Beginner level question for Product Manager (Technical). What is sprint?");
  try { app.save(r318); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r319 = new Record(collection);
  r319.set("careerSlug", "product-manager-technical");
  r319.set("questionNumber", 21);
  r319.set("question", "What is backlog grooming?");
  r319.set("category", "Behavioral");
  r319.set("difficulty", "Beginner");
  r319.set("explanation", "Beginner level question for Product Manager (Technical). What is backlog grooming?");
  try { app.save(r319); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r320 = new Record(collection);
  r320.set("careerSlug", "product-manager-technical");
  r320.set("questionNumber", 22);
  r320.set("question", "What is sprint planning?");
  r320.set("category", "Technical");
  r320.set("difficulty", "Beginner");
  r320.set("explanation", "Beginner level question for Product Manager (Technical). What is sprint planning?");
  try { app.save(r320); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r321 = new Record(collection);
  r321.set("careerSlug", "product-manager-technical");
  r321.set("questionNumber", 23);
  r321.set("question", "What is retrospective?");
  r321.set("category", "Technical");
  r321.set("difficulty", "Beginner");
  r321.set("explanation", "Beginner level question for Product Manager (Technical). What is retrospective?");
  try { app.save(r321); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r322 = new Record(collection);
  r322.set("careerSlug", "product-manager-technical");
  r322.set("questionNumber", 24);
  r322.set("question", "What is a stakeholder map?");
  r322.set("category", "System Design");
  r322.set("difficulty", "Beginner");
  r322.set("explanation", "Beginner level question for Product Manager (Technical). What is a stakeholder map?");
  try { app.save(r322); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r323 = new Record(collection);
  r323.set("careerSlug", "product-manager-technical");
  r323.set("questionNumber", 25);
  r323.set("question", "What is discovery vs delivery?");
  r323.set("category", "Technical");
  r323.set("difficulty", "Beginner");
  r323.set("explanation", "Beginner level question for Product Manager (Technical). What is discovery vs delivery?");
  try { app.save(r323); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r324 = new Record(collection);
  r324.set("careerSlug", "product-manager-technical");
  r324.set("questionNumber", 26);
  r324.set("question", "What is design thinking?");
  r324.set("category", "Technical");
  r324.set("difficulty", "Beginner");
  r324.set("explanation", "Beginner level question for Product Manager (Technical). What is design thinking?");
  try { app.save(r324); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r325 = new Record(collection);
  r325.set("careerSlug", "product-manager-technical");
  r325.set("questionNumber", 27);
  r325.set("question", "What is double diamond?");
  r325.set("category", "Behavioral");
  r325.set("difficulty", "Beginner");
  r325.set("explanation", "Beginner level question for Product Manager (Technical). What is double diamond?");
  try { app.save(r325); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r326 = new Record(collection);
  r326.set("careerSlug", "product-manager-technical");
  r326.set("questionNumber", 28);
  r326.set("question", "What is user journey mapping?");
  r326.set("category", "Technical");
  r326.set("difficulty", "Beginner");
  r326.set("explanation", "Beginner level question for Product Manager (Technical). What is user journey mapping?");
  try { app.save(r326); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r327 = new Record(collection);
  r327.set("careerSlug", "product-manager-technical");
  r327.set("questionNumber", 29);
  r327.set("question", "What is a persona?");
  r327.set("category", "Technical");
  r327.set("difficulty", "Beginner");
  r327.set("explanation", "Beginner level question for Product Manager (Technical). What is a persona?");
  try { app.save(r327); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r328 = new Record(collection);
  r328.set("careerSlug", "product-manager-technical");
  r328.set("questionNumber", 30);
  r328.set("question", "What is JTBD (Jobs to be Done)?");
  r328.set("category", "System Design");
  r328.set("difficulty", "Beginner");
  r328.set("explanation", "Beginner level question for Product Manager (Technical). What is JTBD (Jobs to be Done)?");
  try { app.save(r328); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r329 = new Record(collection);
  r329.set("careerSlug", "product-manager-technical");
  r329.set("questionNumber", 31);
  r329.set("question", "What is A/B testing?");
  r329.set("category", "Technical");
  r329.set("difficulty", "Beginner");
  r329.set("explanation", "Beginner level question for Product Manager (Technical). What is A/B testing?");
  try { app.save(r329); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r330 = new Record(collection);
  r330.set("careerSlug", "product-manager-technical");
  r330.set("questionNumber", 32);
  r330.set("question", "What is feature flag?");
  r330.set("category", "Technical");
  r330.set("difficulty", "Beginner");
  r330.set("explanation", "Beginner level question for Product Manager (Technical). What is feature flag?");
  try { app.save(r330); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r331 = new Record(collection);
  r331.set("careerSlug", "product-manager-technical");
  r331.set("questionNumber", 33);
  r331.set("question", "What is MVP?");
  r331.set("category", "Behavioral");
  r331.set("difficulty", "Beginner");
  r331.set("explanation", "Beginner level question for Product Manager (Technical). What is MVP?");
  try { app.save(r331); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r332 = new Record(collection);
  r332.set("careerSlug", "product-manager-technical");
  r332.set("questionNumber", 34);
  r332.set("question", "What is MLP?");
  r332.set("category", "Technical");
  r332.set("difficulty", "Intermediate");
  r332.set("explanation", "Intermediate level question for Product Manager (Technical). What is MLP?");
  try { app.save(r332); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r333 = new Record(collection);
  r333.set("careerSlug", "product-manager-technical");
  r333.set("questionNumber", 35);
  r333.set("question", "What is north star metric?");
  r333.set("category", "Technical");
  r333.set("difficulty", "Intermediate");
  r333.set("explanation", "Intermediate level question for Product Manager (Technical). What is north star metric?");
  try { app.save(r333); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r334 = new Record(collection);
  r334.set("careerSlug", "product-manager-technical");
  r334.set("questionNumber", 36);
  r334.set("question", "What is a funnel?");
  r334.set("category", "System Design");
  r334.set("difficulty", "Intermediate");
  r334.set("explanation", "Intermediate level question for Product Manager (Technical). What is a funnel?");
  try { app.save(r334); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r335 = new Record(collection);
  r335.set("careerSlug", "product-manager-technical");
  r335.set("questionNumber", 37);
  r335.set("question", "What is conversion rate?");
  r335.set("category", "Technical");
  r335.set("difficulty", "Intermediate");
  r335.set("explanation", "Intermediate level question for Product Manager (Technical). What is conversion rate?");
  try { app.save(r335); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r336 = new Record(collection);
  r336.set("careerSlug", "product-manager-technical");
  r336.set("questionNumber", 38);
  r336.set("question", "What is activation?");
  r336.set("category", "Technical");
  r336.set("difficulty", "Intermediate");
  r336.set("explanation", "Intermediate level question for Product Manager (Technical). What is activation?");
  try { app.save(r336); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r337 = new Record(collection);
  r337.set("careerSlug", "product-manager-technical");
  r337.set("questionNumber", 39);
  r337.set("question", "What is onboarding?");
  r337.set("category", "Behavioral");
  r337.set("difficulty", "Intermediate");
  r337.set("explanation", "Intermediate level question for Product Manager (Technical). What is onboarding?");
  try { app.save(r337); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r338 = new Record(collection);
  r338.set("careerSlug", "product-manager-technical");
  r338.set("questionNumber", 40);
  r338.set("question", "What is feature adoption?");
  r338.set("category", "Technical");
  r338.set("difficulty", "Intermediate");
  r338.set("explanation", "Intermediate level question for Product Manager (Technical). What is feature adoption?");
  try { app.save(r338); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r339 = new Record(collection);
  r339.set("careerSlug", "product-manager-technical");
  r339.set("questionNumber", 41);
  r339.set("question", "What is virality?");
  r339.set("category", "Technical");
  r339.set("difficulty", "Intermediate");
  r339.set("explanation", "Intermediate level question for Product Manager (Technical). What is virality?");
  try { app.save(r339); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r340 = new Record(collection);
  r340.set("careerSlug", "product-manager-technical");
  r340.set("questionNumber", 42);
  r340.set("question", "What is network effect?");
  r340.set("category", "System Design");
  r340.set("difficulty", "Intermediate");
  r340.set("explanation", "Intermediate level question for Product Manager (Technical). What is network effect?");
  try { app.save(r340); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r341 = new Record(collection);
  r341.set("careerSlug", "product-manager-technical");
  r341.set("questionNumber", 43);
  r341.set("question", "What is platform business model?");
  r341.set("category", "Technical");
  r341.set("difficulty", "Intermediate");
  r341.set("explanation", "Intermediate level question for Product Manager (Technical). What is platform business model?");
  try { app.save(r341); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r342 = new Record(collection);
  r342.set("careerSlug", "product-manager-technical");
  r342.set("questionNumber", 44);
  r342.set("question", "What is marketplace dynamics?");
  r342.set("category", "Technical");
  r342.set("difficulty", "Intermediate");
  r342.set("explanation", "Intermediate level question for Product Manager (Technical). What is marketplace dynamics?");
  try { app.save(r342); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r343 = new Record(collection);
  r343.set("careerSlug", "product-manager-technical");
  r343.set("questionNumber", 45);
  r343.set("question", "What is pricing strategy?");
  r343.set("category", "Behavioral");
  r343.set("difficulty", "Intermediate");
  r343.set("explanation", "Intermediate level question for Product Manager (Technical). What is pricing strategy?");
  try { app.save(r343); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r344 = new Record(collection);
  r344.set("careerSlug", "product-manager-technical");
  r344.set("questionNumber", 46);
  r344.set("question", "What is freemium model?");
  r344.set("category", "Technical");
  r344.set("difficulty", "Intermediate");
  r344.set("explanation", "Intermediate level question for Product Manager (Technical). What is freemium model?");
  try { app.save(r344); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r345 = new Record(collection);
  r345.set("careerSlug", "product-manager-technical");
  r345.set("questionNumber", 47);
  r345.set("question", "What is PLG (Product-Led Growth)?");
  r345.set("category", "Technical");
  r345.set("difficulty", "Intermediate");
  r345.set("explanation", "Intermediate level question for Product Manager (Technical). What is PLG (Product-Led Growth)?");
  try { app.save(r345); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r346 = new Record(collection);
  r346.set("careerSlug", "product-manager-technical");
  r346.set("questionNumber", 48);
  r346.set("question", "What is SLG (Sales-Led Growth)?");
  r346.set("category", "System Design");
  r346.set("difficulty", "Intermediate");
  r346.set("explanation", "Intermediate level question for Product Manager (Technical). What is SLG (Sales-Led Growth)?");
  try { app.save(r346); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r347 = new Record(collection);
  r347.set("careerSlug", "product-manager-technical");
  r347.set("questionNumber", 49);
  r347.set("question", "What is roadmap?");
  r347.set("category", "Technical");
  r347.set("difficulty", "Intermediate");
  r347.set("explanation", "Intermediate level question for Product Manager (Technical). What is roadmap?");
  try { app.save(r347); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r348 = new Record(collection);
  r348.set("careerSlug", "product-manager-technical");
  r348.set("questionNumber", 50);
  r348.set("question", "What is theme vs initiative vs epic vs story?");
  r348.set("category", "Technical");
  r348.set("difficulty", "Intermediate");
  r348.set("explanation", "Intermediate level question for Product Manager (Technical). What is theme vs initiative vs epic vs story?");
  try { app.save(r348); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r349 = new Record(collection);
  r349.set("careerSlug", "product-manager-technical");
  r349.set("questionNumber", 51);
  r349.set("question", "What is technical debt?");
  r349.set("category", "Behavioral");
  r349.set("difficulty", "Intermediate");
  r349.set("explanation", "Intermediate level question for Product Manager (Technical). What is technical debt?");
  try { app.save(r349); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r350 = new Record(collection);
  r350.set("careerSlug", "product-manager-technical");
  r350.set("questionNumber", 52);
  r350.set("question", "What is system design for PMs?");
  r350.set("category", "Technical");
  r350.set("difficulty", "Intermediate");
  r350.set("explanation", "Intermediate level question for Product Manager (Technical). What is system design for PMs?");
  try { app.save(r350); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r351 = new Record(collection);
  r351.set("careerSlug", "product-manager-technical");
  r351.set("questionNumber", 53);
  r351.set("question", "What is API for PMs?");
  r351.set("category", "Technical");
  r351.set("difficulty", "Intermediate");
  r351.set("explanation", "Intermediate level question for Product Manager (Technical). What is API for PMs?");
  try { app.save(r351); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r352 = new Record(collection);
  r352.set("careerSlug", "product-manager-technical");
  r352.set("questionNumber", 54);
  r352.set("question", "What is database for PMs?");
  r352.set("category", "System Design");
  r352.set("difficulty", "Intermediate");
  r352.set("explanation", "Intermediate level question for Product Manager (Technical). What is database for PMs?");
  try { app.save(r352); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r353 = new Record(collection);
  r353.set("careerSlug", "product-manager-technical");
  r353.set("questionNumber", 55);
  r353.set("question", "What is microservices for PMs?");
  r353.set("category", "Technical");
  r353.set("difficulty", "Intermediate");
  r353.set("explanation", "Intermediate level question for Product Manager (Technical). What is microservices for PMs?");
  try { app.save(r353); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r354 = new Record(collection);
  r354.set("careerSlug", "product-manager-technical");
  r354.set("questionNumber", 56);
  r354.set("question", "What is latency from PM perspective?");
  r354.set("category", "Technical");
  r354.set("difficulty", "Intermediate");
  r354.set("explanation", "Intermediate level question for Product Manager (Technical). What is latency from PM perspective?");
  try { app.save(r354); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r355 = new Record(collection);
  r355.set("careerSlug", "product-manager-technical");
  r355.set("questionNumber", 57);
  r355.set("question", "What is scalability for PMs?");
  r355.set("category", "Behavioral");
  r355.set("difficulty", "Intermediate");
  r355.set("explanation", "Intermediate level question for Product Manager (Technical). What is scalability for PMs?");
  try { app.save(r355); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r356 = new Record(collection);
  r356.set("careerSlug", "product-manager-technical");
  r356.set("questionNumber", 58);
  r356.set("question", "What is data pipeline for PMs?");
  r356.set("category", "Technical");
  r356.set("difficulty", "Intermediate");
  r356.set("explanation", "Intermediate level question for Product Manager (Technical). What is data pipeline for PMs?");
  try { app.save(r356); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r357 = new Record(collection);
  r357.set("careerSlug", "product-manager-technical");
  r357.set("questionNumber", 59);
  r357.set("question", "What is ML for PMs?");
  r357.set("category", "Technical");
  r357.set("difficulty", "Intermediate");
  r357.set("explanation", "Intermediate level question for Product Manager (Technical). What is ML for PMs?");
  try { app.save(r357); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r358 = new Record(collection);
  r358.set("careerSlug", "product-manager-technical");
  r358.set("questionNumber", 60);
  r358.set("question", "What is AI product management?");
  r358.set("category", "System Design");
  r358.set("difficulty", "Intermediate");
  r358.set("explanation", "Intermediate level question for Product Manager (Technical). What is AI product management?");
  try { app.save(r358); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r359 = new Record(collection);
  r359.set("careerSlug", "product-manager-technical");
  r359.set("questionNumber", 61);
  r359.set("question", "What is a feature rollout?");
  r359.set("category", "Technical");
  r359.set("difficulty", "Intermediate");
  r359.set("explanation", "Intermediate level question for Product Manager (Technical). What is a feature rollout?");
  try { app.save(r359); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r360 = new Record(collection);
  r360.set("careerSlug", "product-manager-technical");
  r360.set("questionNumber", 62);
  r360.set("question", "What is phased rollout?");
  r360.set("category", "Technical");
  r360.set("difficulty", "Intermediate");
  r360.set("explanation", "Intermediate level question for Product Manager (Technical). What is phased rollout?");
  try { app.save(r360); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r361 = new Record(collection);
  r361.set("careerSlug", "product-manager-technical");
  r361.set("questionNumber", 63);
  r361.set("question", "What is go-to-market strategy?");
  r361.set("category", "Behavioral");
  r361.set("difficulty", "Intermediate");
  r361.set("explanation", "Intermediate level question for Product Manager (Technical). What is go-to-market strategy?");
  try { app.save(r361); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r362 = new Record(collection);
  r362.set("careerSlug", "product-manager-technical");
  r362.set("questionNumber", 64);
  r362.set("question", "What is competitive moat?");
  r362.set("category", "Technical");
  r362.set("difficulty", "Intermediate");
  r362.set("explanation", "Intermediate level question for Product Manager (Technical). What is competitive moat?");
  try { app.save(r362); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r363 = new Record(collection);
  r363.set("careerSlug", "product-manager-technical");
  r363.set("questionNumber", 65);
  r363.set("question", "What is product differentiation?");
  r363.set("category", "Technical");
  r363.set("difficulty", "Intermediate");
  r363.set("explanation", "Intermediate level question for Product Manager (Technical). What is product differentiation?");
  try { app.save(r363); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r364 = new Record(collection);
  r364.set("careerSlug", "product-manager-technical");
  r364.set("questionNumber", 66);
  r364.set("question", "What is positioning?");
  r364.set("category", "System Design");
  r364.set("difficulty", "Intermediate");
  r364.set("explanation", "Intermediate level question for Product Manager (Technical). What is positioning?");
  try { app.save(r364); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r365 = new Record(collection);
  r365.set("careerSlug", "product-manager-technical");
  r365.set("questionNumber", 67);
  r365.set("question", "What is messaging?");
  r365.set("category", "Technical");
  r365.set("difficulty", "Intermediate");
  r365.set("explanation", "Intermediate level question for Product Manager (Technical). What is messaging?");
  try { app.save(r365); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r366 = new Record(collection);
  r366.set("careerSlug", "product-manager-technical");
  r366.set("questionNumber", 68);
  r366.set("question", "What is ICP (Ideal Customer Profile)?");
  r366.set("category", "Technical");
  r366.set("difficulty", "Advanced");
  r366.set("explanation", "Advanced level question for Product Manager (Technical). What is ICP (Ideal Customer Profile)?");
  try { app.save(r366); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r367 = new Record(collection);
  r367.set("careerSlug", "product-manager-technical");
  r367.set("questionNumber", 69);
  r367.set("question", "What is segmentation?");
  r367.set("category", "Behavioral");
  r367.set("difficulty", "Advanced");
  r367.set("explanation", "Advanced level question for Product Manager (Technical). What is segmentation?");
  try { app.save(r367); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r368 = new Record(collection);
  r368.set("careerSlug", "product-manager-technical");
  r368.set("questionNumber", 70);
  r368.set("question", "What is cohort analysis?");
  r368.set("category", "Technical");
  r368.set("difficulty", "Advanced");
  r368.set("explanation", "Advanced level question for Product Manager (Technical). What is cohort analysis?");
  try { app.save(r368); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r369 = new Record(collection);
  r369.set("careerSlug", "product-manager-technical");
  r369.set("questionNumber", 71);
  r369.set("question", "What is product analytics?");
  r369.set("category", "Technical");
  r369.set("difficulty", "Advanced");
  r369.set("explanation", "Advanced level question for Product Manager (Technical). What is product analytics?");
  try { app.save(r369); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r370 = new Record(collection);
  r370.set("careerSlug", "product-manager-technical");
  r370.set("questionNumber", 72);
  r370.set("question", "What is event tracking?");
  r370.set("category", "System Design");
  r370.set("difficulty", "Advanced");
  r370.set("explanation", "Advanced level question for Product Manager (Technical). What is event tracking?");
  try { app.save(r370); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r371 = new Record(collection);
  r371.set("careerSlug", "product-manager-technical");
  r371.set("questionNumber", 73);
  r371.set("question", "What is funnel analysis in analytics?");
  r371.set("category", "Technical");
  r371.set("difficulty", "Advanced");
  r371.set("explanation", "Advanced level question for Product Manager (Technical). What is funnel analysis in analytics?");
  try { app.save(r371); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r372 = new Record(collection);
  r372.set("careerSlug", "product-manager-technical");
  r372.set("questionNumber", 74);
  r372.set("question", "What is heatmap?");
  r372.set("category", "Technical");
  r372.set("difficulty", "Advanced");
  r372.set("explanation", "Advanced level question for Product Manager (Technical). What is heatmap?");
  try { app.save(r372); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r373 = new Record(collection);
  r373.set("careerSlug", "product-manager-technical");
  r373.set("questionNumber", 75);
  r373.set("question", "What is session recording?");
  r373.set("category", "Behavioral");
  r373.set("difficulty", "Advanced");
  r373.set("explanation", "Advanced level question for Product Manager (Technical). What is session recording?");
  try { app.save(r373); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r374 = new Record(collection);
  r374.set("careerSlug", "product-manager-technical");
  r374.set("questionNumber", 76);
  r374.set("question", "What is UX research methods?");
  r374.set("category", "Technical");
  r374.set("difficulty", "Advanced");
  r374.set("explanation", "Advanced level question for Product Manager (Technical). What is UX research methods?");
  try { app.save(r374); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r375 = new Record(collection);
  r375.set("careerSlug", "product-manager-technical");
  r375.set("questionNumber", 77);
  r375.set("question", "What is usability testing?");
  r375.set("category", "Technical");
  r375.set("difficulty", "Advanced");
  r375.set("explanation", "Advanced level question for Product Manager (Technical). What is usability testing?");
  try { app.save(r375); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r376 = new Record(collection);
  r376.set("careerSlug", "product-manager-technical");
  r376.set("questionNumber", 78);
  r376.set("question", "What is tree testing?");
  r376.set("category", "System Design");
  r376.set("difficulty", "Advanced");
  r376.set("explanation", "Advanced level question for Product Manager (Technical). What is tree testing?");
  try { app.save(r376); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r377 = new Record(collection);
  r377.set("careerSlug", "product-manager-technical");
  r377.set("questionNumber", 79);
  r377.set("question", "What is card sorting?");
  r377.set("category", "Technical");
  r377.set("difficulty", "Advanced");
  r377.set("explanation", "Advanced level question for Product Manager (Technical). What is card sorting?");
  try { app.save(r377); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r378 = new Record(collection);
  r378.set("careerSlug", "product-manager-technical");
  r378.set("questionNumber", 80);
  r378.set("question", "What is survey design?");
  r378.set("category", "Technical");
  r378.set("difficulty", "Advanced");
  r378.set("explanation", "Advanced level question for Product Manager (Technical). What is survey design?");
  try { app.save(r378); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r379 = new Record(collection);
  r379.set("careerSlug", "product-manager-technical");
  r379.set("questionNumber", 81);
  r379.set("question", "What is AARRR (Pirate Metrics)?");
  r379.set("category", "Behavioral");
  r379.set("difficulty", "Advanced");
  r379.set("explanation", "Advanced level question for Product Manager (Technical). What is AARRR (Pirate Metrics)?");
  try { app.save(r379); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r380 = new Record(collection);
  r380.set("careerSlug", "product-manager-technical");
  r380.set("questionNumber", 82);
  r380.set("question", "What is growth hacking?");
  r380.set("category", "Technical");
  r380.set("difficulty", "Advanced");
  r380.set("explanation", "Advanced level question for Product Manager (Technical). What is growth hacking?");
  try { app.save(r380); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r381 = new Record(collection);
  r381.set("careerSlug", "product-manager-technical");
  r381.set("questionNumber", 83);
  r381.set("question", "What is viral coefficient?");
  r381.set("category", "Technical");
  r381.set("difficulty", "Advanced");
  r381.set("explanation", "Advanced level question for Product Manager (Technical). What is viral coefficient?");
  try { app.save(r381); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r382 = new Record(collection);
  r382.set("careerSlug", "product-manager-technical");
  r382.set("questionNumber", 84);
  r382.set("question", "What is referral program?");
  r382.set("category", "System Design");
  r382.set("difficulty", "Advanced");
  r382.set("explanation", "Advanced level question for Product Manager (Technical). What is referral program?");
  try { app.save(r382); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r383 = new Record(collection);
  r383.set("careerSlug", "product-manager-technical");
  r383.set("questionNumber", 85);
  r383.set("question", "What is notification strategy?");
  r383.set("category", "Technical");
  r383.set("difficulty", "Advanced");
  r383.set("explanation", "Advanced level question for Product Manager (Technical). What is notification strategy?");
  try { app.save(r383); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r384 = new Record(collection);
  r384.set("careerSlug", "product-manager-technical");
  r384.set("questionNumber", 86);
  r384.set("question", "What is push vs pull in product?");
  r384.set("category", "Technical");
  r384.set("difficulty", "Advanced");
  r384.set("explanation", "Advanced level question for Product Manager (Technical). What is push vs pull in product?");
  try { app.save(r384); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r385 = new Record(collection);
  r385.set("careerSlug", "product-manager-technical");
  r385.set("questionNumber", 87);
  r385.set("question", "What is habit loop?");
  r385.set("category", "Behavioral");
  r385.set("difficulty", "Advanced");
  r385.set("explanation", "Advanced level question for Product Manager (Technical). What is habit loop?");
  try { app.save(r385); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r386 = new Record(collection);
  r386.set("careerSlug", "product-manager-technical");
  r386.set("questionNumber", 88);
  r386.set("question", "What is behavioral economics in product?");
  r386.set("category", "Technical");
  r386.set("difficulty", "Advanced");
  r386.set("explanation", "Advanced level question for Product Manager (Technical). What is behavioral economics in product?");
  try { app.save(r386); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r387 = new Record(collection);
  r387.set("careerSlug", "product-manager-technical");
  r387.set("questionNumber", 89);
  r387.set("question", "What is dark pattern?");
  r387.set("category", "Technical");
  r387.set("difficulty", "Advanced");
  r387.set("explanation", "Advanced level question for Product Manager (Technical). What is dark pattern?");
  try { app.save(r387); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r388 = new Record(collection);
  r388.set("careerSlug", "product-manager-technical");
  r388.set("questionNumber", 90);
  r388.set("question", "What is ethical product design?");
  r388.set("category", "System Design");
  r388.set("difficulty", "Advanced");
  r388.set("explanation", "Advanced level question for Product Manager (Technical). What is ethical product design?");
  try { app.save(r388); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r389 = new Record(collection);
  r389.set("careerSlug", "product-manager-technical");
  r389.set("questionNumber", 91);
  r389.set("question", "What is accessibility in product?");
  r389.set("category", "Technical");
  r389.set("difficulty", "Advanced");
  r389.set("explanation", "Advanced level question for Product Manager (Technical). What is accessibility in product?");
  try { app.save(r389); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r390 = new Record(collection);
  r390.set("careerSlug", "product-manager-technical");
  r390.set("questionNumber", 92);
  r390.set("question", "What is globalization?");
  r390.set("category", "Technical");
  r390.set("difficulty", "Advanced");
  r390.set("explanation", "Advanced level question for Product Manager (Technical). What is globalization?");
  try { app.save(r390); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r391 = new Record(collection);
  r391.set("careerSlug", "product-manager-technical");
  r391.set("questionNumber", 93);
  r391.set("question", "What is localization from PM perspective?");
  r391.set("category", "Behavioral");
  r391.set("difficulty", "Advanced");
  r391.set("explanation", "Advanced level question for Product Manager (Technical). What is localization from PM perspective?");
  try { app.save(r391); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r392 = new Record(collection);
  r392.set("careerSlug", "product-manager-technical");
  r392.set("questionNumber", 94);
  r392.set("question", "What is compliance in product?");
  r392.set("category", "Technical");
  r392.set("difficulty", "Advanced");
  r392.set("explanation", "Advanced level question for Product Manager (Technical). What is compliance in product?");
  try { app.save(r392); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r393 = new Record(collection);
  r393.set("careerSlug", "product-manager-technical");
  r393.set("questionNumber", 95);
  r393.set("question", "What is GDPR for PMs?");
  r393.set("category", "Technical");
  r393.set("difficulty", "Advanced");
  r393.set("explanation", "Advanced level question for Product Manager (Technical). What is GDPR for PMs?");
  try { app.save(r393); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r394 = new Record(collection);
  r394.set("careerSlug", "product-manager-technical");
  r394.set("questionNumber", 96);
  r394.set("question", "What is product analytics tools (Amplitude, Mixpanel, PostHog)?");
  r394.set("category", "System Design");
  r394.set("difficulty", "Advanced");
  r394.set("explanation", "Advanced level question for Product Manager (Technical). What is product analytics tools (Amplitude, Mixpanel, PostHog)?");
  try { app.save(r394); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r395 = new Record(collection);
  r395.set("careerSlug", "product-manager-technical");
  r395.set("questionNumber", 97);
  r395.set("question", "What is data-informed vs data-driven?");
  r395.set("category", "Technical");
  r395.set("difficulty", "Advanced");
  r395.set("explanation", "Advanced level question for Product Manager (Technical). What is data-informed vs data-driven?");
  try { app.save(r395); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r396 = new Record(collection);
  r396.set("careerSlug", "product-manager-technical");
  r396.set("questionNumber", 98);
  r396.set("question", "What is product intuition?");
  r396.set("category", "Technical");
  r396.set("difficulty", "Advanced");
  r396.set("explanation", "Advanced level question for Product Manager (Technical). What is product intuition?");
  try { app.save(r396); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r397 = new Record(collection);
  r397.set("careerSlug", "product-manager-technical");
  r397.set("questionNumber", 99);
  r397.set("question", "What is hypothesis-driven development?");
  r397.set("category", "Behavioral");
  r397.set("difficulty", "Advanced");
  r397.set("explanation", "Advanced level question for Product Manager (Technical). What is hypothesis-driven development?");
  try { app.save(r397); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r398 = new Record(collection);
  r398.set("careerSlug", "product-manager-technical");
  r398.set("questionNumber", 100);
  r398.set("question", "What is lean startup?");
  r398.set("category", "Technical");
  r398.set("difficulty", "Advanced");
  r398.set("explanation", "Advanced level question for Product Manager (Technical). What is lean startup?");
  try { app.save(r398); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r399 = new Record(collection);
  r399.set("careerSlug", "quantum-computing-engineer");
  r399.set("questionNumber", 1);
  r399.set("question", "What is a qubit?");
  r399.set("category", "Technical");
  r399.set("difficulty", "Beginner");
  r399.set("explanation", "Beginner level question for Quantum Computing Engineer. What is a qubit?");
  try { app.save(r399); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r400 = new Record(collection);
  r400.set("careerSlug", "quantum-computing-engineer");
  r400.set("questionNumber", 2);
  r400.set("question", "What is superposition?");
  r400.set("category", "Technical");
  r400.set("difficulty", "Beginner");
  r400.set("explanation", "Beginner level question for Quantum Computing Engineer. What is superposition?");
  try { app.save(r400); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r401 = new Record(collection);
  r401.set("careerSlug", "quantum-computing-engineer");
  r401.set("questionNumber", 3);
  r401.set("question", "What is entanglement?");
  r401.set("category", "Behavioral");
  r401.set("difficulty", "Beginner");
  r401.set("explanation", "Beginner level question for Quantum Computing Engineer. What is entanglement?");
  try { app.save(r401); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r402 = new Record(collection);
  r402.set("careerSlug", "quantum-computing-engineer");
  r402.set("questionNumber", 4);
  r402.set("question", "What is quantum interference?");
  r402.set("category", "Technical");
  r402.set("difficulty", "Beginner");
  r402.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum interference?");
  try { app.save(r402); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r403 = new Record(collection);
  r403.set("careerSlug", "quantum-computing-engineer");
  r403.set("questionNumber", 5);
  r403.set("question", "What is a quantum gate?");
  r403.set("category", "Technical");
  r403.set("difficulty", "Beginner");
  r403.set("explanation", "Beginner level question for Quantum Computing Engineer. What is a quantum gate?");
  try { app.save(r403); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r404 = new Record(collection);
  r404.set("careerSlug", "quantum-computing-engineer");
  r404.set("questionNumber", 6);
  r404.set("question", "What is the Hadamard gate?");
  r404.set("category", "System Design");
  r404.set("difficulty", "Beginner");
  r404.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the Hadamard gate?");
  try { app.save(r404); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r405 = new Record(collection);
  r405.set("careerSlug", "quantum-computing-engineer");
  r405.set("questionNumber", 7);
  r405.set("question", "What is the CNOT gate?");
  r405.set("category", "Technical");
  r405.set("difficulty", "Beginner");
  r405.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the CNOT gate?");
  try { app.save(r405); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r406 = new Record(collection);
  r406.set("careerSlug", "quantum-computing-engineer");
  r406.set("questionNumber", 8);
  r406.set("question", "What is the Pauli X gate?");
  r406.set("category", "Technical");
  r406.set("difficulty", "Beginner");
  r406.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the Pauli X gate?");
  try { app.save(r406); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r407 = new Record(collection);
  r407.set("careerSlug", "quantum-computing-engineer");
  r407.set("questionNumber", 9);
  r407.set("question", "What is a quantum circuit?");
  r407.set("category", "Behavioral");
  r407.set("difficulty", "Beginner");
  r407.set("explanation", "Beginner level question for Quantum Computing Engineer. What is a quantum circuit?");
  try { app.save(r407); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r408 = new Record(collection);
  r408.set("careerSlug", "quantum-computing-engineer");
  r408.set("questionNumber", 10);
  r408.set("question", "What is measurement in quantum computing?");
  r408.set("category", "Technical");
  r408.set("difficulty", "Beginner");
  r408.set("explanation", "Beginner level question for Quantum Computing Engineer. What is measurement in quantum computing?");
  try { app.save(r408); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r409 = new Record(collection);
  r409.set("careerSlug", "quantum-computing-engineer");
  r409.set("questionNumber", 11);
  r409.set("question", "What is decoherence?");
  r409.set("category", "Technical");
  r409.set("difficulty", "Beginner");
  r409.set("explanation", "Beginner level question for Quantum Computing Engineer. What is decoherence?");
  try { app.save(r409); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r410 = new Record(collection);
  r410.set("careerSlug", "quantum-computing-engineer");
  r410.set("questionNumber", 12);
  r410.set("question", "What is quantum noise?");
  r410.set("category", "System Design");
  r410.set("difficulty", "Beginner");
  r410.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum noise?");
  try { app.save(r410); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r411 = new Record(collection);
  r411.set("careerSlug", "quantum-computing-engineer");
  r411.set("questionNumber", 13);
  r411.set("question", "What is quantum error correction?");
  r411.set("category", "Technical");
  r411.set("difficulty", "Beginner");
  r411.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum error correction?");
  try { app.save(r411); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r412 = new Record(collection);
  r412.set("careerSlug", "quantum-computing-engineer");
  r412.set("questionNumber", 14);
  r412.set("question", "What is the surface code?");
  r412.set("category", "Technical");
  r412.set("difficulty", "Beginner");
  r412.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the surface code?");
  try { app.save(r412); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r413 = new Record(collection);
  r413.set("careerSlug", "quantum-computing-engineer");
  r413.set("questionNumber", 15);
  r413.set("question", "What is NISQ (Noisy Intermediate-Scale Quantum)?");
  r413.set("category", "Behavioral");
  r413.set("difficulty", "Beginner");
  r413.set("explanation", "Beginner level question for Quantum Computing Engineer. What is NISQ (Noisy Intermediate-Scale Quantum)?");
  try { app.save(r413); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r414 = new Record(collection);
  r414.set("careerSlug", "quantum-computing-engineer");
  r414.set("questionNumber", 16);
  r414.set("question", "What is quantum advantage?");
  r414.set("category", "Technical");
  r414.set("difficulty", "Beginner");
  r414.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum advantage?");
  try { app.save(r414); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r415 = new Record(collection);
  r415.set("careerSlug", "quantum-computing-engineer");
  r415.set("questionNumber", 17);
  r415.set("question", "What is quantum supremacy?");
  r415.set("category", "Technical");
  r415.set("difficulty", "Beginner");
  r415.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum supremacy?");
  try { app.save(r415); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r416 = new Record(collection);
  r416.set("careerSlug", "quantum-computing-engineer");
  r416.set("questionNumber", 18);
  r416.set("question", "What is Shor's algorithm?");
  r416.set("category", "System Design");
  r416.set("difficulty", "Beginner");
  r416.set("explanation", "Beginner level question for Quantum Computing Engineer. What is Shor's algorithm?");
  try { app.save(r416); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r417 = new Record(collection);
  r417.set("careerSlug", "quantum-computing-engineer");
  r417.set("questionNumber", 19);
  r417.set("question", "What is Grover's algorithm?");
  r417.set("category", "Technical");
  r417.set("difficulty", "Beginner");
  r417.set("explanation", "Beginner level question for Quantum Computing Engineer. What is Grover's algorithm?");
  try { app.save(r417); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r418 = new Record(collection);
  r418.set("careerSlug", "quantum-computing-engineer");
  r418.set("questionNumber", 20);
  r418.set("question", "What is quantum Fourier transform?");
  r418.set("category", "Technical");
  r418.set("difficulty", "Beginner");
  r418.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum Fourier transform?");
  try { app.save(r418); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r419 = new Record(collection);
  r419.set("careerSlug", "quantum-computing-engineer");
  r419.set("questionNumber", 21);
  r419.set("question", "What is quantum phase estimation?");
  r419.set("category", "Behavioral");
  r419.set("difficulty", "Beginner");
  r419.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum phase estimation?");
  try { app.save(r419); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r420 = new Record(collection);
  r420.set("careerSlug", "quantum-computing-engineer");
  r420.set("questionNumber", 22);
  r420.set("question", "What is VQE (Variational Quantum Eigensolver)?");
  r420.set("category", "Technical");
  r420.set("difficulty", "Beginner");
  r420.set("explanation", "Beginner level question for Quantum Computing Engineer. What is VQE (Variational Quantum Eigensolver)?");
  try { app.save(r420); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r421 = new Record(collection);
  r421.set("careerSlug", "quantum-computing-engineer");
  r421.set("questionNumber", 23);
  r421.set("question", "What is QAOA?");
  r421.set("category", "Technical");
  r421.set("difficulty", "Beginner");
  r421.set("explanation", "Beginner level question for Quantum Computing Engineer. What is QAOA?");
  try { app.save(r421); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r422 = new Record(collection);
  r422.set("careerSlug", "quantum-computing-engineer");
  r422.set("questionNumber", 24);
  r422.set("question", "What is quantum annealing?");
  r422.set("category", "System Design");
  r422.set("difficulty", "Beginner");
  r422.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum annealing?");
  try { app.save(r422); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r423 = new Record(collection);
  r423.set("careerSlug", "quantum-computing-engineer");
  r423.set("questionNumber", 25);
  r423.set("question", "What is D-Wave?");
  r423.set("category", "Technical");
  r423.set("difficulty", "Beginner");
  r423.set("explanation", "Beginner level question for Quantum Computing Engineer. What is D-Wave?");
  try { app.save(r423); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r424 = new Record(collection);
  r424.set("careerSlug", "quantum-computing-engineer");
  r424.set("questionNumber", 26);
  r424.set("question", "What is quantum key distribution (QKD)?");
  r424.set("category", "Technical");
  r424.set("difficulty", "Beginner");
  r424.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum key distribution (QKD)?");
  try { app.save(r424); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r425 = new Record(collection);
  r425.set("careerSlug", "quantum-computing-engineer");
  r425.set("questionNumber", 27);
  r425.set("question", "What is BB84 protocol?");
  r425.set("category", "Behavioral");
  r425.set("difficulty", "Beginner");
  r425.set("explanation", "Beginner level question for Quantum Computing Engineer. What is BB84 protocol?");
  try { app.save(r425); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r426 = new Record(collection);
  r426.set("careerSlug", "quantum-computing-engineer");
  r426.set("questionNumber", 28);
  r426.set("question", "What is quantum teleportation?");
  r426.set("category", "Technical");
  r426.set("difficulty", "Beginner");
  r426.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum teleportation?");
  try { app.save(r426); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r427 = new Record(collection);
  r427.set("careerSlug", "quantum-computing-engineer");
  r427.set("questionNumber", 29);
  r427.set("question", "What is the no-cloning theorem?");
  r427.set("category", "Technical");
  r427.set("difficulty", "Beginner");
  r427.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the no-cloning theorem?");
  try { app.save(r427); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r428 = new Record(collection);
  r428.set("careerSlug", "quantum-computing-engineer");
  r428.set("questionNumber", 30);
  r428.set("question", "What is quantum entanglement in computing?");
  r428.set("category", "System Design");
  r428.set("difficulty", "Beginner");
  r428.set("explanation", "Beginner level question for Quantum Computing Engineer. What is quantum entanglement in computing?");
  try { app.save(r428); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r429 = new Record(collection);
  r429.set("careerSlug", "quantum-computing-engineer");
  r429.set("questionNumber", 31);
  r429.set("question", "What is a density matrix?");
  r429.set("category", "Technical");
  r429.set("difficulty", "Beginner");
  r429.set("explanation", "Beginner level question for Quantum Computing Engineer. What is a density matrix?");
  try { app.save(r429); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r430 = new Record(collection);
  r430.set("careerSlug", "quantum-computing-engineer");
  r430.set("questionNumber", 32);
  r430.set("question", "What is the Bloch sphere?");
  r430.set("category", "Technical");
  r430.set("difficulty", "Beginner");
  r430.set("explanation", "Beginner level question for Quantum Computing Engineer. What is the Bloch sphere?");
  try { app.save(r430); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r431 = new Record(collection);
  r431.set("careerSlug", "quantum-computing-engineer");
  r431.set("questionNumber", 33);
  r431.set("question", "What is Dirac notation (bra-ket)?");
  r431.set("category", "Behavioral");
  r431.set("difficulty", "Beginner");
  r431.set("explanation", "Beginner level question for Quantum Computing Engineer. What is Dirac notation (bra-ket)?");
  try { app.save(r431); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r432 = new Record(collection);
  r432.set("careerSlug", "quantum-computing-engineer");
  r432.set("questionNumber", 34);
  r432.set("question", "What is a Hilbert space?");
  r432.set("category", "Technical");
  r432.set("difficulty", "Intermediate");
  r432.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is a Hilbert space?");
  try { app.save(r432); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r433 = new Record(collection);
  r433.set("careerSlug", "quantum-computing-engineer");
  r433.set("questionNumber", 35);
  r433.set("question", "What is tensor product?");
  r433.set("category", "Technical");
  r433.set("difficulty", "Intermediate");
  r433.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is tensor product?");
  try { app.save(r433); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r434 = new Record(collection);
  r434.set("careerSlug", "quantum-computing-engineer");
  r434.set("questionNumber", 36);
  r434.set("question", "What is quantum parallelism?");
  r434.set("category", "System Design");
  r434.set("difficulty", "Intermediate");
  r434.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum parallelism?");
  try { app.save(r434); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r435 = new Record(collection);
  r435.set("careerSlug", "quantum-computing-engineer");
  r435.set("questionNumber", 37);
  r435.set("question", "What is oracle in quantum computing?");
  r435.set("category", "Technical");
  r435.set("difficulty", "Intermediate");
  r435.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is oracle in quantum computing?");
  try { app.save(r435); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r436 = new Record(collection);
  r436.set("careerSlug", "quantum-computing-engineer");
  r436.set("questionNumber", 38);
  r436.set("question", "What is quantum amplitude amplification?");
  r436.set("category", "Technical");
  r436.set("difficulty", "Intermediate");
  r436.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum amplitude amplification?");
  try { app.save(r436); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r437 = new Record(collection);
  r437.set("careerSlug", "quantum-computing-engineer");
  r437.set("questionNumber", 39);
  r437.set("question", "What is quantum walk?");
  r437.set("category", "Behavioral");
  r437.set("difficulty", "Intermediate");
  r437.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum walk?");
  try { app.save(r437); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r438 = new Record(collection);
  r438.set("careerSlug", "quantum-computing-engineer");
  r438.set("questionNumber", 40);
  r438.set("question", "What is quantum simulation?");
  r438.set("category", "Technical");
  r438.set("difficulty", "Intermediate");
  r438.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum simulation?");
  try { app.save(r438); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r439 = new Record(collection);
  r439.set("careerSlug", "quantum-computing-engineer");
  r439.set("questionNumber", 41);
  r439.set("question", "What is quantum machine learning?");
  r439.set("category", "Technical");
  r439.set("difficulty", "Intermediate");
  r439.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum machine learning?");
  try { app.save(r439); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r440 = new Record(collection);
  r440.set("careerSlug", "quantum-computing-engineer");
  r440.set("questionNumber", 42);
  r440.set("question", "What is quantum neural network?");
  r440.set("category", "System Design");
  r440.set("difficulty", "Intermediate");
  r440.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum neural network?");
  try { app.save(r440); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r441 = new Record(collection);
  r441.set("careerSlug", "quantum-computing-engineer");
  r441.set("questionNumber", 43);
  r441.set("question", "What is PennyLane?");
  r441.set("category", "Technical");
  r441.set("difficulty", "Intermediate");
  r441.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is PennyLane?");
  try { app.save(r441); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r442 = new Record(collection);
  r442.set("careerSlug", "quantum-computing-engineer");
  r442.set("questionNumber", 44);
  r442.set("question", "What is Qiskit?");
  r442.set("category", "Technical");
  r442.set("difficulty", "Intermediate");
  r442.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is Qiskit?");
  try { app.save(r442); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r443 = new Record(collection);
  r443.set("careerSlug", "quantum-computing-engineer");
  r443.set("questionNumber", 45);
  r443.set("question", "What is Cirq?");
  r443.set("category", "Behavioral");
  r443.set("difficulty", "Intermediate");
  r443.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is Cirq?");
  try { app.save(r443); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r444 = new Record(collection);
  r444.set("careerSlug", "quantum-computing-engineer");
  r444.set("questionNumber", 46);
  r444.set("question", "What is Q#?");
  r444.set("category", "Technical");
  r444.set("difficulty", "Intermediate");
  r444.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is Q#?");
  try { app.save(r444); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r445 = new Record(collection);
  r445.set("careerSlug", "quantum-computing-engineer");
  r445.set("questionNumber", 47);
  r445.set("question", "What is the IBM Quantum experience?");
  r445.set("category", "Technical");
  r445.set("difficulty", "Intermediate");
  r445.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is the IBM Quantum experience?");
  try { app.save(r445); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r446 = new Record(collection);
  r446.set("careerSlug", "quantum-computing-engineer");
  r446.set("questionNumber", 48);
  r446.set("question", "What is quantum volume?");
  r446.set("category", "System Design");
  r446.set("difficulty", "Intermediate");
  r446.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum volume?");
  try { app.save(r446); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r447 = new Record(collection);
  r447.set("careerSlug", "quantum-computing-engineer");
  r447.set("questionNumber", 49);
  r447.set("question", "What is circuit depth?");
  r447.set("category", "Technical");
  r447.set("difficulty", "Intermediate");
  r447.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is circuit depth?");
  try { app.save(r447); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r448 = new Record(collection);
  r448.set("careerSlug", "quantum-computing-engineer");
  r448.set("questionNumber", 50);
  r448.set("question", "What is gate fidelity?");
  r448.set("category", "Technical");
  r448.set("difficulty", "Intermediate");
  r448.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is gate fidelity?");
  try { app.save(r448); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r449 = new Record(collection);
  r449.set("careerSlug", "quantum-computing-engineer");
  r449.set("questionNumber", 51);
  r449.set("question", "What is topological quantum computing?");
  r449.set("category", "Behavioral");
  r449.set("difficulty", "Intermediate");
  r449.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is topological quantum computing?");
  try { app.save(r449); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r450 = new Record(collection);
  r450.set("careerSlug", "quantum-computing-engineer");
  r450.set("questionNumber", 52);
  r450.set("question", "What is a logical qubit vs physical qubit?");
  r450.set("category", "Technical");
  r450.set("difficulty", "Intermediate");
  r450.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is a logical qubit vs physical qubit?");
  try { app.save(r450); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r451 = new Record(collection);
  r451.set("careerSlug", "quantum-computing-engineer");
  r451.set("questionNumber", 53);
  r451.set("question", "What is quantum error mitigation?");
  r451.set("category", "Technical");
  r451.set("difficulty", "Intermediate");
  r451.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum error mitigation?");
  try { app.save(r451); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r452 = new Record(collection);
  r452.set("careerSlug", "quantum-computing-engineer");
  r452.set("questionNumber", 54);
  r452.set("question", "What is zero-noise extrapolation?");
  r452.set("category", "System Design");
  r452.set("difficulty", "Intermediate");
  r452.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is zero-noise extrapolation?");
  try { app.save(r452); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r453 = new Record(collection);
  r453.set("careerSlug", "quantum-computing-engineer");
  r453.set("questionNumber", 55);
  r453.set("question", "What is quantum chemistry simulation?");
  r453.set("category", "Technical");
  r453.set("difficulty", "Intermediate");
  r453.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum chemistry simulation?");
  try { app.save(r453); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r454 = new Record(collection);
  r454.set("careerSlug", "quantum-computing-engineer");
  r454.set("questionNumber", 56);
  r454.set("question", "What is the molecular Hamiltonian?");
  r454.set("category", "Technical");
  r454.set("difficulty", "Intermediate");
  r454.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is the molecular Hamiltonian?");
  try { app.save(r454); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r455 = new Record(collection);
  r455.set("careerSlug", "quantum-computing-engineer");
  r455.set("questionNumber", 57);
  r455.set("question", "What is quantum optimization?");
  r455.set("category", "Behavioral");
  r455.set("difficulty", "Intermediate");
  r455.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum optimization?");
  try { app.save(r455); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r456 = new Record(collection);
  r456.set("careerSlug", "quantum-computing-engineer");
  r456.set("questionNumber", 58);
  r456.set("question", "What is quantum finance?");
  r456.set("category", "Technical");
  r456.set("difficulty", "Intermediate");
  r456.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum finance?");
  try { app.save(r456); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r457 = new Record(collection);
  r457.set("careerSlug", "quantum-computing-engineer");
  r457.set("questionNumber", 59);
  r457.set("question", "What is quantum cryptography?");
  r457.set("category", "Technical");
  r457.set("difficulty", "Intermediate");
  r457.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum cryptography?");
  try { app.save(r457); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r458 = new Record(collection);
  r458.set("careerSlug", "quantum-computing-engineer");
  r458.set("questionNumber", 60);
  r458.set("question", "What is post-quantum cryptography?");
  r458.set("category", "System Design");
  r458.set("difficulty", "Intermediate");
  r458.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is post-quantum cryptography?");
  try { app.save(r458); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r459 = new Record(collection);
  r459.set("careerSlug", "quantum-computing-engineer");
  r459.set("questionNumber", 61);
  r459.set("question", "What is lattice-based cryptography?");
  r459.set("category", "Technical");
  r459.set("difficulty", "Intermediate");
  r459.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is lattice-based cryptography?");
  try { app.save(r459); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r460 = new Record(collection);
  r460.set("careerSlug", "quantum-computing-engineer");
  r460.set("questionNumber", 62);
  r460.set("question", "What are quantum computing hardware types (superconducting, trapped ion, photonic)?");
  r460.set("category", "Technical");
  r460.set("difficulty", "Intermediate");
  r460.set("explanation", "Intermediate level question for Quantum Computing Engineer. What are quantum computing hardware types (superconducting, trapped ion, photonic)?");
  try { app.save(r460); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r461 = new Record(collection);
  r461.set("careerSlug", "quantum-computing-engineer");
  r461.set("questionNumber", 63);
  r461.set("question", "What is superconducting qubit?");
  r461.set("category", "Behavioral");
  r461.set("difficulty", "Intermediate");
  r461.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is superconducting qubit?");
  try { app.save(r461); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r462 = new Record(collection);
  r462.set("careerSlug", "quantum-computing-engineer");
  r462.set("questionNumber", 64);
  r462.set("question", "What is trapped ion quantum computer?");
  r462.set("category", "Technical");
  r462.set("difficulty", "Intermediate");
  r462.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is trapped ion quantum computer?");
  try { app.save(r462); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r463 = new Record(collection);
  r463.set("careerSlug", "quantum-computing-engineer");
  r463.set("questionNumber", 65);
  r463.set("question", "What is quantum dot?");
  r463.set("category", "Technical");
  r463.set("difficulty", "Intermediate");
  r463.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum dot?");
  try { app.save(r463); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r464 = new Record(collection);
  r464.set("careerSlug", "quantum-computing-engineer");
  r464.set("questionNumber", 66);
  r464.set("question", "What is photonic quantum computing?");
  r464.set("category", "System Design");
  r464.set("difficulty", "Intermediate");
  r464.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is photonic quantum computing?");
  try { app.save(r464); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r465 = new Record(collection);
  r465.set("careerSlug", "quantum-computing-engineer");
  r465.set("questionNumber", 67);
  r465.set("question", "What is quantum random number generation?");
  r465.set("category", "Technical");
  r465.set("difficulty", "Intermediate");
  r465.set("explanation", "Intermediate level question for Quantum Computing Engineer. What is quantum random number generation?");
  try { app.save(r465); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r466 = new Record(collection);
  r466.set("careerSlug", "quantum-computing-engineer");
  r466.set("questionNumber", 68);
  r466.set("question", "What is quantum sensing?");
  r466.set("category", "Technical");
  r466.set("difficulty", "Advanced");
  r466.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum sensing?");
  try { app.save(r466); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r467 = new Record(collection);
  r467.set("careerSlug", "quantum-computing-engineer");
  r467.set("questionNumber", 69);
  r467.set("question", "What is quantum communication?");
  r467.set("category", "Behavioral");
  r467.set("difficulty", "Advanced");
  r467.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum communication?");
  try { app.save(r467); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r468 = new Record(collection);
  r468.set("careerSlug", "quantum-computing-engineer");
  r468.set("questionNumber", 70);
  r468.set("question", "What is quantum internet?");
  r468.set("category", "Technical");
  r468.set("difficulty", "Advanced");
  r468.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum internet?");
  try { app.save(r468); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r469 = new Record(collection);
  r469.set("careerSlug", "quantum-computing-engineer");
  r469.set("questionNumber", 71);
  r469.set("question", "What is quantum repeater?");
  r469.set("category", "Technical");
  r469.set("difficulty", "Advanced");
  r469.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum repeater?");
  try { app.save(r469); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r470 = new Record(collection);
  r470.set("careerSlug", "quantum-computing-engineer");
  r470.set("questionNumber", 72);
  r470.set("question", "What is quantum memory?");
  r470.set("category", "System Design");
  r470.set("difficulty", "Advanced");
  r470.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum memory?");
  try { app.save(r470); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r471 = new Record(collection);
  r471.set("careerSlug", "quantum-computing-engineer");
  r471.set("questionNumber", 73);
  r471.set("question", "What is quantum transduction?");
  r471.set("category", "Technical");
  r471.set("difficulty", "Advanced");
  r471.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum transduction?");
  try { app.save(r471); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r472 = new Record(collection);
  r472.set("careerSlug", "quantum-computing-engineer");
  r472.set("questionNumber", 74);
  r472.set("question", "What is analog vs digital quantum computing?");
  r472.set("category", "Technical");
  r472.set("difficulty", "Advanced");
  r472.set("explanation", "Advanced level question for Quantum Computing Engineer. What is analog vs digital quantum computing?");
  try { app.save(r472); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r473 = new Record(collection);
  r473.set("careerSlug", "quantum-computing-engineer");
  r473.set("questionNumber", 75);
  r473.set("question", "What is adiabatic quantum computing?");
  r473.set("category", "Behavioral");
  r473.set("difficulty", "Advanced");
  r473.set("explanation", "Advanced level question for Quantum Computing Engineer. What is adiabatic quantum computing?");
  try { app.save(r473); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r474 = new Record(collection);
  r474.set("careerSlug", "quantum-computing-engineer");
  r474.set("questionNumber", 76);
  r474.set("question", "What is the quantum threshold theorem?");
  r474.set("category", "Technical");
  r474.set("difficulty", "Advanced");
  r474.set("explanation", "Advanced level question for Quantum Computing Engineer. What is the quantum threshold theorem?");
  try { app.save(r474); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r475 = new Record(collection);
  r475.set("careerSlug", "quantum-computing-engineer");
  r475.set("questionNumber", 77);
  r475.set("question", "What is fault-tolerant quantum computing?");
  r475.set("category", "Technical");
  r475.set("difficulty", "Advanced");
  r475.set("explanation", "Advanced level question for Quantum Computing Engineer. What is fault-tolerant quantum computing?");
  try { app.save(r475); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r476 = new Record(collection);
  r476.set("careerSlug", "quantum-computing-engineer");
  r476.set("questionNumber", 78);
  r476.set("question", "What is the T gate?");
  r476.set("category", "System Design");
  r476.set("difficulty", "Advanced");
  r476.set("explanation", "Advanced level question for Quantum Computing Engineer. What is the T gate?");
  try { app.save(r476); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r477 = new Record(collection);
  r477.set("careerSlug", "quantum-computing-engineer");
  r477.set("questionNumber", 79);
  r477.set("question", "What is a magic state?");
  r477.set("category", "Technical");
  r477.set("difficulty", "Advanced");
  r477.set("explanation", "Advanced level question for Quantum Computing Engineer. What is a magic state?");
  try { app.save(r477); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r478 = new Record(collection);
  r478.set("careerSlug", "quantum-computing-engineer");
  r478.set("questionNumber", 80);
  r478.set("question", "What is resource estimation for quantum?");
  r478.set("category", "Technical");
  r478.set("difficulty", "Advanced");
  r478.set("explanation", "Advanced level question for Quantum Computing Engineer. What is resource estimation for quantum?");
  try { app.save(r478); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r479 = new Record(collection);
  r479.set("careerSlug", "quantum-computing-engineer");
  r479.set("questionNumber", 81);
  r479.set("question", "What is quantum complexity theory?");
  r479.set("category", "Behavioral");
  r479.set("difficulty", "Advanced");
  r479.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum complexity theory?");
  try { app.save(r479); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r480 = new Record(collection);
  r480.set("careerSlug", "quantum-computing-engineer");
  r480.set("questionNumber", 82);
  r480.set("question", "What is BQP complexity class?");
  r480.set("category", "Technical");
  r480.set("difficulty", "Advanced");
  r480.set("explanation", "Advanced level question for Quantum Computing Engineer. What is BQP complexity class?");
  try { app.save(r480); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r481 = new Record(collection);
  r481.set("careerSlug", "quantum-computing-engineer");
  r481.set("questionNumber", 83);
  r481.set("question", "What is quantum speedup?");
  r481.set("category", "Technical");
  r481.set("difficulty", "Advanced");
  r481.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum speedup?");
  try { app.save(r481); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r482 = new Record(collection);
  r482.set("careerSlug", "quantum-computing-engineer");
  r482.set("questionNumber", 84);
  r482.set("question", "What is polynomial vs exponential speedup?");
  r482.set("category", "System Design");
  r482.set("difficulty", "Advanced");
  r482.set("explanation", "Advanced level question for Quantum Computing Engineer. What is polynomial vs exponential speedup?");
  try { app.save(r482); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r483 = new Record(collection);
  r483.set("careerSlug", "quantum-computing-engineer");
  r483.set("questionNumber", 85);
  r483.set("question", "What is quantum simulation of chemistry?");
  r483.set("category", "Technical");
  r483.set("difficulty", "Advanced");
  r483.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum simulation of chemistry?");
  try { app.save(r483); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r484 = new Record(collection);
  r484.set("careerSlug", "quantum-computing-engineer");
  r484.set("questionNumber", 86);
  r484.set("question", "What is HHL algorithm?");
  r484.set("category", "Technical");
  r484.set("difficulty", "Advanced");
  r484.set("explanation", "Advanced level question for Quantum Computing Engineer. What is HHL algorithm?");
  try { app.save(r484); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r485 = new Record(collection);
  r485.set("careerSlug", "quantum-computing-engineer");
  r485.set("questionNumber", 87);
  r485.set("question", "What is quantum linear systems?");
  r485.set("category", "Behavioral");
  r485.set("difficulty", "Advanced");
  r485.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum linear systems?");
  try { app.save(r485); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r486 = new Record(collection);
  r486.set("careerSlug", "quantum-computing-engineer");
  r486.set("questionNumber", 88);
  r486.set("question", "What is quantum recommendation systems?");
  r486.set("category", "Technical");
  r486.set("difficulty", "Advanced");
  r486.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum recommendation systems?");
  try { app.save(r486); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r487 = new Record(collection);
  r487.set("careerSlug", "quantum-computing-engineer");
  r487.set("questionNumber", 89);
  r487.set("question", "What is quantum natural language processing?");
  r487.set("category", "Technical");
  r487.set("difficulty", "Advanced");
  r487.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum natural language processing?");
  try { app.save(r487); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r488 = new Record(collection);
  r488.set("careerSlug", "quantum-computing-engineer");
  r488.set("questionNumber", 90);
  r488.set("question", "What is variational quantum algorithm?");
  r488.set("category", "System Design");
  r488.set("difficulty", "Advanced");
  r488.set("explanation", "Advanced level question for Quantum Computing Engineer. What is variational quantum algorithm?");
  try { app.save(r488); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r489 = new Record(collection);
  r489.set("careerSlug", "quantum-computing-engineer");
  r489.set("questionNumber", 91);
  r489.set("question", "What is hybrid classical-quantum computing?");
  r489.set("category", "Technical");
  r489.set("difficulty", "Advanced");
  r489.set("explanation", "Advanced level question for Quantum Computing Engineer. What is hybrid classical-quantum computing?");
  try { app.save(r489); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r490 = new Record(collection);
  r490.set("careerSlug", "quantum-computing-engineer");
  r490.set("questionNumber", 92);
  r490.set("question", "What is quantum classical interface?");
  r490.set("category", "Technical");
  r490.set("difficulty", "Advanced");
  r490.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum classical interface?");
  try { app.save(r490); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r491 = new Record(collection);
  r491.set("careerSlug", "quantum-computing-engineer");
  r491.set("questionNumber", 93);
  r491.set("question", "What is quantum cloud computing?");
  r491.set("category", "Behavioral");
  r491.set("difficulty", "Advanced");
  r491.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum cloud computing?");
  try { app.save(r491); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r492 = new Record(collection);
  r492.set("careerSlug", "quantum-computing-engineer");
  r492.set("questionNumber", 94);
  r492.set("question", "What is AWS Braket?");
  r492.set("category", "Technical");
  r492.set("difficulty", "Advanced");
  r492.set("explanation", "Advanced level question for Quantum Computing Engineer. What is AWS Braket?");
  try { app.save(r492); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r493 = new Record(collection);
  r493.set("careerSlug", "quantum-computing-engineer");
  r493.set("questionNumber", 95);
  r493.set("question", "What is Azure Quantum?");
  r493.set("category", "Technical");
  r493.set("difficulty", "Advanced");
  r493.set("explanation", "Advanced level question for Quantum Computing Engineer. What is Azure Quantum?");
  try { app.save(r493); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r494 = new Record(collection);
  r494.set("careerSlug", "quantum-computing-engineer");
  r494.set("questionNumber", 96);
  r494.set("question", "What is Google Quantum AI?");
  r494.set("category", "System Design");
  r494.set("difficulty", "Advanced");
  r494.set("explanation", "Advanced level question for Quantum Computing Engineer. What is Google Quantum AI?");
  try { app.save(r494); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r495 = new Record(collection);
  r495.set("careerSlug", "quantum-computing-engineer");
  r495.set("questionNumber", 97);
  r495.set("question", "What is IonQ?");
  r495.set("category", "Technical");
  r495.set("difficulty", "Advanced");
  r495.set("explanation", "Advanced level question for Quantum Computing Engineer. What is IonQ?");
  try { app.save(r495); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r496 = new Record(collection);
  r496.set("careerSlug", "quantum-computing-engineer");
  r496.set("questionNumber", 98);
  r496.set("question", "What is Rigetti?");
  r496.set("category", "Technical");
  r496.set("difficulty", "Advanced");
  r496.set("explanation", "Advanced level question for Quantum Computing Engineer. What is Rigetti?");
  try { app.save(r496); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r497 = new Record(collection);
  r497.set("careerSlug", "quantum-computing-engineer");
  r497.set("questionNumber", 99);
  r497.set("question", "What is quantum programming language?");
  r497.set("category", "Behavioral");
  r497.set("difficulty", "Advanced");
  r497.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum programming language?");
  try { app.save(r497); } catch(err) { if (!err.message.includes("unique")) throw err; }
  const r498 = new Record(collection);
  r498.set("careerSlug", "quantum-computing-engineer");
  r498.set("questionNumber", 100);
  r498.set("question", "What is quantum assembly language (QASM)?");
  r498.set("category", "Technical");
  r498.set("difficulty", "Advanced");
  r498.set("explanation", "Advanced level question for Quantum Computing Engineer. What is quantum assembly language (QASM)?");
  try { app.save(r498); } catch(err) { if (!err.message.includes("unique")) throw err; }
}, (app) => {});
