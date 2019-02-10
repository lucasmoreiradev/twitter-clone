<template>
  <div class="timeline-wrapper">
    <img src="../assets/twitter.svg" alt="TwitterLogo" height="24">
    <form>
      <textarea
       placeholder="O que está acontecendo?" 
       v-model="newTweet"
       @keyup.enter="onNewTweet"/>
    </form>
    <li class="tweet-list">
      <Tweet
        :tweet="tweet"
        v-for="tweet in tweets"
        :key="tweet._id"
      />
    </li>
  </div>
</template>
<script>
import Tweet from '@/components/Tweet.vue'
import api from '@/services/api'

export default {
  name: 'Timeline',
  components: { Tweet },
  data() {
    return {
      tweets: [],
      newTweet: ''
    }
  },
  async mounted() {
    const response = await api.get('tweets')
    this.tweets = response.data
  },
  sockets: {
    tweet(data) {
      this.tweets = [data, ...this.tweets]
    },
    like(data) {
      this.tweets = this.tweets.map(tweet => tweet._id === data._id ? data : tweet)
    }    
  },
  methods: {
    async onNewTweet() {
      const content = this.newTweet
      const author = localStorage.getItem('@TwitterCloneVue:username')
      await api.post('tweets', { content, author })
      this.newTweet = ''
    }
  }
}
</script>
<style>
.timeline-wrapper {
  width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.timeline-wrapper form {
  width: 100%;
  background: #e9f1f6;
  padding: 20px;
  border-radius: 5px;
  margin: 30px 0;
}

.timeline-wrapper form textarea {
  border: 3px solid #d8e5ed;
  border-radius: 5px;
  font-size: 14px;
  padding: 15px;
  width: 100%;
  resize: none;
}

.tweet-list {
  list-style: none;
  color: #1c2022;
}
</style>