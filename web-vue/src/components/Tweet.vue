<template>
  <li class="tweet">
    <strong>{{ tweet.author }}</strong>
    <p>{{ tweet.content }}</p>
    <button type="button" @click="onLike">
      <img src="../assets/like.svg" alt="Like" />
      {{ tweet.likes }}
    </button>
  </li>
</template>
<script>
import api from '@/services/api'
export default {
  name: 'Tweet',
  props: ['tweet'],
  methods: {
    onLike() {
      const { _id } = this.tweet
      api.post(`likes/${_id}`)
    }
  }
}
</script>
<style>
.tweet {
  padding: 20px 20px 0;
  margin: 20px 0 0;
  border-top: 1px solid #eee;
}

.tweet:first-child {
  margin-top: 0;
  padding-top: 0;
  border: 0;
}

.tweet p {
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
}

.tweet button {
  border: 0;
  background: transparent;

  display: flex;
  align-items: center;
  color: #697882;
  cursor: pointer;
}

.tweet button img {
  margin-right: 5px;
}

.tweet button:hover {
  opacity: 0.7;
}
</style>

