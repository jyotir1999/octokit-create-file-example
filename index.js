const { Octokit } = require("@octokit/rest");
const { Base64 } = require("js-base64");
// const fs = require("fs");

require("dotenv").config();

const octokit = new Octokit({
  auth: process.env.GITHUB_ACCESS_TOKEN,
});

const main = async () => {
  try {
    const content = "Select * from table;";
    const contentEncoded = Base64.encode(content);

    const { data } = await octokit.repos.createOrUpdateFileContents({
      // replace the owner and email with your own details
      owner: "jyotir1999",
      repo: "octokit-create-file-example",
      path: "OUTPUT.sql",
      message: "feat: Added OUTPUT.sql programatically",
      content: contentEncoded,
      committer: {
        name: "Jyotirmoy",
        email: "jyotirmaypathak22@gmail.com",
      },
      author: {
        name: "Jyotirmoy",
        email: "jyotirmaypathak22@gmail.com",
      },
    });

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

main();