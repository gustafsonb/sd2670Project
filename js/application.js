var config1 = {
  "id": '616418364781506560',
  "domId": 'mytweets',
  "maxTweets": 2,
  "enableLinks": true
};

function displayTweets(){
    twitterFetcher.fetch(config1);
}

$(document).ready(displayTweets());
 
