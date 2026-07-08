<script setup lang="ts">
import { ref, computed } from 'vue'
interface Message { id: string; from: string; preview: string; time: string; read: boolean; body: string }
const searchQuery = ref(''), reply = ref(''), selected = ref<Message | null>(null)
const messages = ref<Message[]>([
  { id: '1', from: 'OASIS Team', preview: 'Welcome to the OASIS network!', time: 'Just now', read: false, body: 'Welcome to the OASIS Omniverse! Your avatar is now connected to the network. Explore NFTs, karma, quests and more.' },
  { id: '2', from: 'System', preview: 'Your karma level has increased.', time: '2h ago', read: true, body: 'Congratulations! Your karma level has increased. Keep contributing to the community to unlock new features and NFTs.' },
])
const filtered = computed(() => {
  const q = searchQuery.value.toLowerCase()
  return messages.value.filter(m => m.from.toLowerCase().includes(q) || m.preview.toLowerCase().includes(q))
})
function open(m: Message) { m.read = true; selected.value = { ...m }; reply.value = '' }
function sendReply() { if (!reply.value.trim()) return; reply.value = '' }
</script>
<template>
  <div class="msg-shell">
    <div class="msg-sidebar">
      <div class="msg-search-wrap"><input class="msg-search" type="text" v-model="searchQuery" placeholder="Search messages…" /></div>
      <div class="msg-list">
        <div v-for="m in filtered" :key="m.id" class="msg-item" :class="{ 'msg-item--active': selected?.id === m.id, 'msg-item--unread': !m.read }" @click="open(m)">
          <div class="msg-from">{{ m.from }}</div>
          <div class="msg-preview">{{ m.preview }}</div>
          <div class="msg-time">{{ m.time }}</div>
        </div>
        <div v-if="filtered.length === 0" class="msg-empty">No messages found.</div>
      </div>
    </div>
    <div class="msg-main">
      <template v-if="selected">
        <div class="msg-detail-header"><div class="msg-detail-from">{{ selected.from }}</div><div class="msg-detail-time">{{ selected.time }}</div></div>
        <div class="msg-body">{{ selected.body }}</div>
        <div class="msg-reply-wrap">
          <textarea class="msg-reply-input" v-model="reply" placeholder="Write a reply…" rows="3"></textarea>
          <button class="oasis-btn" :disabled="!reply.trim()" @click="sendReply">Send</button>
        </div>
      </template>
      <div v-else class="msg-placeholder">📬 Select a message to read it</div>
    </div>
  </div>
</template>
<style scoped>
.msg-shell{display:grid;grid-template-columns:280px 1fr;height:480px;border:1px solid rgba(0,200,255,.15);border-radius:12px;overflow:hidden}.msg-sidebar{border-right:1px solid rgba(0,200,255,.1);display:flex;flex-direction:column}.msg-search-wrap{padding:12px;border-bottom:1px solid rgba(0,200,255,.1)}.msg-search{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(0,200,255,.2);border-radius:8px;padding:8px 12px;color:#fff;font-size:13px;outline:none;box-sizing:border-box}.msg-list{flex:1;overflow-y:auto}.msg-item{padding:12px 14px;border-bottom:1px solid rgba(0,200,255,.07);cursor:pointer;transition:background .15s}.msg-item:hover{background:rgba(0,200,255,.06)}.msg-item--active{background:rgba(0,200,255,.1);border-left:3px solid #00c8ff}.msg-item--unread .msg-from{font-weight:700}.msg-from{font-size:13px;color:#e0f0ff;margin-bottom:3px}.msg-preview{font-size:12px;color:#7a9bbf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.msg-time{font-size:11px;color:#4a6a88;margin-top:4px}.msg-empty{padding:24px;text-align:center;color:#4a6a88;font-size:13px}.msg-main{display:flex;flex-direction:column;background:rgba(0,0,0,.2)}.msg-placeholder{display:flex;align-items:center;justify-content:center;flex:1;color:#4a6a88;font-size:14px}.msg-detail-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid rgba(0,200,255,.1)}.msg-detail-from{font-family:'Orbitron',sans-serif;font-size:14px;color:#fff}.msg-detail-time{font-size:12px;color:#4a6a88}.msg-body{flex:1;padding:20px;font-size:14px;color:#a8bfd8;line-height:1.7;overflow-y:auto}.msg-reply-wrap{padding:16px;border-top:1px solid rgba(0,200,255,.1);display:flex;flex-direction:column;gap:10px}.msg-reply-input{width:100%;background:rgba(255,255,255,.05);border:1px solid rgba(0,200,255,.2);border-radius:8px;padding:10px 14px;color:#fff;font-size:13px;outline:none;resize:none;box-sizing:border-box;font-family:inherit}.oasis-btn{align-self:flex-end;background:linear-gradient(135deg,#00c8ff,#0080ff);border:none;border-radius:8px;color:#fff;font-family:'Orbitron',sans-serif;font-size:12px;font-weight:700;letter-spacing:.08em;padding:9px 24px;cursor:pointer;transition:opacity .2s}.oasis-btn:disabled{opacity:.4;cursor:not-allowed}
</style>
