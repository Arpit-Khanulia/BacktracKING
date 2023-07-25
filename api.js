const axios = require('axios');

async function fetchData(topicData) {
  try {
    
    console.log('Fetching data for topic: ' + topicData);

    questioncontent = await getProblemsByTopic(topicData);
    return questioncontent;

    console.log('Data fetching complete');
  } catch (error) {
    console.error(error);
    throw new Error('Error occurred during data fetching');
  }
}


// do not give question content , only used to get questions title slug by topic
async function getProblemsByTopic(topicSlug) {
  try {
    const response = await axios.get(`https://leetcode.com/graphql/?operationName=getTopicTagBySlug&variables={"slug":"${topicSlug}"}&query=query getTopicTagBySlug($slug: String!) { topicTag(slug: $slug) { translatedName questions { questionId title titleSlug } } }`);
    const { topicTag } = response.data.data;

    if (topicTag) {
      const dataslug = topicTag.questions.map(x => x.titleSlug);
      return await Promise.all(dataslug.slice(0, 60).map(slug => getProblemContentByTitleSlug(slug)));
    } else {
      console.log('Topic not found');
      return [];
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error occurred during fetching problems by topic');
  }
}


// give title slug and it will give you question detail along with question content.
async function getProblemContentByTitleSlug(titleSlug) {
  try {
    const response = await axios.get(`https://leetcode.com/graphql/?operationName=getQuestionDetail&variables={"titleSlug":"${titleSlug}"}&query=query getQuestionDetail($titleSlug: String!) { question(titleSlug: $titleSlug) { questionId title titleSlug content difficulty } }`);

    const { question } = response.data.data;
    if (question) {
      let data = {
        QuestionID: question.questionId,
        Title: question.title,
        TitleSlug: question.titleSlug,
        Content: question.content,
        Difficulty: question.difficulty
      };
      
      return data;
    } else {
      console.log('Question not found');
      return null;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error occurred during fetching problem content by title slug');
  }
}

module.exports = {fetchData };